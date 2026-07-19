# La entropía en gases ideales y reales: de Clausius a Planck

**Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica**
**Diplomado en Física Moderna: Termodinámica, Mecánica Cuántica y Relatividad**
Docente: Prof. Julio Eduardo Oliva Zapata | Estudiante: [Nombre] | 25 septiembre 2026

---

## Resumen

Este trabajo analiza cómo se define, calcula y modifica el concepto de entropía al pasar de un gas ideal a un gas real. Se parte de la definición termodinámica de Clausius ($dS = \delta Q_\text{rev}/T$), se calcula la entropía del gas ideal y se muestra que la expresión obtenida conduce a la paradoja de Gibbs. La resolución de esa paradoja exige la mecánica estadística de Boltzmann ($S = k_B\ln\Omega$) y la indistinguibilidad cuántica de las partículas, dando lugar a la fórmula de Sackur–Tetrode. Se compara este resultado con la entropía del gas de Van der Waals, que incorpora el volumen excluido y las interacciones moleculares. Finalmente, se muestra que la misma entropía de Boltzmann fue la herramienta con que Planck derivó la cuantización de la energía en 1900, conectando el Módulo 1 con el Módulo 2 del diplomado.

**Palabras clave:** entropía, segunda ley, gas ideal, Van der Waals, paradoja de Gibbs, Sackur–Tetrode, Planck.

---

## 1. Introducción

La entropía es el concepto termodinámico más profundo y, durante más de un siglo, el menos comprendido. Clausius la creó en 1865 para capturar matemáticamente algo que era evidente pero difícil de formular: los procesos naturales tienen una dirección preferida. Boltzmann le dio un significado microscópico en 1877. Gibbs reveló una inconsistencia fundamental en su aplicación al gas ideal. Sackur y Tetrode la corrigieron en 1911–12 introduciendo, sin saberlo, la constante de Planck. Y Planck, en 1900, la usó como herramienta para resolver el problema del cuerpo negro y postular la cuantización de la energía.

Este informe tiene tres objetivos: (1) derivar la entropía del gas ideal y la del gas de Van der Waals, (2) demostrar la paradoja de Gibbs y su resolución mediante la mecánica estadística, y (3) mostrar cómo ese mismo formalismo condujo a Planck a la física cuántica. La metodología es analítica: derivaciones desde primeros principios con apoyo en fuentes primarias.

La clase elegida es la Clase 5 (segunda ley y entropía), complementada con contenido de la Clase 4 (gas de Van der Waals) dado que ambas comparten el hilo conductor de la entropía.

---

## 2. Contexto histórico

El siglo XIX comenzó creyendo que el calor era un fluido —el *calórico*— y terminó entendiendo que era energía en tránsito. Joule midió en 1843 el equivalente mecánico del calor: $1\,\text{cal} = 4.186\,\text{J}$. Carnot (1824) había demostrado antes, sin saber esto, que la eficiencia de cualquier máquina térmica está limitada por las temperaturas entre las que opera: $\eta \leq 1 - T_C/T_H$. Clausius (1850, 1865) formalizó ambas leyes, acuñó el término entropía y enunció el teorema del ciclo. Kelvin formuló una versión equivalente de la segunda ley. Boltzmann (1877) conectó la entropía con el número de microestados moleculares. Van der Waals (1873) mostró que las moléculas tienen volumen propio e interacciones, corrigiendo la ecuación de estado ideal. Gibbs (1876–78) sistematizó la termodinámica y señaló la paradoja que hoy lleva su nombre.

Boltzmann murió en 1906, combatido por quienes negaban la existencia de los átomos. El experimento de Perrin en 1908 midió directamente el número de Avogadro y vindicó su obra.

---

## 3. Desarrollo

### 3.1 La segunda ley y la entropía de Clausius

La segunda ley establece que los procesos espontáneos tienen dirección. Clausius la capturó con el **teorema del ciclo**:

$$\oint \frac{\delta Q}{T} \leq 0$$

con igualdad para procesos reversibles. La consecuencia directa es que $\delta Q_\text{rev}/T$ es un diferencial exacto: existe una función de estado $S$ tal que:

$$dS = \frac{\delta Q_\text{rev}}{T}.$$

Combinada con la primera ley ($dU = \delta Q - P\,dV$), produce la **relación fundamental**:

$$dU = T\,dS - P\,dV.$$

