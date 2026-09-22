## Análisis Extendido — Clase 02: Herramientas Matemáticas de la Mecánica Cuántica

**Docente:** Aldo Delgado (clases pares)
**Fecha:** 04 sep 2026
**Módulo:** 04 — Mecánica Cuántica | Diplomado en Física Moderna
**Fuentes utilizadas:** Transcripción de clase, Diapositivas Clase 2, "Mecánica Cuántica para Principiantes", "50 Temas Fascinantes de la Física Cuántica", Griffiths (Introduction to Quantum Mechanics), Sakurai (Modern Quantum Mechanics), Cohen-Tannoudji (Mécanique Quantique).
**Propósito:** Documento de estudio profundo y autocontenido. Sin restricción de extensión.

---

## Introducción General de la Clase
La Mecánica Cuántica requiere de un andamiaje matemático robusto, distinto al utilizado en la mecánica clásica. Mientras que en la mecánica de Newton o en la mecánica analítica de Lagrange y Hamilton el estado de un sistema se describe mediante coordenadas y momentos en un espacio de fase continuo de dimensión finita, en la Mecánica Cuántica el estado de un sistema físico se representa mediante un vector en un espacio vectorial complejo de dimensión infinita, conocido como Espacio de Hilbert. Las propiedades observables del sistema (como energía, momento, posición) están asociadas a operadores lineales y hermíticos que actúan sobre este espacio. Esta clase se centra en desarrollar exhaustivamente este marco matemático, con especial atención a la notación de Dirac, los operadores, los problemas de valores propios y las relaciones de conmutación.

## 1. Espacios de Hilbert y Notación de Dirac

*Fuente primaria: Sakurai, Modern Quantum Mechanics, Cap. 1.*
*Fuente complementaria: Cohen-Tannoudji, Mécanique Quantique, Cap. 2.*

### 1.1 Motivación y Contexto Histórico
A principios del siglo XX, la mecánica cuántica se formuló en dos versiones aparentemente distintas: la mecánica matricial de Werner Heisenberg (1925) y la mecánica ondulatoria de Erwin Schrödinger (1926). Paul Dirac y John von Neumann demostraron matemáticamente que ambas formulaciones eran equivalentes, siendo representaciones diferentes de la misma estructura subyacente: un Espacio de Hilbert complejo. La notación bra-ket introducida por Dirac en 1939 simplificó enormemente el álgebra involucrada, independizando los cálculos de cualquier representación particular (como la de posición o momento).

### 1.2 Desarrollo Conceptual
Un Espacio de Hilbert $\mathcal{H}$ es un espacio vectorial complejo provisto de un producto interno y que es completo respecto a la norma inducida por dicho producto. 
Físicamente, cada posible estado cuántico puro de un sistema aislado corresponde a una dirección (un rayo) en $\mathcal{H}$. Para hacer esto operativo, Dirac introdujo vectores denominados **kets** $|\psi\rangle$ que viven en $\mathcal{H}$, y funcionales lineales llamados **bras** $\langle\phi|$ que viven en el espacio dual $\mathcal{H}^*$. 

### 1.3 Derivación Matemática Completa

**1.3.1 Espacio Vectorial y Kets**
Un espacio vectorial complejo $\mathcal{V}$ sobre el cuerpo $\mathbb{C}$ es un conjunto de elementos (kets $|\psi\rangle, |\phi\rangle$) con dos operaciones definidas:
1. Suma: $|\psi\rangle + |\phi\rangle \in \mathcal{V}$
2. Multiplicación escalar: $c|\psi\rangle \in \mathcal{V}$ para todo $c \in \mathbb{C}$

**1.3.2 Espacio Dual y Bras**
Para cada ket $|\psi\rangle$ en $\mathcal{H}$ existe un vector correspondiente en el espacio dual $\mathcal{H}^*$, denotado como el bra $\langle\psi|$. Existe una correspondencia uno a uno (antilineal):
$$c_1|\alpha\rangle + c_2|\beta\rangle \quad \longleftrightarrow \quad c_1^*\langle\alpha| + c_2^*\langle\beta|$$
donde $c^*$ es el complejo conjugado.

