# Análisis Clase 02 — Mundo Cuántico, Cuerpo Negro y Espectros Atómicos

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Paulraj Manidurai  
**Fecha:** 10 de julio de 2026  
**Resultados de Aprendizaje cubiertos:** RA 1, RA 2, RA 3  
**Fuentes:** Transcripción de video (clase 10 jul 2026) · Diapositivas `class_I_Diplomado en Física Moderna` (36 págs.) · `Desarrollo de los leyes-Cuerpo negro.pdf` (7 págs.) · Bibliografía externa verificada

---

## 1. La Frontera entre Física Clásica y Física Cuántica

*Fuente: Diapositivas `class_I`, págs. 9–14. Fuente complementaria: Serway & Jewett, Física universitaria con física moderna, vol. 2, cap. 28, §28.1.*

La física clásica (mecánica de Newton, electromagnetismo de Maxwell, termodinámica) describe con precisión el mundo macroscópico. Dentro de este marco, partículas y ondas son entidades mutuamente excluyentes:

- **Partícula clásica:** posee energía $E$ y vector de momento $\mathbf{p}$; su trayectoria está determinada por las leyes de Newton.
- **Onda clásica:** posee amplitud $A$ y vector de onda $\mathbf{k}$ con $|\mathbf{k}| = 2\pi/\lambda$; su propagación está gobernada por la ecuación de onda.

La física cuántica surge cuando se trabaja a escala subatómica, donde dos condiciones rompen el esquema clásico: masa extremadamente pequeña ($m \sim 10^{-31}$ kg para el electrón) y velocidades próximas a la velocidad de la luz ($c = 3 \times 10^8$ m/s). En este régimen:

1. Las partículas exhiben propiedades ondulatorias (difracción, interferencia).
2. Las ondas exhiben propiedades corpusculares (el fotón transfiere energía en paquetes discretos).
3. El estado del sistema se describe por la función de onda $\Psi(\mathbf{r}, t)$, y la probabilidad de encontrar la partícula en $d^3r$ alrededor de $\mathbf{r}$ es $|\Psi(\mathbf{r},t)|^2 d^3r$.

**Criterio de escala orientativo:**

| Régimen | Masa típica | Velocidad | Marco teórico |
|---|---|---|---|
| Clásico | $m \gg 10^{-27}$ kg | $v \ll c$ | Mecánica newtoniana |
| Relativista | cualquiera | $v \lesssim c$ | Relatividad especial |
| Cuántico | $m \lesssim 10^{-27}$ kg | cualquiera | Mecánica cuántica |
| Cuántico relativista | $m \lesssim 10^{-27}$ kg | $v \lesssim c$ | Teoría cuántica de campos |

*Interpretación física:* la separación entre los regímenes no es absoluta. La acción típica de un sistema ($\sim p \cdot \lambda$) debe compararse con la constante de Planck $h = 6.626 \times 10^{-34}$ J·s. Cuando $p\lambda \sim h$, los efectos cuánticos son apreciables.

---

## 2. Dualidad Onda-Corpúsculo y Relación de de Broglie

*Fuente: Diapositivas `class_I`, págs. 22. Fuente complementaria: Griffiths, Introduction to Quantum Mechanics, 3ª ed., §1.1–§1.2.*

La observación experimental que unifica ambas naturalezas es la **dualidad onda-corpúsculo**: toda entidad subatómica (electrón, fotón, neutrón) exhibe simultáneamente propiedades de partícula y de onda, dependiendo del tipo de experimento.

En 1924, Louis de Broglie postuló que toda partícula de momento $p$ tiene asociada una longitud de onda:

$$\boxed{\lambda = \frac{h}{p}}$$

Para una partícula no relativista con energía cinética $K = p^2/2m$:

$$\lambda = \frac{h}{\sqrt{2mK}}$$

*Interpretación física:* la longitud de onda de de Broglie es más pequeña cuanto mayor es el momento de la partícula. Un electrón acelerado a algunos keV tiene $\lambda \sim 10^{-10}$ m (orden del espaciado interatómico), lo cual explica su difracción en cristales.

