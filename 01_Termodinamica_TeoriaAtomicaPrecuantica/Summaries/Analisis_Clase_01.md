# Análisis de Clase 01 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Encabezado

| Campo | Detalle |
|---|---|
| **Módulo** | Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1 de 4) |
| **Docente** | Prof. Julio Eduardo Oliva Zapata, Departamento de Física, Universidad de Concepción |
| **Sesión** | Clase 01 — Sesión inaugural del Diplomado en Física Moderna |
| **Fecha** | 8 de mayo de 2026 (grabación: 11:02 PM, duración: 3 h 2 min 57 s + segmento adicional de 20 min 44 s) |
| **Plataforma** | Microsoft Teams (sesión virtual, grabación permanente) |

### Resultados de Aprendizaje Cubiertos

1. Comprender la motivación histórica y filosófica del atomismo como hipótesis científica validable.
2. Construir la noción operacional de **presión** desde el experimento del barómetro de Torricelli.
3. Enunciar y derivar las leyes fenomenológicas de los gases (**Boyle**, **Charles**, **Gay-Lussac**, **Avogadro**) como leyes con sustento experimental.
4. Integrar las leyes parciales en la **Ley de los Gases Ideales** $PV = Nk_BT$ y su forma molar $PV = nRT$.
5. Derivar la **interpretación cinético-molecular** de la presión y vincularla con la Ley de los Gases Ideales.
6. Identificar la **temperatura** como cantidad emergente: promedio de la energía cinética de los constituyentes.
7. Reconocer el rol de la distribución de rapideces (**distribución de Maxwell**) como el paso conceptual hacia la Mecánica Estadística.

---

## Fuentes Disponibles

> [!NOTE]
> Las transcripciones `.docx` constituyen la fuente de **mayor importancia pedagógica** y han sido procesadas exhaustivamente. Los PDFs de diapositivas no fueron accesibles directamente como texto estructurado.

| Fuente | Estado | Observación |
|---|---|---|
| `Clase 1.docx` (grabación 1, 3 h 3 min) | Procesada completamente | Fuente principal |
| `Clase 1a.docx` (grabación 2, 20 min) | Procesada (XML extraído) | Cierre de la clase; distribución de Maxwell |
| `Clase1 Final con Links Claros.pdf` | Disponible (binario) | Diapositivas con referencias |
| `Clase1.pdf` | Disponible (binario) | Versión limpia de diapositivas |
| `Estructura de la materia Feynman V1.pdf` | Disponible | Lectura complementaria asignada |
| `Guia Experimento Original.pdf` | Disponible | Guía del experimento analógico |
| `Steven Weinberg — Foundations of Modern Physics` | Libro de referencia central | Usado explícitamente en clase |

---

## 1. Presentación del Diplomado y Orientación Epistemológica

*Fuente: Transcripción `Clase 1.docx`, minutos 0:03–17:14. Referencia: Weinberg, Cap. 1.*

### 1.1 Estructura del Diplomado en Física Moderna

La primera sesión comenzó con la presentación del Prof. Julio Oliva y una descripción del arco pedagógico del diplomado, organizado en cuatro módulos:

| Módulo | Contenido | Docente |
|---|---|---|
| 1 | Termodinámica y Teoría Atómica Pre-Cuántica (6 sesiones) | Prof. J. Oliva |
| 2 | Teoría Cuántica Temprana (evidencia experimental) | Prof. J. Oliva y equipo |
| 3 | Relatividad Especial | Prof. G. Rubilar |
| 4 | Relatividad General y Cosmología | Por definir |

El objetivo declarado del módulo 1 es sentar las bases conceptuales y matemáticas que permitan comprender la motivación histórica de la mecánica cuántica. El docente subrayó que el libro guía central es:

> **Steven Weinberg**, *Foundations of Modern Physics*, Cambridge University Press, 2021.

Este es el último libro publicado por Weinberg antes de su fallecimiento. Premio Nobel de Física (1979, con Salam y Glashow) por la teoría electrodébil unificada. Se recomienda también el extracto de las **Feynman Lectures** sobre estructura de la materia, disponible en Teams.

### 1.2 La Física como Empresa Predictiva: Método Científico

*Fuente: Transcripción `Clase 1.docx`, minutos 17:14–44:00.*

El Prof. Oliva estableció con claridad la epistemología que guiará el curso:

> "Lo que queremos entender es **por qué** los físicos afirmamos lo que afirmamos. ¿Cuál es la evidencia experimental que tenemos respecto de las afirmaciones que hacemos en física?"

Los pilares metodológicos planteados son:

1. **Hipótesis → Predicción → Experimento.** En física experimental controlada, el experimento es árbitro final. En regímenes no accesibles, la consistencia lógica y matemática guía la teoría hacia predicciones verificables.

2. **"Marco conceptual"** en lugar de "ley" o "teoría". El Prof. Oliva eligió deliberadamente esta terminología para evitar la connotación coloquial peyorativa de "teoría" (como mera especulación). Un marco conceptual es un conjunto de ideas coherentes que, mediante el aparato matemático, genera predicciones.

3. **La ciencia se cuestiona a sí misma.** Ejemplo histórico: el resultado negativo del experimento de Michelson y Morley (1887) motivó a la comunidad a revisar el marco conceptual newtoniano del éter, conduciendo a la relatividad especial de Einstein (1905).

4. **El poder predictivo** como rasgo diferenciador de la ciencia frente a otras aproximaciones al conocimiento. Un marco conceptual construido sobre cierto conjunto de observaciones puede predecir el comportamiento de sistemas *distintos* de los que originaron su construcción.

---

## 2. Antecedentes Históricos: Del Atomismo Griego a la Física Moderna

*Fuente: Transcripción `Clase 1.docx`, minutos 22:00–44:00. Referencia: Weinberg, Sección 1.1; Feynman Lectures Vol. I, Cap. 1.*

