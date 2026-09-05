# Análisis Clase 06 — Mecánica Estadística, Entropía de Boltzmann y Movimiento Browniano

**Módulo:** Termodinámica y Teoría Atómica Precuántica | **Docente:** Dr. Julio Eduardo Oliva Zapata | **Fecha:** 19 de junio de 2026

---

## 1. La Fórmula de Entropía de Boltzmann (1877)

Ludwig Boltzmann proporcionó la interpretación microscópica de la entropía: el estado macroscópico de equilibrio corresponde a aquel que posee el máximo número de microestados accesibles compatibles ($\Omega$) en el espacio de fases. 

La aditividad de la entropía macroscópica ($S_{AB} = S_A + S_B$) combinada con la multiplicatividad probabilística independiente de los microestados ($\Omega_{AB} = \Omega_A \cdot \Omega_B$) exige formalmente una dependencia logarítmica:

$$\boxed{S = k_B \ln \Omega}$$

donde $k_B \approx 1.3806 \times 10^{-23}\text{ J/K}$ es la constante universal de Boltzmann.

---

## 2. La Paradoja de Gibbs y la Celda de Sackur-Tetrode

La termodinámica clásica exige que la entropía sea una propiedad estrictamente extensiva. Sin embargo, el cálculo continuo clásico predecía un aumento ficticio de entropía al mezclar dos porciones del mismo gas ideal a igual $T$ y $P$ ($\Delta S = 2N k_B \ln 2 > 0$, Paradoja de Gibbs).

J. Willard Gibbs (1902) resolvió la contradicción postulando que las partículas materiales idénticas son **rigurosamente indistinguibles**, lo que impone dividir el volumen del espacio de fases entre $N!$. Incorporando la celda elemental de fase cuántica $h^3$ (Planck), se deduce la **ecuación de Sackur-Tetrode (1912)**:

$$\boxed{S = N k_B \left[\ln\left(\frac{V}{N}\left(\frac{4\pi m U}{3 h^2 N}\right)^{3/2}\right) + \frac{5}{2}\right]}$$

---

## 3. Colectividades Estadísticas y Función de Partición

Gibbs formuló la descripción estadística mediante ensambles:
- **Microcanónico:** Sistema aislado $(E, V, N)$ con $P_i = 1/\Omega$ y $S = k_B \ln \Omega$.
- **Canónico:** Sistema cerrado a temperatura fijada por un reservorio $(T, V, N)$. La probabilidad del microestado $i$ es $P_i = e^{-\beta E_i}/Z$, donde $\beta = 1/k_B T$ y la **función de partición** es:
  $$Z = \sum_i e^{-\beta E_i}$$
  La conexión maestra con la termodinámica se establece mediante la energía libre de Helmholtz:
  $$\boxed{F = -k_B T \ln Z}$$
  A partir de $F$, la energía interna resulta $U = -\frac{\partial \ln Z}{\partial \beta}$, la presión $P = k_B T \frac{\partial \ln Z}{\partial V}$ y la entropía $S = -\frac{\partial F}{\partial T}$.

---

## 4. Teoría de Einstein del Movimiento Browniano (1905)

Para zanjar el debate frente al antiatomismo de Mach y Ostwald, Albert Einstein formuló la teoría estadística del movimiento browniano de partículas coloidales suspendidas de radio $r$.

Equilibrando el gradiente de presión osmótica difusiva ($J = -D \frac{\partial n}{\partial x}$) con la fuerza de arrastre hidrodinámica de Stokes ($F = 6\pi\eta r v$), dedujo la célebre **relación de fluctuación-disipación de Einstein-Smoluchowski**:

$$\boxed{D = \frac{k_B T}{6\pi \eta r}}$$

El desplazamiento cuadrático medio medible en el microscopio crece linealmente con el tiempo:

$$\boxed{\langle x^2(t)\rangle = 2 D t = \frac{R T}{3\pi \eta r N_A}\, t}$$

Jean Perrin (1908) midió $\langle x^2(t)\rangle$ bajo el microscopio y calculó por primera vez de forma directa el número de Avogadro ($N_A \approx 6.0 \times 10^{23}\text{ mol}^{-1}$), forzando a la comunidad científica internacional a aceptar definitivamente la existencia física real de los átomos.

---

## 5. Conclusiones de la Clase y del Módulo

1. La entropía macroscópica de Clausius es el conteo microscópico de microestados de Boltzmann: $S = k_B \ln \Omega$.
2. La indistinguibilidad de las partículas idénticas (división por $N!$) y la celda elemental de fase $h^3$ resuelven la paradoja de Gibbs y anticipan la mecánica cuántica.
3. La función de partición canónica $Z$ unifica toda la termodinámica clásica en la energía libre $F = -k_BT\ln Z$.
4. La relación de Einstein $D = \frac{k_BT}{6\pi\eta r}$ conectó la agitación microscópica invisible con el desplazamiento browniano observable $\langle x^2\rangle \propto t$.
5. Las mediciones de Jean Perrin certificaron la existencia de los átomos, cerrando la era pre-cuántica y abriendo la puerta hacia la teoría cuántica temprana (Módulo 02).
