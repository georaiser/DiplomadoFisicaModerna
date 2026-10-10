# Módulo 04 — Mecánica Cuántica | Clase 03

| Campo | Valor |
|---|---|
| **Módulo** | 04 — Mecánica Cuántica |
| **Clase** | 03 |
| **Docente** | Prof. Esteban Sepúlveda |
| **Fecha** | 11 sep 2026 |
| **Temas** | Momentum Angular Cuántico · Conmutadores · Operadores Escalera · Cuantización algebraica · Armónicos Esféricos · Orbitales Atómicos |

**Fuentes:**
1. `Clase del Diplomado de Física Moderna.docx` — transcripción grabación 11 sep 2026
2. `Clase 3.pdf` — diapositivas (45 páginas)
3. `Pizarra Clase 3.pdf` — pizarra (7 páginas)
4. Griffiths, *Introduction to Quantum Mechanics*, cap. 4
5. Sakurai, *Modern Quantum Mechanics*, cap. 3
6. Cohen-Tannoudji, *Mécanique Quantique*, cap. VI
7. Gasiorowicz, *Quantum Physics*, cap. 11

---

## Introducción

La Clase 03 aborda el **momentum angular cuántico**, uno de los pilares de la física moderna. El Prof. Sepúlveda parte desde la intuición clásica (trompo, patinadora, Tierra) y deriva rigurosamente la estructura algebraica completa: relaciones de conmutación, operadores escalera, cuantización del espectro y representación en coordenadas esféricas. El resultado son los armónicos esféricos $Y_l^m$, que determinan la geometría de los orbitales atómicos.

---

## 1. Motivación Clásica y Cuantización del Concepto

### 1.1 Momentum Angular Clásico

$$\vec{L} = \vec{r} \times \vec{p}$$

El Prof. Sepúlveda usa tres ejemplos concretos de la clase:
- **Trompo:** gira conservando $\vec{L}$
- **Patinadora:** al contraerse $I$ disminuye, $\omega$ aumenta ($L = I\omega$ constante)
- **Rueda de bicicleta:** al invertir la rueda, la plataforma gira para conservar $L_\text{total}$

**Conservación:** En potenciales centrales $\vec{F}(r) = f(r)\hat{r}$, el torque es $\vec{\tau} = \vec{r} \times \vec{F} = 0$ (vectores paralelos), por lo que $d\vec{L}/dt = 0$.

**Conexión con simetría (Teorema de Noether):** La conservación del momentum angular corresponde a la invarianza ante rotaciones (simetría rotacional del espacio).

### 1.2 El Problema de Cuantizar el Momentum Angular

En mecánica cuántica, el electrón no tiene trayectoria definida, por lo que la noción clásica de "orbitar" es incorrecta. Sin embargo, el **operador** momentum angular sí tiene significado: representa el generador de rotaciones del espacio físico.

La cuantización consiste en promover $\vec{r}$ y $\vec{p}$ a operadores hermíticos:

$$\hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}}, \qquad \hat{\vec{p}} = -i\hbar\nabla$$

Las componentes cartesianas:
$$\hat{L}_x = \hat{Y}\hat{P}_z - \hat{Z}\hat{P}_y = -i\hbar\left(y\frac{\partial}{\partial z}-z\frac{\partial}{\partial y}\right)$$
$$\hat{L}_y = \hat{Z}\hat{P}_x - \hat{X}\hat{P}_z = -i\hbar\left(z\frac{\partial}{\partial x}-x\frac{\partial}{\partial z}\right)$$
$$\hat{L}_z = \hat{X}\hat{P}_y - \hat{Y}\hat{P}_x = -i\hbar\left(x\frac{\partial}{\partial y}-y\frac{\partial}{\partial x}\right)$$

---

## 2. Álgebra de Conmutadores del Momentum Angular

### 2.1 Las Rotaciones No Conmutan

El Prof. Sepúlveda demuestra con una tablet: rotar 90° en X luego en Y da resultado diferente que Y luego X. Las rotaciones no conmutan → los operadores de momento angular tampoco.

### 2.2 Derivación de $[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z$

Usando la relación canónica $[\hat{x}_i, \hat{p}_j] = i\hbar\delta_{ij}$ (derivada en la clase anterior):

$$[\hat{L}_x, \hat{L}_y] = [\hat{Y}\hat{P}_z - \hat{Z}\hat{P}_y,\; \hat{Z}\hat{P}_x - \hat{X}\hat{P}_z]$$