### 2.1 Demócrito y el Atomismo (siglo V a.C.)

Demócrito (~460–370 a.C.) postuló que la naturaleza está compuesta por solo dos tipos de entidades:

$$\text{Naturaleza} = \{\text{Átomos}\} \cup \{\text{Vacío}\}$$

Donde "átomo" (del griego $\alpha\tau o\mu o\varsigma$, *indivisible*) designa la unidad fundamental irreductible de la materia. El Prof. Oliva señaló que desde el punto de vista actual, si uno define "átomo" como ente fundamental, la afirmación de Demócrito es **necesariamente verdadera** (trivialmente): si existen constituyentes fundamentales, el espacio entre ellos es vacío por definición.

No obstante, el vacío moderno es un objeto **altamente no trivial**: está lleno de partículas virtuales que se crean y se aniquilan continuamente (efecto Casimir, QCD). El vacío de la cromodinámica cuántica (interacción fuerte) es particularmente rico.

**Escala de complejidad en la noción de "átomo" según escala de energía:**

| Escala de energía | "Átomo" (constituyente fundamental aparente) |
|---|---|
| Química (eV) | Átomos de la tabla periódica ($e^-$ + núcleo) |
| Nuclear (MeV) | Protones y neutrones |
| Partículas (GeV) | Quarks y leptones (6 sabores, 3 familias) |
| Planck ($\sim 10^{19}$ GeV) | Cuerdas (teoría de cuerdas, no verificada) |

### 2.2 Platón y los Sólidos Regulares (siglo IV a.C.)

Platón (~427–347 a.C.) propuso una **geometrización de la materia** en el diálogo *Timeo*. Los cuatro elementos clásicos (tierra, fuego, aire, agua) se asociaron a los cuatro poliedros regulares convexos conocidos entonces, y el quinto se identificó con el éter (el cosmos mismo):

| Elemento | Sólido Platónico | Número de caras |
|---|---|---|
| Fuego | Tetraedro | 4 triángulos equiláteros |
| Aire | Octaedro | 8 triángulos equiláteros |
| Agua | Icosaedro | 20 triángulos equiláteros |
| Tierra | Cubo (hexaedro) | 6 cuadrados |
| Éter/Cosmos | Dodecaedro | 12 pentágonos regulares |

El Prof. Oliva destacó que hay exactamente **cinco poliedros regulares convexos** en $\mathbb{R}^3$ (teorema de Euler). La noción de **simetría** —alta simetría como criterio de perfección o fundamentalidad— resuena a lo largo de toda la física teórica moderna: relatividad general como geometría del espacio-tiempo, grupos gauge como geometría interna.

### 2.3 Newton y el Intento de Deducir la Ley del Gas Ideal

*Fuente: Transcripción `Clase 1.docx`, ~min 37:00; Weinberg, p. 4.*

Isaac Newton (1687), en el *Philosophiæ Naturalis Principia Mathematica* (Libro II, Sección 5), intentó deducir la ley del gas ideal asumiendo que los constituyentes del gas se repelen mutuamente con una fuerza $F \propto r^{-2}$ (análoga a la ley gravitacional, pero repulsiva). El resultado que obtuvo fue:

$$P \propto V^{-4/3} T \quad \Rightarrow \quad PV^{4/3} = \text{const.} \cdot T$$

Esto **no** coincide con la ley fenomenológica observada $PV = \text{const.} \cdot T$. El experimento refutó el modelo de Newton. Este es un ejemplo paradigmático del método científico: una hipótesis matemáticamente elegante puede no describir la naturaleza.

---

## 3. El Concepto de Presión: Del Barómetro de Torricelli a la Definición Formal

*Fuente: Transcripción `Clase 1.docx`, minutos 44:00–65:00. Referencia: Weinberg, Sección 1.2.*

### 3.1 El Barómetro de Torricelli (1644)

Evangelista Torricelli (1608–1647), discípulo de Galileo, realizó en 1644 el experimento que lleva su nombre:

1. Se llena completamente un tubo de ensayo cerrado con mercurio líquido.
2. Tapando el extremo abierto con el dedo, se invierte el tubo y se sumerge en un recipiente con mercurio.
3. Al retirar el dedo, la columna de mercurio desciende hasta una altura fija.

**Observación clave:** La altura de la columna es **independiente** de la forma del tubo, su inclinación, o el área de su sección transversal. A nivel del mar:

$$h_{\text{Hg}} = 760 \text{ mm} = 76 \text{ cm}$$

**Explicación:** La presión atmosférica $P_{\text{atm}}$ actúa sobre la superficie libre del mercurio en el recipiente. Esta presión sostiene la columna de mercurio. El equilibrio de fuerzas sobre una columna de altura $h$ y área de sección $A$ es:

$$P_{\text{atm}} \cdot A = \rho_{\text{Hg}} \cdot g \cdot h \cdot A$$

$$\boxed{P_{\text{atm}} = \rho_{\text{Hg}} \cdot g \cdot h}$$

Sustituyendo valores numéricos:

- $\rho_{\text{Hg}} = 13{,}600 \ \text{kg/m}^3$
- $g = 9{,}8 \ \text{m/s}^2$
- $h = 0{,}760 \ \text{m}$

$$P_{\text{atm}} = 13{,}600 \times 9{,}8 \times 0{,}760 \approx 1{,}013 \times 10^5 \ \text{Pa}$$

La independencia respecto del área se debe a que la presión es **isótropa**: actúa por igual en todas las direcciones y en toda superficie horizontal a la misma altura.

### 3.2 Definición Formal de Presión

La **presión** $P$ se define como la fuerza normal por unidad de área ejercida sobre una superficie:

$$\boxed{P \equiv \frac{F_\perp}{A}} \quad \left[\text{Pa} = \frac{\text{N}}{\text{m}^2}\right]$$

**Unidades y equivalencias:**

