# Análisis de Clase 02: La Distribución de Velocidades y Rapidez de Maxwell-Boltzmann

**Diplomado en Física Moderna — Módulo 01: Termodinámica y Teoría Atómica Precuántica**  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Fecha de la sesión:** 22 de mayo de 2026  
**Duración:** 2 horas 59 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`Clase_02/grabacion/Segunda clase.docx`).
- Diapositivas oficiales del módulo (`Clase_02/Clase 2 Final.pdf`).
- Cuadernos de cómputo simbólico de cátedra: `Clase_02/Maxwellianas.nb`, `Maxwellianas.wl` y `Maxwellianas.pdf`.
- Texto guía central: Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Cap. 1: §1.2 (pp. 6–10) y Cap. 2: §2.4 *Kinetic Theory and Statistical Mechanics* (pp. 33–42).
- Fuentes primarias históricas: J. C. Maxwell, *Illustrations of the Dynamical Theory of Gases*, Phil. Mag. 19, 19 (1860); L. Boltzmann, *Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen*, Wiener Berichte 66, 275 (1872).

---

## 1. Motivación Física y Ruptura Conceptual: Del Promedio Global al Espectro Continuo

*Fuente: Diapositivas Clase 2, diaps. 2–8; Transcripción 00:03–00:35; Weinberg, §2.4.*

En la Clase 01 se dedujo la relación cinética fundamental $P = \frac{1}{3} n m \langle v^2\rangle$, asociando la temperatura macroscópica con la energía cinética media por partícula: $\langle E_k\rangle = \frac{3}{2} k_B T$. No obstante, este tratamiento macro-estadístico descansaba sobre una limitación severa: asumir que todas las moléculas se desplazan con una misma rapidez cuadrática media $v_{\text{rms}}$, o limitarse a promedios globales sin conocer la dispersión real de velocidades.

En la realidad física, las moléculas colisionan continuamente entre sí a frecuencias del orden de $10^9$ a $10^{10}$ choques por segundo a presión y temperatura ambiente. En cada colisión binaria elástica se intercambia momento y energía: una partícula rápida puede frenarse bruscamente tras chocar con una más lenta, mientras que otra puede ser acelerada a rapideces muy superiores al promedio. El estado térmico de equilibrio estacionario no implica que las velocidades moleculares permanezcan congeladas, sino que existe una **función de distribución probabilística invariante en el tiempo**.

```
                        ESPACIO DE CONFIGURACIÓN Y VELOCIDADES
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         ▼                                                                   ▼
   Espacio Real de Posiciones (V)                                Espacio de Velocidades (v_x, v_y, v_z)
   - Densidad uniforme n = N/V                                   - Distribución continua f(v⃗)
   - Invarianza traslacional macroscópica                        - Isotropía esférica en equilibrio
   - Sin fuerzas externas atractivas                             - Invariante ante rotaciones SO(3)
                                           │
                                           ▼
                           James Clerk Maxwell (1860)
                           1. Isotropía: f(v⃗) = φ(v_x² + v_y² + v_z²)
                           2. Independencia estadística: f(v⃗) = g(v_x) · g(v_y) · g(v_z)
                                           │
                                           ▼
                     Ecuación Funcional y Distribución Gaussiana:
                            g(v_x) = √(m / 2π k_B T) · exp(-m v_x² / 2 k_B T)
```

---

## 2. Deducción Rigurosa de la Distribución de Maxwell (1860)

*Fuente: Diapositivas Clase 2, diaps. 9–19; Transcripción 00:35–01:25; Weinberg, §2.4.*

Sea $f(\vec{v})\, d^3v = f(v_x, v_y, v_z)\, dv_x\, dv_y\, dv_z$ la probabilidad de encontrar una molécula seleccionada al azar con vector de velocidad dentro del volumen infinitesimal diferencial $d^3v$ centrado en $\vec{v}$.

Maxwell formuló dos postulados de simetría e independencia física:

1. **Postulado de Isotropía Espacial:**  
   En un gas en equilibrio térmico y en reposo macroscópico, no existe ninguna dirección privilegiada en el espacio tridimensional. Por lo tanto, la probabilidad $f(\vec{v})$ solo puede depender de la magnitud escalar de la velocidad al cuadrado, $v^2 = |\vec{v}|^2 = v_x^2 + v_y^2 + v_z^2$:
   $$f(v_x, v_y, v_z) = \phi\left(v_x^2 + v_y^2 + v_z^2\right)$$

