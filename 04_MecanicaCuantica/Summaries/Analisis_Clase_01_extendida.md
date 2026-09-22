# Análisis Extendido — Clase 01: Mecánica Ondulatoria y Cuantización

**Docente:** Esteban Sepúlveda
**Fecha:** 28 ago 2026
**Módulo:** 04 — Mecánica Cuántica | Diplomado en Física Moderna
**Fuentes utilizadas:** Transcripción de clase, diapositivas, Griffiths (Introduction to Quantum Mechanics), Sakurai (Modern Quantum Mechanics), Cohen-Tannoudji (Mécanique Quantique).
**Propósito:** Documento de estudio profundo y autocontenido. Sin restricción de extensión.

---

## Introducción General de la Clase
La mecánica cuántica reemplaza la trayectoria clásica determinista de una partícula por la descripción probabilística de una función de onda. En esta clase fundacional, establecemos la necesidad de una descripción ondulatoria de la materia a través de la hipótesis de De Broglie, exploramos cómo estas ondas de materia forman paquetes de ondas, y derivamos la Ecuación de Schrödinger. Posteriormente, aplicamos estos principios axiomáticos a la partícula en una caja monodimensional y finalmente al átomo de hidrógeno en tres dimensiones, introduciendo el concepto de cuantización del momento angular y la estructura de niveles de energía discretos.

## 1. Hipótesis de De Broglie y dualidad onda-partícula

*Fuente primaria: Griffiths, cap. 1. Fuente complementaria: Cohen-Tannoudji, cap. 1.*

### 1.1 Motivación y Contexto Histórico
En 1924, Louis de Broglie propuso en su tesis doctoral una simetría fundamental en la naturaleza: si la luz (tradicionalmente vista como onda) exhibía propiedades corpusculares (como en el efecto fotoeléctrico y el efecto Compton), entonces la materia (vista clásicamente como partículas) debía poseer propiedades ondulatorias. Esta idea revolucionaria fue recibida inicialmente con escepticismo, pero fue fuertemente defendida por Einstein.

### 1.2 Desarrollo Conceptual
La intuición de De Broglie se basó en conectar las relaciones energéticas de la relatividad especial y la teoría cuántica emergente de Planck y Einstein. Si para un fotón su momento lineal $p$ está relacionado con su longitud de onda $\lambda$ mediante $p = h/\lambda$, esta misma relación debería regir para las partículas masivas.

### 1.3 Derivación Matemática Completa
Para un fotón de luz de frecuencia $\nu$, la energía es dada por la relación de Planck-Einstein:
$$ E = h\nu $$
De la relatividad especial, para una partícula de masa en reposo $m_0 = 0$ (el fotón), la relación energía-momento es:
$$ E = pc $$
Igualando ambas expresiones:
$$ pc = h\nu \implies p = \frac{h\nu}{c} $$
Sabemos que para una onda que se propaga a la velocidad de la luz $c$, la longitud de onda y la frecuencia están relacionadas por $\lambda\nu = c$. Por lo tanto, $c/\nu = \lambda$. Sustituyendo esto, obtenemos el momento del fotón:
$$ p = \frac{h}{\lambda} $$
De Broglie postuló que esta misma relación se aplica a todas las partículas (electrones, protones, etc.):
$$ \lambda = \frac{h}{p} $$
donde $p = mv$ (en el límite no relativista) o $p = \gamma mv$ (en régimen relativista). Usando el vector de onda $k = 2\pi/\lambda$ y la constante reducida de Planck $\hbar = h/2\pi$, podemos reescribir esta relación como:
$$ p = \hbar k $$

### 1.4 Interpretación Física del Resultado
La ecuación $\lambda = h/p$ indica que a cada partícula material en movimiento se le puede asociar una "onda de materia". La longitud de onda es inversamente proporcional al momento: objetos macroscópicos tienen momentos inmensos comparados con $h$, resultando en longitudes de onda indetectablemente pequeñas, lo que explica por qué no observamos difracción de pelotas de béisbol.

