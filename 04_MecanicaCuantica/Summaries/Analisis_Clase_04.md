# Análisis Estándar — Clase 04: Herramientas Matemáticas 2

**Docente:** Prof. Aldo Delgado
**Fecha:** 25 sep 2026
**Módulo:** 04 — Mecánica Cuántica | Diplomado en Física Moderna
**Fuentes:** Transcripción Clase 04, PDF "Clase 4_HERRAMIENTAS MATEMATICAS 2"

## 1. Representación Matricial de Operadores
Para realizar cálculos prácticos, los kets y operadores se proyectan sobre una base ortonormal $\{|i\rangle\}$. Insertando $\mathbb{I} = \sum_i |i\rangle\langle i|$, podemos expresar un ket como vector columna $a_i = \langle i | \psi \rangle$.
Para un operador $M$:
$$ M = \mathbb{I} M \mathbb{I} = \left(\sum_i |i\rangle\langle i|\right) M \left(\sum_j |j\rangle\langle j|\right) = \sum_{i,j} \langle i|M|j\rangle |i\rangle\langle j| $$
Donde $M_{ij} = \langle i | M | j \rangle$.
La acción de un operador sobre un vector $|\psi'\rangle = M|\psi\rangle$ es: $a'_i = \sum_j M_{ij} a_j$.

Ejemplo matriz 2x2 explícita de $\sigma_x$ en base de espín $Z$:
$$ \sigma_x = \begin{pmatrix} \langle 0|\sigma_x|0\rangle & \langle 0|\sigma_x|1\rangle \\ \langle 1|\sigma_x|0\rangle & \langle 1|\sigma_x|1\rangle \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} $$

## 2. Operadores Unitarios
Un operador $U$ es unitario si $U^\dagger U = U U^\dagger = \mathbb{I}$. Estos preservan productos internos:
$$ \langle U\psi | U\phi \rangle = \langle \psi | U^\dagger U | \phi \rangle = \langle \psi | \phi \rangle $$
Cambio de base: Si $|i'\rangle = U|i\rangle$, la transformación de $A$ es $A' = U^\dagger A U$.

## 3. Producto Tensorial y Espacios Compuestos
Para sistemas compuestos, $\mathcal{H} = \mathcal{H}_1 \otimes \mathcal{H}_2$.
Si $\mathcal{H}_1$ (base $\{|i\rangle\}$) y $\mathcal{H}_2$ (base $\{|j\rangle\}$), $\mathcal{H}$ tiene base $\{|i\rangle \otimes |j\rangle \equiv |ij\rangle\}$.
Ejemplo de producto tensorial de Qubits:
$$ |0\rangle_1 \otimes |0\rangle_2 = \begin{pmatrix}1\\0\end{pmatrix} \otimes \begin{pmatrix}1\\0\end{pmatrix} = \begin{pmatrix}1\\0\\0\\0\end{pmatrix} $$
Estado general: $|\gamma\rangle = \sum_{i=1}^{d_1} \sum_{j=1}^{d_2} a_{i,j} |i\rangle \otimes |j\rangle$. Dimensión total $d_T = d_1 d_2$.

## Conclusiones de la Clase
1. Toda operación cuántica puede mapearse a álgebra matricial eligiendo una base.
2. Los operadores unitarios actúan como transformaciones isométricas, preservando ortonormalidad.
3. El producto tensorial es el fundamento matemático para construir estados de múltiples partículas.

## Referencias Bibliográficas
1. PDF "Clase 4_HERRAMIENTAS MATEMATICAS 2"
2. J.J. Sakurai, *Modern Quantum Mechanics*
3. D. Griffiths, *Introduction to Quantum Mechanics*