2. **Postulado de Independencia Estadística:**  
   El movimiento térmico a lo largo de una coordenada cartesiana no influye en las componentes perpendiculares. Las distribuciones unidimensionales son probabilísticamente independientes:
   $$f(v_x, v_y, v_z) = g(v_x)\, g(v_y)\, g(v_z)$$
   donde $g$ es una función par: $g(-v_i) = g(v_i)$, dependiente de $v_i^2$.

### 2.1. Resolución de la Ecuación Funcional de Maxwell
Igualando ambas representaciones:
$$\phi\left(v_x^2 + v_y^2 + v_z^2\right) = g(v_x)\, g(v_y)\, g(v_z)$$

Tomando el logaritmo natural en ambos miembros:
$$\ln \phi\left(v_x^2 + v_y^2 + v_z^2\right) = \ln g(v_x) + \ln g(v_y) + \ln g(v_z)$$

Definiendo las variables auxiliares $u = v_x^2$, $w = v_y^2$, $s = v_z^2$, y denotando $\Phi(u+w+s) = \ln \phi$ y $G(u) = \ln g$:
$$\Phi(u + w + s) = G(u) + G(w) + G(s)$$

Diferenciando parcialmente con respecto a $u = v_x^2$:
$$\frac{\partial \Phi}{\partial u} = \frac{d G(u)}{du} = G'(u)$$

Dado que el miembro izquierdo depende simétricamente de $u+w+s$, la derivada respecto a $u$ debe ser idéntica a la derivada respecto a $w$ y a $s$:
$$\Phi'(u + w + s) = G'(u) = G'(w) = G'(s)$$

Para que una función de $u$ sea idénticamente igual a una función de $w$ para valores independientes cualesquiera de $u$ y $w$, dicha expresión debe ser una **constante de separación universal**. Denotemos esta constante por $-\alpha$ (con $\alpha > 0$ para garantizar integrabilidad y convergencia en el infinito):
$$G'(u) = \frac{d}{d(v_x^2)} \ln g(v_x) = -\alpha$$

Integrando respecto a $v_x^2$:
$$\ln g(v_x) = \ln A - \alpha\, v_x^2 \implies g(v_x) = A\, e^{-\alpha v_x^2}$$

donde $A$ es una constante de normalización. Por consiguiente, la distribución de velocidades cartesianas es una **gaussiana pura**:
$$\boxed{g(v_x) = A\, \exp\left(-\alpha v_x^2\right)}$$

### 2.2. Determinación de las Constantes $A$ y $\alpha$

**Paso 1: Normalización de la probabilidad total**  
La probabilidad integrada sobre todo el espacio de velocidades debe ser la unidad:
$$\int_{-\infty}^{\infty} g(v_x)\, dv_x = A \int_{-\infty}^{\infty} e^{-\alpha v_x^2}\, dv_x = 1$$

Recordando la integral gaussiana estándar $\int_{-\infty}^\infty e^{-\alpha x^2} dx = \sqrt{\frac{\pi}{\alpha}}$:
$$A \sqrt{\frac{\pi}{\alpha}} = 1 \implies A = \sqrt{\frac{\alpha}{\pi}}$$

**Paso 2: Conexión con la Energía Cinética y la Temperatura**  
Calculamos el momento de segundo orden $\langle v_x^2\rangle$:
$$\langle v_x^2\rangle = \int_{-\infty}^{\infty} v_x^2\, g(v_x)\, dv_x = A \int_{-\infty}^{\infty} v_x^2\, e^{-\alpha v_x^2}\, dv_x$$

Utilizando la diferenciación paramétrica bajo el signo de la integral:
$$\int_{-\infty}^{\infty} v_x^2 e^{-\alpha v_x^2} dv_x = -\frac{\partial}{\partial \alpha} \int_{-\infty}^{\infty} e^{-\alpha v_x^2} dv_x = -\frac{\partial}{\partial \alpha}\left(\sqrt{\frac{\pi}{\alpha}}\right) = \frac{1}{2} \sqrt{\frac{\pi}{\alpha^3}}$$

