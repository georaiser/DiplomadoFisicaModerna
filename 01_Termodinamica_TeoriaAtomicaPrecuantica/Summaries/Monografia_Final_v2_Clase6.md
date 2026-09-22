# La entropía estadística y la realidad de los átomos: de Boltzmann a la víspera cuántica

**Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica**  
**Diplomado en Física Moderna: Termodinámica, Mecánica Cuántica y Relatividad**  
Docente: Dr. Julio Eduardo Oliva Zapata | Estudiante: [Nombre] | 25 de septiembre de 2026

---

## Resumen

Durante la segunda mitad del siglo XIX, la física estaba dividida por una pregunta sin respuesta experimental: ¿tienen los átomos existencia física real, o son solo una herramienta matemática conveniente? Este informe sigue el hilo que lleva de esa pregunta a su resolución, tomando como eje la Clase 6 del módulo. Se parte de la fórmula de Boltzmann $S = k_B \ln \Omega$, que da un significado microscópico a la entropía macroscópica de Clausius. Se muestra que el conteo riguroso de microestados revela una propiedad fundamental de los átomos: son indistinguibles entre sí. Esta propiedad, conocida como la resolución de la paradoja de Gibbs, obliga a introducir la constante de Planck $h$ para calcular la entropía absoluta de un gas (fórmula de Sackur-Tetrode), conectando la termodinámica clásica con la física cuántica antes de que esta existiera como disciplina. Finalmente, Einstein (1905) traduce la hipótesis atómica en una predicción directamente medible a través del movimiento browniano, y Perrin (1908) la verifica en el laboratorio, determinando el número de Avogadro y cerrando el debate sobre la realidad de los átomos.

**Palabras clave:** entropía de Boltzmann, paradoja de Gibbs, indistinguibilidad, Sackur-Tetrode, movimiento browniano, número de Avogadro.

---

## 1. Contexto histórico

La termodinámica del siglo XIX fue construida sin saber qué era el calor a nivel fundamental. Carnot (1824) demostró que la eficiencia de cualquier máquina térmica está limitada por las temperaturas entre las que opera. Joule (1843) midió que $1\,\text{cal} = 4{,}186\,\text{J}$, probando que el calor es energía en tránsito, no un fluido. Clausius (1865) formalizó la Segunda Ley y definió la entropía como función de estado:

$$dS = \frac{\delta Q_{\text{rev}}}{T}.$$

Esta definición era operativamente poderosa —permitía calcular cambios de entropía en cualquier proceso— pero dejaba libre una constante de integración que la termodinámica macroscópica no podía fijar. Esa indeterminación era la señal de que la descripción estaba incompleta.

El debate de fondo era filosófico y científico al mismo tiempo. Boltzmann y Maxwell defendían que los fenómenos térmicos son el efecto colectivo del movimiento de millones de partículas discretas. Mach y Ostwald —los energetistas— sostenían que postular átomos invisibles era especulación metafísica: la ciencia debía limitarse a relaciones entre magnitudes observables.

Boltzmann dedicó su vida a demostrar que la hipótesis atómica no solo era coherente, sino necesaria para explicar la entropía. Murió en 1906 sin ver la resolución del debate. Einstein la publicó en 1905, y Perrin la confirmó con mediciones entre 1908 y 1909. La fórmula de Boltzmann, $S = k_B \ln \Omega$, está hoy grabada en su tumba en el Cementerio Central de Viena.

---

## 2. La fórmula de Boltzmann: $S = k_B \ln \Omega$

Si los átomos existen, el estado de un sistema queda determinado por las posiciones y velocidades de todas sus partículas. A un mismo macroestado (con temperatura, presión y volumen definidos) le corresponde un número enorme de configuraciones microscópicas compatibles, llamadas **microestados**. Boltzmann (1877) propuso que la entropía mide ese número:

$$S = k_B \ln \Omega,$$