### 1.5 Límites y Casos Especiales
En el límite clásico (masa $m \to \infty$ a escala humana o $h \to 0$), $\lambda \to 0$ y los efectos ondulatorios desaparecen, recuperando la mecánica newtoniana. Para partículas ultrarrelativistas, $p \approx E/c$, recuperando el comportamiento tipo fotón.

### 1.6 Aplicaciones y Ejemplos Numéricos
Consideremos un electrón ($m \approx 9.11 \times 10^{-31}$ kg) acelerado desde el reposo por una diferencia de potencial $V = 100$ V. Su energía cinética es $K = eV = 100$ eV $\approx 1.6 \times 10^{-17}$ J.
Como $K = p^2/2m$, el momento es $p = \sqrt{2mK} \approx 5.4 \times 10^{-24}$ kg m/s.
La longitud de onda de De Broglie es:
$$ \lambda = \frac{6.626 \times 10^{-34}}{5.4 \times 10^{-24}} \approx 1.23 \times 10^{-10} \text{ m} = 1.23 \text{ \AA} $$
Este valor está en la escala del espaciamiento atómico en cristales, sugiriendo difracción observable.

### 1.7 Profundización
La idea de las ondas de materia lleva inevitablemente a preguntarnos: ¿qué es lo que oscila? Para las ondas electromagnéticas, oscilan los campos eléctricos y magnéticos. Para la materia, la interpretación moderna (debida a Max Born) es que la onda está relacionada con la amplitud de probabilidad de encontrar a la partícula en el espacio, que derivará en la función de onda $\Psi$.

### Preguntas de Comprensión
1. ¿Por qué la hipótesis de De Broglie reconcilia el comportamiento corpuscular y ondulatorio?
2. Calcule la longitud de onda de un ser humano de 70 kg corriendo a 5 m/s y explique por qué no experimenta difracción.
3. Si la masa de una partícula se duplica manteniendo la misma energía cinética, ¿qué ocurre con su longitud de onda?

## 2. Confirmación experimental: experimento Davisson-Germer (1927)

*Fuente primaria: Eisberg & Resnick. Fuente complementaria: Feynman Lectures Vol III.*

### 2.1 Motivación y Contexto Histórico
A pesar de la elegancia teórica de De Broglie, faltaba evidencia experimental de la naturaleza ondulatoria de los electrones. Clinton Davisson y Lester Germer dispararon electrones contra un cristal de níquel en 1927 y observaron patrones de difracción, confirmando la teoría.

### 2.2 Desarrollo Conceptual
Si los electrones se comportan como ondas con $\lambda \approx 1$ Å, al incidir en un cristal (red de espaciado similar), deben interferir constructivamente siguiendo la Ley de Bragg, similar a la cristalografía de rayos X.

### 2.3 Derivación Matemática Completa
La Ley de Bragg estipula la condición para interferencia constructiva máxima de ondas esparcidas por planos atómicos separados por $D$:
$$ n\lambda = D \sin \theta $$
Davisson y Germer hallaron el pico primario ($n=1$) a un ángulo $\theta = 50^\circ$ usando un cristal con $D = 2.15$ Å. Sustituyendo, obtenemos:
$$ \lambda \approx 2.15 \sin(50^\circ) \text{ \AA} \approx 1.65 \text{ \AA} $$
Esto coincidió exactamente con el $\lambda$ teórico para los electrones usados ($V=54$ V).

### 2.4 Interpretación Física del Resultado
Los electrones interfieren consigo mismos, validando innegablemente el comportamiento ondulatorio de la materia masiva. No rebotan como bolas de billar, sino que experimentan interferencia de sus propias ondas de probabilidad.

### 2.5 Límites y Casos Especiales
Para electrones demasiado lentos, el espaciado atómico no puede causar difracción, comportándose como espejos, y si son muy rápidos, la difracción se pierde debido a interacciones secundarias complejas.

### 2.6 Aplicaciones y Ejemplos Numéricos
El microscopio electrónico explota que un electrón a altas velocidades tiene $\lambda \ll \lambda_{\text{luz visible}}$, superando el límite de difracción óptico y permitiendo resolución a nivel atómico.

