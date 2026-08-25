/**
 * panel-c.js
 * Panel C — Identifica la estrella
 * ===================================
 * - 3 estrellas de dificultad creciente (G2V, A0V, K5V)
 * - Espectro de absorción: gradiente visible + líneas oscuras en λ reales
 * - Checkboxes para H, He, Na, Ca — el usuario marca lo que reconoce
 * - Verificación y reveal con feedback visual (correcto / parcial / incorrecto)
 * - Datos: AppData.STELLAR_SPECTRA (fuente: SDSS SkyServer + literatura)
 */

'use strict';

const PanelC = (() => {
  let canvas, ctx;
  let currentStarIdx = 0;
  let answered = false;
  let currentTemperature = 5778;

  const RANGE = { min: 380, max: 750, span: 370 };
  const PAD   = { left: 16, right: 16, top: 16, bottom: 32 };

  /* ── λ → X en canvas ─────────────────────────────────────── */
  function lambdaToX(lambda_nm, w) {
    const frac = (lambda_nm - RANGE.min) / RANGE.span;
    return PAD.left + Math.max(0, Math.min(1, frac)) * (w - PAD.left - PAD.right);
  }

  /* ── Dibuja espectro de absorción ────────────────────────── */
  function draw() {
    if (!canvas) return;
    const dpr  = window.devicePixelRatio || 1;
    const W    = canvas.width / dpr;
    const H    = canvas.height / dpr;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    const star   = AppData.STELLAR_SPECTRA[currentStarIdx];
    const specH  = H - PAD.top - PAD.bottom;
    const x0     = PAD.left;
    const x1     = W - PAD.right;
    const specW  = x1 - x0;

    // Gradiente espectral visible (continuo de fondo)
    const grad = ctx.createLinearGradient(x0, 0, x1, 0);
    const steps = 40;
    for (let i = 0; i <= steps; i++) {
      const t      = i / steps;
      const lambda = RANGE.min + t * RANGE.span;
      const col    = Physics.wavelengthToCSS(lambda);
      grad.addColorStop(t, col.isVisible ? col.css : (lambda < 380 ? '#220044' : '#330000'));
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x0, PAD.top, specW, specH, 4);
    ctx.fill();

    // Brillo general (simula continuo de cuerpo negro según temperatura)
    const brightGrad = ctx.createLinearGradient(x0, PAD.top, x0, PAD.top + specH);
    brightGrad.addColorStop(0,   'rgba(255,255,255,0.12)');
    brightGrad.addColorStop(0.3, 'rgba(255,255,255,0.06)');
    brightGrad.addColorStop(1,   'rgba(0,0,0,0.15)');
    ctx.fillStyle = brightGrad;
    ctx.beginPath();
    ctx.roundRect(x0, PAD.top, specW, specH, 4);
    ctx.fill();

    // Líneas de absorción oscuras moduladas por temperatura
    star.absorptionLines.forEach(line => {
      if (line.lambda_nm < RANGE.min || line.lambda_nm > RANGE.max) return;
      const x  = lambdaToX(line.lambda_nm, W);
      
      // Modulación por temperatura usando modelo Saha-Boltzmann pedagógico
      let tempFactor = 1.0;
      if (typeof Physics !== 'undefined' && typeof Physics.relativeIntensity === 'function') {
        const factor = Physics.relativeIntensity(line.element, currentTemperature);
        tempFactor = Math.max(0.12, Math.min(1.0, factor * 1.25));
      }
      
      const effectiveStrength = (line.strength ?? 0.7) * tempFactor;
      const lw = 2.5 + effectiveStrength * 4;  // ancho según intensidad

      // Sombra oscura tipo absorción real
      const absGrad = ctx.createLinearGradient(x - lw, 0, x + lw, 0);
      absGrad.addColorStop(0,   'rgba(0,0,0,0)');
      absGrad.addColorStop(0.25,`rgba(0,0,0,${0.35 + effectiveStrength * 0.3})`);
      absGrad.addColorStop(0.5, `rgba(0,0,0,${0.45 + effectiveStrength * 0.5})`);
      absGrad.addColorStop(0.75,`rgba(0,0,0,${0.35 + effectiveStrength * 0.3})`);
      absGrad.addColorStop(1,   'rgba(0,0,0,0)');

      ctx.fillStyle = absGrad;
      ctx.fillRect(x - lw, PAD.top, lw * 2, specH);
    });

    // Borde del espectro
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x0, PAD.top, specW, specH, 4);
    ctx.stroke();

    // Eje λ
    drawAxis(W, H);

    ctx.restore();
  }

  function drawAxis(W, H) {
    const x0  = PAD.left;
    const x1  = W - PAD.right;
    const y   = H - PAD.bottom + 10;

    ctx.fillStyle  = 'hsla(220,15%,40%,0.6)';
    ctx.font       = `400 8.5px 'JetBrains Mono', monospace`;
    ctx.textAlign  = 'center';

    [400, 450, 500, 550, 600, 650, 700].forEach(lnm => {
      const x = lambdaToX(lnm, W);
      ctx.fillStyle = 'hsla(220,15%,35%,0.4)';
      ctx.fillRect(x - 0.5, y - 8, 1, 4);
      ctx.fillStyle = 'hsla(220,15%,40%,0.6)';
      ctx.fillText(`${lnm}`, x, y + 6);
    });

    ctx.fillStyle  = 'hsla(220,15%,30%,0.5)';
    ctx.font       = `400 8px 'JetBrains Mono', monospace`;
    ctx.fillText('λ (nm)', (x0 + x1) / 2, y + 17);
  }

  /* ── Resize ──────────────────────────────────────────────── */
  function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr  = window.devicePixelRatio || 1;
    const H    = 130;
    canvas.width  = rect.width * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = `${rect.width}px`;
    canvas.style.height = `${H}px`;
    draw();
  }

  const STAR_TEMPS = [5778, 9600, 4400];

  /* ── Carga estrella ──────────────────────────────────────── */
  function loadStar(idx) {
    currentStarIdx = idx;
    answered = false;
    currentTemperature = STAR_TEMPS[idx] ?? 5778;

    // Sincronizar slider de temperatura si existe
    const sliderT = document.getElementById('sliderT');
    if (sliderT) {
      sliderT.value = currentTemperature;
      sliderT.dispatchEvent(new Event('input'));
    }

    const star = AppData.STELLAR_SPECTRA[idx];

    // Actualizar botones de estrella
    document.querySelectorAll('.star-card').forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
    });

    // Limpiar checkboxes
    document.querySelectorAll('.element-check-label').forEach(label => {
      const cb = label.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = false;
      label.classList.remove('checked');
    });

    // Ocultar resultado
    const resultPanel = document.getElementById('starResult');
    if (resultPanel) {
      resultPanel.classList.remove('visible', 'correct', 'partial', 'wrong');
    }

    draw();
  }

  /* ── API pública: cambiar temperatura ────────────────────── */
  function setTemperature(T) {
    currentTemperature = parseInt(T) || 5778;
    draw();
  }

  /* ── Verificar respuesta ─────────────────────────────────── */
  function checkAnswer() {
    const star    = AppData.STELLAR_SPECTRA[currentStarIdx];
    const correct = new Set(star.answer.elements);

    const selected = new Set();
    document.querySelectorAll('.element-check-label input:checked').forEach(cb => {
      selected.add(cb.dataset.el);
    });

    // Calcular aciertos / errores
    let hits    = 0;
    let misses  = 0;
    let extras  = 0;

    correct.forEach(el => { if (selected.has(el)) hits++; else misses++; });
    selected.forEach(el => { if (!correct.has(el)) extras++; });

    const total  = correct.size;
    const isCorrect = hits === total && extras === 0;
    const isPartial = hits > 0 && (misses > 0 || extras > 0);

    // Construir lista de elementos con resultado
    const elementTags = [...correct].map(el => {
      const found = selected.has(el);
      return `<span class="result-element-tag ${found ? 'present' : 'missing'}">${el}</span>`;
    });
    selected.forEach(el => {
      if (!correct.has(el)) {
        elementTags.push(`<span class="result-element-tag missing">${el} ✗</span>`);
      }
    });

    // Construir mensaje
    let icon, title, cls;
    if (isCorrect) {
      icon  = '✓';
      title = 'Identificación correcta';
      cls   = 'correct';
    } else if (isPartial) {
      icon  = '△';
      title = 'Identificación parcial';
      cls   = 'partial';
    } else {
      icon  = '×';
      title = 'Identificación incorrecta';
      cls   = 'wrong';
    }

    const resultPanel = document.getElementById('starResult');
    if (resultPanel) {
      resultPanel.className = `result-panel ${cls} visible`;
      resultPanel.innerHTML = `
        <div class="result-icon">${icon}</div>
        <div class="result-title">${title}</div>
        <div class="result-type">${star.type} — ${star.description}</div>
        <div class="result-description">${star.flavor}</div>
        <div class="result-elements">${elementTags.join('')}</div>
        <div class="data-source-info">
          <span class="data-source-badge">SDSS</span>
          ${star.source}
        </div>`;
    }

    answered = true;
  }

  /* ── Inicialización ─────────────────────────────────────── */
  function init() {
    canvas = document.getElementById('absorptionCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    // Botones de estrella
    document.querySelectorAll('.star-card').forEach((btn, idx) => {
      btn.addEventListener('click', () => loadStar(idx));
    });

    // Checkboxes — actualizar estado visual
    document.querySelectorAll('.element-check-label').forEach(label => {
      const cb = label.querySelector('input[type="checkbox"]');
      if (!cb) return;
      cb.addEventListener('change', () => {
        label.classList.toggle('checked', cb.checked);
      });
    });

    // Botón verificar
    const checkBtn = document.getElementById('checkAnswerBtn');
    if (checkBtn) checkBtn.addEventListener('click', checkAnswer);

    // Botón limpiar
    const clearBtn = document.getElementById('clearAnswerBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        document.querySelectorAll('.element-check-label').forEach(label => {
          const cb = label.querySelector('input[type="checkbox"]');
          if (cb) cb.checked = false;
          label.classList.remove('checked');
        });
        const rp = document.getElementById('starResult');
        if (rp) rp.classList.remove('visible', 'correct', 'partial', 'wrong');
        answered = false;
      });
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    loadStar(0);
  }

  return { init, setTemperature, loadStar };
})();