Expandiendo (el PDF, pág. 10, muestra los 4 conmutadores; solo sobrevive el que involucra $[\hat{P}_z, \hat{Z}] \neq 0$):

$$= \hat{Y}[\hat{P}_z, \hat{Z}]\hat{P}_x + \hat{X}[\hat{Z}, \hat{P}_z]\hat{P}_y = \hat{Y}(-i\hbar)\hat{P}_x + \hat{X}(i\hbar)\hat{P}_y = i\hbar(\hat{X}\hat{P}_y - \hat{Y}\hat{P}_x) = i\hbar\hat{L}_z$$

Por permutación cíclica $x \to y \to z \to x$:

$$\boxed{[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z, \qquad [\hat{L}_y, \hat{L}_z] = i\hbar\hat{L}_x, \qquad [\hat{L}_z, \hat{L}_x] = i\hbar\hat{L}_y}$$

**El conmutador $[\hat{L}_y, \hat{L}_x]$:** El alumno Andrés pregunta; el Prof. responde: $[\hat{L}_y, \hat{L}_x] = -i\hbar\hat{L}_z$ (cambio de signo: propiedad antisimétrica del conmutador).

**Implicación física:** No se pueden medir $L_x$, $L_y$ y $L_z$ simultáneamente.

### 2.3 $\hat{L}^2$ como Operador Escalar

$\hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2$ es la "magnitud al cuadrado" del vector, análoga al teorema de Pitágoras en 3D (analogía del Prof.). Es un **operador escalar** (sin dirección), invariante ante rotaciones.

Usando la identidad $[A^2, B] = A[A,B] + [A,B]A$:

$$[\hat{L}^2, \hat{L}_z] = [\hat{L}_x^2, \hat{L}_z] + [\hat{L}_y^2, \hat{L}_z] + 0$$

$$= \hat{L}_x[\hat{L}_x, \hat{L}_z] + [\hat{L}_x, \hat{L}_z]\hat{L}_x + \hat{L}_y[\hat{L}_y, \hat{L}_z] + [\hat{L}_y, \hat{L}_z]\hat{L}_y$$

$$= \hat{L}_x(-i\hbar\hat{L}_y) + (-i\hbar\hat{L}_y)\hat{L}_x + \hat{L}_y(i\hbar\hat{L}_x) + (i\hbar\hat{L}_x)\hat{L}_y = 0$$

Por lo tanto:
$$[\hat{L}^2, \hat{L}_x] = [\hat{L}^2, \hat{L}_y] = [\hat{L}^2, \hat{L}_z] = 0$$

**CCOC elegido:** $\{\hat{L}^2, \hat{L}_z\}$. Sus autoestados simultáneos:

$$\hat{L}^2|\alpha,\beta\rangle = \hbar^2\alpha|\alpha,\beta\rangle, \qquad \hat{L}_z|\alpha,\beta\rangle = \hbar\beta|\alpha,\beta\rangle$$

---

## 3. Operadores Escalera y Cuantización Algebraica

### 3.1 Definición y Conmutadores

El Prof. Sepúlveda define (pizarra y PDF pág. 15):

$$\hat{L}_+ = \hat{L}_x + i\hat{L}_y \quad (\text{subida}), \qquad \hat{L}_- = \hat{L}_x - i\hat{L}_y \quad (\text{bajada})$$

Conmutadores clave (PDF pág. 16):
$$[\hat{L}_z, \hat{L}_+] = \hbar\hat{L}_+, \qquad [\hat{L}_z, \hat{L}_-] = -\hbar\hat{L}_-, \qquad [\hat{L}^2, \hat{L}_\pm] = 0$$
$$[\hat{L}_+, \hat{L}_-] = 2\hbar\hat{L}_z$$

Relaciones útiles para reescribir $\hat{L}^2$:
$$\hat{L}^2 = \hat{L}_+\hat{L}_- + \hat{L}_z^2 - \hbar\hat{L}_z = \hat{L}_-\hat{L}_+ + \hat{L}_z^2 + \hbar\hat{L}_z$$

### 3.2 Acción sobre los Autoestados (derivación completa de la clase)

El Prof. Sepúlveda demuestra en pizarra (pág. 4 de la pizarra + PDF págs. 17-18):

$$\hat{L}_z\bigl(\hat{L}_+|\alpha,\beta\rangle\bigr) = \bigl(\hat{L}_+\hat{L}_z + [\hat{L}_z,\hat{L}_+]\bigr)|\alpha,\beta\rangle = \hat{L}_+(\hbar\beta|\alpha,\beta\rangle) + \hbar\hat{L}_+|\alpha,\beta\rangle = \hbar(\beta+1)\bigl(\hat{L}_+|\alpha,\beta\rangle\bigr)$$

$\hat{L}_+|\alpha,\beta\rangle$ es **autoestado de $\hat{L}_z$** con autovalor $\hbar(\beta+1)$.

Del mismo modo $\hat{L}_-|\alpha,\beta\rangle$ tiene autovalor $\hbar(\beta-1)$.

Como $[\hat{L}^2, \hat{L}_\pm] = 0$, el valor de $\alpha$ **no cambia**. Toda la "escalera" comparte el mismo $\alpha$.

### 3.3 Truncamiento de la Escalera → Cuantización

**Cota superior** (PDF pág. 20): Como $\hat{L}_x^2 + \hat{L}_y^2 \geq 0$:

$$\langle\alpha,\beta|\hat{L}^2 - \hat{L}_z^2|\alpha,\beta\rangle \geq 0 \implies \hbar^2\alpha - \hbar^2\beta^2 \geq 0 \implies \alpha \geq \beta^2$$

Existe $\beta_\text{max}$ tal que $\hat{L}_+|\alpha,\beta_\text{max}\rangle = 0$. Aplicando $\hat{L}_-$ a ambos lados:

$$\hat{L}_-\hat{L}_+|\alpha,\beta_\text{max}\rangle = (\hat{L}^2 - \hat{L}_z^2 - \hbar\hat{L}_z)|\alpha,\beta_\text{max}\rangle = (\hbar^2\alpha - \hbar^2\beta_\text{max}^2 - \hbar^2\beta_\text{max})|\alpha,\beta_\text{max}\rangle = 0$$

$$\Rightarrow \alpha = \beta_\text{max}(\beta_\text{max}+1)$$

**Cota inferior** (PDF pág. 22): Por simetría, existe $\beta_\text{min}$ con $\hat{L}_-|\alpha,\beta_\text{min}\rangle = 0$, lo que da $\alpha = \beta_\text{min}(\beta_\text{min}-1)$.

Igualando: $\beta_\text{max} = -\beta_\text{min}$.

**Cuantización** (PDF pág. 23): Desde $\beta_\text{min}$ hasta $\beta_\text{max}$ hay $n$ pasos enteros de 1:

$$\beta_\text{max} = \beta_\text{min} + n \implies 2\beta_\text{max} = n \implies \beta_\text{max} = \frac{n}{2},\quad n = 0,1,2,3,\dots$$

Renombrando $\beta_\text{max} \to l$ y $\beta \to m$ (PDF pág. 24):

$$\boxed{\hat{L}^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle}, \quad l = 0,\tfrac{1}{2},1,\tfrac{3}{2},\dots$$
$$\boxed{\hat{L}_z|l,m\rangle = \hbar m|l,m\rangle}, \quad m = -l,-l+1,\dots,l-1,l$$

**Magnitud:** $|\vec{L}| = \sqrt{l(l+1)}\,\hbar$. Hay $2l+1$ orientaciones posibles.

El Prof. destaca: los valores semienteros ($l = 1/2, 3/2, \dots$) no provienen de la cuantización de la coordenada espacial, sino del álgebra de conmutadores → corresponden al **espín**.

### 3.4 Coeficientes Exactos de los Operadores Escalera

Normalizando $\hat{L}_\pm|l,m\rangle = C_\pm|l,m\pm 1\rangle$ y usando $\hat{L}_\mp\hat{L}_\pm = \hat{L}^2 - \hat{L}_z^2 \mp \hbar\hat{L}_z$:

$$|C_\pm|^2 = \hbar^2[l(l+1) - m(m\pm 1)]$$

$$\boxed{\hat{L}_\pm|l,m\rangle = \hbar\sqrt{l(l+1)-m(m\pm 1)}\;|l,m\pm 1\rangle}$$

---

## 4. Representación Matricial para $l=1$

Con $l=1$, la base es $\{|1,1\rangle, |1,0\rangle, |1,-1\rangle\}$ (PDF págs. 28-30):

$$\hat{L}^2 = 2\hbar^2\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}, \qquad \hat{L}_z = \hbar\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}$$