### 2.7 Profundización
El experimento se puede realizar atenuando la intensidad del haz hasta enviar un solo electrón a la vez a través de un experimento de doble rendija, mostrando que la interferencia es una propiedad de una única partícula y no un fenómeno estadístico de muchas partículas interactuando.

### Preguntas de Comprensión
1. ¿Cuál fue el papel crítico del cristal de níquel en este experimento?
2. Derivar la Ley de Bragg trigonométricamente basándose en la diferencia de caminos ópticos.
3. Compare el comportamiento de fotones de rayos X con electrones de 50 eV al difractar.

## 3. Paquetes de ondas y velocidad de grupo

*Fuente primaria: Gasiorowicz, cap. 2.*

### 3.1 Motivación y Contexto Histórico
Una onda monocromática pura existe en todo el espacio ($x \in (-\infty, \infty)$), lo que hace imposible localizar a la partícula. Para que la descripción ondulatoria sea compatible con partículas reales localizadas, se propuso construir un "paquete" de ondas.

### 3.2 Desarrollo Conceptual
Al sumar (integrar) múltiples ondas planas con números de onda (momentos) cercanos, la interferencia constructiva ocurre solo en una región localizada del espacio. Esta perturbación combinada se mueve con una "velocidad de grupo".

### 3.3 Derivación Matemática Completa
Una onda plana individual es $\Psi_k(x,t) = e^{i(kx - \omega t)}$. El paquete se construye con una distribución de amplitudes $\phi(k)$ alrededor de $k_0$:
$$ \Psi(x,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \phi(k) e^{i(kx - \omega(k) t)} dk $$
Expandiendo $\omega(k)$ en serie de Taylor alrededor de $k_0$:
$$ \omega(k) \approx \omega_0 + \left. \frac{d\omega}{dk} \right|_{k_0} (k - k_0) $$
Sustituyendo esto en la fase $kx - \omega(k)t$:
$$ kx - \omega(k)t \approx k_0 x - \omega_0 t + (k - k_0)\left(x - \frac{d\omega}{dk} t\right) $$
La envolvente del paquete depende del término $(x - v_g t)$, donde la velocidad de grupo es:
$$ v_g = \frac{d\omega}{dk} $$
Usando $E = \hbar\omega$ y $p = \hbar k$:
$$ v_g = \frac{d(\hbar \omega)}{d(\hbar k)} = \frac{dE}{dp} $$
Para una partícula libre con $E = p^2/2m$, tenemos $v_g = \frac{d}{dp}\left(\frac{p^2}{2m}\right) = \frac{p}{m} = v_{\text{clásica}}$.

### 3.4 Interpretación Física del Resultado
La velocidad de fase ($v_f = \omega/k = p/2m = v/2$) no corresponde a la velocidad clásica. Sin embargo, la envolvente del paquete de probabilidad, la cual contiene la partícula (y la información/energía), se mueve exactamente con la velocidad clásica $v_g$.

### 3.5 Límites y Casos Especiales
Para ondas en un medio no dispersivo, la relación de dispersión es lineal $\omega = c k$, y por lo tanto $v_f = v_g = c$, como en la luz en el vacío.

### 3.6 Aplicaciones y Ejemplos Numéricos
Si un fotón tiene $E = pc$, $v_g = dE/dp = c$. Si un electrón tiene $E = p^2/2m$, su $v_g = p/m$.

### 3.7 Profundización
El paquete no permanece constante. El término de segundo orden en la serie de Taylor de $\omega(k)$ causa la dispersión (ensanchamiento) del paquete de ondas a medida que avanza el tiempo, indicando que la incertidumbre espacial aumenta para partículas cuánticas libres con el paso del tiempo.

### Preguntas de Comprensión
1. ¿Por qué $v_f$ no representa la velocidad a la que se mueve la partícula?
2. Explique conceptualmente qué causa el ensanchamiento temporal de un paquete de ondas de De Broglie en el vacío.
3. Calcule $v_g$ para una partícula en régimen relativista $E^2 = (pc)^2 + (m_0c^2)^2$.

## 4. Ecuación de Schrödinger: derivación y significado

*Fuente primaria: Shankar, cap. 4. Fuente complementaria: Griffiths.*

### 4.1 Motivación y Contexto Histórico
Tras la postulación de las ondas de materia, Erwin Schrödinger se dispuso en 1926 a encontrar la ecuación diferencial determinista que controlara su evolución temporal.

### 4.2 Desarrollo Conceptual
La ecuación debía ser lineal en $\Psi$ para garantizar el principio de superposición. Además, debía depender solo de la primera derivada en el tiempo para que el estado inicial determinase los estados futuros sin ambigüedad. Debía ser consistente con $E = p^2/2m + V$.

### 4.3 Derivación Matemática Completa
Asumiendo la solución de onda plana libre $\Psi(x,t) = e^{i(px - Et)/\hbar}$.
La derivada espacial es:
$$ \frac{\partial \Psi}{\partial x} = \frac{ip}{\hbar} \Psi \implies \frac{\partial^2 \Psi}{\partial x^2} = -\frac{p^2}{\hbar^2} \Psi \implies \frac{p^2}{2m}\Psi = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} $$
La derivada temporal es:
$$ \frac{\partial \Psi}{\partial t} = -\frac{iE}{\hbar} \Psi \implies E\Psi = i\hbar \frac{\partial \Psi}{\partial t} $$
Estas relaciones nos permiten identificar los operadores mecánico-cuánticos:
$$ \hat{p} = -i\hbar \frac{\partial}{\partial x}, \quad \hat{E} = i\hbar \frac{\partial}{\partial t} $$
De la ley de conservación de la energía clásica total $E = K + V = p^2/2m + V(x,t)$, imponemos la equivalencia de los operadores actuando sobre $\Psi$:
$$ \hat{E}\Psi = \left( \frac{\hat{p}^2}{2m} + V(x,t) \right) \Psi $$
Sustituyendo los operadores, se obtiene la Ecuación de Schrödinger Dependiente del Tiempo (TDSE):
$$ i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V(x,t)\Psi $$
Definimos el operador Hamiltoniano $\hat{H} = -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x,t)$, quedando $i\hbar \partial_t \Psi = \hat{H}\Psi$.
Para que $\Psi$ tenga sentido estadístico (Interpretación de Born), la probabilidad de encontrar la partícula es $dP = |\Psi(x,t)|^2 dx$. Como la partícula debe estar en algún lugar del espacio, imponemos la condición de normalización:
$$ \int_{-\infty}^{\infty} |\Psi(x,t)|^2 dx = 1 $$

