# Análisis de la Clase 2: Teoría Cinética y la Distribución de Maxwell-Boltzmann

## 1. Resumen de la Clase

Esta segunda clase explica cómo el comportamiento de los gases que vemos a gran escala (como su presión o temperatura) en realidad proviene del movimiento de millones de partículas microscópicas. El análisis se basa en la exposición de Julio Eduardo Oliva Zapata y en el libro *Foundations of Modern Physics* de Steven Weinberg.

Aprenderemos cómo Daniel Bernoulli y Rudolf Clausius usaron las leyes de Newton para explicar la presión de un gas, demostrando que la temperatura no es más que una medida de la energía cinética de las moléculas. Finalmente, veremos cómo James Clerk Maxwell usó la estadística para describir a qué velocidad se mueven estas partículas.

---

## 2. Teoría Cinética

En 1738, **Daniel Bernoulli** sugirió que la presión de un gas es el resultado de muchas partículas pequeñas rebotando sin parar contra las paredes del recipiente. Más tarde, en 1857, **Rudolf Clausius** transformó esta idea en matemáticas.

### 2.1 La Ecuación de Clausius

Imaginemos un gas dentro de una caja. Para facilitar los cálculos, asumimos lo siguiente:
1. Las partículas tienen una masa $m$.
2. Las partículas son tan pequeñas que su propio volumen casi no ocupa espacio en la caja.
3. No se atraen ni se repelen entre sí; viajan en línea recta hasta chocar con algo.
4. Cuando chocan contra la pared, rebotan sin perder energía (choque elástico).

Si una partícula choca contra una pared y rebota invirtiendo su velocidad en esa dirección ($v_x$), su cambio de impulso (momento lineal) es:
$$ \Delta p_x = p_{final} - p_{inicial} = (-m v_x) - (m v_x) = -2 m v_x $$
Por lo tanto, el impulso que la partícula le entrega a la pared en cada choque es:
$$ \Delta p_{\text{pared}} = 2 m v_x $$

En un tiempo muy corto $\Delta t$, la cantidad de partículas que chocan contra un área $A$ de la pared depende de cuántas partículas hay en ese sector. Si la densidad de partículas es $n = \frac{N}{V}$ (número de partículas por volumen), y la mitad de ellas viaja hacia la pared, el número de choques es:
$$ N_{choques} = \frac{1}{2} n A v_x \Delta t $$

La fuerza total sobre la pared se calcula dividiendo el impulso total entre el tiempo:
$$ F_x = \frac{N_{choques} \cdot \Delta p_{\text{pared}}}{\Delta t} = \frac{(\frac{1}{2} n A v_x \Delta t) \cdot (2 m v_x)}{\Delta t} $$
Simplificando, obtenemos:
$$ F_x = n A m v_x^2 $$

Como la presión $P$ es igual a la fuerza dividida por el área ($F_x / A$), y considerando que las partículas tienen diferentes velocidades y debemos usar el promedio de sus velocidades al cuadrado ($\langle v_x^2 \rangle$), llegamos a:
$$ P = n m \langle v_x^2 \rangle $$

### 2.2 Movimiento en Todas las Direcciones

Como el gas se mueve al azar, las velocidades promedio en las tres direcciones del espacio son iguales:
$$ \langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle $$
Y como la velocidad total al cuadrado es la suma de las tres:
$$ \langle v^2 \rangle = 3 \langle v_x^2 \rangle \implies \langle v_x^2 \rangle = \frac{1}{3} \langle v^2 \rangle $$

Al sustituir esto en la ecuación anterior, obtenemos la Ecuación Cinética de Clausius:
$$ P = \frac{1}{3} n m \langle v^2 \rangle = \frac{1}{3} \frac{N}{V} m \langle v^2 \rangle $$

## 3. Teorema de Equipartición de la Energía

Si comparamos la fórmula tradicional de los gases ideales ($P = n \cdot k_B \cdot T$) con la ecuación que acaba de obtener Clausius, notamos algo fascinante:
$$ n \cdot k_B \cdot T = \frac{1}{3} n m \langle v^2 \rangle $$

Si reordenamos la ecuación para despejar la energía cinética promedio de las partículas ($E_K = \frac{1}{2} m \langle v^2 \rangle$), obtenemos:
$$ \frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T $$

Esto es un descubrimiento enorme: **la temperatura es simplemente una medida de cuánta energía de movimiento tienen las partículas**. El **Teorema de Equipartición de la Energía** nos dice que, en equilibrio, la energía se reparte por igual, y cada dirección en la que la partícula puede moverse aporta $\frac{1}{2} k_B T$ a la energía total.