**1.3.3 Producto Interno**
El producto interno entre un bra $\langle\phi|$ y un ket $|\psi\rangle$ se denota como el *bracket* $\langle\phi|\psi\rangle$. Satisface las siguientes propiedades (axiomas del producto interno):
1. **Positividad definida:** $\langle\psi|\psi\rangle \geq 0$, y $\langle\psi|\psi\rangle = 0$ si y solo si $|\psi\rangle$ es el vector nulo.
2. **Simetría conjugada:** $\langle\phi|\psi\rangle = \langle\psi|\phi\rangle^*$
3. **Linealidad en el ket (y antilinealidad en el bra):** 
   $$\langle\phi|(c_1|\alpha\rangle + c_2|\beta\rangle) = c_1\langle\phi|\alpha\rangle + c_2\langle\phi|\beta\rangle$$
   $$(c_1\langle\alpha| + c_2\langle\beta|)|\phi\rangle = c_1^*\langle\alpha|\phi\rangle + c_2^*\langle\beta|\phi\rangle$$

**1.3.4 Norma y Completitud**
La norma de un vector inducida por el producto interno es $\|\psi\| = \sqrt{\langle\psi|\psi\rangle}$. 
La **completitud** significa que toda sucesión de Cauchy en el espacio converge a un elemento dentro del mismo espacio, garantizando que los límites están bien definidos.

### 1.4 Interpretación Física del Resultado
El ket $|\psi\rangle$ contiene *toda* la información accesible sobre el estado del sistema. El producto interno $\langle\phi|\psi\rangle$ es la "amplitud de probabilidad". La probabilidad de encontrar al sistema, preparado inicialmente en el estado $|\psi\rangle$, en el estado $|\phi\rangle$ al realizar una medición está dada por la regla de Born:
$$P = |\langle\phi|\psi\rangle|^2$$

### 1.5 Límites y Casos Especiales
**Espacios de dimensión finita:** Como en el caso del espín del electrón. El espacio de Hilbert para un espín 1/2 es de dimensión 2 (isomorfo a $\mathbb{C}^2$).
**Espacios de dimensión infinita:** Para el movimiento de una partícula, el espacio de Hilbert es de dimensión infinita continua ($L^2(\mathbb{R})$). Aquí, una base ortonormal es $\{|x\rangle\}$, donde $\langle x'|x\rangle = \delta(x-x')$, la delta de Dirac, que es una generalización de la delta de Kronecker a variables continuas.

## 2. Operadores Lineales y Hermíticos

*Fuente primaria: Griffiths, Introduction to Quantum Mechanics, Cap. 3.*
*Fuente complementaria: Sakurai, Modern Quantum Mechanics, Cap. 1.*

### 2.1 Motivación y Contexto Histórico
En la mecánica clásica, los observables como energía, posición y momento son funciones reales de las coordenadas de fase $(q, p)$. En cuántica, estas variables pasan a ser **operadores lineales**. Para que los resultados de las mediciones, que físicamente deben ser números reales, tengan sentido, se postula que los operadores que representan observables físicos deben ser **hermíticos**.

### 2.2 Desarrollo Conceptual
Un operador $\hat{A}$ transforma un ket $|\psi\rangle$ en otro ket $|\phi\rangle = \hat{A}|\psi\rangle$. Un operador es **lineal** si obedece:
$$\hat{A}(c_1|\alpha\rangle + c_2|\beta\rangle) = c_1\hat{A}|\alpha\rangle + c_2\hat{A}|\beta\rangle$$

El **adjunto hermitiano** (o simplemente adjunto) $\hat{A}^\dagger$ de un operador $\hat{A}$ se define mediante la relación:
$$\langle\phi|\hat{A}|\psi\rangle = \langle\psi|\hat{A}^\dagger|\phi\rangle^*$$

### 2.3 Derivación Matemática Completa