donde $\Omega$ es el número de microestados accesibles y $k_B = 1{,}381 \times 10^{-23}\,\text{J/K}$ es la constante de Boltzmann.

### 2.1 Deducción por consistencia

La fórmula no es arbitraria: se obtiene exigiendo que la función $S = f(\Omega)$ satisfaga simultáneamente dos propiedades que la entropía macroscópica ya posee.

**Aditividad.** La entropía es extensiva: para dos sistemas independientes $A$ y $B$,

$$S_{AB} = S_A + S_B.$$

**Multiplicatividad.** Los microestados de dos sistemas independientes se combinan libremente, de modo que

$$\Omega_{AB} = \Omega_A \cdot \Omega_B.$$

Se busca entonces una función $f$ que transforme productos en sumas:

$$f(\Omega_A \cdot \Omega_B) = f(\Omega_A) + f(\Omega_B).$$

Derivando esta identidad respecto a $\Omega_A$ y reorganizando, se obtiene que $\Omega \, f'(\Omega)$ debe ser una constante universal positiva. Llamándola $k_B$:

$$\Omega \, \frac{df}{d\Omega} = k_B \implies f(\Omega) = k_B \ln \Omega + C.$$

La condición de que un estado sin degeneración ($\Omega = 1$) tiene entropía cero fija $C = 0$, y se recupera la fórmula de Boltzmann.

### 2.2 Verificación: expansión libre de un gas ideal

Un mol de gas ideal monoatómico duplica su volumen en una expansión libre adiabática. Al duplicar el volumen, el número de posiciones accesibles por partícula se duplica, y el número total de microestados escala como $2^{N_A}$:

$$\Delta S_{\text{Boltzmann}} = k_B \ln(2^{N_A}) = N_A k_B \ln 2 = R \ln 2 \approx 5{,}76\,\text{J/K}.$$

El mismo proceso calculado con la definición de Clausius da $\Delta S = nR \ln(V_2/V_1) = R \ln 2 \approx 5{,}76\,\text{J/K}$. Ambas definiciones son equivalentes, y la constante de integración que Clausius dejaba libre queda determinada por el conteo microscópico de estados.

---

## 3. La paradoja de Gibbs y la indistinguibilidad de los átomos

El conteo de microestados descrito en la sección anterior trata a cada partícula como si llevara una etiqueta individual. Esta suposición produce una contradicción que Gibbs identificó con precisión.

### 3.1 El problema

Consideremos dos recipientes con el mismo gas ideal: $N$ partículas cada uno, temperatura $T$, volumen $V$. La entropía total inicial (con la constante de integración igualada a cero) es:

$$S_i = 2 \left( \frac{3}{2} N k_B \ln T + N k_B \ln V \right).$$

Al retirar la pared divisoria, el sistema final tiene $2N$ partículas en volumen $2V$ a la misma temperatura:

$$S_f = \frac{3}{2} (2N) k_B \ln T + (2N) k_B \ln (2V).$$

La diferencia es:

$$\Delta S = S_f - S_i = 2N k_B \ln 2 > 0.$$

Para un mol, esto equivale a $\Delta S \approx 11{,}5\,\text{J/K}$, perfectamente medible, generado sin que haya ocurrido ningún proceso físico observable. El estado final es idéntico al inicial: la entropía no debería cambiar. Esta es la **paradoja de Gibbs**.

La raíz del problema está en que la expresión $S \propto N k_B \ln V$ no es extensiva: si se duplican $N$ y $V$ manteniendo $T$ fijo, la entropía no se duplica.

### 3.2 La solución: átomos idénticos son indistinguibles

Gibbs (1902) identificó el error conceptual: el conteo clásico asume que intercambiar dos moléculas idénticas produce un nuevo microestado. En la naturaleza, eso es incorrecto. **Dos átomos de la misma especie son físicamente idénticos: ninguna medición puede distinguirlos.** Las $N!$ permutaciones posibles de $N$ partículas idénticas corresponden todas al mismo estado físico, por lo que el conteo correcto divide por $N!$:

$$\Omega_{\text{correcto}} = \frac{1}{N!\, h^{3N}} \int \prod_{i=1}^{N} d^3 q_i\, d^3 p_i.$$

El factor $h^3$ por partícula —donde $h$ es la constante de Planck— es el volumen mínimo de una celda en el espacio de fases que hace finito el número de estados distinguibles.

Aplicando la aproximación de Stirling ($\ln N! \approx N \ln N - N$), la dependencia del volumen pasa de $\ln V$ a $\ln(V/N)$, que sí es extensiva. La paradoja desaparece: $\Delta S_{\text{mezcla}} = 0$.

### 3.3 Implicación fundamental

Este resultado es más profundo de lo que parece. La indistinguibilidad de los átomos, introducida aquí como corrección estadística para salvar la consistencia de la termodinámica, es en realidad un principio fundamental de la mecánica cuántica. La estadística de Maxwell-Boltzmann —válida cuando la probabilidad de que dos partículas compartan el mismo microestado es despreciable— se generaliza en el siglo XX a la estadística de **Fermi-Dirac** (para partículas con espín semientero: electrones, protones) y la estadística de **Bose-Einstein** (para partículas con espín entero: fotones, bosones). La corrección $1/N!$ de Gibbs es el primer paso de ese camino.

---

## 4. La fórmula de Sackur-Tetrode: la constante de Planck en la entropía clásica

Incorporando la corrección de indistinguibilidad al conteo de microestados para un gas ideal monoatómico y evaluando la integral sobre el espacio de fases con la aproximación de Stirling, Otto Sackur y Hugo Tetrode (1911-1912) obtuvieron la expresión explícita para la entropía absoluta:

$$S_{\text{ST}} = N k_B \left[ \ln \left( \frac{V}{N} \left( \frac{2\pi m k_B T}{h^2} \right)^{3/2} \right) + \frac{5}{2} \right].$$

Esta fórmula tiene tres propiedades notables:

1. **Es extensiva.** El cociente $V/N$ permanece invariante al escalar $N$ y $V$ juntos, por lo que $S_{\text{ST}}(2N, 2V, T) = 2\, S_{\text{ST}}(N, V, T)$. La paradoja de Gibbs está completamente resuelta.

2. **Fija la constante indeterminada de Clausius.** La entropía absoluta queda completamente determinada sin constante libre.

3. **Contiene la constante de Planck $h$.** El valor absoluto de la entropía de un gas clásico —derivada enteramente de la mecánica y la termodinámica del siglo XIX— no puede calcularse sin introducir $h$. Esto no es una coincidencia: es la señal de que la descripción clásica del espacio de fases es incompleta, y de que la naturaleza impone una granularidad mínima de tamaño $h^3$ por modo de vibración. La misma constante que Planck introduciría en 1900 para resolver la catástrofe ultravioleta ya estaba implícita en la entropía del gas.

**Verificación numérica.** Para el argón ($m = 39{,}95\,\text{u}$, $T = 298\,\text{K}$, $P = 101\,325\,\text{Pa}$), la fórmula de Sackur-Tetrode predice una entropía molar de $S/N_A \approx 154{,}9\,\text{J/(mol·K)}$. El valor experimental, obtenido por integración calorimétrica desde 0 K, es $154{,}8\,\text{J/(mol·K)}$. El acuerdo confirma que $h$, determinada originalmente ajustando el espectro del cuerpo negro, es una constante verdaderamente universal.

---

## 5. La prueba experimental: Einstein y el movimiento browniano

La teoría estadística de Boltzmann era matemáticamente sólida, pero sus adversarios exigían una prueba experimental directa de la existencia de los átomos. Einstein (1905) la proporcionó con una idea elegante: si los átomos existen, sus colisiones incesantes sobre una partícula visible —como un grano de polen o una partícula coloidal— deben producir un movimiento errático observable bajo el microscopio. Este fenómeno había sido descrito por Robert Brown en 1827, pero nunca explicado.

