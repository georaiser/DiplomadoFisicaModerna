# Análisis de Clase 02 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Encabezado

| Campo | Detalle |
|-------|---------|
| **Módulo** | Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1) |
| **Docente** | Prof. Julio Eduardo Oliva Zapata |
| **Fecha** | 22 de mayo de 2026 |
| **Duración** | 2 h 59 min |
| **Resultados de aprendizaje** | Fundamentos de estadística para variables aleatorias discretas y continuas; derivación de la distribución de Maxwell–Boltzmann para las velocidades de un gas ideal; interpretación de las rapideces características; consecuencias físicas de la distribución (escape atmosférico, termalización) |

---

## Fuentes Utilizadas

- **Transcripción de video:** `Clase_02/grabacion/Segunda clase.docx` (fuente principal, ~148 KB, procesada en su totalidad).  
- **Recurso adicional:** `Clase_02/Maxwellianas.pdf` (resultados numéricos y gráficas de las distribuciones maxwellianas).  
- **Libro de referencia central:** Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021).  
- **Bibliografía de apoyo:** James Clerk Maxwell (1860); Ludwig Boltzmann (1872); Frederick Reif, *Fundamentals of Statistical and Thermal Physics* (McGraw-Hill, 1965); Richard P. Feynman, *The Feynman Lectures on Physics*, Vol. I, cap. 40.

---

## 1. Motivación: el problema del promedio de la velocidad

*Fuente: Transcripción de video, minutos 0–10. Fuente complementaria: Weinberg, cap. 1; Reif, cap. 7.*

La clase anterior derivó, mediante el argumento de Clausius, la relación

$$PV = \frac{1}{3} N m \langle v^2 \rangle,$$

donde $\langle v^2 \rangle$ es el **promedio del cuadrado de la rapidez** sobre todas las partículas del gas. Combinando esta expresión con la ley empírica de los gases ideales $PV = Nk_BT$, se obtuvo

$$\langle v^2 \rangle = \frac{3k_BT}{m}.$$

Esta ecuación conecta una propiedad macroscópica (la temperatura $T$) con un promedio microscópico. Sin embargo, la derivación no especifica **qué función de distribución de probabilidad** produce ese promedio. La clase 02 responde exactamente esa pregunta: ¿cuál es la densidad de probabilidad $f(v_x)$ para la componente $x$ de la velocidad, y cuál es la densidad $g(v)$ para la rapidez escalar $v = |\mathbf{v}|$?

**Interpretación física.** Conocer $f(v_x)$ y $g(v)$ va mucho más allá de conocer $\langle v^2 \rangle$: permite calcular la probabilidad de que una partícula dada escape la atmósfera de un planeta, la tasa de reacciones químicas, la conductividad térmica de un gas, y la distribución de energías cinéticas en equilibrio. Es el punto de partida de toda la mecánica estadística de equilibrio.

---

## 2. Fundamentos de estadística: variable aleatoria discreta

*Fuente: Transcripción, minutos 10–40. Fuente complementaria: Reif, apéndice A; Feynman Lectures, Vol. I, cap. 6.*

### 2.1 Definición y valor esperado

Una **variable aleatoria discreta** $X$ puede tomar valores $\{x_1, x_2, \ldots, x_n\}$ con ponderaciones (pesos) $\{w_1, w_2, \ldots, w_n\}$ tales que

$$\sum_{i=1}^{n} w_i = 1.$$

El **valor esperado** (promedio) de $X$ se define como

$$\langle X \rangle \equiv \sum_{i=1}^{n} x_i \, w_i.$$

**Ejemplo pedagógico (Prof. Oliva).** Un estudiante obtiene notas $x_1 = 5{,}5$, $x_2 = 6{,}5$, $x_3 = 3{,}2$ en tres certámenes de igual ponderación $w_i = 1/3$:

$$\langle X \rangle = \frac{1}{3}(5{,}5 + 6{,}5 + 3{,}2) = \frac{15{,}2}{3} \approx 5{,}07.$$

