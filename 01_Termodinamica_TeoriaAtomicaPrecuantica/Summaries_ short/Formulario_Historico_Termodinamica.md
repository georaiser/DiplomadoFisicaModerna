# Formulario Histórico y Cronológico: Evolución de las Leyes de la Termodinámica y Teoría Cinética

Este documento recopila matemáticamente, en orden cronológico, las fórmulas fundamentales que sentaron las bases empíricas y teóricas de la Termodinámica y la Física Estadística Pre-Cuántica. Cada entrada detalla su formulación en LaTeX, un análisis del significado físico, y el desglose de las unidades y constantes involucradas.

---

## 1. La Cuantificación de la Presión Atmosférica (1643)
**Autor:** Evangelista Torricelli
**Fórmula de Presión Hidrostática:**
$$ P = \rho \cdot g \cdot h $$

- **Análisis:** Torricelli demostró que la atmósfera ejerce un peso medible y aniquiló el dogma del *horror vacui*. La presión que equilibra la columna de mercurio ($Hg$) en el vacío se deriva de la hidrostática pura.
- **Variables y Unidades:**
  - $P$: Presión atmosférica ($\text{Pa}$ o $\text{N/m}^2$, también medida en $\text{mmHg}$ o $\text{Torr}$).
  - $\rho$: Densidad del fluido (Mercurio $\approx 13.595 \text{ kg/m}^3$).
  - $g$: Aceleración de gravedad local ($\approx 9.81 \text{ m/s}^2$).
  - $h$: Altura de la columna equilibrada (A nivel del mar $\approx 0.760 \text{ m}$).
- **Constante Resultante:** $1 \text{ atm} = 101,325 \text{ Pa} = 760 \text{ mmHg}$.

---

## 2. Ley Isotérmica de los Gases (1662)
**Autor:** Robert Boyle y Edme Mariotte
**Fórmula:**
$$ P \cdot V = k_1 $$

- **Análisis:** Establece que a temperatura constante ($T = cte$), la presión de un gas cerrado es inversamente proporcional a su volumen. Fue la primera ley estadística y empírica del estado de la materia.
- **Variables y Unidades:**
  - $P$: Presión absoluta del gas ($\text{Pa}$).
  - $V$: Volumen ocupado por el gas ($\text{m}^3$).
  - $k_1$: Constante empírica dependiente de la temperatura y masa de gas.

---

## 3. Ley Isobárica y la Expansión Térmica (1802)
**Autor:** Jacques Charles y Joseph Louis Gay-Lussac
**Fórmula:**
$$ \frac{V}{T} = k_2 \quad \text{o} \quad V(T) = V_0 [1 + \alpha (T - T_0)] $$

- **Análisis:** A presión constante ($P = cte$), los gases se expanden de forma directamente proporcional al aumento de temperatura. Esto postuló la existencia ineludible de un **Cero Absoluto** térmico (donde $V \rightarrow 0$).
- **Variables y Unidades:**
  - $V$: Volumen del gas ($\text{m}^3$).
  - $T$: Temperatura termodinámica absoluta (Kelvin, $\text{K}$).
  - $k_2, \alpha$: Constantes de proporcionalidad térmica.

---

## 4. Ley de los Volúmenes Equivalentes (1811)
**Autor:** Amadeo Avogadro
**Fórmula:**
$$ V \propto N \implies \frac{V}{N} = k_3 $$

- **Análisis:** Volúmenes iguales de gases a igual presión y temperatura poseen el mismo número de moléculas, sentando la distinción entre átomo y molécula (ej. gases diatómicos $H_2$).

---

## 5. Ecuación de Estado de los Gases Ideales (1834)
**Autor:** Émile Clapeyron (unificando a Boyle, Charles y Avogadro)
**Fórmula Macroscópica y Microscópica:**
$$ P V = n R T \quad \text{y} \quad P V = N k_B T $$

- **Análisis:** Consolida las tres leyes empíricas anteriores en una **Superficie de Fase Bidimensional**. Mapea cualquier estado de equilibrio térmico de un fluido no interactuante (ideal).
- **Variables, Constantes y Unidades:**
  - $n$: Número de moles ($\text{mol}$).
  - $N$: Número absoluto discreto de moléculas.
  - $R$: **Constante Universal de los Gases** $\approx 8.31446 \text{ J / (mol}\cdot\text{K)}$.
  - $k_B$: **Constante de Boltzmann** $\approx 1.380649 \times 10^{-23} \text{ J / K}$.
  - Relación fundamental: $R = N_A \cdot k_B$, donde $N_A$ es el **Número de Avogadro** ($6.022 \times 10^{23} \text{ mol}^{-1}$).

---

## 6. La Primera Ley de la Termodinámica (1850)
**Autores:** Rudolf Clausius / William Thomson (Lord Kelvin) / James P. Joule
**Fórmula Diferencial:**
$$ dU = {\bar{d}}Q - {\bar{d}}W + \mu dN $$

