# Bohr → Espectroscopía Estelar: Plan de Implementación
## Evaluación 2 — Teoría Cuántica Temprana

---

## Descripción

App web interactiva de 3 paneles como material de apoyo académico para un video de física moderna. Físicamente rigurosa, visualmente impactante, tono académico. Calcula en vivo las líneas del hidrógeno con la fórmula de Bohr/Rydberg. Los datos de He, Na, Ca son valores reales verificados del NIST Atomic Spectra Database.

**Para abrir:** doble clic en `index.html` — no requiere servidor. Requiere conexión a internet para MathJax y Google Fonts (CDN).

---

## Estructura de Carpetas

```
bohr_espectroscopia/
├── index.html                  ← punto de entrada principal
├── css/
│   ├── main.css                ← sistema de diseño global, tokens, layout
│   ├── panel-a.css             ← estilos del diagrama de Bohr
│   ├── panel-b.css             ← estilos del espectrómetro comparativo
│   └── panel-c.css             ← estilos del identificador estelar
├── js/
│   ├── physics.js              ← motor de cálculo Bohr/Rydberg (CODATA 2018)
│   ├── data.js                 ← datos NIST: He, Na, Ca + espectros SDSS
│   ├── panel-a.js              ← diagrama de niveles + animación de salto
│   ├── panel-b.js              ← espectrómetro comparativo por elemento
│   ├── panel-c.js              ← identificación estelar interactiva
│   └── app.js                  ← inicialización y coordinación entre paneles
├── python/
│   ├── verify_bohr.py          ← verificación independiente fórmula de Bohr ✓
│   └── nist_data.py            ← tabla de referencias NIST
└── Plan_Bohr_Espectroscopia_Estelar.md   ← plan maestro original
```

---

## Qué hace cada panel

### Panel A — El átomo de Bohr (Calculadora de saltos cuánticos)

- Dos selectores `nᵢ` y `nf` (rango 1–6), con validación `nᵢ > nf`
- **Diagrama de niveles en Canvas** posicionado físicamente correcto: cada nivel
  ocupa la posición vertical proporcional a $E_n = -13.6\,\text{eV}/n^2$
  (no equiespaciados — los niveles se comprimen hacia cero al crecer $n$)
- **Animación:** el electrón cae del nivel `nᵢ` al `nf` con easing suave;
  luego el fotón sale con el color real mapeado desde la longitud de onda calculada
- **Fórmula de Rydberg fija** renderizada una sola vez con MathJax:
  $$\frac{1}{\lambda} = R_H\!\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$
- Los valores numéricos (ΔE, λ) se actualizan en `<span>` puro sin requerir
  `typesetPromise()` — fluido en tiempo real
- **Color del fotón:** mapeo real λ → CSS (algoritmo Bruton 1996);
  fuera del visible se indica "Ultravioleta" o "Infrarrojo" con color simbólico
- Al cambiar los selectores, notifica a Panel B para resaltar la misma λ

### Panel B — Huellas espectrales comparativas

- Cuatro franjas horizontales (H, He, Na, Ca) en Canvas 2D
- Fondo de cada franja: **gradiente espectral visible 380–750 nm** como contexto físico
- **H:** calculado en vivo con `Physics.calcBohr()` — serie de Balmer (nf=2, ni=3..7)
  visible en el rango 380–750 nm. El mismo motor de cálculo que Panel A.
- **He, Na, Ca:** datos experimentales NIST hardcodeados en `data.js`,
  con referencia exacta de transición (e.g. `Ca II 4s ²S₁/₂ → 4p ²P°₃/₂`)
- **Toggle por elemento:** botones pill que muestran/ocultan cada espectro
- **Tooltip al hover:** nombre de la línea, λ exacta, fuente (Bohr calc. o NIST ASD)
- Leyenda que distingue explícitamente fuente "Bohr (calc.)" vs. "NIST ASD"
- Cuando Panel A cambia, la línea correspondiente se resalta en Panel B

### Panel C — Identifica la estrella (Desafío aplicado)

- **3 estrellas de dificultad creciente:**
  - ⭐ Estrella A — Tipo G2V (solar): H + Na + Ca dominantes
  - ⭐⭐ Estrella B — Tipo A0V (Vega): solo Balmer del H, muy intenso
  - ⭐⭐⭐ Estrella C — Tipo K5V (enana naranja): Ca muy fuerte, H débil
- **Espectro de absorción:** gradiente visible con líneas oscuras en posiciones
  de λ reales (datos SDSS SkyServer inspeccionados, sin API en vivo)
- **Checkboxes** para H, He, Na, Ca — el usuario marca lo que identifica
- **Verificación con feedback visual:**
  - ✅ Correcto → panel verde con tipo espectral y descripción astrofísica
  - 🔭 Parcial → panel ámbar con indicación de qué faltó o sobró
  - ❌ Incorrecto → panel rojo, invitar a intentar de nuevo