Un estudiante B que saca $5{,}07$ en los tres certámenes tiene el mismo promedio, pero una **dispersión nula** en torno a él.

### 2.2 Varianza y desviación estándar

La **varianza** $\sigma^2$ cuantifica la dispersión de $X$ alrededor de su media:

$$\sigma_X^2 \equiv \langle (X - \langle X \rangle)^2 \rangle = \sum_{i=1}^{n} (x_i - \langle X \rangle)^2 \, w_i.$$

La elección de elevar al cuadrado (en lugar de usar el valor absoluto) no es arbitraria: garantiza diferenciabilidad, hace que la varianza sea siempre positiva, y conecta con la teoría de mínimos cuadrados.

**Identidad algebraica (demostrada en clase).** La varianza admite la forma compacta

$$\sigma_X^2 = \langle X^2 \rangle - \langle X \rangle^2.$$

*Demostración completa:*

$$\sigma_X^2 = \langle (X - \langle X \rangle)^2 \rangle = \langle X^2 - 2X\langle X \rangle + \langle X \rangle^2 \rangle.$$

Dado que $\langle X \rangle$ es un **número fijo** (no una variable aleatoria), puede extraerse del operador de promedio:

$$= \langle X^2 \rangle - 2\langle X \rangle \langle X \rangle + \langle X \rangle^2 \cdot \underbrace{\langle 1 \rangle}_{=1} = \langle X^2 \rangle - \langle X \rangle^2. \qquad \blacksquare$$

La **desviación estándar** es $\sigma_X = \sqrt{\sigma_X^2}$ y tiene las mismas unidades que $X$. En palabras del Prof. Oliva: *"La desviación estándar mide qué tanto se separan los datos del promedio, en promedio."*

### 2.3 Momentos superiores y reconstrucción de la distribución

El promedio $\langle X \rangle$, la varianza $\sigma_X^2$, y los **momentos superiores** $\langle X^n \rangle$ con $n \geq 3$ encapsulan información global de la distribución. Bajo condiciones de regularidad (teorema de determinación de momentos), el conocimiento de **todos los momentos** permite reconstruir unívocamente la función de distribución de probabilidad. Para la distribución gaussiana, basta con $\langle X \rangle$ y $\sigma_X^2$.

---

## 3. Variable aleatoria continua y densidad de probabilidad

*Fuente: Transcripción, minutos 40–60. Fuente complementaria: Reif, sec. 1.3–1.5; Feynman Lectures, Vol. I, cap. 40.*

### 3.1 Definición de la función de densidad de probabilidad

Cuando $X$ puede tomar cualquier valor real en un intervalo (por ejemplo, $(-\infty, +\infty)$), la probabilidad de que $X$ tome **exactamente** un valor dado es cero. Solo tiene sentido preguntar por la probabilidad de que $X$ esté en un intervalo $[x, x + dx]$:

$$dP = f(x)\, dx,$$

donde $f(x)$ es la **función de densidad de probabilidad** (PDF, del inglés *probability density function*). La condición de normalización exige

$$\int_{-\infty}^{+\infty} f(x)\, dx = 1.$$

Análogamente al caso discreto, el valor esperado y la varianza se calculan como

$$\langle X \rangle = \int_{-\infty}^{+\infty} x\, f(x)\, dx,$$

$$\sigma_X^2 = \int_{-\infty}^{+\infty} (x - \langle X \rangle)^2 f(x)\, dx = \langle X^2 \rangle - \langle X \rangle^2.$$

### 3.2 Interpretación geométrica: área bajo la curva

La probabilidad de que $X \in [a, b]$ es el área bajo la curva $f(x)$ entre $a$ y $b$:

$$P(a \leq X \leq b) = \int_a^b f(x)\, dx.$$

El Prof. Oliva destacó un hecho físico importante: incluso en la cola de una distribución de Maxwell (velocidades muy altas), existe un área bajo la curva diferente de cero, lo que permite que moléculas de gases livianos **escapen de atmósferas poco masivas** (p. ej., H₂ de la Luna).

### 3.3 Ejemplos de distribuciones continuas relevantes

