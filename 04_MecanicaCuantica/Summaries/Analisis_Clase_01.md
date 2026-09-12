# Diplomado en Física Moderna — Módulo 04: Mecánica Cuántica
## Análisis Extendido de la Clase 01: De Broglie, Schrödinger y Momento Angular

**Docente:** Prof. Esteban Sepúlveda (Adaptado a castellano académico estándar. Material base presentado por Esteban Sepúlveda Gómez)
**Módulo:** 04 - Mecánica Cuántica
**Temas Cubiertos:** Dualidad onda-partícula, Paquetes de ondas, Ecuación de Schrödinger, Momento Angular, Átomo de Hidrógeno, Efecto de Barrera Centrífuga.
**Nota de Disponibilidad:** El análisis fue elaborado triangulando las diapositivas oficiales con la bibliografía canónica de la física cuántica (Griffiths, Sakurai) para expandir las derivaciones.

---

## 1. Motivación y Contexto Histórico
*Fuente: Diapositivas 1-6*

La mecánica cuántica se establece sobre la necesidad de explicar fenómenos que escapaban a la física clásica a finales del siglo XIX y principios del XX. La clase enfatiza la "Ruta del Descubrimiento" (1923-1927), partiendo de la proposición teórica hasta la confirmación empírica. Hoy en día, esta teoría no es un mero artefacto filosófico, sino la base tecnológica de nuestro mundo: los semiconductores en transistores, la emisión estimulada en láseres y las correcciones de GPS por relojes atómicos dependen íntegramente de la mecánica cuántica. El nivel de precisión de la teoría es extraordinario, logrando predicciones teóricas como el momento magnético del electrón que concuerdan con los experimentos hasta en 10 cifras significativas.

### La Hipótesis de De Broglie
Inspirado en la teoría cuántica de la luz de Einstein, donde los fotones obedecen a las relaciones:
$$ E = \hbar \omega \quad \text{y} \quad p = \hbar k $$
Louis de Broglie postuló (1923) que las partículas materiales, tradicionalmente tratadas como corpúsculos (electrones, protones), también debían tener un comportamiento ondulatorio. Asumió que la onda de materia asume la misma forma matemática que la de un fotón libre, una onda plana:
$$ \psi_p(x,t) \propto \exp\left[i \frac{p \cdot x - E(p)t}{\hbar}\right] $$

## 2. Derivaciones Matemáticas Iniciales
*Fuente: Diapositivas 7-12*

### Relación de Longitud de Onda
Para encontrar la longitud de onda de la materia, comparamos el exponente de una onda clásica, $k \cdot x$, con el exponente de la onda de De Broglie, $(p \cdot x)/\hbar$. Igualando las partes espaciales obtenemos:
$$ k = \frac{p}{\hbar} $$
Recordando la definición geométrica del número de onda $k = 2\pi / \lambda$, y la constante de Planck reducida $\hbar = h / 2\pi$:
$$ \frac{2\pi}{\lambda} = \frac{2\pi p}{h} \implies \lambda = \frac{h}{p} $$
**Interpretación física:** Toda partícula con momento lineal $p$ tiene una onda asociada de longitud $\lambda$. La masa macroscópica (ej. pelota de tenis, $m=60$ g, $v=50$ m/s) genera un $\lambda \approx 10^{-34}$ m, haciendo imposible observar su difracción. Sin embargo, un electrón de baja energía (ej. 54 eV) tiene $\lambda \approx 1.67 \times 10^{-10}$ m, comparable a la separación atómica en los cristales.

### Velocidad de Grupo y Paquete de Ondas
Una onda plana individual se extiende por todo el espacio infinito y no puede representar a un electrón localizado. Se construye entonces un **paquete de ondas** integrando un espectro continuo de momentos distribuidos alrededor de un momento central $P$, con una función de peso $g(p)$:
$$ \psi(x,t) = \int d^3p \, g(p) \exp\left[ i \frac{p \cdot x - E(p)t}{\hbar} \right] $$
Para hallar la velocidad del paquete (velocidad de grupo $v_g$), expandimos la energía en serie de Taylor alrededor del momento central $P$:
$$ E(p) \approx E(P) + \frac{\partial E}{\partial p}\Big|_P \cdot (p - P) $$
Definiendo $V = \partial E/\partial p$ y sustituyendo en el exponente:
$$ p \cdot x - E(p)t \approx p \cdot x - [E(P) + V \cdot (p - P)]t = p \cdot (x - Vt) - [E(P) - V \cdot P]t $$
Dado que el segundo término es una fase global, vemos que la forma integral se traslada en el espacio como $x - Vt$. Por tanto, la velocidad a la que viaja la envolvente del paquete es:
$$ v_g = V = \frac{\partial E}{\partial p} $$
Verificación no relativista: $E = p^2/2m \implies v_g = \frac{\partial}{\partial p} \left( \frac{p^2}{2m} \right) = \frac{p}{m} = v_{\text{clásica}}$.
El paquete de ondas viaja exactamente a la misma velocidad clásica de la partícula que representa.