Un operador es **hermítico** (o autoadjunto) si $\hat{A}^\dagger = \hat{A}$. Por tanto, para un operador hermítico:
$$\langle\phi|\hat{A}|\psi\rangle = \langle\psi|\hat{A}|\phi\rangle^*$$

**2.3.1 Teorema Espectral y Ecuación de Valores Propios**
Para un operador lineal $\hat{A}$, su acción sobre ciertos vectores especiales produce el mismo vector multiplicado por un escalar. Esta es la ecuación de valores propios:
$$\hat{A}|a_n\rangle = a_n|a_n\rangle$$
Donde $a_n$ es el valor propio (eigenvalor) y $|a_n\rangle$ el vector propio (eigenvector).

**Teorema 1: Los valores propios de un operador hermítico son reales.**
*Demostración:*
Partimos de la ecuación de valores propios:
$$\hat{A}|a\rangle = a|a\rangle$$
Multiplicamos por el bra $\langle a|$ por la izquierda:
$$\langle a|\hat{A}|a\rangle = a\langle a|a\rangle$$
Tomamos el complejo conjugado de ambos lados:
$$\langle a|\hat{A}|a\rangle^* = a^*\langle a|a\rangle^*$$
Usando las propiedades del producto interno, $\langle a|a\rangle^* = \langle a|a\rangle$. Para el lado izquierdo:
$$\langle a|\hat{A}|a\rangle^* = \langle a|\hat{A}^\dagger|a\rangle = \langle a|\hat{A}|a\rangle$$
(ya que $\hat{A}$ es hermítico, $\hat{A}^\dagger = \hat{A}$).
Igualando:
$$a\langle a|a\rangle = a^*\langle a|a\rangle$$
Como $|a\rangle$ no es el vector nulo, $\langle a|a\rangle \neq 0$. Dividiendo, obtenemos:
$$a = a^*$$
Lo que demuestra que $a$ es real.

**Teorema 2: Los vectores propios de un operador hermítico correspondientes a distintos valores propios son ortogonales.**
*Demostración:*
Sean $|a_1\rangle$ y $|a_2\rangle$ vectores propios con valores propios distintos $a_1 \neq a_2$:
$$\hat{A}|a_1\rangle = a_1|a_1\rangle \quad \text{(1)}$$
$$\hat{A}|a_2\rangle = a_2|a_2\rangle \quad \text{(2)}$$
Tomamos el conjugado hermitiano de (1):
$$\langle a_1|\hat{A}^\dagger = a_1^*\langle a_1|$$
Dado que $\hat{A}^\dagger = \hat{A}$ y $a_1^* = a_1$ (son reales):
$$\langle a_1|\hat{A} = a_1\langle a_1| \quad \text{(3)}$$
Multiplicamos (2) por $\langle a_1|$ a la izquierda:
$$\langle a_1|\hat{A}|a_2\rangle = a_2\langle a_1|a_2\rangle \quad \text{(4)}$$
Multiplicamos (3) por $|a_2\rangle$ a la derecha:
$$\langle a_1|\hat{A}|a_2\rangle = a_1\langle a_1|a_2\rangle \quad \text{(5)}$$
Restando (5) de (4):
$$0 = (a_2 - a_1)\langle a_1|a_2\rangle$$
Dado que asumimos $a_1 \neq a_2$, necesariamente debe cumplirse que:
$$\langle a_1|a_2\rangle = 0$$
Por lo tanto, son ortogonales.

### 2.4 Interpretación Física del Resultado
- La realidad de los valores propios garantiza que si medimos una cantidad física (energía, posición, etc.), el resultado será un número real (como vemos en el laboratorio).
- La ortogonalidad (y subsecuente capacidad de formar una base ortonormal, por el Teorema Espectral) implica que el espacio de Hilbert completo puede ser abarcado por los estados propios de un observable, lo que permite expandir cualquier estado arbitrario como superposición de estados propios.

## 3. Relaciones de Conmutación y Principio de Incertidumbre