$$\hat{L}_+ = \hbar\sqrt{2}\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}, \qquad \hat{L}_- = \hbar\sqrt{2}\begin{pmatrix}0&0&0\\1&0&0\\0&1&0\end{pmatrix}$$

$$\hat{L}_x = \frac{\hat{L}_++\hat{L}_-}{2} = \frac{\hbar}{\sqrt{2}}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}, \qquad \hat{L}_y = \frac{\hat{L}_+-\hat{L}_-}{2i} = \frac{\hbar}{\sqrt{2}}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix}$$

**Verificación (PDF pág. 30):** La multiplicación matricial de $\hat{L}_x \cdot \hat{L}_y - \hat{L}_y \cdot \hat{L}_x = i\hbar\hat{L}_z$ confirma el álgebra de conmutadores.

---

## 5. Armónicos Esféricos como Autofunciones Espaciales

### 5.1 Aparición al Separar Variables (PDF pág. 32)

En coordenadas esféricas, el laplaciano en 3D se escribe:

$$\nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right) - \frac{\hat{L}^2}{\hbar^2 r^2}$$

La parte angular queda íntegramente contenida en $\hat{L}^2$. Los operadores en coordenadas esféricas son:

$$\hat{L}_z = -i\hbar\frac{\partial}{\partial\phi}, \qquad \hat{L}^2 = -\hbar^2\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]$$

