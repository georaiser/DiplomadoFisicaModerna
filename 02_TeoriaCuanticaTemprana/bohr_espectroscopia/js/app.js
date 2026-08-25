/**
 * app.js  v3
 * Coordinador: starfield, scroll-reveal, steppers, slider Z, slider T
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   STARFIELD
   ════════════════════════════════════════════════════════════ */
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 1.5 + 0.2,
        baseAlpha: Math.random() * 0.55 + 0.1,
        twinkleSpeed: Math.random() * 0.012 + 0.004,
        twinkleOffset: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.2 ? (Math.random() < 0.5 ? 200 : 38) : 220,
      });
    }
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.005;
    stars.forEach(s => {
      const alpha = s.baseAlpha * (0.6 + 0.4 * Math.sin(t + s.twinkleOffset));
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = `hsl(${s.hue},20%,90%)`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createStars(240);
  draw();
  window.addEventListener('resize', () => { resize(); createStars(240); });
}

/* ════════════════════════════════════════════════════════════
   SCROLL REVEAL
   ════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), Math.min(i * 60, 200));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════════════════════
   SLIDER FILL HELPER
   ════════════════════════════════════════════════════════════ */
function updateSliderFill(input) {
  const min = parseFloat(input.min);
  const max = parseFloat(input.max);
  const val = parseFloat(input.value);
  const pct = ((val - min) / (max - min) * 100).toFixed(1);
  input.style.setProperty('--slider-fill', `${pct}%`);
}

/* ════════════════════════════════════════════════════════════
   SLIDER Z — Carga nuclear (Panel A + B)
   ════════════════════════════════════════════════════════════ */
function initSliderZ() {
  const slider  = document.getElementById('sliderZ');
  const ionTag  = document.getElementById('zIonTag');
  if (!slider) return;

  function onZChange() {
    const Z = parseInt(slider.value);
    updateSliderFill(slider);

    // Actualizar etiqueta
    const label = Physics.HYDROGENOID_LABEL[Z];
    if (ionTag) ionTag.textContent = label.ion || label.symbol;

    // Destacar tick activo
    document.querySelectorAll('.z-tick-labels span').forEach((el, i) => {
      el.style.color    = (i + 1 === Z) ? 'var(--accent-cyan)' : '';
      el.style.fontWeight = (i + 1 === Z) ? '700' : '';
    });

    // Notificar Panel A (que actualizará el diagrama y Panel B)
    if (typeof PanelA !== 'undefined' && PanelA.setZ) {
      PanelA.setZ(Z);
    }
  }

  slider.addEventListener('input', onZChange);
  updateSliderFill(slider);
  onZChange();
}

/* ════════════════════════════════════════════════════════════
   SLIDER T — Temperatura estelar (Panel C)
   ════════════════════════════════════════════════════════════ */
function initSliderT() {
  const slider    = document.getElementById('sliderT');
  const valEl     = document.getElementById('tempValue');
  const clsBadge  = document.getElementById('tempClass');
  const descEl    = document.getElementById('tempDesc');
  if (!slider) return;

  // Colores de temperatura para el badge
  const CLASS_COLORS = {
    O: { bg: 'hsla(220,100%,85%,0.15)', border: 'hsla(220,100%,85%,0.5)', text: 'hsl(220,100%,85%)' },
    B: { bg: 'hsla(210,80%,80%,0.15)',  border: 'hsla(210,80%,80%,0.5)',  text: 'hsl(210,80%,80%)' },
    A: { bg: 'hsla(200,30%,88%,0.15)',  border: 'hsla(200,30%,88%,0.5)',  text: 'hsl(200,30%,88%)' },
    F: { bg: 'hsla(55,70%,85%,0.15)',   border: 'hsla(55,70%,85%,0.5)',   text: 'hsl(55,70%,85%)' },
    G: { bg: 'hsla(47,90%,75%,0.15)',   border: 'hsla(47,90%,75%,0.5)',   text: 'hsl(47,90%,75%)' },
    K: { bg: 'hsla(30,90%,68%,0.15)',   border: 'hsla(30,90%,68%,0.5)',   text: 'hsl(30,90%,68%)' },
    M: { bg: 'hsla(10,80%,60%,0.15)',   border: 'hsla(10,80%,60%,0.5)',   text: 'hsl(10,80%,60%)' },
  };

  function onTChange() {
    const T = parseInt(slider.value);
    updateSliderFill(slider);

    // Valor numérico formateado
    if (valEl) valEl.textContent = T.toLocaleString('es-AR');

    // Clase espectral
    const sc = Physics.spectralClass(T);
    if (clsBadge) {
      clsBadge.textContent = sc.cls;
      const c = CLASS_COLORS[sc.cls] ?? CLASS_COLORS['G'];
      clsBadge.style.background   = c.bg;
      clsBadge.style.borderColor  = c.border;
      clsBadge.style.color        = c.text;
    }
    if (descEl) {
      descEl.textContent = `Tipo ${sc.cls} — ${sc.desc}`;
      descEl.style.color = CLASS_COLORS[sc.cls]?.text ?? 'var(--text-secondary)';
    }

    // Color del thumb / valor según temperatura
    if (valEl) valEl.style.color = CLASS_COLORS[sc.cls]?.text ?? 'var(--text-primary)';

    // Notificar Panel C
    if (typeof PanelC !== 'undefined' && PanelC.setTemperature) {
      PanelC.setTemperature(T);
    }
  }

  slider.addEventListener('input', onTChange);
  updateSliderFill(slider);
  onTChange();
}

/* ════════════════════════════════════════════════════════════
   STEPPERS Panel A
   ════════════════════════════════════════════════════════════ */
function initSteppers() {
  const niDisplay = document.getElementById('niDisplay');
  const nfDisplay = document.getElementById('nfDisplay');
  const selNi     = document.getElementById('selNi');
  const selNf     = document.getElementById('selNf');
  if (!niDisplay || !nfDisplay) return;

  function getN(display) { return parseInt(display.textContent); }

  function setN(display, sel, n) {
    n = Math.max(1, Math.min(6, n));
    display.textContent = n;
    if (sel) { sel.value = n; sel.dispatchEvent(new Event('change')); }
  }

  function flash(el) {
    el.style.transform  = 'scale(1.18)';
    el.style.transition = 'transform 0.14s cubic-bezier(0.34,1.56,0.64,1)';
    setTimeout(() => { el.style.transform = 'scale(1)'; }, 140);
  }

  document.getElementById('niMinus')?.addEventListener('click', () => { setN(niDisplay, selNi, getN(niDisplay) - 1); flash(niDisplay); });
  document.getElementById('niPlus' )?.addEventListener('click', () => { setN(niDisplay, selNi, getN(niDisplay) + 1); flash(niDisplay); });
  document.getElementById('nfMinus')?.addEventListener('click', () => { setN(nfDisplay, selNf, getN(nfDisplay) - 1); flash(nfDisplay); });
  document.getElementById('nfPlus' )?.addEventListener('click', () => { setN(nfDisplay, selNf, getN(nfDisplay) + 1); flash(nfDisplay); });

  selNi?.addEventListener('change', () => {
    niDisplay.textContent = selNi.value;
    updateJumpUI();
  });
  selNf?.addEventListener('change', () => {
    nfDisplay.textContent = selNf.value;
    updateJumpUI();
  });

  function updateJumpUI() {
    const ni = parseInt(selNi?.value || 3);
    const nf = parseInt(selNf?.value || 2);
    const Z  = parseInt(document.getElementById('sliderZ')?.value || 1);
    const seriesTag  = document.getElementById('jumpSeriesTag');
    const arrowE     = document.getElementById('jumpArrowEnergy');
    if (ni > nf) {
      try {
        const r = Physics.calcBohr(ni, nf, Z);
        if (seriesTag) seriesTag.textContent = r.seriesName ?? '—';
        if (arrowE) {
          arrowE.textContent = `${r.deltaE_eV.toFixed(2)} eV`;
          arrowE.style.color = Physics.wavelengthToCSS(r.lambda_nm).css;
        }
      } catch(_) {
        if (seriesTag) seriesTag.textContent = '—';
        if (arrowE)    arrowE.textContent    = '';
      }
    } else {
      if (seriesTag) seriesTag.textContent = '—';
      if (arrowE)    arrowE.textContent    = '';
    }
  }

  updateJumpUI();
}

/* ════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Physics === 'undefined') { console.error('[app.js] physics.js no cargado'); return; }
  if (typeof AppData === 'undefined') { console.error('[app.js] data.js no cargado');    return; }

  initStarfield();
  initScrollReveal();

  try { PanelA.init(); } catch(e) { console.error('[Panel A]', e); }
  try { PanelB.init(); } catch(e) { console.error('[Panel B]', e); }
  try { PanelC.init(); } catch(e) { console.error('[Panel C]', e); }

  // Steppers y sliders después de que los paneles registraron sus selects
  initSteppers();
  initSliderZ();
  initSliderT();

  console.log(
    '%c Bohr → Espectroscopía Estelar  v3 ',
    'background:#060912;color:#00c8f0;font-family:JetBrains Mono,monospace;font-size:11px;padding:4px 10px;border:1px solid #00c8f033;border-radius:6px;'
  );
});