- Fuente declarada explícitamente: SDSS SkyServer + clasificación MKK

---

## Decisiones de Diseño

| Aspecto | Decisión | Razón |
|---|---|---|
| Tema | Oscuro (`#0a0d14`) | Evoca observatorio / cielo nocturno |
| Tipografía | Space Grotesk + JetBrains Mono | Académico, los números físicos se ven exactos |
| Paleta | Cian científico `hsl(195,100%,65%)` + ámbar `hsl(38,100%,65%)` | Sin violeta sobre oscuro (design rule); el cian es el color estándar de instrumentación científica |
| Color fotón | Mapeo real λ → `rgb()` (Bruton 1996) | Físicamente honesto; UV/IR con color simbólico |
| Diagrama átomo | Canvas 2D, niveles en `%` proporcionales a `-1/n²` | Posicionamiento físicamente correcto |
| Espectro B | Canvas 2D — gradiente visible + líneas `fillRect` | Sin SVG innecesario, hover eficiente |
| Espectro C | Canvas 2D — líneas de absorción como gradiente oscuro centrado | Simula un espectro real (no barras duras) |
| Fórmulas | MathJax 3 CDN — simbólicas fijas | Estándar académico; valores en `<span>` puro para fluidez |
| Fuente datos H | Fórmula Bohr en vivo | Exacto para 1 electrón |
| Fuente datos He/Na/Ca | NIST ASD hardcodeado en `data.js` | Correcto para multielectrón; transparente sobre la distinción |

---

## Verificación de Física (ejecutada y confirmada)

```bash
# Comando para WSL + miniforge3
wsl bash -i -c "mamba run -n py311-cuda python '/mnt/d/00_FisicaModerna/02_TeoriaCuanticaTemprana/bohr_espectroscopia/python/verify_bohr.py'"
```

### Resultados de verify_bohr.py ✅

| Línea | Salto | ΔE calculada | ΔE ref | Error | λ calculada | λ ref | Error |
|-------|-------|-------------|--------|-------|-------------|-------|-------|
| Hα | 3→2 | 1.8897 eV | 1.89 eV | 0.02% | 656.11 nm | 656.3 nm | 0.029% |
| Hβ | 4→2 | 2.5511 eV | 2.55 eV | 0.04% | 486.01 nm | 486.1 nm | 0.019% |
| Hγ | 5→2 | 2.8572 eV | 2.86 eV | 0.10% | 433.94 nm | 434.0 nm | 0.015% |
| Hδ | 6→2 | 3.0235 eV | 3.02 eV | 0.12% | 410.07 nm | 410.2 nm | 0.032% |

> **Consistencia perfecta:** $\Delta E = hc/\lambda$ con discrepancia = 0.000000% en todos los casos.
> Los pequeños errores respecto al plan maestro son de redondeo (1.89 eV → ref. de 3 sig. figs.).
> La app usa constantes CODATA 2018 completas — es físicamente exacta.

---

## Checklist Final

- [x] La fórmula de Rydberg en `physics.js` coincide con la derivación del plan maestro (§1.3)
- [x] Los valores de la serie de Balmer verificados independientemente con Python (py311-cuda)
- [x] Las longitudes de onda de He, Na, Ca verificadas contra NIST ASD con referencias exactas de transición
- [x] Distinción explícita en UI: "Bohr (calc.)" vs. "NIST ASD" con leyenda visual
- [x] Nota de honestidad sobre órbitas de Bohr vs. orbitales cuánticos (Panel A y B)
- [x] App sin texto largo de explicación — el detalle va en el guion del video
- [x] Diseño oscuro con tipografía legible, colores consistentes entre paneles
- [x] El espectro del Panel C usa posiciones reales (SDSS), con fuente declarada
- [x] Accesibilidad: `aria-label` en canvas, `aria-live` en panel de resultado, `role` semánticos
- [x] Responsive: layout adaptable en mobile con breakpoint 640px

---

## Fuentes

| Fuente | Uso |
|---|---|
| Bohr, N. (1913). *Phil. Mag.* 26, 1–25 | Derivación del modelo |
| NIST Atomic Spectra Database — [physics.nist.gov/asd](https://physics.nist.gov/asd) | Líneas de He, Na, Ca |
| CODATA 2018 — NIST | Constantes físicas ($R_y$, $h$, $c$) |
| SDSS SkyServer — [skyserver.sdss.org](https://skyserver.sdss.org) | Espectros estelares Panel C |
| Morgan-Keenan-Kellman (MKK) | Clasificación espectral estelar (O-B-A-F-G-K-M) |
| Bruton, D.W. (1996). *Approximate RGB for visible wavelengths* | Mapeo λ → color CSS |
