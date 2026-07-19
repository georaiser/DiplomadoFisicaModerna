# Análisis del Módulo 1: Fundamentos de la Termodinámica, Dinámica Estocástica y Teoría Atómica Pre-Cuántica

Este documento reúne las ideas matemáticas, físicas e históricas discutidas en las Clases 1 a 6 del diplomado (profesor Julio Eduardo Oliva Zapata), apoyándose en los Capítulos 1 y 2 del libro *Foundations of Modern Physics* de Steven Weinberg.
El objetivo es explicar, paso a paso, cómo la física logró pasar de ver los gases como fluidos continuos a demostrar que están compuestos por átomos, construyendo así las bases de la física estadística.

---

## 1. De los Experimentos Simples a las Leyes de los Gases

El primer gran paso de la termodinámica fue romper con ideas antiguas, como la creencia de que a la naturaleza "le daba miedo el vacío". Cuando se inventó el **barómetro de Torricelli (1640)**, se demostró que el peso de la atmósfera es el que sostiene una columna de mercurio. Así, el peso de esa columna ($P = \rho g h$) nos dice exactamente cuánta presión ejerce la atmósfera ($1 \text{ atm} = 760 \text{ mmHg}$).

### 1.1 Ecuaciones que Describen un Gas
Una vez que se pudo experimentar con presiones controladas, los científicos descubrieron reglas claras:
- Robert Boyle notó que si aprietas un gas (reduces el volumen $V$), su presión $P$ aumenta: $P \cdot V = \text{cte}$.
- Charles y Gay-Lussac vieron que si calientas un gas, se expande: $V/T = \text{cte}$. Esto sugirió que debe existir un límite de frío, el cero absoluto.
- Amadeo Avogadro se dio cuenta de que mientras más moléculas ($N$) hay, más volumen ocupan.

Juntando todas estas observaciones, nació la **Ley de los Gases Ideales**:
$$ P V = N k_B T = n R T $$
Donde $N$ representa cuántas moléculas hay y $k_B$ es la famosa constante de Boltzmann.

---

## 2. Entendiendo la Presión desde los Átomos: La Teoría Cinética

La meta de la teoría cinética era entender de dónde viene realmente la presión. Daniel Bernoulli y Rudolf Clausius imaginaron el gas como una colección de pequeñas partículas volando en todas direcciones y rebotando contra las paredes.

### 2.1 Los Choques de las Moléculas
Imagina una molécula de masa $m$ volando directamente hacia una pared con una velocidad $v_x$. Al chocar y rebotar como una bola de billar perfecta, su velocidad cambia a $-v_x$. Siguiendo las reglas de Newton, esto significa que la molécula golpea la pared transfiriéndole un empuje o "momento" equivalente a $2mv_x$.

Si esperamos un tiempo $\Delta t$, todas las partículas cercanas chocarán contra una porción de pared de área $A$. Para saber cuántas golpearán la pared, calculamos el volumen que alcanzan a recorrer ($A \cdot v_x \Delta t$). Multiplicando por la cantidad de moléculas que hay por metro cúbico ($n = N/V$), y asumiendo que la mitad de ellas viaja hacia la pared y la otra mitad se aleja, los impactos totales son:
$$ N_{\text{impactos}} = \frac{1}{2} n A v_x \Delta t $$

### 2.2 Calculando la Presión Matemática
Usando la Ley de Newton para calcular la fuerza continua de esos choques por segundo, tenemos:
$$ F_x = \frac{N_{\text{impactos}} \times \Delta p_{\text{pared}}}{\Delta t} = \frac{\left(\frac{1}{2} n A v_x \Delta t\right)(2 m v_x)}{\Delta t} = n A m v_x^2 $$
Como la presión es la fuerza dividida entre el área ($A$), nos queda $P = n m v_x^2$. Al recordar que las moléculas se mueven en 3 dimensiones y en todas direcciones por igual ($\langle v^2 \rangle = 3 \langle v_x^2 \rangle$), la fórmula final para la presión se convierte en:
$$ P = \frac{1}{3} n m \langle v^2 \rangle $$

### 2.3 El Significado de la Temperatura
Si tomamos nuestra fórmula recién derivada y la igualamos con la ley de los gases ($P = n k_B T$), descubrimos algo maravilloso:
$$ \frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T $$
Este brillante resultado probó que lo que nosotros sentimos como calor o temperatura es, en realidad, el movimiento y la energía cinética de millones de moléculas invisibles. Cada dirección en la que pueden volar contribuye con una energía de $1/2 k_B T$.

---

## 3. La Matemática del Caos: La Distribución de Maxwell

En un gas, las moléculas no viajan a la misma velocidad: algunas van lentas y otras rapidísimo. James Clerk Maxwell dedujo matemáticamente cómo se distribuyen estas velocidades, suponiendo simplemente que el espacio es igual en todas direcciones y que el movimiento vertical no afecta al horizontal.

