# Módulo 04 — Mecánica Cuántica | Clase 03 (Síntesis)

| Campo | Valor |
|---|---|
| **Módulo** | 04 — Mecánica Cuántica |
| **Clase** | 03 |
| **Docente** | Prof. Esteban Sepúlveda |
| **Fecha** | 11 sep 2026 |
| **Temas** | Momentum Angular · Conmutadores · Operadores Escalera $\hat{L}_\pm$ · Autovalores y cuantización · Armónicos esféricos · Números cuánticos y orbitales |

---

## Síntesis de Conceptos Clave

### El Momentum Angular: de los giros clásicos al operador cuántico

El Prof. Sepúlveda abre la clase con una pregunta motivadora: ¿qué tienen en común un trompo, una patinadora y la Tierra? Todos giran, y en todos se conserva el momentum angular. Clásicamente, el momentum angular se define como el producto vectorial entre posición y momentum:

$$\vec{L} = \vec{r} \times \vec{p}$$

El momentum angular apunta perpendicular al plano de giro (regla de la mano derecha), y se conserva cuando no hay torques externos: $d\vec{L}/dt = \vec{\tau}_\text{ext} = 0$. Esto ocurre en particular en **potenciales centrales** (gravitacional, coulombiano), donde la fuerza apunta en la dirección radial, por lo que $\vec{\tau} = \vec{r} \times \vec{F} = 0$. Este es el caso del átomo de hidrógeno y de las órbitas planetarias.

El Prof. Sepúlveda ilustra la conservación con el experimento de la rueda de bicicleta giratoria: al invertir el sentido de giro de la rueda (interacción interna), el momento angular total del sistema se conserva y la plataforma comienza a girar en sentido contrario.

En mecánica cuántica, **no existe trayectoria del electrón**, por lo que la noción de "órbita" no tiene sentido. Lo que se cuantiza son las rotaciones del espacio físico, y el momentum angular se convierte en **operador**:

$$\hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}}, \quad \text{con } \hat{\vec{p}} = -i\hbar\nabla$$

Las componentes cartesianas son:

$$\hat{L}_x = \hat{Y}\hat{P}_z - \hat{Z}\hat{P}_y, \quad \hat{L}_y = \hat{Z}\hat{P}_x - \hat{X}\hat{P}_z, \quad \hat{L}_z = \hat{X}\hat{P}_y - \hat{Y}\hat{P}_x$$

---

### Las Rotaciones No Conmutan: motivación experimental

El Prof. Sepúlveda muestra con una tablet que rotar 90° en X y luego en Y da un resultado diferente que rotar en Y primero y luego en X. **Las rotaciones no conmutan**, y esto se traduce en que los operadores de momentum angular tampoco conmutan. El conmutador entre $\hat{L}_x$ y $\hat{L}_y$ se calcula desde la relación canónica $[\hat{x}_i, \hat{p}_j] = i\hbar\delta_{ij}$:

$$[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z, \quad [\hat{L}_y, \hat{L}_z] = i\hbar\hat{L}_x, \quad [\hat{L}_z, \hat{L}_x] = i\hbar\hat{L}_y$$

**Consecuencia física:** No es posible medir simultáneamente dos componentes del momentum angular con precisión arbitraria. No existen autoestados comunes para $\hat{L}_x$, $\hat{L}_y$ y $\hat{L}_z$.

---

### $\hat{L}^2$ conmuta con todo: el CCOC $\{\hat{L}^2, \hat{L}_z\}$

El operador magnitud al cuadrado $\hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2$ es un escalar rotacional (el Prof. Sepúlveda: "es el teorema de Pitágoras en 3D, invariante ante rotaciones"). Se puede demostrar que:

$$[\hat{L}^2, \hat{L}_i] = 0 \quad \forall i$$

Por tanto, $\hat{L}^2$ y $\hat{L}_z$ forman un **Conjunto Completo de Observables que Conmutan (CCOC)** y tienen autoestados simultáneos $|\alpha, \beta\rangle$:

$$\hat{L}^2|\alpha,\beta\rangle = \hbar^2\alpha|\alpha,\beta\rangle, \qquad \hat{L}_z|\alpha,\beta\rangle = \hbar\beta|\alpha,\beta\rangle$$

---

### Operadores Escalera: $\hat{L}_+$ y $\hat{L}_-$

El Prof. Sepúlveda define los operadores escalera:

$$\hat{L}_+ = \hat{L}_x + i\hat{L}_y \quad \text{(operador de subida)}$$
$$\hat{L}_- = \hat{L}_x - i\hat{L}_y \quad \text{(operador de bajada)}$$

Sus conmutadores clave:
$$[\hat{L}_z, \hat{L}_\pm] = \pm\hbar\hat{L}_\pm, \qquad [\hat{L}^2, \hat{L}_\pm] = 0$$

La demostración algebraica muestra que $\hat{L}_+|\alpha,\beta\rangle$ es autoestado de $\hat{L}_z$ con autovalor $\hbar(\beta+1)$: el operador $\hat{L}_+$ **sube en una unidad el valor de $\beta$** (la proyección del momentum angular sobre Z), sin cambiar $\alpha$. Del mismo modo, $\hat{L}_-$ baja $\beta$ en una unidad. Por eso se llaman "operadores escalera".

---

### Cuantización del Momentum Angular

La escalera $\beta$ no puede ser infinita. Como $\hat{L}_x^2 + \hat{L}_y^2 \geq 0$, se tiene $\alpha \geq \beta^2$, de modo que $\beta$ tiene un valor máximo $\beta_\text{max}$. En ese tope $\hat{L}_+|\alpha,\beta_\text{max}\rangle = 0$. Esto da $\alpha = \beta_\text{max}(\beta_\text{max}+1)$. Por simetría, $\beta_\text{min} = -\beta_\text{max}$. Como entre $-\beta_\text{max}$ y $\beta_\text{max}$ se va en pasos enteros, $2\beta_\text{max} = n$ entero, por lo que $\beta_\text{max} = n/2$.

Renombrando $\beta_\text{max} \to l$ y $\beta \to m$:

$$\hat{L}^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle, \quad l = 0,\tfrac{1}{2},1,\tfrac{3}{2},\dots$$
$$\hat{L}_z|l,m\rangle = \hbar m|l,m\rangle, \quad m = -l,-l+1,\dots,l$$

La magnitud del momentum angular es $|\vec{L}| = \sqrt{l(l+1)}\,\hbar$. Hay $2l+1$ orientaciones posibles respecto a un eje.

---

### Representación Matricial ($l=1$): verificación concreta

Para $l=1$, la base es $\{|1,1\rangle, |1,0\rangle, |1,-1\rangle\}$. Las matrices de los operadores son:

$$\hat{L}^2 = 2\hbar^2\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}, \quad \hat{L}_z = \hbar\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}$$

$$\hat{L}_+ = \hbar\sqrt{2}\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}, \quad \hat{L}_- = \hbar\sqrt{2}\begin{pmatrix}0&0&0\\1&0&0\\0&1&0\end{pmatrix}$$

$$\hat{L}_x = \frac{\hbar}{\sqrt{2}}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}, \quad \hat{L}_y = \frac{\hbar}{\sqrt{2}}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix}$$

La multiplicación matricial de $\hat{L}_x$ y $\hat{L}_y$ verifica $[\hat{L}_x,\hat{L}_y] = i\hbar\hat{L}_z$.

---

### Armónicos Esféricos: las "formas" angulares permitidas

En coordenadas esféricas $(r,\theta,\phi)$:

$$\hat{L}_z = -i\hbar\frac{\partial}{\partial\phi}, \qquad \hat{L}^2 = -\hbar^2\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]$$