| Distribución | Forma | Contexto |
|---|---|---|
| Gaussiana (normal) | $f(x) \propto e^{-(x-\mu)^2/2\sigma^2}$ | Velocidades en gas ideal (cada componente) |
| Exponencial | $f(x) = \lambda e^{-\lambda x}$, $x \geq 0$ | Tiempos de decaimiento |
| Uniforme | $f(x) = 1/(2a)$, $x \in [-a, a]$ | Máxima incertidumbre acotada |
| Cauchy-Lorentz | $f(x) \propto 1/(1+x^2)$ | Anchura de líneas espectrales |

La distribución uniforme **no es normalizable** en $(-\infty, +\infty)$, hecho que reaparece en mecánica cuántica al construir la función de onda de una partícula libre.

---

## 4. Geometría del espacio de velocidades: elementos de volumen

*Fuente: Transcripción, minutos 65–80. Fuente complementaria: Reif, sec. 7.3; Arfken & Weber, *Mathematical Methods for Physicists*, cap. 2.*

Para derivar la distribución de rapideces a partir de la distribución de componentes, es necesario transformar el elemento de volumen en el espacio de velocidades de coordenadas cartesianas a esféricas.

### 4.1 Elemento de área en el plano (coordenadas polares)

En el plano $xy$, el elemento de área en coordenadas cartesianas es $dA = dx\, dy$. En coordenadas polares $(r, \theta)$, un elemento infinitesimal es aproximadamente un rectángulo con lados $dr$ (radial) y $r\, d\theta$ (arco). Por tanto:

$$\boxed{dA = r\, dr\, d\theta.}$$

El **factor $r$** es el jacobiano de la transformación y no puede omitirse.

### 4.2 Elemento de volumen en el espacio 3D (coordenadas esféricas)

En el espacio de velocidades $\mathbb{R}^3$ con coordenadas $(v, \theta, \phi)$ donde $v = |\mathbf{v}|$, $\theta \in [0,\pi]$ (colatitud) y $\phi \in [0, 2\pi)$ (azimut), el elemento de volumen es

$$\boxed{d^3v = v^2 \sin\theta\, dv\, d\theta\, d\phi.}$$

*Derivación geométrica.* El paralelepípedo infinitesimal tiene aristas:
- $dv$ (radial),
- $v\, d\theta$ (arco meridional),
- $v \sin\theta\, d\phi$ (arco azimutal).

Multiplicando las tres aristas:

$$d^3v = dv \cdot (v\, d\theta) \cdot (v\sin\theta\, d\phi) = v^2 \sin\theta\, dv\, d\theta\, d\phi.$$

**Integración sobre ángulos sólidos.** Si la función a integrar no depende de $(\theta, \phi)$ (caso isotrópico), se puede integrar sobre todos los ángulos:

$$\int_0^\pi \sin\theta\, d\theta \int_0^{2\pi} d\phi = 2 \cdot 2\pi = 4\pi.$$

Por tanto, para cualquier función $h(v)$ isotrópica:

$$\int_{\mathbb{R}^3} h(|\mathbf{v}|)\, d^3v = 4\pi \int_0^\infty h(v)\, v^2\, dv.$$

Este es el resultado clave que conecta la distribución tridimensional $f(\mathbf{v})$ con la distribución escalar de rapideces $g(v)$.

---

## 5. Derivación de la distribución de Maxwell–Boltzmann

*Fuente: Transcripción, minutos 80–130. Fuente complementaria: Maxwell (1860), Phil. Mag. 19, 19–32; Reif, sec. 7.4; Weinberg, sec. 1.2.*

### 5.1 Hipótesis del modelo

1. **Gas ideal:** las partículas solo interactúan en colisiones elásticas de corto alcance; entre colisiones se mueven libremente.
2. **Isotropía:** no existe dirección preferencial. Las tres componentes $v_x$, $v_y$, $v_z$ tienen la misma distribución de probabilidad: $f_{v_x} = f_{v_y} = f_{v_z} \equiv f$.
3. **Simetría par:** como es igualmente probable moverse hacia la derecha que hacia la izquierda, $f(\chi) = f(-\chi)$; la función es par, luego $f = f(\chi^2)$.
4. **Independencia estadística:** las tres componentes son estadísticamente independientes, de modo que la distribución conjunta se factoriza:

