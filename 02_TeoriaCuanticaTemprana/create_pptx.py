import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

# Paths
scratch_dir = r"C:\Users\jorge\.gemini\antigravity\brain\91c9ba88-7aab-4773-945b-d9e180a70db0\scratch"
output_pptx = r"D:\00_FisicaModerna\02_TeoriaCuanticaTemprana\Evaluacion_1_Presentacion.pptx"

img_cuerpo_negro = os.path.join(scratch_dir, "grafica_cuerpo_negro.png")
img_catastrofe_uv = os.path.join(scratch_dir, "grafica_catastrofe_uv.png")

# Crear presentación en 16:9
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6]

# Paleta de Colores
COLOR_BG = RGBColor(15, 23, 42)        # Slate 900
COLOR_CARD = RGBColor(30, 41, 59)      # Slate 800
COLOR_BORDER = RGBColor(71, 85, 105)   # Slate 600
COLOR_TEXT_MAIN = RGBColor(248, 250, 252) # White
COLOR_TEXT_MUTED = RGBColor(203, 213, 225) # Slate 300
COLOR_ACCENT_CYAN = RGBColor(56, 189, 248) # Sky 400
COLOR_ACCENT_AMBER = RGBColor(245, 158, 11) # Amber 500
COLOR_ACCENT_EMERALD = RGBColor(16, 185, 129) # Emerald 500
COLOR_ACCENT_ROSE = RGBColor(244, 63, 94) # Rose 500

def set_slide_background(slide):
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = COLOR_BG

def add_header(slide, title_text, category_text="DIPLOMADO EN FÍSICA MODERNA — EVALUACIÓN 1"):
    # Categoria / Badge
    tb_cat = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.7), Inches(0.4))
    tf_cat = tb_cat.text_frame
    tf_cat.word_wrap = True
    p_cat = tf_cat.paragraphs[0]
    p_cat.text = category_text.upper()
    p_cat.font.size = Pt(10)
    p_cat.font.bold = True
    p_cat.font.color.rgb = COLOR_ACCENT_CYAN

    # Titulo Principal
    tb_title = slide.shapes.add_textbox(Inches(0.8), Inches(0.7), Inches(11.7), Inches(0.8))
    tf_title = tb_title.text_frame
    tf_title.word_wrap = True
    p_title = tf_title.paragraphs[0]
    p_title.text = title_text
    p_title.font.size = Pt(24)
    p_title.font.bold = True
    p_title.font.color.rgb = COLOR_TEXT_MAIN

# -------------------------------------------------------------
# SLIDE 1: PORTADA
# -------------------------------------------------------------
slide1 = prs.slides.add_slide(blank_layout)
set_slide_background(slide1)

# Card Central Portada
card1 = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.5), Inches(1.2), Inches(10.333), Inches(5.1))
card1.fill.solid()
card1.fill.fore_color.rgb = COLOR_CARD
card1.line.color.rgb = COLOR_ACCENT_CYAN
card1.line.width = Pt(2)

tb1 = slide1.shapes.add_textbox(Inches(1.8), Inches(1.6), Inches(9.733), Inches(4.3))
tf1 = tb1.text_frame
tf1.word_wrap = True

p = tf1.paragraphs[0]
p.text = "DIPLOMADO EN FÍSICA MODERNA — EVALUACIÓN 1"
p.font.size = Pt(12)
p.font.bold = True
p.font.color.rgb = COLOR_ACCENT_CYAN
p.space_after = Pt(14)

p2 = tf1.add_paragraph()
p2.text = "El Cuerpo Negro y la Revolución de Planck"
p2.font.size = Pt(32)
p2.font.bold = True
p2.font.color.rgb = COLOR_TEXT_MAIN
p2.space_after = Pt(10)

p3 = tf1.add_paragraph()
p3.text = "De la crisis del paradigma clásico al nacimiento de la Física Cuántica"
p3.font.size = Pt(18)
p3.font.color.rgb = COLOR_TEXT_MUTED
p3.space_after = Pt(28)

p4 = tf1.add_paragraph()
p4.text = "• Formato: Exposición oral en video (5 minutos max.)\n• Enfoque pedagógico: Aplicaciones y analogías en Geomática y Teledetección\n• Tópicos: Radiación Térmica | Catástrofe Ultravioleta | Cuantización de Planck"
p4.font.size = Pt(13)
p4.font.color.rgb = COLOR_TEXT_MUTED
p4.line_spacing = 1.3

