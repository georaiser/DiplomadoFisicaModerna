"""
Genera Evaluacion_1_Presentacion.pptx v3 — Con analogías en Teledetección,
impacto tecnológico, y contenido mejorado de la Evaluacion_1_App.html.
"""
import os, sys
sys.stdout.reconfigure(encoding='utf-8')
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

# ── Rutas ──
SCRATCH   = r"C:\Users\jorge\.gemini\antigravity\brain\91c9ba88-7aab-4773-945b-d9e180a70db0\scratch"
OUT_PPTX  = r"D:\00_FisicaModerna\02_TeoriaCuanticaTemprana\Evaluacion\Evaluacion_1_Presentacion.pptx"
CHART_RJ  = os.path.join(SCRATCH, "chart_rj_planck.png")
CHART_BB  = os.path.join(SCRATCH, "chart_blackbody.png")

# ── Paleta ──
BG      = RGBColor(0x0D, 0x1B, 0x2A)
ACCENT1 = RGBColor(0x00, 0xC8, 0xFF)   # cyan
ACCENT2 = RGBColor(0xFF, 0x6B, 0x35)   # orange
ACCENT3 = RGBColor(0x7B, 0xFF, 0xC4)   # green
WHITE   = RGBColor(0xFF, 0xFF, 0xFF)
GRAY    = RGBColor(0xAA, 0xAA, 0xBB)
YELLOW  = RGBColor(0xFF, 0xE0, 0x66)
PURPLE  = RGBColor(0xC0, 0x84, 0xFC)
DARKBG  = RGBColor(0x12, 0x20, 0x33)

# ── Helpers ──
def set_bg(slide):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = BG

def add_text(tf, text, size, bold=False, color=WHITE, align=PP_ALIGN.LEFT, italic=False, spacing=None):
    p = tf.add_paragraph()
    p.alignment = align
    if spacing is not None:
        p.space_before = Pt(spacing)
    run = p.add_run()
    run.text = text
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = color
    return p

def textbox(slide, left, top, width, height):
    return slide.shapes.add_textbox(Inches(left), Inches(top), Inches(width), Inches(height))

