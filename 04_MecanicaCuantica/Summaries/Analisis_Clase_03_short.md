---
**Módulo:** 04 — Mecánica Cuántica
**Clase:** 03
**Docente:** Prof. Esteban Sepúlveda
**Temas Cubiertos:** Momentum Angular, Operadores de Rotación, Conmutadores, Operadores Escalera, Armónicos Esféricos, Orbitales Atómicos.
---

## Síntesis de Conceptos Clave

**El Momentum Angular en el Mundo Cuántico**
El momentum angular clásico se define como el producto cruz entre la posición y el momentum ($\vec{L} = \vec{r} \times \vec{p}$). En mecánica cuántica, esta definición se preserva promoviendo la posición y el momentum a operadores algebraicos. De esta manera, el momentum angular se convierte en el generador de las rotaciones del espacio físico. A diferencia de las trayectorias clásicas, en el régimen cuántico no podemos dibujar la ruta de un electrón, pero sí conservar su momentum angular cuando interactúa bajo un potencial central.

**Álgebra de Conmutadores y Relación de Incertidumbre**
Las componentes del operador de momentum angular ($L_x, L_y, L_z$) no conmutan entre sí, satisfaciendo relaciones cíclicas como $[L_x, L_y] = i\hbar L_z$. Físicamente, esto significa que es imposible conocer simultáneamente y con precisión exacta más de una componente del momentum angular, como consecuencia directa del Principio de Incertidumbre de Heisenberg. Sin embargo, el operador de magnitud cuadrada $L^2$ sí conmuta con todas las componentes individuales, permitiendo la existencia de autoestados simultáneos, típicamente denotados como $|l, m\rangle$, que comparten valores definidos para $L^2$ y $L_z$.

**Operadores Escalera y Cuantización**
Para encontrar los valores permitidos del momentum angular sin recurrir a ecuaciones diferenciales complejas, se definen los operadores escalera (subida y bajada) $L_+$ y $L_-$. Estos operadores permiten transitar entre diferentes estados, aumentando o disminuyendo la proyección z del momentum angular en pasos de $\hbar$, mientras la magnitud total $L^2$ permanece inalterada. Las cotas impuestas por la positividad de la norma obligan a que la serie se trunque, dando lugar a la cuantización intrínseca del momentum angular en valores enteros o semienteros ($l$ y $m$).

**Armónicos Esféricos y Analogía del Edificio Atómico**
En coordenadas esféricas, las autofunciones que resuelven simultáneamente $L^2$ y $L_z$ son los armónicos esféricos $Y_{lm}(\theta, \varphi)$. Estas funciones representan las formas geométricas tridimensionales permitidas para los orbitales atómicos. el Prof. Sepúlveda ilustra esto mediante la intuitiva "analogía del edificio", donde el número cuántico principal $n$ representa el piso, $l$ el tipo de apartamento o suite (s, p, d, f), $m_l$ la orientación de las ventanas y $m_s$ la lateralidad del inquilino (espín del electrón).

## Ecuaciones Esenciales

- **Definición Cuántica del Momentum Angular:**
  $$ \hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}} $$
  *Interpretación:* La posición y el momentum son operadores vectoriales cuánticos, donde el operador momentum espacial es $\hat{p} = -i\hbar\nabla$.

- **Relación de Conmutación Fundamental:**
  $$ [L_x, L_y] = i\hbar L_z $$
  *Interpretación:* Refleja la incompatibilidad geométrica y probabilística de medir componentes ortogonales del momentum angular al mismo tiempo.

- **Operadores Escalera:**
  $$ L_{\pm} = L_x \pm i L_y $$
  *Interpretación:* Operadores no hermíticos que suben o bajan el autovalor de la componente $z$ en una unidad discreta $\hbar$.

- **Autovalores del Momentum Angular:**
  $$ L^2 |l, m\rangle = \hbar^2 l(l+1) |l, m\rangle $$
  $$ L_z |l, m\rangle = \hbar m |l, m\rangle $$
  *Interpretación:* La magnitud total al cuadrado y la proyección magnética en un eje dado están discretizadas, dictando la arquitectura fundamental de toda la tabla periódica.

## Conclusiones de la Clase

1. El momentum angular se conserva invariablemente en presencia de cualquier potencial central (fuerzas puramente radiales).
2. Las componentes espaciales del giro cuántico no conmutan entre sí, imponiendo fronteras cuánticas rígidas en la medición simultánea según el Principio de Incertidumbre.
3. El potente uso del álgebra algebraica de operadores escalera ($L_{\pm}$) logra deducir, de forma puramente teórica, que el momentum angular debe estar estrictamente cuantizado en niveles discretos.
4. Las funciones de onda angulares halladas analíticamente se corresponden con los armónicos esféricos matemáticos, dotando de forma tridimensional a las abstractas "nubes de probabilidad" electrónicas (formando los reconocibles orbitales s, p, d, f).
5. La "arquitectura estructural del átomo" está celosamente regida por reglas de construcción rigurosas y topes numéricos lógicos (como $l \le n-1$), las cuales determinan directamente la capacidad máxima de alojamiento de los electrones por cada nivel energético.