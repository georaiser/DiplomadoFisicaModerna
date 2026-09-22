## Análisis Extendido — Clase 03: Momentum Angular Cuántico y Estructura Atómica

**Docente:** Esteban Sepúlveda
**Fecha:** 11 sep 2026
**Módulo:** 04 — Mecánica Cuántica | Diplomado en Física Moderna
**Fuentes utilizadas:** 
1. Clase del Diplomado de Física Moderna.docx (transcripción)
2. Clase 3.pdf (diapositivas principales)
3. Pizarra Clase 3.pdf (pizarra de la clase)
4. mecanica-cuantica-para-principiantes.pdf
5. 50-temas-fascinantes-de-la-fisica-cuantica.pdf
**Propósito:** Documento de estudio profundo y autocontenido. Sin restricción de extensión.

---

## Introducción General de la Clase

La tercera clase del módulo de Mecánica Cuántica se centra en uno de los conceptos más importantes y profundos de la física moderna: el momento angular cuántico. A diferencia de la mecánica clásica, donde el momento angular de un sistema puede tomar cualquier valor continuo, en el régimen cuántico esta magnitud está estrictamente cuantizada. El estudio algebraico del momento angular nos permite no solo comprender las rotaciones espaciales en mecánica cuántica, sino que también sienta las bases para entender el espín (momento angular intrínseco), la estructura de los átomos poli-electrónicos, la formación de enlaces químicos y toda la tabla periódica.

A lo largo de este documento, derivaremos desde primeros principios (las relaciones de conmutación) la cuantización del momento angular, construiremos explícitamente sus representaciones espaciales (los armónicos esféricos) y aplicaremos estos conceptos para describir los orbitales atómicos. 

---

## 1. Momentum Angular Cuántico como Generador de Rotaciones

*Fuente primaria: Sakurai, cap. 3, §3.1-3.2. Fuente complementaria: Griffiths, cap. 4, §4.3.*

### 1.1 Motivación y Contexto Histórico
Históricamente, el modelo de Bohr postulaba ad-hoc que el momento angular del electrón en el átomo de hidrógeno estaba cuantizado en múltiplos de $\hbar$. Esta suposición fue crucial para explicar las líneas espectrales, pero carecía de una base fundamental. Con el desarrollo de la mecánica matricial por Heisenberg y la mecánica ondulatoria por Schrödinger (1925-1926), se comprendió que el momento angular es el generador de las rotaciones espaciales y, debido a las relaciones de conmutación canónicas entre la posición y el momento, su cuantización surge naturalmente y de forma rigurosa.

### 1.2 Desarrollo Conceptual
Clásicamente, el momento angular orbital $\vec{L}$ de una partícula respecto a un origen se define como el producto cruz entre su vector posición $\vec{r}$ y su vector momento lineal $\vec{p}$:
$$ \vec{L} = \vec{r} \times \vec{p} $$
En mecánica cuántica, promovemos los observables $\vec{r}$ y $\vec{p}$ a operadores Hermíticos que actúan sobre el espacio de Hilbert del sistema:
$$ \hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}} $$
Usando la representación de posición, donde $\hat{\vec{r}} = \vec{r}$ y $\hat{\vec{p}} = -i\hbar\nabla$, obtenemos las componentes cartesianas del operador momento angular:
$$ \hat{L}_x = \hat{y}\hat{p}_z - \hat{z}\hat{p}_y = -i\hbar \left( y \frac{\partial}{\partial z} - z \frac{\partial}{\partial y} \right) $$
$$ \hat{L}_y = \hat{z}\hat{p}_x - \hat{x}\hat{p}_z = -i\hbar \left( z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right) $$
$$ \hat{L}_z = \hat{x}\hat{p}_y - \hat{y}\hat{p}_x = -i\hbar \left( x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x} \right) $$

### 1.3 Derivación Matemática de las Relaciones de Conmutación
Para entender la estructura algebraica del momento angular, calcularemos el conmutador entre sus componentes. Recordemos la relación fundamental de conmutación canónica: $[\hat{x}_i, \hat{p}_j] = i\hbar\delta_{ij}$.

