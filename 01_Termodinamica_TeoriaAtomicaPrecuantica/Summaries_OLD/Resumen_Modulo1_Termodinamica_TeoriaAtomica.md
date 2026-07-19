# Resumen del Módulo 1: Termodinámica y Teoría Atómica Pre-Cuántica

Este documento resume los conceptos vistos en las clases 1 a 6 del diplomado, apoyándose en los Capítulos 1 y 2 de *Foundations of Modern Physics* (Steven Weinberg). El enfoque está en explicar matemática y físicamente los fenómenos, siguiendo el orden en que fueron descubiertos.

## 1. Introducción y Primeros Modelos Atómicos

La idea de que la materia está formada por partes indivisibles viene de **Demócrito** ($\sim 400$ a.C.), quien afirmó que "sólo los átomos y el vacío existen". Más adelante, **Platón** propuso un modelo geométrico, asociando los elementos (tierra, fuego, aire y agua) a poliedros regulares, como imaginar los átomos de tierra con forma de cubo.

Para llegar a la física moderna, fue necesario pasar a las mediciones exactas. Un paso clave fue el barómetro de **Evangelista Torricelli (1640s)**. Él demostró que el vacío sí puede existir, contrariando la antigua creencia de que "la naturaleza aborrece el vacío". Al invertir un tubo lleno de mercurio en un recipiente, vio que la columna de líquido bajaba hasta detenerse en $h = 760 \text{ mm}$. Esto probó que es la **presión atmosférica** la que sostiene el mercurio, dejando en la parte superior un vacío casi perfecto (con algo de vapor de mercurio a $10^{-3} \text{ mmHg}$).

$$1 \text{ atm} = 760 \text{ mmHg} = 1013,25 \text{ hPa}$$

## 2. Leyes de los Gases y Principios de la Química

El estudio matemático de los gases fue fundamental para desarrollar la teoría atómica moderna, un proceso que ocurrió junto con los grandes avances de la química a fines del siglo XVIII y principios del XIX.

### 2.1 Leyes de los Gases
1. **Ley de Boyle-Mariotte ($\sim 1660$):** Usando tubos en forma de J y manteniendo la temperatura constante, Boyle encontró que el volumen $V$ de un gas y su presión $P$ son inversamente proporcionales. Es decir: $P V = \text{constante}$.
2. **Ley de Charles y Gay-Lussac (1802):** Si la presión y la cantidad de gas se mantienen constantes, el volumen de un gas crece de manera proporcional a su temperatura: $V = \text{constante} \times (T - T_0)$, donde los experimentos mostraron que $T_0$ equivale a $-273,15^\circ\text{C}$ (el cero absoluto).

### 2.2 Avogadro y la Ley de los Gases Ideales
En el campo de la química, **Dalton** buscaba asignar pesos a los átomos estudiando los compuestos, aunque inicialmente supuso fórmulas muy simples (como pensar que el agua era $HO$). Poco después, Gay-Lussac descubrió la **Ley de Volúmenes de Combinación**. Al analizarla, **Amadeo Avogadro (1811)** propuso una idea clave: si tenemos volúmenes iguales de gases distintos a la misma presión y temperatura, ambos tendrán la misma cantidad de moléculas. Además, sugirió que algunas moléculas podían estar formadas por más de un átomo (como $H_2$ y $O_2$).

Estas ideas permitieron unir los descubrimientos previos en una sola fórmula, la **Ley de los Gases Ideales**:
$$ P V = N k_B T = n R T $$
donde:
- $N$ es el número de moléculas y $n$ es el número de moles.
- $k_B \approx 1,38 \times 10^{-23} \text{ J/K}$ es la constante de Boltzmann.
- $R = N_A k_B \approx 8,31 \text{ J/(mol K)}$ es la constante de los gases ideales.
- $N_A \equiv 6,022 \times 10^{23} \text{ mol}^{-1}$ es el Número de Avogadro.

> [!NOTE]
> **El Electrón y la Electrólisis:** Al mismo tiempo que se estudiaban los gases, los experimentos de Faraday con la electricidad en sustancias químicas y el trabajo de J.J. Thomson con los rayos catódicos mostraron que el átomo no era indivisible. Tenía partes más pequeñas en su interior, lo que llevó al descubrimiento del **electrón**.

---

## 3. La Teoría Cinética: El Mundo Microscópico

Uno de los grandes triunfos de la física del siglo XIX fue lograr explicar conceptos como la presión $P$ y la temperatura $T$ observando cómo se mueven las partículas. 

### 3.1 El Modelo de Bernoulli y Clausius (1857)
Para explicar la presión de los gases, **Newton** había pensado en fuerzas estáticas que se repelían. Sin embargo, **Daniel Bernoulli (1738)** propuso una idea mejor y en movimiento: la presión se debe a los constantes choques de las partículas contra las paredes del recipiente.

