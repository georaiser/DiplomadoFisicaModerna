---
**Diplomado en Física Moderna — Módulo 04: Mecánica Cuántica**
**Clase 03:** Momentum Angular
**Docente:** Prof. Esteban Sepúlveda
**Fecha:** 12 de septiembre de 2026
**Fuentes utilizadas:** Transcripción de clase, Diapositivas principales, Notas de pizarra, Bibliografía canónica.
*Nota sobre disponibilidad:* El estilo pedagógico e intuitivo del Prof. Sepúlveda con estilo propio del docente en las transcripciones ha sido corregido y trasladado al castellano estándar, preservando el máximo rigor matemático y conceptual de sus exposiciones originales.
---

## 1. El Momentum Angular y las Rotaciones Clásicas vs. Cuánticas
*Fuente: Diapositivas 1-8, Pizarra*

En la mecánica clásica, un trompo, una patinadora sobre hielo y el planeta Tierra comparten una magnitud física fundamental que se conserva bajo ciertas simetrías: el momentum angular $\vec{L}$.
Clásicamente, se define con respecto a un origen como el producto vectorial:
$$ \vec{L} = \vec{r} \times \vec{p} $$

¿Cuándo se conserva esta cantidad? Matemáticamente, la derivada temporal de $\vec{L}$ es el torque externo neto aplicado:
$$ \frac{d\vec{L}}{dt} = \vec{\tau}_{ext} = \vec{r} \times \vec{F}_{ext} $$
Si consideramos un potencial puramente **central**, es decir, que la fuerza $\vec{F}(r) = f(r)\hat{r}$ es paralela al vector de posición $\vec{r}$, el producto cruz es nulo ($\vec{\tau}_{ext} = 0$). Consecuentemente, el vector $\vec{L}$ permanece constante. La Segunda Ley de Kepler es una consecuencia astronómica directa de esta preservación.

### Promoción a Operadores Cuánticos
En la mecánica cuántica, los electrones u otras partículas microscópicas no poseen trayectorias unívocas $\vec{r}(t)$ que puedan graficarse explícitamente, pero el concepto de momentum angular subsiste y es primordial, promoviéndose a un operador vectorial algebraico:
$$ \hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}} $$
Donde el operador de momentum en el espacio cartesiano de posiciones es $\hat{p} = -i\hbar \nabla$.
Desarrollando el determinante para la componente espacial de los ejes, obtenemos:
$$ \hat{L}_x = \hat{Y}\hat{p}_z - \hat{Z}\hat{p}_y = -i\hbar \left( y\frac{\partial}{\partial z} - z\frac{\partial}{\partial y} \right) $$
$$ \hat{L}_y = \hat{Z}\hat{p}_x - \hat{X}\hat{p}_z = -i\hbar \left( z\frac{\partial}{\partial x} - x\frac{\partial}{\partial z} \right) $$
$$ \hat{L}_z = \hat{X}\hat{p}_y - \hat{Y}\hat{p}_x = -i\hbar \left( x\frac{\partial}{\partial y} - y\frac{\partial}{\partial x} \right) $$

Como se detalló extensamente en la pizarra, toda el álgebra del momentum angular emana de la relación de conmutación canónica básica entre coordenada y momento conjugado: $[x_i, p_j] = i\hbar\delta_{ij}$.

## 2. Álgebra de Conmutadores del Momentum Angular
*Fuente: Diapositivas 9-11, Pizarra de la clase*

Una característica intrínseca de las rotaciones espaciales en 3D es su naturaleza **no conmutativa**. Rotar un objeto $\pi/2$ respecto a $x$ y luego respecto a $y$ da un resultado rotacional distinto que aplicar las mismas operaciones en orden invertido. Esta no conmutatividad geométrica se traduce al lenguaje de operadores de la siguiente forma:

$$ [\hat{L}_x, \hat{L}_y] = [\hat{Y}\hat{p}_z - \hat{Z}\hat{p}_y, \hat{Z}\hat{p}_x - \hat{X}\hat{p}_z] $$
Aprovechando la linealidad del conmutador, la mayoría de los productos se anulan (p.ej., $[Y, p_x] = 0$). El único término donde las variables coinciden y no conmutan es el que engloba a $\hat{Z}$ y $\hat{p}_z$:
$$ [\hat{L}_x, \hat{L}_y] = \hat{Y}[\hat{p}_z, \hat{Z}]\hat{p}_x - \hat{p}_y[\hat{Z}, \hat{p}_z]\hat{X} $$
Insertando $[\hat{Z}, \hat{p}_z] = i\hbar$ y su opuesto $[\hat{p}_z, \hat{Z}] = -i\hbar$:
$$ [\hat{L}_x, \hat{L}_y] = \hat{Y}(-i\hbar)\hat{p}_x - \hat{p}_y(i\hbar)\hat{X} = i\hbar (\hat{X}\hat{p}_y - \hat{Y}\hat{p}_x) = i\hbar \hat{L}_z $$

Análogamente, se generan las relaciones cíclicas:
$$ [\hat{L}_y, \hat{L}_z] = i\hbar \hat{L}_x, \quad [\hat{L}_z, \hat{L}_x] = i\hbar \hat{L}_y $$

La interpretación física de esto es concluyente: **ninguna componente espacial del momentum angular conmuta con las demás**. Debido a la formulación del Principio de Incertidumbre, **es imposible la existencia de autoestados simultáneos** para más de una componente.

### El Operador Cuadrático Escalar $L^2$
El escalar derivado de la magnitud cuadrada total $\hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2$ no es un vector, y por lo tanto, **sí conmuta incondicionalmente** con cualquier componente cartesiana aislada:
$$ [\hat{L}^2, \hat{L}_x] = [\hat{L}^2, \hat{L}_y] = [\hat{L}^2, \hat{L}_z] = 0 $$
Esto certifica matemáticamente la viabilidad de hallar autoestados que definan de manera exacta y simultánea el valor de $\hat{L}^2$ y el de una proyección espacial (escogiendo habitualmente el eje $z$). Definimos la base temporal $|\alpha, \beta\rangle$:
$$ \hat{L}^2 |\alpha, \beta\rangle = \hbar^2 \alpha |\alpha, \beta\rangle $$
$$ \hat{L}_z |\alpha, \beta\rangle = \hbar \beta |\alpha, \beta\rangle $$

## 3. Derivación Analítica Completa: Operadores Escalera y Cuantización
*Fuente: Diapositivas 14-23, Pizarra, Expansión con Bibliografía (Griffiths "Introduction to Quantum Mechanics")*

el Prof. Sepúlveda construye los conocidos "operadores de creación y aniquilación" rotacionales (escalera):
$$ \hat{L}_{\pm} = \hat{L}_x \pm i\hat{L}_y $$

### Acción Escalonada de $\hat{L}_+$ y $\hat{L}_-$
Para develar su impacto, conmutamos $\hat{L}_z$ con los operadores escalera:
$$ [\hat{L}_z, \hat{L}_{\pm}] = [\hat{L}_z, \hat{L}_x] \pm i[\hat{L}_z, \hat{L}_y] = i\hbar \hat{L}_y \pm i(-i\hbar \hat{L}_x) = \pm \hbar (\hat{L}_x \pm i\hat{L}_y) = \pm \hbar \hat{L}_{\pm} $$
Reordenando este conmutador para aislar un factor $\hat{L}_z \hat{L}_{\pm} = \hat{L}_{\pm} \hat{L}_z \pm \hbar \hat{L}_{\pm}$. Evaluamos su efecto sobre el estado base $|\alpha, \beta\rangle$:
$$ \hat{L}_z (\hat{L}_+ |\alpha, \beta\rangle) = (\hat{L}_+ \hat{L}_z + \hbar \hat{L}_+)|\alpha, \beta\rangle = \hat{L}_+(\hbar\beta)|\alpha, \beta\rangle + \hbar\hat{L}_+|\alpha, \beta\rangle $$
$$ = \hbar(\beta + 1)(\hat{L}_+ |\alpha, \beta\rangle) $$
Se verifica que la entidad algebraica $(\hat{L}_+ |\alpha, \beta\rangle)$ es efectivamente un nuevo autoestado formal de $\hat{L}_z$, cuyo autovalor es el previo más el incremento de un cuanto de acción $\hbar$. $\hat{L}_+$ sube la escalera magnética en 1 y $\hat{L}_-$ la desciende en 1. En estos ascensos, la magnitud intrínseca $\alpha$ (propia de $\hat{L}^2$) jamás se altera, pues $[\hat{L}^2, \hat{L}_{\pm}] = 0$.

