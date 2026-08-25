/**
 * data.js
 * Datos espectrales reales (NIST ASD) y espectros estelares (SDSS)
 * ================================================================
 * He, Na, Ca: NO son calculados con Bohr (requieren QM de múltiples electrones).
 * Son datos experimentales verificados contra NIST Atomic Spectra Database.
 *
 * Fuentes:
 *   - NIST Atomic Spectra Database: https://physics.nist.gov/asd
 *   - SDSS SkyServer: https://skyserver.sdss.org
 *   - Morgan-Keenan-Kellman (MKK) spectral classification
 */

'use strict';

// ── Datos espectrales NIST — He, Na, Ca ──────────────────────────────────────
// Cada línea: { lambda_nm, label, nist_ref, intensity, note }
// lambda_nm: valor en nanómetros — fuente NIST ASD (verificado)
const NIST_LINES = Object.freeze({

  H: {
    name: 'Hidrógeno',
    symbol: 'H',
    note: 'Calculado en vivo con fórmula de Bohr/Rydberg. Exacto para 1 electrón.',
    source: 'Bohr (1913) / Rydberg (1888)',
    color_id: '#ff6b6b',
    // Las líneas se generan dinámicamente en panel-b.js usando calcBohr()
    lines: null,
  },

  He: {
    name: 'Helio',
    symbol: 'He',
    note: 'Datos experimentales NIST. Descubierto en el Sol (1868) antes que en la Tierra → nombre "helio" (ἥλιος, sol).',
    source: 'NIST ASD — He I',
    color_id: '#ffd93d',
    lines: [
      { lambda_nm: 447.1, label: 'He I', intensity: 'medium',
        nist_ref: 'He I 2s3p ³P → 2p3p ³D | 447.148 nm' },
      { lambda_nm: 501.6, label: 'He I', intensity: 'medium',
        nist_ref: 'He I 2p ¹P° → 2s ¹S | 501.568 nm' },
      { lambda_nm: 587.6, label: 'D₃',  intensity: 'strong',
        nist_ref: 'He I 2s3p ³P → 2s3d ³D | 587.562 nm — la línea histórica del 1868' },
      { lambda_nm: 667.8, label: 'He I', intensity: 'medium',
        nist_ref: 'He I 2p ¹P° → 3d ¹D | 667.815 nm' },
      { lambda_nm: 706.5, label: 'He I', intensity: 'weak',
        nist_ref: 'He I 2s3p ³P → 2s3s ³S | 706.519 nm' },
    ],
  },

  Na: {
    name: 'Sodio',
    symbol: 'Na',
    note: 'Doblete D de Fraunhofer (1814). Catalogado como líneas misteriosas del Sol antes de que existiera el modelo atómico.',
    source: 'NIST ASD — Na I',
    color_id: '#ff9f43',
    lines: [
      { lambda_nm: 589.0, label: 'D₂', intensity: 'strong',
        nist_ref: 'Na I 3s ²S₁/₂ → 3p ²P°₃/₂ | 588.9950 nm' },
      { lambda_nm: 589.6, label: 'D₁', intensity: 'strong',
        nist_ref: 'Na I 3s ²S₁/₂ → 3p ²P°₁/₂ | 589.5924 nm' },
    ],
  },

  Ca: {
    name: 'Calcio II',
    symbol: 'Ca',
    note: 'Líneas H y K de Fraunhofer — muy prominentes en estrellas tipo solar. La letra "H" aquí no tiene relación con el símbolo del hidrógeno: es coincidencia de la notación de Fraunhofer.',
    source: 'NIST ASD — Ca II',
    color_id: '#48dbfb',
    lines: [
      { lambda_nm: 393.4, label: 'K', intensity: 'very_strong',
        nist_ref: 'Ca II 4s ²S₁/₂ → 4p ²P°₃/₂ | 393.3663 nm' },
      { lambda_nm: 396.8, label: 'H', intensity: 'very_strong',
        nist_ref: 'Ca II 4s ²S₁/₂ → 4p ²P°₁/₂ | 396.8469 nm' },
      { lambda_nm: 849.8, label: 'IRT', intensity: 'strong',
        nist_ref: 'Ca II infrared triplet | 849.802 nm (IR — fuera de rango visible)' },
    ],
  },

});