$$F(\mathbf{v}) = f(v_x^2)\, f(v_y^2)\, f(v_z^2).$$

5. **Isotropía (segunda imposición):** $F(\mathbf{v})$ solo puede depender de $|\mathbf{v}|^2 = v_x^2 + v_y^2 + v_z^2$. Por tanto:

$$f(v_x^2)\, f(v_y^2)\, f(v_z^2) = F(v_x^2 + v_y^2 + v_z^2).$$

### 5.2 Ecuación funcional y su solución

La ecuación funcional

$$f(a)\, f(b)\, f(c) = F(a + b + c), \quad a = v_x^2,\; b = v_y^2,\; c = v_z^2,$$

tiene como **única solución suave y normalizable** la función exponencial. Para verlo, tomemos logaritmos:

$$\ln f(a) + \ln f(b) + \ln f(c) = \ln F(a + b + c).$$

Definiendo $g = \ln f$, se pide que $g(a) + g(b) + g(c)$ dependa solo de $a+b+c$, lo que implica $g(\xi) = -B\xi + \text{cte}$, con $B > 0$ para asegurar normalización. Por tanto:

$$\boxed{f(\chi^2) = A\, e^{-B\chi^2},}$$

donde $A > 0$ y $B > 0$ son constantes a determinar. Esta es una **gaussiana**; cada componente de la velocidad sigue una distribución normal centrada en cero.

### 5.3 Normalización: determinación de $A$ en función de $B$

La condición $\int_{-\infty}^{+\infty} f(v_x)\, dv_x = 1$ exige

$$A \int_{-\infty}^{+\infty} e^{-Bv_x^2}\, dv_x = 1.$$

La integral gaussiana fundamental es $\displaystyle\int_{-\infty}^{+\infty} e^{-\alpha u^2}\, du = \sqrt{\pi/\alpha}$. Con $\alpha = B$:

$$A \sqrt{\frac{\pi}{B}} = 1 \implies A = \sqrt{\frac{B}{\pi}}.$$

La distribución tridimensional conjunta normalizada es

$$F(\mathbf{v}) = \left(\frac{B}{\pi}\right)^{3/2} e^{-B(v_x^2 + v_y^2 + v_z^2)}.$$

### 5.4 Distribución de rapideces: integración sobre ángulos sólidos

Usando el elemento de volumen en coordenadas esféricas del espacio de velocidades:

$$g(v)\, dv = F(\mathbf{v})\, d^3v = \left(\frac{B}{\pi}\right)^{3/2} e^{-Bv^2} \cdot 4\pi v^2\, dv,$$

donde se integró sobre todos los ángulos, obteniendo el factor $4\pi$. Por tanto, la **distribución de rapideces** es

$$\boxed{g(v) = 4\pi \left(\frac{B}{\pi}\right)^{3/2} v^2\, e^{-Bv^2}.}$$

**Interpretación:** el factor $v^2$ proviene de la geometría esférica del espacio de velocidades (más estados disponibles para rapideces mayores), mientras que el factor $e^{-Bv^2}$ penaliza velocidades altas (coste energético). El máximo de $g(v)$ resulta de la competencia entre estos dos factores.

### 5.5 Relación entre $B$ y la temperatura

Del argumento de Clausius de la clase anterior:

$$\langle v^2 \rangle = \frac{3k_BT}{m}.$$

Calculamos $\langle v^2 \rangle$ directamente de la distribución $g(v)$:

$$\langle v^2 \rangle = \int_0^\infty v^2\, g(v)\, dv = 4\pi\left(\frac{B}{\pi}\right)^{3/2} \int_0^\infty v^4\, e^{-Bv^2}\, dv.$$