### 5.2 Separación de Variables: parte $\phi$ (PDF pág. 35)

$$\hat{L}_z Y_l^m = \hbar m Y_l^m \implies -i\hbar\frac{\partial\Phi_m}{\partial\phi} = \hbar m\Phi_m \implies \Phi_m(\phi) = \frac{1}{\sqrt{2\pi}}e^{im\phi}$$

Condición de univaluación: $\Phi_m(\phi+2\pi) = \Phi_m(\phi) \Rightarrow e^{2\pi im} = 1 \Rightarrow$ **$m$ entero** → $l$ entero para momento orbital espacial.

### 5.3 Parte $\theta$: Ecuación de Legendre (PDF pág. 36-37)

Sustituyendo en la ecuación de $\hat{L}^2$, la parte en $\theta$ satisface la **ecuación diferencial asociada de Legendre**:

$$\frac{d}{d(\cos\theta)}\left[(1-\cos^2\theta)\frac{d\Theta}{d(\cos\theta)}\right] + \left[l(l+1) - \frac{m^2}{1-\cos^2\theta}\right]\Theta = 0$$

Soluciones: $\Theta_{lm}(\theta) = C_{lm}P_l^m(\cos\theta)$

Polinomios de Legendre $P_l(x)$ (PDF pág. 37):

| $l$ | $P_l(x)$ |
|---|---|
| 0 | $1$ |
| 1 | $x$ |
| 2 | $\frac{1}{2}(3x^2-1)$ |
| 3 | $\frac{1}{2}(5x^3-3x)$ |

Funciones asociadas $P_l^m(x)$: $P_1^1(x) = \sqrt{1-x^2}$, $P_2^1(x) = 3x\sqrt{1-x^2}$, $P_2^2(x) = 3(1-x^2)$

### 5.4 Resultado Final: Armónicos Esféricos (PDF pág. 38)

$$\boxed{Y_l^m(\theta,\phi) = C_{lm}\,P_l^m(\cos\theta)\,e^{im\phi}}$$

Tabla de los primeros armónicos esféricos:

| $l$ | $m$ | $Y_l^m(\theta,\phi)$ |
|:---:|:---:|:---:|
| 0 | 0 | $\dfrac{1}{\sqrt{4\pi}}$ |
| 1 | 0 | $\sqrt{\dfrac{3}{4\pi}}\cos\theta$ |
| 1 | $\pm 1$ | $\mp\sqrt{\dfrac{3}{8\pi}}\sin\theta\,e^{\pm i\phi}$ |
| 2 | 0 | $\sqrt{\dfrac{5}{16\pi}}(3\cos^2\theta-1)$ |
| 2 | $\pm 1$ | $\mp\sqrt{\dfrac{15}{8\pi}}\sin\theta\cos\theta\,e^{\pm i\phi}$ |
| 2 | $\pm 2$ | $\sqrt{\dfrac{15}{32\pi}}\sin^2\theta\,e^{\pm 2i\phi}$ |

**Conexión con los orbitales (PDF pág. 39):** Con $\cos\theta = z/r$ y $\sin\theta\,e^{\pm i\phi} = (x \pm iy)/r$:
- $Y_1^0 \propto z/r$ → orbital $2p_z$
- Combinaciones reales: $Y_1^{+1} + Y_1^{-1} \propto x/r$ → $2p_x$
- $i(Y_1^{+1} - Y_1^{-1}) \propto y/r$ → $2p_y$

---

## 6. Orbitales Atómicos y Números Cuánticos

