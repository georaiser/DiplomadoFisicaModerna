# Resumen y Análisis del Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Información del Módulo

| Campo | Detalle |
|-------|---------|
| **Programa** | Diplomado en Física Moderna |
| **Módulo** | 1: Termodinámica y Teoría Atómica Pre-Cuántica |
| **Docente** | Prof. Julio Eduardo Oliva Zapata |
| **Período** | Mayo–Junio 2026 (Clases 01–06) |
| **Total de horas** | ~19 h |

---

## Estructura del Módulo

| Clase | Fecha | Tema central |
|-------|-------|-------------|
| 1 | 08 mayo 2026 | Visión histórica; naturaleza atómica; ley de los gases ideales; distribución de velocidades (primera parte) |
| 2 | 22 mayo 2026 | Distribución de Maxwell–Boltzmann; calor específico a presión constante; presión de radiación |
| 3 | 29 mayo 2026 | Movimiento browniano; ecuación de Fokker–Planck; difusión y viscosidad |
| 4 | 05 junio 2026 | Termodinámica: variables de estado; superficies de fase; ecuación de Van der Waals; transiciones de fase; primera ley |
| 5 | 12 junio 2026 | Segunda ley; entropía termodinámica; entropía de Boltzmann; Sackur–Tetrode; paradoja de Gibbs |
| 6 | 19 junio 2026 | Mecánica estadística; macroestados y microestados; hipótesis de Boltzmann; derivación de Sackur–Tetrode; sistema de espines |

---

## Clase 01 — Naturaleza atómica de la materia y la ley de los gases ideales

*Fecha: 08 de mayo de 2026*

### Línea histórica

La idea de que la materia está compuesta de partículas discretas tiene raíces en Demócrito (~450 a.C.), pero no fue hasta el siglo XIX que se convirtió en ciencia cuantitativa. El contexto científico de fines del siglo XIX incluye:

- **1803** — John Dalton: ley de proporciones múltiples y primera tabla de pesos atómicos.
- **1827** — Robert Brown: agitación irregular de granos de polen en agua (movimiento browniano).
- **1859** — James Clerk Maxwell: primera derivación de la distribución de velocidades de los gases.
- **1872** — Ludwig Boltzmann: ecuación de Boltzmann; teorema H.
- **1905** — Albert Einstein: teoría cuantitativa del movimiento browniano.

### La ley de los gases ideales

Las leyes empíricas de Boyle ($PV = \text{cte}$ a $T$ fija), Charles ($V \propto T$ a $P$ fija) y Gay-Lussac ($P \propto T$ a $V$ fijo) se unifican en la ecuación de estado:

$$\boxed{PV = Nk_BT = nRT,}$$

donde $k_B = 1{,}380\,649\times10^{-23}$ J/K es la constante de Boltzmann, $n$ el número de moles y $R = N_Ak_B = 8{,}314$ J/(mol·K) la constante de gas universal.

### Presión desde el modelo microscópico

Para un gas de $N$ partículas en un cubo de lado $L$:

$$P = \frac{1}{3}\frac{Nm\langle v^2\rangle}{V}.$$

Comparando con $PV = Nk_BT$:

$$\frac{1}{2}m\langle v^2\rangle = \frac{3}{2}k_BT.$$

La temperatura es una medida de la energía cinética promedio de traslación. La velocidad cuadrática media es:

$$v_\text{rms} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3k_BT}{m}}.$$

---

## Clase 02 — Distribución de Maxwell–Boltzmann

*Fecha: 22 de mayo de 2026*

### Distribución de velocidades

Maxwell (1859) derivó la distribución de velocidades de un gas ideal en equilibrio térmico:

$$\boxed{f(\mathbf{v}) = \left(\frac{m}{2\pi k_BT}\right)^{3/2} e^{-mv^2/(2k_BT)}.}$$

Es la gaussiana tridimensional en el espacio de velocidades. Velocidades características:

| Velocidad | Expresión |
|-----------|-----------|
| Más probable | $v_p = \sqrt{2k_BT/m}$ |
| Promedio | $\bar{v} = \sqrt{8k_BT/(\pi m)}$ |
| Cuadrática media | $v_\text{rms} = \sqrt{3k_BT/m}$ |

Relación: $v_p < \bar{v} < v_\text{rms}$.

### Distribución en módulo de la velocidad