| Unidad | Símbolo | Equivalencia en Pa |
|---|---|---|
| Pascal | Pa | $1 \ \text{Pa} = 1 \ \text{N/m}^2$ |
| Hectopascal | hPa | $1 \ \text{hPa} = 100 \ \text{Pa}$ |
| Atmósfera estándar | atm | $1 \ \text{atm} = 101{,}325 \ \text{Pa} \approx 1013 \ \text{hPa}$ |
| Milímetros de Hg | mmHg (Torr) | $1 \ \text{atm} = 760 \ \text{mmHg}$ |

### 3.3 Ejemplo Numérico Trabajado en Clase: Presión de un Celular sobre una Mesa

*Fuente: Transcripción `Clase 1.docx`, min 53:00–58:00.*

Datos estimados para un teléfono móvil típico:

- Masa: $m = 200 \ \text{g} = 0{,}200 \ \text{kg}$
- Área: $A \approx 15 \times 7 \ \text{cm}^2 = 105 \ \text{cm}^2 = 105 \times (10^{-2})^2 \ \text{m}^2 = 1{,}05 \times 10^{-2} \ \text{m}^2$

Peso (fuerza gravitacional):

$$F = mg = 0{,}200 \ \text{kg} \times 9{,}8 \ \text{m/s}^2 = 1{,}96 \ \text{N}$$

Presión ejercida sobre la mesa:

$$P_{\text{celular}} = \frac{F}{A} = \frac{1{,}96 \ \text{N}}{1{,}05 \times 10^{-2} \ \text{m}^2} \approx 187 \ \text{Pa} \approx 1{,}87 \ \text{hPa}$$

**Interpretación física:** La presión atmosférica ($\approx 1013 \ \text{hPa}$) es aproximadamente **500 veces mayor** que la presión que ejerce el celular. No "sentimos" la presión atmosférica porque actúa igualmente desde todos los lados (incluyendo desde abajo y desde adentro del cuerpo), de modo que la fuerza neta sobre cualquier superficie del cuerpo tiende a cero. Solo percibimos las **diferencias** de presión.

> [!NOTE]
> **Error típico en unidades** señalado por el Prof. Oliva: al convertir $\text{cm}^2 \to \text{m}^2$, debe elevarse al cuadrado el factor de conversión: $1 \ \text{cm}^2 = (10^{-2} \ \text{m})^2 = 10^{-4} \ \text{m}^2$, no $10^{-2} \ \text{m}^2$.

---

## 4. Las Leyes Fenomenológicas de los Gases

*Fuente: Transcripción `Clase 1.docx`, minutos 65:00–130:00. Referencia: Weinberg, Cap. 1, Secciones 1.2–1.4.*

Las leyes de los gases ideales surgieron históricamente de cuatro líneas independientes de investigación experimental. Cada una relaciona dos variables termodinámicas manteniendo la tercera fija.

### 4.1 Ley de Boyle — Temperatura Constante (Proceso Isotérmico)

**Experimento:** Robert Boyle (1662) y Robert Hooke midieron la relación entre presión y volumen a temperatura constante.

**Enunciado:**

$$\boxed{P \cdot V = \text{constante} \quad \text{(a } T \text{ y } N \text{ fijos)}}$$

**Forma equivalente:** $P \propto V^{-1}$, es decir, la presión varía **inversamente** con el volumen.

**Verificación experimental:** El Prof. Oliva mostró datos reales de la relación $P$ vs $1/V$ a temperatura $T \approx 297 \ \text{K}$, tomados del artículo de Ouerdane *et al.* citado en las diapositivas. Los datos forman una recta en el plano $(P, 1/V)$ con pendiente $Nk_BT = \text{const.}$, confirmando la ley de Boyle.

**Derivación de la forma funcional:** Si $PV = C(T, N)$ con $C$ independiente de $P$ y $V$, entonces para dos estados $(P_1, V_1)$ y $(P_2, V_2)$ a la misma temperatura y cantidad:

$$P_1 V_1 = P_2 V_2$$

### 4.2 Ley de Charles — Presión Constante (Proceso Isobárico)

**Experimento:** Jacques Charles (1787) y Joseph Louis Gay-Lussac (publicación, 1802) estudiaron la expansión de los gases a presión constante.

**Enunciado:**

$$\boxed{\frac{V}{T} = \text{constante} \quad \text{(a } P \text{ y } N \text{ fijos)}}$$

**Forma equivalente:** $V \propto T$, donde $T$ es la temperatura **absoluta** (Kelvin).

**Implicación crucial:** La ley de Charles, extrapolada a volumen cero, define el **cero absoluto** de temperatura:

$$V(T) = V_0 \left(1 + \frac{T - T_0}{T_0}\right) \xrightarrow{V \to 0} T = 0 \ \text{K} \approx -273{,}15 \ ^\circ\text{C}$$

### 4.3 Ley de Gay-Lussac — Volumen Constante (Proceso Isocórico)

**Enunciado:**

$$\boxed{\frac{P}{T} = \text{constante} \quad \text{(a } V \text{ y } N \text{ fijos)}}$$

**Forma equivalente:** $P \propto T$. A mayor temperatura (mayor energía cinética de los constituyentes), mayor frecuencia e impulso de los choques con las paredes, luego mayor presión.

### 4.4 Ley de Avogadro — Condiciones Iguales

**Enunciado:** Amedeo Avogadro (1811) postuló que a igualdad de temperatura, presión y volumen, cualquier gas contiene el mismo número de moléculas:

$$\boxed{V \propto N \quad \text{(a } P \text{ y } T \text{ fijos)}}$$

Esta ley implica que la naturaleza química del gas **no importa** para las propiedades macroscópicas del gas ideal; solo importa el número de partículas.

---

## 5. La Ley de los Gases Ideales

*Fuente: Transcripción `Clase 1.docx`, minutos 130:00–175:00. Referencia: Weinberg, Sección 1.3.*

