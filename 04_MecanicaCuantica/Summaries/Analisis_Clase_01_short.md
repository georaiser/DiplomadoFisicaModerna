# Diplomado en Física Moderna — Módulo 04: Mecánica Cuántica
## Análisis de la Clase 01 (Versión Sintética)

**Docente:** Prof. Esteban Sepúlveda (Material base por Esteban Sepúlveda Gómez)
**Módulo:** 04 - Mecánica Cuántica
**Temas Cubiertos:** Dualidad onda-partícula, Ecuación de Schrödinger, Momento angular, Átomo de Hidrógeno.

### 1. Hipótesis de De Broglie y Ondas de Materia
La clase inicia estableciendo el puente entre la radiación electromagnética y la materia. Inspirado por las relaciones del fotón ($E = \hbar\omega$, $p = \hbar k$), De Broglie postuló que las partículas materiales también tienen un comportamiento ondulatorio asociado.

Matemáticamente, comparando la fase de una onda clásica y la onda de materia electromagnética, se deduce la famosa longitud de onda de De Broglie:
$$ \lambda = \frac{h}{p} $$
Esta hipótesis explica por qué los efectos cuánticos no son visibles en objetos macroscópicos (una pelota de tenis tiene $\lambda \sim 10^{-34}$ m), pero son dominantes en partículas subatómicas (el electrón tiene $\lambda \sim 10^{-10}$ m).

### 2. Confirmación Experimental y Paquetes de Ondas
La confirmación de la naturaleza ondulatoria del electrón se logró en 1927 con el experimento de Davisson-Germer, donde un haz de electrones difractó sobre un cristal de níquel, obedeciendo la Ley de Bragg de la misma forma que lo harían los rayos X. 

Para que esta onda material represente una partícula localizada, debe concebirse como un "paquete de ondas" (superposición de varias ondas planas). La envolvente de este paquete viaja a la velocidad de grupo $v_g$, la cual coincide exactamente con la velocidad clásica de la partícula:
$$ v_g = \frac{\partial E}{\partial p} = \frac{p}{m} = v_{\text{clásica}} $$

### 3. La Ecuación de Schrödinger
Para describir la evolución de estas ondas materiales, se requiere una ecuación de onda general. Schrödinger la construyó promoviendo los observables clásicos a operadores cuánticos, utilizando las derivadas de la onda plana:
$$ \hat{p} = -i\hbar \frac{\partial}{\partial x}, \quad \hat{E} = i\hbar \frac{\partial}{\partial t} $$
Aplicando el principio de conservación de energía $E = p^2/2m + V$, se obtiene la Ecuación de Schrödinger dependiente del tiempo:
$$ i\hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V\psi $$

### 4. Cuantización y el Átomo de Hidrógeno
La clase culmina abordando sistemas confinados. Primero en la "Partícula en una Caja 1D", donde los niveles discretos de energía emergen orgánicamente de las condiciones de borde. Luego, este modelo se extiende a 3D, introduciendo el Momentum Angular.

Al resolver la ecuación radial en 3D bajo un potencial central (Coulomb), aparece naturalmente un término de "barrera centrífuga" proporcional a $l(l+1)$. La solución exacta para el estado fundamental recupera analíticamente los postulados empíricos de Bohr, demostrando el enorme éxito predictivo del formalismo de Schrödinger:
$$ E_n = -\frac{m_e e^4}{2\hbar^2 n^2} \approx -13.6 \text{ eV} \quad (\text{para } n=1) $$

### Conclusiones de la Clase
1. La hipótesis de De Broglie unificó la descripción de luz y materia al asignar una longitud de onda a objetos con masa.
2. El concepto clásico de trayectoria es reemplazado por la evolución de un paquete de ondas y su densidad de probabilidad.
3. La ecuación de Schrödinger no se deduce rigurosamente de la física clásica, sino que se postula sustituyendo variables dinámicas por operadores diferenciales.
4. La cuantización de la energía y del momento angular no se imponen "a mano" como en el modelo de Bohr, sino que surgen naturalmente como requisitos matemáticos de las condiciones de contorno y la normalización en las ecuaciones diferenciales.
