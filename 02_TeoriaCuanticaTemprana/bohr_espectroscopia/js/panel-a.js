/**
 * panel-a.js  v3
 * Panel A — Calculadora de Bohr: diagrama de niveles de energía + animación
 * =========================================================================
 * DIAGRAMA CON EJE ROTO (broken-axis) — estándar en espectroscopía:
 *   Zona superior (70% del alto): n=2..6 y E=0, con escala propia.
 *   Zona inferior (25% del alto): n=1 (E=-13.6 eV) separada por marcador de corte.
 *   Esto evita el espacio vacío causado por la separación física real entre n=1 y n=2.
 *
 * FOTÓN: onda sinusoidal propagándose hacia la derecha con color real de λ.
 */

'use strict';

const PanelA = (() => {

  let state = { ni: 3, nf: 2, Z: 1 };
  let animFrame = null;
  let animState = null;

  let canvas, ctx;
  let selNi, selNf, warnEl;
  let elDeltaE, elLambda, elRegion, elLineName, elSeries;
  let elFormulaLive, elFormulaLiveValue, elPhotonDot, elPhotonLegend;

  // Layout del canvas
  const PAD = { top: 24, bottom: 24, left: 52, right: 68, break: 22 };
  const N_MAX = 6;

  // Fracción del alto total asignada a cada zona
  const ZONE1_FRAC = 0.70;  // zona superior: n=2..6 + E=0
  const ZONE2_FRAC = 0.25;  // zona inferior: n=1

  /* ═══════════════════════════════════════════════════════════
     COORDENADAS CON EJE ROTO
     ═══════════════════════════════════════════════════════════ */

  /**
   * Convierte energía (eV) a coordenada Y en el canvas.
   * @param {number} E_eV   Energía del nivel
   * @param {number} h      Altura del canvas (px, en unidades lógicas)
   * @param {boolean} isN1  Si es el nivel n=1 (zona inferior)
   */
  function energyToY(E_eV, h, isN1 = false) {
    const Z = state.Z;
    // Espacio disponible para cada zona
    const zone1H = (h - PAD.top - PAD.bottom - PAD.break) * ZONE1_FRAC;
    const zone2H = (h - PAD.top - PAD.bottom - PAD.break) * ZONE2_FRAC;

    // Comienzos de cada zona (Y)
    const zone1Top = PAD.top;
    const zone2Top = PAD.top + zone1H + PAD.break;

    if (isN1) {
      return zone2Top + zone2H * 0.55;
    }

    // Zona superior: n=2..6 — rango según Z²
    const E_2   = Physics.calcEnergy(2, Z);   // -3.40 × Z² eV
    const E_max = 0.5 * Z * Z;               // margen superior escala con Z²
    return zone1Top + zone1H * (1 - (E_eV - E_2) / (E_max - E_2));
  }

  function getLevelY(n, h) {
    return energyToY(Physics.calcEnergy(n, state.Z), h, n === 1);
  }

  /* ═══════════════════════════════════════════════════════════
     DIBUJO
     ═══════════════════════════════════════════════════════════ */

  function draw() {
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    drawBackground(w, h);
    drawContinuum(w, h);
    drawBreakMarker(w, h);
    drawLevels(w, h);
    drawTransitionArrow(w, h);

    if (animState) {
      drawElectron(w, h, animState.electronY);
      drawPhotonWave(w, h, animState.photonX, animState.photonY, animState.color, animState.waveT);
    } else {
      drawElectronStatic(w, h);
    }
  }

  function drawBackground(w, h) {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'hsl(228,30%,6%)');
    grad.addColorStop(1, 'hsl(228,25%,4%)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  /* Continuo (E = 0) */
  function drawContinuum(w, h) {
    const y0 = energyToY(0, h);
    ctx.save();
    ctx.setLineDash([4, 6]);
    ctx.strokeStyle = 'hsla(220,15%,38%,0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PAD.left, y0);
    ctx.lineTo(w - PAD.right + 8, y0);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = 'hsla(220,14%,42%,0.7)';
    ctx.font = `400 9px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'right';
    ctx.fillText('E = 0  (ionización)', w - 4, y0 - 5);
    ctx.restore();
  }

  /* Marcador de eje roto — zigzag entre zona 1 y zona 2 */
  function drawBreakMarker(w, h) {
    const zone1H = (h - PAD.top - PAD.bottom - PAD.break) * ZONE1_FRAC;
    const breakY  = PAD.top + zone1H;

    ctx.save();
    ctx.strokeStyle = 'hsla(220,14%,28%,0.6)';
    ctx.lineWidth = 1;

    // Línea horizontal superior del corte
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(PAD.left - 8, breakY + 2);
    ctx.lineTo(w - PAD.right + 8, breakY + 2);
    ctx.stroke();

    // Zigzag central como indicador visual de corte
    ctx.setLineDash([]);
    ctx.strokeStyle = 'hsla(220,14%,32%,0.55)';
    const midX  = w / 2;
    const ampY  = 4;
    const steps = 10;
    const segW  = 6;
    ctx.beginPath();
    ctx.moveTo(midX - steps * segW / 2, breakY + PAD.break / 2);
    for (let i = 0; i < steps; i++) {
      const x = midX - steps * segW / 2 + i * segW;
      const y = breakY + PAD.break / 2 + (i % 2 === 0 ? -ampY : ampY);
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Nota textual del corte
    ctx.fillStyle = 'hsla(220,14%,32%,0.55)';
    ctx.font = `400 8px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'left';
    ctx.fillText('// eje roto //', 6, breakY + PAD.break / 2 + 3);

    ctx.restore();
  }

  /* Niveles de energía */
  function drawLevels(w, h) {
    const lineX0 = PAD.left;
    const lineX1 = w - PAD.right;

    for (let n = 1; n <= N_MAX; n++) {
      const y    = getLevelY(n, h);
      const E    = Physics.calcEnergy(n, state.Z);
      const isNi = n === state.ni;
      const isNf = n === state.nf;
      const isActive = isNi || isNf;

      ctx.save();

      // Brillo de fondo para nivel activo
      if (isActive) {
        const grad = ctx.createLinearGradient(lineX0, 0, lineX1, 0);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, isNi
          ? 'hsla(195,100%,65%,0.07)'
          : 'hsla(195,70%,60%,0.05)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(lineX0, y - 8, lineX1 - lineX0, 16);
      }

      // Línea del nivel
      ctx.lineWidth = isActive ? 1.8 : 1;
      ctx.strokeStyle = isNi
        ? 'hsla(195,100%,68%,0.95)'
        : isNf
          ? 'hsla(195,80%,58%,0.75)'
          : 'hsla(220,18%,30%,0.65)';

      ctx.beginPath();
      ctx.moveTo(lineX0, y);
      ctx.lineTo(lineX1, y);
      ctx.stroke();

      // Etiqueta n= (izquierda)
      ctx.fillStyle = isActive
        ? 'hsla(195,100%,78%,0.95)'
        : 'hsla(220,14%,42%,0.7)';
      ctx.font = isActive
        ? `600 11px 'JetBrains Mono', monospace`
        : `400 10px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'right';
      ctx.fillText(`n=${n}`, lineX0 - 5, y + 4);

      // Energía (derecha)
      ctx.fillStyle = isActive
        ? 'hsla(220,14%,55%,0.9)'
        : 'hsla(220,14%,36%,0.65)';
      ctx.font = `400 9px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'left';
      ctx.fillText(`${E.toFixed(2)} eV`, lineX1 + 4, y + 4);

      ctx.restore();
    }
  }

  /* Flecha de transición entre ni y nf */
  function drawTransitionArrow(w, h) {
    if (state.ni <= state.nf) return;
    if (animState) return; // durante animación se suprime

    const arrowX = PAD.left + (w - PAD.left - PAD.right) * 0.25;
    const yNi    = getLevelY(state.ni, h);
    const yNf    = getLevelY(state.nf, h);

    // Solo dibujar si ambos están en la misma zona (no cruzar el break)
    const bothInZone1 = state.ni >= 2 && state.nf >= 2;
    const bothInZone2 = state.ni === 1 && state.nf === 1;
    if (!bothInZone1 && !bothInZone2) return;

    ctx.save();
    ctx.strokeStyle = 'hsla(220,14%,50%,0.35)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(arrowX, yNi);
    ctx.lineTo(arrowX, yNf);
    ctx.stroke();
    ctx.setLineDash([]);

    // Punta de flecha
    ctx.fillStyle = 'hsla(220,14%,50%,0.4)';
    ctx.beginPath();
    ctx.moveTo(arrowX, yNf + 6);
    ctx.lineTo(arrowX - 4, yNf - 2);
    ctx.lineTo(arrowX + 4, yNf - 2);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  /* Electrón estático (sin animación) */
  function drawElectronStatic(w, h) {
    if (state.ni < 1 || state.ni > N_MAX) return;
    const x = PAD.left + (w - PAD.left - PAD.right) * 0.42;
    const y = getLevelY(state.ni, h);
    drawElectronCircle(x, y);
  }

  /* Electrón (durante animación) */
  function drawElectron(w, h, electronY) {
    const x = PAD.left + (w - PAD.left - PAD.right) * 0.42;
    drawElectronCircle(x, electronY);
  }

  function drawElectronCircle(x, y) {
    ctx.save();
    // Halo externo
    const halo = ctx.createRadialGradient(x, y, 0, x, y, 18);
    halo.addColorStop(0,   'hsla(195,100%,70%,0.2)');
    halo.addColorStop(0.5, 'hsla(195,100%,70%,0.08)');
    halo.addColorStop(1,   'transparent');
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

    // Núcleo
    ctx.fillStyle = 'hsl(195,100%,72%)';
    ctx.shadowColor = 'hsl(195,100%,72%)';
    ctx.shadowBlur  = 8;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /* ─── FOTÓN: onda sinusoidal ─────────────────────────────────
     La propagación como onda transversal es física correcta para
     representar la naturaleza ondulatoria del fotón emitido.
  ──────────────────────────────────────────────────────────── */
  function drawPhotonWave(w, h, photonX, photonY, color, waveT = 0) {
    if (photonX <= 0) return;

    // Origen: posición del electrón en nf
    const xStart = PAD.left + (w - PAD.left - PAD.right) * 0.42;
    const xEnd   = xStart + photonX;
    const y      = photonY;

    const lambda = 18;   // longitud de onda visual de la onda dibujada (px)
    const amp    = 9;    // amplitud de la onda (px)

    ctx.save();

    // Extraer rgb del color CSS para transparencias
    const rgbBase = color; // ya viene como 'rgb(r,g,b)'
    function withAlpha(a) {
      return rgbBase.replace('rgb(', 'rgba(').replace(')', `, ${a})`);
    }

    // Halo alrededor de la onda
    ctx.shadowColor = withAlpha(0.6);
    ctx.shadowBlur  = 6;
    ctx.strokeStyle = withAlpha(0.9);
    ctx.lineWidth   = 2;
    ctx.lineJoin    = 'round';
    ctx.lineCap     = 'round';

    ctx.beginPath();
    let first = true;
    const nPoints = Math.ceil(photonX / 2);
    for (let i = 0; i <= nPoints; i++) {
      const xp = xStart + (i / nPoints) * photonX;
      const phase = (xp - xStart) / lambda * Math.PI * 2 - waveT * 6;
      const yp = y + Math.sin(phase) * amp;
      if (first) { ctx.moveTo(xp, yp); first = false; }
      else        { ctx.lineTo(xp, yp); }
    }
    ctx.stroke();

    // Punto cabeza de fotón
    ctx.shadowBlur = 12;
    ctx.fillStyle  = withAlpha(1);
    ctx.beginPath();
    ctx.arc(xEnd, y + Math.sin(((xEnd - xStart) / lambda * Math.PI * 2) - waveT * 6) * amp, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /* ═══════════════════════════════════════════════════════════
     ANIMACIÓN
     ═══════════════════════════════════════════════════════════ */
  function startAnimation() {
    if (animFrame) cancelAnimationFrame(animFrame);

    const result   = Physics.calcBohr(state.ni, state.nf, state.Z);
    const colorObj = Physics.wavelengthToCSS(result.lambda_nm);
    const color    = colorObj.css;

    const canvasH = canvas.height / (window.devicePixelRatio || 1);
    const yStart  = getLevelY(state.ni, canvasH);
    const yEnd    = getLevelY(state.nf, canvasH);

    // Solo animar si los niveles están en la misma zona del eje roto
    if ((state.ni === 1) !== (state.nf === 1)) {
      // Caso raro: n=1 a n>1 no se puede mostrar en el diagrama con eje roto.
      // Igual calculamos, solo saltamos la animación visual.
      return;
    }

    const fallDuration  = 700;  // ms caída del electrón
    const waveDuration  = 900;  // ms propagación del fotón
    const maxPhotonX    = canvas.width / (window.devicePixelRatio || 1) - PAD.left - PAD.right - 30;

    animState = {
      electronY:  yStart,
      photonX:    0,
      photonY:    yEnd,
      color,
      phase:      'fall',
      waveT:      0,
    };

    let fallStart = null;
    let waveStart = null;

    function step(now) {
      if (animState.phase === 'fall') {
        if (!fallStart) fallStart = now;
        const t = Math.min((now - fallStart) / fallDuration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - t, 3);
        animState.electronY = yStart + (yEnd - yStart) * ease;

        if (t >= 1) {
          animState.phase     = 'wave';
          animState.electronY = yEnd;
          animState.photonX   = 0.1;
          waveStart = now;
        }
      } else if (animState.phase === 'wave') {
        const pt = Math.min((now - waveStart) / waveDuration, 1);
        // Ease in-out cubic
        const easeW = pt < 0.5 ? 4 * pt * pt * pt : 1 - Math.pow(-2 * pt + 2, 3) / 2;
        animState.photonX = easeW * maxPhotonX;
        animState.waveT   = pt * 3;  // fase visual de la onda

        if (pt >= 1) {
          animState.phase = 'done';
          setTimeout(() => { animState = null; draw(); }, 300);
          return;
        }
      }

      draw();
      animFrame = requestAnimationFrame(step);
    }

    animFrame = requestAnimationFrame(step);
  }

  /* ═══════════════════════════════════════════════════════════
     ACTUALIZAR UI
     ═══════════════════════════════════════════════════════════ */
  function updateUI() {
    const { ni, nf } = state;
    const valid = ni > nf;

    if (!valid) {
      if (warnEl) {
        warnEl.textContent = `n inicial (${ni}) debe ser mayor que n final (${nf})`;
        warnEl.style.opacity = '1';
      }
      clearMetrics();
      draw();
      return;
    }

    if (warnEl) warnEl.style.opacity = '0';

    const result   = Physics.calcBohr(ni, nf, state.Z);
    const colorObj = Physics.wavelengthToCSS(result.lambda_nm);

    // Métricas
    const numDeltaE = elDeltaE?.querySelector('.metric-number');
    const numLambda = elLambda?.querySelector('.metric-number');
    if (numDeltaE) numDeltaE.textContent = result.deltaE_eV.toFixed(3);
    if (numLambda) numLambda.textContent  = result.lambda_nm.toFixed(1);
    if (elDeltaE)  elDeltaE.classList.toggle('highlight', colorObj.isVisible);
    if (elLambda)  elLambda.classList.toggle('highlight', colorObj.isVisible);

    // Chips de información
    if (elRegion)   elRegion.textContent   = result.region;
    if (elLineName) elLineName.textContent = result.lineName ?? `${ni}→${nf}`;
    if (elSeries)   elSeries.textContent   = result.seriesName ?? '—';

    // Sub-label λ con región
    const swatch = document.getElementById('metricColorSwatch');
    if (swatch) swatch.textContent = `λ = hc / ΔE  ·  ${result.region}`;

    // Fórmula live
    if (elFormulaLiveValue) {
      elFormulaLiveValue.textContent = `${result.deltaE_eV.toFixed(4)} eV`;
    }

    // CSS variable de color fotón
    document.documentElement.style.setProperty('--photon-color', colorObj.css);
    const glowRgb = colorObj.css.replace('rgb(', 'rgba(').replace(')', ', 0.35)');
    document.documentElement.style.setProperty('--photon-glow', glowRgb);

    // Indicador de fotón (bajo el canvas)
    if (elPhotonDot) {
      elPhotonDot.style.background = colorObj.css;
      elPhotonDot.style.boxShadow  = `0 0 10px ${colorObj.css}`;
    }
    if (elPhotonLegend) {
      elPhotonLegend.textContent = `${result.lambda_nm.toFixed(1)} nm — ${result.region}`;
    }

    // Sincronizar Panel B
    if (typeof PanelB !== 'undefined' && PanelB.highlightWavelength) {
      PanelB.highlightWavelength(result.lambda_nm);
    }

    draw();
  }

  function clearMetrics() {
    const numDeltaE = elDeltaE?.querySelector('.metric-number');
    const numLambda = elLambda?.querySelector('.metric-number');
    if (numDeltaE) numDeltaE.textContent = '—';
    if (numLambda) numLambda.textContent  = '—';
    if (elRegion)   elRegion.textContent   = '—';
    if (elLineName) elLineName.textContent = '—';
    if (elSeries)   elSeries.textContent   = '—';
    if (elPhotonLegend) elPhotonLegend.textContent = '—';
    if (elFormulaLiveValue) elFormulaLiveValue.textContent = '—';
  }

  /* ═══════════════════════════════════════════════════════════
     RESIZE
     ═══════════════════════════════════════════════════════════ */
  function resizeCanvas() {
    if (!canvas) return;
    const dpr  = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    const H    = 400;  // altura fija lógica (px)

    canvas.width  = rect.width * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = `${rect.width}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(dpr, dpr);
    draw();
  }

  /* ═══════════════════════════════════════════════════════════
     INIT
     ═══════════════════════════════════════════════════════════ */
  function init() {
    canvas = document.getElementById('energyCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    selNi  = document.getElementById('selNi');
    selNf  = document.getElementById('selNf');
    warnEl = document.getElementById('levelWarning');

    elDeltaE           = document.getElementById('metricDeltaE');
    elLambda           = document.getElementById('metricLambda');
    elRegion           = document.getElementById('metricRegion');
    elLineName         = document.getElementById('metricLineName');
    elSeries           = document.getElementById('metricSeries');
    elFormulaLive      = document.getElementById('formulaLive');
    elFormulaLiveValue = document.getElementById('formulaLiveValue');
    elPhotonDot        = document.getElementById('photonDot');
    elPhotonLegend     = document.getElementById('photonLegend');

    // Llenar selectores
    [selNi, selNf].forEach((sel, idx) => {
      if (!sel) return;
      for (let n = 1; n <= 6; n++) {
        const opt = document.createElement('option');
        opt.value = n;
        opt.textContent = `n = ${n}   (${Physics.calcEnergy(n).toFixed(2)} eV)`;
        if ((idx === 0 && n === 3) || (idx === 1 && n === 2)) opt.selected = true;
        sel.appendChild(opt);
      }
    });

    selNi?.addEventListener('change', () => {
      state.ni = parseInt(selNi.value);
      updateUI();
    });

    selNf?.addEventListener('change', () => {
      state.nf = parseInt(selNf.value);
      updateUI();
    });

    document.getElementById('animBtn')?.addEventListener('click', () => {
      if (state.ni > state.nf) startAnimation();
    });

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    updateUI();
  }

  /* setZ — llamado desde app.js al mover slider Z */
  function setZ(Z) {
    state.Z = Math.max(1, Math.min(4, parseInt(Z)));
    updateUI();
    // Notificar Panel B para que recalcule líneas de H con nuevo Z
    if (typeof PanelB !== 'undefined' && PanelB.setZ) PanelB.setZ(state.Z);
  }

  return { init, getState: () => state, setZ };
})();
