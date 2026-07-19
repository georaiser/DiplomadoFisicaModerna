# Análisis de Clase 03 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Encabezado

| Campo | Detalle |
|-------|---------|
| **Módulo** | Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1) |
| **Docente** | Prof. Julio Eduardo Oliva Zapata |
| **Fecha** | 29 de mayo de 2026 |
| **Duración** | 3 h 7 min |
| **Resultados de aprendizaje** | Movimiento browniano como evidencia del atomismo; derivación de la ecuación de Fokker–Planck a partir de la caminata aleatoria discreta; difusión y advección; relación de Einstein–Smoluchowski; viscosidad de gases como aplicación de transporte |

---

## Fuentes Utilizadas

- **Transcripción de video:** `Clase_03/grabacion/Reunión en _General_ .docx` (fuente principal, ~147 KB, procesada en su totalidad).  
- **Recursos adicionales:** `Clase_03/EjemplosTaylor.pdf`, `Clase_03/Fokker-Planck 1D.pdf`, `Clase_03/Lab viscosidad final.pdf`.  
- **Libro de referencia central:** Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021).  
- **Bibliografía de apoyo:** Einstein (1905); Smoluchowski (1906); Reif, *Fundamentals of Statistical and Thermal Physics* (1965); Risken, *The Fokker–Planck Equation* (Springer, 1989); Feynman Lectures, Vol. I, cap. 41.

---

## 1. Recapitulación y motivación de la clase

*Fuente: Transcripción, minutos 0–15. Fuente complementaria: Weinberg, cap. 1.*

El Prof. Oliva inició con un repaso de las dos primeras clases, sintetizando las afirmaciones fundamentales:

1. La ley de los gases ideales $PV = Nk_BT$ es válida en el límite de gases rarificados en que las partículas solo interactúan mediante colisiones elásticas y pueden explorar todo el volumen $V$ (partículas puntuales).

2. Las correcciones a este límite —volumen finito de las partículas e interacciones de largo alcance— dan lugar a la **ecuación de Van der Waals**:
$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT,$$
donde $a$ cuantifica la atracción intermolecular y $b$ es el covolumen (volumen excluido por partícula).

3. La temperatura es una **variable emergente** que mide el promedio de la energía cinética de traslación: $\langle E_k \rangle = \frac{3}{2}k_BT$.

4. La distribución de Maxwell–Boltzmann describe la distribución de rapideces; sus tres velocidades características escalan como $\sqrt{T/m}$.

**Pregunta de la clase:** ¿Qué evidencia experimental existe de que la materia está efectivamente compuesta de constituyentes discretos (átomos, moléculas)?

---

## 2. El movimiento browniano: fenomenología e historia

*Fuente: Transcripción, minutos 15–45. Fuente complementaria: Brown (1828); Feynman Lectures, Vol. I, cap. 41.*

### 2.1 Descubrimiento y descripción

En 1827, el botánico escocés **Robert Brown** observó al microscopio que partículas de polen suspendidas en agua realizaban movimientos erráticos, aparentemente aleatorios. Inicialmente atribuyó el fenómeno a procesos biológicos, pero al repetir el experimento con partículas inorgánicas (polvo de roca, partículas de vidrio molido) obtuvo el mismo resultado. El movimiento browniano es, por tanto, una propiedad universal de la materia particulada suspendida en un fluido, independiente de la naturaleza química.

**Características observadas:**
- La trayectoria es completamente irregular (sin dirección preferencial).
- La magnitud del movimiento aumenta con la temperatura y con la disminución del tamaño de la partícula.
- Es independiente de la historia previa de la partícula (sin memoria).

### 2.2 Analogía mecánica (demostrada en clase)

El Prof. Oliva mostró videos de la analogía mecánica: un tablero vibrado con "bolitas pequeñas" (que simulan las moléculas invisibles del gas) y una "bolita blanca de pluma vid" visible. Las bolitas pequeñas, agitadas aleatoriamente, bombardean la bolita blanca desde todas las direcciones, produciendo una trayectoria errática. Esta analogía captura el mecanismo microscópico:

> Las moléculas del gas, que se mueven con distribución de Maxwell–Boltzmann, bombardean a la partícula browniana desde todas las direcciones con distintos momentos, produciendo un movimiento neto aleatorio.

