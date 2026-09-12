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

¿Por qué la entropía, una magnitud definida a partir del calor y la temperatura, necesita de los átomos para tener un valor absoluto y un significado físico completo?

Esta pregunta guía el presente informe. La entropía de Clausius permite calcular *cambios* de entropía con precisión, pero deja libre una constante de integración que la termodinámica macroscópica no puede fijar. Esa indeterminación no es un detalle técnico: es la señal de que el concepto exige una capa más profunda de descripción. Boltzmann la encontró en el conteo de configuraciones moleculares. Pero al aplicar ese conteo con rigor, aparece una contradicción — la paradoja de Gibbs — que solo se resuelve reconociendo una propiedad fundamental de los átomos: son indistinguibles entre sí. Y esa misma indistinguibilidad, aplicada a los cuantos de energía, fue la clave con que Planck abrió la física cuántica.

Este informe tiene tres objetivos: (1) derivar la entropía del gas ideal y del gas de Van der Waals, (2) demostrar la paradoja de Gibbs y su resolución mediante la mecánica estadística, y (3) mostrar cómo ese mismo formalismo condujo a Planck a postular la cuantización de la energía. La metodología es analítica: derivaciones desde primeros principios con apoyo en fuentes primarias.

La clase elegida es la **Clase 5** (segunda ley y entropía), complementada con contenido de la **Clase 4** (gas de Van der Waals), dado que ambas comparten el hilo conductor de la entropía como función sensible a la estructura molecular del sistema.

---

## 2. Contexto histórico

El siglo XIX comenzó creyendo que el calor era un fluido —el *calórico*— y terminó entendiendo que era energía en tránsito. Joule midió en 1843 el equivalente mecánico del calor: $1\,\text{cal} = 4.186\,\text{J}$. Carnot (1824) había demostrado antes, sin saber esto, que la eficiencia de cualquier máquina térmica está limitada por las temperaturas entre las que opera: $\eta \leq 1 - T_C/T_H$. Clausius (1850, 1865) formalizó ambas leyes, acuñó el término entropía y enunció el teorema del ciclo. Boltzmann (1877) conectó la entropía con el número de microestados moleculares. Van der Waals (1873) mostró que las moléculas tienen volumen propio e interacciones atractivas, corrigiendo la ecuación de estado ideal. Gibbs (1876–78) sistematizó la termodinámica y señaló la paradoja que hoy lleva su nombre. Planck (1900), forzado por los datos del cuerpo negro, postuló la cuantización de la energía usando precisamente la entropía de Boltzmann como herramienta.

Boltzmann murió en 1906, combatido por quienes negaban la existencia de los átomos. El experimento de Perrin en 1908 midió directamente el número de Avogadro y vindicó su obra, cerrando el debate sobre la realidad de la materia atómica.

---

## 3. Desarrollo

### 3.1 La segunda ley y la entropía de Clausius

La segunda ley establece que los procesos espontáneos tienen una dirección preferida. Clausius la capturó con el **teorema del ciclo**:

$$\oint \frac{\delta Q}{T} \leq 0,$$

con igualdad para procesos reversibles. La consecuencia directa es que $\delta Q_\text{rev}/T$ es un diferencial exacto: existe una función de estado $S$ tal que:

$$dS = \frac{\delta Q_\text{rev}}{T}.$$

Combinada con la primera ley ($dU = \delta Q - P\,dV$), produce la **relación fundamental**:

$$dU = T\,dS - P\,dV.$$

Para sistemas aislados, la segunda ley se reduce a $dS \geq 0$: la entropía nunca decrece. Esta definición operativa es poderosa, pero tiene un límite: solo fija *diferencias* de entropía. El valor absoluto queda indeterminado.

### 3.2 Entropía del gas ideal

Para el gas monoatómico ideal, el teorema de equipartición da $U = \frac{3}{2}Nk_BT$. Con $P = Nk_BT/V$, la relación fundamental produce:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + Nk_B\frac{dV}{V}.$$

Integrando:

$$S_\text{ideal}(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln V + C(N),$$

donde $C(N)$ es una constante de integración que la termodinámica macroscópica no puede determinar. Esta es la primera señal de incompletitud que la pregunta introductoria anticipaba.

> **Ejercicio:** Un mol de argón ($\gamma = 5/3$) a $T_i = 300\,\text{K}$ y $V_i = 24.6\,\text{L}$ se expande adiabáticamente de forma reversible hasta $V_f = 49.2\,\text{L}$. (a) Calcule $T_f$. (b) Calcule el trabajo realizado.
>
> *Solución:* De $dS = 0$ se obtiene $TV^{2/3} = \text{cte}$, luego $T_f = T_i(V_i/V_f)^{2/3} = 300/2^{2/3} \approx 189\,\text{K}$. El trabajo es $W = \frac{3}{2}R(T_i - T_f) \approx 1\,380\,\text{J}$, lo que equivale a la ley de Poisson $PV^{5/3} = \text{cte}$.

### 3.3 La paradoja de Gibbs

Consideremos dos recipientes idénticos: mismo gas ideal, $N$ partículas, temperatura $T$, volumen $V$. Entropía inicial (con $C = 0$):

$$S_i = 3Nk_B\ln T + 2Nk_B\ln V.$$

Retiramos la pared. El sistema final tiene $2N$ partículas en volumen $2V$ a temperatura $T$ (no hay transferencia de energía). Entropía final:

$$S_f = 3Nk_B\ln T + 2Nk_B\ln(2V).$$

La diferencia es:

$$\Delta S = 2Nk_B\ln 2 > 0.$$

Para un mol, $\Delta S \approx 11.5\,\text{J/K}$ — perfectamente medible — sin que haya ocurrido ningún proceso físico observable. Esto contradice la experiencia directa. La raíz del problema es que $S \propto Nk_B\ln V$ no es extensiva: al duplicar $N$ y $V$ manteniendo $T$ fijo, la entropía no se duplica.

### 3.4 Resolución: Sackur–Tetrode y la indistinguibilidad

La mecánica estadística de Boltzmann define $S = k_B\ln\Omega$, donde $\Omega$ es el número de microestados compatibles con el macroestado del sistema. Para un gas clásico de $N$ partículas distinguibles, ese conteo produce exactamente la entropía no extensiva que genera la paradoja.

La corrección de Gibbs es conceptualmente directa: permutar dos moléculas idénticas de la misma especie no produce un estado físicamente nuevo. Las $N!$ permutaciones posibles corresponden todas al mismo estado, por lo que el conteo debe dividirse entre $N!$. Además, el espacio de fases continuo requiere una celda mínima de tamaño $h^3$ por partícula — la constante de Planck — para que el número de estados sea finito y contable.

Aplicando $S = k_B\ln\Omega$ con la corrección de indistinguibilidad y la aproximación de Stirling ($\ln n! \approx n\ln n - n$), se obtiene la **fórmula de Sackur–Tetrode** (1911–12):

$$\boxed{S_\text{ST} = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].}$$

Esta expresión es extensiva: $S_\text{ST}(2N, 2V, T) = 2\,S_\text{ST}(N, V, T)$, pues el cociente $V/N$ permanece invariante al escalar. La paradoja desaparece: $\Delta S_\text{mezcla} = 0$ para gases idénticos.

Nótese además que $h$ es necesario para calcular el valor absoluto de la entropía: la constante de integración $C(N)$ que la termodinámica dejaba libre queda determinada por la mecánica estadística cuántica. La pregunta inicial tiene ahora una respuesta concreta.

### 3.5 Entropía del gas de Van der Waals

La ecuación de Van der Waals corrige el gas ideal incorporando el volumen excluido $b$ (volumen propio de las moléculas) y las atracciones moleculares $a$:

$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT.$$

Para calcular $dS$, se necesita la derivada de la energía interna respecto al volumen a temperatura constante. Por la relación de Maxwell derivada de la energía libre de Helmholtz:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P = \frac{aN^2}{V^2}.$$