Por lo tanto:
$$\langle v_x^2\rangle = \left(\sqrt{\frac{\alpha}{\pi}}\right) \left(\frac{1}{2}\sqrt{\frac{\pi}{\alpha^3}}\right) = \frac{1}{2\alpha}$$

De acuerdo con el teorema de equipartición y la deducción de la Clase 01:
$$\langle E_{k,x}\rangle = \frac{1}{2} m \langle v_x^2\rangle = \frac{1}{2} k_B T \implies \langle v_x^2\rangle = \frac{k_B T}{m}$$

Igualando ambas expresiones:
$$\frac{1}{2\alpha} = \frac{k_B T}{m} \implies \boxed{\alpha = \frac{m}{2 k_B T}}$$

Sustituyendo $\alpha$ en la constante de normalización $A$:
$$A = \sqrt{\frac{m}{2\pi k_B T}}$$

La **distribución de velocidades en una dimensión** queda determinada de forma exacta:
$$\boxed{g(v_x) = \left(\frac{m}{2\pi k_B T}\right)^{1/2} \exp\left(-\frac{m v_x^2}{2 k_B T}\right)}$$

Y la **distribución vectorial tridimensional conjunta**:
$$\boxed{f(\vec{v})\, d^3v = \left(\frac{m}{2\pi k_B T}\right)^{3/2} \exp\left(-\frac{m(v_x^2 + v_y^2 + v_z^2)}{2 k_B T}\right) dv_x\, dv_y\, dv_z}$$

---

## 3. Distribución de Rapidez Escalar de Maxwell $P(v)$

*Fuente: Diapositivas Clase 2, diaps. 20–28; Transcripción 01:25–02:15; Weinberg, §2.4.*

En aplicaciones experimentales y termodinámicas, la dirección del vector velocidad suele ser irrelevante; lo crucial es la **rapidez** (magnitud escalar $v = |\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2} \ge 0$).

Para obtener la distribución de rapidez $P(v)\, dv$, transformamos el elemento diferencial de volumen del espacio de velocidades cartesianas a coordenadas esféricas $(v, \theta, \phi)$:
$$dv_x\, dv_y\, dv_z = v^2 \sin\theta\, dv\, d\theta\, d\phi$$

Integrando sobre todo el ángulo sólido espacial ($\theta \in [0, \pi]$, $\phi \in [0, 2\pi]$):
$$\int_0^{2\pi} d\phi \int_0^\pi \sin\theta\, d\theta = 4\pi$$

El volumen del cascarón esférico en el espacio de velocidades de radio $v$ y espesor $dv$ es:
$$d^3v_{\text{cascarón}} = 4\pi v^2\, dv$$

Multiplicando por la función de densidad $f(\vec{v})$ evaluada en $v^2$:

$$\boxed{P(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2 k_B T}\right)}$$

```
                   PERFIL DE LA DISTRIBUCIÓN DE RAPIDEZ P(v)
             P(v)
               ▲
               │          v_mp   ⟨v⟩   v_rms
               │            │     │     │
               │           ╭──╮   │     │
               │          ╭╯  ╰╮  │     │
               │         ╭╯    ╰╮ │     │
               │        ╭╯      ╰╮│     │
               │       ╭╯        ╰╮     │
               │      ╭╯          ╰╮    │
               │     ╭╯            ╰─────╮
               │   ╭─╯                   ╰─────────────
               └───┴──────────────────────────────────────► v
                  0  (v² domina)        (cola exponencial)
```

### 3.1. Interpretación de la Forma Funcional: Competencia entre dos Efectos
La curva $P(v)$ es el producto de dos factores contrapuestos:
1. **Factor geométrico del espacio de fases ($v^2$):**  
   Para velocidades bajas ($v \ll \sqrt{2k_BT/m}$), la exponencial tiende a 1 y $P(v) \propto v^2$. Aunque una molécula individual en reposo ($v=0$) tendría energía mínima, la probabilidad de encontrar una partícula con $v=0$ es estrictamente cero porque el volumen de un cascarón esférico de radio cero se anula ($4\pi v^2 \to 0$).
2. **Factor de Boltzmann ($\exp(-mv^2 / 2k_BT)$):**  
   Para velocidades elevadas ($v \gg \sqrt{2k_BT/m}$), el costo energético cinético penaliza exponencialmente la ocupación de estados, haciendo decaer la función rápidamente a cero.