### 5.1 Deducción a Partir de las Leyes Parciales

Las cuatro leyes anteriores son restricciones que la función de estado $P = P(V, T, N)$ debe satisfacer simultáneamente. La única función que las combina todas es:

$$\boxed{PV = Nk_BT}$$

donde:

- $N$ = número total de partículas (moléculas) del gas
- $k_B$ = constante de Boltzmann $= 1{,}380649 \times 10^{-23} \ \text{J/K}$ (valor exacto por definición del SI desde 2019)
- $T$ = temperatura absoluta en Kelvin

**Verificación de que esta forma cumple todas las leyes:**

| Ley | Condición | Resultado de $PV = Nk_BT$ |
|---|---|---|
| Boyle | $T, N$ fijos | $PV = Nk_BT = \text{const.}$ ✓ |
| Charles | $P, N$ fijos | $V = \frac{Nk_B}{P} T \propto T$ ✓ |
| Gay-Lussac | $V, N$ fijos | $P = \frac{Nk_B}{V} T \propto T$ ✓ |
| Avogadro | $P, T$ fijos | $V = \frac{k_B T}{P} N \propto N$ ✓ |

### 5.2 Forma Molar: Número de Avogadro y Constante Universal de los Gases

*Fuente: Transcripción `Clase 1.docx`, minutos 155:00–175:00.*

Por razones históricas, la ley del gas ideal se expresó en términos del número de **moles** $n$ en lugar del número de partículas $N$. Se multiplica y divide por el número de Avogadro $N_A$:

$$PV = N k_B T = \underbrace{\frac{N}{N_A}}_{n \equiv \text{moles}} \cdot \underbrace{N_A k_B}_{R \equiv \text{constante universal}} \cdot T$$

$$\boxed{PV = nRT}$$

donde:

$$R \equiv N_A k_B = 6{,}02214076 \times 10^{23} \ \text{mol}^{-1} \times 1{,}380649 \times 10^{-23} \ \text{J/K} = 8{,}31446 \ \frac{\text{J}}{\text{mol} \cdot \text{K}}$$

**El número de Avogadro:** $N_A = 6{,}02214076 \times 10^{23} \ \text{mol}^{-1}$ (definición exacta en el SI 2019). Históricamente se definía como el número de átomos de $^{12}\text{C}$ en exactamente $12 \ \text{g}$ de carbono-12.

**El número de moles:** Si un gas contiene $N$ partículas:

$$n = \frac{N}{N_A}$$

**Equivalencia entre las dos formas de la ley:** $PV = Nk_BT = nRT$ (matemáticamente idénticas).

> [!IMPORTANT]
> **Ejercicio propuesto por el Prof. Oliva:** Verificar dimensionalmente que si $P$ se mide en $\text{N/m}^2$, $V$ en $\text{m}^3$ y $T$ en Kelvin, las unidades de $k_B$ resultan ser $\text{J/K} = \text{N·m/K}$.

**Discusión histórica (pregunta de Sebastián Paz Saavedra, min ~1:50:00):** La constante $k_B$ es una contribución del siglo XIX tardío, asociada a Ludwig Boltzmann (~1870s–1900). La misma constante que aparece en la ley del gas ideal aparece en la definición estadística de la entropía:

$$S = k_B \ln \Omega$$

donde $\Omega$ es el número de microestados del sistema. Esto no era evidente en la época de Boyle, Charles o Gay-Lussac; fue Boltzmann quien reveló su significado microscópico profundo.

---

## 6. La Escala de Temperatura y el Principio Cero de la Termodinámica

*Fuente: Transcripción `Clase 1.docx`, minutos ~1:15:00–1:30:00.*

### 6.1 Escalas de Temperatura

| Escala | Punto de congelación del agua | Punto de ebullición del agua | Cero absoluto |
|---|---|---|---|
| Celsius (°C) | 0 °C | 100 °C | −273,15 °C |
| Fahrenheit (°F) | 32 °F | 212 °F | −459,67 °F |
| Kelvin (K) | 273,15 K | 373,15 K | 0 K |

**Relación entre Celsius y Kelvin:**

$$T[\text{K}] = T[{}^\circ\text{C}] + 273{,}15$$

**Relación entre Celsius y Fahrenheit:**

$$T[{}^\circ\text{F}] = \frac{9}{5} T[{}^\circ\text{C}] + 32$$

La escala Celsius usa 100 divisiones entre los puntos de referencia; la Fahrenheit usa 180 divisiones. La escala Kelvin es la única **absoluta**: su cero corresponde al cero termodinámico.

### 6.2 La Temperatura como Cantidad Emergente

*Fuente: Transcripción `Clase 1.docx`, minutos ~1:20:00–1:25:00.*

El Prof. Oliva introdujo una idea fundamental:

> "La temperatura **no es una cantidad fundamental**. Es una cantidad *emergente*: en realidad es una medición de la energía cinética promedio de los constituyentes del sistema."

Una sola partícula aislada no tiene temperatura. La temperatura surge del comportamiento estadístico colectivo de muchas partículas en equilibrio.

### 6.3 Principio Cero de la Termodinámica

El **principio cero** es el fundamento lógico de la termometría:

> *Si un cuerpo A está en equilibrio térmico con un cuerpo B, y el cuerpo B está en equilibrio térmico con un cuerpo C, entonces A está en equilibrio térmico con C.*

Simbólicamente:

$$A \sim_T B \ \wedge \ B \sim_T C \quad \Rightarrow \quad A \sim_T C$$

Esta **transitividad** del equilibrio térmico permite definir una función de temperatura universal: dos cuerpos están a la misma temperatura si y solo si están en equilibrio térmico.

**Dificultades modernas:** Definir la temperatura en un plasma de alta energía (como el viento solar) o en sistemas fuera del equilibrio exige extensiones sofisticadas del concepto. La termometría es una subdisciplina especializada de la metrología.