Este término representa la energía potencial de las atracciones intermoleculares. Sustituyendo en $dS = (dU + P\,dV)/T$, los términos con $a$ se cancelan exactamente:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + \frac{Nk_B}{V - Nb}\,dV.$$

Integrando:

$$\boxed{S_\text{VdW} = \frac{3}{2}Nk_B\ln T + Nk_B\ln(V - Nb) + C'(N).}$$

**Comparación directa:**

| Cantidad | Gas ideal | Gas de Van der Waals |
|---|---|---|
| Entropía | $\sim Nk_B\ln V$ | $\sim Nk_B\ln(V - Nb)$ |
| Energía interna | $\frac{3}{2}Nk_BT$ | $\frac{3}{2}Nk_BT - \frac{aN^2}{V}$ |
| $C_V$ | $\frac{3}{2}Nk_B$ | $\frac{3}{2}Nk_B$ |

El parámetro $b$ reduce el volumen libre, disminuyendo los microestados accesibles y por tanto la entropía. El parámetro $a$ no modifica $S$ directamente, pero sí $U$: es la fuente del calor latente en la transición de fase, $\Delta S_\text{transición} = L/T^*$.

### 3.6 La entropía como puerta de entrada a la física cuántica

La fórmula de Sackur–Tetrode contiene la constante de Planck $h$: la entropía absoluta del gas no puede calcularse sin ella. Esta no es una coincidencia. Planck (1900) llegó al mismo $h$ por un camino completamente distinto, y la conexión entre ambos recorridos revela la profundidad del formalismo.

La física clásica aplica el teorema de equipartición a los modos electromagnéticos de una cavidad a temperatura $T$: cada modo recibe energía $k_BT$. Como el número de modos por unidad de volumen y de frecuencia crece sin límite con la frecuencia ($8\pi f^2/c^3$ modos), la energía total diverge — la catástrofe ultravioleta.

Planck usó precisamente la segunda derivada de la entropía $\partial^2 S/\partial U^2$ como herramienta de interpolación entre los dos límites conocidos del espectro, y fue forzado a postular que la energía de los osciladores solo puede tomar valores discretos: $E_n = nhf$. El resultado es la distribución de Planck:

$$\langle E\rangle = \frac{hf}{e^{hf/k_BT} - 1},$$

que a bajas frecuencias recupera el resultado clásico $k_BT$ y a altas frecuencias suprime la divergencia exponencialmente.

La conexión con la paradoja de Gibbs es directa: en ambos casos, la física clásica sobrecontaba los estados porque trataba como distinguibles objetos que en la naturaleza son idénticos — las moléculas del gas y los cuantos de energía. La corrección $1/N!$ en el gas anticipa la estadística de Bose-Einstein para fotones. La constante $h$ que aparece en Sackur–Tetrode es la misma que define el cuanto de energía del fotón: la entropía del siglo XIX llevaba inscrita la semilla de la física cuántica del siglo XX.

---

## 4. Conclusión

La entropía es el hilo que conecta la termodinámica macroscópica con la física microscópica. Clausius la definió como función de estado; Boltzmann la interpretó como logaritmo del número de microestados. La paradoja de Gibbs reveló que ese conteo exige la indistinguibilidad de las partículas; Sackur y Tetrode calcularon el resultado correcto, que fija la constante indeterminada de Clausius e introduce inevitablemente la constante de Planck. El gas de Van der Waals muestra que la entropía es sensible a la estructura molecular: el volumen excluido reduce el espacio de configuraciones accesibles, y las transiciones de fase son saltos discretos en ese espacio.

La respuesta a la pregunta del inicio es, por tanto, doble. Los átomos son necesarios para dar un valor absoluto a la entropía. Y al introducirlos con rigor — respetando su indistinguibilidad — aparece la misma constante $h$ con que Planck inauguró la física cuántica. La termodinámica clásica no era un edificio terminado: sus propias herramientas señalaban sus límites y anunciaban la extensión que vendría.

---

## 5. Cinco preguntas originales

**1.** La fórmula de Sackur–Tetrode predice $S \to -\infty$ cuando $T \to 0$, en aparente contradicción con la Tercera Ley ($S \to 0$ cuando $T \to 0$). ¿Qué hipótesis del modelo del gas clásico falla a temperatura muy baja, y qué tipo de corrección cuántica resuelve la discrepancia?

*Relevancia:* Cuando la longitud de onda de De Broglie $\lambda = h/\sqrt{2\pi mk_BT}$ es comparable al espaciado interparticular, la aproximación clásica colapsa. La estadística de Fermi-Dirac o Bose-Einstein reemplaza a la de Maxwell-Boltzmann y garantiza $S \to 0$ al enfriar.

**2.** En el gas de Van der Waals, el parámetro $a$ no aparece en la expresión de la entropía pero sí en la energía interna. Construya un proceso en un gas de Van der Waals con $\Delta S = 0$ y $\Delta U \neq 0$ simultáneamente, y calcule el trabajo intercambiado en ese proceso.

*Relevancia:* Una expansión adiabática reversible satisface $dS = 0$. La variación de energía es $dU = (-P + aN^2/V^2)\,dV \neq 0$, porque el trabajo realizado por el gas difiere del caso ideal en exactamente el término de interacciones.

**3.** Demuestre que la regla de las áreas de Maxwell — condición de coexistencia de fases en el gas de Van der Waals — es equivalente a exigir que la energía libre de Gibbs $G = U - TS + PV$ sea igual en las dos fases coexistentes. ¿Por qué la igualdad de $G$, y no la de $S$, es la condición correcta de equilibrio?

*Relevancia:* En equilibrio a $T$ y $P$ fijos el sistema minimiza $G$. La igualdad $G_\text{liq} = G_\text{gas}$ equivale geométricamente a la regla de Maxwell, mostrando la coherencia interna del formalismo termodinámico.

**4.** La catástrofe ultravioleta y la paradoja de Gibbs comparten una raíz estructural: en ambos casos la física clásica sobreestima el número de estados accesibles. ¿En qué sentido puede describirse la catástrofe ultravioleta como una "paradoja de Gibbs del campo electromagnético"? Señale la analogía exacta y el tipo de corrección que cada caso requiere.

*Relevancia:* El gas clásico ignora la indistinguibilidad de las moléculas (corrección: $1/N!$); el campo electromagnético clásico ignora la discreción de los cuantos de energía (corrección: estadística de Bose-Einstein para fotones). En ambos casos, la solución requiere reconocer la naturaleza cuántica de los constituyentes.

**5.** Con los datos $m_\text{Ar} = 39.95\,\text{u}$, $T = 298\,\text{K}$, $P = 101\,325\,\text{Pa}$, calcule la entropía molar del argón usando la fórmula de Sackur–Tetrode. El valor experimental, obtenido por integración de capacidades caloríficas desde 0 K, es $154.8\,\text{J/(mol·K)}$. ¿Qué conclusión se extrae del acuerdo entre ambos valores?

*Relevancia:* El acuerdo confirma que la constante de Planck $h$, determinada originalmente ajustando el espectro del cuerpo negro, es una constante universal. Es uno de los tests más directos de coherencia entre termodinámica, mecánica estadística y mecánica cuántica.

---

## 6. Referencias bibliográficas

**Artículos originales**
- Clausius, R. (1865). *Annalen der Physik*, 125, 353–400.
- Boltzmann, L. (1877). *Sitzungsberichte der Akademie der Wissenschaften*, 76, 373–435.
- Van der Waals, J. D. (1873). Tesis doctoral, Universidad de Leiden.
- Sackur, O. (1911). *Annalen der Physik*, 36, 958–980.
- Tetrode, H. (1912). *Annalen der Physik*, 38, 434–442.
- Planck, M. (1900). *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245.

**Texto del curso**
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.

**Textos universitarios**
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). Freeman.

**Recursos abiertos**
- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, caps. 40–44. feynmanlectures.caltech.edu