*Fuente primaria: Sakurai, cap. 1, §1.4. Griffiths, cap. 3, §3.5.*

### 3.1 Motivación y Contexto Histórico
El principio de incertidumbre de Heisenberg (1927) estableció que no se pueden conocer simultáneamente, con precisión infinita, variables conjugadas como la posición y el momento. La demostración rigurosa moderna (debida a H.P. Robertson en 1929) muestra que esto no es una limitación tecnológica, sino una consecuencia directa del álgebra no conmutativa de los operadores hermíticos en espacios de Hilbert.

### 3.2 Desarrollo Conceptual
El **conmutador** de dos operadores $\hat{A}$ y $\hat{B}$ se define como:
$$[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$$
Si $[\hat{A}, \hat{B}] = 0$, los operadores conmutan. Si no conmutan, el orden en el que se aplican (o se miden físicamente) importa, y existe un límite fundamental a la precisión con la que se pueden determinar simultáneamente.

### 3.3 Derivación Matemática Completa de la Desigualdad de Robertson

Sea un estado cuántico $|\psi\rangle$. La desviación estándar (incertidumbre) $\Delta A$ de un observable $\hat{A}$ se define como:
$$(\Delta A)^2 = \langle\psi|(\hat{A} - \langle\hat{A}\rangle)^2|\psi\rangle$$
donde $\langle\hat{A}\rangle = \langle\psi|\hat{A}|\psi\rangle$ es el valor esperado.

Definimos los operadores desviaciones, que también son hermíticos:
$$\delta\hat{A} = \hat{A} - \langle\hat{A}\rangle, \quad \delta\hat{B} = \hat{B} - \langle\hat{B}\rangle$$
Notemos que $[\delta\hat{A}, \delta\hat{B}] = [\hat{A}, \hat{B}]$, ya que los valores esperados son números constantes que conmutan con todo.

Consideremos los kets:
$$|f\rangle = \delta\hat{A}|\psi\rangle, \quad |g\rangle = \delta\hat{B}|\psi\rangle$$
Entonces:
$$\langle f|f\rangle = \langle\psi|\delta\hat{A}^\dagger \delta\hat{A}|\psi\rangle = \langle\psi|(\delta\hat{A})^2|\psi\rangle = (\Delta A)^2$$
Análogamente, $\langle g|g\rangle = (\Delta B)^2$.

Por la **Desigualdad de Cauchy-Schwarz** para vectores en un espacio de Hilbert:
$$\langle f|f\rangle\langle g|g\rangle \geq |\langle f|g\rangle|^2$$
Es decir:
$$(\Delta A)^2(\Delta B)^2 \geq |\langle\psi|\delta\hat{A}\delta\hat{B}|\psi\rangle|^2$$

Ahora, analicemos el término $\delta\hat{A}\delta\hat{B}$. Todo operador producto puede escribirse como la suma de su parte hermítica y su parte antihermítica:
$$\delta\hat{A}\delta\hat{B} = \frac{1}{2}\{\delta\hat{A}, \delta\hat{B}\} + \frac{1}{2}[\delta\hat{A}, \delta\hat{B}]$$
Donde $\{\hat{X}, \hat{Y}\} = \hat{X}\hat{Y} + \hat{Y}\hat{X}$ es el anticonmutador.

Calculando el valor esperado:
$$\langle\delta\hat{A}\delta\hat{B}\rangle = \frac{1}{2}\langle\{\delta\hat{A}, \delta\hat{B}\}\rangle + \frac{1}{2}\langle[\delta\hat{A}, \delta\hat{B}]\rangle$$

El primer término es puramente real (pues es el valor esperado de un operador hermítico), y el segundo término es puramente imaginario (pues el conmutador de dos operadores hermíticos es antihermítico).
El módulo cuadrado de un número complejo $z = x + iy$ es $|z|^2 = x^2 + y^2 \geq y^2$. Por tanto:
$$|\langle\delta\hat{A}\delta\hat{B}\rangle|^2 \geq \left| \frac{1}{2} \langle[\delta\hat{A}, \delta\hat{B}]\rangle \right|^2$$

Como $[\delta\hat{A}, \delta\hat{B}] = [\hat{A}, \hat{B}]$, sustituimos en Cauchy-Schwarz:
$$(\Delta A)^2(\Delta B)^2 \geq \left( \frac{1}{2i} \langle[\hat{A}, \hat{B}]\rangle \right)^2$$
Tomando la raíz cuadrada obtenemos la forma final generalizada de la relación de incertidumbre de Robertson:
$$\Delta A \cdot \Delta B \geq \frac{1}{2} |\langle [\hat{A}, \hat{B}] \rangle|$$

### 3.4 Interpretación Física del Resultado
El principio de incertidumbre, como fue derivado matemáticamente, establece que para cualquier par de observables que no conmuten ($[\hat{A}, \hat{B}] \neq 0$), es inherentemente imposible preparar un estado cuántico en el cual las incertidumbres para ambos observables sean nulas simultáneamente. No es que nuestra medición empuje al sistema a un estado alterado; la naturaleza misma del vector de estado en el espacio de Hilbert impide que existan estados (eigenvectores) simultáneos y perfectamente definidos para observables no conmutativos.

### 3.5 Ejemplos Canónicos y Límites

**1. Posición y Momento:**
La relación de conmutación canónica es:
$$[\hat{x}, \hat{p}] = i\hbar \hat{I}$$
Sustituyendo esto en la desigualdad de Robertson:
$$\Delta x \cdot \Delta p \geq \frac{1}{2} | \langle i\hbar \rangle | = \frac{\hbar}{2}$$
Esta es la célebre forma original del principio de incertidumbre de Heisenberg.

**2. Momento Angular:**
Para las componentes del operador momento angular $\hat{L}$:
$$[\hat{L}_i, \hat{L}_j] = i\hbar\epsilon_{ijk}\hat{L}_k$$
Esto nos dice que no es posible conocer simultáneamente más de una componente del momento angular de una partícula.

## Conclusiones Académicas

1. **Rigor Fundamental:** El modelo matemático del Espacio de Hilbert no es un adorno para la física cuántica; constituye la gramática misma con la que opera la naturaleza microscópica. El abandono del determinismo de la trayectoria clásica y su reemplazo por kets y probabilidades está intrínsecamente ligado a la estructura de espacios vectoriales lineales.
2. **Naturaleza de los Observables:** La realidad de la física exige valores propios reales, lo que impone hermiticidad a los operadores. A su vez, el Teorema Espectral da la base para la expansión de cualquier estado, lo que justifica matemáticamente el principio de superposición cuántica.
3. **El Origen del Principio de Incertidumbre:** Lejos de ser un axioma o una heurística empírica, la incertidumbre emana pura y lógicamente de la geometría de los espacios de Hilbert (desigualdad de Cauchy-Schwarz) y del álgebra de los operadores (relaciones de conmutación no nulas).

## Referencias Bibliográficas
### 1. Artículos científicos originales
- Robertson, H. P. (1929). "The Uncertainty Principle", *Physical Review*, 34(1), 163–164.
- Dirac, P. A. M. (1939). "A New Notation for Quantum Mechanics", *Mathematical Proceedings of the Cambridge Philosophical Society*.
### 2. Textos del curso
- Diapositivas: Clase 2_HERRAMIENTAS MATEMATICAS 1.
- Documento: "Mecánica Cuántica para Principiantes".
- Documento: "50 Temas Fascinantes de la Física Cuántica".
### 3. Textos universitarios estándar
- Sakurai, J. J., & Napolitano, J. (2010). *Modern Quantum Mechanics*. Addison-Wesley.
- Griffiths, D. J. (2005). *Introduction to Quantum Mechanics*. Pearson Prentice Hall.
- Cohen-Tannoudji, C., Diu, B., & Laloë, F. (1977). *Quantum Mechanics*. Wiley.