---

## 7. Interpretación Cinético-Molecular: Derivación de la Presión desde la Mecánica

*Fuente: Transcripción `Clase 1.docx`, minutos ~2:00:00–3:00:00. Referencia: Weinberg, Secciones 1.5–1.6; Feynman Lectures I, Cap. 39.*

Esta es la parte más profunda de la clase: demostrar que la **Ley de los Gases Ideales es consecuencia** de la mecánica clásica newtoniana aplicada a un conjunto de partículas que se mueven libremente.

### 7.1 Hipótesis del Modelo Cinético-Molecular

El **gas ideal** se modela con las siguientes hipótesis:

1. El gas consiste en $N$ partículas idénticas de masa $m$.
2. Las partículas se mueven en línea recta (sin interacciones mutuas) hasta que chocan con las paredes del recipiente.
3. Las colisiones con las paredes son **perfectamente elásticas** (conservan la energía cinética).
4. El gas es **homogéneo** e **isótropo**: la densidad numérica $n_V = N/V$ es uniforme y no hay dirección preferida.

### 7.2 Fuerza de una Partícula sobre la Pared

Considérese una pared plana de área $A$ perpendicular al eje $x$. Una partícula con componente de velocidad $v_x > 0$ choca elásticamente con ella.

**Antes del choque:** $p_{x,i} = m v_x$

**Después del choque:** $p_{x,f} = -m v_x$ (componente invertida por la colisión elástica)

**Cambio de momento:**

$$\Delta p_x = p_{x,f} - p_{x,i} = -mv_x - mv_x = -2mv_x$$

La partícula imparte a la pared un impulso $+2mv_x$ (por la tercera ley de Newton). Si el tiempo de contacto es $\delta t$, la fuerza promedio que ejerce sobre la pared es:

$$f_{\text{partícula}} = \frac{2mv_x}{\delta t}$$

### 7.3 Número de Partículas que Chocan con la Pared en un Tiempo $\tau$

El Prof. Oliva construyó el argumento con un **cilindro imaginario** de base $A$ y altura $v_x \tau$: todas las partículas con velocidad $v_x > 0$ dentro de este cilindro en el instante $t = 0$ llegarán a la pared antes de que transcurra un tiempo $\tau$.

$$\text{Volumen del cilindro} = A \cdot v_x \tau$$

Dado que el gas es homogéneo con densidad numérica $n_V = N/V$:

$$\mathcal{N}(v_x) = n_V \cdot A \cdot v_x \tau = \frac{N}{V} \cdot A \cdot v_x \tau$$

Este es el número de partículas con velocidad $v_x$ que chocan con la pared en el intervalo $\tau$.

### 7.4 Fuerza Total sobre la Pared

Cada partícula contacta la pared durante un tiempo $\delta t \ll \tau$. La fracción del tiempo total en que cada partícula ejerce fuerza es $\delta t / \tau$:

$$F_{\text{total}} = f_{\text{partícula}} \times \mathcal{N} \times \frac{\delta t}{\tau}$$

Sustituyendo:

$$F_{\text{total}} = \frac{2mv_x}{\delta t} \cdot \frac{N}{V} A v_x \tau \cdot \frac{\delta t}{\tau}$$

$$\boxed{F_{\text{total}} = \frac{2mNAv_x^2}{V}}$$

> [!IMPORTANT]
> **Observación elegante:** Los tiempos $\delta t$ y $\tau$ se cancelan algebraicamente. El resultado **no depende** del tiempo de contacto ni del intervalo de observación. Esto fue señalado explícitamente por el Prof. Oliva como "algo maravilloso en esta construcción".

**Pregunta de Javier Wolf Miranda (min ~3:00:00):** ¿Qué sentido tiene sumar fuerzas ejercidas en distintos instantes?

**Respuesta del Prof. Oliva:** En equilibrio, el barómetro promedia las fuerzas de miles de millones de partículas por unidad de tiempo. Las fluctuaciones existen, pero son detectables solo con precisión temporal extrema. El tiempo $\tau$ debe ser mucho mayor que el tiempo entre colisiones individuales.

### 7.5 La Presión del Gas Ideal

La presión es $P = F_{\text{total}} / A$:

$$P = \frac{F_{\text{total}}}{A} = \frac{2mNv_x^2}{V}$$

**Corrección por la distribución de velocidades e isotropía:** En un gas isótropo, las tres componentes de la velocidad son estadísticamente equivalentes:

$$\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \frac{\langle v^2 \rangle}{3}$$

Promediando sobre todas las partículas (que tienen distintas rapideces) e incorporando que solo la mitad tienen $v_x > 0$, el resultado completo es:

$$\boxed{PV = \frac{1}{3} N m \langle v^2 \rangle}$$

### 7.6 Vinculación con la Ley del Gas Ideal: Temperatura como Energía Cinética

Comparando con la ley del gas ideal $PV = Nk_BT$:

$$\frac{1}{3} N m \langle v^2 \rangle = N k_B T \quad \Rightarrow \quad k_B T = \frac{1}{3} m \langle v^2 \rangle$$

En términos de la energía cinética traslacional promedio por partícula $\langle E_k \rangle = \frac{1}{2} m \langle v^2 \rangle$:

$$\boxed{\langle E_k \rangle = \frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T}$$

**Interpretación física fundamental:**

> La temperatura de un gas ideal es directamente proporcional al promedio de la energía cinética traslacional de sus partículas constituyentes. A $T = 0 \ \text{K}$, el movimiento traslacional cesa.

**Velocidad cuadrática media** (*root mean square speed*):

$$v_{\text{rms}} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}}$$

donde $M$ es la masa molar. A $T = 300 \ \text{K}$:

- Nitrógeno ($M = 28 \ \text{g/mol}$): $v_{\text{rms}} \approx 517 \ \text{m/s}$
- Hidrógeno ($M = 2 \ \text{g/mol}$): $v_{\text{rms}} \approx 1932 \ \text{m/s}$

