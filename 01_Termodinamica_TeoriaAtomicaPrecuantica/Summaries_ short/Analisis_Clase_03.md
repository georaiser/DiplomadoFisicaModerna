# Análisis de la Clase 3: Movimiento Browniano, Ecuación de Difusión y la Realidad del Átomo

## 1. Resumen de la Clase

En la tercera clase, el profesor Julio Eduardo Oliva Zapata nos guía en el paso definitivo: pasar de modelos teóricos sobre partículas a pruebas experimentales que confirmaron que los átomos existen de verdad.

En las clases anteriores vimos que, asumiendo que los fluidos están hechos de átomos, los científicos (como Clausius y Maxwell) podían explicar propiedades como la presión y la temperatura mediante matemáticas precisas. Aun así, físicos reconocidos como Ernst Mach y Wilhelm Ostwald seguían sin creer en los átomos. Para ellos, eran solo "trucos matemáticos" sin una existencia real.

Esta clase explica cómo el **Movimiento Browniano** logró convencer al mundo científico de la existencia física del átomo. Apoyados en los documentos del curso y en los relatos de **Steven Weinberg**, analizaremos:
1. El descubrimiento visual que hizo Robert Brown en fluidos en reposo.
2. Cómo explicar los saltos aleatorios mediante matemáticas continuas (la Ecuación de Advección-Difusión de Fokker-Planck).
3. Cómo influye la resistencia de un líquido en objetos minúsculos (Ley de Stokes).
4. El trabajo de Albert Einstein en 1905 y los experimentos de Jean Perrin que midieron el Número de Avogadro.

---

## 2. El Fenómeno Browniano

En 1827, el botánico **Robert Brown** estaba mirando granos de polen suspendidos en soluciones acuosas en equilibrio térmico. Notó que partículas minúsculas liberadas por el polen temblaban y se movían de forma constante e impredecible (errática).
Tras varias pruebas, descartó que se tratara de algo vivo. Era un fenómeno puramente físico que la termodinámica clásica de fluidos incompresibles continuos no podía explicar.

El profesor Oliva Zapata aclara que la respuesta está en los átomos. Si el agua está compuesta de moléculas que se mueven al azar (como en la Distribución de Maxwell-Boltzmann), una partícula grande recibe bombardeos constantes de forma asimétrica. Por probabilidad, una fluctuación estadística empuja a la partícula transfiriendo un impulso neto en una dirección aleatoria, causando el recorrido en zig-zag.

---

## 3. Caminata Aleatoria: Fokker-Planck Unidimensional

Para entender este movimiento microscópico matemáticamente, los físicos lo modelan como una **Caminata Aleatoria**. A continuación, transformaremos los saltos discretos separados en ecuaciones diferenciales continuas usando Series de Taylor.

### 3.1 Planteamiento Discreto

Imaginemos a la partícula en una red espacial (eje $x$) con espacios de separación $\Delta x$. Tras un pequeño intervalo de tiempo $\Delta t$, la partícula da un salto:
- Hacia $x + \Delta x$ con probabilidad $\nu$.
- Hacia $x - \Delta x$ con probabilidad $(1 - \nu)$.

Si llamamos $P(t, x)$ a la probabilidad de encontrar a la partícula en el punto $x$ en el momento $t$, la ecuación en diferencias finitas es:
$$ P(t+\Delta t, x) = \nu \cdot P(t, x-\Delta x) + (1-\nu) \cdot P(t, x+\Delta x) $$

### 3.2 Conversión al Continuo vía Serie de Taylor

Tomando un límite continuo donde los saltos $\Delta x$ y el tiempo $\Delta t$ son muy pequeños, expandimos con la Serie de Taylor.

El término temporal a primer orden:
$$ P(t+\Delta t, x) \approx P(t, x) + \frac{\partial P}{\partial t} \Delta t $$

Los términos espaciales a segundo orden:
$$ P(t, x \pm \Delta x) \approx P(t, x) \pm \frac{\partial P}{\partial x} \Delta x + \frac{1}{2} \frac{\partial^2 P}{\partial x^2} (\Delta x)^2 $$

Sustituyendo esto en la ecuación original:
$$ P + \frac{\partial P}{\partial t} \Delta t = \nu \left( P - \frac{\partial P}{\partial x} \Delta x + \frac{1}{2} \frac{\partial^2 P}{\partial x^2} (\Delta x)^2 \right) + (1-\nu) \left( P + \frac{\partial P}{\partial x} \Delta x + \frac{1}{2} \frac{\partial^2 P}{\partial x^2} (\Delta x)^2 \right) $$

Reordenando y simplificando:
- El término $P(t,x)$ se cancela.
- El término con $\frac{\partial P}{\partial x}$ resulta en $(1 - 2\nu) \cdot \frac{\partial P}{\partial x} \Delta x$.
- El término con $\frac{\partial^2 P}{\partial x^2}$ resulta en $\frac{1}{2} \frac{\partial^2 P}{\partial x^2} (\Delta x)^2$.