Más tarde, **Rudolf Clausius** le dio forma matemática a esta idea. Si una molécula de masa $m$ choca contra una pared a una velocidad $v_\perp$ y rebota, le transfiere a la pared un momento de $2mv_\perp$. Al sumar todos los choques de un gas que tiene una densidad de $n = N/V$ moléculas, la presión total es:
$$ P = \frac{1}{3} n m \langle v^2 \rangle $$
*(El factor $\frac{1}{3}$ aparece porque las partículas se mueven en 3 dimensiones y en todas las direcciones por igual, por lo que $\langle v^2 \rangle = 3 \langle v_x^2 \rangle$)*.

Al comparar esta ecuación con la ley de los gases ideales ($P = n k_B T$), descubrimos qué es realmente la temperatura: es simplemente una medida de la energía de movimiento (energía cinética) promedio que tienen las moléculas.
$$ \frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T $$

---

## 4. Cómo se Mueven las Moléculas: La Distribución de Maxwell

En un gas, no todas las moléculas viajan a la misma velocidad. Sus velocidades siguen una **distribución de probabilidad**. James Clerk Maxwell calculó cómo se reparten estas velocidades usando la estadística y asumiendo que el espacio no tiene una dirección preferida.

### 4.1 Derivación de la Fórmula
Maxwell supuso que la forma en que una molécula se mueve hacia adelante o hacia atrás no depende de cómo se mueve hacia arriba o hacia los lados. Matemáticamente, esto significa que la probabilidad de moverse en tres dimensiones es el producto de las probabilidades en cada dirección:
$$ f(v^2_x + v^2_y + v^2_z) = f(v_x^2) \times f(v_y^2) \times f(v_z^2) $$
La única función matemática que transforma una suma de componentes en un producto es la función exponencial ($Ae^{-Bv^2}$). Al integrar todas las posibles velocidades ($4\pi v^2 dv$) y ajustar las constantes para que la probabilidad total sea 1, se llega a la **Distribución de Maxwell**:
$$ P(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{mv^2}{2k_B T}\right) $$

De esta fórmula se pueden extraer las velocidades típicas de un gas:
- **Velocidad más común (la que tienen más moléculas):** $v_{max} = \sqrt{\frac{2k_B T}{m}}$
- **Velocidad promedio:** $\langle v \rangle = \sqrt{\frac{8k_B T}{\pi m}}$
- **Velocidad cuadrática media (asociada a la energía):** $v_{rms} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3k_B T}{m}}$

> [!TIP]
> **Por qué los planetas pierden gases:** La fórmula de Maxwell muestra que siempre hay un pequeño grupo de moléculas que viajan muy rápido. Si su velocidad supera la velocidad de escape del planeta ($v_{esc} = \sqrt{2GM/R}$), el gas se va al espacio. Esto explica por qué los gases ligeros, como el hidrógeno ($H_2$) o el helio ($He$), escapan fácilmente de planetas pequeños.

---

## 5. El Movimiento Browniano: La Prueba de que los Átomos Existen

En 1827, el botánico Robert Brown observó bajo el microscopio que los granos de polen flotando en agua temblaban de forma caótica. La única manera de explicar este movimiento era aceptar que el agua estaba hecha de partículas invisibles (átomos y moléculas) que chocaban constantemente contra el polen.

### 5.1 El Camino Aleatorio
En 1905, **Albert Einstein** describió matemáticamente este fenómeno. Mostró que estos choques al azar generan un patrón de difusión que se puede escribir como una ecuación:
$$ \frac{\partial f}{\partial t} = -\mu \frac{\partial f}{\partial x} + D \frac{\partial^2 f}{\partial x^2} $$
Si no hay una corriente de agua empujando el polen (es decir, $\mu=0$), la distancia que logra alejarse la partícula no crece linealmente con el tiempo, sino que su varianza crece como $\langle x^2 \rangle = 2Dt$. Esto significa que la distancia promedio que recorre es proporcional a la raíz cuadrada del tiempo ($\sqrt{t}$).

### 5.2 Midiendo el Tamaño de los Átomos
Einstein logró relacionar qué tan rápido se difunde la partícula ($D$) con la constante de Boltzmann, el tamaño de la partícula ($r$) y qué tan viscoso es el fluido ($\eta$):
$$ D = \frac{k_B T}{6\pi \eta r} = \frac{R T}{6\pi \eta r N_A} $$
Unos años después, el físico **Jean Baptiste Perrin** hizo el experimento real. Midió el movimiento de las partículas bajo el microscopio y, usando la fórmula de Einstein, logró calcular el **Número de Avogadro**. Esto le dio el Premio Nobel en 1926 y cerró para siempre el debate: los átomos eran reales y ya se podían contar.

---

## 6. Comportamiento Real de los Gases y Fases de la Materia

Cuando observamos la materia a gran escala, usamos ecuaciones para describir cómo se relaciona su presión, volumen y temperatura.