### 2.3 Importancia epistemológica

El movimiento browniano constituyó la primera **evidencia directa observable** de la existencia de átomos y moléculas. Antes de 1905, el atomismo era una hipótesis filosófica, no una realidad física demostrable. La explicación cuantitativa de Einstein (1905) y la verificación experimental de Perrin (1908) transformaron el atomismo en un hecho establecido.

---

## 3. Caminata aleatoria discreta en 1D: el modelo microscópico

*Fuente: Transcripción, minutos 50–100. Fuente complementaria: Reif, sec. 1.5; Risken, cap. 3.*

### 3.1 Configuración del modelo

Se considera una partícula restringida a una red de puntos igualmente espaciados, con separación $\Delta x$:

$$\ldots, x-2\Delta x,\; x-\Delta x,\; x,\; x+\Delta x,\; x+2\Delta x, \ldots$$

En cada intervalo de tiempo $\Delta t$, la partícula **debe** realizar un salto:
- A la **derecha** con probabilidad $\nu$,
- A la **izquierda** con probabilidad $1 - \nu$.

El caso simétrico $\nu = 1/2$ corresponde a la difusión pura (sin arrastre). El caso $\nu \neq 1/2$ describe un sistema con **advección** (drift), análogo a una partícula que se mueve en un fluido con flujo neto en una dirección.

Sea $P(t, x)$ la probabilidad de que la partícula esté en el sitio $x$ en el instante $t$.

### 3.2 Ecuación de Chapman–Kolmogorov discreta

La probabilidad $P(t+\Delta t, x)$ se compone de dos contribuciones:

$$\boxed{P(t+\Delta t, x) = \nu\, P(t, x-\Delta x) + (1-\nu)\, P(t, x+\Delta x).}$$

**Interpretación:** para estar en $x$ en el instante $t+\Delta t$, la partícula debía estar en $x-\Delta x$ y saltar a la derecha (con probabilidad $\nu$), **o** en $x+\Delta x$ y saltar a la izquierda (con probabilidad $1-\nu$).

Esta es una **ecuación funcional** para $P$; para convertirla en una ecuación diferencial se realiza una expansión de Taylor.

### 3.3 Expansión de Taylor y límite continuo

Se expande $P(t+\Delta t, x)$ a primer orden en $\Delta t$ y $P(t, x\pm\Delta x)$ a segundo orden en $\Delta x$:

$$P(t+\Delta t, x) \approx P + \Delta t\, \partial_t P + O(\Delta t^2),$$

$$P(t, x \pm \Delta x) \approx P \pm \Delta x\, \partial_x P + \frac{\Delta x^2}{2}\, \partial_{xx} P + O(\Delta x^3).$$

Sustituyendo en la ecuación de Chapman–Kolmogorov:

$$P + \Delta t\, \partial_t P = \nu\left(P - \Delta x\, \partial_x P + \frac{\Delta x^2}{2}\partial_{xx}P\right) + (1-\nu)\left(P + \Delta x\, \partial_x P + \frac{\Delta x^2}{2}\partial_{xx}P\right).$$

Expandiendo y agrupando:

$$\Delta t\, \partial_t P = -(2\nu - 1)\Delta x\, \partial_x P + \frac{\Delta x^2}{2}\, \partial_{xx} P.$$

Dividiendo por $\Delta t$ y definiendo los coeficientes de transporte:

$$\mu_\text{drift} \equiv \frac{(2\nu - 1)\Delta x}{\Delta t}, \qquad D \equiv \frac{\Delta x^2}{2\Delta t},$$

se obtiene la **ecuación de advección–difusión**:

$$\boxed{\partial_t f + \mu_\text{drift}\, \partial_x f = D\, \partial_{xx} f.}$$

donde $f(t,x)$ es la densidad de probabilidad continua (obtenida en el límite $\Delta t, \Delta x \to 0$ con $D$ y $\mu_\text{drift}$ fijos).

