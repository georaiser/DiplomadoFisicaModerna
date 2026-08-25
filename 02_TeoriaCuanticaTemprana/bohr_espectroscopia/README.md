# Bohr → Espectroscopía Estelar
### Evaluación 2 · Teoría Cuántica Temprana — Física Moderna

[![Física Rigurosa](https://img.shields.io/badge/F%C3%ADsica-CODATA%202018%20%2F%20NIST-00d4ff.svg)](https://physics.nist.gov/asd)
[![Verificación](https://img.shields.io/badge/Python-Verificado%200.000%25-10b981.svg)](python/verify_bohr.py)
[![Licencia](https://img.shields.io/badge/Licencia-Acad%C3%A9mica-a855f7.svg)](#referencias-y-fuentes)

> **Pregunta guía:** *¿Cómo sabemos con certeza de qué está compuesta una estrella ubicada a cientos de años luz de distancia, sin haberla tocado jamás?*

---

## 🌌 Descripción General

Esta aplicación web interactiva es un instrumento académico desarrollado para explorar y demostrar la conexión fundamental entre el **modelo atómico de Niels Bohr (1913)** y la **espectroscopía astronómica moderna**.

Combina cálculo analítico exacto en tiempo real, renderizado matemático LaTeX con MathJax 3, visualizaciones en Canvas HTML5 de alto rendimiento y datos espectrales experimentales tabulados de referencia estándar internacional (**NIST Atomic Spectra Database** y **SDSS SkyServer**).

---

## 📐 Fundamento Físico y Matemático

### 1. El problema de la física clásica (Rutherford, 1911)
El modelo planetario de Rutherford predecía que un electrón acelerado en órbita circular debía emitir radiación electromagnética continua (ecuaciones de Maxwell), perdiendo energía y colapsando en espiral hacia el núcleo en aproximadamente $\sim 10^{-11}\text{ s}$. Además, los espectros observados eran discretos (líneas de emisión y absorción), no continuos.

### 2. Postulado de Bohr: Cuantización del Momento Angular (1913)
Bohr postuló que el momento angular orbital $L$ del electrón solo puede adoptar múltiplos enteros de $\hbar = h / (2\pi)$:

$$L = m_e v r = n\hbar, \qquad n = 1, 2, 3, \dots$$

### 3. Derivación analítica paso a paso

#### Paso I — Radio de las órbitas permitidas ($r_n$)
Igualando la fuerza electrostática de Coulomb con la fuerza centrípeta para un ion hidrogenoide con carga nuclear $Z$:

$$\frac{k Z e^2}{r^2} = \frac{m_e v^2}{r} \implies v^2 = \frac{k Z e^2}{m_e r}$$

Sustituyendo la velocidad desde el postulado de cuantización ($v = n\hbar / (m_e r)$):

$$r_n = \frac{n^2 \hbar^2}{m_e k Z e^2} = \frac{n^2}{Z} \cdot a_0$$

donde $a_0 = \frac{\hbar^2}{m_e k e^2} \approx 0.529177\text{ \AA}$ es el **radio de Bohr**.

#### Paso II — Niveles de energía cuantizados ($E_n$)
La energía total es la suma de la energía cinética y potencial electrostática:

$$E_n = K + U = \frac{1}{2}m_e v^2 - \frac{k Z e^2}{r_n} = -\frac{k Z e^2}{2 r_n}$$

Sustituyendo $r_n$:

$$E_n = -\frac{m_e k^2 e^4}{2\hbar^2} \cdot \frac{Z^2}{n^2} = -R_y \cdot \frac{Z^2}{n^2} = -\frac{13.6057\text{ eV} \cdot Z^2}{n^2}$$

#### Paso III — Fotón emitido y Fórmula de Rydberg
Cuando el electrón transita de un estado inicial $n_i$ a uno final $n_f$ ($n_i > n_f$):

$$\Delta E = E_{n_i} - E_{n_f} = 13.6057\text{ eV} \cdot Z^2 \left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

Dado que $\Delta E = h\nu = \frac{hc}{\lambda}$, se obtiene la **fórmula de Rydberg generalizada**:

$$\frac{1}{\lambda} = R_H \cdot Z^2 \left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right), \qquad R_H = 1.096776 \times 10^7\text{ m}^{-1}$$

---

## 🏛️ Estructura del Proyecto

```
bohr_espectroscopia/
├── index.html                  # Punto de entrada de la aplicación web
├── README.md                   # Documentación técnica completa para GitHub
├── Plan_Implementacion.md      # Registro del diseño de arquitectura técnica
├── Plan_Bohr_Espectroscopia_Estelar.md # Plan maestro y guion académico
├── css/
│   ├── main.css                # Sistema de diseño, tokens, layout y tipografía
│   ├── panel-a.css             # Estilos del diagrama de niveles de Bohr
│   ├── panel-b.css             # Estilos del espectrómetro multielemento
│   └── panel-c.css             # Estilos del identificador estelar
├── js/
│   ├── physics.js              # Motor de cálculo físico (Bohr, Rydberg, Saha)
│   ├── data.js                 # Datos NIST ASD (He, Na, Ca) y SDSS DR17
│   ├── panel-a.js              # Lógica y canvas del Panel A (eje roto)
│   ├── panel-b.js              # Lógica y canvas del Panel B (espectrómetro)
│   ├── panel-c.js              # Lógica y canvas del Panel C (clasificación MK)
│   └── app.js                  # Coordinador de eventos y fondo de estrellas
└── python/
    ├── verify_bohr.py          # Verificación numérica independiente
    └── nist_data.py            # Tabla de referencia y validación NIST
```

---

## 🔬 Descripción de los 3 Paneles Interactivos

### Panel A · El Átomo de Bohr (Calculadora de Saltos Cuánticos)
* **Diagrama con eje roto (*broken-axis*):** Soluciona la disparidad de escala entre $n=1$ ($-13.60\text{ eV}$) y $n=2\dots 6$ ($-3.40\text{ eV}$ a $-0.38\text{ eV}$), evitando zonas vacías y permitiendo apreciar el agrupamiento asintótico hacia el continuo de ionización ($E=0$).
* **Selector de Carga Nuclear ($Z$):** Permite transitar entre sistemas hidrogenoides:
  * $Z=1$: Hidrógeno ($H$) — Balmer visible ($\text{H}\alpha = 656.1\text{ nm}$).
  * $Z=2$: Helio monovariante ionizado ($\text{He}^+$) — líneas comprimidas al UV ($\times 4$ en energía).
  * $Z=3$: Litio doblemente ionizado ($\text{Li}^{2+}$).
  * $Z=4$: Berilio triplemente ionizado ($\text{Be}^{3+}$).
* **Steppers de niveles ($n_i \to n_f$):** Control interactivo discreto con cálculo en vivo de $\Delta E\text{ (eV)}$ y $\lambda\text{ (nm)}$.
* **Animación de transición:** El electrón decae con curva de aceleración física, seguido por la propagación de una onda sinusoidal transversal con el color real de su longitud de onda ($\text{RGB}$ calculado según Bruton, 1996).

### Panel B · Huellas Espectrales por Elemento
* **Espectrómetro comparativo en Canvas 2D:** Franjas horizontales para $\text{H}$, $\text{He}$, $\text{Na}$ y $\text{Ca II}$ superpuestas sobre un gradiente de referencia del espectro continuo visible ($380 - 750\text{ nm}$).
* **Sincronización en vivo con Panel A:** Las líneas del hidrógeno reaccionan dinámicamente al valor de $Z$ configurado en el Panel A, mientras que las líneas de $\text{He}$, $\text{Na}$ y $\text{Ca}$ permanecen fijas (datos experimentales).
* **Toggles interactivos y Tooltips:** Inspección granular de cada transición con longitud de onda exacta, nomenclatura espectroscópica (ej. Doblete D de Fraunhofer, serie de Balmer) y fuente citada.

### Panel C · Identifica la Estrella (Desafío Espectroscópico Aplicado)
* **Espectros estelares calibrados con SDSS:** Tres tipos espectrales basados en el sistema Morgan–Keenan (MKK):
  * **Espectro A ($\text{G2V}$):** Análogo solar ($T \sim 5780\text{ K}$) con absorción prominente de $\text{Ca II}$ (líneas H y K), $\text{Na I}$ (doblete D) e hidrógeno moderado.
  * **Espectro B ($\text{A0V}$):** Tipo Vega ($T \sim 9600\text{ K}$) con líneas de Balmer intensas y dominantes.
  * **Espectro C ($\text{K5V}$):** Enana naranja ($T \sim 4400\text{ K}$) con ionización de $\text{Ca II}$ dominante y bajo hidrógeno neutro.
* **Slider de Temperatura Estelar ($T = 2000 - 50000\text{ K}$):** Modula la opacidad y fuerza de las líneas espectrales en tiempo real mediante una aproximación analítica de la ecuación de **Saha-Boltzmann**, actualizando la clasificación espectral Harvard ($O-B-A-F-G-K-M$).
* **Matriz de Identificación:** Permite al usuario contrastar las líneas oscuras contra las firmas espectrales del Panel B y recibir retroalimentación astrofísica detallada.

---

## ⚖️ Honestidad y Rigor Conceptual

| Elemento / Aspecto | Tratamiento Físico en la App | Justificación Teórica |
|---|---|---|
| **Líneas de Hidrógeno ($H$)** | **Cálculo analítico en vivo** | El modelo de Bohr es exacto para sistemas de 1 electrón con potencial coulombiano puro. |
| **Iones Hidrogenoides ($\text{He}^+, \text{Li}^{2+}, \dots$)** | **Cálculo analítico exacto con $Z$** | El escalamiento $Z^2$ respeta rigurosamente las ecuaciones del modelo de Bohr. |
| **Helio ($\text{He}$), Sodio ($\text{Na}$), Calcio ($\text{Ca}$)** | **Datos experimentales tabulados (NIST ASD)** | Los átomos multielectrónicos presentan apantallamiento y acoplamiento espín-órbita; requieren la ecuación de Schrödinger multielectrónica. |
| **Trayectoria orbital del electrón** | **Representación semiclásica pedagógica** | Bohr postuló órbitas discretas; la mecánica cuántica moderna (1925-1926) define orbitales como densidades de probabilidad $|\psi|^2$. |
| **Espectro estelar** | **Datos observacionales (SDSS DR17)** | Posiciones reales de absorción estelar atmosférica según la temperatura efectiva. |

---

## 🐍 Verificación Numérica Independiente (Python)

El proyecto incluye scripts en Python para certificar la precisión numérica de las constantes y ecuaciones implementadas en el motor JavaScript.

### Ejecución de la verificación
```bash
# Ejecución directa con Python
python python/verify_bohr.py

# O bien, mediante entorno conda/mamba en WSL
wsl bash -i -c "mamba run -n py311-cuda python python/verify_bohr.py"
```

### Resultados de la Serie de Balmer ($n_f = 2$)
```text
======================================================================
  VERIFICACIÓN SERIE DE BALMER (fórmula de Bohr — hidrógeno)
======================================================================
  Línea  Salto     ΔE calc   ΔE ref     Δ%     λ calc    λ ref     Δ%  Color
----------------------------------------------------------------------
  Hα     3→2       1.8897     1.89   0.02%    656.11    656.3  0.029%  Rojo  ✓
  Hβ     4→2       2.5511     2.55   0.04%    486.01    486.1  0.019%  Verde-azulado  ✓
  Hγ     5→2       2.8572     2.86   0.10%    433.94    434.0  0.015%  Azul-violeta  ✓
  Hδ     6→2       3.0235     3.02   0.12%    410.07    410.2  0.032%  Violeta  ✓
----------------------------------------------------------------------
  ✓ TODOS LOS VALORES COINCIDEN — physics.js es correcto

==================================================
  VERIFICACIÓN CONSISTENCIA: E = hc/λ
==================================================
  3→2: ΔE=1.8897 eV  |  hc/λ=1.8897 eV  |  discrepancia=0.000000%
  4→2: ΔE=2.5511 eV  |  hc/λ=2.5511 eV  |  discrepancia=0.000000%
  5→2: ΔE=2.8572 eV  |  hc/λ=2.8572 eV  |  discrepancia=0.000000%
```

---

## 🚀 Cómo Ejecutar la Aplicación

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com/usuario/bohr-espectroscopia-estelar.git
   cd bohr-espectroscopia-estelar
   ```
2. **Abrir en el navegador:**
   * No requiere servidor backend, compiladores ni dependencias locales de Node.js.
   * Simplemente abrir `index.html` en cualquier navegador moderno (Chrome, Firefox, Safari, Edge).
   * *Nota:* Requiere conexión a internet únicamente para cargar MathJax y Google Fonts desde CDN.

---

## 📚 Referencias y Fuentes

1. **Bohr, N. (1913).** *On the Constitution of Atoms and Molecules*. Philosophical Magazine, Series 6, 26(151), 1–25.
2. **NIST Atomic Spectra Database (ASD):** Kramida, A., Ralchenko, Yu., Reader, J., and NIST ASD Team (2022). [https://physics.nist.gov/asd](https://physics.nist.gov/asd).
3. **CODATA 2018 Fundamental Physical Constants:** Committee on Data for Science and Technology, NIST SP 961.
4. **Sloan Digital Sky Server (SDSS):** SDSS DR17 Science Archive Server, SkyServer Spectroscopic Query. [https://skyserver.sdss.org](https://skyserver.sdss.org).
5. **Morgan, W. W., Keenan, P. C., & Kellman, E. (1943).** *An atlas of stellar spectra, with an outline of spectral classification*. University of Chicago Press.
6. **Bruton, D. (1996).** *Color Science: Approximate RGB values for visible wavelengths*. Stephen F. Austin State University.