## 3. Confirmación Experimental: El Experimento de Davisson-Germer
*Fuente: Diapositivas 13-17*

En 1927, Davisson y Germer dispararon electrones de 54 eV contra un cristal de níquel (espaciado atómico $d = 0.91$ Å). Observaron un fuerte pico de intensidad de electrones dispersados a un ángulo $\theta = 50^\circ$.
Tratando la difracción atómica mediante la **Ley de Bragg** (condición de interferencia constructiva):
$$ n\lambda = 2d \sin \phi $$
La geometría del experimento muestra que el ángulo de dispersión total es $\theta$, mientras que el ángulo de Bragg es $\phi$. Se deduce que $\lambda \approx 1.65$ Å. Por otro camino, calculando el $\lambda$ teórico de De Broglie para $E_k = 54$ eV, se obtiene $\lambda = 1.67$ Å. La convergencia empírica demostró definitivamente que la materia se difracta como una onda. 

## 4. De la Onda a los Operadores: Ecuación de Schrödinger
*Fuente: Diapositivas 18-22*

Si el electrón es una onda, requiere una ecuación diferencial. Tomando la onda de materia libre $\psi = \exp[i(px - Et)/\hbar]$ y aplicando derivadas parciales:
- **Derivada espacial:** $\frac{\partial \psi}{\partial x} = i \frac{p}{\hbar} \psi \implies \hat{p} = -i\hbar \frac{\partial}{\partial x}$
- **Derivada temporal:** $\frac{\partial \psi}{\partial t} = -i \frac{E}{\hbar} \psi \implies \hat{E} = i\hbar \frac{\partial}{\partial t}$

Construimos la ecuación a partir de la relación de dispersión (energía) clásica:
$$ E = \frac{p^2}{2m} + V(x) $$
Sustituyendo los observables por los operadores derivados:
$$ i\hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V(x)\psi $$
Esta es la **Ecuación de Schrödinger Dependiente del Tiempo**.

### Estados Estacionarios y la Caja 1D
Aplicando el método de separación de variables $\psi(x,t) = \phi(x)f(t)$, la dependencia temporal resulta trivial: $f(t) = e^{-iEt/\hbar}$. Dado que la densidad de probabilidad es $|\psi|^2 = |\phi(x)|^2$, estos estados no evolucionan en el tiempo (estados estacionarios). La parte espacial satisface:
$$ -\frac{\hbar^2}{2m} \phi'' + V(x)\phi = E\phi $$
Al confinar la partícula en un pozo de potencial infinito (Caja 1D) de ancho $L$, la función de onda debe anularse en los bordes ($\phi(0) = \phi(L) = 0$). La solución general $\phi(x) = A\sin(kx)$ requiere $kL = n\pi$, lo que automáticamente discretiza (cuantiza) la energía permitida:
$$ E_n = \frac{n^2 \pi^2 \hbar^2}{2m L^2} $$
**Interpretación física:** A diferencia de la mecánica clásica donde una partícula atrapada puede tener cualquier energía continua e incluso detenerse, la cuántica exige que la partícula posea una energía fundamental estrictamente positiva (para $n=1$), conocida como *energía de punto cero*.

## 5. Extensión a 3D: Momentum Angular y el Átomo de Hidrógeno
*Fuente: Diapositivas 23-29 y Bibliografía Canónica*

Para modelar un átomo, debemos pasar de 1D lineal a 3D rotacional. Clásicamente, el momento angular orbital es $\vec{L} = \vec{r} \times \vec{p}$.
Cuantizamos reemplazando $\vec{p}$ por su operador vector gradiente $-i\hbar \nabla$. La componente $z$ en coordenadas polares queda simplificada a:
$$ \hat{L}_z = -i\hbar \frac{\partial}{\partial \varphi} $$
La ecuación de valores propios $\hat{L}_z \Phi(\varphi) = m\hbar \Phi(\varphi)$ tiene solución $\Phi \propto e^{im\varphi}$. Para que la función sea univaluada en el espacio al dar una vuelta completa, $\Phi(\varphi + 2\pi) = \Phi(\varphi)$, se impone que $m \in \mathbb{Z}$. Así, el momentum angular $\hat{L}_z$ está intrínsecamente cuantizado.

