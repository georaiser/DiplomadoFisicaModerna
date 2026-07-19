# Análisis de la Clase 4: Termodinámica Macroscópica, Inestabilidades y Transiciones de Fase

## 1. Resumen de la Clase

Tras estudiar el movimiento browniano en la clase anterior, esta sesión, impartida por el profesor Julio Eduardo Oliva Zapata, sienta las bases de la termodinámica macroscópica. Aprenderemos sobre el equilibrio térmico, la **Primera Ley de la Termodinámica** (que distingue entre funciones de estado y variables de trayectoria) y las **superficies de fase** $P(V, T)$.

El tema central es entender por qué el modelo de gas ideal falla cuando la densidad es muy alta. Veremos cómo el modelo propuesto por Van der Waals presenta ciertas inestabilidades matemáticas, como una compresibilidad negativa, que nos permiten predecir cómo un gas se condensa para formar un líquido mediante la **Regla de las Áreas de Maxwell**.

---

## 2. Equilibrio Termodinámico y el Principio Cero

La termodinámica clásica estudia sistemas que han alcanzado el **equilibrio termodinámico**. En este estado, propiedades generales como la temperatura $T$, la presión $P$ y la densidad $\rho$ son constantes y uniformes en todo el sistema.

El **Principio Cero de la Termodinámica** nos dice que el equilibrio térmico es transitivo: si un sistema A está en equilibrio con B, y B con C, entonces A también está en equilibrio con C. Esta sencilla regla es lo que nos permite medir la temperatura usando termómetros.

---

## 3. Trabajo, Calor y la Primera Ley

En el siglo XIX, experimentos como los de James Prescott Joule demostraron el "equivalente mecánico del calor". Descubrieron que el calor no es un fluido invisible que se conserva (como se creía antes con el "calórico"), sino que es simplemente una forma de transferir energía.

### 3.1 El Trabajo de Expansión
Imagina un gas encerrado que empuja un pistón de área $A$ con una presión $P$. Si el pistón se mueve una distancia $dL$, el volumen del gas cambia en $dV = A \cdot dL$. El trabajo $dW$ que realiza el gas al expandirse es:
$$ {\bar{d}}W = \vec{F} \cdot \vec{dL} = (P \cdot A) \cdot dL = P \cdot dV $$
Usamos el símbolo ${\bar{d}}$ para recordar que el trabajo no es una propiedad fija del sistema, sino que depende del camino que siga el proceso (es una diferencial inexacta).

### 3.2 Conservación de la Energía
La **Primera Ley de la Termodinámica** nos dice que existe una propiedad del sistema llamada **Energía Interna ($U$)**, que es la suma de toda la energía microscópica de sus partículas. Como $U$ solo depende del estado actual del sistema, su cambio total en un ciclo cerrado es cero ($\oint dU = 0$).

La ecuación que describe esto es:
$$ dU = {\bar{d}}Q - {\bar{d}}W + \mu dN $$
Donde:
- ${\bar{d}}Q$ es el calor que entra al sistema.
- ${\bar{d}}W = P dV$ es el trabajo que realiza el sistema.
- $\mu dN$ es la energía por agregar o quitar partículas.

### 3.3 Capacidades Caloríficas
La capacidad calorífica nos dice cuánta energía se necesita para elevar la temperatura de un sistema. Tenemos dos casos principales:
1. **A volumen constante ($C_V$):** Como el volumen no cambia ($dV = 0$), el sistema no realiza trabajo (${\bar{d}}W = 0$). Todo el calor se usa para aumentar la energía interna.
   $$ dU = {\bar{d}}Q_v \implies C_V = \left(\frac{\partial U}{\partial T}\right)_V $$
2. **A presión constante ($C_P$):** Aquí el sistema se expande mientras se calienta. Parte del calor se gasta en realizar trabajo ($P dV$).
   $$ {\bar{d}}Q_p = dU + P dV \implies C_P = \left(\frac{\partial U}{\partial T}\right)_P + P\left(\frac{\partial V}{\partial T}\right)_P $$