# Speaker Notes
slide1.notes_slide.notes_text_frame.text = (
    "TIEMPO: 0:00 - 0:20 (20 segundos)\n"
    "GUIÓN DE APERTURA:\n"
    "\"A finales del siglo XIX, la física clásica era considerada prácticamente completa. Sin embargo, "
    "un problema aparentemente simple — ¿cómo emite luz un objeto caliente? — reveló una contradicción "
    "tan grave que destruyó los fundamentos clásicos. Hoy veremos ese problema, por qué la solución "
    "clásica fue catastrófica, y cómo Max Planck propuso en 1900 una idea revolucionaria: que la energía "
    "no puede tomar cualquier valor continuo.\""
)

# -------------------------------------------------------------
# SLIDE 2: TÓPICO 1 — EL CUERPO NEGRO
# -------------------------------------------------------------
slide2 = prs.slides.add_slide(blank_layout)
set_slide_background(slide2)
add_header(slide2, "1. La Radiación del Cuerpo Negro e Incapacidad Clásica")

# Columna Izquierda: Contenido Teórico y Analogía
card2_left = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.6), Inches(6.0), Inches(5.3))
card2_left.fill.solid()
card2_left.fill.fore_color.rgb = COLOR_CARD
card2_left.line.color.rgb = COLOR_BORDER

tb2_left = slide2.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.6), Inches(4.9))
tf2_left = tb2_left.text_frame
tf2_left.word_wrap = True

p = tf2_left.paragraphs[0]
p.text = "Concepto y Propiedades Físicas"
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = COLOR_ACCENT_AMBER
p.space_after = Pt(8)

p = tf2_left.add_paragraph()
p.text = "• Cuerpo Negro Ideal: Absorbe el 100% de la radiación incidente y emite únicamente en función de su temperatura T (emisividad = 1).\n• Modelo Experimental: Cavidad cerrada con un pequeño orificio de salida.\n• Ley de Desplazamiento de Wien:"
p.font.size = Pt(13)
p.font.color.rgb = COLOR_TEXT_MUTED
p.line_spacing = 1.2

# Formula Box
p_f = tf2_left.add_paragraph()
p_f.text = "   λ_max · T = b = 2.898 × 10⁻³ m·K"
p_f.font.size = Pt(14)
p_f.font.bold = True
p_f.font.color.rgb = COLOR_ACCENT_CYAN
p_f.space_before = Pt(4)
p_f.space_after = Pt(12)

# Analogía Teledetección
p_a_head = tf2_left.add_paragraph()
p_a_head.text = "Analogía en Teledetección / Radiometría:"
p_a_head.font.size = Pt(14)
p_a_head.font.bold = True
p_a_head.font.color.rgb = COLOR_ACCENT_CYAN

p_a = tf2_left.add_paragraph()
p_a.text = "\"Un sensor multiespectral (Landsat / Sentinel-2) mide la radiancia espectral. Si la teoría clásica fuera cierta, cada banda hacia el UV sumaría energía infinita. Sin embargo, los sensores muestran que la radiancia decae en el UV, tal como mide un radiómetro de campo.\""
p_a.font.size = Pt(12)
p_a.font.italic = True
p_a.font.color.rgb = COLOR_TEXT_MAIN
p_a.line_spacing = 1.2

# Columna Derecha: Imagen Espectro
slide2.shapes.add_picture(img_cuerpo_negro, Inches(7.0), Inches(1.6), width=Inches(5.5))

slide2.notes_slide.notes_text_frame.text = (
    "TIEMPO: 0:20 - 1:20 (60 segundos)\n"
    "GUIÓN DE EXPOSICIÓN:\n"
    "\"Un cuerpo negro ideal es un objeto que absorbe el 100% de la radiación recibida y la re-emite "
    "de forma pura según su temperatura. La cavidad con un pequeño orificio es la mejor aproximación experimental.\n"
    "Al calentar el cuerpo, la emisión forma una curva de campana cuyo máximo se desplaza a longitudes de onda "
    "más cortas según la Ley de Wien (λ_max·T = b). Un hierro brilla rojo; el Sol a ~5800K emite en el visible.\n"
    "Para entenderlo desde la Teledetección: imagina un radiómetro multiespectral aerotransportado midiendo la "
    "radiancia de una superficie. Los sensores reales como Landsat o Sentinel-2 registran que la señal cae en el UV, "
    "pero la física clásica no lograba explicar este corte.\""
)

