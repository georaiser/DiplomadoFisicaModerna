# Diplomado en Física Moderna — Módulo 04: Mecánica Cuántica
**Clase:** 02 - Herramientas Matemáticas 1  
**Docente:** Prof. Paulraj Manidurai  
**Fecha:** 12 de septiembre de 2026  
**Temas Cubiertos:** Espacios de Hilbert, Formalismo de Dirac, Operadores Hermíticos, Ecuación de Autovalores, Conmutadores.  
**Fuentes Utilizadas:** Transcripción de clase, Diapositivas (PDF), Textos canónicos (Griffiths, Sakurai).

---

## 1. Espacios de Hilbert y Notación de Dirac
*Fuente: Diapositivas Clase 02, Sakurai (Modern Quantum Mechanics, Ch. 1).*

La mecánica cuántica reemplaza la noción clásica de trayectorias deterministas por el concepto de **estado cuántico**, el cual vive en un espacio vectorial abstracto llamado **Espacio de Hilbert** ($\mathcal{H}$). Este es un espacio vectorial complejo provisto de un producto interno y que es completo en la norma métrica inducida.

### Formalismo de Kets y Bras
Introducido por Paul Dirac (1939), este formalismo representa los estados del sistema como vectores columna llamados **Kets** $|\psi\rangle$. A cada ket le corresponde un vector fila conjugado en el espacio dual, llamado **Bra** $\langle\psi|$.

La relación matemática entre un bra y un ket es la transposición conjugada (daga $\dagger$):
$$ \langle\psi| = (|\psi\rangle)^\dagger $$

### Producto Interno
El producto interno (o "bracket") entre dos estados $|\phi\rangle$ y $|\psi\rangle$ es un número complejo que representa la amplitud de probabilidad:
$$ \langle \phi | \psi \rangle = \int \phi^*(x) \psi(x) dx $$
Propiedades fundamentales demostradas en clase:
1. Simetría conjugada: $\langle \phi | \psi \rangle = \langle \psi | \phi \rangle^*$
2. Positividad: $\langle \psi | \psi \rangle \geq 0$ (siendo 0 si y solo si $|\psi\rangle = 0$)
3. Linealidad: $\langle \phi | (c_1|\psi_1\rangle + c_2|\psi_2\rangle) = c_1\langle \phi | \psi_1 \rangle + c_2\langle \phi | \psi_2 \rangle$

---

## 2. Operadores Lineales y Hermíticos
*Fuente: Transcripción de la clase, Prof. Manidurai.*

Los observables físicos (energía, momento, posición) no son números, sino **operadores lineales** que actúan sobre los vectores del espacio de Hilbert.

### Definición de Operador Lineal
Un operador $\hat{A}$ es lineal si:
$$ \hat{A}(c_1|\psi_1\rangle + c_2|\psi_2\rangle) = c_1\hat{A}|\psi_1\rangle + c_2\hat{A}|\psi_2\rangle $$

### Operadores Hermíticos
Para que un operador represente una cantidad física medible, debe ser **Hermítico**, lo que significa que es igual a su adjunto:
$$ \hat{A} = \hat{A}^\dagger $$
En términos del producto interno, esto implica que para cualquier par de estados:
$$ \langle \phi | \hat{A} | \psi \rangle = \langle \psi | \hat{A}^\dagger | \phi \rangle^* = \langle \psi | \hat{A} | \phi \rangle^* $$

**Interpretación Física:** La hermiticidad garantiza que al medir el observable, el resultado será un número real, coherente con la realidad física experimentable en el laboratorio.

---

## 3. Valores Propios, Vectores Propios y Medición
*Fuente: Griffiths (Introduction to Quantum Mechanics).*

La acción de medir obliga al estado cuántico a colapsar en uno de los estados fundamentales del operador. Esto se describe mediante la ecuación de valores propios:
$$ \hat{A} |a_n\rangle = a_n |a_n\rangle $$
Donde:
- $\hat{A}$: Observable físico.
- $|a_n\rangle$: Vector propio (eigenket) correspondiente al estado posterior a la medición.
- $a_n$: Valor propio (eigenvalue) real que corresponde al valor numérico arrojado por el instrumento de medida.