- **Análisis:** Dictamina la conservación de la energía. Rompe con el paradigma del "Calórico". Establece a la Energía Interna ($U$) como función de estado exacta, mientras el calor ($Q$) y el trabajo ($W$) son variables de trayectoria o tránsito.
- **Variables y Unidades:**
  - $dU$: Diferencial de Energía Interna ($\text{Joules, J}$).
  - ${\bar{d}}Q$: Calor transferido al sistema ($\text{J}$).
  - ${\bar{d}}W$: Trabajo mecánico realizado por el gas (típicamente $P dV$) ($\text{J}$).
  - $\mu$: Potencial químico asociado a inyectar moléculas ($\text{J/partícula}$).

---

## 7. Ecuación Cinética de la Presión (1857)
**Autor:** Rudolf Clausius
**Fórmula:**
$$ P = \frac{1}{3} n_v m \langle v^2 \rangle $$

- **Análisis:** El primer gran puente entre lo mecánico discreto y lo macroscópico. Derivada analizando el impacto (transferencia de momento $\Delta p = 2mv$) de esferas duras contra una pared geométrica usando isotropía en 3D.
- **Variables y Unidades:**
  - $n_v$: Densidad molecular numérica $N/V$ ($\text{m}^{-3}$).
  - $m$: Masa de una sola partícula ($\text{kg}$).
  - $\langle v^2 \rangle$: Velocidad cuadrática media de la población ($\text{m}^2/\text{s}^2$).

---

## 8. Teorema de Equipartición de la Energía (1859)
**Autor:** James Clerk Maxwell / Rudolf Clausius
**Fórmula:**
$$ \frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T $$

- **Análisis:** Resultado de igualar el gas ideal fenomenológico ($P=nkT$) con el mecánico de Clausius. Demuestra que **la temperatura es la manifestación de la energía cinética de agitación**. Cada grado de libertad (3 de traslación espacial) porta $\frac{1}{2}k_B T$ julios térmicos.

---

## 9. Distribución de Rapideces Estocásticas (1860)
**Autor:** James Clerk Maxwell (luego Boltzmann)
**Fórmula:**
$$ P(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2k_B T}\right) $$

- **Análisis:** Función de densidad de probabilidad gaussiana y continua para sistemas termalizados. Derivada exigiendo isotropía esférica e independencia de eventos ortogonales. De aquí nacen las velocidades características: $v_p$ (moda), $\langle v \rangle$ (media), y $v_{rms}$ (cuadrática media).

---

## 10. Ecuación Cúbica de Estado de los Gases Reales (1873)
**Autor:** Johannes Diderik van der Waals
**Fórmula:**
$$ \left( P + \frac{a}{v^2} \right) (v - b) = R T $$

- **Análisis:** Corrección heurística fenomenológica del gas ideal a altas presiones. Permite modelar geométricamente la transición de fase hacia los líquidos y el Punto Crítico. Introduce oscilaciones teóricas e inestabilidades (compresibilidad isotérmica negativa, $\kappa_T < 0$) resueltas por Maxwell.
- **Variables:**
  - $v = V/n$: Volumen molar ($\text{m}^3/\text{mol}$).
  - $a$: Parámetro de fuerza de cohesión/atracción de Van der Waals ($\text{Pa}\cdot\text{m}^6/\text{mol}^2$).
  - $b$: Covolumen o volumen atómico impenetrable excluido ($\text{m}^3/\text{mol}$).

---

## 11. Ecuación de Advección-Difusión Estocástica (Fokker-Planck) (1905)
**Autores:** Albert Einstein y Marian Smoluchowski
**Fórmula:**
$$ \frac{\partial P}{\partial t} = -\mu \frac{\partial P}{\partial x} + D \frac{\partial^2 P}{\partial x^2} $$

- **Análisis:** Derivada de expansiones de Taylor de una caminata aleatoria discreta browniana. Prueba matemática de que a nivel atómico rige el azar. Sin arrastre ($\mu=0$), la varianza espacial escala paramétricamente lineal con el tiempo: $\langle x^2 \rangle = 2Dt$.

---

## 12. Relación Fluctuación-Disipación (Medición del $N_A$) (1905)
**Autor:** Albert Einstein
**Fórmula:**
$$ D = \frac{k_B T}{6\pi \eta r} = \frac{R T}{6\pi \eta r N_A} \implies N_A = \frac{R T}{6\pi \eta r D} $$

- **Análisis:** El golpe mortal al anti-atomismo empírico. Einstein igualó el coeficiente estocástico $D$ al arrastre macroscópico continuo de la fuerza de Stokes ($F = 6\pi\eta r v$). Midiendo el zig-zag bajo microscopio ($D$) y la velocidad terminal ($v$), Jean Perrin determinó experimentalmente el Número de Avogadro ($N_A$), probando indiscutiblemente la realidad física del átomo.
- **Variables adicionales:**
  - $D$: Coeficiente de difusión macroscópico ($\text{m}^2/\text{s}$).
  - $\eta$: Viscosidad dinámica del fluido ($\text{Pa}\cdot\text{s}$ o $\text{kg}/(\text{m}\cdot\text{s})$).
  - $r$: Radio empírico estricto macroscópico de la partícula esférica ($\text{m}$).