El operador del momento angular total al cuadrado $\hat{L}^2$ posee como auto-funciones a los **Armónicos Esféricos** $Y_l^m(\theta,\varphi)$, cumpliendo:
$$ \hat{L}^2 Y_l^m = l(l+1)\hbar^2 Y_l^m $$

### Ecuación Radial y Barrera Centrífuga
Para un potencial central dependiente solo del radio $V(r)$, la ecuación de Schrödinger en 3D se separa. Sustituyendo el "ansatz" $u(r) = rR(r)$ en la parte radial para simplificar las derivadas, la ecuación 3D se colapsa a una ecuación unidimensional efectiva:
$$ -\frac{\hbar^2}{2m} u'' + \left[ V(r) + \frac{l(l+1)\hbar^2}{2mr^2} \right] u = E u $$
**Interpretación física:** El término adicional $l(l+1)\hbar^2 / (2mr^2)$ actúa como un potencial repulsivo imaginario. Es la **barrera centrífuga**. Si el electrón rota muy rápido ($l > 0$), esta fuerza aparente empuja la función de onda alejándola del origen ($r=0$). 

### Solución del Estado Fundamental del Hidrógeno
Con el potencial de Coulomb electrostático $V(r) = -e^2 / (4\pi \epsilon_0 r)$ [O simplificado en el sistema CGS: $V(r) = -e^2/r$], la función de onda radial del estado fundamental asume una forma exponencial decayente $u(r) \propto r e^{-r/a}$.
Sustituyendo esto en la ecuación radial (con $l=0$) y agrupando los coeficientes de las potencias de $r$, forzamos a que estos coeficientes sean idénticamente cero en todo el espacio. Esto arroja directamente:
1. El Radio de Bohr: $a = \frac{\hbar^2}{m_e e^2}$
2. La Energía de Bohr: $E_1 = -\frac{m_e e^4}{2\hbar^2}$

La mecánica cuántica matricial y ondulatoria derivan teóricamente de forma rigurosa los postulados que Bohr, años antes, había tenido que insertar artificialmente para explicar el átomo.

## 6. Conclusiones de la Clase
1. El comportamiento de las partículas subatómicas es ondulatorio, siendo su longitud de onda inversamente proporcional al momento y viajando el conjunto a la velocidad clásica del cuerpo.
2. Los observables físicos clásicos están matemáticamente representados por operadores diferenciales hermíticos que actúan sobre la función de estado.
3. La "Cuantización" no es un axioma exógeno, sino una consecuencia directa y natural del confinamiento espacial y de la necesidad de que las funciones de onda sean continuas y normalizables.
4. El término de barrera centrífuga repulsiva surge en sistemas 3D como consecuencia directa del momentum angular conservado y deforma radialmente el espacio probabilístico del electrón.

---

## 7. Referencias Bibliográficas

1. **Artículos Fundamentales:**
   - de Broglie, L. (1924). *Recherches sur la théorie des quanta* (Tesis Doctoral), Universidad de París.
   - Schrödinger, E. (1926). *An Undulatory Theory of the Mechanics of Atoms and Molecules*. Physical Review.
   - Davisson, C., & Germer, L. H. (1927). *Diffraction of Electrons by a Crystal of Nickel*. Physical Review.

2. **Textos Canónicos Universitarios:**
   - Griffiths, D. J. (2018). *Introduction to Quantum Mechanics* (3rd ed.). Cambridge University Press. (Capítulos 1-4: Derivación de la Ecuación de Schrödinger, Pozo Potencial y Átomo de Hidrógeno).
   - Sakurai, J. J., & Napolitano, J. (2017). *Modern Quantum Mechanics* (2nd ed.). Cambridge University Press. (Capítulo 1 y 3: Teoría del momento angular cuántico).
   - Cohen-Tannoudji, C., Diu, B., & Laloë, F. (1977). *Quantum Mechanics* (Vol. 1). Wiley-VCH. (Complementos sobre paquetes de onda y velocidad de grupo).

3. **Recursos Complementarios del Diplomado:**
   - *50 Temas Fascinantes de la Física Cuántica* (PDF).
   - *Mecánica Cuántica para Principiantes* (PDF).
   - *Quantum Mechanics Simulations (QuVis)*: Paquete de ondas gaussianas. University of St Andrews.
