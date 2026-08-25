/**
 * panel-b.js
 * Panel B — Huellas espectrales comparativas (espectrómetro)
 * ==========================================================
 * - H: calculado en vivo con Physics.calcBohr() — serie de Balmer visible
 * - He, Na, Ca: datos hardcodeados de NIST (AppData.NIST_LINES)
 * - Canvas 2D con gradiente espectral visible 380–750 nm como fondo
 * - Filas una por elemento, líneas de colores en posición real
 * - Tooltip al hover: nombre, λ, fuente
 */

'use strict';

const PanelB = (() => {
  let canvas, ctx;
  let tooltipEl;
  let activeElements = new Set(['H', 'He', 'Na', 'Ca']);
  let highlightedLambda = null;
  let currentZ = 1;

  const RANGE = { min: 380, max: 750, span: 370 };
  const ROW_HEIGHT = 58;
  const SPECTRUM_H  = 26;  // altura de la franja de espectro
  const PAD = { left: 42, right: 16, top: 16, bottom: 8 };

  // Colores de referencia por elemento (usados en líneas)
  const EL_COLOR = {
    H:  'hsl(0, 80%, 70%)',
    He: 'hsl(48, 100%, 65%)',
    Na: 'hsl(26, 100%, 65%)',
    Ca: 'hsl(195, 80%, 62%)',
  };

  /* ── Posición de λ en el canvas ───────────────────────────── */
  function lambdaToX(lambda_nm, w) {
    const frac = (lambda_nm - RANGE.min) / RANGE.span;
    return PAD.left + frac * (w - PAD.left - PAD.right);
  }

  /* ── Datos de líneas por elemento ────────────────────────── */
  function getLinesForElement(symbol) {
    if (symbol === 'H') {
      // Calculado en vivo con Bohr para la carga nuclear Z actual
      return Physics.balmerSeries(currentZ)
        .filter(r => r.lambda_nm >= RANGE.min && r.lambda_nm <= RANGE.max)
        .map(r => ({
          lambda_nm: r.lambda_nm,
          label:     currentZ === 1 ? (r.lineName ?? `H(${r.ni}→2)`) : `${Physics.HYDROGENOID_LABEL[currentZ]?.symbol || 'Z='+currentZ} (${r.ni}→2)`,
          color:     Physics.wavelengthToCSS(r.lambda_nm).css,
          source:    `Bohr (Z=${currentZ})`,
          nist_ref:  `Balmer ${r.ni}→2 (Z=${currentZ}) | ${r.lambda_nm.toFixed(1)} nm`,
          intensity: r.ni <= 4 ? 'strong' : 'medium',
        }));
    }

    return (AppData.NIST_LINES[symbol]?.lines ?? [])
      .filter(l => l.lambda_nm >= RANGE.min && l.lambda_nm <= RANGE.max)
      .map(l => ({
        ...l,
        color:  Physics.wavelengthToCSS(l.lambda_nm).css,
        source: 'NIST ASD',
      }));
  }

  /* ── Dibuja el gradiente visible 380–750 nm ───────────────── */
  function drawSpectrumGradient(x0, x1, y, h) {
    const grad = ctx.createLinearGradient(x0, 0, x1, 0);
    const steps = 30;
    for (let i = 0; i <= steps; i++) {
      const t      = i / steps;
      const lambda = RANGE.min + t * RANGE.span;
      const col    = Physics.wavelengthToCSS(lambda);
      grad.addColorStop(t, col.isVisible ? col.css : (lambda < 380 ? '#330066' : '#440000'));
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x0, y, x1 - x0, h, 3);
    ctx.fill();

    // Borde sutil
    ctx.strokeStyle = 'hsla(220,20%,100%,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x0, y, x1 - x0, h, 3);
    ctx.stroke();
  }

  /* ── Dibuja líneas de emisión ────────────────────────────── */
  function drawLines(lines, w, rowY, symbol) {
    const x0 = PAD.left;
    const x1 = w - PAD.right;
    const specY = rowY + 16;

    lines.forEach(line => {
      const x = lambdaToX(line.lambda_nm, w);
      if (x < x0 || x > x1) return;

      const isHighlighted = highlightedLambda !== null &&
        Math.abs(line.lambda_nm - highlightedLambda) < 4;

      // Línea vertical sobre la franja
      const lineAlpha = line.intensity === 'very_strong' ? 1
        : line.intensity === 'strong' ? 0.9
        : line.intensity === 'medium' ? 0.75 : 0.55;

      ctx.save();
      ctx.globalAlpha = lineAlpha;

      // Halo si está destacada
      if (isHighlighted) {
        ctx.shadowColor  = line.color;
        ctx.shadowBlur   = 14;
        ctx.lineWidth    = 3;
      } else {
        ctx.lineWidth = 2;
      }

      ctx.strokeStyle = line.color;
      ctx.beginPath();
      ctx.moveTo(x, specY);
      ctx.lineTo(x, specY + SPECTRUM_H);
      ctx.stroke();

      // Etiqueta de la línea (solo las fuertes / primera del elemento)
      if (line.intensity !== 'weak') {
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = line.color;
        ctx.font = `500 8.5px 'JetBrains Mono', monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(line.label, x, specY - 4);
      }
      ctx.restore();
    });
  }

  /* ── Dibuja el panel completo ────────────────────────────── */
  function draw() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W   = canvas.width / dpr;
    const H   = canvas.height / dpr;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    // Fondo
    ctx.fillStyle = 'hsl(228,30%,5%)';
    ctx.fillRect(0, 0, W, H);

    const elements = ['H', 'He', 'Na', 'Ca'];
    const x0 = PAD.left;
    const x1 = W - PAD.right;

    elements.forEach((symbol, idx) => {
      const rowY = PAD.top + idx * ROW_HEIGHT;
      const specY = rowY + 16;
      const isActive = activeElements.has(symbol);

      ctx.globalAlpha = isActive ? 1 : 0.2;

      // Etiqueta del elemento (izquierda)
      ctx.fillStyle = EL_COLOR[symbol];
      ctx.font = `700 11px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'right';
      ctx.fillText(symbol, x0 - 6, specY + SPECTRUM_H / 2 + 4);

      // Fondo oscuro de la franja
      ctx.fillStyle = 'hsla(228,30%,4%,0.7)';
      ctx.beginPath();
      ctx.roundRect(x0, specY, x1 - x0, SPECTRUM_H, 3);
      ctx.fill();

      // Gradiente espectral como background tenue
      ctx.globalAlpha = isActive ? 0.25 : 0.05;
      drawSpectrumGradient(x0, x1, specY, SPECTRUM_H);

      // Líneas del elemento
      ctx.globalAlpha = isActive ? 1 : 0.1;
      if (isActive) {
        const lines = getLinesForElement(symbol);
        drawLines(lines, W, rowY, symbol);
      }

      ctx.globalAlpha = 1;

      // Fuente (pequeño tag)
      const sourceLabel = symbol === 'H' ? `Bohr (Z=${currentZ})` : 'NIST ASD';
      ctx.fillStyle = 'hsla(220,15%,40%,0.7)';
      ctx.font = `400 8px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'right';
      ctx.fillText(sourceLabel, x1, specY + SPECTRUM_H + 10);
    });

    // Marcas de λ (eje inferior)
    drawWavelengthAxis(W, H);

    ctx.restore();
  }

  function drawWavelengthAxis(W, H) {
    const x0 = PAD.left;
    const x1 = W - PAD.right;
    const y  = H - PAD.bottom - 2;

    ctx.fillStyle = 'hsla(220,15%,40%,0.6)';
    ctx.font = `400 8.5px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'center';

    [400, 450, 500, 550, 600, 650, 700].forEach(lnm => {
      const x = lambdaToX(lnm, W);
      // Marca
      ctx.fillStyle = 'hsla(220,15%,35%,0.4)';
      ctx.fillRect(x - 0.5, y - 8, 1, 5);
      // Número
      ctx.fillStyle = 'hsla(220,15%,40%,0.6)';
      ctx.fillText(`${lnm}`, x, y + 8);
    });

    ctx.textAlign = 'center';
    ctx.fillStyle = 'hsla(220,15%,30%,0.5)';
    ctx.font = `400 8px 'JetBrains Mono', monospace`;
    ctx.fillText('λ (nm)', (x0 + x1) / 2, y + 18);
  }

  /* ── Tooltip al hover ────────────────────────────────────── */
  function setupHover() {
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx   = e.clientX - rect.left;
      const my   = e.clientY - rect.top;
      const dpr  = window.devicePixelRatio || 1;
      const W    = canvas.width / dpr;

      // Calcular qué fila es
      const elements = ['H', 'He', 'Na', 'Ca'];
      let found = null;

      elements.forEach((symbol, idx) => {
        if (!activeElements.has(symbol)) return;
        const rowY  = PAD.top + idx * ROW_HEIGHT;
        const specY = rowY + 16;

        if (my >= specY - 10 && my <= specY + SPECTRUM_H + 12) {
          const lines = getLinesForElement(symbol);
          lines.forEach(line => {
            const lx = lambdaToX(line.lambda_nm, W);
            if (Math.abs(mx - lx) < 8) {
              found = { line, symbol };
            }
          });
        }
      });

      if (found) {
        tooltipEl.innerHTML = `
          <div class="tooltip-lambda">${found.line.lambda_nm.toFixed(1)} nm</div>
          <div class="tooltip-label">${found.symbol} — ${found.line.label}</div>
          <div class="tooltip-source">Fuente: ${found.line.source}</div>`;
        tooltipEl.style.left = `${e.clientX + 12}px`;
        tooltipEl.style.top  = `${e.clientY - 10}px`;
        tooltipEl.classList.add('visible');
        canvas.style.cursor = 'crosshair';
      } else {
        tooltipEl.classList.remove('visible');
        canvas.style.cursor = 'default';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      tooltipEl.classList.remove('visible');
    });
  }

  /* ── API pública: resaltar λ desde Panel A ──────────────── */
  function highlightWavelength(lambda_nm) {
    highlightedLambda = lambda_nm;
    draw();
  }

  /* ── API pública: cambiar Z desde Slider ────────────────── */
  function setZ(z) {
    currentZ = Math.max(1, Math.min(4, parseInt(z) || 1));
    draw();
  }

  /* ── Resize ──────────────────────────────────────────────── */
  function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr  = window.devicePixelRatio || 1;
    const rows = 4;
    const H    = PAD.top + rows * ROW_HEIGHT + PAD.bottom + 20;
    canvas.width  = rect.width * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = `${rect.width}px`;
    canvas.style.height = `${H}px`;
    draw();
  }

  /* ── Inicialización ─────────────────────────────────────── */
  function init() {
    canvas    = document.getElementById('spectrometerCanvas');
    tooltipEl = document.getElementById('spectrumTooltip');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    // Toggles de elementos
    document.querySelectorAll('.element-chip[data-el]').forEach(chip => {
      chip.classList.add('active');
      chip.addEventListener('click', () => {
        const el = chip.dataset.el;
        if (activeElements.has(el)) {
          activeElements.delete(el);
          chip.classList.remove('active');
          chip.classList.add('inactive');
        } else {
          activeElements.add(el);
          chip.classList.add('active');
          chip.classList.remove('inactive');
        }
        draw();
      });
    });

    setupHover();
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  return { init, highlightWavelength, setZ };
})();
