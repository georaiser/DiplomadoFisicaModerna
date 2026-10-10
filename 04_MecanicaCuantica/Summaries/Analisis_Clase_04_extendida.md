## Análisis Extendido — Clase 04: Herramientas Matemáticas 2

**Docente:** Prof. Aldo Delgado
**Fecha:** 25 sep 2026
**Módulo:** 04 — Mecánica Cuántica | Diplomado en Física Moderna
**Fuentes utilizadas:** Sakurai, Griffiths, Nielsen & Chuang, Cohen-Tannoudji.
**Propósito:** Documento de estudio profundo y autocontenido. Sin restricción de extensión.

---

## Introducción General de la Clase
El desarrollo de la mecánica cuántica se cimentó sobre dos formulaciones: la mecánica ondulatoria de Schrödinger y la mecánica matricial de Heisenberg. Hoy sabemos, gracias a Dirac, que ambas son representaciones del mismo espacio de Hilbert. Esta clase introduce las herramientas formales necesarias para abandonar el espacio de coordenadas continuas y trabajar algebraicamente utilizando espacios vectoriales de dimensión finita, vital para información cuántica.

## 1. Representación Matricial de Operadores

*Fuente primaria: Sakurai, cap. 1, §1.3. Fuente complementaria: Griffiths, cap. 3.*

### 1.1 Motivación y Contexto Histórico
Heisenberg introdujo la formulación matricial en 1925 buscando describir las transiciones atómicas utilizando arreglos numéricos que no conmutaban. Max Born y Pascual Jordan reconocieron que las reglas eran álgebra matricial.

### 1.2 Desarrollo Conceptual
Un vector en el espacio de Hilbert es un objeto geométrico abstracto. Utilizamos un conjunto de estados ortonormales para transformar kets y operadores en arreglos numéricos (vectores y matrices).

### 1.3 Derivación Matemática Completa
Relación de clausura (identidad):
$$ \sum_i |i\rangle\langle i| = \mathbb{I} $$
Para un operador lineal $M$, insertamos la identidad a ambos lados:
$$ M = \mathbb{I} M \mathbb{I} = \sum_{i,j} \langle i | M | j \rangle |i\rangle\langle j| $$
El término $M_{ij} = \langle i | M | j \rangle$ es el elemento de matriz.
Demostración Traza del producto invariante:
$$ \text{tr}(AB) = \sum_i \langle i|AB|i\rangle = \sum_{i,j} \langle i|A|j\rangle\langle j|B|i\rangle = \sum_{i,j} A_{ij}B_{ji} = \text{tr}(BA) $$

### 1.4 Interpretación Física del Resultado
Los elementos diagonales $M_{ii} = \langle i | M | i \rangle$ representan el valor esperado del observable en el estado $|i\rangle$. Los elementos no diagonales $M_{ij}$ están asociados a amplitudes de transición.

### 1.5 Límites y Casos Especiales
Si la base son los autovectores de $M$, la representación es estrictamente diagonal.

### 1.6 Aplicaciones y Ejemplos Numéricos
Para qubits: $|0\rangle = \begin{pmatrix}1\\0\end{pmatrix}$, $|1\rangle = \begin{pmatrix}0\\1\end{pmatrix}$.
Matriz Pauli X: $\sigma_x = |0\rangle\langle 1| + |1\rangle\langle 0| = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

### 1.7 Profundización
El formalismo matricial es equivalente a la mecánica ondulatoria cuando la base es continua (e.g., base $|x\rangle$), y las sumas son integrales.

### Preguntas de Comprensión
1. ¿Cómo se construye la matriz de un operador a partir de sus autovectores?
2. Demuestre que la traza de un operador es cíclica.
3. Explique el significado de un elemento no diagonal nulo.


## 2. Operadores Unitarios y Cambio de Base

*Fuente primaria: Cohen-Tannoudji, cap. 2.*

### 2.1 Motivación y Contexto Histórico
Los cambios de sistema de referencia son esenciales en física. En cuántica, cambiar de base de medición corresponde a transformaciones unitarias.

### 2.2 Desarrollo Conceptual
Una transformación unitaria preserva el "tamaño" de los estados cuánticos (norma), crucial porque la suma de las probabilidades debe seguir siendo 1.

### 2.3 Derivación Matemática Completa
Definición de operador unitario $U$:
$$ U^\dagger U = U U^\dagger = \mathbb{I} $$
Generación por operadores hermíticos: Si $H = H^\dagger$, entonces $U = e^{iH}$ es unitario, por el Teorema de Noether (simetrías continuas).
Preservación de eigenvalores bajo cambio de base:
Si $A|a\rangle = \lambda|a\rangle$, sea $|a'\rangle = U|a\rangle$. Transformamos el operador $A' = U A U^\dagger$.
$$ A'|a'\rangle = U A U^\dagger U |a\rangle = U A |a\rangle = U \lambda |a\rangle = \lambda |a'\rangle $$

### 2.4 Interpretación Física del Resultado
La física observable (eigenvalores, probabilidades totales) no cambia al rotar el marco de referencia en el espacio de Hilbert mediante $U$.

### 2.5 Límites y Casos Especiales
Transformación identidad $U = \mathbb{I}$ representa la no-transformación.

