# Análisis Clase 01: La Crisis de la Radiación y el Nacimiento de la Constante de Planck

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Pablo Andrés Solano Palma  
**Fecha:** 3 de julio de 2026  
**Resultados de aprendizaje:** RA 1 — Contexto histórico y orígenes experimentales de la teoría cuántica; RA 2 — Radiación del cuerpo negro e hipótesis de Planck.

---

## 1. Contexto Histórico: La Crisis de la Física Clásica (1890–1900)

*Fuente principal: Weinberg, S., Foundations of Modern Physics, Cambridge University Press, 2021, sec. 3.1. Fuente complementaria: Kuhn, T. S., Black-Body Theory and the Quantum Discontinuity, 1894–1912, Oxford University Press, 1978.*

A finales del siglo XIX, la física clásica parecía una edificación completamente terminada. La mecánica de Newton (1687), el electromagnetismo de Maxwell (1865) y la mecánica estadística de Boltzmann (1872) describían con éxito todos los fenómenos conocidos. Sin embargo, la radiación emitida por los cuerpos calientes resistía toda explicación coherente dentro de ese marco. La crisis quedó completamente expuesta cuando se intentó calcular la distribución espectral de la energía emitida por un **cuerpo negro** en equilibrio térmico.

El docente introduce el problema con una analogía directa y cotidiana: una persona bajo una sombrilla en la playa absorbe continuamente energía solar, pero no se quema indefinidamente porque también emite energía como radiación. El mecanismo físico subyacente es que el campo electromagnético del sol —una onda que oscila— pone en movimiento las cargas eléctricas (electrones) de los materiales. Las cargas aceleradas emiten radiación; ese es el mecanismo universal de la radiación térmica. En equilibrio, la potencia absorbida es igual a la potencia emitida, y la temperatura se estabiliza.

La pregunta concreta que obsesionó a los físicos de la época fue: **¿cómo se distribuye la energía radiada entre las diferentes frecuencias o longitudes de onda, en función de la temperatura del cuerpo?**

### 1.1. Antecedentes Experimentales Establecidos antes de Planck

Antes de la solución de Planck (1900), la experimentación había establecido dos leyes empíricas fundamentales que cualquier teoría correcta debía reproducir:

**Ley de Stefan-Boltzmann (1879, 1884):**  
Josef Stefan determinó experimentalmente en 1879 que la potencia total irradiada por unidad de área por un cuerpo negro es proporcional a la cuarta potencia de su temperatura absoluta:

$$R = \sigma T^4$$

Donde $\sigma = 5.6704 \times 10^{-8}$ W m$^{-2}$ K$^{-4}$ es la constante de Stefan-Boltzmann. Ludwig Boltzmann derivó esta ley termodinámicamente en 1884 a partir de los principios de la termodinámica y las ecuaciones de Maxwell.

*(Fuente: Stefan, J., "Über die Beziehung zwischen der Wärmestrahlung und der Temperatur", Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften, 79, 391–428, 1879.)*

**Ley del Desplazamiento de Wien (1893):**  
Wilhelm Wien demostró que la longitud de onda en la que la curva espectral alcanza su máximo de intensidad, $\lambda_{max}$, varía inversamente con la temperatura:

$$\lambda_{max} \cdot T = b, \qquad b = 2.898 \times 10^{-3} \text{ m·K}$$

Esta ley explica por qué un hierro calentado emite primero en infrarrojo (invisible), luego pasa al rojo, después al amarillo y finalmente al blanco: el máximo de emisión se desplaza hacia longitudes de onda cada vez menores a medida que la temperatura sube. También explica el color de las estrellas: las estrellas frías son rojas ($T \sim 3000$ K) y las muy calientes son azules ($T \sim 25000$ K). Nuestro sol, con $T \approx 5778$ K, tiene su máximo en $\lambda_{max} \approx 501$ nm (verde), aunque el ojo integra todo el espectro visible y lo percibe como amarillo-blanco.

*(Fuente: Wien, W., "Eine neue Beziehung der Strahlung schwarzer Körper zum zweiten Hauptsatz der Wärmetheorie", Sitzungsberichte der Preußischen Akademie der Wissenschaften, 55–62, 1893.)*

