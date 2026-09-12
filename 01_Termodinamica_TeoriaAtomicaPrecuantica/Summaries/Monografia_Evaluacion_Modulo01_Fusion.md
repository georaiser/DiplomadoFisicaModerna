# La entropía y la realidad del átomo: de Clausius a Planck

**Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica**
**Diplomado en Física Moderna: Termodinámica, Mecánica Cuántica y Relatividad**
Docente: Prof. Julio Eduardo Oliva Zapata | Estudiante: [Nombre] | 25 septiembre 2026

---

## Resumen

¿Por qué la entropía, definida macroscópicamente por Clausius, solo puede tener valor absoluto y significado físico completo a través de los átomos? Este informe sigue el hilo que responde esa pregunta. Se parte de la definición de Clausius ($dS = \delta Q_\text{rev}/T$) y su limitación: la constante de integración indeterminada. Boltzmann la fija con la mecánica estadística ($S = k_B\ln\Omega$) al identificar la entropía con el logaritmo del número de microestados. El conteo riguroso de esos microestados revela la paradoja de Gibbs, resuelta exigiendo la indistinguibilidad de las partículas, lo que conduce a la fórmula de Sackur–Tetrode. El gas de Van der Waals muestra que la entropía es sensible a la estructura molecular. Einstein (1905) convierte todo este formalismo en prueba experimental: la relación de difusión $D = k_BT/(6\pi\eta r)$ conecta las fluctuaciones atómicas con el movimiento browniano observable, y Perrin midió el número de Avogadro. Finalmente, la misma indistinguibilidad que resolvió la paradoja de Gibbs fue la clave con que Planck abrió la física cuántica en 1900.

**Palabras clave:** entropía, segunda ley, gas ideal, Van der Waals, paradoja de Gibbs, Sackur–Tetrode, movimiento browniano, Planck.

---

## 1. Introducción

¿Por qué la entropía, una magnitud definida a partir del calor y la temperatura, necesita de los átomos para tener un valor absoluto y un significado físico completo?

Esta pregunta guía el presente informe. La entropía de Clausius permite calcular *diferencias* de entropía con exactitud, pero deja libre una constante de integración que la termodinámica macroscópica no puede determinar. Esa indeterminación no es un detalle técnico menor: es la señal de que la descripción macroscópica está incompleta. Boltzmann encontró la capa más profunda en el conteo de configuraciones moleculares. Pero al aplicar ese conteo con rigor, emerge una contradicción — la paradoja de Gibbs — que solo se resuelve reconociendo que los átomos de la misma especie son indistinguibles entre sí. Y esa indistinguibilidad, trasladada a los cuantos de energía, fue la clave con que Planck inauguró la física cuántica.

Este informe tiene tres objetivos: (1) derivar la entropía del gas ideal y demostrar que la mecánica estadística de Boltzmann fija la constante que Clausius dejaba libre, (2) resolver la paradoja de Gibbs mediante la indistinguibilidad cuántica y comparar el resultado con el gas real de Van der Waals, y (3) mostrar cómo Einstein convirtió el formalismo atómico en predicción experimental y cómo ese mismo formalismo condujo a Planck a la cuantización de la energía.

La clase elegida es la **Clase 6** (mecánica estadística, entropía de Boltzmann y movimiento browniano de Einstein), que integra y cierra los temas del módulo.

---

## 2. Contexto histórico

El siglo XIX comenzó creyendo que el calor era un fluido —el *calórico*— y terminó entendiendo que era energía en tránsito. Joule (1843) midió el equivalente mecánico del calor: $1\,\text{cal} = 4.186\,\text{J}$. Carnot (1824) había demostrado, sin saber esto, que la eficiencia de cualquier máquina térmica está limitada por las temperaturas: $\eta \leq 1 - T_C/T_H$. Clausius (1865) formalizó ambas leyes y acuñó el término entropía. Boltzmann (1877) conectó la entropía con el número de microestados. Van der Waals (1873) incorporó el volumen propio molecular y las atracciones intermoleculares en la ecuación de estado. Gibbs (1878) sistematizó la termodinámica y señaló la paradoja que lleva su nombre.