### 6.1 La Analogía del Edificio (Prof. Sepúlveda, PDF págs. 40-42)

La función de onda completa del átomo de hidrógeno: $\psi_{nlm}(r,\theta,\phi) = R_{nl}(r)\,Y_l^m(\theta,\phi)$

| N° cuántico | Analogía | Valores | Determina |
|---|---|---|---|
| $n$ (principal) | Piso | $1,2,3,\dots$ | Energía: $E_n \propto -1/n^2$ |
| $l$ (azimutal) | Diseño de suite | $0,1,\dots,n-1$ | Forma: $s,p,d,f$ |
| $m_l$ (magnético) | Orientación suite | $-l,\dots,l$ | Orientación espacial |
| $m_s$ (espín) | Lateralidad inquilino | $\pm\tfrac{1}{2}$ | Espín |

**Regla clave (la más olvidada, PDF pág. 42):** $l \leq n-1$

### 6.2 Ejemplos Numéricos del PDF

**Ejemplo 1 (PDF pág. 44):** ¿Cuántos electrones caben en el piso $n=3$?
1. Para cada $n$, el número de combinaciones $(l,m_l)$ es $n^2$
2. Cada combinación admite 2 electrones ($m_s = \pm\frac{1}{2}$)
3. Total: $2n^2 = 2 \times 9 = \mathbf{18}$ electrones

**Ejemplo 2 (PDF pág. 45):** ¿Por qué el estado $(n=2, l=2, m_l=0)$ es imposible?
- Regla: $l \leq n-1 = 1$
- $l=2$ viola la restricción → estado prohibido

---

## 7. Relación de Conmutación Canónica (Pizarra)

El Prof. Sepúlveda deriva en pizarra el conmutador $[\hat{x}, \hat{p}_x] = i\hbar$, actuando sobre una función de prueba $\psi(x)$:

$$[\hat{x},\hat{p}_x]\psi = x(-i\hbar\partial_x\psi) - (-i\hbar)\partial_x(x\psi) = -i\hbar x\psi' + i\hbar(\psi + x\psi') = i\hbar\psi$$

$$\boxed{[\hat{x}, \hat{p}_x] = i\hbar} \quad \text{(relación de conmutación canónica)}$$

Esta es la relación fundamental de la que derivan todas las demás en mecánica cuántica.

---

## Conclusiones de la Clase

1. Las rotaciones no conmutan (experimento de la tablet) → el momento angular cuántico tampoco.
2. La relación de conmutación canónica $[\hat{x},\hat{p}] = i\hbar$ genera toda la álgebra del momento angular.
3. $\hat{L}^2$ y $\hat{L}_z$ forman el CCOC; sus autoestados $|l,m\rangle$ son los estados del sistema con momento angular definido.
4. Los operadores escalera $\hat{L}_\pm$ permiten construir todo el espectro **sin resolver ecuaciones diferenciales**: puro álgebra de operadores.
5. La finitud de la escalera (argumento de positividad de norma) obliga a $l = 0,\frac{1}{2},1,\ldots$ y $m = -l,\ldots,l$ — **la cuantización emerge, no se postula**.
6. Los valores semienteros corresponden al espín, los enteros al momento orbital espacial.
7. Los armónicos esféricos $Y_l^m$ dan forma geométrica concreta a los orbitales atómicos.
8. Cuatro números cuánticos más el Principio de Pauli explican la tabla periódica.

---

## Referencias Bibliográficas

### 1. Fuentes directas de la clase
- `Clase del Diplomado de Física Moderna.docx` — transcripción 11 sep 2026
- `Clase 3.pdf` — diapositivas Prof. Esteban Sepúlveda (45 págs.)
- `Pizarra Clase 3.pdf` — pizarra de la clase (7 págs.)

### 2. Textos universitarios estándar
- Griffiths, D.J. *Introduction to Quantum Mechanics*, 2ª ed., cap. 4 (§4.3 momentum angular).
- Sakurai, J.J. *Modern Quantum Mechanics* (Revised Ed.), cap. 3 (§3.1-3.4 teoría del momento angular).
- Cohen-Tannoudji, C. *Mécanique Quantique*, vol. 1, cap. VI (momento angular orbital).
- Gasiorowicz, S. *Quantum Physics*, 3ª ed., cap. 11 (orbitales atómicos).

### 3. Recursos verificados de libre acceso
- Feynman, R.P. *The Feynman Lectures on Physics*, Vol. III, cap. 18-19. (feynmanlectures.caltech.edu)