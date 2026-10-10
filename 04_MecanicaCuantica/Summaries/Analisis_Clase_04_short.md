# Análisis Corto — Clase 04: Herramientas Matemáticas 2

| Módulo | Clase | Docente | Fecha | Temas |
|---|---|---|---|---|
| 04 — Mecánica Cuántica | 04 | Prof. Aldo Delgado | 25 sep 2026 | Representación Matricial, Operadores Unitarios, Producto Tensorial |

## 1. Representación Matricial de Operadores
La representación matricial permite traducir conceptos abstractos de operadores a matrices y vectores concretos. Dado un operador $M$ y una base ortonormal $\{|i\rangle\}$, sus elementos de matriz se definen como $M_{ij} = \langle i | M | j \rangle$. El operador se reconstruye como $M = \sum_{i,j} M_{ij} |i\rangle\langle j|$. El producto y el adjunto se traducen en la multiplicación matricial estándar y transposición conjugada: $(AB)_{ij} = \sum_k A_{ik} B_{kj}$ y $(M^\dagger)_{ij} = (M_{ji})^*$.

## 2. Operadores Unitarios y Cambio de Base
Un operador $U$ es unitario si cumple $U^\dagger U = U U^\dagger = \mathbb{I}$. Físicamente, representan transformaciones que preservan la norma y probabilidad. Un operador unitario mapea una base ortonormal a otra, preservando el producto escalar. Si cambiamos a una nueva base $|i'\rangle = U|i\rangle$, los elementos de un operador $A$ se transforman como $A'_{ij} = \langle i | U^\dagger A U | j \rangle$.

## 3. Espacios Compuestos — Producto Tensorial
Para describir sistemas con múltiples partículas, se usa el producto tensorial. Si $E_1$ tiene dimensión $d_1$ y $E_2$ tiene $d_2$, el sistema compuesto pertenece a $E_1 \otimes E_2$ con dimensión $d_1 \cdot d_2$. La base es $\{|i\rangle_1 \otimes |j\rangle_2\}$. Un estado general es $|\gamma\rangle = \sum_{i,j} a_{i,j} |i\rangle_1 \otimes |j\rangle_2$. Los operadores en este espacio se representan como matrices de $(d_1 d_2) \times (d_1 d_2)$.

## Conclusiones de la Clase
1. La formulación matricial es fundamental para el cálculo explícito en mecánica cuántica.
2. Los operadores unitarios garantizan la conservación de la probabilidad y dictan los cambios de base.
3. El producto tensorial es el marco matemático para describir sistemas multipartitas y entrelazamiento.