**Verificación con el límite clásico:** cuando $m \to \infty$ (masa macroscópica), $\lambda \to 0$ y los efectos ondulatorios se vuelven inobservables. Esto es coherente con el principio de correspondencia de Bohr.

---

## 3. Fenómenos Cuánticos sin Equivalente Clásico

*Fuente: Diapositivas `class_I`, págs. 16–20. Fuente complementaria: Weinberg, Foundations of Modern Physics, Cambridge 2021, cap. 3.*

### 3.1. Entrelazamiento Cuántico

*Fuente: Diapositivas `class_I`, págs. 16–17.*

Dos partículas pueden encontrarse en un **estado cuántico compuesto** que no puede escribirse como el producto de estados individuales. El estado singlete de espín para dos partículas de espín $\tfrac{1}{2}$ es el ejemplo estándar:

$$|\Psi^{-}\rangle = \frac{1}{\sqrt{2}}\bigl(|\uparrow\rangle_A|\downarrow\rangle_B - |\downarrow\rangle_A|\uparrow\rangle_B\bigr)$$

Medir el espín de la partícula $A$ en el estado $|\uparrow\rangle$ proyecta instantáneamente a la partícula $B$ en $|\downarrow\rangle$, sin importar la separación espacial entre ambas. Este efecto fue verificado experimentalmente por Aspect, Grangier y Roger (1982) y no permite transmitir información más rápido que la luz (no viola la causalidad relativista).

*Interpretación física:* el entrelazamiento evidencia la no-localidad de la mecánica cuántica. No implica interacción instantánea; el resultado de la medición es aleatorio, y solo al comparar resultados (mediante un canal clásico) se manifiesta la correlación.

### 3.2. Efecto Túnel Cuántico

*Fuente: Diapositivas `class_I`, pág. 18. Fuente complementaria: Griffiths, Introduction to Quantum Mechanics, 3ª ed., §2.6.*

Una partícula cuántica puede penetrar a través de una barrera de potencial $V_0 > E$ donde clásicamente tiene energía cinética negativa. Dentro de la barrera, la función de onda decae exponencialmente:

$$\psi(x) \propto e^{-\kappa x}, \qquad \kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$$

Para una barrera de anchura $a$, la probabilidad de transmisión es:

$$T \approx e^{-2\kappa a}$$

*Aplicaciones concretas:* el efecto túnel es esencial en: la fusión nuclear en el interior de estrellas (los protones no tienen energía suficiente para superar la barrera de Coulomb clásicamente), los diodos túnel, el microscopio de efecto túnel (STM) y las reacciones enzimáticas en bioquímica.

---

## 4. Mecanismo Microscópico de la Radiación Térmica

*Fuente: Diapositivas `class_I`, págs. 23–24. Fuente complementaria: Weinberg, Foundations of Modern Physics, cap. 1, §1.1.*

Cuando un cuerpo absorbe radiación electromagnética, la energía se transfiere a la energía cinética de oscilación de sus átomos alrededor de sus posiciones de equilibrio. Dado que los átomos contienen cargas (electrones), y según el electromagnetismo de Maxwell **toda carga acelerada emite radiación electromagnética** (fórmula de Larmor: $P = q^2 a^2 / 6\pi\varepsilon_0 c^3$), las oscilaciones atómicas producen emisión de radiación térmica.

En el **equilibrio térmico**, la tasa de absorción es igual a la tasa de emisión y la temperatura $T$ se mantiene constante.

**Observaciones experimentales clave:**

- Por debajo de ~600 °C la radiación térmica está en el infrarrojo (invisible al ojo).
- A 600–700 °C hay suficiente energía en el espectro visible para que el cuerpo brille en rojo opaco.
- A temperaturas más altas el pico espectral se desplaza a longitudes de onda más cortas: rojo brillante → naranja → amarillo → blanco caliente.