---

## 4. Deducción Analítica de los Momentos Estadísticos de Rapidez

*Fuente: Diapositivas Clase 2, diaps. 29–35; Transcripción 02:15–02:45; `Maxwellianas.nb`.*

### 4.1. Rapidez Más Probable ($v_{\text{mp}}$)
Es la rapidez en la cual la densidad de probabilidad $P(v)$ alcanza su máximo absoluto. Aplicando la condición de extremo $\left.\frac{dP}{dv}\right|_{v_{\text{mp}}} = 0$:

$$\frac{d}{dv}\left[v^2 e^{-\alpha v^2}\right] = 2v e^{-\alpha v^2} + v^2(-2\alpha v) e^{-\alpha v^2} = 2v(1 - \alpha v^2) e^{-\alpha v^2} = 0$$

Descartando las soluciones triviales $v = 0$ y $v \to \infty$, obtenemos:
$$1 - \alpha v_{\text{mp}}^2 = 0 \implies v_{\text{mp}} = \frac{1}{\sqrt{\alpha}}$$

Sustituyendo $\alpha = \frac{m}{2 k_B T}$:

$$\boxed{v_{\text{mp}} = \sqrt{\frac{2 k_B T}{m}} \approx 1.414 \sqrt{\frac{k_B T}{m}}}$$

### 4.2. Rapidez Media ($\langle v\rangle$)
El promedio estadístico directo de la rapidez se define mediante la integral de primer momento:
$$\langle v\rangle = \int_0^\infty v\, P(v)\, dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \int_0^\infty v^3 \exp\left(-\frac{m v^2}{2 k_B T}\right) dv$$

Efectuando el cambio de variable $u = v^2 \implies du = 2v\, dv \implies v^3 dv = \frac{1}{2} u\, du$:
$$\int_0^\infty v^3 e^{-\alpha v^2} dv = \frac{1}{2} \int_0^\infty u e^{-\alpha u} du = \frac{1}{2\alpha^2}$$

Sustituyendo $\alpha = \frac{m}{2 k_B T}$:
$$\langle v\rangle = 4\pi \left(\frac{\alpha}{\pi}\right)^{3/2} \left(\frac{1}{2\alpha^2}\right) = \frac{2}{\sqrt{\pi \alpha}} = \frac{2}{\sqrt{\pi}} \sqrt{\frac{2 k_B T}{m}}$$

$$\boxed{\langle v\rangle = \sqrt{\frac{8 k_B T}{\pi m}} \approx 1.596 \sqrt{\frac{k_B T}{m}}}$$

### 4.3. Rapidez Cuadrática Media ($v_{\text{rms}}$)
El momento de segundo orden representa la raíz cuadrada de la media de los cuadrados de la rapidez:
$$\langle v^2\rangle = \int_0^\infty v^2\, P(v)\, dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \int_0^\infty v^4 e^{-\alpha v^2} dv$$

Evaluando la integral estándar $\int_0^\infty v^4 e^{-\alpha v^2} dv = \frac{3}{8\alpha^2}\sqrt{\frac{\pi}{\alpha}}$:
$$\langle v^2\rangle = 4\pi \left(\frac{\alpha}{\pi}\right)^{3/2} \left(\frac{3}{8\alpha^2}\sqrt{\frac{\pi}{\alpha}}\right) = \frac{3}{2\alpha} = \frac{3 k_B T}{m}$$

Extrayendo la raíz cuadrada:

$$\boxed{v_{\text{rms}} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3 k_B T}{m}} \approx 1.732 \sqrt{\frac{k_B T}{m}}}$$

### 4.4. La Jerarquía Universal de Rapideces
Comparando los factores numéricos de las tres velocidades características:

$$v_{\text{mp}} : \langle v\rangle : v_{\text{rms}} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3} \approx 1.414 : 1.596 : 1.732$$

$$\boxed{v_{\text{mp}} < \langle v\rangle < v_{\text{rms}}}$$

Esta asimetría estricta se debe a que la distribución de Maxwell posee una **cola positiva alargada hacia altas velocidades**, lo cual desplaza el promedio aritmético $\langle v\rangle$ y la raíz cuadrática $v_{\text{rms}}$ hacia valores superiores al valor modal más probable $v_{\text{mp}}$.