$$f(v) = 4\pi v^2 \left(\frac{m}{2\pi k_BT}\right)^{3/2} e^{-mv^2/(2k_BT)}.$$

### Distribución de energía

$$g(\varepsilon) = \frac{2\pi}{\left(\pi k_BT\right)^{3/2}} \varepsilon^{1/2} e^{-\varepsilon/k_BT}.$$

Energía promedio: $\langle\varepsilon\rangle = \frac{3}{2}k_BT$ (equipartición).

### Calor específico a presión constante

Del teorema de equipartición: para un gas monoatómico, $U = \frac{3}{2}Nk_BT$.

$$C_V = \frac{3}{2}Nk_B, \qquad C_P = C_V + Nk_B = \frac{5}{2}Nk_B.$$

**Identidad de Mayer:** $C_P - C_V = Nk_B = nR$.

### Presión de radiación

La presión de la radiación electromagnética (electromagnética, masa cero, velocidad $c$) sobre una pared perfectamente reflectante es:

$$P_\text{rad} = \frac{u}{3},$$

donde $u$ es la densidad de energía de la radiación. Esta relación difiere de la de los gases en que el factor es $1/3$ en vez de $2/3$, porque los fotones viajan siempre a $c$ y la energía de un fotón se relaciona con su momento como $\varepsilon = pc$ (en vez de $\varepsilon = p^2/2m$ para partículas no relativistas).

---

## Clase 03 — Movimiento browniano, Fokker-Planck y transporte

*Fecha: 29 de mayo de 2026*

### Movimiento browniano

El experimento de Jean Perrin (1908) demostró definitivamente la existencia de los átomos midiendo el desplazamiento cuadrático medio de gránulos de gamboge en agua, verificando la predicción de Einstein (1905):

$$\langle x^2\rangle = 2Dt, \qquad D = \frac{k_BT}{6\pi\eta r}.$$

donde $D$ es el coeficiente de difusión, $\eta$ la viscosidad del fluido, $r$ el radio del gránulo y la segunda igualdad es la **relación de Einstein–Stokes**.

### Ecuación de Fokker-Planck

Para una partícula en un fluido viscoso sujeta a una fuerza aleatoria (ruido blanco), la densidad de probabilidad $P(x, t)$ satisface:

$$\frac{\partial P}{\partial t} = -\frac{\partial}{\partial x}(A\, P) + \frac{1}{2}\frac{\partial^2}{\partial x^2}(B\, P),$$

donde $A$ es el término de deriva (drift) y $B$ el coeficiente de difusión. En ausencia de fuerzas externas:

$$\frac{\partial P}{\partial t} = D\frac{\partial^2 P}{\partial x^2}.$$

La solución con condición inicial $P(x, 0) = \delta(x)$ es la gaussiana que se ensancha con el tiempo:

$$P(x, t) = \frac{1}{\sqrt{4\pi Dt}}\exp\left(-\frac{x^2}{4Dt}\right).$$

### Viscosidad desde la teoría cinética

La viscosidad dinámica de un gas ideal monoatómico es:

$$\eta = \frac{1}{3}\rho\bar{v}\ell,$$

donde $\rho$ es la densidad de masa, $\bar{v}$ la velocidad promedio y $\ell = 1/(\sqrt{2}\pi d^2 n)$ el libre camino medio ($d$ = diámetro de la molécula, $n$ = densidad numérica). Sustituyendo $\bar{v}$ y $\rho$:

$$\eta = \frac{m}{3\pi\sqrt{2}\,d^2}\sqrt{\frac{8k_BT}{\pi m}} \propto \sqrt{T}.$$

Nota: $\eta$ es independiente de la presión (resultado sorprendente verificado experimentalmente por Maxwell).

---

## Clase 04 — Termodinámica, Ecuación de Van der Waals y Transiciones de Fase

*Fecha: 05 de junio de 2026*

### Variables de estado y superficie de fase

En equilibrio, existe una relación funcional entre las variables macroscópicas del sistema:

$$f(P, V, T, N) = 0.$$

Fijando $N$, esta ecuación define una **superficie de fase** en el espacio $(P, V, T)$.

### Ecuación de Van der Waals

$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT,$$

donde $a$ cuantifica las interacciones atractivas y $b$ el volumen excluido por molécula.

Las isotermas de Van der Waals por debajo de la temperatura crítica $T_c$ presentan una oscilación (máximo y mínimo locales), dando lugar a la coexistencia de fases líquido–gas.