Usando la integral gaussiana generalizada $\displaystyle\int_0^\infty u^{2n}\, e^{-\alpha u^2}\, du = \frac{(2n-1)!!}{2^{n+1}}\sqrt{\frac{\pi}{\alpha^{2n+1}}}$ con $n=2$, $\alpha = B$:

$$\int_0^\infty v^4\, e^{-Bv^2}\, dv = \frac{3\sqrt{\pi}}{8B^{5/2}}.$$

Sustituyendo:

$$\langle v^2 \rangle = 4\pi \cdot \frac{B^{3/2}}{\pi^{3/2}} \cdot \frac{3\sqrt{\pi}}{8B^{5/2}} = \frac{3}{2B}.$$

Igualando con la expresión de Clausius:

$$\frac{3}{2B} = \frac{3k_BT}{m} \implies \boxed{B = \frac{m}{2k_BT}.}$$

### 5.6 Distribución de Maxwell–Boltzmann: forma final

Sustituyendo $B = m/(2k_BT)$ en $g(v)$:

$$\boxed{g(v) = 4\pi \left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 \exp\!\left(-\frac{mv^2}{2k_BT}\right).}$$

La distribución para cada componente cartesiana es

$$f(v_x) = \left(\frac{m}{2\pi k_BT}\right)^{1/2} \exp\!\left(-\frac{mv_x^2}{2k_BT}\right).$$

**Publicación original.** James Clerk Maxwell derivó esta distribución en 1860 en el artículo *"Illustrations of the Dynamical Theory of Gases"* (Phil. Mag., serie 4, vol. 19, pp. 19–32), usando un argumento combinatorio. Ludwig Boltzmann (1872) la reobtuvo y generalizó mediante la ecuación cinética que lleva su nombre.

---

## 6. Rapideces características de la distribución de Maxwell

*Fuente: Transcripción, minutos 130–155. Fuente complementaria: Reif, sec. 7.5; Feynman Lectures, Vol. I, cap. 40.*

### 6.1 Rapidez más probable $v_p$

Es el valor de $v$ donde $g(v)$ alcanza su máximo. Se obtiene de $dg/dv = 0$:

$$\frac{d}{dv}\left[v^2 e^{-mv^2/2k_BT}\right] = e^{-mv^2/2k_BT}\left(2v - \frac{mv^3}{k_BT}\right) = 0.$$

Resolviendo (para $v \neq 0$):

$$\boxed{v_p = \sqrt{\frac{2k_BT}{m}}.}$$

### 6.2 Rapidez media $\langle v \rangle$

$$\langle v \rangle = \int_0^\infty v\, g(v)\, dv = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} \int_0^\infty v^3 e^{-mv^2/2k_BT}\, dv.$$

Usando $\displaystyle\int_0^\infty u^3 e^{-\alpha u^2}\, du = \frac{1}{2\alpha^2}$ con $\alpha = m/(2k_BT)$:

$$\boxed{\langle v \rangle = \sqrt{\frac{8k_BT}{\pi m}}.}$$

### 6.3 Rapidez cuadrática media $v_\mathrm{rms}$

$$v_\mathrm{rms} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3k_BT}{m}}.$$

### 6.4 Jerarquía de rapideces

Las tres rapideces guardan la relación:

$$v_p : \langle v \rangle : v_\mathrm{rms} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3} \approx 1{,}000 : 1{,}128 : 1{,}225.$$

En particular, $v_p < \langle v \rangle < v_\mathrm{rms}$, reflejo de la asimetría (sesgo positivo) de la distribución de rapideces.

**Valores numéricos a $T = 300$ K:**

| Gas | $m$ (kg) | $v_p$ (m/s) | $\langle v \rangle$ (m/s) | $v_\mathrm{rms}$ (m/s) |
|-----|----------|------------|--------------------------|------------------------|
| H₂ | $3{,}35 \times 10^{-27}$ | 1580 | 1782 | 1934 |
| N₂ | $4{,}65 \times 10^{-26}$ | 422 | 476 | 517 |
| O₂ | $5{,}32 \times 10^{-26}$ | 395 | 446 | 484 |
| Ar | $6{,}63 \times 10^{-26}$ | 354 | 399 | 433 |