**Nota importante sobre la expansión.** Se expande a **primer orden en $\Delta t$** y **segundo orden en $\Delta x$**. Si se expandiera a segundo orden en $\Delta t$ aparecerían términos de onda (ecuación hiperbólica); la elección de primer orden en $t$ selecciona el régimen difusivo (ecuación parabólica), que describe movimiento browniano en el límite en que el tiempo entre colisiones $\Delta t$ es muy pequeño.

### 3.4 Interpretación de los coeficientes

| Coeficiente | Expresión | Significado físico |
|-------------|-----------|-------------------|
| $\mu_\text{drift}$ | $\frac{(2\nu-1)\Delta x}{\Delta t}$ | Velocidad promedio de arrastre (cero si $\nu=1/2$) |
| $D$ | $\frac{\Delta x^2}{2\Delta t}$ | Coeficiente de difusión: determina la tasa de ensanchamiento de la distribución |

Cuando $\nu = 1/2$: $\mu_\text{drift} = 0$ y la ecuación se reduce a la **ecuación de difusión pura** (ecuación de calor):

$$\partial_t f = D\, \partial_{xx} f.$$

---

## 4. La ecuación de Fokker–Planck

*Fuente: Transcripción, minutos 95–110. Fuente complementaria: Risken, *The Fokker–Planck Equation*, cap. 4.*

La ecuación de advección–difusión derivada es un caso particular de la **ecuación de Fokker–Planck**, que en forma general para una partícula unidimensional con fricción y ruido estocástico es:

$$\frac{\partial f}{\partial t} = -\frac{\partial}{\partial x}\left[\mu(x,t)\, f\right] + D\, \frac{\partial^2 f}{\partial x^2},$$

donde $\mu(x,t)$ es el coeficiente de drift (que puede depender de posición y tiempo) y $D$ el coeficiente de difusión. En el caso lineal con $\mu = \text{cte}$ se recupera la ecuación de advección–difusión anterior.

**Analogía con la ecuación de Schrödinger.** La ecuación de difusión pura $\partial_t f = D\, \partial_{xx} f$ es formalmente análoga a la ecuación de Schrödinger para una partícula libre:

$$i\hbar\, \partial_t \psi = -\frac{\hbar^2}{2m}\, \partial_{xx} \psi,$$

mediante la sustitución $i\hbar \to -1/(D\cdot 2m/\hbar)$. Esta analogía —señalada por el Prof. Oliva— es el puente conceptual entre la física estadística clásica y la mecánica cuántica.

---

## 5. Solución gaussiana de la ecuación de difusión

*Fuente: Transcripción, minutos 110–145. Fuente complementaria: Reif, sec. 1.6; Risken, cap. 5.*

### 5.1 Solución fundamental (condición inicial: delta de Dirac)

Con condición inicial $f(t=0, x) = \delta(x - x_0)$ (partícula localizada inicialmente en $x_0$) y condición de contorno $f \to 0$ cuando $|x| \to \infty$, la solución de la ecuación de advección–difusión es:

$$\boxed{f(t, x) = \frac{1}{\sqrt{4\pi D t}}\, \exp\!\left(-\frac{(x - x_0 - \mu_\text{drift}\, t)^2}{4Dt}\right).}$$

Esta es una **gaussiana en $x$** cuyo centro y ancho evolucionan en el tiempo.

### 5.2 Verificación de la normalización

La condición $\int_{-\infty}^{+\infty} f(t,x)\, dx = 1$ se satisface para todo $t > 0$, ya que la integral de una gaussiana normalizada da exactamente 1. Esto garantiza que la partícula siempre se encuentra en algún lugar (no hay fugas del sistema).

### 5.3 Evolución del promedio de la posición

$$\langle x \rangle(t) = \int_{-\infty}^{+\infty} x\, f(t,x)\, dx = x_0 + \mu_\text{drift}\, t.$$

**Interpretación:** en presencia de drift $\mu_\text{drift} \neq 0$, el centro de la distribución se desplaza linealmente en el tiempo —la partícula tiene un movimiento neto en la dirección del drift.

### 5.4 Evolución de la varianza

$$\sigma_x^2(t) = \langle (x - \langle x \rangle)^2 \rangle = \langle x^2 \rangle - \langle x \rangle^2 = 2Dt.$$

**Resultado clave:**