---

## 2. El Cuerpo Negro Ideal: Construcción de la Idealización

*Fuente: Weinberg, Foundations of Modern Physics, sec. 3.1. Fuente complementaria: Serway, R. A., Moses, C. J., Modern Physics, 3ª ed., Brooks/Cole, 2005, sec. 3.1.*

Para estudiar la radiación térmica con independencia del material específico que la emite, se introduce la idealización del **cuerpo negro**: un objeto que absorbe **toda** la radiación electromagnética que incide sobre él, sin reflejar ni transmitir nada. Debido a esta absorción total, toda la radiación que emite depende **únicamente** de su temperatura $T$ y es independiente de la geometría, el material o el color del objeto.

Las condiciones que debe satisfacer el cuerpo negro ideal son:
1. **Absorción total:** coeficiente de absorción $\alpha = 1$ para toda frecuencia.
2. **Dependencia exclusiva de $T$:** el espectro emitido no depende del material.
3. **Independencia geométrica:** la distribución espectral es la misma independientemente de la forma del objeto.

Como bien se discute en clase, ningún material real satisface estas condiciones en todo el espectro. La mejor aproximación experimental —utilizada por los laboratorios de la época (Lummer y Pringsheim en Berlín, ~1899)— es una **cavidad cerrada con un pequeño orificio**. Cualquier rayo de luz que entra por el orificio sufre sucesivas reflexiones en las paredes y es eventualmente absorbido antes de poder salir. La probabilidad de que un fotón incidente escape por el mismo agujero es prácticamente nula, independientemente de la reflectividad de las paredes interiores.

El punto pedagógico señalado con precisión en clase es notable: **el cuerpo negro no es la caja, sino el orificio**. Lo que mejor simula un absorber perfecto es, paradójicamente, la ausencia de material: el vacío del agujero. La radiación que escapa por el orificio —detectada por un espectrómetro— refleja el espectro de equilibrio térmico del interior de la cavidad a temperatura $T$.

---

## 3. El Fracaso de la Física Clásica: La Ley de Rayleigh-Jeans y la Catástrofe Ultravioleta

*Fuente principal: Rayleigh, Lord, "Remarks upon the Law of Complete Radiation", Philosophical Magazine, 49, 539–540, 1900. Jeans, J. H., "On the Partition of Energy between Matter and Aether", Philosophical Magazine, 10, 91–98, 1905. Análisis moderno: Griffiths, D. J., Schroeter, D. F., Introduction to Quantum Mechanics, 3ª ed., Cambridge University Press, 2018, sec. 2.3.*

### 3.1. Modelado de la Cavidad: Modos Normales del Campo Electromagnético

La física clásica modela el campo electromagnético dentro de la cavidad como una colección de ondas estacionarias (modos normales). Para una cavidad cúbica de lado $L$ y volumen $V = L^3$, las condiciones de frontera imponen que los vectores de onda sean:

$$k_x = \frac{n_x \pi}{L}, \quad k_y = \frac{n_y \pi}{L}, \quad k_z = \frac{n_z \pi}{L}, \qquad n_x, n_y, n_z \in \mathbb{Z}^+$$

En el espacio $\mathbf{k}$, cada modo ocupa un volumen $(\pi/L)^3$. El número de modos con $|\mathbf{k}|$ entre $k$ y $k + dk$ se calcula tomando el volumen del cascarón esférico de radio $k$ en el primer octante (donde todos los $n_i > 0$) y multiplicando por 2 para contar las dos polarizaciones independientes del campo electromagnético:

$$dN = 2 \cdot \frac{1}{8} \cdot \frac{4\pi k^2 dk}{(\pi/L)^3} = \frac{V k^2 dk}{\pi^2}$$

Usando la relación de dispersión de la luz en el vacío $\omega = ck$, o equivalentemente $k = 2\pi f / c$, y $dk = (2\pi/c)\,df$:

$$dN = \frac{V}{\pi^2} \left(\frac{2\pi f}{c}\right)^2 \frac{2\pi\,df}{c} = V\frac{8\pi f^2}{c^3}\,df$$

La **densidad de modos por unidad de volumen y de frecuencia** es entonces:

$$\boxed{g(f) = \frac{1}{V}\frac{dN}{df} = \frac{8\pi f^2}{c^3}}$$

Este resultado —obtenido de manera rigurosa por Rayleigh (1900) y corregido en un factor por Jeans (1905)— es completamente clásico y no contiene ningún error.

### 3.2. El Teorema de Equipartición de la Energía

La mecánica estadística clásica, a través del trabajo de Boltzmann y Maxwell, establece el **teorema de equipartición de la energía**: en equilibrio térmico a temperatura $T$, cada grado de libertad cuadrático (cinético o potencial) de un sistema posee en promedio una energía $\frac{1}{2}k_BT$, donde $k_B = 1.38065 \times 10^{-23}$ J/K es la constante de Boltzmann.

Cada modo del campo electromagnético en la cavidad es equivalente a un oscilador armónico con dos grados de libertad cuadráticos (un término cinético y uno potencial), de modo que la energía media por modo es:

$$\langle E \rangle = 2 \cdot \frac{1}{2}k_BT = k_BT$$

*(Fuente: Reif, F., Fundamentals of Statistical and Thermal Physics, Waveland Press, 2009, cap. 7.)*

### 3.3. La Ley de Rayleigh-Jeans y su Divergencia

Multiplicando la densidad de modos por la energía promedio por modo:

$$\boxed{W_{RJ}(f) = g(f) \cdot k_BT = \frac{8\pi f^2}{c^3} k_BT}$$

Esta expresión, conocida como la **Ley de Rayleigh-Jeans**, tiene las siguientes propiedades:
- **Acuerdo con el experimento a bajas frecuencias (infrarrojo):** En el límite $f \to 0$, la curva coincide con los datos experimentales.
- **Divergencia catastrófica a altas frecuencias:** Para $f \to \infty$, $W_{RJ}(f) \to \infty$. Integrando sobre todas las frecuencias, la energía total radiada sería infinita.

La energía total sería:

$$\int_0^\infty W_{RJ}(f)\,df = \frac{8\pi k_BT}{c^3} \int_0^\infty f^2\,df = \infty$$

Esta predicción absurda implica que cualquier cuerpo en equilibrio térmico irriaría instantáneamente una energía infinita —evidentemente, una contradicción con la realidad. Paul Ehrenfest denominó este resultado la **Catástrofe Ultravioleta** (1911), nombre que adoptó la historia de la física.

*(Fuente: Ehrenfest, P., "Welche Züge der Lichtquantenhypothese spielen in der Theorie der Wärmestrahlung eine wesentliche Rolle?", Annalen der Physik, 36, 91–118, 1911.)*

---

## 4. La Fórmula Empírica de Wien (1896): Un Éxito Parcial

*Fuente: Wien, W., "Über die Energieverteilung im Emissionsspektrum eines schwarzen Körpers", Annalen der Physik, 294, 662–669, 1896. Análisis: Weinberg, Foundations of Modern Physics, sec. 3.1.*

Antes de que Rayleigh publicara su derivación clásica, Wilhelm Wien había propuesto en 1896 una ley empírica ajustada a los datos disponibles:

$$W_{Wien}(f) = Af^3 e^{-Bf/T}$$

Donde $A$ y $B$ son constantes determinadas empíricamente. Esta fórmula funciona excelentemente a altas frecuencias (el ultravioleta), pero falla a bajas frecuencias: subestima significativamente la energía en el infrarrojo.

En 1900, los experimentos de Lummer y Pringsheim (en el espectro infrarrojo) y de Rubens y Kurlbaum demostraron de manera concluyente que la ley de Wien era incorrecta en la región de baja frecuencia. Fue esta evidencia experimental la que motivó a Planck a buscar una interpolación entre los dos regímenes.

---

## 5. La Hipótesis Cuántica de Planck (1900): Nacimiento de la Física Moderna

*Fuente principal: Planck, M., "Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum", Verhandlungen der Deutschen Physikalischen Gesellschaft, 2, 237–245, 1900. Análisis histórico: Weinberg, Foundations of Modern Physics, sec. 3.2. Análisis matemático: Mandl, F., Statistical Physics, 2ª ed., Wiley, 1988, cap. 10.*