### 7.7 La Versión Corregida: Rol de las Tres Componentes (Clase 1a)

*Fuente: Transcripción `Clase 1a.docx`, minutos 0:08–5:00.*

En el segmento de cierre, el Prof. Oliva aclaró que en un gas isótropo, las tres componentes contribuyen por igual. La relación correcta entre temperatura y energía cinética es la **ecuación estrella de la clase**:

$$\frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T \quad \Longleftrightarrow \quad \frac{m \langle v^2 \rangle}{3} = k_B T \tag{$\star\star$}$$

El promedio $\langle v^2 \rangle$ introduce formalmente la noción de **variable aleatoria**: las distintas partículas tienen distintas rapideces, siguiendo una distribución de probabilidad. Esto señala el camino hacia la Mecánica Estadística.

---

## 8. La Distribución de Rapideces de Maxwell-Boltzmann

*Fuente: Transcripción `Clase 1a.docx`, minutos 5:00–20:44. Referencia: Weinberg, Sección 1.7; Feynman Lectures I, Cap. 40.*

### 8.1 Motivación: ¿Cuál es la distribución de rapideces en el equilibrio?

El Prof. Oliva planteó la pregunta central: si las partículas del gas no tienen todas la misma velocidad, **¿qué distribución de rapideces exhiben?**

Las posibilidades discutidas:

1. Distribución delta (todas con la misma rapidez) — descartada por las colisiones.
2. Distribución uniforme — inconsistente con la mecánica estadística.
3. Distribución gaussiana — correcta para las **componentes** de la velocidad.
4. **Distribución de Maxwell** — correcta para la **rapidez** (módulo de la velocidad).

### 8.2 El Experimento Análogo: Máquina de Pelotitas

Para dar intuición física, el Prof. Oliva presentó un experimento análogo realizado en el laboratorio durante la pandemia (con el colaborador Marcelo Yarzo):

**Dispositivo:** Un recipiente cerrado con "pelotitas" (partículas macroscópicas) agitadas por una placa vibrante conectada a una fuente de poder (voltaje controlable). Al abrir una compuerta, las pelotitas salen y caen sobre un bastidor con arcos concéntricos.

**Simulación de la temperatura:** A mayor voltaje → mayor agitación → mayor energía cinética → las partículas llegan más lejos.

**Resultado observado:** A 100 V, el histograma sigue una forma característica. A 150 V, el máximo se desplaza hacia distancias mayores y la curva se aplana (conservando el área total). Esta distribución corresponde a la **distribución de Maxwell para la rapidez**.

### 8.3 La Distribución de Maxwell-Boltzmann

**Distribución de una componente de la velocidad** (Gaussiana):

Para una partícula de masa $m$ en un gas a temperatura $T$:

$$\boxed{f(v_x) = \sqrt{\frac{m}{2\pi k_B T}} \exp\!\left(-\frac{m v_x^2}{2k_BT}\right)}$$

Gaussiana centrada en cero, con desviación estándar $\sigma_x = \sqrt{k_BT/m}$.

**Distribución de la rapidez** (Maxwelliana):

La distribución de la rapidez $v = |\mathbf{v}|$ se obtiene integrando sobre todas las direcciones en el espacio de velocidades. En coordenadas esféricas, el elemento de volumen es $4\pi v^2 dv$:

$$\boxed{g(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\!\left(-\frac{mv^2}{2k_BT}\right)}$$

Esta es la **distribución de Maxwell-Boltzmann** para la rapidez.

**Características:**

| Característica | Expresión | Significado |
|---|---|---|
| Rapidez más probable | $v_p = \sqrt{2k_BT/m}$ | Máximo de $g(v)$ |
| Rapidez media | $\langle v \rangle = \sqrt{8k_BT/\pi m}$ | Valor esperado de $v$ |
| Velocidad cuadrática media | $v_{\text{rms}} = \sqrt{3k_BT/m}$ | $\sqrt{\langle v^2 \rangle}$ |
| Normalización | $\int_0^\infty g(v) dv = 1$ | Probabilidad total |

**Relación entre las rapideces características:**

$$v_p < \langle v \rangle < v_{\text{rms}}$$

$$\sqrt{2} : \sqrt{8/\pi} : \sqrt{3} \approx 1{,}41 : 1{,}60 : 1{,}73$$

**Comportamiento con la temperatura:** Al aumentar $T$, el pico se desplaza hacia rapideces mayores y la curva se ensancha y aplana (área normalizada = 1). Esto es exactamente lo observado en el experimento de pelotitas.

### 8.4 Derivación del Promedio $\langle v^2 \rangle$ a Partir de la Distribución de Maxwell

$$\langle v^2 \rangle = \int_0^\infty v^2 g(v) \, dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \int_0^\infty v^4 e^{-mv^2/2k_BT} dv$$

Usando la integral gaussiana estándar con $\alpha = m/2k_BT$:

$$\int_0^\infty v^4 e^{-\alpha v^2} dv = \frac{3\sqrt{\pi}}{8\alpha^{5/2}}$$

Sustituyendo:

$$\langle v^2 \rangle = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \cdot \frac{3\sqrt{\pi}}{8} \cdot \left(\frac{2k_BT}{m}\right)^{5/2}$$

Desarrollando el álgebra paso a paso:

$$= 4\pi \cdot \frac{m^{3/2}}{(2\pi k_B T)^{3/2}} \cdot \frac{3\sqrt{\pi}}{8} \cdot \frac{(2k_BT)^{5/2}}{m^{5/2}}$$

$$= 4\pi \cdot \frac{3\sqrt{\pi}}{8} \cdot \frac{m^{3/2}}{m^{5/2}} \cdot \frac{(2k_BT)^{5/2}}{(2\pi k_B T)^{3/2}}$$

$$= \frac{3\pi^{3/2}}{2} \cdot m^{-1} \cdot \frac{(2k_BT)^{5/2}}{(2\pi k_B T)^{3/2}}$$

$$= \frac{3\pi^{3/2}}{2} \cdot m^{-1} \cdot \frac{(2k_BT)^{5/2}}{\pi^{3/2}(2k_BT)^{3/2}}$$

$$= \frac{3}{2} \cdot m^{-1} \cdot (2k_BT) = \frac{3k_BT}{m}$$

Confirmando:

$$\frac{1}{2}m\langle v^2 \rangle = \frac{3}{2}k_BT \quad \checkmark$$

---

## 9. Escala Energética: La Temperatura como Cantidad Emergente — Síntesis

*Fuente: Transcripción `Clase 1a.docx`, minutos ~8:00–15:00.*

El Prof. Oliva subrayó la profundidad conceptual del vínculo $\langle E_k \rangle = \frac{3}{2}k_BT$:

1. **La temperatura es emergente:** Una sola partícula no tiene temperatura. La temperatura emerge del comportamiento estadístico colectivo de un ensamble de muchas partículas en equilibrio.

2. **La temperatura y el movimiento son inseparables:** Calor y movimiento son dos descripciones del mismo fenómeno a escalas macro y micro, respectivamente.

3. **Boltzmann:** Esta identificación fue el logro central de Ludwig Boltzmann (~1870–1900), quien unificó la termodinámica fenomenológica (Clausius, Kelvin) con la mecánica estadística.

4. **La constante de Boltzmann** $k_B$ es el puente cuantitativo entre el mundo macroscópico (temperatura en Kelvin) y el mundo microscópico (energía en Joules):

$$k_B = 1{,}380649 \times 10^{-23} \ \text{J/K} \quad \text{(valor exacto, SI 2019)}$$

---

## 10. Discusión: Límites del Modelo de Gas Ideal

*Fuente: Transcripción `Clase 1.docx`, varios momentos. Referencia: Weinberg, Sección 1.8.*

### 10.1 Condiciones de Validez del Gas Ideal

El gas ideal es una **aproximación** que vale cuando:

1. **La densidad es baja:** Las partículas pasan la mayor parte del tiempo en vuelo libre. El volumen propio de las partículas es despreciable frente al volumen total.
2. **Las interacciones son débiles:** Las fuerzas intermoleculares (van der Waals, etc.) son despreciables.
3. **Las colisiones son elásticas:** Se conserva la energía cinética total; no hay excitaciones internas relevantes a la temperatura de operación.

**Criterio cuantitativo:** El gas ideal es válido cuando el volumen molar $V_m = RT/P$ es mucho mayor que el volumen propio de las moléculas ($\sim N_A \times \sigma^3$, con $\sigma$ el diámetro molecular).

### 10.2 Gas de Van der Waals (Corrección al Modelo)

Johannes Diderik van der Waals (1873) propuso la corrección que incorpora el **volumen propio** de las moléculas ($b$) y las **atracciones intermoleculares** ($a$):

$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT$$

En el límite $a \to 0$, $b \to 0$ se recupera exactamente la ley del gas ideal.

---

## 11. Síntesis: La Teoría Cinética como Evidencia del Atomismo

*Fuente: Transcripción `Clase 1.docx`, últimos 30 min. Referencia: Weinberg, Sección 1.9.*

La construcción realizada en la Clase 1 tiene un significado histórico profundo que el Prof. Oliva articuló claramente:

1. La hipótesis de Demócrito (la materia está compuesta de átomos) era, en la Grecia antigua, una afirmación filosófica sin sustento experimental.
2. Boyle, Charles, Gay-Lussac y Avogadro construyeron las **leyes fenomenológicas** de los gases (siglos XVII–XIX) basadas en experimentos precisos.
3. Bernoulli (1738), Clausius (1857), Maxwell (1860) y Boltzmann (1872) mostraron que estas leyes fenomenológicas son **consecuencias matemáticas necesarias** de suponer que el gas está compuesto de corpúsculos con movimiento térmico aleatorio.

Este es el argumento de validación de la hipótesis atomista:

$$\text{Hipótesis atómica} \xrightarrow{\text{mecánica clásica}} PV = Nk_BT \xleftarrow{\text{experimento}} \text{observado}$$

La concordancia entre la predicción (derivada de los átomos) y la observación es la **evidencia experimental** que da sustento a la existencia de los átomos.

> [!TIP]
> El experimento de movimiento browniano (Einstein, 1905) y la medición directa del número de Avogadro por Jean Perrin (1908) completaron esta validación experimental con precisión cuantitativa, poniendo fin al debate filosófico sobre la realidad de los átomos.

---

## Conclusiones de la Clase

1. **El atomismo** es una hipótesis milenaria (Demócrito, ~450 a.C.) que adquiere validez científica solo al ser vinculada con predicciones verificables experimentalmente. La Ley de los Gases Ideales es la primera de estas predicciones exitosas.

2. **La presión** es operacionalmente $P = F_\perp / A$, con unidad el Pascal ($\text{N/m}^2$). La atmósfera estándar queda fijada por el barómetro de Torricelli: $P_{\text{atm}} = \rho_{\text{Hg}} g h \approx 1{,}013 \times 10^5 \ \text{Pa}$, aproximadamente 500 veces mayor que la presión que ejerce un teléfono móvil sobre una mesa.

3. **Las leyes fenomenológicas** (Boyle, Charles, Gay-Lussac, Avogadro) se unifican en la Ley de los Gases Ideales: $PV = Nk_BT$ (forma microscópica) y $PV = nRT$ (forma molar), con $R = N_A k_B = 8{,}31446 \ \text{J/(mol·K)}$.

4. **La derivación cinético-molecular** de la presión, usando solo mecánica newtoniana, reproduce $PV = \frac{1}{3}Nm\langle v^2\rangle = Nk_BT$. La cancelación algebraica de los tiempos $\delta t$ y $\tau$ hace el resultado robusto e independiente de detalles del proceso de colisión.

5. **La temperatura es una cantidad emergente:** $\langle E_k \rangle = \frac{3}{2}k_BT$. Una sola partícula no tiene temperatura. La temperatura mide el estado de movimiento estadístico colectivo de los constituyentes.

6. **El Principio Cero** de la termodinámica es el fundamento lógico de la termometría: la transitividad del equilibrio térmico ($A\sim_T B$, $B\sim_T C \Rightarrow A\sim_T C$) permite definir una escala universal de temperatura.

7. **La distribución de Maxwell-Boltzmann** para la rapidez, $g(v) = 4\pi (m/2\pi k_BT)^{3/2} v^2 e^{-mv^2/2k_BT}$, describe cómo se distribuyen las velocidades en el equilibrio. Las componentes de la velocidad siguen una gaussiana; la rapidez sigue una maxwelliana. A mayor temperatura, el pico se desplaza a rapideces mayores y la curva se aplana.

8. **La constante de Boltzmann** $k_B = 1{,}380649 \times 10^{-23} \ \text{J/K}$ es el puente cuantitativo entre termodinámica y mecánica estadística. Aparece en $PV = Nk_BT$ y en $S = k_B \ln\Omega$, anticipando la unidad profunda entre ambas.

9. **El método científico moderno** (hipótesis → predicción → experimento) emerge históricamente en los siglos XVII–XVIII. El intento fallido de Newton ($PV^{4/3} \propto T$, asumiendo fuerza $r^{-2}$ repulsiva) ilustra cómo el experimento arbitra entre hipótesis competidoras.

10. **La Ley de los Gases Ideales** establece el primer vínculo histórico entre fenomenología termodinámica y física microscópica, sentando las bases conceptuales que llevarán, en el módulo siguiente, al estudio de la física cuántica temprana (radiación del cuerpo negro, efecto fotoeléctrico, etc.).

---

## Referencias Bibliográficas

### 1. Artículos Científicos Originales

- **Boyle, R.** (1662). *New Experiments Physico-Mechanicall, Touching the Spring of the Air and Its Effects*. Oxford: Thomas Robinson.
- **Gay-Lussac, J. L.** (1802). "Recherches sur la dilatation des gaz et des vapeurs." *Annales de Chimie*, 43, 137–175.
- **Avogadro, A.** (1811). "Essai d'une manière de déterminer les masses relatives des molécules élémentaires des corps." *Journal de Physique*, 73, 58–76.
- **Clausius, R.** (1857). "Ueber die Art der Bewegung, welche wir Wärme nennen." *Annalen der Physik*, 176 (3), 353–380. [Primera derivación cinética de la presión]
- **Maxwell, J. C.** (1860). "Illustrations of the Dynamical Theory of Gases." *Philosophical Magazine*, 19, 19–32. [Distribución de velocidades]
- **Boltzmann, L.** (1872). "Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen." *Sitzungsberichte der Akademie der Wissenschaften Wien*, 66, 275–370.
- **Einstein, A.** (1905). "Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen." *Annalen der Physik*, 322 (8), 549–560.
- **Perrin, J.** (1909). "Mouvement brownien et réalité moléculaire." *Annales de Chimie et de Physique*, 18, 5–114.
- **Newton, I.** (1687). *Philosophiæ Naturalis Principia Mathematica*, Liber II, Sectio V. Londres: Royal Society.

### 2. Textos del Curso

- **Weinberg, S.** (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. ISBN 978-1-108-84176-5. [Libro guía central del módulo]
- **Feynman, R. P., Leighton, R. B., & Sands, M.** (1963). *The Feynman Lectures on Physics*, Vol. I, Capítulos 1, 39 y 40. California Institute of Technology. Disponible en: https://www.feynmanlectures.caltech.edu/

### 3. Textos Universitarios Estándar

- **Halliday, D., Resnick, R., & Walker, J.** (2014). *Fundamentals of Physics*, 10.ª ed., Capítulos 17–20. Hoboken: Wiley.
- **Serway, R. A., & Jewett, J. W.** (2014). *Physics for Scientists and Engineers*, 9.ª ed., Capítulos 19–21. Cengage Learning.
- **Reif, F.** (2009). *Fundamentals of Statistical and Thermal Physics*. Waveland Press.
- **Mandl, F.** (1988). *Statistical Physics*, 2.ª ed. Chichester: Wiley.

### 4. Recursos de Libre Acceso Verificados

- **NIST CODATA 2018:** Valores de constantes fundamentales ($k_B$, $N_A$, $R$). https://physics.nist.gov/cuu/Constants/
- **Feynman Lectures Online:** https://www.feynmanlectures.caltech.edu/ (Caps. 1, 39, 40 del Vol. I)
- **Laboratorio virtual de gas ideal (PhET):** University of Colorado. https://phet.colorado.edu/es/simulations/ideal-gas-law

### 5. Historia y Filosofía de la Física

- **Kuhn, T. S.** (1962). *The Structure of Scientific Revolutions*. University of Chicago Press.
- **Brush, S. G.** (1976). *The Kind of Motion We Call Heat: A History of the Kinetic Theory of Gases in the 19th Century*. Amsterdam: North-Holland.
- **Cercignani, C.** (1998). *Ludwig Boltzmann: The Man Who Trusted Atoms*. Oxford: Oxford University Press.
- **Weinberg, S.** (2015). *To Explain the World: The Discovery of Modern Science*. Harper.

---

*Documento generado el 13 de julio de 2026 a partir de las transcripciones automáticas de la grabación de la Clase 01 (8 de mayo de 2026) y materiales complementarios del Diplomado en Física Moderna, Universidad de Concepción.*

*Los errores gramaticales de la transcripción automática han sido corregidos al castellano estándar sin alterar el contenido pedagógico.*