Calculemos $[\hat{L}_x, \hat{L}_y]$:
$$ [\hat{L}_x, \hat{L}_y] = [\hat{y}\hat{p}_z - \hat{z}\hat{p}_y, \hat{z}\hat{p}_x - \hat{x}\hat{p}_z] $$
Usando la linealidad del conmutador y que operadores actuando en diferentes dimensiones conmutan (ej. $[\hat{y}, \hat{p}_x] = 0$):
$$ [\hat{L}_x, \hat{L}_y] = [\hat{y}\hat{p}_z, \hat{z}\hat{p}_x] - [\hat{y}\hat{p}_z, \hat{x}\hat{p}_z] - [\hat{z}\hat{p}_y, \hat{z}\hat{p}_x] + [\hat{z}\hat{p}_y, \hat{x}\hat{p}_z] $$
Los términos segundo y tercero son cero porque todos los operadores involucrados conmutan entre sí. Nos queda:
$$ [\hat{L}_x, \hat{L}_y] = \hat{y}[\hat{p}_z, \hat{z}]\hat{p}_x + \hat{x}[\hat{z}, \hat{p}_z]\hat{p}_y $$
Sabemos que $[\hat{z}, \hat{p}_z] = i\hbar$ y $[\hat{p}_z, \hat{z}] = -i\hbar$. Por lo tanto:
$$ [\hat{L}_x, \hat{L}_y] = \hat{y}(-i\hbar)\hat{p}_x + \hat{x}(i\hbar)\hat{p}_y = i\hbar (\hat{x}\hat{p}_y - \hat{y}\hat{p}_x) = i\hbar \hat{L}_z $$
Por simetría (permutación cíclica de índices $x \to y \to z \to x$), obtenemos las relaciones fundamentales del álgebra de momento angular:
$$ [\hat{L}_x, \hat{L}_y] = i\hbar \hat{L}_z, \quad [\hat{L}_y, \hat{L}_z] = i\hbar \hat{L}_x, \quad [\hat{L}_z, \hat{L}_x] = i\hbar \hat{L}_y $$

### 1.4 Interpretación Física del Resultado
El hecho de que los componentes del momento angular no conmuten significa que, según el principio de incertidumbre de Heisenberg, es imposible conocer con precisión absoluta más de una componente del momento angular simultáneamente (excepto si el momento angular total es cero). Esto contrasta radicalmente con la mecánica clásica, donde el vector de momento angular puede especificarse completamente.

---

## 2. Álgebra de Operadores Escalera y Cuantización

*Fuente primaria: Griffiths, cap. 4. Fuente complementaria: Cohen-Tannoudji, cap. VI.*

### 2.1 Motivación
Dado que no podemos encontrar autofunciones simultáneas de $\hat{L}_x$, $\hat{L}_y$ y $\hat{L}_z$, buscamos un conjunto completo de observables que conmuten (CSCO). Definimos el operador magnitud al cuadrado del momento angular:
$$ \hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2 $$
Veamos si $\hat{L}^2$ conmuta con algún componente, digamos $\hat{L}_z$:
$$ [\hat{L}^2, \hat{L}_z] = [\hat{L}_x^2, \hat{L}_z] + [\hat{L}_y^2, \hat{L}_z] + [\hat{L}_z^2, \hat{L}_z] $$
Usando la identidad $[A^2, B] = A[A,B] + [A,B]A$:
$$ [\hat{L}_x^2, \hat{L}_z] = \hat{L}_x[\hat{L}_x, \hat{L}_z] + [\hat{L}_x, \hat{L}_z]\hat{L}_x = \hat{L}_x(-i\hbar\hat{L}_y) + (-i\hbar\hat{L}_y)\hat{L}_x $$
$$ [\hat{L}_y^2, \hat{L}_z] = \hat{L}_y[\hat{L}_y, \hat{L}_z] + [\hat{L}_y, \hat{L}_z]\hat{L}_y = \hat{L}_y(i\hbar\hat{L}_x) + (i\hbar\hat{L}_x)\hat{L}_y $$
Sumando ambos términos, se cancelan de a pares. Luego, $[\hat{L}^2, \hat{L}_z] = 0$. 
Por lo tanto, $\hat{L}^2$ y $\hat{L}_z$ pueden tener autofunciones simultáneas. Las denotaremos como $|l, m\rangle$, tal que:
$$ \hat{L}^2 |l,m\rangle = \lambda |l,m\rangle $$
$$ \hat{L}_z |l,m\rangle = \mu |l,m\rangle $$

### 2.2 Desarrollo y Derivación Completa
Definimos los operadores escalera $\hat{L}_+$ (operador de subida) y $\hat{L}_-$ (operador de bajada):
$$ \hat{L}_\pm = \hat{L}_x \pm i\hat{L}_y $$

Calculemos sus conmutadores principales:
$$ [\hat{L}_z, \hat{L}_\pm] = [\hat{L}_z, \hat{L}_x \pm i\hat{L}_y] = [\hat{L}_z, \hat{L}_x] \pm i[\hat{L}_z, \hat{L}_y] = i\hbar\hat{L}_y \pm i(-i\hbar\hat{L}_x) = \pm\hbar(\hat{L}_x \pm i\hat{L}_y) = \pm\hbar\hat{L}_\pm $$
También:
$$ [\hat{L}^2, \hat{L}_\pm] = 0 $$