Si $f(v_x)$ es la probabilidad de ir a una velocidad en el eje $x$, la regla de probabilidades independientes nos dice que el movimiento en 3D se calcula multiplicando:
$$ f(v_x)f(v_y)f(v_z) = F(v_x^2 + v_y^2 + v_z^2) $$
La única curva matemática que funciona para esto es la famosa curva de campana (distribución de Gauss: $A e^{-B v_i^2}$).
Al calcular esto para todo el espacio en 3 dimensiones ($4\pi v^2 dv$) y ajustar los números para que encajen con la energía que dedujo Clausius, Maxwell llegó a su gran fórmula:
$$ P(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2k_B T}\right) $$
Esta ecuación nos dice exactamente cuántas moléculas viajan a cada velocidad. Su pequeña "cola" hacia las velocidades altas explica por qué, con el paso de los años, los gases más ligeros logran escapar al espacio exterior abandonando la atmósfera de su planeta.

---

## 4. Matemáticas de lo Aleatorio: La Ecuación de Fokker-Planck

Cuando vemos una pequeña mota de polvo bailando sin control en el aire o bajo el microscopio, estamos viendo el "movimiento browniano". Este baile sucede porque millones de moléculas invisibles están chocando azarosamente contra la partícula.

Para entender este caos, podemos imaginar una "caminata aleatoria", donde una partícula da pasos al azar hacia la izquierda o a la derecha. Si $P(x,t)$ es la probabilidad de encontrarla en un lugar en cierto momento, el siguiente paso se describe como:
$$ P(t+\Delta t, x) = \nu P(t, x-\Delta x) + (1-\nu) P(t, x+\Delta x) $$
Aplicando un truco matemático de cálculo (Series de Taylor) para mirar saltos de tiempo muy pequeños, obtenemos:
$$ P + \dot{P}\Delta t = \nu \left( P - P'\Delta x + \frac{1}{2}P''\Delta x^2 \right) + (1-\nu) \left( P + P'\Delta x + \frac{1}{2}P''\Delta x^2 \right) $$
Al limpiar y agrupar la ecuación, encontramos cómo cambia la probabilidad a lo largo del tiempo:
$$ \frac{\partial P}{\partial t} = \frac{(1-2\nu)\Delta x}{\Delta t} \frac{\partial P}{\partial x} + \frac{\Delta x^2}{2\Delta t} \frac{\partial^2 P}{\partial x^2} $$
Esto se simplifica en una ecuación maestra, muy famosa en la física de fluidos, llamada Ecuación de Advección-Difusión:
$$ \frac{\partial P}{\partial t} = -\mu \frac{\partial P}{\partial x} + D \frac{\partial^2 P}{\partial x^2} $$
Esta fórmula nos dice algo muy interesante: si el fluido está quieto (no hay viento ni corrientes, $\mu = 0$), la partícula no se aleja de forma recta. Su área de exploración crece con el tiempo ($\langle x^2 \rangle = 2Dt$), lo que significa que la distancia que logra avanzar escala lentamente con la raíz cuadrada del tiempo ($\sqrt{t}$).

---

## 5. El Año Milagroso de Einstein y la Medición de los Átomos

En su año milagroso (1905), Albert Einstein resolvió el misterio de los átomos usando herramientas simples de física. Estudió el equilibrio de pequeñas bolitas cayendo en líquidos densos (viscosos):
$$ m \frac{dv}{dt} = \text{Peso} - \text{Empuje\_Arquímedes} - \text{Arrastre\_Stokes\_Viscoso} $$
Cuando caen, las partículas aceleran hasta llegar a una velocidad constante o terminal ($v_{terminal} = \frac{2gr^2}{9\eta}(\rho_c - \rho_f)$). Usando esto, se puede descubrir cuán pegajoso o "viscoso" ($\eta$) es un líquido.

La verdadera genialidad de Einstein fue relacionar ese frenado del líquido (fricción) con la forma en que los choques de los átomos esparcen las partículas (la difusión $D$):
$$ D = \frac{k_B T}{6\pi \eta r} = \frac{R T}{6\pi \eta r N_A} $$
Jean Perrin, usando un microscopio, midió pacientemente el rebote de las partículas para encontrar $D$. Con esta matemática, logró aislar y calcular con exactitud el **Número de Avogadro**, demostrando sin lugar a duda que los átomos eran reales y ya no solo un invento de la química.

---

## 6. Cuando los Gases se Vuelven Reales y Cambian de Fase

Los gases perfectos solo existen en la teoría. Cuando hace mucho frío o los apretamos mucho, la teoría ideal empieza a fallar. Afortunadamente, la Primera Ley de la Termodinámica nos ayuda a medir qué sucede con su energía:
$$ dU = {\bar{d}}Q - {\bar{d}}W + \mu dN $$