Esta dependencia de la temperatura en el pico espectral es la **Ley de Desplazamiento de Wien (1893)**:

$$\lambda_{max} T = b, \qquad b = 2.898 \times 10^{-3}\ \text{m·K}$$

---

## 5. El Cuerpo Negro Ideal y la Ley de Stefan-Boltzmann

*Fuente: Diapositivas `class_I`, págs. 27–29. Fuente complementaria: Serway & Jewett, Física universitaria con física moderna, §40.1.*

Un **cuerpo negro ideal** es un objeto que absorbe el 100% de la radiación incidente y la re-emite exclusivamente en función de su temperatura $T$; su emisividad es $\varepsilon = 1$. La realización experimental más aproximada es una **cavidad cerrada con un pequeño orificio**: cualquier radiación que entre rebota múltiples veces en las paredes y queda atrapada antes de poder escapar.

Josef Stefan (1879) encontró empíricamente, y Ludwig Boltzmann (1884) derivó termodinámicamente, la relación entre la potencia radiada por unidad de área $R$ y la temperatura:

$$\boxed{R = \sigma T^4}$$

$$\sigma = 5.6703 \times 10^{-8}\ \text{W m}^{-2}\text{K}^{-4} \quad \text{(constante de Stefan-Boltzmann)}$$

**Propiedades directas de esta ley:**

1. $R$ depende únicamente de $T$; no depende del color, material ni forma del objeto (para el cuerpo negro ideal).
2. Duplicar la temperatura aumenta la potencia emitida en un factor $2^4 = 16$.
3. Para objetos reales con emisividad $\varepsilon < 1$: $R_{real} = \varepsilon \sigma T^4$.

### Problema Resuelto — Determinación del Radio Estelar

*Fuente: Diapositivas `class_I`, págs. 30–31.*

**Enunciado:** Una estrella tiene temperatura superficial $T_{\star} = 3000$ K y emite 100 veces la potencia del Sol ($P_{\star} = 100\,P_{\odot}$). Dado que $T_{\odot} = 5800$ K y $r_{\odot} = 6.96 \times 10^8$ m, calcule el radio de la estrella. Se asume que ambas estrellas emiten como cuerpos negros.

**Solución:**

La potencia total emitida por una esfera de radio $r$ y temperatura $T$ es:
$$P = 4\pi r^2 \sigma T^4$$

Para la estrella y el Sol:
$$P_{\star} = 4\pi r_{\star}^2 \sigma T_{\star}^4, \qquad P_{\odot} = 4\pi r_{\odot}^2 \sigma T_{\odot}^4$$

Dividiendo:
$$\frac{P_{\star}}{P_{\odot}} = 100 = \left(\frac{r_{\star}}{r_{\odot}}\right)^2 \left(\frac{T_{\star}}{T_{\odot}}\right)^4$$

Despejando $r_{\star}$:
$$r_{\star} = 10\,r_{\odot} \left(\frac{T_{\odot}}{T_{\star}}\right)^2 = 10\,r_{\odot} \cdot \left(\frac{5800}{3000}\right)^2 = 10 \times 3.738\,r_{\odot} = 37.38\,r_{\odot}$$

$$\boxed{r_{\star} = 37.38 \times 6.96 \times 10^8\ \text{m} = 2.60 \times 10^{11}\ \text{m}}$$

*Interpretación física:* esta estrella gigante roja tiene un radio ~37 veces el del Sol, consistente con el tipo espectral M (enana roja a 3000 K), aunque la luminosidad 100 veces mayor sugiere una gigante roja tardía de mayor tamaño que una enana M típica.

---

## 6. La Fórmula de Wien (1896) y sus Límites

*Fuente: Diapositivas `class_I`, pág. 5 y `Desarrollo de los leyes`, pág. 1–2. Fuente primaria: Wien, W. (1896). Über die Energievertheilung im Emissionsspectrum eines schwarzen Körpers. Annalen der Physik, 294(8), 662–669.*