$$\boxed{\sigma_x(t) = \sqrt{2Dt}.}$$

La desviación estándar de la posición crece como $\sqrt{t}$, no como $t$. Esto es la **ley de difusión de Einstein**: la distancia típica explorada por la partícula escala con la raíz cuadrada del tiempo transcurrido.

**Verificación del límite inicial.** En $t = 0$: $\sigma_x(0) = 0$ y el máximo de $f$ diverge, recuperando la delta de Dirac. En $t \to \infty$: $\sigma_x \to \infty$, la partícula explora todo el espacio accesible.

---

## 6. Significado físico: difusión vs. advección

*Fuente: Transcripción, minutos 140–160. Fuente complementaria: Reif, sec. 12.1.*

La ecuación de advección–difusión captura dos mecanismos de transporte:

| Mecanismo | Término | Efecto sobre $f(t,x)$ |
|-----------|---------|----------------------|
| **Difusión** | $D\, \partial_{xx} f$ | Ensancha la distribución; $\sigma \propto \sqrt{t}$ |
| **Advección** | $-\mu_\text{drift}\, \partial_x f$ | Traslada el centro de la distribución; $\langle x \rangle \propto t$ |

**Difusión pura ($\mu_\text{drift} = 0$):** la distribución se centra en $x_0$ para siempre (sin movimiento neto), pero se ensancha progresivamente. La probabilidad de encontrar la partícula lejos del origen aumenta con el tiempo.

**Advección pura ($D = 0$):** la distribución se traslada rígidamente a velocidad $\mu_\text{drift}$ sin cambiar de forma.

**Conexión con termodinámica.** La difusión es la consecuencia macroscópica del movimiento aleatorio de las partículas del fluido. A nivel microscópico, hay infinitas trayectorias posibles para la partícula browniana; la probabilidad de que la partícula permanezca siempre en su posición inicial es no nula pero negligiblemente pequeña comparada con las configuraciones en que la partícula se aleja. Esta asimetría estadística es el origen microscópico de la **segunda ley de la termodinámica** (tendencia al desorden).

---

## 7. Relación de Einstein–Smoluchowski: conexión entre difusión y temperatura

*Fuente: Transcripción, minutos 160–185. Fuente complementaria: Einstein (1905); Reif, sec. 15.3.*

### 7.1 El argumento de Einstein (1905)

En su artículo de 1905, Einstein consideró una partícula esférica de radio $R$ moviéndose en un fluido de viscosidad $\eta$ a temperatura $T$. Utilizando dos ingredientes:

1. **Fricción de Stokes:** la fuerza de arrastre sobre una esfera de radio $R$ moviéndose a velocidad $v$ en un fluido viscoso es $F_\text{drag} = 6\pi\eta R v$ (ley de Stokes, 1851).

2. **Equipartición de energía** y el principio de equilibrio detallado (condición de equilibrio termodinámico).

Einstein derivó la **relación de Einstein–Smoluchowski** (también llamada relación de fluctuación–disipación):

$$\boxed{D = \frac{k_BT}{6\pi\eta R}.}$$

Esta relación es notable porque conecta:
- $D$: una propiedad del **movimiento aleatorio** (difusión, observable macroscópicamente),
- $\eta$: una propiedad del fluido (viscosidad, medible macroscópicamente),
- $R$: el radio de la partícula (medible con microscopio),
- $k_B$: la constante de Boltzmann,
- $T$: la temperatura.

### 7.2 Medición experimental de $N_A$ (Perrin, 1908)

La ecuación anterior implica que midiendo $D$, $\eta$, $R$ y $T$, se puede despejar $k_B$:

$$k_B = \frac{6\pi\eta R\, D}{T}.$$

Y dado que $k_B = R_g/N_A$ (con $R_g = 8{,}314$ J/(mol·K) la constante de los gases), se puede determinar:

$$N_A = \frac{R_g\, T}{6\pi\eta R\, D}.$$

Jean Perrin (1908) midió $D$ experimentalmente (rastreando la posición de partículas de resina de mástique en glicerina a temperatura conocida) y obtuvo $N_A \approx 6{,}0 \times 10^{23}$ mol$^{-1}$, en notable acuerdo con los valores obtenidos por métodos independientes (electroquímica, cinética de gases). Este resultado constituyó la confirmación experimental definitiva del atomismo. Perrin recibió el Premio Nobel de Física en 1926.