Boltzmann murió en 1906, combatido por quienes negaban los átomos. Einstein publicó en 1905 la predicción que zanjaría el debate: el movimiento browniano. Perrin la verificó entre 1908 y 1909, midiendo directamente el número de Avogadro. Planck, también en 1900, había usado la misma entropía de Boltzmann para derivar la distribución del cuerpo negro y postular la cuantización de la energía, conectando el siglo XIX con la física cuántica del XX.

---

## 3. Desarrollo

### 3.1 La entropía de Clausius y su limitación

La segunda ley establece que los procesos espontáneos tienen una dirección preferida. Clausius la capturó con el teorema del ciclo:

$$\oint \frac{\delta Q}{T} \leq 0,$$

con igualdad para procesos reversibles. La consecuencia es que $\delta Q_\text{rev}/T$ es un diferencial exacto: existe una función de estado $S$ tal que $dS = \delta Q_\text{rev}/T$. Combinada con la primera ley, produce la relación fundamental $dU = T\,dS - P\,dV$.

Para el gas monoatómico ideal, el teorema de equipartición da $U = \frac{3}{2}Nk_BT$. Con $P = Nk_BT/V$:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + Nk_B\frac{dV}{V}.$$

Integrando:

$$S_\text{ideal}(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln V + C(N).$$

La constante $C(N)$ no puede determinarse con la termodinámica macroscópica. Es el primer síntoma de que el marco está incompleto.

> **Ejercicio:** Un mol de argón a $T_i = 300\,\text{K}$ y $V_i = 24.6\,\text{L}$ se expande adiabáticamente de forma reversible hasta $V_f = 49.2\,\text{L}$. Calcule $T_f$ y el trabajo realizado.
>
> *Solución:* De $dS = 0$ se obtiene $TV^{2/3} = \text{cte}$, luego $T_f = 300/2^{2/3} \approx 189\,\text{K}$. Trabajo: $W = \frac{3}{2}R(T_i - T_f) \approx 1\,380\,\text{J}$, equivalente a la ley de Poisson $PV^{5/3} = \text{cte}$.

### 3.2 La respuesta de Boltzmann: $S = k_B\ln\Omega$

Boltzmann (1877) propuso que la entropía mide el número de microestados $\Omega$ compatibles con el macroestado del sistema. La deducción parte de exigir que la función $S = f(\Omega)$ satisfaga dos propiedades simultáneamente:

- **Aditividad** (la entropía es extensiva): $S_{AB} = S_A + S_B$.
- **Multiplicatividad** (los microestados de sistemas independientes se multiplican): $\Omega_{AB} = \Omega_A \cdot \Omega_B$.

Buscamos $f$ tal que $f(\Omega_A \cdot \Omega_B) = f(\Omega_A) + f(\Omega_B)$. Diferenciando respecto a $\Omega_A$, se obtiene que $\Omega f'(\Omega)$ es una constante universal $k_B$, por lo que $f(\Omega) = k_B\ln\Omega + C$. Fijando $C = 0$ (Tercera Ley: un estado sin degeneración tiene $S = 0$):

$$\boxed{S = k_B\ln\Omega,}$$

donde $k_B = 1.381\times10^{-23}\,\text{J/K}$. Esta ecuación fija la constante $C(N)$ que Clausius dejaba libre: la termodinámica macroscópica y la estadística microscópica describen la misma cantidad, a distinta escala.

### 3.3 La paradoja de Gibbs y la indistinguibilidad

El conteo clásico de microestados trata a cada partícula como individualmente distinguible, produciendo $S \propto Nk_B\ln V$. Esto genera una contradicción inmediata.

Consideremos dos recipientes con el mismo gas ideal, $N$ partículas, temperatura $T$, volumen $V$. Entropía inicial (con $C = 0$): $S_i = 3Nk_B\ln T + 2Nk_B\ln V$. Al retirar la pared, el sistema final tiene $2N$ partículas en volumen $2V$:

$$S_f = 3Nk_B\ln T + 2Nk_B\ln(2V) \implies \Delta S = 2Nk_B\ln 2 > 0.$$

Para un mol, $\Delta S \approx 11.5\,\text{J/K}$, perfectamente medible, sin que haya ocurrido ningún proceso físico observable. La raíz del problema: $S \propto Nk_B\ln V$ no es extensiva.

Gibbs (1902) identificó el error: **intercambiar dos átomos idénticos no produce un nuevo microestado físico**. El conteo debe dividirse por $N!$, las permutaciones de partículas que corresponden al mismo estado. Además, el espacio de fases continuo requiere una celda mínima $h^3$ por partícula para que los estados sean contables. Con la aproximación de Stirling ($\ln N! \approx N\ln N - N$), la dependencia pasa de $\ln V$ a $\ln(V/N)$, que es extensiva, y la paradoja desaparece: $\Delta S_\text{mezcla} = 0$.

El resultado del conteo correcto es la **fórmula de Sackur–Tetrode** (1911–12):

$$\boxed{S_\text{ST} = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].}$$