# -------------------------------------------------------------
# SLIDE 3: TÓPICO 2 — LA CATÁSTROFE ULTRAVIOLETA
# -------------------------------------------------------------
slide3 = prs.slides.add_slide(blank_layout)
set_slide_background(slide3)
add_header(slide3, "2. La Catástrofe del Ultravioleta: El Colapso Clásico")

# Columna Izquierda: Teoria Clasica y Falla
card3_left = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.6), Inches(6.0), Inches(5.3))
card3_left.fill.solid()
card3_left.fill.fore_color.rgb = COLOR_CARD
card3_left.line.color.rgb = COLOR_ACCENT_ROSE

tb3_left = slide3.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.6), Inches(4.9))
tf3_left = tb3_left.text_frame
tf3_left.word_wrap = True

p = tf3_left.paragraphs[0]
p.text = "La Ley de Rayleigh-Jeans y la Crisis"
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = COLOR_ACCENT_ROSE
p.space_after = Pt(8)

p = tf3_left.add_paragraph()
p.text = "• Teorema de Equipartición: Asigna una energía media constante ⟨E⟩ = k_B·T a cada modo de oscilación electromagnética en la cavidad.\n• Densidad de Modos: Crece cuadráticamente con la frecuencia (g(f) = 8πf²/c³).\n• Ecuación Clásica de Rayleigh-Jeans:"
p.font.size = Pt(13)
p.font.color.rgb = COLOR_TEXT_MUTED
p.line_spacing = 1.2

p_f = tf3_left.add_paragraph()
p_f.text = "   W(f, T) = (8π f² / c³) · k_B T"
p_f.font.size = Pt(15)
p_f.font.bold = True
p_f.font.color.rgb = COLOR_ACCENT_CYAN
p_f.space_before = Pt(4)
p_f.space_after = Pt(12)

p_fail_head = tf3_left.add_paragraph()
p_fail_head.text = "La Crisis Implícita (Paul Ehrenfest, 1911):"
p_fail_head.font.size = Pt(14)
p_fail_head.font.bold = True
p_fail_head.font.color.rgb = COLOR_ACCENT_ROSE

p_fail = tf3_left.add_paragraph()
p_fail.text = "Cuando λ → 0 (f → ∞), la integral de energía diverge a INFINITO. La física clásica predecía que cualquier cuerpo a temperatura ambiente debería emitir una radiación ultravioleta y de rayos X destructiva e infinita. ¡Una falla insostenible de la termodinámica clásica!"
p_fail.font.size = Pt(12)
p_fail.font.color.rgb = COLOR_TEXT_MAIN
p_fail.line_spacing = 1.2

# Columna Derecha: Gráfica Catástrofe UV
slide3.shapes.add_picture(img_catastrofe_uv, Inches(7.0), Inches(1.6), width=Inches(5.5))

slide3.notes_slide.notes_text_frame.text = (
    "TIEMPO: 1:20 - 2:35 (75 segundos)\n"
    "GUIÓN DE EXPOSICIÓN:\n"
    "\"Lord Rayleigh y James Jeans aplicaron el teorema de equipartición: cada modo oscilatorio tiene energía promedio k_B·T. "
    "Como el número de modos crece proporcionalmente a f², la densidad de energía resulta W(f) = (8πf²/c³)·k_B·T.\n"
    "Esta fórmula funciona en frecuencias bajas (infrarrojo), pero en el ultravioleta predice que la energía se dispara al infinito.\n"
    "Esto fue bautizado por Paul Ehrenfest en 1911 como la Catástrofe del Ultravioleta. No era un error numérico, "
    "sino una consecuencia directa e inevitable de la física clásica: predecía que un simple horno encendido emitiría "
    "energía infinita en el UV. La física clásica había entrado en una crisis insostenible.\""
)

# -------------------------------------------------------------
# SLIDE 4: TÓPICO 3 — LA SOLUCIÓN DE PLANCK Y CUANTIZACIÓN
# -------------------------------------------------------------
slide4 = prs.slides.add_slide(blank_layout)
set_slide_background(slide4)
add_header(slide4, "3. La Hipótesis de Planck y la Cuantización de la Energía")

# Columna Izquierda: Hipótesis de Planck
card4_left = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.6), Inches(5.8), Inches(5.3))
card4_left.fill.solid()
card4_left.fill.fore_color.rgb = COLOR_CARD
card4_left.line.color.rgb = COLOR_ACCENT_EMERALD