Para un gas simple de un solo átomo, la energía total es $U = \frac{3}{2} N k_B T$. Si el gas está formado por moléculas más grandes (como el oxígeno, $O_2$), estas también pueden rotar, lo que añade aún más energía.

---

## 4. Distribución de Velocidades de Maxwell-Boltzmann

Aunque las partículas de un gas tienen una energía promedio, no todas viajan a la misma velocidad. **James Clerk Maxwell** calculó cómo se distribuyen estas velocidades usando probabilidad matemática.

### 4.1 Los Supuestos de Maxwell

Maxwell usó dos ideas muy lógicas para la probabilidad matemática de la velocidad:
1. **La dirección no importa:** La probabilidad de ir a una velocidad solo depende de qué tan rápido vas en total ($v^2 = v_x^2 + v_y^2 + v_z^2$), sin importar hacia dónde te diriges.
   $$ Prob \propto F(v_x^2 + v_y^2 + v_z^2) $$
2. **Las direcciones son independientes:** Lo rápido que te mueves hacia arriba no afecta lo rápido que te mueves hacia un lado.
   $$ Prob \propto f(v_x) \cdot f(v_y) \cdot f(v_z) $$

Al unir ambas ideas:
$$ f(v_x) \cdot f(v_y) \cdot f(v_z) = F(v_x^2 + v_y^2 + v_z^2) $$

### 4.2 El Uso de la Exponencial

La única forma matemática que cumple con esta regla (donde multiplicar funciones es igual a sumar sus variables) es una función exponencial:
$$ f(v_i) = A e^{-B v_i^2} $$
El signo debe ser negativo ($-B$) para asegurar que haya un límite natural; de lo contrario, la probabilidad de encontrar partículas a velocidad infinita seguiría creciendo.

### 4.3 Resolviendo las Matemáticas

Trabajando en el espacio de todas las posibles velocidades y aplicando la condición de que la suma de todas las probabilidades debe ser $1$, junto con el resultado de la energía promedio de Clausius, las matemáticas (integrales gaussianas) nos dan los valores de $A$ y $B$:
$$ B = \frac{m}{2k_B T} $$
$$ A = \left(\frac{m}{2\pi k_B T}\right)^{1/2} $$

El resultado final es la famosa **Distribución de Maxwell-Boltzmann**:
$$ P(v) dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2k_B T}\right) dv $$

### 4.4 Velocidades Clave del Gas

Esta fórmula dibuja una curva asimétrica (como una campana inclinada), a partir de la cual podemos extraer tres velocidades importantes:

- **Velocidad más probable ($v_p$):** La cima de la curva; es la velocidad que tiene la mayoría de las partículas.
  $$ v_p = \sqrt{\frac{2 k_B T}{m}} $$
- **Velocidad media ($\langle v \rangle$):** El promedio simple de todas las velocidades.
  $$ \langle v \rangle = \sqrt{\frac{8 k_B T}{\pi m}} \approx 1.128 v_p $$
- **Velocidad cuadrática media ($v_{rms}$):** La velocidad asociada directamente a la energía cinética de las partículas.
  $$ v_{rms} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3 k_B T}{m}} \approx 1.225 v_p $$

> [!NOTE]
> **Escape Atmosférico:**
> La curva matemática nos muestra que siempre hay una pequeña fracción de partículas que viajan extremadamente rápido, sin importar lo frío que esté el gas. Algunas de estas partículas pueden alcanzar la velocidad de escape del planeta ($v_{esc} = \sqrt{2GM/R}$) y perderse en el espacio. Esto, conocido como Escape de Jeans, explica por qué la Tierra perdió los gases muy ligeros (hidrógeno y helio) cuando se formó, pero planetas más grandes y fríos como Júpiter sí pudieron retenerlos.

---

## 5. Conclusión de la Clase 2

Clausius logró algo increíble: usar las leyes de Newton para explicar que la presión que sentimos y la temperatura que medimos provienen del movimiento y los choques constantes de pequeñas partículas invisibles. Maxwell complementó esto al demostrar cómo calcular a qué velocidad se mueve cada porción del gas. Aunque este modelo matemático era brillante y funcionaba perfectamente, muchos científicos de la época seguían dudando de que los átomos existieran realmente, hasta que Albert Einstein analizó el movimiento browniano.
