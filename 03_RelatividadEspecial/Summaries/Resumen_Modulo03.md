# Resumen del Módulo 03: Relatividad Especial

**Diplomado en Física Moderna — Módulo 03**  
**Docente:** Dr. Guillermo Rubilar Alegría (Universidad de Concepción)  
**Documento Consolidado:** `Resumen_Modulo03.md`

---

## 1. Visión Panorámica del Módulo

El Módulo 03 abordó de manera exhaustiva la revolución epistemológica y física que significó la Teoría de la Relatividad Especial (1905). A lo largo de las cuatro clases y del material de estudio, se transitó desde la crisis teórica del éter luminífero hasta la formulación de la cinemática de Minkowski y la dinámica de masas y energías relativistas.

```
                          SÍNTESIS CONCEPTUAL DEL MÓDULO 03
                          
  [Clase 01: Crisis del Éter] ──────► [Clase 02: Cinemática Operacional]
  - Ruptura Galileo vs Maxwell        - Metrología del segundo y del metro
  - Michelson-Morley (Resultado Nulo) - Método del Radar de Bondi
  - Postulados de Einstein (1905)     - Eventos y Líneas de Universo
                │                                    │
                ▼                                    ▼
  [Clase 03: Bondi y Doppler] ──────► [Clase 04: Dinámica y Minkowski]
  - Factor k = √[(1+β)/(1-β)]          - Boosts de Lorentz y factor γ
  - Efecto Doppler y Redshift z       - Invarianza del intervalo Δs²
  - Adición 1D de velocidades         - Dinámica E = γmc², E₀ = mc²
```

---

## 2. Cronología Histórica Fundamental del Módulo

| Año | Científico(s) | Hito / Descubrimiento Fundamental | Impacto en la Relatividad Especial |
|---|---|---|---|
| **1632** | Galileo Galilei | *Diálogo sobre los dos máximos sistemas del mundo* | Formulación del Principio de Relatividad Clásica. |
| **1687** | Isaac Newton | *Philosophiae Naturalis Principia Mathematica* | Leyes del movimiento y postulación del espacio y tiempo absolutos. |
| **1728** | James Bradley | Descubrimiento de la Aberración Estelar | Refutación empírica del arrastre total del éter luminífero. |
| **1851** | Hippolyte Fizeau | Experimento de propagación de la luz en agua | Coeficiente de arrastre parcial de Fresnel ($1 - 1/n^2$). |
| **1865** | James Clerk Maxwell | *A Dynamical Theory of the Electromagnetic Field* | Unificación de la luz como onda electromagnética con rapidez $c = 1/\sqrt{\varepsilon_0\mu_0}$. |
| **1887** | Albert A. Michelson & Edward W. Morley | Experimento del interferómetro óptico en Cleveland | **Resultado Nulo**: ausencia de viento de éter ($\Delta N < 0.01$ franjas). |
| **1889/92** | G. FitzGerald & H. A. Lorentz | Hipótesis de contracción de longitud ad hoc | Intento de salvar la teoría del éter mediante deformación mecánica. |
| **1905** | Albert Einstein | *Zur Elektrodynamik bewegter Körper* (Ann. Phys.) | **Nacimiento de la Relatividad Especial**: Postulados 1 y 2, cinemática de Lorentz. |
| **1905** | Albert Einstein | *Ist die Trägheit eines Körpers von seinem Energiegehalt abhängig?* | Deducción de la equivalencia masa-energía: $E_0 = mc^2$. |
| **1908** | Hermann Minkowski | *Raum und Zeit* (Colonia) | Geometrización del espaciotiempo tetradimensional y métrica $\Delta s^2$. |
| **1932** | R. J. Kennedy & E. M. Thorndike | Experimento con interferómetro de brazos desiguales | Demostración de que la dilatación temporal es necesaria junto a la contracción. |
| **1938** | H. E. Ives & G. R. Stilwell | Experimento con rayos canales de hidrógeno | Primera confirmación directa del **Efecto Doppler Transversal** ($\nu = \nu_0/\gamma$). |
| **1941** | B. Rossi & D. B. Hall | Flujo de muones cósmicos en Monte Washington | Primera comprobación cuantitativa de la dilatación del tiempo en partículas. |
| **1959** | J. Terrell & R. Penrose | Teoría óptica de la apariencia visual | Efecto de rotación aparente en lugar de compresión fotográfica. |
| **1964** | Hermann Bondi | *Relativity and Common Sense* | Desarrollo pedagógico del $k$-cálculo y método del radar. |
| **2003** | G. Saathoff et al. | Espectroscopía láser en anillo de almacenamiento TSR | Test de ultra-alta precisión de la dilatación del tiempo ($\Delta\nu/\nu < 2 \times 10^{-7}$). |
| **2005** | S. Rainville et al. (NIST/MIT) | Trampas de Penning y emisión gamma (*Nature*) | Test directo más preciso de $E=mc^2$ en capturas neutrónicas ($\Delta < 4 \times 10^{-7}$). |
| **2010** | C. W. Chou et al. (NIST) | Relojes atómicos ópticos de $^{27}\text{Al}^+$ (*Science*) | Dilatación temporal medida a velocidades cotidianas ($v < 10\text{ m/s}$) y $\Delta h = 33\text{ cm}$. |
| **2015** | M. Nagel, M. E. Tobar et al. | Resonadores criogénicos ópticos (*Nature Comm.*) | Límite moderno de anisotropía de $c$: $|\Delta c|/c < 10^{-18}$. |