### 5.1. La Estrategia de Planck: Interpolación Termodinámica

La estrategia de Planck fue termodinámica. Sabía que la distribución espectral correcta está determinada por la entropía $S(U)$ de los osciladores de la pared de la cavidad en función de su energía media $U$. Conocía los dos límites asintóticos:

- **Límite de alta frecuencia (ley de Wien):** Al derivar la entropía dos veces respecto a la energía, se obtiene:
$$\frac{\partial^2 S}{\partial U^2} = -\frac{\alpha}{U} \qquad \text{(implica } W \propto f^3 e^{-\beta f/T}\text{)}$$

- **Límite de baja frecuencia (Rayleigh-Jeans):** Del teorema de equipartición se desprende:
$$\frac{\partial^2 S}{\partial U^2} = -\frac{\gamma}{U^2} \qquad \text{(implica } W \propto f^2 T\text{)}$$

Planck propuso la interpolación más simple que contiene ambos límites:

$$\frac{\partial^2 S}{\partial U^2} = -\frac{\alpha}{U(\varepsilon + U)}$$

Integrando dos veces e imponiendo los límites termodinámicos correctos, obtuvo su fórmula de distribución espectral. Sin embargo, para darle un fundamento estadístico concreto a esta expresión, Planck necesitó introducir un postulado radicalmente nuevo.

### 5.2. El Postulado de Cuantización de la Energía

Planck postuló que los osciladores de las paredes de la cavidad no pueden intercambiar energía de manera continua con el campo. En cambio, su energía está restringida a múltiplos enteros de una cantidad mínima $\varepsilon = hf$:

$$\boxed{E_n = nhf, \qquad n = 0, 1, 2, 3, \ldots}$$

Donde $h$ es una constante universal nueva, hoy conocida como la **constante de Planck**:

$$h = 6.62607 \times 10^{-34} \text{ J·s}$$

Este es el postulado central de toda la física cuántica. Como el mismo Planck reconoció, lo introdujo como un recurso matemático — un "artilugio formal" — sin creer inicialmente que tuviese un significado físico real. La naturaleza discreta de la energía le resultaba tan incómoda conceptualmente que continuó durante años intentando reconciliarla con la física clásica.

### 5.3. Cálculo de la Energía Media del Oscilador Cuántico

Con los niveles discretos $E_n = nhf$, la probabilidad de que un oscilador esté en el estado de energía $E_n$ a temperatura $T$ es dada por la distribución de Boltzmann (estadística que Planck adoptó sin modificaciones del trabajo de Boltzmann):

$$P_n = \frac{e^{-E_n/k_BT}}{\sum_{m=0}^{\infty} e^{-E_m/k_BT}} = \frac{e^{-nhf/k_BT}}{\sum_{m=0}^{\infty} e^{-mhf/k_BT}}$$

La energía promedio del oscilador es:

$$\langle E \rangle = \sum_{n=0}^{\infty} E_n P_n = \frac{\sum_{n=0}^{\infty} nhf \cdot e^{-nhf/k_BT}}{\sum_{n=0}^{\infty} e^{-nhf/k_BT}}$$

**Cálculo de la suma del denominador.** Haciendo la sustitución $x \equiv e^{-hf/k_BT}$ (donde $0 < x < 1$ para $T > 0$):

$$Z \equiv \sum_{n=0}^{\infty} x^n = \frac{1}{1-x}$$

Esta es la suma de una serie geométrica convergente. $Z$ recibe el nombre de **función de partición** en mecánica estadística.

**Cálculo de la suma del numerador.** Observando que $nhf \cdot e^{-nhf/k_BT} = nhf \cdot x^n$, y que:

$$\sum_{n=0}^{\infty} n x^n = x \frac{d}{dx}\left(\sum_{n=0}^{\infty} x^n\right) = x \frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{x}{(1-x)^2}$$

Por lo tanto:

$$\langle E \rangle = hf \cdot \frac{x/(1-x)^2}{1/(1-x)} = \frac{hf\, x}{1-x}$$

Sustituyendo de vuelta $x = e^{-hf/k_BT}$ y reescribiendo:

$$\langle E \rangle = \frac{hf \cdot e^{-hf/k_BT}}{1 - e^{-hf/k_BT}} = \frac{hf}{e^{hf/k_BT} - 1}$$

Donde en el último paso se multiplicó numerador y denominador por $e^{hf/k_BT}$.

$$\boxed{\langle E \rangle = \frac{hf}{e^{hf/k_BT} - 1}}$$

Este es el resultado fundamental: la energía promedio de un oscilador cuántico de frecuencia $f$ a temperatura $T$.

*(Fuente matemática de la derivación: Mandl, Statistical Physics, 2ª ed., Wiley, 1988, sec. 2.5.)*

### 5.4. La Ley de Radiación de Planck

Sustituyendo la energía promedio cuántica en la densidad de modos obtenida clásicamente:

$$\boxed{W(f, T) = g(f) \cdot \langle E \rangle = \frac{8\pi h f^3}{c^3} \cdot \frac{1}{e^{hf/k_BT} - 1}}$$

Esta es la **Ley de Radiación de Planck**, anunciada el 14 de diciembre de 1900 ante la Deutsche Physikalische Gesellschaft. Describe con exactitud el espectro completo del cuerpo negro para cualquier temperatura, en perfecto acuerdo con los datos experimentales de Lummer, Pringsheim, Rubens y Kurlbaum.

Alternativamente, en términos de longitud de onda $\lambda = c/f$:

$$W(\lambda, T) = \frac{8\pi hc}{\lambda^5} \cdot \frac{1}{e^{hc/\lambda k_BT} - 1}$$

*(Fuente: Planck, M., Verhandlungen der Deutschen Physikalischen Gesellschaft, 2, 237–245, 1900.)*

---

## 6. Verificación: Recuperación de los Límites Conocidos

*Fuente: Griffiths y Schroeter, Introduction to Quantum Mechanics, 3ª ed., Cambridge University Press, 2018, sec. 2.3. Weinberg, Foundations of Modern Physics, sec. 3.2.*

La validez de la fórmula de Planck se verifica recuperando los resultados previos como casos límite.

### 6.1. Límite Clásico: Recuperación de Rayleigh-Jeans ($hf \ll k_BT$)

A bajas frecuencias (o temperaturas altas), el argumento de la exponencial es pequeño: $hf/k_BT \ll 1$. Usando la expansión en serie de Taylor de primer orden $e^u \approx 1 + u$ para $u \ll 1$:

$$e^{hf/k_BT} - 1 \approx \frac{hf}{k_BT}$$

Sustituyendo en la fórmula de Planck:

$$W(f, T) \approx \frac{8\pi h f^3}{c^3} \cdot \frac{k_BT}{hf} = \frac{8\pi f^2}{c^3} k_BT = W_{RJ}(f)$$

Los factores $h$ se cancelan y se recupera exactamente la Ley de Rayleigh-Jeans. Esto confirma que la física clásica es el límite de baja frecuencia de la física cuántica, cuando los "peldaños" de energía $hf$ son despreciables frente a la energía térmica $k_BT$ y el sistema se comporta como un continuo.

### 6.2. Límite de Alta Frecuencia: Recuperación de Wien ($hf \gg k_BT$)

A altas frecuencias, $hf/k_BT \gg 1$, por lo que $e^{hf/k_BT} \gg 1$ y el denominador se aproxima simplemente a la exponencial:

$$e^{hf/k_BT} - 1 \approx e^{hf/k_BT}$$

Entonces:

$$W(f, T) \approx \frac{8\pi h f^3}{c^3} e^{-hf/k_BT}$$

Que tiene exactamente la forma de la ley de Wien $W \propto f^3 e^{-Bf/T}$, con $B = h/k_B$.

### 6.3. Interpretación Física de la Solución

La supresión de la divergencia ultravioleta tiene una interpretación física directa y elegante, señalada en clase:

- A **baja frecuencia**: el cuanto de energía $hf$ es muy pequeño comparado con la energía térmica $k_BT$. La probabilidad de excitar cualquier modo es alta, y el sistema se comporta clásicamente: todos los modos reciben la misma energía media $k_BT$ (equipartición).
- A **alta frecuencia**: el cuanto mínimo de energía requerido para excitar un modo, $hf$, es tan grande que supera ampliamente la energía térmica disponible $k_BT$. La mayoría de los modos de alta frecuencia no pueden ser excitados por la agitación térmica, y su contribución al espectro se suprime exponencialmente. El espectro cae a cero en lugar de divergir.

Esta es la esencia de la solución de Planck: la cuantización impone un umbral mínimo de energía que bloquea la contribución de los modos de alta frecuencia, eliminando la catástrofe ultravioleta.

---

## 7. Derivación de las Leyes de Stefan-Boltzmann y Wien desde la Distribución de Planck

*Fuente: Mandl, F., Statistical Physics, 2ª ed., Wiley, 1988, sec. 10.3. Datos de constantes: NIST, CODATA Recommended Values of Fundamental Physical Constants, physics.nist.gov/cuu/Constants.*

### 7.1. Ley de Stefan-Boltzmann por Integración Directa

Integrando la distribución de Planck sobre todas las frecuencias:

$$\int_0^\infty W(f, T)\,df = \frac{8\pi h}{c^3} \int_0^\infty \frac{f^3}{e^{hf/k_BT} - 1}\,df$$

Realizando el cambio de variable $u = hf/k_BT$:

$$= \frac{8\pi h}{c^3} \left(\frac{k_BT}{h}\right)^4 \int_0^\infty \frac{u^3}{e^u - 1}\,du$$

La integral es la función de Riemann-zeta evaluada en 4: $\int_0^\infty \frac{u^3}{e^u - 1}\,du = \frac{\pi^4}{15}$.

Por lo tanto, la potencia radiada por unidad de área y en el semiespaacio es $R = \frac{c}{4} \int_0^\infty W\,df$, lo que da:

$$R = \sigma T^4, \qquad \sigma = \frac{2\pi^5 k_B^4}{15 c^2 h^3} = 5.6704 \times 10^{-8} \text{ W m}^{-2} \text{ K}^{-4}$$

La teoría cuántica no solo reproduce la ley de Stefan-Boltzmann: **la deriva desde primeros principios** y determina con exactitud el valor de $\sigma$ en términos de $h$, $k_B$ y $c$.

### 7.2. Ley de Desplazamiento de Wien por Diferenciación

Para encontrar el máximo de $W(f, T)$ respecto a $f$, se impone $\partial W / \partial f = 0$. En términos de longitud de onda $\lambda$, esto conduce a la ecuación trascendente:

$$5\left(1 - e^{-hc/\lambda k_BT}\right) = \frac{hc}{\lambda k_BT}$$

Cuya solución numérica es $hc/\lambda_{max} k_BT \approx 4.965$, lo que da:

$$\lambda_{max} = \frac{hc}{4.965\, k_B} \cdot \frac{1}{T} = \frac{b}{T}, \qquad b = 2.898 \times 10^{-3} \text{ m·K}$$

Nuevamente, la teoría cuántica reproduce y fundamenta la ley empírica de Wien.

---

## 8. Significado Histórico y Físico de la Constante de Planck

*Fuente: Weinberg, Foundations of Modern Physics, sec. 3.2 y 3.3. Rynasiewicz, R., "Planck, the Quantum, and Historians", Physics in Perspective, 17, 4–23, 2015.*

La constante $h = 6.626 \times 10^{-34}$ J·s, cuyo valor ajustó Planck a los datos experimentales de 1900, resultó ser mucho más que un parámetro de ajuste. En las décadas siguientes se demostró que aparece en toda la mecánica cuántica:

- En la relación fotón-energía: $E = hf$ (Einstein, 1905).
- En la dualidad onda-corpúsculo: $\lambda = h/p$ (de Broglie, 1924).
- En el principio de incertidumbre: $\sigma_x \sigma_p \geq \hbar/2$ (Heisenberg, 1927).
- Como la unidad fundamental de momento angular cuántico: $L_z = m_l \hbar$.
- En la ecuación de Schrödinger: $i\hbar \partial\Psi/\partial t = \hat{H}\Psi$.

La constante $h$ define la escala de acción del universo cuántico. Por encima de esta escala, la física es clásica. Por debajo, es cuántica.