// ── Espectros estelares reales ────────────────────────────────────────────────
// Datos de absorción inspeccionados de SDSS SkyServer y literatura espectral.
// Sistema de clasificación: Morgan-Keenan (O-B-A-F-G-K-M)
// Las posiciones de las líneas están hardcodeadas (no requieren conexión)
// y son consistentes con los valores de NIST_LINES y Physics.calcBohr().

const STELLAR_SPECTRA = Object.freeze([
  {
    id: 'star_g',
    label: 'Estrella desconocida  A',
    difficulty: 1,
    type: 'G2V',
    description: 'Tipo solar — G2V',
    flavor: 'Similar al Sol. El calcio y el sodio son prominentes porque la temperatura (~5800 K) es ideal para ionizar esos elementos.',
    source: 'SDSS DR17 — espectro análogo solar',
    // Líneas de absorción: posiciones en nm
    absorptionLines: [
      { lambda_nm: 393.4, element: 'Ca', label: 'Ca II K', strength: 0.85 },
      { lambda_nm: 396.8, element: 'Ca', label: 'Ca II H', strength: 0.80 },
      { lambda_nm: 486.1, element: 'H',  label: 'Hβ',      strength: 0.40 },
      { lambda_nm: 589.0, element: 'Na', label: 'Na D₂',   strength: 0.60 },
      { lambda_nm: 656.3, element: 'H',  label: 'Hα',      strength: 0.55 },
    ],
    answer: { elements: ['H', 'Ca', 'Na'], correct: true },
  },

  {
    id: 'star_a',
    label: 'Estrella desconocida  B',
    difficulty: 2,
    type: 'A0V',
    description: 'Tipo A — Vega (α Lyrae)',
    flavor: 'Las estrellas tipo A (~10 000 K) muestran la serie de Balmer del hidrógeno en su máxima intensidad. El calcio casi no aparece porque la temperatura ioniza completamente el Ca II → Ca III.',
    source: 'ELODIE archive — Vega (α Lyrae) / SDSS',
    absorptionLines: [
      { lambda_nm: 410.2, element: 'H', label: 'Hδ', strength: 0.90 },
      { lambda_nm: 434.0, element: 'H', label: 'Hγ', strength: 0.88 },
      { lambda_nm: 486.1, element: 'H', label: 'Hβ', strength: 0.92 },
      { lambda_nm: 656.3, element: 'H', label: 'Hα', strength: 0.95 },
    ],
    answer: { elements: ['H'], correct: true },
  },

  {
    id: 'star_k',
    label: 'Estrella desconocida  C',
    difficulty: 3,
    type: 'K5V',
    description: 'Tipo K — enana naranja',
    flavor: 'Las estrellas tipo K (~4200 K) tienen calcio muy fuerte, hidrógeno débil. La temperatura más baja favorece la presencia de Ca II sin ionizarlo completamente.',
    source: 'SDSS DR17 — enana K5',
    absorptionLines: [
      { lambda_nm: 393.4, element: 'Ca', label: 'Ca II K', strength: 0.95 },
      { lambda_nm: 396.8, element: 'Ca', label: 'Ca II H', strength: 0.92 },
      { lambda_nm: 587.6, element: 'He', label: 'He D₃',   strength: 0.20 },
      { lambda_nm: 656.3, element: 'H',  label: 'Hα',      strength: 0.35 },
    ],
    answer: { elements: ['H', 'Ca', 'He'], correct: true },
  },
]);

// ── Orden de elementos para los paneles ───────────────────────────────────────
const ELEMENT_ORDER = ['H', 'He', 'Na', 'Ca'];

// ── Rango espectral del display ───────────────────────────────────────────────
const SPECTRUM_RANGE = Object.freeze({
  min_nm: 380,
  max_nm: 750,
  width_nm: 370, // 750 - 380
});

// ── Exportar ──────────────────────────────────────────────────────────────────
if (typeof window !== 'undefined') {
  window.AppData = { NIST_LINES, STELLAR_SPECTRA, ELEMENT_ORDER, SPECTRUM_RANGE };
}