Dividiendo por $\Delta t$:
$$ \frac{\partial P}{\partial t} = \frac{(1 - 2\nu) \Delta x}{\Delta t} \cdot \frac{\partial P}{\partial x} + \frac{(\Delta x)^2}{2\Delta t} \cdot \frac{\partial^2 P}{\partial x^2} $$

Definiendo los coeficientes macroscópicos:
- Coeficiente de Deriva de Arrastre (hacia dónde tiende a moverse): $\mu = \frac{(2\nu - 1) \Delta x}{\Delta t}$
- Coeficiente de Difusión (cómo se esparce): $D = \frac{(\Delta x)^2}{2\Delta t}$

Obtenemos la **Ecuación Diferencial de Advección-Difusión de Fokker-Planck**:
$$ \frac{\partial P}{\partial t} = -\mu \frac{\partial P}{\partial x} + D \frac{\partial^2 P}{\partial x^2} $$

### 3.3 Significado de la Dispersión

Para una partícula en agua quieta, no hay tendencia a moverse más hacia un lado que al otro ($\nu = 1/2$), por lo que $\mu = 0$. La ecuación de Fokker-Planck se reduce a la Ley de Difusión de Fick:
$$ \frac{\partial P}{\partial t} = D \frac{\partial^2 P}{\partial x^2} $$

La solución matemática partiendo desde un punto inicial $x_0 = 0, t = 0$ es:
$$ P(x, t) = \frac{1}{\sqrt{4\pi D t}} \exp\left( -\frac{x^2}{4Dt} \right) $$

El desplazamiento cuadrático medio de la distribución (qué tanto se aleja) es:
$$ \sigma_x^2 = \langle x^2 \rangle - \langle x \rangle^2 = \int_{-\infty}^{\infty} x^2 P(x,t) dx = 2Dt $$

El hecho de que la distancia dependa linealmente con el tiempo ($\langle x^2 \rangle \propto t$) es la firma inconfundible de la caminata aleatoria. (A diferencia del movimiento inercial continuo donde se avanzaría más rápido, con $\langle x^2 \rangle \propto t^2$).

---

## 4. Ley de Stokes y Resistencia Viscosa

Para conectar la difusión $D$ con magnitudes medibles, necesitamos entender la fricción en objetos microscópicos en fluidos bajo régimen laminar.
Si soltamos una esfera de radio $r$ en un líquido, experimenta tres fuerzas:
1. **Peso Gravitacional ($Mg$):** Tira hacia abajo: $\frac{4}{3}\pi r^3 g \rho_c$.
2. **Empuje de Arquímedes:** Empuja hacia arriba: $\frac{4}{3}\pi r^3 g \rho_f$.
3. **Fuerza de Arrastre Viscoso de Stokes:** La resistencia del líquido:
   $$ F_{\text{Viscosa}} = - 6 \pi \eta r \vec{v} $$
   Donde $\eta$ es la viscosidad dinámica y $\vec{v}$ es la velocidad.

Aplicando la Segunda Ley de Newton resulta en:
$$ m \frac{dv}{dt} = \frac{4}{3}\pi r^3 g (\rho_c - \rho_f) - 6\pi \eta r v $$

Al alcanzar el equilibrio, la aceleración se anula y la partícula cae a velocidad constante:
$$ v_{terminal} = \frac{2 g r^2}{9 \eta} (\rho_c - \rho_f) $$

Midiendo experimentalmente la $v_{terminal}$, se puede determinar la viscosidad $\eta$ del fluido.

---

## 5. El Annus Mirabilis de Einstein y el Triunfo Atomista

En 1905, Albert Einstein conectó el comportamiento macroscópico del líquido con el mundo atómico. Explicó que tanto la fricción hidrodinámica ($\eta$) como el coeficiente de difusión ($D$) provienen de lo mismo: el constante choque térmico de los átomos.

Esta relación matemática es la **Relación Fluctuación-Disipación de Einstein**:
$$ D = \frac{k_B T}{6\pi \eta r} $$

Dado que la constante de Boltzmann es $k_B = R / N_A$, la ecuación puede expresarse con magnitudes fáciles de medir:
$$ D = \frac{R T}{6\pi \eta r N_A} \implies N_A = \frac{R T}{6\pi \eta r D} $$

Esto fue un momento histórico. Midiendo experimentalmente el desplazamiento cuadrático medio (para obtener $D$) con un microscopio, junto a constantes medibles como $R, T, \eta$ y el radio $r$, se puede calcular directamente el **Número de Avogadro ($N_A$)**.

En 1908, el científico Jean Baptiste Perrin realizó exhaustivos experimentos midiendo trayectorias de partículas brownianas. Sus cálculos demostraron que $N_A \approx 6.0 \times 10^{23}$. Esto confirmó de manera definitiva y real la existencia de los átomos, refutando a los escépticos y consolidando por completo la teoría atómica moderna.
