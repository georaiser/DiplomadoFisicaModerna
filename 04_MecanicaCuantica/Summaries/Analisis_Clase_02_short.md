# Diplomado en Física Moderna — Módulo 04: Mecánica Cuántica
**Clase:** 02 - Herramientas Matemáticas 1  
**Docente:** Prof. Paulraj Manidurai  
**Fecha:** 12 de septiembre de 2026  
**Temas Cubiertos:** Espacios de Hilbert, Notación de Dirac, Operadores Hermíticos, Valores y Vectores Propios.

## Síntesis de Conceptos Clave

### 1. Espacios de Hilbert y Notación de Dirac
La mecánica cuántica se formula matemáticamente en un Espacio de Hilbert ($\mathcal{H}$), un espacio vectorial complejo con un producto interno definido. El Prof. Manidurai introduce la **Notación de Dirac**, donde los estados cuánticos se representan mediante vectores "ket" $|\psi\rangle$ y sus conjugados duales mediante vectores "bra" $\langle\psi|$. 

El producto interno entre dos estados genera la amplitud de probabilidad de transición y se denota como un "bracket": $\langle\phi|\psi\rangle$. La ortonormalidad de una base discreta se expresa como $\langle \phi_i | \phi_j \rangle = \delta_{ij}$.

### 2. Operadores Lineales y Hermíticos
Los observables físicos (como posición, momento y energía) se representan mediante **Operadores Hermíticos** ($\hat{A} = \hat{A}^\dagger$). La hermiticidad garantiza que los valores propios medibles sean estrictamente reales, una condición sine qua non para que las predicciones teóricas coincidan con las mediciones de laboratorio.

El valor esperado de un observable para un sistema en el estado $|\psi\rangle$ se calcula como $\langle \hat{A} \rangle = \langle \psi | \hat{A} | \psi \rangle$.

### 3. Valores y Vectores Propios
La medición de un observable obliga al sistema a colapsar en uno de sus autoestados (vectores propios). La ecuación de autovalores fundamental es:
 \hat{A} |a_n\rangle = a_n |a_n\rangle 
Donde $ es el valor propio (el resultado de la medición) y $|a_n\rangle$ es el estado del sistema tras la medición. 

### 4. Relaciones de Conmutación
En la mecánica cuántica, el orden en el que se aplican los operadores importa. El conmutador entre dos operadores se define como:
 [\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A} 
Si $[\hat{A}, \hat{B}] \neq 0$, los observables correspondientes son incompatibles y están sujetos al Principio de Incertidumbre de Heisenberg.

## Conclusiones de la Clase
1. El formalismo de Dirac simplifica enormemente el álgebra de los estados cuánticos.
2. Los observables físicos deben ser operadores hermíticos para garantizar resultados reales en las mediciones.
3. El estado de un sistema está completamente determinado por la superposición de los autoestados de un operador.
4. La no conmutatividad es la huella matemática de la naturaleza probabilística e incierta del mundo cuántico.