tb4_left = slide4.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.4), Inches(4.9))
tf4_left = tb4_left.text_frame
tf4_left.word_wrap = True

p = tf4_left.paragraphs[0]
p.text = "El Postulado de Cuantización (1900)"
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = COLOR_ACCENT_EMERALD
p.space_after = Pt(8)

p = tf4_left.add_paragraph()
p.text = "• Hipótesis de Planck: Los osciladores en las paredes de la cavidad intercambian energía únicamente en Paquetes Discretos (cuantos):"
p.font.size = Pt(12)
p.font.color.rgb = COLOR_TEXT_MUTED

p_f = tf4_left.add_paragraph()
p_f.text = "   E_n = n · h f  (n = 0, 1, 2, 3...)"
p_f.font.size = Pt(15)
p_f.font.bold = True
p_f.font.color.rgb = COLOR_ACCENT_CYAN
p_f.space_before = Pt(4)
p_f.space_after = Pt(6)

p = tf4_left.add_paragraph()
p.text = "• Constante de Planck: h = 6.626 × 10⁻³⁴ J·s\n• Distribución Cuántica de Planck:"
p.font.size = Pt(12)
p.font.color.rgb = COLOR_TEXT_MUTED

p_f2 = tf4_left.add_paragraph()
p_f2.text = "   W(f, T) = (8π h f³ / c³) · [1 / (e^(hf/k_BT) - 1)]"
p_f2.font.size = Pt(13)
p_f2.font.bold = True
p_f2.font.color.rgb = COLOR_ACCENT_AMBER
p_f2.space_before = Pt(4)
p_f2.space_after = Pt(10)

p = tf4_left.add_paragraph()
p.text = "• Supresión Exponencial: A alta frecuencia (hf >> k_B T), el término exponencial e^(hf/k_BT) tiende a ∞, haciendo que W(f) → 0. ¡La catástrofe desaparece de forma natural!"
p.font.size = Pt(12)
p.font.color.rgb = COLOR_TEXT_MAIN

# Columna Derecha: Analogía Teledetección (Digitalización Radiométrica)
card4_right = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.6), Inches(5.7), Inches(5.3))
card4_right.fill.solid()
card4_right.fill.fore_color.rgb = COLOR_CARD
card4_right.line.color.rgb = COLOR_ACCENT_CYAN

tb4_right = slide4.shapes.add_textbox(Inches(7.0), Inches(1.8), Inches(5.3), Inches(4.9))
tf4_right = tb4_right.text_frame
tf4_right.word_wrap = True

p = tf4_right.paragraphs[0]
p.text = "Analogía: Digitalización Radiométrica (DN)"
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = COLOR_ACCENT_CYAN
p.space_after = Pt(10)

p = tf4_right.add_paragraph()
p.text = "En sensores de Teledetección (Sentinel-2, LiDAR), la radiancia analógica continua se muestrea en Valores Digitales Discretos (Digital Numbers - DN). No existe el DN 127.5, solo 127 o 128.\n\nPlanck aplicó exactamente esta discretización a la energía: la energía no fluye como rampa continua, sino en escalones de tamaño hf.\n\nA altas frecuencias, el escalón hf es tan grande que la energía térmica k_BT no alcanza para subir al primer peldaño (como intentar medir 0.001 DN en un sensor de 8 bits). Por eso los modos UV quedan desiertos."
p.font.size = Pt(12)
p.font.color.rgb = COLOR_TEXT_MUTED
p.line_spacing = 1.3

slide4.notes_slide.notes_text_frame.text = (
    "TIEMPO: 2:35 - 4:05 (90 segundos)\n"
    "GUIÓN DE EXPOSICIÓN:\n"
    "\"En diciembre de 1900, Max Planck propuso una solución radical: los osciladores no pueden intercambiar energía de forma continua, "
    "sino únicamente en paquetes discretos E = n·h·f, donde h es la constante de Planck (6.626×10⁻³⁴ J·s).\n"
    "La energía promedio cuántica resulta ⟨E⟩ = hf / (e^(hf/k_BT) - 1). A altas frecuencias, cuando hf >> k_B·T, el denominador exponencial "
    "crece tan rápido que la emisión cae a cero. La catástrofe se elimina naturalmente porque la temperatura disponible no alcanza para activar los cuantos UV.\n"
    "Para entenderlo desde la Teledetección: es como la digitalización radiométrica en un sensor (DN en Sentinel-2). La señal continua "
    "se convierte en valores discretos: no hay DN 127.5. A alta frecuencia, el peldaño hf es tan grande que equivale a intentar registrar "
    "0.001 DN en un sensor de 8 bits: la resolución no alcanza y la señal se corta.\""
)