Para sistemas aislados, la segunda ley se reduce a $dS \geq 0$: la entropía nunca decrece.

### 3.2 Entropía del gas ideal

Para el gas monoatómico ideal, el teorema de equipartición da $U = \frac{3}{2}Nk_BT$, de modo que $dU = \frac{3}{2}Nk_B\,dT$. Con $P = Nk_BT/V$:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + Nk_B\frac{dV}{V}.$$

Integrando:

$$S_\text{ideal}(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln V + C(N),$$

donde $C(N)$ es una constante de integración que la termodinámica no puede determinar.

**Ejercicio:** Verificar que para un proceso adiabático reversible ($dS = 0$) esta expresión conduce a $TV^{2/3} = \text{cte}$ y, usando $PV = Nk_BT$, a la ley de Poisson $PV^{5/3} = \text{cte}$.

### 3.3 La paradoja de Gibbs

Consideremos dos recipientes idénticos: mismo gas ideal, $N$ partículas, temperatura $T$, volumen $V$. Entropía inicial:

$$S_i = 3Nk_B\ln T + 2Nk_B\ln V.$$

Retiramos la pared. El sistema final tiene $2N$ partículas, volumen $2V$, temperatura $T$ (no hubo transferencia de energía). Entropía final:

$$S_f = 3Nk_B\ln T + 2Nk_B\ln(2V).$$

La diferencia es:

$$\Delta S = 2Nk_B\ln 2 > 0.$$

Esto contradice la experiencia: no ocurrió nada físico observable. La raíz del problema es que $S \propto Nk_B\ln V$ no es extensiva.

### 3.4 Resolución: Sackur–Tetrode y la indistinguibilidad

La mecánica estadística define $S = k_B\ln\Omega$. Para $N$ partículas idénticas en volumen $V$ y energía $U$, el conteo correcto de microestados divide por $N!$ —el número de permutaciones de partículas que no generan estados físicamente distintos:

$$\Omega = \frac{1}{N!}\cdot\frac{V^N}{h^{3N}}\cdot\frac{(2\pi mU)^{3N/2}}{(3N/2)!}.$$

Aplicando $S = k_B\ln\Omega$ y la aproximación de Stirling ($\ln n! \approx n\ln n - n$):

$$\boxed{S_\text{ST} = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].}$$

Esta es la **fórmula de Sackur–Tetrode**. Es extensiva: $S(2N, 2V, T) = 2S(N, V, T)$, por lo que $\Delta S_\text{mezcla} = 0$. La paradoja desaparece. Nótese que la constante de Planck $h$ es necesaria: la entropía absoluta del gas ideal no puede calcularse sin mecánica cuántica.

### 3.5 Entropía del gas de Van der Waals

La ecuación de Van der Waals corrige el gas ideal incorporando el volumen excluido $b$ y las atracciones moleculares $a$:

$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT.$$

Para calcular $dS$, se necesita $(\partial U/\partial V)_T$. Por la relación de Maxwell del potencial de Helmholtz:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P = \frac{aN^2}{V^2}.$$

Este término representa la energía potencial de las atracciones: al expandir, las moléculas se alejan y el sistema gana energía potencial. Calculando $dS$:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + \frac{Nk_B}{V - Nb}\,dV.$$

Los términos con $a$ se cancelan exactamente. Integrando:

$$\boxed{S_\text{VdW} = \frac{3}{2}Nk_B\ln T + Nk_B\ln(V - Nb) + C'(N).}$$

**Comparación directa:**

| Cantidad | Gas ideal | Gas de Van der Waals |
|----------|-----------|----------------------|
| Entropía | $\sim Nk_B\ln V$ | $\sim Nk_B\ln(V-Nb)$ |
| Energía interna | $\frac{3}{2}Nk_BT$ | $\frac{3}{2}Nk_BT - \frac{aN^2}{V}$ |
| $C_V$ | $\frac{3}{2}Nk_B$ | $\frac{3}{2}Nk_B$ |

El parámetro $b$ reduce el volumen libre, disminuyendo la entropía accesible. El parámetro $a$ no modifica $S$ directamente, pero sí $U$: es la fuente del calor latente en la transición de fase, $\Delta S_\text{transición} = L/T^*$.

### 3.6 Conexión con el Módulo 2: la entropía abre la puerta cuántica

En 1900, Planck usó precisamente la entropía de Boltzmann como herramienta para resolver el problema del cuerpo negro. La física clásica aplica equipartición a los modos electromagnéticos de una cavidad: cada modo recibe $k_BT$. Como hay $8\pi f^2/c^3$ modos por unidad de volumen y frecuencia, la energía total diverge —la catástrofe ultravioleta.

Planck interpoló la segunda derivada $\partial^2 S/\partial U^2$ entre los dos límites conocidos del espectro y fue forzado a postular que la energía de los osciladores está cuantizada: $E_n = nhf$. El resultado es:

$$\langle E\rangle = \frac{hf}{e^{hf/k_BT}-1},$$

que a bajas frecuencias recupera $k_BT$ (resultado clásico) y a altas frecuencias suprime la divergencia exponencialmente. La constante $h$ que aparece en la fórmula de Sackur–Tetrode es la misma que define el cuanto de energía del fotón: la termodinámica del siglo XIX engendró la física cuántica del siglo XX.

---

## 4. Conclusión

La entropía es el hilo que conecta la termodinámica macroscópica con la física microscópica. Clausius la definió como variable de estado; Boltzmann la interpretó como logaritmo del número de microestados; la paradoja de Gibbs reveló que ese conteo exige la indistinguibilidad cuántica de las partículas; Sackur y Tetrode calcularon el resultado correcto, que contiene la constante de Planck. El gas de Van der Waals muestra que la entropía es sensible a la estructura molecular: el volumen excluido reduce el espacio de microestados, y las transiciones de fase son saltos discretos en ese espacio.

El mensaje más profundo del módulo es que la física clásica no era un edificio terminado: sus propias herramientas —especialmente la entropía— señalaban sus límites. Quedan abiertas preguntas fundamentales: ¿cómo generalizar la fórmula de Sackur–Tetrode a gases cuánticos a bajas temperaturas? ¿Cómo se comporta la entropía en la región crítica del gas de Van der Waals, donde las fluctuaciones divergen? Estas preguntas son el punto de partida natural del Módulo 2.

---

## 5. Cinco preguntas originales

**1.** La fórmula de Sackur–Tetrode predice $S \to -\infty$ cuando $T \to 0$, en aparente contradicción con la tercera ley de la termodinámica ($S \to 0$ cuando $T \to 0$). ¿Qué hipótesis del modelo falla a temperatura muy baja y qué corrección cuántica resuelve la discrepancia?

**2.** En el gas de Van der Waals, el parámetro $a$ no aparece en la expresión de la entropía pero sí en la energía interna. Construya un proceso en un gas de Van der Waals con $\Delta S = 0$ y $\Delta U \neq 0$ simultáneamente. ¿Qué trabajo se realiza en ese proceso?

**3.** Demuestre que la regla de las áreas de Maxwell (condición de coexistencia de fases) es equivalente a exigir que la energía libre de Gibbs $G = U - TS + PV$ sea igual en las dos fases coexistentes.

**4.** La ley de Rayleigh-Jeans y el gas ideal comparten la misma raíz: la equipartición aplicada a un sistema con muchos grados de libertad. ¿En qué sentido es la catástrofe ultravioleta una "paradoja de Gibbs del campo electromagnético"? Señale la analogía estructural y el tipo de corrección que cada una requiere.

**5.** Con los datos $m_\text{Ar} = 39.95\,\text{u}$, $T = 298\,\text{K}$, $P = 101\,325\,\text{Pa}$, calcule la entropía molar del argón usando la fórmula de Sackur–Tetrode. El valor experimental es $154.8\,\text{J/(mol·K)}$. ¿Qué conclusión se extrae del acuerdo o desacuerdo entre ambos valores?

---

## 6. Referencias bibliográficas

**Artículos originales**
- Clausius, R. (1865). Annalen der Physik, 125, 353–400.
- Boltzmann, L. (1877). Sitzungsberichte der Akademie der Wissenschaften, 76, 373–435.
- Van der Waals, J. D. (1873). Tesis doctoral, Universidad de Leiden.
- Sackur, O. (1911). Annalen der Physik, 36, 958–980.
- Tetrode, H. (1912). Annalen der Physik, 38, 434–442.
- Planck, M. (1900). Verhandlungen der Deutschen Physikalischen Gesellschaft, 2, 237–245.

**Texto del curso**
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.

**Textos universitarios**
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). Freeman.

**Recursos abiertos**
- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, caps. 40–44. feynmanlectures.caltech.edu