### Compresibilidad isotérmica

$$\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T.$$

- $\kappa_T > 0$: fase estable (al comprimir, la presión sube).
- $\kappa_T < 0$: fase inestable (se descarta).

### Punto crítico

$$T_c = \frac{8a}{27k_Bb}, \quad P_c = \frac{a}{27b^2}, \quad V_c = 3Nb.$$

### Regla de las áreas de Maxwell

La presión de transición de fase $P^*$ es aquella que iguala las áreas por encima y por debajo de la isoterma de Van der Waals:

$$\int_{V_1}^{V_3}[P(\text{isoterma}) - P^*]\, dV = 0.$$

### Diagrama de fase del agua

- **Punto triple:** $T = 0{,}01$ °C, $P = 611{,}7$ Pa.
- **Punto crítico:** $T = 374$ °C, $P = 221$ atm.
- **Fluido supercrítico:** por encima del punto crítico, sin frontera líquido–gas.
- **~20 formas cristalinas del hielo** (diferentes arreglos cristalinos).

### Procesos termodinámicos

| Proceso | Condición | Descripción |
|---------|-----------|-------------|
| Cuasi estático | Lento, sistema en equilibrio en todo instante | Curva continua sobre la superficie de fase |
| No cuasi estático | Rápido, estados intermedios fuera del equilibrio | No representable sobre la superficie de fase |

### Primera ley de la termodinámica

$$dU = \delta Q - P\, dV.$$

- $dU$: diferencial exacto (variable de estado).
- $\delta Q$, $\delta W = P\, dV$: diferenciales inexactos (cantidades en transferencia).

---

## Clase 05 — Segunda Ley y Entropía

*Fecha: 12 de junio de 2026*

### Segunda ley de la termodinámica

**Formulación de Clausius:** no existe un proceso cuyo único efecto sea transferir calor desde un cuerpo a temperatura menor hacia uno a temperatura mayor.

**Formulación de Kelvin:** no existe un proceso cuyo único efecto sea extraer calor de un reservorio y convertirlo completamente en trabajo.

Ambas formulaciones son lógicamente equivalentes.

### Teorema de Clausius

$$\oint \frac{\delta Q}{T} \leq 0,$$

con igualdad para procesos reversibles (cuasi estáticos).

### Definición de entropía termodinámica

La existencia de la entropía se deduce del teorema de Clausius: para procesos reversibles, $\delta Q_\text{rev}/T$ es un diferencial exacto, lo que implica la existencia de una función de estado $S$ tal que:

$$\boxed{dS = \frac{\delta Q_\text{rev}}{T}.}$$

### Relación fundamental de la termodinámica

$$dU = T\, dS - P\, dV.$$

### Desigualdad de Clausius (forma diferencial)

$$dS \geq \frac{\delta Q}{T},$$

con igualdad para procesos reversibles. Para sistemas aislados: $dS \geq 0$.

### Entropía estadística de Boltzmann

$$\boxed{S = k_B\ln\Omega,}$$

donde $\Omega$ es el número de microestados compatibles con el macroestado.

### Fórmula de Sackur–Tetrode

$$S = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].$$

**Propiedades:** extensiva; resuelve la paradoja de Gibbs; contiene $h$ (origen cuántico).

### Paradoja de Gibbs y su resolución

Mezclar dos porciones del mismo gas debería dar $\Delta S = 0$, pero la entropía termodinámica clásica predice $\Delta S = 2Nk_B\ln 2 > 0$. La resolución requiere la **indistinguibilidad cuántica** de las partículas idénticas: $\Omega$ debe dividirse por $N!$, lo que garantiza la extensividad.

### Ciclo de Carnot

$$\eta_\text{Carnot} = 1 - \frac{T_C}{T_H}.$$

Eficiencia máxima de cualquier máquina que opere entre temperaturas $T_H$ y $T_C$.

### Termodinámica de agujeros negros

$$S_\text{BH} = \frac{k_Bc^3}{4G\hbar}A, \qquad T_H = \frac{\hbar c^3}{8\pi GMk_B}.$$

Los agujeros negros son objetos termales; los agujeros negros extremos tienen $S \neq 0$ a temperatura cero, análogos a los spin glasses.

---

## Clase 06 — Mecánica estadística y derivación de Sackur–Tetrode

*Fecha: 19 de junio de 2026*

### Macroestados y microestados