Cabe destacar el curioso papel histórico de Planck: él mismo no creía en la realidad física de los cuantos de energía y continuó durante años intentando eliminar la discontinuidad de su teoría. Fue Einstein, en 1905, quien dio el siguiente paso afirmando que la cuantización era real y que la luz misma estaba compuesta de cuantos (fotones).

---

## 9. Conclusiones de la Clase

1. La **Catástrofe Ultravioleta** es la consecuencia fatal de aplicar el teorema clásico de equipartición a todos los modos del campo electromagnético en la cavidad, dando una densidad espectral $W \propto f^2$ que diverge cuando $f \to \infty$.
2. Planck resolvió el problema postulando que la energía de los osciladores está **cuantizada**: $E_n = nhf$. Esto modifica la energía promedio de $k_BT$ (clásico) a $hf/(e^{hf/k_BT} - 1)$ (cuántico).
3. La **Ley de Radiación de Planck** $W(f,T) = \frac{8\pi hf^3}{c^3(e^{hf/k_BT}-1)}$ reproduce la totalidad del espectro observado experimentalmente, y contiene las leyes de Rayleigh-Jeans y Wien como sus límites de baja y alta frecuencia, respectivamente.
4. La integración de la distribución de Planck **deriva desde primeros principios** tanto la Ley de Stefan-Boltzmann ($R = \sigma T^4$) como la Ley de Desplazamiento de Wien ($\lambda_{max} T = b$), con los valores exactos de $\sigma$ y $b$ en términos de $h$, $k_B$ y $c$.
5. La constante $h$, introducida inicialmente como un ajuste matemático, resultó ser la constante fundamental que define la escala de todo el mundo cuántico.

---

## 10. Referencias Bibliográficas

### Artículos Científicos Originales (Fuentes Primarias)
1. Planck, M., "Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum", *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245, 1900.
2. Rayleigh, Lord, "Remarks upon the Law of Complete Radiation", *Philosophical Magazine*, 49, 539–540, 1900.
3. Jeans, J. H., "On the Partition of Energy between Matter and Aether", *Philosophical Magazine*, 10, 91–98, 1905.
4. Stefan, J., "Über die Beziehung zwischen der Wärmestrahlung und der Temperatur", *Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften*, 79, 391–428, 1879.
5. Wien, W., "Eine neue Beziehung der Strahlung schwarzer Körper zum zweiten Hauptsatz der Wärmetheorie", *Sitzungsberichte der Preußischen Akademie der Wissenschaften*, 55–62, 1893.
6. Wien, W., "Über die Energieverteilung im Emissionsspektrum eines schwarzen Körpers", *Annalen der Physik*, 294, 662–669, 1896.
7. Ehrenfest, P., "Welche Züge der Lichtquantenhypothese spielen in der Theorie der Wärmestrahlung eine wesentliche Rolle?", *Annalen der Physik*, 36, 91–118, 1911.

### Textos del Curso
8. Weinberg, S., *Foundations of Modern Physics*, Cambridge University Press, 2021. Secs. 3.1–3.3.

### Textos Universitarios Estándar
9. Griffiths, D. J., Schroeter, D. F., *Introduction to Quantum Mechanics*, 3ª ed., Cambridge University Press, 2018. Sec. 2.3.
10. Serway, R. A., Moses, C. J., *Modern Physics*, 3ª ed., Brooks/Cole, 2005. Sec. 3.1.
11. Mandl, F., *Statistical Physics*, 2ª ed., Wiley, 1988. Secs. 2.5 y 10.3.
12. Reif, F., *Fundamentals of Statistical and Thermal Physics*, Waveland Press, 2009. Cap. 7.

### Historia y Filosofía de la Física
13. Kuhn, T. S., *Black-Body Theory and the Quantum Discontinuity, 1894–1912*, Oxford University Press, 1978.
14. Rynasiewicz, R., "Planck, the Quantum, and Historians", *Physics in Perspective*, 17, 4–23, 2015.

### Datos de Constantes Físicas
15. NIST, CODATA Recommended Values of Fundamental Physical Constants, disponible en physics.nist.gov/cuu/Constants (fuente de referencia internacional verificada).