Wilhelm Wien (1896) propuso, usando argumentos termodinámicos clásicos, que la densidad de energía espectral del cuerpo negro tiene la forma:

$$u(\nu, T) = A \nu^5 e^{-\beta\nu/T}$$

donde $A$ y $\beta$ son constantes empíricas, $\nu$ es la frecuencia y $T$ la temperatura absoluta. Esta fórmula reproduce bien los datos experimentales a **altas frecuencias** (ultravioleta), pero falla progresivamente a **bajas frecuencias** (infrarrojo), donde predice menos energía de la observada.

*Interpretación física:* la forma exponencial suprime correctamente la emisión a altas frecuencias, pero la física clásica subyacente no proporciona el fundamento mecánico de ese corte.

---

## 7. La Ley de Rayleigh-Jeans y la Catástrofe Ultravioleta

*Fuente: `Desarrollo de los leyes-Cuerpo negro.pdf`, págs. 2–4. Fuente complementaria: Weinberg, Foundations of Modern Physics, §1.1; Serway & Jewett, §40.2. Fuente primaria: Rayleigh, Lord (1900). Remarks upon the law of complete radiation. Philosophical Magazine, 49(301), 539–540.*

### 7.1. Derivación desde Primeros Principios

Se modela la cavidad del cuerpo negro como un **cubo de arista** $L$. La radiación confinada en la cavidad forma ondas estacionarias. Para radiación propagándose en una dirección paralela a un borde del cubo, la condición de onda estacionaria exige que un número entero $m$ de semilongitudes de onda quepa en el intervalo $L$:

$$\frac{L}{\lambda/2} = m \implies \lambda = \frac{2L}{m} \tag{2.4}$$

La frecuencia correspondiente:

$$\nu = \frac{c}{\lambda} = \frac{cm}{2L} \tag{2.5}$$

En términos del número de onda $q = 2\pi/\lambda = 2\pi\nu/c$:

$$q = \frac{2\pi\nu}{c} = \frac{\pi m}{L} \implies q^2 = \pi^2 \left(\frac{m}{L}\right)^2 \tag{2.6–2.8}$$

Para ondas que se propagan en tres dimensiones, con enteros $(m_x, m_y, m_z)$ en cada dirección:

$$q^2 = \pi^2\left[\left(\frac{m_x}{L}\right)^2 + \left(\frac{m_y}{L}\right)^2 + \left(\frac{m_z}{L}\right)^2\right] \tag{2.9}$$

Igualando con $q = 2\pi\nu/c$:

$$m_x^2 + m_y^2 + m_z^2 = \frac{4L^2\nu^2}{c^2} \equiv R^2 \tag{2.10}$$

Cada triplete $(m_x, m_y, m_z)$ de enteros positivos representa un modo de oscilación. El número de modos en una cáscara esférica de radio $R$ y espesor $dR$ en el espacio de índices es la fracción del volumen de la cáscara que cae en el primer octante (solo enteros positivos):

$$dN = \frac{1}{8} \cdot 4\pi R^2\,dR \tag{volume del primer octante}$$

Expresando $R$ y $dR$ en términos de $\nu$:

$$R = \frac{2L\nu}{c}, \qquad dR = \frac{2L\,d\nu}{c}$$

Sustituyendo:

$$dN = \frac{1}{8} \cdot 4\pi \left(\frac{2L\nu}{c}\right)^2 \cdot \frac{2L}{c}\,d\nu = \frac{4\pi\nu^2 L^3}{c^3}\,d\nu \tag{2.18}$$

*Nota sobre el factor $1/8$:* cada punto en el espacio de índices $(m_x, m_y, m_z)$ pertenece a 8 celdas adyacentes (los 8 octantes), de modo que solo $1/8$ del área de la cáscara esférica corresponde al octante de enteros positivos.

### 7.2. Aplicación del Teorema de Equipartición