### 7.3 Ley de difusión en 3 dimensiones

En tres dimensiones, la varianza de la distancia al origen crece como:

$$\langle r^2 \rangle = \langle x^2 + y^2 + z^2 \rangle = 2Dt \cdot 3 = 6Dt,$$

asumiendo independencia estadística de las tres componentes. Por tanto:

$$\sigma_r(t) = \sqrt{6Dt}.$$

El factor de proporcionalidad entre $\sigma^2$ y $t$ varía con la dimensión espacial, pero la dependencia funcional $\sigma \propto \sqrt{t}$ se mantiene en cualquier número de dimensiones.

---

## 8. Expansión de Taylor: herramienta matemática central

*Fuente: Transcripción, minutos 63–75; `EjemplosTaylor.pdf`. Fuente complementaria: Arfken & Weber, cap. 5.*

La derivación de la ecuación de Fokker–Planck requirió la **serie de Taylor** de $P(t, x\pm\Delta x)$ alrededor de $x$. La expansión en una dimensión es:

$$f(x + \epsilon) = \sum_{n=0}^\infty \frac{\epsilon^n}{n!}\, f^{(n)}(x) = f(x) + \epsilon f'(x) + \frac{\epsilon^2}{2!}f''(x) + \frac{\epsilon^3}{3!}f'''(x) + \cdots$$

**Interpretación geométrica** (explicada por el Prof. Oliva):
- **Orden 0:** aproximar $f$ por una constante cerca de $x_0$.
- **Orden 1:** aproximar $f$ por la recta tangente en $x_0$ (pendiente = $f'(x_0)$).
- **Orden 2:** aproximar $f$ por la parábola osculatriz en $x_0$.
- **Orden $n$:** cada término adicional mejora la aproximación en un radio creciente alrededor de $x_0$.

En la derivación de Fokker–Planck, se toma el **límite continuo** ($\Delta t, \Delta x \to 0$) con $D = \Delta x^2/(2\Delta t)$ finito. Esto equivale a retener los términos de orden $\Delta x^2$ en la expansión espacial, que generan el término de segunda derivada responsable de la difusión.

---

## 9. Viscosidad de gases: aplicación al transporte

*Fuente: `Lab viscosidad final.pdf`. Fuente complementaria: Reif, sec. 12.4; Feynman Lectures, Vol. I, cap. 43.*

### 9.1 Definición de viscosidad dinámica

La **viscosidad dinámica** $\eta$ de un fluido cuantifica la resistencia al flujo. Para un fluido sometido a un gradiente de velocidad $\partial u/\partial z$ en la dirección $z$ perpendicular al flujo, la fuerza de cizallamiento por unidad de área es:

$$\tau = \eta\, \frac{\partial u}{\partial z}.$$

### 9.2 Derivación cinética de la viscosidad de un gas ideal

En un gas ideal, la viscosidad surge del transporte de momento entre capas de gas que se mueven a velocidades distintas. Sea $\lambda$ el **camino libre medio** (distancia promedio entre colisiones) y $\langle v \rangle = \sqrt{8k_BT/\pi m}$ la velocidad media de las partículas.

Una molécula que viaja desde una capa de velocidad $u(z_0 + \lambda)$ hasta una capa de velocidad $u(z_0)$ transporta un exceso de momento por unidad de masa de $\Delta u \approx \lambda\, \partial u/\partial z$.

El flujo de momento por unidad de área es:

$$\tau = \rho \langle v \rangle \lambda\, \frac{\partial u}{\partial z},$$

donde $\rho = nm$ es la densidad másica. Comparando con la definición de $\tau$:

$$\boxed{\eta = \rho \langle v \rangle \lambda = nm \langle v \rangle \lambda.}$$

### 9.3 Dependencia de $\eta$ con $T$ y consecuencias

Dado que $\lambda = 1/(\sqrt{2}\, n\, \sigma_c)$ (con $\sigma_c = \pi d^2$ la sección eficaz de colisión) y $\langle v \rangle \propto \sqrt{T/m}$:

$$\eta = \frac{m}{\sqrt{2}\, \sigma_c}\, \langle v \rangle \propto \frac{m}{\sigma_c}\sqrt{\frac{k_BT}{m}} = \frac{\sqrt{mk_BT}}{\sigma_c}.$$

**Resultado notable:** $\eta$ es **independiente de la densidad $n$** del gas. Esto fue predicho por Maxwell en 1860 y verificado experimentalmente: duplicar la presión de un gas no cambia su viscosidad, un resultado contraintuitivo que inicialmente Maxwell mismo consideró difícil de creer.

La viscosidad crece como $\eta \propto \sqrt{T}$: un gas caliente es más viscoso que uno frío, al contrario que los líquidos (cuya viscosidad disminuye con $T$). Esto refleja que en un gas la viscosidad proviene del transporte de momento, que aumenta con $T$, mientras que en un líquido proviene de la cohesión intermolecular, que disminuye con $T$.

**Valores típicos a 20 °C:**

| Gas | $\eta$ ($\mu$Pa·s) |
|-----|-------------------|
| H₂ | 8,9 |
| He | 19,7 |
| N₂ | 17,6 |
| Ar | 22,7 |
| CO₂ | 14,9 |

---

## 10. Conexión con la condensación de Bose–Einstein y los límites del modelo clásico

*Fuente: Transcripción, minutos 10–15. Fuente complementaria: Weinberg, cap. 10; Griffin et al., *Bose–Einstein Condensation* (Cambridge, 1995).*

El Prof. Oliva señaló que la distribución de Maxwell–Boltzmann y la descripción de partículas clásicas falla en el régimen cuántico. Para bosones a muy baja temperatura, las esferas de acción cuántica de De Broglie de radio:

$$\lambda_\text{dB} = \frac{h}{\sqrt{2\pi mk_BT}}$$

se traslapan cuando $n \lambda_\text{dB}^3 \gtrsim 1$, es decir, cuando la temperatura cae por debajo de la **temperatura crítica de condensación de Bose–Einstein**:

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3},$$