### El Truncamiento Numérico (Cuantización Discreta)
El cuadrado del momentum se reescribe elegantemente mediante esta misma escalera:
$$ \hat{L}_{\mp}\hat{L}_{\pm} = (\hat{L}_x \mp i\hat{L}_y)(\hat{L}_x \pm i\hat{L}_y) = \hat{L}_x^2 + \hat{L}_y^2 \pm i[\hat{L}_x, \hat{L}_y] = \hat{L}^2 - \hat{L}_z^2 \mp \hbar \hat{L}_z $$
Aislando $\hat{L}^2$:
$$ \hat{L}^2 = \hat{L}_{\mp}\hat{L}_{\pm} + \hat{L}_z^2 \pm \hbar \hat{L}_z $$
Ya que $\hat{L}^2 - \hat{L}_z^2 = \hat{L}_x^2 + \hat{L}_y^2$ constituye por definición una adición de operadores hermíticos al cuadrado, su valor esperado invariablemente será positivo o cero. De esta aserción emerge una **cota limitante insalvable**:
$$ \alpha \geq \beta^2 $$
Esto señala la futilidad de pretender subir ($\beta \to \beta+1$) ilimitadamente; existe obligadamente un "tope de la escalera" $\beta_{max} \equiv l$ donde el intento de continuar ascensión se interrumpe y disuelve el estado:
$$ \hat{L}_+ |\alpha, l\rangle = 0 $$
Multiplicando por la izquierda con el conector $\hat{L}_-$ y aplicando nuestra identidad para $\hat{L}_-\hat{L}_+$:
$$ (\hat{L}^2 - \hat{L}_z^2 - \hbar\hat{L}_z) |\alpha, l\rangle = 0 $$
Evaluando en sus respectivos autovalores fijos para este peldaño:
$$ (\hbar^2\alpha - \hbar^2 l^2 - \hbar^2 l) |\alpha, l\rangle = 0 \implies \alpha = l(l+1) $$

Se concluye idéntico proceso hacia abajo para atestiguar que el escalón más profundo de decenso se sitúa de forma geométrica y espejada en $\beta_{min} = -l$.
Partiendo de $-l$, al otorgar imperiosamente una cantidad discreta y entera de pasos ascensionales $n$, habremos de alcanzar la azotea de la escalera $+l$:
$$ l = -l + n \implies 2l = n \implies l = \frac{n}{2} $$
**Resolución Definitiva:** El momentum angular exhibe obligatoria y naturalmente un perfil cuantizado; los niveles de magnitud permitidos $l$ ostentarán valores numéricamente enteros o semienteros ($0, 1/2, 1, 3/2, \dots$). Bajo esto, el índice de orientación azimutal magnética fluirá en la banda:
$$ m \in \{-l, -l+1, \dots, l-1, l\} $$

## 4. Representación Vectorial/Matricial y Ecuación de Legendre
*Fuente: Diapositivas 27-39, Pizarra*

Un caso específico del modelo desarrollado para $l=1$ dicta la existencia de $2(1)+1 = 3$ estados representables: $|1, 1\rangle, |1, 0\rangle, |1, -1\rangle$.
Al volcar sobre una base ortonormal estas matrices en un espacio de sub-hilbert ($3\times 3$), $\hat{L}_z$ despliega una matriz diagonal prístina:
$$ L_z = \hbar \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix} $$

La transición al marco topológico esférico coordinal $(r, \theta, \varphi)$ modela las componentes en un marco funcional de densidades probabilísticas para el espacio real:
$$ \hat{L}_z = -i\hbar \frac{\partial}{\partial \varphi} $$
La resolución de autovalores de la función de onda espacial $\langle \theta, \varphi | l, m\rangle$ forja la familia especial de soluciones denominadas **Armónicos Esféricos**, expresables como: $Y_{lm}(\theta, \varphi) = \Theta_{lm}(\theta) \Phi_m(\varphi)$. 
Estas funciones congregan en sus venas:
1. Azimutal dependiente de la variable de rotación circular transversal: $\Phi_m(\varphi) = \frac{1}{\sqrt{2\pi}} e^{im\varphi}$.
2. Polar generada sobre las soluciones asociadas de la **Ecuación Diferencial Clásica de Legendre**: $\Theta_{lm}(\theta) = C_{lm} P_l^m(\cos \theta)$.