### 4.4 Interpretación Física del Resultado
Mientras la mecánica clásica se rige por la ecuación de Newton, determinando $(x,p)$ en todo instante, la mecánica cuántica utiliza un determinismo sobre una densidad de probabilidad inobservable directamente. La variable imaginaria $i$ exige que las soluciones tengan fase y presenten interferencia compleja.

### 4.5 Límites y Casos Especiales
Si el potencial es independiente del tiempo, $V=V(x)$, el método de separación de variables $\Psi(x,t) = \psi(x)\phi(t)$ nos conduce a la Ecuación de Schrödinger Independiente del Tiempo (TISE): $\hat{H}\psi = E\psi$, donde $E$ son los valores propios de energía.

### 4.6 Aplicaciones y Ejemplos Numéricos
Para una partícula libre con momento fijo $p = \hbar k$, el Hamiltoniano es pura energía cinética. El espectro de la energía es un continuo $E = \hbar^2 k^2/2m$, y estas ondas planas no son normalizables, indicando que el momento exacto requiere que la posición esté completamente indeterminada.

### 4.7 Profundización
El hecho de que el Hamiltoniano genere las traslaciones en el tiempo está íntimamente ligado al Teorema de Noether y la conservación de la energía. Así mismo, la ecuación asegura la conservación de la probabilidad local a través de la corriente de probabilidad, $\vec{J} = \frac{\hbar}{m} \text{Im}(\Psi^*\nabla\Psi)$.

### Preguntas de Comprensión
1. ¿Por qué la ecuación de Schrödinger no puede ser una ecuación de onda de segundo orden en el tiempo (como la ecuación de ondas acústicas)?
2. Explique en sus propias palabras la interpretación probabilística de Max Born.
3. Compruebe la linealidad de la Ecuación de Schrödinger.