---

## 5. Análisis del Cuaderno Simbólico de Cátedra (`Maxwellianas.nb`)

*Fuente: `Clase_02/Maxwellianas.nb` y `Maxwellianas.wl`; Transcripción 02:13–02:50.*

En el cuaderno Mathematica oficial del Dr. Julio Oliva (`Maxwellianas.nb`), se codifican analíticamente las definiciones:
```mathematica
PM[v_] := 4 Pi (m / (2 Pi k T))^(3/2) v^2 Exp[-m v^2 / (2 k T)]
```
El análisis computacional desarrollado en clase demuestra tres propiedades físicas esenciales:

1. **Efecto del Incremento de Temperatura ($T$):**  
   Al aumentar $T$, el pico de la distribución ($v_{\text{mp}}$) se desplaza hacia la derecha proporcionalmente a $\sqrt{T}$, mientras que la altura máxima decae como $1/\sqrt{T}$. El área bajo la curva permanece estrictamente igual a 1. El gas experimenta una dispersión térmica más ancha y aplanada.
2. **Efecto de la Masa Molar ($m$):**  
   Para una misma temperatura $T = 300\text{ K}$, gases ligeros como el Helio ($M = 4\text{ g/mol}$) presentan una curva sumamente extendida hacia altas velocidades ($v_{\text{rms}} \approx 1360\text{ m/s}$), superando fácilmente la velocidad de escape de atmósferas planetarias pequeñas; mientras que gases pesados como el Xenón ($M = 131.3\text{ g/mol}$) concentran casi toda su densidad de probabilidad en un rango angosto por debajo de $400\text{ m/s}$.

---

## 6. Conclusiones de la Clase

1. **Naturaleza estadística del equilibrio:** El equilibrio térmico de un gas no es estático ni homogéneo en rapidez; es un estado dinámico estacionario gobernado por una distribución continua de velocidades.
2. **Origen de la gaussiana:** La combinación de la isotropía espacial tridimensional y la independencia estadística de los ejes cartesianos impone matemáticamente que la distribución unidimensional de velocidades sea gaussiana: $g(v_x) \propto e^{-m v_x^2 / 2 k_B T}$.
3. **Distribución de Maxwell-Boltzmann de rapidez:** El factor geométrico $4\pi v^2$ generado por la integración en cascarones esféricos en el espacio de velocidades garantiza que $P(v) \to 0$ para $v \to 0$, originando un máximo finito antes de decaer exponencialmente.
4. **Desigualdad de momentos:** Se verificó formalmente la jerarquía universal $v_{\text{mp}} < \langle v\rangle < v_{\text{rms}}$, demostrando analíticamente la asimetría de la distribución generada por la cola térmica.
5. **Base para los fenómenos de transporte:** La distribución de Maxwell proporciona la distribución de equilibrio estacionaria; cualquier perturbación local generará flujos de materia, momento o energía (difusión, viscosidad y conducción), estudiados en la Clase 03.

---

## 7. Referencias Bibliográficas

1. **Fuentes primarias y artículos históricos:**
   - Maxwell, J. C. (1860). "Illustrations of the dynamical theory of gases. Part I. On the motions and collisions of perfectly elastic spheres". *Philosophical Magazine*, 19(124), 19–32.
   - Boltzmann, L. (1872). "Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen". *Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften*, 66, 275–370.
2. **Textos del diplomado y recursos computacionales:**
   - Oliva Zapata, J. E. (2026). *Material pedagógico de Clase 02: Distribución de velocidades y rapidez*. Universidad de Concepción.
   - Oliva Zapata, J. E. (2026). *Maxwellianas.nb / Maxwellianas.wl*. Cuadernos de cómputo en Wolfram Mathematica.
3. **Textos universitarios canónicos:**
   - Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. Cap. 2: §2.4 "Kinetic Theory and Statistical Mechanics", pp. 33–42.
   - Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. Nueva York: McGraw-Hill. Cap. 7: "Elementary Kinetic Theory of Transport Processes".
   - Pathria, R. K., & Beale, P. D. (2011). *Statistical Mechanics* (3ª ed.). Ámsterdam: Elsevier / Academic Press.