Ahora, apliquemos $\hat{L}_z$ a un estado que se generó actuando con $\hat{L}_\pm$ sobre nuestro eigenestado $|l,m\rangle$:
$$ \hat{L}_z (\hat{L}_\pm |l,m\rangle) = (\hat{L}_\pm \hat{L}_z + [\hat{L}_z, \hat{L}_\pm])|l,m\rangle = (\hat{L}_\pm \mu \pm \hbar\hat{L}_\pm)|l,m\rangle = (\mu \pm \hbar) (\hat{L}_\pm |l,m\rangle) $$
Esto demuestra de manera hermosa que $\hat{L}_\pm |l,m\rangle$ es un nuevo eigenestado de $\hat{L}_z$ con autovalor incrementado o decrementado en $\hbar$. Dado que conmutan con $\hat{L}^2$, el autovalor $\lambda$ permanece constante. Por conveniencia, tomaremos $\mu = m\hbar$.

**Truncamiento de la serie:**
La magnitud del momento angular al cuadrado debe ser mayor o igual a su proyección al cuadrado. Algebraicamente:
$$ \langle l,m | \hat{L}^2 - \hat{L}_z^2 | l,m \rangle = \langle l,m | \hat{L}_x^2 + \hat{L}_y^2 | l,m \rangle \ge 0 $$
$$ \lambda - m^2\hbar^2 \ge 0 \implies m^2\hbar^2 \le \lambda $$
Esto impone límites al valor de $m$. Debe existir un estado de máxima proyección (llamémoslo $m_{max} = l$) donde el operador de subida lo aniquile:
$$ \hat{L}_+ |l, l\rangle = 0 $$
Notemos que $\hat{L}_- \hat{L}_+ = (\hat{L}_x - i\hat{L}_y)(\hat{L}_x + i\hat{L}_y) = \hat{L}_x^2 + \hat{L}_y^2 + i[\hat{L}_x, \hat{L}_y] = \hat{L}^2 - \hat{L}_z^2 - \hbar\hat{L}_z$.
Aplicando a $|l,l\rangle$:
$$ (\hat{L}_- \hat{L}_+) |l,l\rangle = (\hat{L}^2 - \hat{L}_z^2 - \hbar\hat{L}_z) |l,l\rangle = (\lambda - \hbar^2 l^2 - \hbar^2 l) |l,l\rangle = 0 $$
Por tanto, $\lambda = \hbar^2 l(l+1)$.
Del mismo modo, debe existir un $m$ mínimo. Análogamente, se encuentra que $m_{min} = -l$.
Dado que pasamos de $-l$ a $l$ en pasos enteros (debido a $\hbar$), la diferencia $l - (-l) = 2l$ debe ser un número entero. Por ende, $l$ puede tomar valores $0, 1/2, 1, 3/2, \dots$ y $m = -l, -l+1, \dots, l$. (Los semienteros corresponden al espín, el momento angular orbital toma $l$ entero).

**Coeficientes de normalización:**
Sabemos que $\hat{L}_\pm |l,m\rangle = C_{\pm} |l, m\pm 1\rangle$. Para hallar la constante:
$$ |C_\pm|^2 = \langle l,m | \hat{L}_\mp \hat{L}_\pm | l,m \rangle = \langle l,m | \hat{L}^2 - \hat{L}_z^2 \mp \hbar\hat{L}_z | l,m \rangle = \hbar^2 [l(l+1) - m(m\pm 1)] $$
Tomando la convención de fase de Condon-Shortley:
$$ \hat{L}_\pm |l,m\rangle = \hbar \sqrt{l(l+1) - m(m\pm 1)} \, |l, m\pm 1\rangle $$

---

## 3. Armónicos Esféricos como Autofunciones Espaciales

*Fuente primaria: Griffiths, cap. 4.*

En coordenadas esféricas, los operadores son:
$$ \hat{L}_z = -i\hbar \frac{\partial}{\partial \phi} $$
$$ \hat{L}^2 = -\hbar^2 \left[ \frac{1}{\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta\frac{\partial}{\partial \theta}\right) + \frac{1}{\sin^2\theta}\frac{\partial^2}{\partial \phi^2} \right] $$

Las ecuaciones de autovalores son:
$$ -i\hbar \frac{\partial}{\partial \phi} Y_l^m(\theta,\phi) = m\hbar Y_l^m(\theta,\phi) $$
$$ \hat{L}^2 Y_l^m(\theta,\phi) = \hbar^2 l(l+1) Y_l^m(\theta,\phi) $$

De la primera, es trivial ver que la dependencia en $\phi$ es $e^{im\phi}$. Para que la función sea univaluada tras una rotación de $2\pi$, $m$ debe ser entero, lo que a su vez obliga a que $l$ sea entero (para momento orbital espacial).
La ecuación polar resulta ser la ecuación diferencial asociada de Legendre. Las soluciones, normalizadas sobre la esfera, se denominan **Armónicos Esféricos** $Y_l^m(\theta,\phi)$:
$$ Y_l^m(\theta,\phi) = \epsilon \sqrt{\frac{(2l+1)}{4\pi}\frac{(l-|m|)!}{(l+|m|)!}} P_l^m(\cos\theta) e^{im\phi} $$
donde $P_l^m$ son los polinomios asociados de Legendre.

