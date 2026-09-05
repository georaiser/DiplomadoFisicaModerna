# La entropía en gases ideales y reales: de Clausius a Planck

**Informe Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica**
**Diplomado en Física Moderna: Termodinámica, Mecánica Cuántica y Relatividad**
Docente: Prof. Julio Eduardo Oliva Zapata
Estudiante: [Nombre]
Fecha de entrega: 25 de septiembre de 2026

---

## 1. Contexto histórico

El siglo XIX produjo dos avances que parecían independientes y resultaron ser el mismo problema visto desde ángulos distintos. Por un lado, Clausius (1850) formalizó la segunda ley de la termodinámica y creó el concepto de entropía como variable de estado. Por otro, Van der Waals (1873) mostró que los gases reales se desvían del comportamiento ideal de formas sistemáticas que revelan la estructura molecular de la materia.

La conexión entre ambos desarrollos no era obvia en su época: la ecuación de Van der Waals era una corrección empírica al gas ideal; la entropía de Clausius era una magnitud puramente macroscópica definida mediante calor y temperatura. Fue Ludwig Boltzmann quien las unificó al demostrar, entre 1872 y 1877, que la entropía tiene un significado microscópico preciso: mide el número de configuraciones moleculares compatibles con un estado macroscópico dado. Esta síntesis —la mecánica estadística— no solo explicó la termodinámica clásica sino que contenía, sin que nadie lo viera en ese momento, las semillas de la física cuántica.

El propósito de este informe es recorrer ese arco: cómo se define y calcula la entropía en el gas ideal, cómo se modifica al pasar a un gas real (Van der Waals), y qué nos dice esa comparación sobre los límites de la física clásica y la necesidad de la cuántica.

---

## 2. La entropía termodinámica: definición y propiedades

La segunda ley establece que no todo proceso compatible con la conservación de energía ocurre en la naturaleza. Clausius capturó esta asimetría mediante el **teorema del ciclo**:

$$\oint \frac{\delta Q}{T} \leq 0,$$

con igualdad para procesos reversibles. La consecuencia directa es que la cantidad $\delta Q_\text{rev}/T$ es un diferencial exacto, lo que garantiza la existencia de una función de estado $S$ tal que:

$$dS = \frac{\delta Q_\text{rev}}{T}.$$

Esta es la entropía termodinámica. Combinada con la primera ley ($dU = \delta Q - P\,dV$) produce la relación fundamental:

$$dU = T\,dS - P\,dV,$$

que implica $T = (\partial U/\partial S)_V$ y $P = -(\partial U/\partial V)_S$. Para un sistema aislado, la segunda ley se reduce a $dS \geq 0$: la entropía no decrece.

### 2.1 Entropía del gas ideal

Calculamos $S(T, V, N)$ integrando $dS$ a lo largo de un camino reversible. Para el gas monoatómico ideal, la capacidad calorífica a volumen constante es $C_V = \frac{3}{2}Nk_B$ (tres grados de libertad de traslación, por equipartición). Entonces:

$$dS = \frac{dU + P\,dV}{T} = \frac{C_V\,dT}{T} + \frac{Nk_B}{V}\,dV.$$

Integrando entre un estado de referencia $(T_0, V_0)$ y el estado $(T, V)$:

$$S(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln V + C(N),$$

donde $C(N)$ es una constante de integración que la termodinámica no puede determinar. Esta indeterminación es el primer síntoma de que el marco es incompleto.

---

## 3. La paradoja de Gibbs y su resolución

Consideremos dos recipientes idénticos, cada uno con $N$ moléculas del mismo gas ideal a temperatura $T$, volumen $V$ y presión $P$. Calculamos la entropía inicial:

$$S_i = 2\left(\frac{3}{2}Nk_B\ln T + Nk_B\ln V\right).$$

Retiramos la pared que los separa. El sistema final tiene $2N$ partículas, volumen $2V$ y temperatura $T$ (no hay transferencia neta de energía porque ambos estaban en equilibrio):

$$S_f = \frac{3}{2}(2N)k_B\ln T + (2N)k_B\ln(2V).$$

La diferencia es:

$$\Delta S = S_f - S_i = 2Nk_B\ln 2 > 0.$$

Esta es la **paradoja de Gibbs**: se predice un aumento de entropía cuando el experimento no produce ningún efecto físico observable. La causa es que la expresión termodinámica $S \propto Nk_B\ln V$ no es extensiva: al escalar $N \to 2N$ y $V \to 2V$ simultáneamente, la entropía no se duplica.

La resolución requiere física microscópica. Boltzmann definió:

$$S = k_B\ln\Omega,$$

donde $\Omega$ es el número de microestados del sistema. Para el gas ideal de $N$ partículas idénticas, el conteo correcto exige dividir por $N!$ —el número de permutaciones de partículas que no generan estados físicamente distintos porque las partículas son indistinguibles:

$$\Omega_\text{correcto} = \frac{1}{N!}\cdot\frac{V^N}{h^{3N}}\cdot\frac{(2\pi mU)^{3N/2}}{(3N/2)!}.$$

Aplicando $S = k_B\ln\Omega$ y la aproximación de Stirling conduce a la **fórmula de Sackur–Tetrode** (1911–12):

$$S = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].$$