## 5. Cuantización en la partícula en una caja 1D

*Fuente primaria: Griffiths, cap. 2.*

### 5.1 Motivación y Contexto Histórico
El modelo de pozo de potencial infinito ilustra la consecuencia directa de las condiciones de contorno espaciales en la ecuación de onda: el nacimiento de la cuantización de niveles energéticos y del momento, vital en aplicaciones modernas de física de semiconductores.

### 5.2 Desarrollo Conceptual
Si una partícula está encerrada, su onda de probabilidad no puede propagarse más allá de los bordes. Su amplitud debe anularse rígidamente allí, creando modos de ondas estacionarias "permitidas" de manera análoga a los armónicos de una cuerda vibrante.

### 5.3 Derivación Matemática Completa
Sean $V(x) = 0$ para $0 \le x \le L$, y $\infty$ para $x < 0, x > L$.
Dentro de la región permitida, la TISE es:
$$ -\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} = E\psi \implies \frac{d^2\psi}{dx^2} = -k^2\psi $$
donde $k^2 = \frac{2mE}{\hbar^2}$. La solución general es $\psi(x) = A \sin(kx) + B \cos(kx)$.
Aplicando condiciones de borde (impenetrabilidad infinita):
1) $\psi(0) = 0 \implies A(0) + B(1) = 0 \implies B = 0$.
2) $\psi(L) = 0 \implies A \sin(kL) = 0$.
Para evitar la solución trivial nula, $\sin(kL) = 0 \implies kL = n\pi$ para $n = 1, 2, 3, \dots$.
Esto restringe el vector de onda: $k_n = \frac{n\pi}{L}$.
Las energías permitidas son, por tanto:
$$ E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{n^2 \pi^2 \hbar^2}{2mL^2} $$
Para encontrar la constante de normalización $A$:
$$ \int_0^L |A|^2 \sin^2\left(\frac{n\pi x}{L}\right) dx = 1 \implies |A|^2 \frac{L}{2} = 1 \implies A = \sqrt{\frac{2}{L}} $$
Finalmente:
$$ \psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right) $$

### 5.4 Interpretación Física del Resultado
La energía se cuantiza: la partícula no puede adoptar cualquier valor energético. A diferencia de la física clásica, el estado de menor energía ($n=1$, estado base) no es cero. Esta "energía del punto cero" es requerida por el principio de incertidumbre: si $\Delta x \approx L$, debe haber una variación en el momento $\Delta p \ge \hbar/2L$.

### 5.5 Límites y Casos Especiales
A medida que $L \to \infty$ o $m \to \infty$ o $\hbar \to 0$, el espaciado entre niveles $\Delta E = E_{n+1} - E_n$ se vuelve infinitamente pequeño, y el espectro energético parece continuo a escalas macroscópicas.

### 5.6 Aplicaciones y Ejemplos Numéricos
Consideremos un electrón ($m=9.11 \times 10^{-31}$ kg) en un nanocable de longitud $L = 10$ nm ($10^{-8}$ m). Su energía fundamental es:
$$ E_1 = \frac{(1^2) \pi^2 (1.054 \times 10^{-34})^2}{2 \times (9.11 \times 10^{-31}) \times (10^{-8})^2} \approx 6.0 \times 10^{-22} \text{ J} \approx 3.7 \text{ meV} $$
Una transición de $n=2$ a $n=1$ emitirá un fotón de energía $\Delta E = E_2 - E_1 = 4E_1 - E_1 = 3E_1 \approx 11.1$ meV.

### 5.7 Profundización
El modelo puede generalizarse a pozos finitos, donde las funciones de onda penetran exponencialmente más allá de los muros clásicos, posibilitando el fenómeno del "efecto túnel" cuántico, pilar en los diodos túnel y las memorias flash.

### Preguntas de Comprensión
1. ¿Por qué $n=0$ no es un estado permitido en este sistema?
2. Demuestre matemáticamente la ortogonalidad: $\int \psi_1(x) \psi_2(x) dx = 0$.
3. Describa cómo sería la función de probabilidad $|\psi(x)|^2$ para un estado muy excitado, $n = 100$.