| Concepto | Definición |
|----------|------------|
| Macroestado | Especificación de las variables macroscópicas observables ($U$, $V$, $N$) |
| Microestado | Especificación completa del estado de cada constituyente del sistema |
| Microestado compatible | Microestado cuyas variables macroscópicas calculadas coinciden con el macroestado |
| $\Omega$ | Número de microestados compatibles con el macroestado |

### Hipótesis de Boltzmann (equiprobabilidad)

Para un sistema aislado, todos los microestados compatibles tienen la misma probabilidad $1/\Omega$.

### Entropía de Boltzmann

$$S = k_B\ln\Omega.$$

**Consecuencia:** el equilibrio corresponde al macroestado con mayor $\Omega$ (máxima entropía), que es también el macroestado más probable.

### Derivación de la fórmula de Sackur–Tetrode

Para el gas ideal de $N$ partículas monoatómicas idénticas en volumen $V$, energía $U$:

$$\Omega = \frac{1}{N!}\cdot\frac{V^N}{h^{3N}}\cdot\frac{(2\pi mU)^{3N/2}}{\left(\frac{3N}{2}\right)!}.$$

Aplicando $S = k_B\ln\Omega$ y la aproximación de Stirling:

$$S = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].$$

### Resolución de la paradoja de Gibbs

El factor $1/N!$ garantiza la extensividad: $S(2N, 2V, T) = 2S(N, V, T)$, por lo que $\Delta S_\text{mezcla} = 0$ para gases idénticos.

### Sistema de espines (modelo paramagnético)

$N$ espines en campo $B$:
- $\Omega(N_\uparrow) = \binom{N}{N_\uparrow}$
- $U(T) = -N\mu_BB\tanh(\mu_BB/k_BT)$
- $C_B = Nk_B\left(\frac{\mu_BB}{k_BT}\right)^2\text{sech}^2\left(\frac{\mu_BB}{k_BT}\right)$ (pico de Schottky)

---

## Síntesis conceptual del módulo

### El hilo conductor

El Módulo 1 sigue un arco conceptual coherente que va desde los fenómenos macroscópicos observables hasta las estructuras microscópicas que los explican:

```
Fenómenos macroscópicos          →    Modelos microscópicos
────────────────────────────────────────────────────────────
Ley PV = NkT                     →    v_rms = √(3kT/m)
Calor específico Cv = 3Nk/2      →    Equipartición, 3 g.d.l.
Difusión ⟨x²⟩ = 2Dt             →    Ecuación de Fokker-Planck
Transiciones de fase              →    Ecuación de Van der Waals
Segunda ley (ΔS ≥ 0)             →    S = k ln Ω
```

### Las semillas de la mecánica cuántica en la física clásica

El módulo reveló cinco "grietas" en la física clásica del siglo XIX que apuntan inevitablemente a la mecánica cuántica:

1. **Paradoja de Gibbs:** requiere indistinguibilidad cuántica ($1/N!$ en $\Omega$).
2. **Constante de Planck en entropía:** la fórmula de Sackur–Tetrode contiene $h$.
3. **Catástrofe ultravioleta:** la distribución de Rayleigh–Jeans falla a alta frecuencia (tema del Módulo 2).
4. **Capacidades caloríficas:** las anomalías a baja temperatura no se pueden explicar clásicamente.
5. **Movimiento browniano:** la relación $D = k_BT/(6\pi\eta r)$ vincula el nivel macroscópico con el microscópico.

---

## Referencias generales del módulo

### Textos del curso
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.

### Textos universitarios clásicos
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). Freeman.
- Zemansky, M. W., & Dittman, R. H. (1997). *Heat and Thermodynamics* (7ª ed.). McGraw-Hill.
- Fermi, E. (1956). *Thermodynamics*. Dover.

### Artículos fundacionales
- Maxwell, J. C. (1860). *Illustrations of the dynamical theory of gases.* Phil. Mag., 19.
- Boltzmann, L. (1877). *Über die Beziehung...* Sitzungsberichte, 76.
- Einstein, A. (1905). *Über die von der molekularkinetischen...* Annalen der Physik, 17.
- Sackur, O. (1911). *Die Anwendung...* Annalen der Physik, 36.

### Recursos abiertos
- Feynman Lectures on Physics. [https://www.feynmanlectures.caltech.edu/](https://www.feynmanlectures.caltech.edu/)
- NIST Webbook. [https://webbook.nist.gov/](https://webbook.nist.gov/)