### 2.6 Aplicaciones y Ejemplos Numéricos
Rotaciones de espín $R_z(\theta) = e^{-i \theta \sigma_z / 2}$.

### 2.7 Profundización
Conexión con el teorema de Stone: la evolución temporal de estados cerrados está regida por $U(t) = e^{-iHt/\hbar}$.

### Preguntas de Comprensión
1. Demuestre que $U^\dagger = U^{-1}$.
2. ¿Por qué es necesario que la probabilidad se conserve en $U$?
3. ¿Cómo cambian los elementos de matriz bajo $U$?


## 3. Espacios Compuestos — Producto Tensorial

*Fuente primaria: Nielsen & Chuang, cap. 2. Fuente complementaria: Sakurai, cap. 3.*

### 3.1 Motivación y Contexto Histórico
Para describir dos electrones simultáneamente, las reglas de combinar espacios de estados de la física clásica (producto cartesiano) fallaban, lo que llevó a la invención formal del producto tensorial y la noción de entrelazamiento (Schrödinger, 1935).

### 3.2 Desarrollo Conceptual
La dimensión del espacio crece multiplicativamente, no sumativamente, originando la enorme capacidad de procesamiento (supremacía cuántica).

### 3.3 Derivación Matemática Completa
Para $E_1$ (dim $d_1$) y $E_2$ (dim $d_2$), la base combinada es $|i\rangle \otimes |j\rangle$. Dimensión total: $\dim(E_1 \otimes E_2) = d_1 d_2$.
Vector genérico:
$$ |\gamma\rangle = \sum_{i=1}^{d_1} \sum_{j=1}^{d_2} a_{i,j} |i\rangle_1 \otimes |j\rangle_2 $$
No factorizabilidad (Entrelazamiento):
Consideremos el estado de Bell $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$. Supongamos que se puede factorizar como $(a|0\rangle + b|1\rangle) \otimes (c|0\rangle + d|1\rangle) = ac|00\rangle + ad|01\rangle + bc|10\rangle + bd|11\rangle$.
Para igualarlo, $ad = 0$ y $bc = 0$, pero $ac \neq 0$ y $bd \neq 0$, lo cual es matemáticamente imposible. Luego el estado no es factorizable.

### 3.4 Interpretación Física del Resultado
Estados entrelazados como el de Bell no pueden ser descritos atribuyendo propiedades definidas a cada subsistema por separado, reflejando el carácter no local de la QM.

### 3.5 Límites y Casos Especiales
Estados separables: Pueden ser expresados como $|\psi\rangle_1 \otimes |\phi\rangle_2$, no tienen correlación cuántica (ej. límite clásico estadístico independiente).

### 3.6 Aplicaciones y Ejemplos Numéricos
Puerta CNOT en base de Qubits:
Cambia el target qubit si el control es 1.
Base: $|00\rangle=\begin{pmatrix}1\\0\\0\\0\end{pmatrix}$, $|01\rangle=\begin{pmatrix}0\\1\\0\\0\end{pmatrix}$, $|10\rangle=\begin{pmatrix}0\\0\\1\\0\end{pmatrix}$, $|11\rangle=\begin{pmatrix}0\\0\\0\\1\end{pmatrix}$.

### 3.7 Profundización
Trazas parciales permiten derivar estados reducidos (matrices de densidad) cuando se ignora una de las partículas.

### Preguntas de Comprensión
1. ¿Cuál es la diferencia matemática entre el producto tensorial y cartesiano?
2. Demuestre que la matriz tensorial tiene tamaño $d_1d_2 \times d_1d_2$.
3. Explique la relevancia del estado de Bell en información cuántica.

## Conexiones entre Temas y con el Módulo
Estos tres temas configuran la columna vertebral del cómputo cuántico y las teorías de muchos cuerpos. Los vectores y matrices modelan puertas lógicas, las unitarias modelan el algoritmo en sí (preservando ortonormalidad), y el producto tensorial acomoda los registros multicúbicos y su correlación.

## Conclusiones Académicas
1. La formulación matricial es un paso desde abstracciones hacia resoluciones algebraicas sistemáticas y programables.
2. Los operadores unitarios, por vía del teorema de Stone-Noether, no solo transforman bases, sino que encapsulan toda simetría en la física.
3. El producto tensorial evidencia que el 'todo' en cuántica excede semánticamente a 'la suma de sus partes'.

## Referencias Bibliográficas
### 1. Artículos científicos originales
- Heisenberg, W. (1925). *Zeitschrift für Physik*, 33, 879-893.
- Schrödinger, E. (1935). *Naturwissenschaften*, 23, 807.
### 2. Textos del curso
- Transcripción Clase 04
- PDF Clase 4 Herramientas Matemáticas 2
### 3. Textos universitarios estándar
- Sakurai, J.J. *Modern Quantum Mechanics*
- Griffiths, D. *Introduction to Quantum Mechanics*
- Cohen-Tannoudji, C. *Mécanique Quantique*
### 4. Recursos de libre acceso verificados
- Nielsen, M. A., & Chuang, I. L. (2010). *Quantum Computation and Quantum Information*. Cambridge University Press.