## 6. Extensión a 3D: momentum angular y barrera centrífuga

*Fuente primaria: Sakurai, cap. 3. Fuente complementaria: Cohen-Tannoudji, cap. 6.*

### 6.1 Motivación y Contexto Histórico
Para describir entidades reales en nuestro mundo tridimensional, específicamente electrones atrapados en campos centrales (átomos), la ecuación de Schrödinger de una dimensión resultaba insuficiente. Se requería la separación de variables en coordenadas esféricas y el tratamiento riguroso del momento angular orbital.

### 6.2 Desarrollo Conceptual
Cuando un potencial depende solo de la distancia $V(r)$, la conservación del momento angular clásico implica simetrías profundas en el modelo cuántico. La función de onda puede factorizarse en una dependencia angular (relativa a las rotaciones) y otra radial. Las rotaciones añaden una pseudo-fuerza repulsiva al núcleo debido a que una partícula con masa requiere energía para estar girando en radios más cortos.

### 6.3 Derivación Matemática Completa
El laplaciano en esféricas es:
$$ \nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta\frac{\partial}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2}{\partial \phi^2} $$
La parte angular de este operador está proporcional al operador cuadrado del momento angular $\hat{L}^2$:
$$ \nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right) - \frac{\hat{L}^2}{\hbar^2 r^2} $$
Sustituyendo esto en la TISE tridimensional $\left[ -\frac{\hbar^2}{2m} \nabla^2 + V(r) \right] \Psi(\vec{r}) = E \Psi(\vec{r})$, se propone la separación $\Psi(r,\theta,\phi) = R(r)Y_l^m(\theta,\phi)$, donde los $Y_l^m$ son los armónicos esféricos, autofunciones de $\hat{L}^2$:
$$ \hat{L}^2 Y_l^m = \hbar^2 l(l+1) Y_l^m $$
Reemplazando y simplificando con el término angular, la ecuación residual para la parte radial es:
$$ -\frac{\hbar^2}{2m} \frac{1}{r^2} \frac{d}{dr} \left(r^2 \frac{dR}{dr}\right) + \left[ V(r) + \frac{\hbar^2 l(l+1)}{2mr^2} \right] R(r) = E R(r) $$
Haciendo un cambio de variable conveniente $U(r) = rR(r)$, la primera derivada se simplifica y recuperamos una ecuación cuasi-unidimensional para la función radial efectiva:
$$ -\frac{\hbar^2}{2m} \frac{d^2 U}{dr^2} + \left[ V(r) + \frac{\hbar^2 l(l+1)}{2mr^2} \right] U(r) = E U(r) $$
El término $\frac{\hbar^2 l(l+1)}{2mr^2}$ corresponde a la repulsión centrífuga.

### 6.4 Interpretación Física del Resultado
La ecuación tridimensional radial idéntica a una unidimensional pero en la región semi-infinita $r > 0$ y bajo un "potencial efectivo" constituido por el verdadero potencial central más el potencial centrífugo. Mientras mayor es $l$, más repele la barrera a la partícula desde el origen, desplazando la probabilidad lejos del centro.

### 6.5 Límites y Casos Especiales
Si la partícula está en un estado $s$ (momentum angular orbital cero, $l=0$), la repulsión centrífuga desaparece por completo, por lo cual los electrones $s$ pueden estar sobre el núcleo (fenómeno clave para la captura electrónica beta y el ensanchamiento hiperfino).

### 6.6 Aplicaciones y Ejemplos Numéricos
En el caso de un electrón $3d$ de transición ($l=2$), la barrera centrífuga repulsiva efectiva a 1 Å del núcleo suma unos $V_{cent} \sim \frac{6 \hbar^2}{2 m (10^{-10})^2} \approx 22.8$ eV repulsivos, forzando fuertemente el estado $3d$ a situarse a mayor distancia que los orbitales $3s$.

### 6.7 Profundización
El grupo algebraico SU(2) gobierna no solo las rotaciones espaciales continuas ligadas a este $l$, sino también las rotaciones intrínsecas del espín $S$. La adición conjunta conduce a la estructura fina real de los átomos por el acoplamiento espín-órbita.