### Derivación Completa: Los Valores Propios de un Operador Hermítico son Reales
Partimos de la ecuación de autovalores:
$$ \hat{A} |a\rangle = a |a\rangle $$
Multiplicamos por la izquierda por el bra $\langle a |$:
$$ \langle a | \hat{A} | a \rangle = a \langle a | a \rangle $$
Ahora, tomamos el complejo conjugado de toda la expresión:
$$ \langle a | \hat{A} | a \rangle^* = a^* \langle a | a \rangle^* $$
Por la definición de operador hermítico y las propiedades del producto interno:
$$ \langle a | \hat{A}^\dagger | a \rangle = a^* \langle a | a \rangle $$
Como $\hat{A} = \hat{A}^\dagger$:
$$ \langle a | \hat{A} | a \rangle = a^* \langle a | a \rangle $$
Igualando con nuestra primera ecuación:
$$ a \langle a | a \rangle = a^* \langle a | a \rangle $$
Dado que $\langle a | a \rangle$ es la norma del vector y no es cero ($>0$), podemos dividir ambos lados:
$$ a = a^* $$
Q.E.D. Esta derivación fundamental, enfatizada por el Prof. Manidurai, demuestra matemáticamente por qué la energía o la posición siempre dan valores reales.

---

## 4. Relaciones de Conmutación
*Fuente: Diapositivas Clase 02, Expansión de conceptos.*

El álgebra de operadores cuánticos es, en general, no conmutativa. El **conmutador** se define como:
$$ [\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A} $$

### Importancia Física
Si $[\hat{A}, \hat{B}] = 0$, los operadores comparten un conjunto completo de vectores propios simultáneos. Físicamente, esto significa que ambas observables pueden medirse simultáneamente con precisión infinita.
Si $[\hat{A}, \hat{B}] \neq 0$, no comparten estados propios. El ejemplo más famoso es la posición ($\hat{x}$) y el momento ($\hat{p}$), cuyo conmutador es:
$$ [\hat{x}, \hat{p}] = i\hbar $$
Esto es la raíz matemática del Principio de Incertidumbre de Heisenberg.

---

## Conclusiones de la Clase
1. El marco del Espacio de Hilbert es indispensable para dotar a la mecánica cuántica de una estructura matemática rigurosa y generalizable.
2. La Notación de Dirac abstrae los problemas físicos de su representación en coordenadas, facilitando el cálculo algebraico directo.
3. La restricción de los observables a operadores hermíticos asegura empalmar el modelo matemático abstracto con el empirismo del laboratorio (valores reales).
4. La no conmutatividad es el diferenciador principal entre la mecánica clásica de Newton y el mundo cuántico probabilístico.

---

## Referencias Bibliográficas

**1. Textos del Curso**
- Manidurai, P. (2026). *Clase 2: Herramientas Matemáticas 1*. [Diapositivas y Transcripción]. Diplomado de Física Moderna, Módulo 04.

**2. Textos Universitarios Canónicos**
- Sakurai, J. J., & Napolitano, J. (2010). *Modern Quantum Mechanics* (2nd ed.). Addison-Wesley. (Capítulo 1: Conceptos Fundamentales).
- Griffiths, D. J. (2018). *Introduction to Quantum Mechanics* (3rd ed.). Cambridge University Press. (Capítulo 3: Formalismo).
- Cohen-Tannoudji, C., Diu, B., & Laloë, F. (1977). *Quantum Mechanics* (Vol. 1). Wiley-VCH.

**3. Artículos Originales / Historia**
- Dirac, P. A. M. (1939). *A New Notation for Quantum Mechanics*. Mathematical Proceedings of the Cambridge Philosophical Society, 35(3), 416-418.