Esta expresión es extensiva: $S(2N, 2V, T) = 2S(N, V, T)$, y por tanto $\Delta S_\text{mezcla} = 0$ para gases idénticos. La paradoja desaparece. Nótese que la constante de Planck $h$ aparece de manera necesaria: la entropía absoluta del gas ideal no puede calcularse sin mecánica cuántica.

---

## 4. La entropía del gas de Van der Waals

El gas ideal supone moléculas puntuales sin interacciones. Van der Waals corrigió ambas hipótesis:

$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT,$$

donde $b$ es el volumen excluido por molécula y $a$ cuantifica las atracciones intermoleculares. Para calcular la entropía de este gas usamos la misma estrategia que en la sección anterior, integrando $dS = (dU + P\,dV)/T$.

Primero necesitamos $(\partial U/\partial V)_T$ para el gas de Van der Waals. Por la relación de Maxwell derivada de $dF = -S\,dT - P\,dV$:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P.$$

De la ecuación de Van der Waals, $P = Nk_BT/(V-Nb) - aN^2/V^2$, se obtiene $(\partial P/\partial T)_V = Nk_B/(V-Nb)$. Entonces:

$$\left(\frac{\partial U}{\partial V}\right)_T = \frac{Nk_BT}{V-Nb} - P = \frac{aN^2}{V^2}.$$

Este término, ausente en el gas ideal, representa la energía potencial de las atracciones: al expandir el gas a volumen constante de temperatura, se realiza trabajo contra las fuerzas atractivas. Integrando:

$$U_\text{VdW}(T, V) = \frac{3}{2}Nk_BT - \frac{aN^2}{V} + U_0.$$

Ahora calculamos $dS$:

$$dS = \frac{C_V\,dT}{T} + \left(\frac{\partial P}{\partial T}\right)_V dV = \frac{3}{2}Nk_B\frac{dT}{T} + \frac{Nk_B}{V - Nb}\,dV.$$

Integrando:

$$\boxed{S_\text{VdW}(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln(V - Nb) + C'(N).}$$

**Comparación directa con el gas ideal:**

| Cantidad | Gas ideal | Gas de Van der Waals |
|----------|-----------|----------------------|
| Entropía $S$ | $\sim Nk_B\ln V$ | $\sim Nk_B\ln(V - Nb)$ |
| Energía interna $U$ | $\frac{3}{2}Nk_BT$ | $\frac{3}{2}Nk_BT - \frac{aN^2}{V}$ |
| Capacidad calorífica $C_V$ | $\frac{3}{2}Nk_B$ | $\frac{3}{2}Nk_B$ (igual) |

El parámetro $b$ reduce el volumen accesible de $V$ a $V - Nb$: las moléculas con volumen propio tienen menos espacio para moverse, lo que reduce la entropía respecto al gas ideal a igual temperatura y volumen. El parámetro $a$, en cambio, no modifica $S$ directamente (no aparece en la expresión), pero sí modifica $U$ y por tanto afecta la relación entre calor y trabajo en los procesos. Esto tiene consecuencias medibles en la temperatura de inversión del efecto Joule–Thomson.

### 4.1 Entropía en la transición de fase

Por debajo de la temperatura crítica $T_c = 8a/(27k_Bb)$, las isotermas de Van der Waals presentan una región inestable ($\partial P/\partial V > 0$, compresibilidad negativa) que la naturaleza elimina mediante la **regla de las áreas de Maxwell**: la presión de coexistencia líquido–gas $P^*$ es aquella que iguala las áreas:

$$\int_{V_\text{liq}}^{V_\text{gas}}[P(V) - P^*]\,dV = 0.$$

En la transición de fase, el sistema absorbe calor latente $L$ a temperatura $T^*$ constante. El cambio de entropía en la transición es:

$$\Delta S_\text{transición} = \frac{L}{T^*} > 0.$$

El sistema pasa a un estado de mayor desorden (gas) con mayor entropía. Este es el segundo principio aplicado a las transiciones de fase: la evaporación aumenta la entropía del sistema, aunque la temperatura no varíe.

---

## 5. Conexión con el Módulo 2: la entropía abre la puerta cuántica

La ecuación de Sackur–Tetrode contiene la constante de Planck $h$. Esto no es un accidente: indica que la termodinámica clásica necesita la mecánica cuántica para estar completamente definida. Esta necesidad se manifestó de forma dramática en 1900 a través del problema del **cuerpo negro**.

La física clásica aplica el teorema de equipartición a los modos electromagnéticos de una cavidad: cada modo recibe energía $k_BT$. Como la densidad de modos crece como $f^2$ (resultado puramente clásico), la energía total diverge:

$$\int_0^\infty \frac{8\pi f^2}{c^3}\cdot k_BT\,df \to \infty.$$

Esta es la catástrofe ultravioleta. Planck la resolvió en 1900 usando precisamente la entropía de Boltzmann $S = k_B\ln\Omega$: interpoló la segunda derivada $\partial^2 S/\partial U^2$ entre los dos límites conocidos y fue forzado a postular que la energía de los osciladores está cuantizada en múltiplos de $hf$. El resultado es la energía promedio:

$$\langle E\rangle = \frac{hf}{e^{hf/k_BT} - 1},$$

que reemplaza al $k_BT$ clásico. A bajas frecuencias ($hf \ll k_BT$) recupera el resultado clásico; a altas frecuencias suprime exponencialmente la contribución de los modos, eliminando la divergencia.

El hilo conductor es claro: la entropía de Boltzmann —introducida para dar sentido microscópico a la entropía de Clausius— fue la herramienta con que Planck construyó la física cuántica. La constante $h$ que aparece en la fórmula de Sackur–Tetrode es la misma que define el cuanto de energía del fotón.

---

## 6. Conclusión

La entropía recorre un camino que va de lo macroscópico a lo microscópico y de lo clásico a lo cuántico. Clausius la definió como $dS = \delta Q_\text{rev}/T$, capturando la irreversibilidad de los procesos naturales. Boltzmann la reinterpretó como $S = k_B\ln\Omega$, conectando el comportamiento macroscópico con el número de configuraciones moleculares. La aplicación de esta idea al gas ideal corrige la paradoja de Gibbs e introduce, de manera necesaria, la constante de Planck.

El gas de Van der Waals muestra que el volumen excluido reduce la entropía accesible: las moléculas reales tienen menos microestados disponibles que las ideales al mismo estado macroscópico. Lejos de ser una mera corrección técnica, esto revela que la entropía es sensible a la estructura microscópica de la materia.

Finalmente, la misma entropía de Boltzmann fue la herramienta que Planck utilizó para resolver la catástrofe ultravioleta y postular la cuantización de la energía. La termodinámica del siglo XIX no era un edificio terminado: era el prólogo de la física moderna.

---

## 5 preguntas originales

**1.** La fórmula de Sackur–Tetrode predice $S \to -\infty$ cuando $T \to 0$. ¿Contradice esto la tercera ley de la termodinámica (que establece $S \to 0$ cuando $T \to 0$)? ¿Qué hipótesis del modelo falla a temperatura muy baja?

**2.** En el gas de Van der Waals, el parámetro $a$ no aparece en la expresión de la entropía $S_\text{VdW}$, pero sí en la energía interna $U_\text{VdW}$. ¿Puede un proceso en un gas de Van der Waals tener $\Delta S = 0$ y $\Delta U \neq 0$? Construya un ejemplo concreto.

**3.** La regla de las áreas de Maxwell determina la presión de coexistencia $P^*$ mediante una condición de igual área. Demuestre que esta condición es equivalente a exigir que la energía libre de Gibbs $G = U - TS + PV$ sea igual para las dos fases coexistentes.

**4.** La ley de Rayleigh-Jeans y el gas ideal comparten la misma raíz: el teorema de equipartición aplicado a un sistema con muchos grados de libertad. ¿En qué sentido puede decirse que la catástrofe ultravioleta es la "paradoja de Gibbs del campo electromagnético"? Señale las analogías y diferencias estructurales.

**5.** Planck ajustó el valor de $h$ a los datos experimentales del cuerpo negro en 1900. Con esa misma constante, la fórmula de Sackur–Tetrode predice la entropía absoluta del argón a 300 K y 1 atm. ¿Es posible verificar experimentalmente ese valor de entropía? ¿Qué experimento o medición lo permite?

---

## Referencias bibliográficas

**Artículos originales**
- Clausius, R. (1865). Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie. *Annalen der Physik*, 125, 353–400.
- Van der Waals, J. D. (1873). *Over de Continuïteit van den Gas- en Vloeistoftoestand* (tesis doctoral). Universidad de Leiden.
- Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung. *Sitzungsberichte der Akademie der Wissenschaften*, 76, 373–435.
- Sackur, O. (1911). Die Anwendung der kinetischen Theorie der Gase auf chemische Probleme. *Annalen der Physik*, 36, 958–980.
- Planck, M. (1900). Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum. *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245.

**Texto del curso**
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 3–4.

**Textos universitarios**
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley. Caps. 5–7.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 9–10.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). Freeman. Cap. 3.

**Recursos abiertos**
- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, caps. 40 y 44. [feynmanlectures.caltech.edu](https://www.feynmanlectures.caltech.edu)