---

## 3. Tablas de Fórmulas Clave del Módulo

### 3.1. Cinemática Operacional y Radar de Bondi

| Ecuación | Variables y Notación | Unidades SI | Significado Físico |
|---|---|---|---|
| $t_P = \dfrac{t_E + t_R}{2}$ | $t_P$: tiempo del evento remoto<br>$t_E$: tiempo de emisión<br>$t_R$: tiempo de recepción | $\text{s}$ | Sincronización de Poincaré-Einstein mediante radar. |
| $x_P = c\left(\dfrac{t_R - t_E}{2}\right)$ | $x_P$: posición espacial del evento<br>$c = 299\,792\,458\text{ m/s}$ | $\text{m}$ | Distancia física como magnitud derivada del tiempo de vuelo. |
| $k = \sqrt{\dfrac{1 + v/c}{1 - v/c}}$ | $k$: factor de Bondi<br>$v$: velocidad relativa inercial | Adimensional ($k > 0$) | Razón de escala de intervalos de tiempo propio entre SRI. |
| $\nu_{\text{rec}} = \dfrac{\nu_{\text{em}}}{k} = \nu_{\text{em}}\sqrt{\dfrac{1 - \beta}{1 + \beta}}$ | $\nu_{\text{em}}$: frecuencia emitida<br>$\nu_{\text{rec}}$: frecuencia recibida<br>$\beta = v/c$ | $\text{Hz} = \text{s}^{-1}$ | Efecto Doppler relativista longitudinal (fuente en alejamiento). |
| $z \equiv \dfrac{\Delta\lambda}{\lambda_0} = k - 1$ | $z$: parámetro de redshift<br>$\lambda_0$: longitud de onda en reposo | Adimensional | Corrimiento al rojo espectroscópico en astrofísica. |
| $v_{AC} = \dfrac{v_{AB} + v_{BC}}{1 + \dfrac{v_{AB} v_{BC}}{c^2}}$ | $v_{AB}, v_{BC}$: velocidades colineales<br>$v_{AC}$: velocidad compuesta | $\text{m/s}$ | Ley de composición relativista de velocidades en 1D. |

---

### 3.2. Transformaciones de Lorentz y Espaciotiempo de Minkowski