Es fundamental y mandatorio advertir que la aplicación a un marco dimensional puramente físico impone un carácter monovalente funcional que **solo admite escalares enteros de $l$**; la aparición de escalares fraccionarios ($1/2, 3/2$) se desvela así como la radiografía matemática ineludible y oculta del "espín".

## 5. El Edificio Atómico: Analogía Arquitectónica Integrativa
*Fuente: Diapositivas 40-45*

A fin de asimilar estas deducciones, el profesor acudió a una alegoría pedagógica sobre la clasificación jerárquica intra-atómica:
- **Piso/Elevación Cuántica $n$:** (Número cuántico principal). $n=1, 2, \dots$. Restringe los límites de ocupación.
- **Formato/Arquitectura del Departamento $l$:** (Momento Angular Orbital). Condicionado a la norma de seguridad $l \le n-1$. Dictamina el mapa y topología lobulada del espacio físico de tránsito probabilístico: esférico ($s, l=0$), en lóbulo bilateral ($p, l=1$), tetralobular cruzado ($d, l=2$).
- **Orientación de Vistas y Ventanas $m_l$:** Dispone las diferentes proyecciones magnéticas angulares posibilitadas en $2l+1$ posiciones ($p_x, p_y, p_z$).
- **Lateralidad Dominante del Residente $m_s$:** El perfil de rotación intrínseca propio de su espín de fermión ($\pm 1/2$).

Esta combinación de límites rige indisolublemente y universalmente el aforo de ocupación. En la analogía evaluada, para el piso de altura $n=3$, el cálculo matricial avala la coexistencia de exactamente un total absoluto de $2n^2 = 18$ "habitantes" o estados de electrones posibles.

## 6. Conclusiones Relevantes de la Clase

1. **Giro Conservado y Potenciales Concéntricos:** Se validó fehacientemente que la existencia de fuerzas estrictamente centrales ampara e impone que el vector momentum angular perviva en incondicional perpetuidad sin padecer torque exterior.
2. **Las Barreras Dimensionales Rotacionales:** Se ha formalizado y comprobado empíricamente a través de su matriz de conmutación no conmutativa el por qué la rotación asume linderos incompatibles al someterse a medidas simultáneas y ortogonales (Principio de Heisenberg).
3. **Escalera Discretizadora Predictiva:** Queda exhibido cómo los operadores no hermíticos (algebra de peldaños $\hat{L}_{\pm}$) eximen la carga algorítmica de los cálculos diferenciales pesados y proveen una escalera finita y discreta, con el número cuántico de valor entero.
4. **Armónicos Esféricos Moldeadores:** Los polinomios de Legendre se erigen como los límites fronterizos espaciales de los átomos, cimentando la forma, los bordes geográficos y la dirección explícita tridimensional con la que interaccionan atómicamente los engranes de la naturaleza para forjar los elementos de la tabla química periódica.

## 7. Referencias Bibliográficas Estándar

1. **Artículos Fundacionales:**
   - Dirac, P. A. M. (1926). *Quantum Mechanics and a Preliminary Investigation of the Hydrogen Atom*. Proceedings of the Royal Society of London. Series A, 110(755), 561-579.
2. **Textos Core del Curso:**
   - Griffiths, D. J., & Schroeter, D. F. (2018). *Introduction to Quantum Mechanics* (3rd ed.). Cambridge University Press.
   - Sakurai, J. J., & Napolitano, J. (2020). *Modern Quantum Mechanics* (3rd ed.). Cambridge University Press.
   - Cohen-Tannoudji, C., Diu, B., & Laloë, F. (1977). *Quantum Mechanics* (Vol. 1). Wiley-VCH.
3. **Recursos de Complemento Histórico e Institucional:**
   - Feynman, R. P., Leighton, R. B., & Sands, M. (1965). *The Feynman Lectures on Physics, Vol. III* (Capítulo 18).
   - "50 temas fascinantes de la física cuántica" (Material Didáctico Abierto del Módulo 04).
   - "Mecánica Cuántica para Principiantes" (Material Básico Complementario del Módulo 04).