*Fuente: `Desarrollo de los leyes`, págs. 3–4. Fuente complementaria: Reif, Fundamentals of Statistical and Thermal Physics, §7.10.*

El **teorema de equipartición** de la termodinámica estadística clásica establece que, en equilibrio térmico a temperatura $T$, cada grado de libertad cuadrático de un sistema tiene una energía media de $\tfrac{1}{2}k_BT$. Para un oscilador armónico simple:

- Energía cinética: $\bar{K} = \tfrac{1}{2}k_BT$
- Energía potencial: $\bar{U} = \tfrac{1}{2}k_BT$
- **Energía media total:** $\bar{E} = k_BT$

La energía media de radiación por unidad de frecuencia:

$$\frac{dE}{d\nu} = k_BT \cdot \frac{dN}{d\nu} = k_BT \cdot \frac{4\pi\nu^2 L^3}{c^3}$$

La densidad de energía $u_\nu = (1/L^3) \cdot dE/d\nu$, incorporando las **dos polarizaciones** del campo electromagnético (factor $\times 2$):

$$\boxed{u(\nu, T) = \frac{8\pi\nu^2}{c^3} k_B T} \tag{Rayleigh-Jeans}$$

### 7.3. La Catástrofe Ultravioleta

La ley de Rayleigh-Jeans coincide con los datos experimentales a baja frecuencia (infrarrojo), pero al integrar sobre todas las frecuencias:

$$U_{total} = \int_0^\infty u(\nu, T)\,d\nu = \frac{8\pi k_BT}{c^3} \int_0^\infty \nu^2\,d\nu \to \infty$$

Esta divergencia —bautizada **catástrofe ultravioleta** por Paul Ehrenfest en 1911— implica que un horno ordinario debería emitir energía infinita en el ultravioleta, lo cual es evidentemente absurdo. No era un error de cálculo: era una consecuencia directa e inevitable del teorema de equipartición aplicado a un sistema con infinitos modos de oscilación.

*Interpretación histórica:* este resultado marcó el primer reconocimiento explícito de que la física clásica era incapaz de describir la radiación del cuerpo negro a toda frecuencia, precipitando la propuesta de Planck.

---

## 8. Fenómenos Cuánticos: Entrelazamiento, Efecto Túnel y Computación Cuántica

*Fuente: Diapositivas `class_I`, págs. 16–21.*

La clase introduce brevemente tres manifestaciones del mundo cuántico sin equivalente clásico:

| Fenómeno | Descripción | Aplicación tecnológica |
|---|---|---|
| **Entrelazamiento** | Estado cuántico no factorizable entre dos subsistemas; correlaciones no locales | Criptografía cuántica (QKD), teletransportación cuántica |
| **Efecto túnel** | Transmisión de partículas a través de barreras energéticamente prohibidas clásicamente | STM, diodos túnel, fusión nuclear estelar |
| **Computación cuántica** | Superposición y entrelazamiento para procesar información en paralelo (qubits) | Algoritmo de Shor (factorización), algoritmo de Grover (búsqueda) |

---

## 9. Espectros Atómicos

*Fuente: Diapositivas `class_I`, págs. 34–35. Fuente complementaria: Serway & Jewett, §40.5.*

Las transiciones electrónicas entre niveles de energía discretos producen emisión o absorción de fotones cuya frecuencia satisface:

$$h\nu = |E_i - E_f|$$

Tipos de espectros:

| Tipo | Origen | Aspecto visual |
|---|---|---|
| **Emisión de líneas** | Electrón cae de nivel superior a inferior | Líneas brillantes sobre fondo oscuro |
| **Absorción de líneas** | Electrón sube de nivel inferior a superior | Líneas oscuras sobre espectro continuo |
| **Bandas** | Transiciones vibracionales/rotacionales moleculares | Grupos de líneas próximas |
| **Estructura fina** | Acoplamiento espín-órbita (relativista) | Cada línea se divide en dobletes/tripletes |
| **Estructura hiperfina** | Interacción del espín nuclear con el campo electrónico | División de escala $\sim \mu\text{eV}$ |