| Ecuación | Variables y Notación | Unidades SI | Significado Físico |
|---|---|---|---|
| $\gamma \equiv \dfrac{1}{\sqrt{1 - v^2/c^2}}$ | $\gamma$: factor de Lorentz ($\gamma \ge 1$)<br>$v$: rapidez relativa | Adimensional | Factor fundamental de dilatación y contracción cinemática. |
| $x' = \gamma(x - vt)$ | $x, x'$: coordenadas espaciales<br>$t$: tiempo en $K$ | $\text{m}$ | Boost de Lorentz espacial (transformación hacia $K'$). |
| $t' = \gamma\left(t - \dfrac{v}{c^2}x\right)$ | $t, t'$: coordenadas temporales<br>$x$: posición en $K$ | $\text{s}$ | Boost de Lorentz temporal (revela la relatividad del tiempo). |
| $\Delta s^2 = c^2\Delta t^2 - |\Delta\vec{x}|^2$ | $\Delta s^2$: intervalo invariante<br>$\Delta t$: separación temporal<br>$\Delta\vec{x}$: separación espacial | $\text{m}^2$ | Invariante fundamental de la métrica pseudo-euclidiana. |
| $\Delta t = \gamma \Delta t_0$ | $\Delta t_0$: tiempo propio ($\Delta x'=0$)<br>$\Delta t$: tiempo medido en $K$ | $\text{s}$ | Dilatación temporal de relojes en movimiento relativo. |
| $L = \dfrac{L_0}{\gamma}$ | $L_0$: longitud propia en reposo<br>$L$: longitud en movimiento | $\text{m}$ | Contracción longitudinal de Lorentz en la dirección de $\vec{v}$. |
| $\Delta t' = -\dfrac{\gamma v \Delta x}{c^2}$ | $\Delta x$: separación espacial en $K$<br>$\Delta t'$: diferencia temporal en $K'$ | $\text{s}$ | Desincronización y relatividad de la simultaneidad. |

---

### 3.3. Dinámica Relativista, Momentum y Energía

| Ecuación | Variables y Notación | Unidades SI | Significado Físico |
|---|---|---|---|
| $\vec{p} = \gamma m \vec{v}$ | $\vec{p}$: momentum relativista<br>$m$: masa en reposo invariante | $\text{kg}\cdot\text{m/s}$ | Conservación del momentum en colisiones inerciales. |
| $\vec{F} = \dfrac{d\vec{p}}{dt} = \gamma^3 m \vec{a}$ (1D) | $\vec{F}$: fuerza neta<br>$\vec{a}$: aceleración instantánea | $\text{N} = \text{kg}\cdot\text{m/s}^2$ | Segunda ley de Newton relativista (rigidez asintótica $v \to c$). |
| $K = (\gamma - 1)mc^2$ | $K$: energía cinética relativista | $\text{J} = \text{kg}\cdot\text{m}^2/\text{s}^2$ | Trabajo mecánico requerido para acelerar desde el reposo. |
| $E = \gamma mc^2 = K + mc^2$ | $E$: energía total relativista | $\text{J}$ (o $\text{eV}$) | Energía total de un cuerpo material en movimiento. |
| $E_0 = mc^2$ | $E_0$: energía en reposo | $\text{J}$ | Equivalencia fundamental entre masa inercial y energía latente. |
| $E^2 = (pc)^2 + (mc^2)^2$ | $E$: energía total; $p$: momentum<br>$m$: masa invariante | $\text{J}^2$ | Relación invariante de dispersión ($p_\mu p^\mu = m^2c^2$). |
| $E = pc \iff p = \dfrac{h\nu}{c}$ | $m = 0$ (fotones, radiación EM) | $\text{J}, \text{kg}\cdot\text{m/s}$ | Relación dinámica para partículas sin masa en reposo ($v = c$). |
| $\Delta E = \Delta m \cdot c^2$ | $\Delta m$: defecto de masa nuclear | $\text{J}$ (o $\text{MeV}$) | Energía liberada o absorbida en reacciones nucleares. |

---

## 4. Conexiones Conceptuales entre Clases

1. **De la Crisis Experimental a la Axiomática (Clase 01 $\to$ Clase 02):** El fracaso en detectar el éter luminífero forzó la reconstrucción operacional del espacio y el tiempo mediante señales electromagnéticas.
2. **De la Señal Local al Grupo de Transformaciones (Clase 02 $\to$ Clase 03 $\to$ Clase 04):** El protocolo del radar en un observador genera el $k$-cálculo entre dos observadores, cuya composición algebraica conduce a las transformaciones de Lorentz y a la estructura geométrica de Minkowski.
3. **De la Cinemática a la Dinámica Nuclear (Clase 04):** La preservación de las leyes de conservación exige la redefinición del momentum y la energía, concluyendo en la célebre ecuación $E=mc^2$ y en la física de las reacciones nucleares.
