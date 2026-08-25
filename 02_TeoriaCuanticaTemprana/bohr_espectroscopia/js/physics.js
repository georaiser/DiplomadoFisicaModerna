/**
 * physics.js  v2
 * Motor de cálculo físico — Modelo de Bohr / Fórmula de Rydberg
 * ================================================================
 * EXTENSIÓN: calcBohr(ni, nf, Z=1) acepta número atómico Z.
 * Para Z > 1: átomos hidrogenoides (1 electrón, carga nuclear Z).
 *   E_n(Z) = −13.606 × Z² / n²  eV
 *   λ(Z)   = λ_H / Z²
 * Física exacta para He⁺ (Z=2), Li²⁺ (Z=3), Be³⁺ (Z=4).
 *
 * Constantes CODATA 2018:
 *   Ry  = 13.605693 eV
 *   h   = 4.135667696 × 10⁻¹⁵ eV·s
 *   c   = 2.99792458 × 10⁸ m/s
 */

'use strict';

const PHYSICS = Object.freeze({
  Ry_eV:  13.605693,
  h_eVs:  4.135667696e-15,
  c_ms:   2.99792458e8,
  R_H:    1.0967758e7,
  a0_m:   5.29177210903e-11,
});

/* ── Átomos hidrogenoides: etiquetas por Z ─────────────────────── */
const HYDROGENOID_LABEL = Object.freeze({
  1: { symbol: 'H',    name: 'Hidrógeno',               ion: '' },
  2: { symbol: 'He⁺',  name: 'Helio ionizado',           ion: 'He⁺' },
  3: { symbol: 'Li²⁺', name: 'Litio doblemente ionizado', ion: 'Li²⁺' },
  4: { symbol: 'Be³⁺', name: 'Berilio tripl. ionizado',  ion: 'Be³⁺' },
});

/* ══════════════════════════════════════════════════════════════════
   calcBohr(ni, nf, Z=1)
   Calcula ΔE y λ para la transición ni→nf de un átomo hidrogenoide
   con carga nuclear Z. Exacto para 1 electrón.
   ══════════════════════════════════════════════════════════════════ */
function calcBohr(ni, nf, Z = 1) {
  if (!Number.isInteger(ni) || !Number.isInteger(nf) || ni <= nf || nf < 1) {
    throw new RangeError(`Transición inválida: ni=${ni}, nf=${nf}.`);
  }
  if (!Number.isInteger(Z) || Z < 1 || Z > 10) {
    throw new RangeError(`Z inválido: ${Z}. Debe ser entero ≥ 1.`);
  }

  // ΔE = Z² × Ry × (1/nf² − 1/ni²)   [eV]
  const deltaE_eV = PHYSICS.Ry_eV * Z * Z * (1 / (nf * nf) - 1 / (ni * ni));
  // λ = hc / ΔE   [m → nm]
  const lambda_nm = (PHYSICS.h_eVs * PHYSICS.c_ms) / deltaE_eV * 1e9;

  return {
    ni, nf, Z,
    deltaE_eV,
    lambda_nm,
    region:     spectralRegion(lambda_nm),
    seriesName: seriesName(nf),
    lineName:   Z === 1 ? hydrogenLineName(ni, nf) : null,
    ionLabel:   HYDROGENOID_LABEL[Z] ?? { symbol: `Z=${Z}`, name: `Z=${Z}`, ion: `Z=${Z}` },
  };
}

/* ── Energía del nivel n para carga Z ──────────────────────────── */
function calcEnergy(n, Z = 1) {
  return -PHYSICS.Ry_eV * Z * Z / (n * n);
}

/* ── Radio de Bohr para nivel n (en unidades de a₀) ─────────────── */
function calcRadius(n, Z = 1) {
  return (n * n) / Z; // en unidades de a₀
}

/* ── Serie de Balmer para Z dado ───────────────────────────────── */
function balmerSeries(Z = 1) {
  const transitions = [];
  for (let ni = 3; ni <= 9; ni++) {
    try {
      const r = calcBohr(ni, 2, Z);
      transitions.push(r);
    } catch(_) {}
  }
  return transitions;
}

/* ── Región espectral ───────────────────────────────────────────── */
function spectralRegion(lambda_nm) {
  if (lambda_nm < 10)    return 'Rayos X';
  if (lambda_nm < 121)   return 'UV lejano';
  if (lambda_nm < 200)   return 'UV vacío';
  if (lambda_nm < 380)   return 'Ultravioleta';
  if (lambda_nm <= 750)  return 'Visible';
  if (lambda_nm <= 2500) return 'Infrarrojo cercano';
  return 'Infrarrojo';
}

/* ── Serie ──────────────────────────────────────────────────────── */
function seriesName(nf) {
  const series = { 1: 'Lyman', 2: 'Balmer', 3: 'Paschen', 4: 'Brackett', 5: 'Pfund' };
  return series[nf] ?? `nf = ${nf}`;
}

/* ── Nombre de línea de Balmer (solo H, Z=1) ────────────────────── */
function hydrogenLineName(ni, nf) {
  if (nf !== 2) return null;
  const names = { 3: 'Hα', 4: 'Hβ', 5: 'Hγ', 6: 'Hδ', 7: 'Hε', 8: 'Hζ', 9: 'Hη' };
  return names[ni] ?? `H(${ni}→2)`;
}