# -------------------------------------------------------------
# SLIDE 5: CONCLUSIÓN E IMPACTO HISTÓRICO
# -------------------------------------------------------------
slide5 = prs.slides.add_slide(blank_layout)
set_slide_background(slide5)
add_header(slide5, "Conclusión: El Cambio de Paradigma en la Física")

# 4 Cards Horizontales para Línea de Tiempo
timeline_data = [
    ("1900 — Planck", "Hipótesis del cuanto E = hf para resolver el cuerpo negro.", COLOR_ACCENT_AMBER),
    ("1905 — Einstein", "Cuantos de luz (fotones) y explicación del Efecto Fotoeléctrico.", COLOR_ACCENT_CYAN),
    ("1913 — Bohr", "Cuantización de órbitas atómicas y espectro del Hidrógeno.", COLOR_ACCENT_EMERALD),
    ("1925 — Schrödinger", "Ecuación de onda y consolidación de la Mecánica Cuántica.", COLOR_ACCENT_ROSE)
]

card_w = Inches(2.7)
card_h = Inches(2.5)

for i, (title, desc, color) in enumerate(timeline_data):
    left_pos = Inches(0.8 + i * 2.95)
    card = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left_pos, Inches(1.6), card_w, card_h)
    card.fill.solid()
    card.fill.fore_color.rgb = COLOR_CARD
    card.line.color.rgb = color
    card.line.width = Pt(2)

    tb = slide5.shapes.add_textbox(left_pos + Inches(0.15), Inches(1.75), card_w - Inches(0.3), card_h - Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    
    p = tf.paragraphs[0]
    p.text = title
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = color
    p.space_after = Pt(8)

    p2 = tf.add_paragraph()
    p2.text = desc
    p2.font.size = Pt(11)
    p2.font.color.rgb = COLOR_TEXT_MUTED
    p2.line_spacing = 1.2

# Card Inferior de Cierre e Impacto
card5_bottom = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(4.3), Inches(11.7), Inches(2.6))
card5_bottom.fill.solid()
card5_bottom.fill.fore_color.rgb = COLOR_CARD
card5_bottom.line.color.rgb = COLOR_ACCENT_CYAN

tb5_bottom = slide5.shapes.add_textbox(Inches(1.0), Inches(4.5), Inches(11.3), Inches(2.2))
tf5_bottom = tb5_bottom.text_frame
tf5_bottom.word_wrap = True

p = tf5_bottom.paragraphs[0]
p.text = "Impacto en la Ciencia y Tecnología Moderna"
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = COLOR_ACCENT_CYAN
p.space_after = Pt(8)

p = tf5_bottom.add_paragraph()
p.text = "• De la Desesperación a la Revolución: Planck calificó su hipótesis como 'un acto de desesperación'. Sin embargo, inauguró el cambio de paradigma más drástico de la historia de la física.\n• Fundamento Tecnológico Actual: La cuantización de la energía sustenta el desarrollo de semiconductores, láseres, sensores CMOS/CCD de cámaras satelitales y espectrometría de masa.\n• Cierre Epistemológico: La catástrofe ultravioleta no fue una falla menor, sino la grieta por donde nació la física del siglo XX."
p.font.size = Pt(12)
p.font.color.rgb = COLOR_TEXT_MAIN
p.line_spacing = 1.3

slide5.notes_slide.notes_text_frame.text = (
    "TIEMPO: 4:05 - 4:40 (35 segundos)\n"
    "GUIÓN DE CIERRE:\n"
    "\"Planck no buscaba revolucionar la física: él mismo describió su hipótesis como 'un acto de desesperación'. "
    "Sin embargo, al postular que la energía se intercambia en paquetes discretos E = n·h·f, abrió la puerta a un cambio "
    "de paradigma que hoy sustenta desde los semiconductores hasta los láseres y los sensores multiespectrales satelitales.\n"
    "La catástrofe ultravioleta no fue una falla menor — fue la grieta por donde entró toda la física cuántica contemporánea.\""
)

# Guardar Presentación
prs.save(output_pptx)
print(f"Presentacion PowerPoint generada con exito en:\n{output_pptx}")