Es extensiva, fija la constante $C(N)$ e introduce necesariamente la constante de Planck $h$: la entropía absoluta del gas ideal no puede calcularse sin mecánica cuántica.

### 3.4 La entropía del gas real: Van der Waals

La ecuación de Van der Waals corrige el gas ideal incorporando el volumen excluido $b$ y las atracciones moleculares $a$:

$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT.$$

Por la relación de Maxwell derivada de la energía libre de Helmholtz, $(\partial U/\partial V)_T = T(\partial P/\partial T)_V - P = aN^2/V^2$. Sustituyendo en $dS = (dU + P\,dV)/T$, los términos con $a$ se cancelan exactamente:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + \frac{Nk_B}{V-Nb}\,dV \implies \boxed{S_\text{VdW} = \frac{3}{2}Nk_B\ln T + Nk_B\ln(V-Nb) + C'(N).}$$

| Cantidad | Gas ideal | Gas de Van der Waals |
|---|---|---|
| Entropía | $\sim Nk_B\ln V$ | $\sim Nk_B\ln(V - Nb)$ |
| Energía interna | $\frac{3}{2}Nk_BT$ | $\frac{3}{2}Nk_BT - \frac{aN^2}{V}$ |
| $C_V$ | $\frac{3}{2}Nk_B$ | $\frac{3}{2}Nk_B$ |

El parámetro $b$ reduce el volumen libre y disminuye la entropía. El parámetro $a$ no afecta $S$ directamente, pero sí $U$: es la fuente del calor latente de vaporización, $\Delta S_\text{trans} = L/T^*$.

### 3.5 La prueba experimental: el movimiento browniano de Einstein

La teoría de Boltzmann era matemáticamente sólida, pero sus adversarios exigían prueba experimental directa. Einstein (1905) la proporcionó: si los átomos existen, sus colisiones aleatorias sobre una partícula coloidal producen un movimiento errático observable bajo el microscopio.

La deducción combina presión osmótica con fricción hidrodinámica. Para partículas coloidales de radio $r$ en un fluido de viscosidad $\eta$ a temperatura $T$, la presión osmótica $P_\text{osm} = nk_BT$ genera un flujo de arrastre con movilidad de Stokes $\mu = 1/(6\pi\eta r)$:

$$J_\text{arrastre} = -\mu k_BT\frac{\partial n}{\partial x}.$$

En equilibrio con el flujo difusivo de Fick ($J_\text{dif} = -D\,\partial n/\partial x$):

$$\boxed{D = \frac{k_BT}{6\pi\eta r}.}$$

Esta relación de Einstein-Smoluchowski conecta la disipación macroscópica ($\eta$) con las fluctuaciones microscópicas ($k_BT$): es el primer ejemplo del teorema de fluctuación-disipación. El desplazamiento cuadrático medio crece linealmente con el tiempo:

$$\langle x^2(t)\rangle = 2Dt = \frac{RT}{3\pi\eta r N_A}\,t \implies \boxed{N_A = \frac{RT}{3\pi\eta r}\cdot\frac{t}{\langle x^2(t)\rangle}.}$$

**Ejercicio — Determinación de $N_A$ (experimento de Perrin):** Partículas de gomaguta en agua: $T = 293\,\text{K}$, $\eta = 1.00\times10^{-3}\,\text{Pa·s}$, $r = 0.50\,\mu\text{m}$. En $t = 30\,\text{s}$: $\langle x^2\rangle = 2.60\times10^{-11}\,\text{m}^2$.

| Paso | Cálculo | Resultado |
|---|---|---|
| Coeficiente de difusión | $D = \langle x^2\rangle/2t$ | $4.33\times10^{-13}$ m²/s |
| Constante de Boltzmann | $k_B = 6\pi\eta rD/T$ | $1.39\times10^{-23}$ J/K |
| Número de Avogadro | $N_A = R/k_B$ | $5.98\times10^{23}$ mol⁻¹ |

El acuerdo con el valor aceptado ($6.022\times10^{23}$) fue definitivo. Ostwald reconoció públicamente la existencia de los átomos en 1908. Jean Perrin recibió el Premio Nobel en 1926.

### 3.6 La entropía abre la puerta cuántica

La fórmula de Sackur–Tetrode contiene la constante $h$: eso no es casualidad. Planck (1900) llegó al mismo $h$ por un camino completamente distinto, y la conexión revela la profundidad del formalismo.

La física clásica aplica equipartición a los modos electromagnéticos de una cavidad: cada modo recibe $k_BT$. Como la densidad de modos crece sin límite con la frecuencia ($8\pi f^2/c^3$ por unidad de volumen), la energía total diverge — la catástrofe ultravioleta.

Planck interpoló la segunda derivada de la entropía de los osciladores $\partial^2S/\partial U^2$ entre los dos límites experimentales conocidos del espectro, y fue forzado a postular que la energía de los osciladores solo puede tomar valores discretos: $E_n = nhf$. El resultado:

$$\langle E\rangle = \frac{hf}{e^{hf/k_BT}-1},$$

que recupera $k_BT$ a bajas frecuencias y suprime la divergencia exponencialmente a altas. La conexión con la paradoja de Gibbs es directa: en ambos casos, la física clásica sobrecontaba los estados porque trataba como distinguibles objetos que son fundamentalmente idénticos — las moléculas del gas y los cuantos de energía. La corrección $1/N!$ en el gas anticipa la estadística de Bose-Einstein para fotones. La constante $h$ que aparece en Sackur–Tetrode es la misma que define el cuanto de energía: la termodinámica del siglo XIX llevaba inscrita la semilla de la física cuántica del siglo XX.

---

## 4. Conclusión

La pregunta inicial tiene una respuesta concreta y en dos niveles.

Los átomos son necesarios para dar un valor absoluto a la entropía: Boltzmann fija la constante que Clausius dejaba libre al identificar la entropía con el logaritmo del número de microestados. Al exigir que ese conteo sea consistente, emerge la indistinguibilidad de las partículas, que Sackur y Tetrode incorporan introduciendo $h$ y resuelven la paradoja de Gibbs. El gas de Van der Waals muestra que la entropía es sensible a la estructura molecular fina. Y Einstein convierte toda esa estructura teórica en un número medible bajo el microscopio: el número de Avogadro.

El segundo nivel es más profundo: los átomos no solo completan la termodinámica clásica, sino que la trascienden. La misma indistinguibilidad que resuelve la paradoja de Gibbs conduce, aplicada a los cuantos de energía, a la distribución de Planck y a la física cuántica. La física clásica no era un edificio terminado: sus propias herramientas señalaban los límites y anunciaban la extensión que vendría.

---

## 5. Cinco preguntas originales

**1.** La fórmula de Sackur–Tetrode predice $S\to-\infty$ cuando $T\to 0$, en aparente contradicción con la Tercera Ley ($S\to 0$ cuando $T\to 0$). ¿Qué hipótesis del modelo clásico falla a temperatura muy baja, y qué corrección cuántica resuelve la discrepancia?

*Relevancia:* Cuando la longitud de onda de De Broglie $\lambda = h/\sqrt{2\pi mk_BT}$ es comparable al espaciado interparticular, la aproximación clásica colapsa. La estadística de Fermi-Dirac o Bose-Einstein reemplaza a la de Maxwell-Boltzmann y garantiza $S\to 0$ al enfriar.

**2.** En el gas de Van der Waals, el parámetro $a$ no aparece en la expresión de la entropía pero sí en la energía interna. Construya un proceso con $\Delta S = 0$ y $\Delta U \neq 0$ simultáneamente, y calcule el trabajo intercambiado.

*Relevancia:* Una expansión adiabática reversible satisface $dS = 0$. La variación de energía es $dU = (-P + aN^2/V^2)\,dV\neq 0$, porque el trabajo realizado difiere del gas ideal exactamente en el término de interacciones, lo cual es la origen del efecto Joule-Thomson en gases reales.

**3.** Demuestre que la regla de las áreas de Maxwell (condición de coexistencia de fases) es equivalente a exigir que la energía libre de Gibbs sea igual en las dos fases coexistentes. ¿Por qué la igualdad de $G$ — y no la de $S$ — es la condición de equilibrio correcta?

*Relevancia:* A $T$ y $P$ fijas, el sistema minimiza $G = U - TS + PV$. La igualdad $G_\text{liq} = G_\text{gas}$ es geométricamente equivalente a la regla de Maxwell, demostrando la coherencia interna del formalismo termodinámico.

**4.** La catástrofe ultravioleta y la paradoja de Gibbs tienen una raíz estructural idéntica: la física clásica sobreestima el número de estados accesibles. ¿En qué sentido puede describirse la catástrofe ultravioleta como una "paradoja de Gibbs del campo electromagnético"? Señale la analogía exacta y el tipo de corrección que cada caso requiere.

*Relevancia:* El gas clásico ignora la indistinguibilidad de moléculas (corrección: $1/N!$); el campo electromagnético clásico ignora la naturaleza discreta de los cuantos (corrección: estadística de Bose-Einstein para fotones). En ambos casos, la corrección exige reconocer la naturaleza cuántica de los constituyentes.

**5.** Con $m_\text{Ar} = 39.95\,\text{u}$, $T = 298\,\text{K}$, $P = 101\,325\,\text{Pa}$, calcule la entropía molar del argón usando Sackur–Tetrode. El valor experimental, obtenido por integración calorimétrica desde 0 K, es $154.8\,\text{J/(mol·K)}$. ¿Qué concluye del acuerdo?

*Relevancia:* El acuerdo confirma que $h$, determinada por Planck ajustando el cuerpo negro, es una constante universal. Es uno de los tests más directos de coherencia entre termodinámica, mecánica estadística y mecánica cuántica: tres marcos construidos independientemente dan el mismo número.

---

## 6. Referencias bibliográficas

**Artículos originales**
- Clausius, R. (1865). *Annalen der Physik*, 125, 353–400.
- Boltzmann, L. (1877). *Sitzungsberichte der Akademie der Wissenschaften*, 76, 373–435.
- Van der Waals, J. D. (1873). Tesis doctoral, Universidad de Leiden.
- Gibbs, J. W. (1902). *Elementary Principles in Statistical Mechanics*. Yale University Press.
- Sackur, O. (1911). *Annalen der Physik*, 36, 958–980.
- Tetrode, H. (1912). *Annalen der Physik*, 38, 434–442.
- Einstein, A. (1905). *Annalen der Physik*, 17, 549–560.
- Planck, M. (1900). *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245.
- Perrin, J. (1909). *Annales de Chimie et de Physique*, 18, 5–114.

**Texto del curso**
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.

**Textos universitarios**
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). Freeman.

**Recursos abiertos**
- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, caps. 40–44. feynmanlectures.caltech.edu