### 5.1 Deducción de la relación de Einstein-Smoluchowski

Einstein combinó dos ingredientes conocidos: la presión osmótica y la fricción hidrodinámica de Stokes.

Consideremos partículas coloidales de radio $r$ suspendidas en un fluido de viscosidad $\eta$ a temperatura $T$, con una densidad numérica $n(x)$ no uniforme. La presión osmótica $P_{\text{osm}} = n k_B T$ genera sobre cada partícula una fuerza neta que induce un flujo de arrastre. La movilidad hidrodinámica de una esfera en régimen laminar (resultado de Stokes) es $\mu = 1/(6\pi \eta r)$, por lo que el flujo de arrastre es:

$$J_{\text{arrastre}} = -\mu\, k_B T\, \frac{\partial n}{\partial x}.$$

En el estado estacionario, este flujo se cancela exactamente con el flujo difusivo de Fick, $J_{\text{dif}} = -D\, \partial n / \partial x$. Igualando ambas expresiones:

$$D = \frac{k_B T}{6\pi \eta r}.$$

Esta es la **relación de Einstein-Smoluchowski**. Su importancia reside en que conecta una cantidad macroscópicamente medible —el coeficiente de difusión $D$— con la constante de Boltzmann $k_B$ a través de cantidades controlables en el laboratorio ($\eta$, $r$, $T$). Es el primer ejemplo del **teorema de fluctuación-disipación**: la disipación viscosa que frena la partícula y las fluctuaciones térmicas que la agitan son dos manifestaciones del mismo fenómeno microscópico.

### 5.2 El desplazamiento cuadrático medio

La solución de la ecuación de difusión con condición inicial localizada muestra que el desplazamiento promedio de la partícula es nulo —no hay dirección preferida— pero el desplazamiento cuadrático medio crece linealmente con el tiempo:

$$\langle x^2(t) \rangle = 2Dt = \frac{RT}{3\pi \eta r N_A}\, t.$$

Despejando el número de Avogadro:

$$N_A = \frac{RT}{3\pi \eta r} \cdot \frac{t}{\langle x^2(t) \rangle}.$$

Todas las variables del lado derecho son directamente medibles. Einstein había convertido la hipótesis atómica en un protocolo experimental concreto.

### 5.3 Ejercicio: determinación de $N_A$ a partir del experimento de Perrin

Jean Perrin realizó mediciones sistemáticas del movimiento browniano entre 1908 y 1909. Los datos típicos de sus experimentos son:

- Temperatura: $T = 293\,\text{K}$
- Viscosidad del agua: $\eta = 1{,}00 \times 10^{-3}\,\text{Pa·s}$
- Radio de las partículas de gomaguta: $r = 0{,}50\,\mu\text{m} = 5{,}0 \times 10^{-7}\,\text{m}$
- Tiempo de observación: $t = 30\,\text{s}$
- Desplazamiento cuadrático medio medido: $\langle x^2 \rangle = 2{,}60 \times 10^{-11}\,\text{m}^2$

El cálculo se realiza en tres pasos:

**Paso 1.** Coeficiente de difusión experimental:

$$D = \frac{\langle x^2 \rangle}{2t} = \frac{2{,}60 \times 10^{-11}}{2 \times 30} = 4{,}33 \times 10^{-13}\,\text{m}^2/\text{s}.$$

**Paso 2.** Constante de Boltzmann a partir de la relación de Einstein:

$$k_B = \frac{6\pi \eta r D}{T} = \frac{6\pi \times (1{,}00 \times 10^{-3}) \times (5{,}0 \times 10^{-7}) \times (4{,}33 \times 10^{-13})}{293} \approx 1{,}39 \times 10^{-23}\,\text{J/K}.$$

**Paso 3.** Número de Avogadro:

$$N_A = \frac{R}{k_B} = \frac{8{,}314}{1{,}39 \times 10^{-23}} \approx 5{,}98 \times 10^{23}\,\text{mol}^{-1}.$$

El resultado concuerda con el valor aceptado ($6{,}022 \times 10^{23}\,\text{mol}^{-1}$) con un error menor al 1%. Ante este acuerdo, Wilhelm Ostwald reconoció públicamente la existencia real de los átomos en 1908. Jean Perrin recibió el Premio Nobel de Física en 1926 por esta medición.

---

## 6. Conclusión

El módulo responde una pregunta concreta: los átomos tienen existencia física real. El camino para llegar a esa respuesta es también el argumento central de la física del siglo XIX hacia el XX.

Boltzmann demostró que la entropía macroscópica de Clausius y el logaritmo del número de microestados son la misma cantidad, descritas a distinta escala. Al exigir que ese conteo sea internamente consistente, emergió una propiedad que nadie había anticipado: los átomos idénticos no son distinguibles. Gibbs formalizó esa exigencia, Sackur y Tetrode calcularon el resultado correcto, y al hacerlo introdujeron inevitablemente la constante de Planck $h$ en una fórmula puramente clásica. Esa constante ya estaba allí, escondida en la textura del espacio de fases, antes de que Planck la necesitara para resolver la catástrofe ultravioleta.

Einstein cerró el argumento convirtiéndolo en un número medible: el coeficiente de difusión de una partícula coloidal, que es inversamente proporcional al número de Avogadro y directamente proporcional a $k_B T$. Perrin midió ese número con un microscopio ordinario.

Las mismas herramientas que prueban la existencia de los átomos —la estadística de microestados, la indistinguibilidad, la función de partición— apuntan directamente a la física cuántica del Módulo 2. La división por $N!$ de Gibbs anticipa la estadística de Bose-Einstein y Fermi-Dirac. La constante $h$ de Sackur-Tetrode es la misma que cuantiza la energía del oscilador de Planck. La termodinámica del siglo XIX no era un edificio terminado: sus propias ecuaciones señalaban los límites del modelo clásico y anunciaban la extensión que vendría.

---

## 7. Cinco preguntas originales

Las siguientes preguntas no fueron planteadas explícitamente en la clase, pero se desprenden directamente de su contenido.

**Pregunta 1.** La corrección de Gibbs divide el conteo de microestados por $N!$, bajo el supuesto de que ningún par de partículas ocupa simultáneamente la misma celda de fase de volumen $h^3$. ¿Bajo qué condición física concreta deja de ser válido ese supuesto, y qué tipo de estadística reemplaza a la de Boltzmann en ese régimen?

*Contexto:* Cuando la longitud de onda de De Broglie $\lambda = h / \sqrt{2\pi m k_B T}$ es comparable al espaciado interparticular, las funciones de onda de las partículas se superponen y la probabilidad de colisión cuántica no es despreciable. En ese régimen, la estadística de Maxwell-Boltzmann colapsa: los fermiones (espín semientero) obedecen la estadística de Fermi-Dirac, que prohíbe que dos partículas compartan el mismo estado, y los bosones (espín entero) obedecen la estadística de Bose-Einstein, que lo favorece. Esta transición explica la superconductividad, la superfluidez del helio-4 y el comportamiento de los electrones en los metales.

**Pregunta 2.** La relación de Einstein $D = k_B T / (6\pi \eta r)$ fue deducida para un fluido newtoniano, donde la fuerza de fricción sobre la partícula depende solo de su velocidad instantánea. ¿Cómo cambiaría la forma de $\langle x^2(t) \rangle$ si el fluido tuviera memoria viscoelástica, de modo que la fricción dependiera del historial de movimiento de la partícula?

*Contexto:* En fluidos viscoelásticos (como el citoplasma celular o soluciones de polímeros), el desplazamiento cuadrático medio ya no crece linealmente con el tiempo sino como $\langle x^2(t) \rangle \propto t^\alpha$, con $0 < \alpha < 1$. Este régimen se llama subdifusión y tiene consecuencias directas en biofísica: el transporte de proteínas dentro de la célula es cualitativamente más lento que en un medio newtoniano.