### 6.1 El Gas de Van der Waals
A los físicos les interesa medir qué tan "aplastable" o compresible es un gas cuando no cambia su temperatura. En la naturaleza, esto tiene que ser positivo: si lo aprietas, se encoge ($\kappa_T = - \frac{1}{v}(\frac{\partial v}{\partial P})_T$).
Para que las fórmulas se parecieran a la realidad, Johannes D. van der Waals arregló la ecuación ideal agregando dos factores: el espacio que ocupan las moléculas ($b$) y las fuerzas que las hacen pegarse ($a/v^2$):
$$ \left( P + \frac{a}{v^2} \right) (v - b) = R T $$

### 6.2 La Construcción de Maxwell y la Condensación
Si usamos la ecuación de Van der Waals para dibujar gráficas de un gas muy frío, ocurre algo extraño: la matemática predice que al aplastar el gas, su presión caería. Esto es físicamente absurdo, indicaría una **compresibilidad negativa ($\kappa_T < 0$)**.
Maxwell notó este error y lo resolvió cortando esa curva extraña con una línea recta en la gráfica. Ese trazo horizontal y llano representa exactamente el momento en que el gas empieza a convertirse en gotas de agua: las dos fases (líquido y vapor) viven juntas sin cambiar la presión, explicando de forma brillante la condensación.

---

## 7. La Flecha del Tiempo y los Agujeros Negros

La Segunda Ley de la Termodinámica nos enseña que las cosas en el universo fluyen en un solo sentido: el calor viaja del cuerpo caliente al frío y los objetos tienden al desorden. Esta idea se resume elegantemente en la **Desigualdad de Clausius**:

$$ \oint \frac{\bar{d}Q}{T} \le 0 $$

Para procesos ideales sin fricción, esta matemática da nacimiento a la **Entropía ($S$)** calculada como $dS = (\bar{d}Q/T)_{rev}$. Esto nos dicta una regla de oro: la entropía (o el desorden) de un sistema cerrado nunca, jamás, puede disminuir ($\Delta S \ge 0$).

### 7.1 Entropía en las Estrellas Colapsadas
Estas reglas térmicas son tan potentes que aplican hasta en el borde de un agujero negro. En ellos, su gran masa $M$ actúa como la energía interna ($U = M = r_h/2G$), la misteriosa radiación de Hawking nos dice su temperatura ($T = 1/(4\pi r_h)$), y el tamaño de su "superficie negra" (el horizonte de sucesos) representa su enorme entropía ($S = \pi r_h^2/G$).
Si multiplicamos sus fórmulas, obtenemos:
$$ T dS = \left(\frac{1}{4\pi r_h}\right)\left(\frac{2\pi r_h dr_h}{G}\right) = \frac{dr_h}{2G} = dM = dU $$
Esto es asombroso porque demuestra que incluso los devoradores más grandes del cosmos, formados solo por gravedad, obedecen puntualmente la **Primera Ley de la Termodinámica**.

---

## 8. Explicando lo Cotidiano desde los Átomos: Mecánica Estadística

La mecánica estadística es el gran traductor de la física: nos explica las reglas prácticas del calor y los gases estudiando lo que le ocurre a los átomos individuales.

### 8.1 La Paradoja de Gibbs
Había un problema en las viejas ecuaciones. Según ellas, si mezclas dos tanques con el mismo gas, la entropía aumentaría mágicamente. Esto se llamó la Paradoja de Gibbs.
Para arreglarlo, los físicos notaron que todos los átomos del mismo tipo son absolutamente idénticos. Si intercambias uno por otro, nada cambia. Ajustando las matemáticas con la **Fórmula de Sackur-Tetrode** —dividiendo los resultados entre $N!$ y usando la constante de Planck ($h$)— las piezas del rompecabezas encajaron:

$$ S(E,V,N) = N k_B \ln\left[ \frac{V}{N} \left( \frac{4\pi m E}{3 N h^2} \right)^{3/2} \right] + \frac{5}{2} N k_B $$

### 8.2 Boltzmann y el Conteo de Posibilidades
Ludwig Boltzmann tuvo una revelación histórica: la entropía es solo una medida estadística de probabilidad. Si contamos de cuántas formas se pueden acomodar los átomos (llamémosle microestados, $g$), la entropía es simplemente:

$$ S = k_B \ln(g) $$

Si aplicamos las reglas básicas del cálculo sobre esta brillante idea, obtenemos:
$$ \frac{P}{T} = \left( \frac{\partial S}{\partial V} \right)_{N,E} \Rightarrow PV = N k_B T $$
$$ \frac{1}{T} = \left( \frac{\partial S}{\partial E} \right)_{N,V} \Rightarrow E = \frac{3}{2} N k_B T $$

Esto fue un hito. Demostró definitivamente que leyes del mundo visible (como la ley del gas ideal) provienen simplemente de jugar con la probabilidad y contar cómo se acomodan millones de átomos, sellando así el éxito de la física atómica.