Por esta razón, siempre se requiere más calor a presión constante, de modo que $C_P > C_V$.

---

## 4. Superficies de Fase y Compresibilidad

Las propiedades de una sustancia se pueden graficar en un espacio de tres dimensiones $(P, V, T)$, formando lo que llamamos una **superficie de fase**. Cada punto en esta superficie representa un estado posible del sistema, y una línea sobre ella representa un proceso termodinámico.

Una medida importante de cómo responde un material es la **compresibilidad isotérmica ($\kappa_T$)**:
$$ \kappa_T = -\frac{1}{V} \left( \frac{\partial V}{\partial P} \right)_T $$
Para que un sistema sea estable, si lo apretamos (aumentamos la presión), su volumen debe disminuir. Esto significa que, por necesidad física, $\kappa_T > 0$.

---

## 5. El Modelo de Van der Waals y las Transiciones de Fase

El modelo de gas ideal asume que las partículas no ocupan espacio y no se atraen entre sí, pero esto falla cuando el gas está muy comprimido. En 1873, **Johannes D. van der Waals** mejoró este modelo añadiendo dos correcciones:
1. **Volumen excluido ($b$)**: Las moléculas sí ocupan espacio, así que el volumen real donde pueden moverse es menor ($V - nb$).
2. **Fuerzas atractivas ($-a/v^2$)**: Las moléculas se atraen entre sí, lo que reduce la fuerza con la que golpean las paredes del recipiente (menor presión efectiva).

Su ecuación se escribe así:
$$ \left( P + \frac{a}{v^2} \right) (v - b) = R T $$
Donde $v = V/n$ es el volumen por mol.

### 5.1 Una Inestabilidad Reveladora
Si graficamos la presión frente al volumen ($P$ vs $v$) a temperaturas bajas ($T < T_c$), la curva de Van der Waals hace una oscilación, subiendo y bajando.
En la parte donde la curva sube, la derivada $\left(\frac{\partial P}{\partial V}\right)_T$ es positiva, lo que daría una **compresibilidad negativa ($\kappa_T < 0$)**. Esto es imposible en la realidad: significaría que al apretar el gas, este se expande. En la práctica, esto nos indica que el gas no puede existir de forma estable en esa región y está a punto de colapsar.

### 5.2 La Construcción de Maxwell
Para resolver esta imposibilidad física, **James Clerk Maxwell** propuso reemplazar la oscilación por una línea plana horizontal (donde la presión es constante). ¿A qué altura se traza esta línea? Usando la **Regla de las Áreas**: la línea debe trazarse de modo que el área por encima y por debajo de la oscilación original sean iguales ($\int V dP = 0$).
En la vida real, esta línea horizontal representa el momento exacto en que el gas se está condensando; en ella, el líquido y el gas coexisten pacíficamente.

### 5.3 El Punto Crítico
Si calentamos el sistema acercándonos a una temperatura especial llamada temperatura crítica ($T_c$), la zona plana donde el líquido y el gas coexisten se hace cada vez más pequeña, hasta que desaparece por completo en un solo **Punto Crítico**.
Matemáticamente, en este punto la curva se aplana perfectamente sin oscilar:
$$ \left(\frac{\partial P}{\partial v}\right)_{T_c} = 0 \quad \text{y} \quad \left(\frac{\partial^2 P}{\partial v^2}\right)_{T_c} = 0 $$
A temperaturas mayores que $T_c$, ya no hay una transición abrupta entre líquido y gas. Ambos se mezclan en una sola fase continua conocida como **fluido supercrítico**.

---

## 6. Conclusión

Esta clase nos mostró cómo la termodinámica macroscópica se conecta con la estructura íntima de la materia. Vimos que cuando un modelo teórico como el de Van der Waals "falla" mostrando inestabilidades, en realidad nos está prediciendo un fenómeno fascinante de la naturaleza: el cambio de estado de gas a líquido.
Estos principios de termodinámica clásica son el escalón necesario para entender los misterios que surgirán después, como el problema del cuerpo negro, que nos abrirá la puerta al mundo de la mecánica cuántica.