### Preguntas de Comprensión
1. ¿Cuál es la restricción sobre los valores posibles de $l$ y $m$?
2. Justifique por qué introducimos la función modificada $U(r) = rR(r)$.

## 7. Átomo de hidrógeno bajo potencial de Coulomb

*Fuente primaria: Griffiths, cap. 4. Fuente complementaria: Shankar, cap. 12.*

### 7.1 Motivación y Contexto Histórico
El gran triunfo inicial de la mecánica cuántica de Schrödinger fue explicar exactamente los niveles energéticos discretos que el modelo semiclásico de Bohr predecía para el hidrógeno (series espectrales de Lyman, Balmer), todo esto directamente desde primeros principios.

### 7.2 Desarrollo Conceptual
Usando la ecuación radial deducida, y aplicando el potencial atractivo de Coulomb ($V(r) \propto -1/r$), las condiciones de frontera requieren que las soluciones asintóticas para grandes distancias decaigan. Solo ciertas potencias discretas logran truncar una serie polinómica infinita de soluciones previniendo divergencias espaciales, generando la cuantización natural del número $n$.

### 7.3 Derivación Matemática Completa
El potencial central es el pozo de Coulomb $V(r) = -\frac{e^2}{4\pi\varepsilon_0 r}$.
En la ecuación de $U(r)$ para el caso ligado ($E < 0$):
$$ -\frac{\hbar^2}{2m_e} \frac{d^2U}{dr^2} + \left[ -\frac{e^2}{4\pi\varepsilon_0 r} + \frac{\hbar^2 l(l+1)}{2m_e r^2} \right] U = E U $$
Introducimos variables adimensionales $\rho = \kappa r$ con $\kappa = \frac{\sqrt{-2m_e E}}{\hbar}$, y un parámetro constante $\rho_0 = \frac{m_e e^2}{2\pi\varepsilon_0 \hbar^2 \kappa}$.
La ecuación se convierte en:
$$ \frac{d^2U}{d\rho^2} = \left[ 1 - \frac{\rho_0}{\rho} + \frac{l(l+1)}{\rho^2} \right] U $$
Asintóticamente, para $\rho \to \infty$, $U'' = U \implies U(\rho) \sim e^{-\rho}$. Cerca del origen $\rho \to 0$, $U(\rho) \sim \rho^{l+1}$.
Filtramos el comportamiento asintótico sugiriendo $U(\rho) = \rho^{l+1} e^{-\rho} v(\rho)$.
Al sustituir, resulta en una ecuación diferencial (de Laguerre asociada) que podemos resolver como serie de potencias: $v(\rho) = \sum_{j=0}^{\infty} c_j \rho^j$.
El método de Frobenius da la relación de recurrencia entre coeficientes:
$$ c_{j+1} = \frac{2(j + l + 1) - \rho_0}{(j+1)(j+2l+2)} c_j $$
Si la serie nunca terminara, dominaría como $e^{2\rho}$ y $U$ divergería a infinito. Por tanto, el numerador de la recursividad debe hacerse cero para algún entero máximo $j_{max}$. Esto impone:
$$ 2(j_{max} + l + 1) - \rho_0 = 0 \implies \rho_0 = 2n $$
donde se ha definido el número cuántico principal $n \equiv j_{max} + l + 1$. Al ser $j_{max} \ge 0$, tenemos siempre que $n > l$.
Recordando la definición de $\rho_0 = 2n$:
$$ \frac{m_e e^2}{2\pi\varepsilon_0 \hbar^2 \kappa} = 2n \implies \kappa = \frac{m_e e^2}{4\pi\varepsilon_0 \hbar^2 n} $$
Y como $E = -\frac{\hbar^2 \kappa^2}{2m_e}$:
$$ E_n = - \left[ \frac{m_e}{2\hbar^2} \left( \frac{e^2}{4\pi\varepsilon_0} \right)^2 \right] \frac{1}{n^2} $$

### 7.4 Interpretación Física del Resultado
Los niveles de energía del electrón en el átomo de hidrógeno dependen fundamentalmente del número $n$ y degeneran (son idénticos) independientemente de los números orbital $l$ o magnético $m$, una característica altamente particular del potencial $1/r$ (simetría de Runge-Lenz).