La estructura fina y la hiperfina requieren tratamiento relativista (ecuación de Dirac) y teoría cuántica de campos, respectivamente, para su descripción completa.

---

## 10. Conclusiones de la Clase

1. La física cuántica rige cuando la acción típica del sistema es comparable a $h = 6.626 \times 10^{-34}$ J·s. La dualidad onda-corpúsculo ($\lambda = h/p$), el entrelazamiento y el efecto túnel no tienen análogo en la física clásica.
2. La radiación térmica es producida por la aceleración de los electrones en las oscilaciones atómicas (Larmor); en equilibrio, la tasa de emisión iguala la de absorción.
3. El cuerpo negro ideal ($\varepsilon = 1$) emite potencia $R = \sigma T^4$ independiente del material (Stefan-Boltzmann). Aplicado al caso estelar: $r_\star = 37.38\,r_\odot = 2.60 \times 10^{11}$ m para $T_\star = 3000$ K y $P_\star = 100\,P_\odot$.
4. La ley de Wien ($u \propto \nu^5 e^{-\beta\nu/T}$) describe bien el espectro a alta frecuencia pero falla en el infrarrojo.
5. La ley de Rayleigh-Jeans ($u = 8\pi\nu^2 k_BT/c^3$) es correcta a baja frecuencia pero diverge en el ultravioleta, demostrando el colapso del teorema de equipartición clásico para sistemas con infinitos modos de vibración.
6. Los espectros atómicos de líneas son consecuencia de la discretización de los niveles de energía; su explicación requería un modelo atómico cuántico (Bohr, 1913).

---

## Referencias Bibliográficas

### 1. Artículos Científicos Originales (Fuentes Primarias)

- Wien, W. (1896). Über die Energievertheilung im Emissionsspectrum eines schwarzen Körpers. *Annalen der Physik*, 294(8), 662–669.
- Rayleigh, Lord (1900). Remarks upon the law of complete radiation. *Philosophical Magazine*, 49(301), 539–540.
- Jeans, J. H. (1905). On the partition of energy between matter and æther. *Philosophical Magazine*, 10(55), 91–98.
- Stefan, J. (1879). Über die Beziehung zwischen der Wärmestrahlung und der Temperatur. *Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften*, 79, 391–428.

### 2. Textos del Curso

- Manidurai, P. (2026). *Diapositivas `class_I_Diplomado en Física Moderna – Teoría Cuántica Temprana`* (36 págs.). Diplomado en Física Moderna.
- Manidurai, P. (2026). *Desarrollo de los leyes-Cuerpo negro.pdf* (7 págs.). Material de apoyo, Diplomado en Física Moderna.
- Manidurai, P. (2026). *Transcripción de video, Clase 10 jul 2026*. Diplomado en Física Moderna.

### 3. Textos Universitarios Estándar

- Serway, R. A. & Jewett, J. W. (2005). *Física universitaria con física moderna*, vol. 2. Thomson. ISBN: 970-686-492-X.
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. ISBN: 978-1-108-84176-4.
- Griffiths, D. J. (2018). *Introduction to Quantum Mechanics*, 3ª ed. Cambridge University Press.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.

### 4. Recursos de Libre Acceso Verificados

- Feynman, R. P., Leighton, R. B. & Sands, M. (2013). *The Feynman Lectures on Physics*, vol. 1, cap. 41. Caltech. [feynmanlectures.caltech.edu](https://www.feynmanlectures.caltech.edu)
- NIST CODATA 2018: constante de Stefan-Boltzmann $\sigma = 5.670374419 \times 10^{-8}$ W m$^{-2}$ K$^{-4}$. [physics.nist.gov](https://physics.nist.gov/cgi-bin/cuu/Value?sigma)

### 5. Historia y Filosofía de la Física

- Kuhn, T. S. (1978). *Black-Body Theory and the Quantum Discontinuity, 1894–1912*. Oxford University Press.