donde $\zeta(3/2) \approx 2{,}612$ es la función zeta de Riemann. Para el Rb$^{87}$ a densidades de $n \sim 10^{12}$ cm$^{-3}$: $T_c \sim 100$ nK. A esta temperatura, una fracción macroscópica de los átomos cae en el estado fundamental: esto es el **condensado de Bose–Einstein** (BEC).

Cornell, Wieman y Ketterle realizaron la primera observación experimental del BEC en átomos de Rb$^{87}$ (1995), obteniendo el Premio Nobel de Física en 2001. Actualmente el BEC es la base tecnológica de relojes atómicos de ultra-precisión y prototipos de computadores cuánticos.

---

## Conclusiones de la Clase

1. **El movimiento browniano** es el movimiento errático de partículas visibles al microscopio, causado por el bombardeo aleatorio de las moléculas invisibles del fluido circundante.

2. **Modelo de caminata aleatoria discreta:** en cada paso de tiempo $\Delta t$, la partícula salta a la derecha con probabilidad $\nu$ o a la izquierda con probabilidad $1-\nu$; la probabilidad de estar en la posición $x$ sigue la ecuación de Chapman–Kolmogorov.

3. **En el límite continuo** ($\Delta t, \Delta x \to 0$ con $D = \Delta x^2/2\Delta t$ finito), la ecuación de Chapman–Kolmogorov se convierte en la **ecuación de advección–difusión** (ecuación de Fokker–Planck lineal): $\partial_t f + \mu_\text{drift}\, \partial_x f = D\, \partial_{xx} f$.

4. **La solución fundamental** con condición inicial en $x_0$ es una gaussiana cuyo centro se mueve linealmente ($\langle x \rangle = x_0 + \mu_\text{drift}\, t$) y cuyo ancho crece como $\sigma_x = \sqrt{2Dt}$.

5. **Ley de difusión de Einstein:** $\langle r^2 \rangle \propto Dt$; la distancia típica explorada escala como $\sqrt{t}$, no linealmente en $t$.