**Pregunta 3.** La función de partición canónica $Z = \sum_i e^{-E_i / k_B T}$ contiene toda la información termodinámica del sistema. La energía media es $\langle E \rangle = -\partial \ln Z / \partial \beta$, con $\beta = 1/(k_B T)$. ¿A qué magnitud termodinámica medible está relacionada la segunda derivada $\partial^2 \ln Z / \partial \beta^2$?

*Contexto:* Se puede demostrar que $\partial^2 \ln Z / \partial \beta^2 = \langle E^2 \rangle - \langle E \rangle^2$, que es la varianza de la energía. Esta cantidad es directamente proporcional a la capacidad calorífica: $\langle E^2 \rangle - \langle E \rangle^2 = k_B T^2 C_V$. Las fluctuaciones de energía de un sistema son, por lo tanto, medibles a través de su capacidad calorífica: la física estadística conecta el azar microscópico con una magnitud macroscópica cotidiana.

**Pregunta 4.** En el experimento de Perrin, la constante de Boltzmann $k_B$ se determinó con partículas coloidales de radio $\sim 0{,}5\,\mu\text{m}$. El mismo valor aparece en la presión cinética de los gases para moléculas de tamaño $\sim 0{,}1\,\text{nm}$, es decir, para objetos diez mil veces más pequeños. ¿Qué implica esa universalidad de $k_B$ sobre la naturaleza del equilibrio térmico?

*Contexto:* La universalidad de $k_B$ es evidencia directa de que el teorema de equipartición —cada grado de libertad cuadrático recibe en promedio $\frac{1}{2} k_B T$ de energía— rige a todas las escalas de tamaño, desde moléculas diatómicas hasta coloides macroscópicos. Esto implica que el equilibrio térmico no es una propiedad de un tipo particular de materia, sino del propio espacio de fases estadístico, independientemente de la escala.

**Pregunta 5.** La fórmula de Sackur-Tetrode predice que la entropía tiende a $-\infty$ cuando $T \to 0$, lo que contradice la Tercera Ley de la Termodinámica (que establece $S \to 0$ cuando $T \to 0$). ¿Qué hipótesis del modelo falla a temperatura muy baja, y cómo la mecánica cuántica corrige esta divergencia?

*Contexto:* La fórmula de Sackur-Tetrode es válida solo en el límite clásico, donde la longitud de onda de De Broglie de cada partícula es mucho menor que la distancia interparticular. A temperaturas muy bajas, ese supuesto colapsa: las longitudes de onda crecen y las partículas no pueden localizarse individualmente. La corrección cuántica —estadística de Fermi-Dirac para electrones o de Bose-Einstein para bosones— suprime los microestados de alta energía de forma diferente a Boltzmann y garantiza que $S \to 0$ conforme $T \to 0$, en acuerdo con la Tercera Ley.

---

## 8. Referencias

**Artículos originales**

- Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung. *Wiener Berichte*, 76, 373-435.
- Gibbs, J. W. (1902). *Elementary Principles in Statistical Mechanics*. Yale University Press.
- Einstein, A. (1905). Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen. *Annalen der Physik*, 17, 549-560.
- Sackur, O. (1911). Die Anwendung der kinetischen Theorie der Gase auf chemische Probleme. *Annalen der Physik*, 36, 958-980.
- Tetrode, H. (1912). Die chemische Konstante der Gase und das elementare Wirkungsquantum. *Annalen der Physik*, 38, 434-442.
- Perrin, J. (1909). Mouvement brownien et réalité moléculaire. *Annales de Chimie et de Physique*, 18, 5-114.

**Texto del curso**

- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 2 y 3.

**Textos de consulta**

- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 6 y 15.
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2a ed.). Wiley. Caps. 15 y 16.