Las autofunciones simultáneas se separan como $Y_l^m(\theta,\phi) = \Theta_{lm}(\theta)\cdot\Phi_m(\phi)$:

- **Parte $\phi$:** $\Phi_m(\phi) = \frac{1}{\sqrt{2\pi}}e^{im\phi}$ (condición de univaluación $\Rightarrow$ $m$ entero)
- **Parte $\theta$:** ecuación de Legendre $\Rightarrow$ $\Theta_{lm}(\theta) = C_{lm}P_l^m(\cos\theta)$

El resultado son los **Armónicos Esféricos**. Para el electrón (momentum orbital), solo $l$ entero:

| $l$ | $m$ | $Y_l^m(\theta,\phi)$ |
|:---:|:---:|:---:|
| 0 | 0 | $\dfrac{1}{\sqrt{4\pi}}$ |
| 1 | 0 | $\sqrt{\dfrac{3}{4\pi}}\cos\theta$ |
| 1 | $\pm 1$ | $\mp\sqrt{\dfrac{3}{8\pi}}\sin\theta\,e^{\pm i\phi}$ |
| 2 | 0 | $\sqrt{\dfrac{5}{16\pi}}(3\cos^2\theta-1)$ |

Usando $\cos\theta = z/r$ y $\sin\theta\,e^{\pm i\phi} = (x\pm iy)/r$:
- $Y_1^0 \propto z/r$ → orbital $2p_z$ (lóbulos a lo largo de Z)
- Combinaciones reales de $Y_1^{\pm 1}$ dan los orbitales $2p_x$ y $2p_y$

---

### La Analogía del Edificio Atómico (Prof. Sepúlveda)

El Prof. Sepúlveda presenta los cuatro números cuánticos como la dirección de un inquilino en un edificio:

| Número cuántico | Analogía | Valores | Determina |
|---|---|---|---|
| $n$ (principal) | Piso del edificio | $1,2,3,\dots$ | Energía: $E_n \propto -1/n^2$ |
| $l$ (azimutal) | Diseño de la suite | $0,1,\dots,n-1$ | Forma ($s,p,d,f$) |
| $m_l$ (magnético) | Orientación de la suite | $-l,\dots,l$ | Orientación espacial |
| $m_s$ (espín) | Lateralidad del inquilino | $\pm\tfrac{1}{2}$ | Espín del electrón |

**Regla clave (la más olvidada):** $l$ nunca puede alcanzar el valor de $n$; siempre $l \leq n-1$.

---

## Ecuaciones Esenciales

$$\hat{L}^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle \qquad \hat{L}_z|l,m\rangle = \hbar m|l,m\rangle$$

$$[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z \qquad [\hat{L}^2, \hat{L}_\pm] = 0 \qquad [\hat{L}_z, \hat{L}_\pm] = \pm\hbar\hat{L}_\pm$$

$$|\vec{L}| = \sqrt{l(l+1)}\,\hbar \qquad -l \leq m \leq l \qquad 0 \leq l \leq n-1$$

---

## Conclusiones de la Clase

1. Las rotaciones no conmutan (ejemplo de la tablet) → los operadores de momentum angular tampoco conmutan.
2. $\hat{L}^2$ y $\hat{L}_z$ forman el CCOC del momentum angular; sus autoestados se denotan $|l,m\rangle$.
3. Los operadores escalera $\hat{L}_\pm$ suben/bajan $m$ en una unidad sin cambiar $l$; la escalera es finita → cuantización natural de $l$ y $m$ sin resolver ecuaciones diferenciales.
4. Los armónicos esféricos $Y_l^m(\theta,\phi)$ son las autofunciones angulares: dan forma geométrica a los orbitales atómicos.
5. Cuatro números cuánticos $(n,l,m_l,m_s)$ describen completamente el estado de un electrón en un átomo; combinados con Pauli, explican la tabla periódica.