### 6.1 El Gas de Van der Waals
La ecuación de los gases ideales funciona bien cuando hace calor y hay poco gas. Pero si enfriamos el gas, sus moléculas se acercan y la ecuación ideal falla. Para arreglar esto, el físico **Johannes Diderik van der Waals** propuso una ecuación más realista:
$$ \left(P + \frac{a}{v^2}\right)(v - b) = R T $$
Esta fórmula incluye dos detalles importantes de la vida real: las moléculas tienen un tamaño (ocupan un volumen $b$) y también sienten fuerzas de atracción entre ellas ($a/v^2$). Gracias a estos ajustes, la ecuación puede explicar cómo un gas se convierte en líquido.

Al graficar estas propiedades, aparecen puntos muy especiales:
- **Punto Triple:** Es el equilibrio perfecto donde una sustancia puede ser sólida, líquida y gas al mismo tiempo.
- **Punto Crítico:** Es una temperatura límite. Por encima de ella, el líquido y el gas se vuelven idénticos y no hay diferencia entre ellos (fluido supercrítico).

---

## 7. Trabajo, Calor y la Conservación de la Energía

En el pasado, la gente pensaba que el calor era un fluido invisible llamado "Calórico". Sin embargo, científicos como **James Prescott Joule** demostraron que el calor es simplemente **energía moviéndose de un lado a otro**.

### 7.1 Cómo Hace Trabajo un Gas
Si encerramos un gas en un cilindro y dejamos que empuje un pistón de área $A$ a lo largo de una distancia $dL$, el gas aumenta su volumen en $dV = A \cdot dL$. El esfuerzo o trabajo que hace el gas se calcula así:
$$ dW = F dL = P \cdot A dL = P dV $$

### 7.2 La Primera Ley de la Termodinámica
Esta ley es simplemente la regla de conservación de la energía adaptada a la temperatura y los gases:
$$ dU = dQ - dW + \mu dN $$
Aquí, $dU$ representa el cambio en la **energía interna** del gas. Nos dice que la energía del gas aumenta si le damos calor ($dQ$) y disminuye si el gas gasta energía haciendo trabajo empujando algo ($dW$).

### 7.3 El Calor Necesario para Elevar la Temperatura ($C_V$ y $C_P$)
Calentar un gas requiere diferentes cantidades de energía dependiendo de cómo lo hagamos:
- **Si no dejamos que el volumen cambie ($C_V$):** El gas está encerrado y no puede moverse ($dV=0$, por lo que el trabajo $dW=0$). Todo el calor que le damos se usa para calentar el gas directamente: $dQ|_V = C_V dT$.
- **Si lo calentamos a presión constante ($C_P$):** Al calentarse, el gas se expande y gasta parte de la energía empujando hacia afuera ($P dV$). Por eso, tenemos que darle extra de energía. En consecuencia, calentar un gas que puede expandirse siempre cuesta más esfuerzo: $C_P > C_V$.

---

## 8. La Segunda Ley y la Entropía

La naturaleza tiene un sentido para hacer las cosas. **Clausius** y **Kelvin-Planck** notaron que el calor nunca viaja solo de un objeto frío a uno caliente. Además, ninguna máquina es perfecta: es imposible convertir todo el calor absorbido en trabajo útil. 

Matemáticamente, esto se escribe con la desigualdad de Clausius:
$$ \oint \frac{\bar{d}Q}{T} \le 0 $$

A partir de esta idea, los físicos inventaron un concepto llamado **Entropía ($S$)**. En un proceso ideal y sin fricción, el cambio de entropía se mide como $dS = \bar{d}Q/T$. 

La entropía resultó ser una idea tan profunda que hoy en día se aplica hasta en los agujeros negros, donde el área de su horizonte de sucesos funciona exactamente como la entropía termodinámica, cumpliendo la relación $T dS = dU$.

---

## 9. Mecánica Estadística: Conectando el Átomo con lo Cotidiano

La mecánica estadística fue el puente definitivo que unió las leyes de la termodinámica con el mundo de los átomos.

### 9.1 La Paradoja de Gibbs
Si mezclamos dos gases que son exactamente iguales, la termodinámica antigua decía que la entropía aumentaría (esto se conoce como la **Paradoja de Gibbs**). 
Para resolver este problema, la física tuvo que reconocer que los átomos de un mismo elemento son gemelos idénticos e indistinguibles. Al corregir las matemáticas considerando esta indistinguibilidad (usando la fórmula de Sackur-Tetrode), dividiendo por $N!$ y añadiendo la constante de Planck ($h$), el problema desapareció.

### 9.2 La Gran Idea de Boltzmann
El físico Ludwig Boltzmann tuvo una de las ideas más brillantes de la historia: se dio cuenta de que la entropía es simplemente una medida de cuántas formas diferentes hay de organizar los átomos. Si llamamos $g$ al número de posibles configuraciones microscópicas (microestados), la entropía es:
$$ S = k_B \ln(g) $$
Esta sencilla y elegante ecuación demostró que leyes del mundo visible, como $P V = N k_B T$, son el resultado directo de tirar los dados trillones de veces a nivel atómico, consolidando para siempre la teoría atómica moderna.