**Primeros Armónicos Esféricos:**
- $l=0$ (estado s):
  - $Y_0^0 = \frac{1}{\sqrt{4\pi}}$
- $l=1$ (estados p):
  - $Y_1^0 = \sqrt{\frac{3}{4\pi}} \cos\theta$
  - $Y_1^{\pm 1} = \mp \sqrt{\frac{3}{8\pi}} \sin\theta e^{\pm i\phi}$
- $l=2$ (estados d):
  - $Y_2^0 = \sqrt{\frac{5}{16\pi}} (3\cos^2\theta - 1)$

---

## 4. Orbitales Atómicos y Reglas de Construcción

*Fuente primaria: Gasiorowicz, cap. 11.*

Al resolver el átomo de hidrógeno, la función de onda total $\psi(r,\theta,\phi) = R_{nl}(r)Y_l^m(\theta,\phi)$ introduce el número cuántico principal $n$ derivado de la parte radial. Los estados están descritos por 4 números cuánticos:
1. **$n$ (Principal):** $1, 2, 3, \dots$ Determina la energía (en hidrógeno $E_n \propto -1/n^2$) y el tamaño de la capa.
2. **$l$ (Azimutal o momento angular):** $0, 1, \dots, n-1$. Determina la forma orbital ($s, p, d, f$).
3. **$m_l$ (Magnético):** $-l, \dots, l$. Determina la orientación en el espacio. Hay $2l+1$ valores.
4. **$m_s$ (Espín):** $\pm 1/2$. Momento angular intrínseco del electrón.

**Degeneración y Pauli:**
Para un átomo hidrogenoide (1 electrón), la energía depende solo de $n$, dándole una degeneración de $n^2$ estados espaciales (o $2n^2$ considerando el espín). En átomos polielectrónicos, la interacción electrón-electrón levanta la degeneración en $l$, haciendo que $E = E(n,l)$.
El Principio de Exclusión de Pauli exige que no haya dos electrones con los mismos 4 números cuánticos, construyendo el **Principio de Aufbau** (construcción) de la tabla periódica.

---

## 5. Ejemplos Numéricos Resueltos

**Ejemplo 1: Probabilidad de Medición Angulares**
Considere una partícula en estado $|\psi\rangle = \frac{1}{\sqrt{2}}|1,1\rangle + \frac{1}{2}|1,0\rangle - \frac{1}{2}|1,-1\rangle$.
¿Cuál es la expectativa $\langle \hat{L}_z \rangle$?
El estado está normalizado: $|1/\sqrt{2}|^2 + |1/2|^2 + |-1/2|^2 = 1/2 + 1/4 + 1/4 = 1$.
$\langle \hat{L}_z \rangle = \sum m\hbar |c_m|^2 = (1\hbar)(1/2) + (0\hbar)(1/4) + (-1\hbar)(1/4) = \frac{\hbar}{2} - \frac{\hbar}{4} = \frac{\hbar}{4}$.

**Ejemplo 2: Acción del Operador Escalera**
Halle $\hat{L}_x$ actuando sobre el estado esférico $|l=1, m=0\rangle$.
Sabemos que $\hat{L}_x = \frac{\hat{L}_+ + \hat{L}_-}{2}$.
Calculemos $\hat{L}_+ |1,0\rangle = \hbar\sqrt{1(2)-0} |1,1\rangle = \hbar\sqrt{2} |1,1\rangle$.
Calculemos $\hat{L}_- |1,0\rangle = \hbar\sqrt{1(2)-0} |1,-1\rangle = \hbar\sqrt{2} |1,-1\rangle$.
Por tanto, $\hat{L}_x |1,0\rangle = \frac{\hbar}{\sqrt{2}} (|1,1\rangle + |1,-1\rangle)$.

---
## Conclusiones Académicas
1. El momento angular es fundamentalmente el generador de rotaciones y sus conmutadores encierran toda la información física observable y de su cuantización.
2. La técnica de operadores escalera (método algebraico) permite determinar todo el espectro prescindiendo de resolver la ecuación diferencial intrincada de Legendre.
3. La estructura de la tabla periódica entera es un corolario de las reglas de cuantización del momento angular espacial combinadas con el espín y la antisimetría del fermión.

## Referencias Bibliográficas
1. J. J. Sakurai, *Modern Quantum Mechanics* (Revised Edition), cap. 3.
2. D. J. Griffiths, *Introduction to Quantum Mechanics*, cap. 4.
3. S. Gasiorowicz, *Quantum Physics*, cap. 11.