---

## 7. Hipótesis físicas implícitas en la derivación

*Fuente: Transcripción, minutos 85–100. Fuente complementaria: Reif, sec. 7.1–7.2.*

El Prof. Oliva enumeró explícitamente las hipótesis que sustentan la distribución de Maxwell:

1. **Homogeneidad:** la distribución de velocidades no depende de la posición en el gas. (Falla, por ejemplo, en la atmósfera, donde hay gradiente de temperatura con la altitud.)

2. **Isotropía:** no existe dirección privilegiada. (Falla en presencia de un campo magnético externo, donde la componente de la velocidad a lo largo de **B** tiene una distribución distinta a las componentes perpendiculares.)

3. **Independencia estadística de las componentes:** $P(v_x, v_y, v_z) = f(v_x)\, f(v_y)\, f(v_z)$.

4. **Estacionariedad:** la distribución no depende del tiempo; el gas ha "termalizado", es decir, ha alcanzado el equilibrio termodinámico. La distribución dependiente del tiempo obedece a la **ecuación de Boltzmann**, que la clase no trata, pero que converge a la distribución de Maxwell en el límite $t \to \infty$.

5. **Gas clásico no relativista:** $v \ll c$.

### 7.1 Por qué se usa estadística aunque el movimiento es determinista

El sistema de $N \sim 10^{23}$ partículas obedece en principio $N$ ecuaciones de Newton acopladas no lineales. Para el caso de interacciones gravitacionales o electromagnéticas, ya el problema de tres cuerpos no tiene solución analítica general. La estadística es una herramienta de **ignorancia práctica**: conocer las variables emergentes (temperatura, presión) es suficiente para las aplicaciones termodinámicas.

---

## 8. Consecuencias físicas de la distribución de Maxwell

*Fuente: Transcripción, minutos 155–180. Fuente complementaria: Reif, sec. 7.6; Weinberg, sec. 1.3.*

### 8.1 Escape de partículas de atmósferas planetarias

La distribución de Maxwell tiene colas infinitas para $v \to \infty$. La velocidad de escape de un cuerpo de masa $M$ y radio $R$ es

$$v_\mathrm{esc} = \sqrt{\frac{2GM}{R}}.$$

La fracción de moléculas de un gas con $v > v_\mathrm{esc}$ es

$$\int_{v_\mathrm{esc}}^\infty g(v)\, dv > 0,$$

lo que implica una pérdida continua de partículas. Esto explica por qué:
- La Luna (masa pequeña, $v_\mathrm{esc} \approx 2{,}4$ km/s) no tiene atmósfera.
- La Tierra pierde H₂ y He a lo largo del tiempo geológico ($v_p(\mathrm{H_2}) \approx 1580$ m/s, $v_\mathrm{esc,Tierra} \approx 11{,}2$ km/s; aunque $v_p < v_\mathrm{esc}$, la cola de la distribución hace que una fracción significativa de moléculas livianas escape).
- Júpiter y los gigantes gaseosos retienen H₂ y He eficientemente.

### 8.2 Desviaciones de la distribución de Maxwell

El Prof. Oliva señaló que **no todos los gases satisfacen la distribución de Maxwell**:

- **Gas de bosones a baja temperatura:** las partículas bosónicas (como el $^4$He) a $T < T_c$ siguen la distribución de Bose–Einstein, que concentra una fracción macroscópica de partículas en el estado de mínima energía (**condensado de Bose–Einstein**).
- **Gas de fermiones:** los electrones en un metal siguen la distribución de Fermi–Dirac, completamente distinta de la de Maxwell a bajas temperaturas.
- **Plasma en campo magnético:** la distribución es anisótropa (distribución biMaxwelliana).
- **Gas fuera del equilibrio:** la distribución evoluciona en el tiempo según la ecuación de Boltzmann; la distribución de Maxwell es el **atractor** de esa dinámica.

### 8.3 Termalización