/* ══════════════════════════════════════════════════════════════════
   wavelengthToCSS(lambda_nm)
   Convierte λ en nm a color CSS (Bruton 1996) + metadatos.
   ══════════════════════════════════════════════════════════════════ */
function wavelengthToCSS(lambda_nm) {
  const l = lambda_nm;

  if (l < 10)   return { css: 'rgb(200,200,255)', hex: '#c8c8ff', label: 'Rayos X',    isVisible: false };
  if (l < 380)  return { css: 'rgb(140, 60,200)', hex: '#8c3cc8', label: 'Ultravioleta', isVisible: false };
  if (l > 750)  return { css: 'rgb(160, 40, 30)', hex: '#a0281e', label: 'Infrarrojo',   isVisible: false };

  let r = 0, g = 0, b = 0;

  if      (l >= 380 && l < 440) { r = -(l - 440) / (440 - 380); g = 0; b = 1.0; }
  else if (l >= 440 && l < 490) { r = 0; g = (l - 440) / (490 - 440); b = 1.0; }
  else if (l >= 490 && l < 510) { r = 0; g = 1.0; b = -(l - 510) / (510 - 490); }
  else if (l >= 510 && l < 580) { r = (l - 510) / (580 - 510); g = 1.0; b = 0; }
  else if (l >= 580 && l < 645) { r = 1.0; g = -(l - 645) / (645 - 580); b = 0; }
  else if (l >= 645 && l <= 750){ r = 1.0; g = 0; b = 0; }

  let factor = 1.0;
  if      (l >= 380 && l < 420)  factor = 0.3 + 0.7 * (l - 380) / (420 - 380);
  else if (l >= 700 && l <= 750) factor = 0.3 + 0.7 * (750 - l) / (750 - 700);

  r = Math.round(255 * Math.pow(r * factor, 0.8));
  g = Math.round(255 * Math.pow(g * factor, 0.8));
  b = Math.round(255 * Math.pow(b * factor, 0.8));

  const hex = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
  return { css: `rgb(${r},${g},${b})`, hex, label: 'Visible', isVisible: true };
}

/* ══════════════════════════════════════════════════════════════════
   Intensidad relativa de líneas según temperatura estelar
   Modelo pedagógico simplificado basado en Saha-Boltzmann.
   No es un modelo de atmósfera completo — se documenta en la UI.
   ══════════════════════════════════════════════════════════════════ */

/**
 * relativeIntensity(element, T_K)
 * Devuelve [0, 1] — intensidad relativa de absorción de cada elemento
 * a temperatura estelar T_K. Útil para animar Panel C.
 *
 * Física simplificada:
 *  - H Balmer: requiere H neutro Y excitado a n=2. Pico ~9500K.
 *    Por encima de ~15000K el H se ioniza y las líneas debilitan.
 *  - He neutro: requiere T > 10000K para excitación; ioniza >30000K.
 *  - Ca II: ion estable 4000–8000K. Máximo ~5500K.
 *  - Na I: neutro dominante 3500–6500K. Máximo ~5000K.
 */
function relativeIntensity(element, T_K) {
  function gauss(x, mu, sigma) {
    return Math.exp(-0.5 * ((x - mu) / sigma) ** 2);
  }
  const T = T_K;
  switch (element) {
    case 'H':
      // Balmer: pico 9500K, baja en ambos extremos
      return gauss(T, 9500, 5500) * (T < 4000 ? 0.05 : 1);

    case 'He':
      // He neutro: visible 10000–30000K
      return gauss(T, 18000, 8000) * (T < 8000 ? 0 : 1);

    case 'Na':
      // Na neutro: solo a baja T
      return gauss(T, 4800, 1800) * (T > 8000 ? 0.02 : 1);

    case 'Ca':
      // Ca II: clásico de estrellas tipo G/K
      return gauss(T, 5500, 2200) * (T > 10000 ? 0.05 : 1);

    default:
      return 0;
  }
}

/**
 * spectralClass(T_K)
 * Devuelve la clase espectral MK y color de temperatura.
 */
function spectralClass(T_K) {
  if (T_K >= 30000) return { cls: 'O', color: 'hsl(220,100%,85%)', desc: 'Supergigante azul' };
  if (T_K >= 10000) return { cls: 'B', color: 'hsl(210,80%,80%)',  desc: 'Azul-blanca' };
  if (T_K >= 7500)  return { cls: 'A', color: 'hsl(200,30%,88%)',  desc: 'Blanca (Vega, Sirio)' };
  if (T_K >= 6000)  return { cls: 'F', color: 'hsl(55,70%,85%)',   desc: 'Amarillo-blanca' };
  if (T_K >= 5200)  return { cls: 'G', color: 'hsl(47,90%,75%)',   desc: 'Amarilla (Sol ~5780 K)' };
  if (T_K >= 3700)  return { cls: 'K', color: 'hsl(30,90%,68%)',   desc: 'Naranja' };
  return              { cls: 'M', color: 'hsl(10,80%,60%)',   desc: 'Roja (enana/gigante)' };
}

/* ── Exportar ───────────────────────────────────────────────────── */
if (typeof window !== 'undefined') {
  window.Physics = {
    PHYSICS,
    HYDROGENOID_LABEL,
    calcBohr,
    calcEnergy,
    calcRadius,
    balmerSeries,
    wavelengthToCSS,
    spectralRegion,
    relativeIntensity,
    spectralClass,
  };
}