6. **Relación de Einstein–Smoluchowski:** $D = k_BT/(6\pi\eta R)$ conecta la difusión macroscópica con la temperatura y la viscosidad del fluido; permitió la primera medición directa de $N_A$ por Perrin (1908).

7. **Viscosidad de gases ideales:** $\eta \propto \sqrt{mkT}/\sigma_c$, independiente de la densidad del gas —predicción contraintuitiva confirmada experimentalmente por Maxwell.

8. **Límite cuántico:** a temperaturas suficientemente bajas, las esferas de De Broglie de los bosones se traslapan y aparece la condensación de Bose–Einstein, que invalida el modelo clásico de Maxwell–Boltzmann.

9. **La ecuación de difusión** es formalmente análoga a la ecuación de Schrödinger de la mecánica cuántica (mediante sustitución $i\hbar \to -1/(2mD/\hbar)$); la intuición adquirida en este contexto clásico es directamente transferible al cuántico.

10. **Contexto histórico:** el movimiento browniano como fenómeno fue descubierto en 1827; su explicación cuantitativa en 1905 (Einstein) y su verificación experimental en 1908 (Perrin) constituyeron la prueba definitiva de la existencia de átomos y moléculas.

---

## Referencias Bibliográficas

### 1. Artículos científicos originales (fuentes primarias)

- Brown, R. (1828). *A Brief Account of Microscopical Observations Made in the Months of June, July and August, 1827, on the Particles Contained in the Pollen of Plants.* Philosophical Magazine, **4**, 161–173.
- Einstein, A. (1905). *Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen.* Annalen der Physik, **17**, 549–560.
- Smoluchowski, M. von (1906). *Zur kinetischen Theorie der Brownschen Molekularbewegung und der Suspensionen.* Annalen der Physik, **21**, 756–780.
- Perrin, J. (1908). *L'agitation moléculaire et le mouvement brownien.* Comptes Rendus de l'Académie des Sciences, **146**, 967–970.
- Fokker, A. D. (1914). *Die mittlere Energie rotierender elektrischer Dipole im Strahlungsfeld.* Annalen der Physik, **43**, 810–820.
- Planck, M. (1917). *Über einen Satz der statistischen Dynamik und seine Erweiterung in der Quantentheorie.* Sitzungsberichte der Preußischen Akademie der Wissenschaften, **24**, 324–341.

### 2. Textos del curso

- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 1–2.

### 3. Textos universitarios estándar

- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 1, 12, 15.
- Risken, H. (1989). *The Fokker–Planck Equation: Methods of Solution and Applications* (2ª ed.). Springer-Verlag. Caps. 3–5.
- Gardiner, C. W. (2009). *Stochastic Methods: A Handbook for the Natural and Social Sciences* (4ª ed.). Springer. Caps. 3–4.
- van Kampen, N. G. (2007). *Stochastic Processes in Physics and Chemistry* (3ª ed.). Elsevier. Caps. 4, 8.

### 4. Recursos de libre acceso verificados

- Feynman, R. P., Leighton, R. B., & Sands, M. (1963). *The Feynman Lectures on Physics*, Vol. I, caps. 41–43: *The Brownian Movement, Diffusion, Viscosity*. Disponible en: [https://www.feynmanlectures.caltech.edu/I_41.html](https://www.feynmanlectures.caltech.edu/I_41.html)
- Einstein, A. (1905). Traducción al inglés de los artículos del *annus mirabilis*, incluyendo el de movimiento browniano. Disponible en: [https://www.physics.princeton.edu/~mcdonald/examples/mechanics/einstein_ap_17_549_05.pdf](https://www.physics.princeton.edu/~mcdonald/examples/mechanics/einstein_ap_17_549_05.pdf)

### 5. Historia y filosofía de la física

- Nye, M. J. (1972). *Molecular Reality: A Perspective on the Scientific Work of Jean Perrin*. MacDonald. Historia detallada de la verificación experimental del atomismo.
- Brush, S. G. (1968). *A History of Random Processes. I. Brownian Movement from Brown to Perrin.* Archive for History of Exact Sciences, **5**, 1–36.
- Pais, A. (1982). *'Subtle is the Lord…': The Science and the Life of Albert Einstein*. Oxford University Press. Cap. 5 (Movimiento Browniano).