Un sistema alcanza el equilibrio (termaliza) cuando la distribución de velocidades deja de cambiar en el tiempo. La escala de tiempo de termalización en un gas depende de la frecuencia de colisiones entre partículas, que a su vez depende de la densidad y la sección eficaz de colisión. En condiciones atmosféricas estándar, la termalización ocurre en tiempos del orden de $\sim 10^{-10}$ s.

---

## 9. Integrales gaussianas: herramienta matemática fundamental

*Fuente: Transcripción, minutos 160–170. Fuente complementaria: Reif, apéndice A; Arfken & Weber, cap. 12.*

Las integrales gaussianas aparecen repetidamente en mecánica estadística. Las más importantes son:

$$I_0 \equiv \int_{-\infty}^{+\infty} e^{-\alpha u^2}\, du = \sqrt{\frac{\pi}{\alpha}}.$$

Esta integral se evalúa elevando al cuadrado y pasando a coordenadas polares:

$$I_0^2 = \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} e^{-\alpha(u^2+w^2)}\, du\, dw = \int_0^\infty e^{-\alpha r^2} 2\pi r\, dr = \frac{\pi}{\alpha}.$$

Para las integrales con potencias de $u$ sobre $[0, \infty)$, se usa la truco de derivar con respecto al parámetro $\alpha$:

$$\int_0^\infty u^2 e^{-\alpha u^2}\, du = -\frac{d}{d\alpha}\int_0^\infty e^{-\alpha u^2}\, du = -\frac{d}{d\alpha}\frac{\sqrt{\pi}}{2\alpha^{1/2}} = \frac{\sqrt{\pi}}{4\alpha^{3/2}}.$$

$$\int_0^\infty u^4 e^{-\alpha u^2}\, du = \frac{d^2}{d\alpha^2}\int_0^\infty e^{-\alpha u^2}\, du = \frac{3\sqrt{\pi}}{8\alpha^{5/2}}.$$

Estas integrales se emplean directamente en el cálculo de $A$, $\langle v \rangle$, $\langle v^2 \rangle$ y de la distribución $g(v)$.

---

## 10. Síntesis histórica: Maxwell, Boltzmann y la validación del atomismo

*Fuente: Transcripción, minutos 175–180. Fuente complementaria: Stephen G. Brush, *The Kind of Motion We Call Heat* (North-Holland, 1976).*

| Año | Científico | Contribución |
|-----|-----------|-------------|
| 1738 | Daniel Bernoulli | Primera derivación de la presión a partir de partículas en movimiento (*Hydrodynamica*) |
| 1857 | Rudolf Clausius | Derivación de $PV = Nk_BT$ mediante argumento cinético |
| 1860 | James Clerk Maxwell | Distribución de velocidades para un gas ideal (argumento de independencia e isotropía) |
| 1872 | Ludwig Boltzmann | Ecuación cinética; H-teorema; $S = k_B \ln \Omega$ (entropía microscópica) |
| 1905 | Albert Einstein | Movimiento browniano como evidencia del atomismo |
| 1908 | Jean Perrin | Medición experimental de $N_A$ confirmando las predicciones de Einstein |

La distribución de Maxwell fue la primera consecuencia **cuantitativa y verificable** de la hipótesis atómica. Su confirmación experimental por Stern (1920) usando un haz molecular y un selector de velocidades constituyó una de las pruebas más directas de la existencia de átomos.

---

## Conclusiones de la Clase

1. **El promedio requiere una distribución.** Para calcular $\langle v^2 \rangle$ de manera completa se necesita conocer la función de densidad de probabilidad $f$ o $g$, no solo su valor.

2. **La varianza y la desviación estándar** miden la dispersión de una variable aleatoria alrededor de su media; la identidad $\sigma^2 = \langle X^2 \rangle - \langle X \rangle^2$ es la forma computacionalmente conveniente de calcularla.

3. **Variable aleatoria continua:** solo tiene sentido hablar de la probabilidad de que $X \in [x, x+dx]$, dada por $f(x)\, dx$. La probabilidad de un valor exacto es siempre cero.