### 7.5 Límites y Casos Especiales
Cuando $n \to \infty$, los niveles se aprietan infinitamente y $E \to 0$, marcando el límite de ionización, donde el espectro deja de estar cuantizado y pasa a ser continuo y positivo para los electrones libres.

### 7.6 Aplicaciones y Ejemplos Numéricos
Evaluando la constante en el corchete:
$m_e = 9.11 \times 10^{-31}$ kg, $e = 1.6 \times 10^{-19}$ C.
Se recupera exactamente el radio de Bohr $a_0 = 0.529$ Å.
$$ E_n = - \frac{13.6 \text{ eV}}{n^2} $$
Para saltar de $n=1$ ($E_1 = -13.6$ eV) a $n=2$ ($E_2 = -3.4$ eV), se requiere un fotón de $10.2$ eV.

### 7.7 Profundización
Las correcciones a este espectro (estructura fina e hiperfina y el corrimiento de Lamb) son los test experimentales más exitosos en la historia de la física del estado sólido y el preámbulo a la electrodinámica cuántica (QED), mostrando como la espin y las fluctuaciones de vacío perturban los resultados.

### Preguntas de Comprensión
1. ¿Por qué es físicamente indispensable truncar la serie de potencias $v(\rho)$?
2. Explique conceptualmente por qué la energía en el átomo de hidrógeno, a pesar del marco analítico más complejo, depende única y exclusivamente de $n$.
3. Calcule la energía de ionización requerida en Joules para un átomo de Hidrógeno en su primer estado excitado.

---

## Conexiones entre Temas y con el Módulo
El flujo lógico de la clase es impecable. Comienza reconociendo la crisis ontológica de las partículas, se apoya en la intuición unificadora de De Broglie, desarrolla la arquitectura temporal (Ecuación de Schrödinger), para culminar en la majestuosidad algorítmica y determinista pero probabilística en su naturaleza para el átomo de Hidrógeno. Estos pilares fundamentarán clases futuras sobre espín, perturbaciones y entrelazamiento, todas asumiendo el espacio de Hilbert estricto que hoy ha nacido analíticamente.

## Conclusiones Académicas
1. **Universalidad Ondulatoria:** La materia, al igual que la luz, presenta una dualidad inherente. La descripción requiere un giro axiomático donde la posición pierde su estatus de certeza, derivando su existencia en funciones probabilísticas $\Psi$.
2. **Rol del Hamiltoniano:** Toda la física atómica o subatómica no-relativista subyace en proponer el operador Hamiltoniano adecuado del sistema y resolver su ecuación de autovalores; la complejidad empírica se oculta tras los potenciales introducidos.
3. **Mecanismo de Cuantización Espacial:** La energía discreta de la materia jamás surge espontáneamente del Hamiltoniano puro, es la restricción impuesta por las **condiciones de contorno** del universo observable sobre la ecuación diferencial lo que genera las estructuras cuánticas de nuestro universo.

## Referencias Bibliográficas
### 1. Artículos científicos originales
- de Broglie, L. (1924). *Recherches sur la théorie des quanta*. Annales de Physique, 3, 22-128.
- Davisson, C., & Germer, L. H. (1927). *Diffraction of electrons by a crystal of nickel*. Physical Review, 30(6), 705.
- Schrödinger, E. (1926). *An undulatory theory of the mechanics of atoms and molecules*. Physical Review, 28(6), 1049.
### 2. Textos del curso
- Transcripción provista por Esteban Sepúlveda, Módulo 04.
- Diapositivas: Clase 1_Quantum_Wave_Mechanics_1.pdf.
### 3. Textos universitarios estándar
- Griffiths, D. J. (2018). *Introduction to Quantum Mechanics*. Cambridge University Press.
- Sakurai, J. J. (2020). *Modern Quantum Mechanics*. Cambridge University Press.
- Shankar, R. (1994). *Principles of Quantum Mechanics*. Springer.
### 4. Recursos de libre acceso verificados
- Notas del curso de Feynman Lectures on Physics, Vol III. (disponibles libremente en línea vía Caltech).