def rect(slide, left, top, width, height, color):
    shape = slide.shapes.add_shape(
        1, Inches(left), Inches(top), Inches(width), Inches(height)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape

def header(slide, text, color=ACCENT1):
    """Standard slide header with title bar."""
    rect(slide, 0, 0, 13.33, 0.08, color)
    # Tag
    tb_tag = textbox(slide, 0.4, 0.15, 12.0, 0.35)
    tf_tag = tb_tag.text_frame
    add_text(tf_tag, "DIPLOMADO EN FÍSICA MODERNA — EVALUACIÓN 1", 9, color=GRAY, bold=True)
    # Title
    tb = textbox(slide, 0.4, 0.42, 12.0, 0.7)
    tf = tb.text_frame
    add_text(tf, text, 24, bold=True, color=color)
    rect(slide, 0.4, 1.05, 12.5, 0.03, color)
    # Footer
    rect(slide, 0, 7.32, 13.33, 0.18, color)

# ── Gráficas ──
def make_blackbody_chart():
    h, c, kB = 6.626e-34, 3e8, 1.381e-23
    lam = np.linspace(100e-9, 3000e-9, 2000)
    fig, ax = plt.subplots(figsize=(6, 3.5), facecolor='#0D1B2A')
    ax.set_facecolor('#0D1B2A')
    for T, col, lbl in [(3000,'#FF6B35','3000 K (roja)'), (4500,'#FFE066','4500 K (amarilla)'), (6000,'#00C8FF','6000 K (azul-blanca)')]:
        u = (8*np.pi*h*c / lam**5) / (np.exp(h*c/(lam*kB*T)) - 1)
        u /= u.max()
        ax.plot(lam*1e9, u, color=col, lw=2.2, label=lbl)
        ax.axvline(lam[np.argmax(u)]*1e9, color=col, lw=0.8, ls='--', alpha=0.5)
    ax.axvspan(380, 700, alpha=0.08, color='white')
    ax.text(540, 0.95, 'Visible', color='white', fontsize=7.5, ha='center', alpha=0.7)
    ax.set_xlabel('Longitud de onda (nm)', color='#AAAABB', fontsize=9)
    ax.set_ylabel('Intensidad relativa', color='#AAAABB', fontsize=9)
    ax.set_title('Espectro del cuerpo negro', color='white', fontsize=11, pad=8)
    ax.tick_params(colors='#AAAABB')
    for s in ax.spines.values(): s.set_edgecolor('#334455')
    ax.legend(fontsize=7.5, facecolor='#0D1B2A', edgecolor='#334455', labelcolor='white', loc='upper right')
    ax.set_xlim(100, 3000); ax.set_ylim(0, 1.05)
    plt.tight_layout()
    plt.savefig(CHART_BB, dpi=180, bbox_inches='tight', facecolor='#0D1B2A')
    plt.close()
    print(f"  Chart BB -> {CHART_BB}")

def make_rj_planck_chart():
    h, c, kB, T = 6.626e-34, 3e8, 1.381e-23, 5000
    nu = np.linspace(1e12, 3e14, 3000)
    planck = (8*np.pi*h*nu**3/c**3) / (np.exp(h*nu/(kB*T))-1)
    rj = (8*np.pi*nu**2/c**3) * kB*T
    norm = planck.max()
    planck /= norm; rj /= norm; rj = np.clip(rj, 0, 4)
    fig, ax = plt.subplots(figsize=(6, 3.5), facecolor='#0D1B2A')
    ax.set_facecolor('#0D1B2A')
    ax.fill_between(nu/1e13, planck, alpha=0.2, color='#00C8FF')
    ax.plot(nu/1e13, planck, color='#00C8FF', lw=2.5, label='Ley de Planck')
    ax.plot(nu/1e13, rj, color='#FF6B35', lw=2.2, ls='--', label='Rayleigh-Jeans')
    mask = rj > 1.1
    ax.fill_between(nu[mask]/1e13, rj[mask], 1.1, color='#FF6B35', alpha=0.15)
    ax.annotate('Catástrofe UV\n(divergencia → ∞)', xy=(nu[mask][len(nu[mask])//2]/1e13, 2.2),
                fontsize=8, color='#FF6B35', ha='center',
                arrowprops=dict(arrowstyle='->', color='#FF6B35'),
                xytext=(nu[mask][len(nu[mask])//2]/1e13, 3.2))
    ax.set_xlabel('Frecuencia (×10¹³ Hz)', color='#AAAABB', fontsize=9)
    ax.set_ylabel('Densidad de energía (norm.)', color='#AAAABB', fontsize=9)
    ax.set_title('Rayleigh-Jeans vs. Planck  (T = 5000 K)', color='white', fontsize=11, pad=8)
    ax.tick_params(colors='#AAAABB')
    for s in ax.spines.values(): s.set_edgecolor('#334455')
    ax.legend(fontsize=8, facecolor='#0D1B2A', edgecolor='#334455', labelcolor='white', loc='upper left')
    ax.set_xlim(0, 30); ax.set_ylim(0, 3.8)
    plt.tight_layout()
    plt.savefig(CHART_RJ, dpi=180, bbox_inches='tight', facecolor='#0D1B2A')
    plt.close()
    print(f"  Chart RJ -> {CHART_RJ}")

# ══════════════════════════════════════════════════════════════════════════
def build_pptx():
    prs = Presentation()
    prs.slide_width  = Inches(13.33)
    prs.slide_height = Inches(7.5)
    blank = prs.slide_layouts[6]

    # ═══════ SLIDE 1: PORTADA ═══════
    s1 = prs.slides.add_slide(blank)
    set_bg(s1)
    rect(s1, 0, 0, 13.33, 0.08, ACCENT1)

    s1.shapes.add_picture(CHART_BB, Inches(6.8), Inches(1.0), Inches(6.2), Inches(3.6))

    tb = textbox(s1, 0.5, 1.0, 6.2, 1.2)
    tf = tb.text_frame; tf.word_wrap = True
    add_text(tf, "El Cuerpo Negro", 38, bold=True, color=ACCENT1)

    tb2 = textbox(s1, 0.5, 2.15, 6.2, 0.8)
    tf2 = tb2.text_frame; tf2.word_wrap = True
    add_text(tf2, "y la Revolución de Planck", 28, bold=True, color=WHITE)

    tb3 = textbox(s1, 0.5, 3.1, 6.2, 0.7)
    tf3 = tb3.text_frame; tf3.word_wrap = True
    add_text(tf3, "De la crisis del paradigma clásico\nal nacimiento de la Física Cuántica", 14, color=GRAY, italic=True)

    rect(s1, 0.5, 4.0, 4.5, 0.03, ACCENT1)

    # Info box
    info_r = rect(s1, 0.5, 4.25, 5.5, 2.0, DARKBG)
    tb4 = textbox(s1, 0.7, 4.35, 5.1, 1.8)
    tf4 = tb4.text_frame; tf4.word_wrap = True
    add_text(tf4, "• Formato: Exposición oral en video (5 minutos max.)", 11, color=WHITE)
    add_text(tf4, "• Enfoque pedagógico: Analogías en Geomática", 11, color=WHITE)
    add_text(tf4, "  y Teledetección", 11, color=ACCENT3)
    add_text(tf4, "• Tópicos: Radiación Térmica | Catástrofe UV", 11, color=WHITE)
    add_text(tf4, "  | Cuantización de Planck", 11, color=WHITE)
    add_text(tf4, "", 4)
    add_text(tf4, "Evaluación 1 — Teoría Cuántica Temprana", 10, color=GRAY)
    add_text(tf4, "Docentes: Pablo Solano · Paulraj Manidurai · 2026", 10, color=GRAY)

    rect(s1, 0, 7.32, 13.33, 0.18, ACCENT1)

    # ═══════ SLIDE 2: CUERPO NEGRO ═══════
    s2 = prs.slides.add_slide(blank)
    set_bg(s2)
    header(s2, "1. La Radiación del Cuerpo Negro e Incapacidad Clásica", ACCENT1)

    s2.shapes.add_picture(CHART_BB, Inches(6.6), Inches(1.15), Inches(6.4), Inches(3.6))

    tb2 = textbox(s2, 0.4, 1.15, 6.0, 3.2)
    tf2 = tb2.text_frame; tf2.word_wrap = True
    add_text(tf2, "Concepto y Propiedades Físicas", 14, bold=True, color=ACCENT3)
    add_text(tf2, "• Cuerpo Negro Ideal: Absorbe el 100% de la radiación", 12, color=WHITE)
    add_text(tf2, "  incidente y emite únicamente en función de T (ε = 1).", 12, color=WHITE)
    add_text(tf2, "• Modelo Experimental: Cavidad con orificio de salida.", 12, color=WHITE)
    add_text(tf2, "", 4)
    add_text(tf2, "Leyes empíricas establecidas", 14, bold=True, color=ACCENT3)
    add_text(tf2, "  Stefan-Boltzmann (1879):   R = σT⁴", 13, bold=True, color=YELLOW)
    add_text(tf2, "  σ = 5.67×10⁻⁸ W m⁻² K⁻⁴", 11, color=GRAY)
    add_text(tf2, "  Wien (1893):   λ_max · T = 2.898×10⁻³ m·K", 13, bold=True, color=YELLOW)
    add_text(tf2, "", 4)
    add_text(tf2, "El desafío", 14, bold=True, color=ACCENT3)
    add_text(tf2, "La curva experimental era precisa y medible.", 12, color=WHITE)
    add_text(tf2, "La energía total es finita — nunca infinita.", 12, bold=True, color=ACCENT2)

    # Analogía Teledetección
    rect(s2, 0.4, 5.0, 12.5, 0.03, ACCENT3)
    analogy_r = rect(s2, 0.4, 5.15, 12.5, 2.0, DARKBG)
    tb_a = textbox(s2, 0.55, 5.2, 12.2, 1.9)
    tf_a = tb_a.text_frame; tf_a.word_wrap = True
    add_text(tf_a, "🌍 Analogía en Teledetección / Radiometría", 13, bold=True, color=ACCENT3)
    add_text(tf_a, '"Un sensor multiespectral (Landsat / Sentinel-2) mide la radiancia espectral.', 11, color=WHITE, italic=True)
    add_text(tf_a, 'Si la teoría clásica fuera cierta, cada banda hacia el UV sumaría energía infinita.', 11, color=WHITE, italic=True)
    add_text(tf_a, 'Sin embargo, los sensores muestran que la radiancia decae en el UV,', 11, color=WHITE, italic=True)
    add_text(tf_a, 'tal como mide un radiómetro de campo."', 11, color=WHITE, italic=True)

    # ═══════ SLIDE 3: CATÁSTROFE UV ═══════
    s3 = prs.slides.add_slide(blank)
    set_bg(s3)
    header(s3, "2. La Catástrofe del Ultravioleta: El Colapso Clásico", ACCENT2)

    s3.shapes.add_picture(CHART_RJ, Inches(6.6), Inches(1.15), Inches(6.4), Inches(3.6))

    tb3 = textbox(s3, 0.4, 1.15, 6.0, 4.8)
    tf3 = tb3.text_frame; tf3.word_wrap = True
    add_text(tf3, "La Ley de Rayleigh-Jeans y la Crisis", 14, bold=True, color=ACCENT2)
    add_text(tf3, "• Teorema de Equipartición: Asigna ⟨E⟩ = k_B·T", 12, color=WHITE)
    add_text(tf3, "  a cada modo de oscilación EM en la cavidad.", 12, color=WHITE)
    add_text(tf3, "• Densidad de Modos: Crece cuadráticamente", 12, color=WHITE)
    add_text(tf3, "  con la frecuencia:  g(f) = 8πf²/c³", 12, color=WHITE)
    add_text(tf3, "", 4)
    add_text(tf3, "Ecuación Clásica de Rayleigh-Jeans:", 13, bold=True, color=ACCENT2)
    add_text(tf3, "  W(f, T) = (8π f² / c³) · k_B T", 14, bold=True, color=YELLOW)
    add_text(tf3, "", 4)
    add_text(tf3, "La Crisis (Paul Ehrenfest, 1911):", 13, bold=True, color=ACCENT2)
    add_text(tf3, "Cuando λ → 0 (f → ∞), la integral de energía", 12, color=WHITE)
    add_text(tf3, "diverge a INFINITO.", 12, bold=True, color=ACCENT2)
    add_text(tf3, "", 3)
    add_text(tf3, "No es un error de cálculo.", 12, color=WHITE)
    add_text(tf3, "Es consecuencia inevitable de combinar", 12, color=WHITE)
    add_text(tf3, "termodinámica + electromagnetismo clásicos.", 12, color=WHITE)
    add_text(tf3, "", 3)
    add_text(tf3, "Infinitos modos × energía fija = ∞", 13, bold=True, color=ACCENT2)

    # ═══════ SLIDE 4: SOLUCIÓN DE PLANCK ═══════
    s4 = prs.slides.add_slide(blank)
    set_bg(s4)
    header(s4, "3. La Hipótesis de Planck y la Cuantización de la Energía", ACCENT3)

    # Columna izquierda
    tb4 = textbox(s4, 0.4, 1.15, 6.1, 3.5)
    tf4 = tb4.text_frame; tf4.word_wrap = True
    add_text(tf4, "El Postulado de Cuantización (1900)", 14, bold=True, color=ACCENT3)
    add_text(tf4, "Los osciladores intercambian energía", 12, color=WHITE)
    add_text(tf4, "únicamente en Paquetes Discretos (cuantos):", 12, color=WHITE)
    add_text(tf4, "  E_n = n · h f    (n = 0, 1, 2, 3...)", 15, bold=True, color=YELLOW)
    add_text(tf4, "  h = 6.626 × 10⁻³⁴ J·s", 12, color=GRAY)
    add_text(tf4, "", 4)
    add_text(tf4, "Distribución Cuántica de Planck:", 13, bold=True, color=ACCENT3)
    add_text(tf4, "  W(f,T) = (8πhf³/c³) · 1/(e^(hf/k_BT) - 1)", 13, bold=True, color=YELLOW)
    add_text(tf4, "", 4)
    add_text(tf4, "Supresión Exponencial:", 13, bold=True, color=ACCENT3)
    add_text(tf4, "A alta frecuencia: hf >> k_BT", 12, color=WHITE)
    add_text(tf4, "→ El \"precio de entrada\" mínimo (hf) supera", 12, color=WHITE)
    add_text(tf4, "  la energía térmica disponible (k_BT).", 12, color=WHITE)
    add_text(tf4, "→ Los modos UV quedan \"congelados\".", 12, bold=True, color=ACCENT3)
    add_text(tf4, "→ W(f) → 0 naturalmente. ¡Sin catástrofe!", 12, bold=True, color=ACCENT3)

    # Gráfica
    s4.shapes.add_picture(CHART_RJ, Inches(6.6), Inches(1.15), Inches(6.4), Inches(3.0))

    # Cita Planck
    tb_q = textbox(s4, 6.6, 4.25, 6.3, 0.6)
    tf_q = tb_q.text_frame; tf_q.word_wrap = True
    add_text(tf_q, '"Un acto de desesperación" — Max Planck', 12, italic=True, color=GRAY, align=PP_ALIGN.CENTER)

    # Analogía DN
    rect(s4, 0.4, 5.0, 12.5, 0.03, ACCENT3)
    rect(s4, 0.4, 5.15, 12.5, 2.0, DARKBG)
    tb_dn = textbox(s4, 0.55, 5.2, 12.2, 1.9)
    tf_dn = tb_dn.text_frame; tf_dn.word_wrap = True
    add_text(tf_dn, "📡 Analogía: Digitalización Radiométrica (DN)", 13, bold=True, color=ACCENT3)
    add_text(tf_dn, "En sensores de Teledetección (Sentinel-2, LiDAR), la radiancia analógica", 11, color=WHITE)
    add_text(tf_dn, "se muestrea en Valores Digitales Discretos (DN). No existe el DN 127.5,", 11, color=WHITE)
    add_text(tf_dn, "solo 127 o 128. Planck aplicó exactamente esta discretización a la energía:", 11, color=WHITE)
    add_text(tf_dn, "si k_BT no alcanza para subir al primer peldaño (hf), el modo queda desierto.", 11, bold=True, color=ACCENT3)

    # ═══════ SLIDE 5: CONCLUSIÓN E IMPACTO ═══════
    s5 = prs.slides.add_slide(blank)
    set_bg(s5)
    header(s5, "Conclusión: El Cambio de Paradigma en la Física", YELLOW)

    # Timeline
    timeline = [
        ("1879",    "Stefan",         "R = σT⁴",                  ACCENT1),
        ("1893",    "Wien",           "λ_max·T = b",              ACCENT1),
        ("1900-05", "Rayleigh-\nJeans", "Catástrofe UV",           ACCENT2),
        ("1900 ★",  "Planck",         "E = nhf",                   ACCENT3),
        ("1905",    "Einstein",       "Fotones\nE = hf",           YELLOW),
        ("1913",    "Bohr",           "L = nℏ\nE_n = -13.6/n²",   ACCENT1),
        ("1925-26", "Heisenberg\nSchrödinger", "ĤΨ = EΨ",         PURPLE),
    ]
    x_start, x_step, y_line = 0.3, 1.8, 2.7
    rect(s5, x_start, y_line + 0.15, 12.5, 0.04, GRAY)

    for i, (yr, name, desc, col) in enumerate(timeline):
        x = x_start + i * x_step
        rect(s5, x, y_line + 0.03, 0.22, 0.28, col)
        tb_yr = textbox(s5, x-0.2, y_line-0.55, 1.5, 0.5)
        add_text(tb_yr.text_frame, yr, 12, bold=True, color=col, align=PP_ALIGN.CENTER)
        tb_n = textbox(s5, x-0.3, y_line+0.45, 1.6, 0.55)
        add_text(tb_n.text_frame, name, 10, bold=True, color=WHITE, align=PP_ALIGN.CENTER)
        tb_d = textbox(s5, x-0.35, y_line+1.0, 1.7, 0.7)
        add_text(tb_d.text_frame, desc, 9, color=GRAY, align=PP_ALIGN.CENTER)

    # Impacto tecnológico
    rect(s5, 0.4, 4.65, 12.5, 0.03, YELLOW)
    tb_imp = textbox(s5, 0.4, 4.8, 12.5, 0.4)
    add_text(tb_imp.text_frame, "Impacto en la Ciencia y Tecnología Moderna", 14, bold=True, color=YELLOW)

    impacts = [
        ("💡 Semiconductores", "La banda prohibida es\nun efecto de cuantización", 0.4),
        ("📡 Sensores CMOS/CCD", "Cámaras satelitales\ndetectan fotones individuales", 4.6),
        ("🔬 Láseres / LiDAR", "Espectrometría: emisi\nón cuántica pura", 8.8),
    ]
    for label, desc, x in impacts:
        r = rect(s5, x, 5.3, 3.8, 1.15, DARKBG)
        tb_i = textbox(s5, x+0.1, 5.35, 3.6, 1.05)
        tf_i = tb_i.text_frame; tf_i.word_wrap = True
        add_text(tf_i, label, 12, bold=True, color=ACCENT3)
        add_text(tf_i, desc, 10, color=WHITE)

    # Frase de cierre
    rect(s5, 1.0, 6.6, 11.3, 0.04, YELLOW)
    tb_c = textbox(s5, 1.0, 6.72, 11.3, 0.6)
    tf_c = tb_c.text_frame; tf_c.word_wrap = True
    add_text(tf_c, '"La catástrofe ultravioleta no fue una falla menor — fue la grieta por donde entró toda la física cuántica."',
             14, italic=True, color=YELLOW, align=PP_ALIGN.CENTER)

    # Guardar
    prs.save(OUT_PPTX)
    print(f"\n✓ Presentación guardada en:\n  {OUT_PPTX}")
    print(f"  Slides: {len(prs.slides)}")

# ── MAIN ──
if __name__ == "__main__":
    print("Generando gráficas HD...")
    make_blackbody_chart()
    make_rj_planck_chart()
    print("Construyendo presentación v3...")
    build_pptx()