4. **El jacobiano en coordenadas esféricas** introduce el factor $v^2 \sin\theta$ en el elemento de volumen del espacio de velocidades, esencial para derivar la distribución de rapideces.

5. **Cuatro hipótesis físicas** (isotropía, simetría par, independencia estadística, homogeneidad) determinan unívocamente que la distribución de cada componente de la velocidad es una gaussiana $f(v_x) \propto e^{-mv_x^2/2k_BT}$.

6. **La distribución de rapideces de Maxwell** $g(v) \propto v^2 e^{-mv^2/2k_BT}$ no es gaussiana; su asimetría positiva se debe al factor geométrico $v^2$.

7. **Tres rapideces características:** $v_p = \sqrt{2k_BT/m}$ (más probable), $\langle v \rangle = \sqrt{8k_BT/\pi m}$ (media), $v_\mathrm{rms} = \sqrt{3k_BT/m}$ (cuadrática media), con la jerarquía $v_p < \langle v \rangle < v_\mathrm{rms}$.

8. **El parámetro $B = m/2k_BT$** se fija al imponer que $\langle v^2 \rangle = 3k_BT/m$, cerrando el círculo con el resultado cinético de la clase anterior.

9. **La distribución de Maxwell es el atractor** de la dinámica de gases en equilibrio; gases con distribuciones distintas (bosones, fermiones, plasmas) requieren estadística cuántica o consideraciones adicionales.

10. **La cola de la distribución** explica el escape de atmósferas planetarias y es el mecanismo fundamental que determina la composición química de las atmósferas en el sistema solar.

---

## Referencias Bibliográficas

### 1. Artículos científicos originales (fuentes primarias)

- Maxwell, J. C. (1860). *Illustrations of the Dynamical Theory of Gases. Part I: On the Motions and Collisions of Perfectly Elastic Spheres.* Philosophical Magazine and Journal of Science, 4ª serie, **19**(124), 19–32.
- Maxwell, J. C. (1867). *On the Dynamical Theory of Gases.* Philosophical Transactions of the Royal Society of London, **157**, 49–88.
- Boltzmann, L. (1872). *Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen.* Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften, **66**, 275–370.
- Einstein, A. (1905). *Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen.* Annalen der Physik, **17**, 549–560.
- Stern, O. (1920). *Zur kinetischen Theorie des Dampfdrucks einatomiger fester Stoffe und über die Entropie fester Stoffe.* Zeitschrift für Physik, **1**, 236–242.

### 2. Textos del curso

- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 1–2.

### 3. Textos universitarios estándar

- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 1, 7.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). W. H. Freeman. Cap. 14.
- Mandl, F. (1988). *Statistical Physics* (2ª ed.). John Wiley & Sons. Cap. 7.
- Arfken, G. B., & Weber, H. J. (2005). *Mathematical Methods for Physicists* (6ª ed.). Academic Press. Cap. 2 (coordenadas curvilíneas), cap. 12 (integrales gaussianas).

### 4. Recursos de libre acceso verificados

- Feynman, R. P., Leighton, R. B., & Sands, M. (1963). *The Feynman Lectures on Physics*, Vol. I, cap. 40: *The Principles of Statistical Mechanics*. Disponible en: [https://www.feynmanlectures.caltech.edu/I_40.html](https://www.feynmanlectures.caltech.edu/I_40.html)
- NIST CODATA 2018: constante de Boltzmann $k_B = 1{,}380\,649 \times 10^{-23}$ J/K (exacta por definición SI 2019). Disponible en: [https://physics.nist.gov/cgi-bin/cuu/Value?k](https://physics.nist.gov/cgi-bin/cuu/Value?k)

### 5. Historia y filosofía de la física

- Brush, S. G. (1976). *The Kind of Motion We Call Heat: A History of the Kinetic Theory of Gases in the 19th Century*. North-Holland Publishing.
- Porter, T. M. (1986). *The Rise of Statistical Thinking, 1820–1900*. Princeton University Press. Cap. 5 (Maxwell y la estadística de gases).
