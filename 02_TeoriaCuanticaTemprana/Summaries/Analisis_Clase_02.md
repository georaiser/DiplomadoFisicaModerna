# Análisis Clase 02: Física Cuántica — Conceptos Fundamentales, Fotones y Espectros

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Paulraj Manidurai (Prof. Paul)  
**Fecha:** 10 de julio de 2026  
**Resultados de aprendizaje:** RA 2 — Radiación del cuerpo negro e hipótesis de Planck; RA 3 — Propiedades de los fotones y sus aplicaciones.

> **Sobre las fuentes:** Esta clase no dispone aún de diapositivas en PDF. El análisis se construye sobre la transcripción exhaustiva de la sesión, el libro principal del curso de Weinberg (*Foundations of Modern Physics*) y bibliografía externa de rigor científico verificado, con indicación explícita de fuente en cada sección.

---

## 1. El Mundo Clásico versus el Mundo Cuántico

*Fuente principal: Weinberg, S., Foundations of Modern Physics, Cambridge University Press, 2021, caps. 1 y 3. Fuente complementaria: Sakurai, J. J., Napolitano, J., Modern Quantum Mechanics, 3ª ed., Cambridge University Press, 2021, cap. 1.*

El docente abre la clase situando históricamente el problema: durante siglos, la física describió con éxito la naturaleza usando las leyes de Newton, Maxwell y la termodinámica estadística de Boltzmann. Este conjunto de teorías se denomina **física clásica** y funciona de manera extraordinaria para describir objetos grandes (cuerpos celestes, máquinas, fluidos) y fenómenos a velocidades mucho menores que la de la luz. Sin embargo, a finales del siglo XIX, varios experimentos produjeron resultados que la física clásica era incapaz de explicar. La mecánica cuántica surge como la teoría que los describe correctamente.

### 1.1. Características del Régimen Clásico

La física clásica reposa sobre tres pilares:

1. **Determinismo:** Conocidas la posición $\mathbf{r}_0$ y la velocidad $\mathbf{v}_0$ de un objeto en el instante $t = 0$, la segunda ley de Newton $\mathbf{F} = m\ddot{\mathbf{r}}$ determina su trayectoria en todo instante futuro con precisión ilimitada, en principio.
2. **Continuidad:** Las propiedades físicas —energía, momento, posición— varían de manera continua. No existen "saltos discretos" en ninguna magnitud observable.
3. **Separación onda-partícula:** Los objetos son o bien partículas (localizadas en el espacio, con masa y trayectoria definida) o bien ondas (distribuidas en el espacio, capaces de interferir y difractarse). Las categorías son excluyentes. Ejemplos clásicos: los electrones son partículas; la luz, una onda electromagnética (Maxwell, 1865).

*(Fuente: Halliday, D., Resnick, R., Walker, J., Fundamentals of Physics, 10ª ed., Wiley, 2014, cap. 38.)*

### 1.2. Características del Régimen Cuántico

La mecánica cuántica, tal como fue formulada entre 1900 y 1927 por Planck, Einstein, Bohr, Heisenberg, Schrödinger, Born y Dirac, entre otros, se rige por principios radicalmente distintos:

1. **Indeterminismo fundamental:** El estado completo de un sistema cuántico está descrito por la **función de onda** $\Psi(\mathbf{r}, t)$, cuya evolución temporal obedece la ecuación de Schrödinger:

$$i\hbar \frac{\partial \Psi}{\partial t} = \hat{H}\Psi$$

Donde $\hat{H}$ es el operador hamiltoniano del sistema y $\hbar = h/2\pi = 1.055 \times 10^{-34}$ J·s es la constante de Planck reducida. El cuadrado del módulo de $\Psi$ da la densidad de probabilidad de encontrar la partícula:

$$P(\mathbf{r}, t) = |\Psi(\mathbf{r}, t)|^2$$

No se trata de una ignorancia sobre el sistema: es un indeterminismo fundamental de la naturaleza.

2. **Cuantización de la energía:** En sistemas ligados (como un átomo), la energía solo puede tomar valores discretos $E_1, E_2, E_3, \ldots$ Los valores intermedios no son permitidos.

3. **Dualidad onda-corpúsculo:** Todo objeto cuántico —fotones, electrones, átomos— exhibe propiedades tanto de onda como de partícula dependiendo de cómo se le mide. No existe contradicción: la función de onda $\Psi$ describe el comportamiento ondulatorio, y la medición colapsa esa onda a una posición definida (comportamiento corpuscular).

*(Fuente: Griffiths, D. J., Schroeter, D. F., Introduction to Quantum Mechanics, 3ª ed., Cambridge University Press, 2018, cap. 1.)*

---

## 2. Dualidad Onda-Corpúsculo: El Experimento de la Doble Rendija

*Fuente: Feynman, R. P., Leighton, R. B., Sands, M., The Feynman Lectures on Physics, Vol. III, cap. 1, Caltech, 1965. Disponible en: feynmanlectures.caltech.edu (recurso en línea verificado).*

El experimento de la doble rendija es el experimento central que demuestra la dualidad onda-corpúsculo. Feynman lo califica como "el único misterio de la mecánica cuántica", pues contiene en esencia toda la física cuántica.

**Configuración:** Una fuente emite partículas (pueden ser fotones, electrones, átomos o incluso moléculas de $C_{60}$) que inciden sobre una pantalla con dos rendijas (A y B) separadas una distancia $d$. Detrás de las rendijas hay una pantalla detectora.

**Resultados experimentales:**

- **Con una rendija tapada:** Las partículas forman un patrón de distribución ordinario, acumulándose frente a la rendija abierta. No hay interferencia.
- **Con ambas rendijas abiertas y sin detectar por cuál pasa la partícula:** Se observa un **patrón de interferencia** con franjas brillantes y oscuras, como si las partículas pasaran por ambas rendijas simultáneamente y se interfirieran consigo mismas.
- **Con un detector que determina por cuál rendija pasa cada partícula:** El patrón de interferencia desaparece. Las partículas se comportan como clásicas.

La longitud de onda asociada a cada partícula con momento $p$ viene dada por la **relación de de Broglie** (formulada en 1924):

$$\lambda = \frac{h}{p}$$

La distancia $\Delta y$ entre franjas brillantes consecutivas en la pantalla detectora (a distancia $L$) es:

$$\Delta y = \frac{\lambda L}{d} = \frac{hL}{pd}$$

El experimento fue realizado con electrones por Davisson y Germer (1927), y en 1999 con moléculas de $C_{60}$ (fullereno) por el grupo de Zeilinger en Viena (*Nature*, 401, 680–682, 1999), confirmando que objetos de decenas de átomos presentan interferencia cuántica.

---

## 3. El Principio de Incertidumbre de Heisenberg

*Fuente: Heisenberg, W., The Physical Principles of the Quantum Theory, Dover Publications, 1949 (traducción del original alemán de 1930). Análisis matemático en: Sakurai y Napolitano, Modern Quantum Mechanics, 3ª ed., sec. 1.6.*

La discusión en clase sobre la imposibilidad de conocer simultáneamente la posición y la velocidad de un electrón refleja el **principio de incertidumbre de Heisenberg** (1927):

$$\sigma_x \sigma_{p_x} \geq \frac{\hbar}{2}$$

Donde $\sigma_x$ es la desviación estándar de la posición y $\sigma_{p_x}$ la del momento lineal en la misma dirección. De forma análoga para energía y tiempo:

$$\sigma_E \, \sigma_t \geq \frac{\hbar}{2}$$

**Interpretación física:** Este principio no deriva de la imprecisión de los instrumentos, sino de la naturaleza ondulatoria de la materia. Localizar una partícula con precisión $\Delta x$ requiere superponer ondas de longitudes de onda ampliamente dispersas (es decir, de momentos $\Delta p$ grandes). Es matemáticamente análogo al teorema de incertidumbre de Fourier: una señal muy localizada en tiempo tiene un espectro de frecuencias muy ancho.

**Consecuencias notables:** Un electrón confinado en un átomo de hidrógeno (radio de Bohr $a_0 \approx 0.053$ nm) tiene un momento mínimo $p_{min} \approx \hbar / a_0 \approx 2 \times 10^{-24}$ kg·m/s y, por ende, una energía cinética mínima (energía de punto cero) que impide al electrón colapsar hacia el núcleo.

El alumno Fernando menciona correctamente que el principio de incertidumbre es la razón por la que los nanopartículas de cobre no son equivalentes al cobre macroscópico: al reducir el tamaño del confinamiento, el principio de incertidumbre impone energías mínimas de los electrones distintas, lo que altera sus propiedades electrónicas, ópticas y magnéticas. Este es el fundamento de la **nanociencia** y los **puntos cuánticos** (*quantum dots*).

*(Fuente adicional: Alivisatos, A. P., "Semiconductor Clusters, Nanocrystals, and Quantum Dots", Science, 271, 933–937, 1996. Artículo de revisión seminal en nanociencia, publicado en Science.)*

---

## 4. Entrelazamiento Cuántico

*Fuente principal: Bell, J. S., "On the Einstein Podolsky Rosen Paradox", Physics Physique Fizika, 1, 195–200, 1964. Fuente experimental: Yin, J. et al., "Satellite-based entanglement distribution over 1200 kilometers", Science, 356, 1140–1144, 2017. DOI: 10.1126/science.aan3211.*

### 4.1. Definición Formal

Dos partículas están **entrelazadas** cuando su estado cuántico conjunto **no puede escribirse** como el producto de los estados individuales. Matemáticamente, si los estados posibles del sistema A son $|0\rangle_A$ y $|1\rangle_A$, y los de B son $|0\rangle_B$ y $|1\rangle_B$, el estado entrelazado (singlete de Bell) es:

$$|\Phi^-\rangle = \frac{1}{\sqrt{2}} \left( |0\rangle_A|1\rangle_B - |1\rangle_A|0\rangle_B \right)$$

Antes de cualquier medición, ninguna de las dos partículas tiene un valor definido de la propiedad medida (en este caso, el espín). Al medir A y obtener espín "arriba" ($|0\rangle$), el estado de B colapsa instantáneamente a espín "abajo" ($|1\rangle$), sin importar la distancia.

### 4.2. La Propiedad Medida: El Espín

El **espín** es un momento angular intrínseco de las partículas, sin equivalente en la física clásica. Para el electrón, solo puede tomar dos valores en cualquier dirección de medición:

$$s_z = +\frac{\hbar}{2} \quad (\text{espín "arriba"}) \qquad \text{o} \qquad s_z = -\frac{\hbar}{2} \quad (\text{espín "abajo"})$$

Esta propiedad binaria es la base de los **qubits** en computación cuántica.

### 4.3. Verificación Experimental y Desigualdades de Bell

En 1964, John Bell formuló un criterio matemático —las desigualdades de Bell— que diferencia las predicciones de la mecánica cuántica de cualquier teoría clásica con "variables ocultas locales". Experimentos como los de Aspect et al. (1982) y los más recientes "libres de brechas" de Hensen et al. (*Nature*, 526, 682–686, 2015) han violado las desigualdades de Bell de forma concluyente, confirmando que el entrelazamiento es un fenómeno genuinamente cuántico y no explicable por correlaciones clásicas.

El experimento del satélite Micius (Yin et al., 2017), mencionado en clase, distribuyó pares entrelazados entre dos estaciones terrestres separadas 1203 km, siendo el primer test experimental del entrelazamiento en distancias geográficas reales.

### 4.4. Aclaración sobre Causalidad

El entrelazamiento **no permite transmitir información a velocidades superlumínicas**. Los resultados de las mediciones individuales son aleatorios. Solo al comparar los resultados de A y B mediante un canal clásico se descubre la correlación. Así, no viola la causalidad relativista, aunque sí es "no local" en el sentido estadístico.

---

## 5. Efecto Túnel Cuántico

*Fuente: Griffiths, D. J., Schroeter, D. F., Introduction to Quantum Mechanics, 3ª ed., Cambridge University Press, 2018, sec. 2.6. Aplicación nuclear: Gamow, G., "Zur Quantentheorie des Atomkerns", Zeitschrift für Physik, 51, 204–212, 1928.*

### 5.1. El Problema en Mecánica Clásica

En mecánica clásica, una partícula de energía $E$ que se aproxima a una barrera de potencial de altura $V_0 > E$ es **totalmente reflejada**. La partícula simplemente no tiene energía suficiente para "escalar" la barrera.

### 5.2. La Solución Cuántica

En mecánica cuántica, la función de onda $\Psi$ no se anula abruptamente en la pared de la barrera. Para una barrera cuadrada de altura $V_0$ y ancho $a$, la función de onda en la región interior de la barrera ($0 \leq x \leq a$) decae exponencialmente:

$$\Psi_{barrera}(x) \propto e^{-\kappa x}, \qquad \kappa = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}$$

Si la barrera no es demasiado ancha o alta, $\Psi$ no llega a cero antes del otro extremo, y hay una probabilidad no nula de encontrar la partícula más allá de la barrera. La **probabilidad de transmisión** (probabilidad de que la partícula "tunele") es aproximadamente:

$$T \approx 16 \frac{E}{V_0}\left(1 - \frac{E}{V_0}\right) e^{-2\kappa a}$$

Para el caso de interés práctico ($\kappa a \gg 1$), la dependencia dominante es $T \propto e^{-2\kappa a}$: la transmisión decae exponencialmente con el ancho de la barrera y con la raíz cuadrada de $(V_0 - E)$.

### 5.3. Aplicaciones

- **Desintegración alfa:** Gamow (1928) explicó la vida media de los núcleos radiactivos usando el efecto túnel: la partícula alfa se forma dentro del núcleo y tunela a través de la barrera coulombiana. *(Fuente: Gamow, 1928, op. cit.)*
- **Fusión nuclear estelar:** En el núcleo del Sol (~$1.5 \times 10^7$ K), la energía térmica de los protones es insuficiente para superar clásicamente la repulsión coulombiana. El efecto túnel permite la fusión a temperaturas "bajas". *(Fuente: Weinberg, Foundations of Modern Physics, sec. 3.6.)*
- **Microscopía de Efecto Túnel (STM):** Una punta metálica muy aguda escanea una superficie a ~0.5 nm de distancia. La corriente de tunelaje entre la punta y la superficie es extremadamente sensible al gap, permitiendo imágenes con resolución atómica. Binnig y Rohrer ganaron el Premio Nobel de Física 1986 por este desarrollo. *(Fuente: Binnig, G., Rohrer, H., Rev. Mod. Phys., 59, 615, 1987.)*

---

## 6. Computación Cuántica: Qubits y Superposición

*Fuente: Nielsen, M. A., Chuang, I. L., Quantum Computation and Quantum Information, 10ª aniversario ed., Cambridge University Press, 2010, caps. 1 y 7.*

### 6.1. El Bit Clásico versus el Qubit

Un bit clásico adopta exclusivamente el valor 0 o el valor 1. Un **qubit** (bit cuántico) puede encontrarse en cualquier **superposición** de los estados base $|0\rangle$ y $|1\rangle$:

$$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle, \qquad |\alpha|^2 + |\beta|^2 = 1$$

Los coeficientes $\alpha$ y $\beta$ son números complejos. Al realizar una medición, el qubit colapsa a $|0\rangle$ con probabilidad $|\alpha|^2$ o a $|1\rangle$ con probabilidad $|\beta|^2$.

### 6.2. Ventaja Cuántica: Paralelismo Exponencial

Un registro de $n$ bits clásicos solo puede almacenar un número a la vez. Un registro de $n$ qubits puede estar en superposición de los $2^n$ estados al mismo tiempo:

$$|\psi\rangle = \sum_{x=0}^{2^n - 1} c_x |x\rangle$$

Un procesador cuántico puede aplicar operaciones a todos los $2^n$ estados simultáneamente en un solo paso. Para $n = 300$ qubits, el número de estados es $2^{300} \approx 10^{90}$, mayor que el número de átomos en el universo observable.

### 6.3. Algoritmos y Aplicaciones

- **Algoritmo de Shor (1994):** Factoriza enteros grandes en tiempo polinomial, con implicaciones directas para la criptografía RSA. *(Fuente: Shor, P. W., SIAM J. Comput., 26, 1484–1509, 1997.)*
- **Criptografía cuántica (QKD):** Aprovecha las propiedades del entrelazamiento y el principio de no-clonación cuántica para garantizar comunicaciones teóricamente irrompibles. Su aplicación en seguridad bancaria fue mencionada por el docente en clase.

---

## 7. El Fotón y la Energía Cuantizada

*Fuente: Einstein, A., "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt", Annalen der Physik, 17, 132–148, 1905. Análisis moderno: Weinberg, Foundations of Modern Physics, sec. 3.2.*

### 7.1. La Hipótesis del Fotón de Einstein (1905)

Planck había cuantizado los osciladores de la cavidad, pero mantuvo la concepción clásica de que la luz era una onda continua. Einstein dio el paso más radical: postuló que el campo electromagnético **en sí mismo** está cuantizado en paquetes de energía localizados, denominados **fotones**:

$$\boxed{E = hf = \frac{hc}{\lambda}}$$

Donde:
- $h = 6.626 \times 10^{-34}$ J·s es la constante de Planck.
- $f$ es la frecuencia del fotón (Hz).
- $\lambda = c/f$ es la longitud de onda (m).
- $c = 2.998 \times 10^8$ m/s es la velocidad de la luz en el vacío.

El fotón tiene **masa en reposo nula** ($m_0 = 0$), por lo que no le aplica $E = m_0 c^2$. En cambio, toda su energía es energía cinética relativista. Su momento lineal es:

$$p = \frac{E}{c} = \frac{hf}{c} = \frac{h}{\lambda}$$

Esta relación, $\lambda = h/p$, extendida por de Broglie (1924) a toda partícula con momento $p$, es el fundamento de la dualidad onda-corpúsculo.

### 7.2. Comprobación Experimental: El Efecto Fotoeléctrico

La hipótesis del fotón fue concebida por Einstein para explicar el efecto fotoeléctrico: cuando luz de frecuencia $f$ ilumina una superficie metálica, eyecta electrones solo si $f$ supera un umbral $f_0$ característico del metal, sin importar la intensidad de la luz. La energía cinética máxima de los electrones emitidos es:

$$K_{max} = hf - \phi$$

Donde $\phi = hf_0$ es la **función de trabajo** del metal (la energía mínima para arrancar un electrón). Millikan verificó experimentalmente esta ecuación en 1916 con altísima precisión, y Einstein recibió el Premio Nobel de Física 1921 precisamente por esta contribución (no por la relatividad, como se suele creer).

### 7.3. Significado Físico de la Constante de Planck

La constante $h$ establece la escala de la acción cuántica: es la **granularidad mínima del intercambio de energía** entre materia y radiación. A bajas frecuencias ($hf \ll k_BT$), los cuantos son tan pequeños que la energía parece continua y la física clásica es válida. A altas frecuencias ($hf \gtrsim k_BT$), la discretización se vuelve relevante y se manifiestan los efectos cuánticos.

---

## 8. Radiación Térmica del Cuerpo Negro

*Fuente: Weinberg, Foundations of Modern Physics, sec. 3.1–3.3. Datos tabulados: NIST, Physical Reference Data, physics.nist.gov.*

### 8.1. Ley de Stefan-Boltzmann

Derivada experimentalmente por Stefan (1879) y justificada termodinámicamente por Boltzmann (1884), y derivada desde primeros principios integrando la distribución de Planck sobre todas las frecuencias:

$$\int_0^\infty W(f)\,df = \frac{2\pi^5 k_B^4}{15 c^2 h^3} T^4 \equiv \sigma T^4$$

La potencia radiada por unidad de área de un cuerpo negro ideal es:

$$R = \sigma T^4, \qquad \sigma = 5.6704 \times 10^{-8} \text{ W m}^{-2} \text{ K}^{-4}$$

Para cuerpos reales, se introduce la **emisividad** $\varepsilon \in [0, 1]$:

$$R = \varepsilon \sigma T^4$$

La consecuencia práctica discutida en clase (si $T$ se duplica, $R$ aumenta $2^4 = 16$ veces) sigue directamente de la dependencia en $T^4$.

### 8.2. Ley de Desplazamiento de Wien

Derivada por Wien (1893) desde argumentos termodinámicos, confirma que la longitud de onda del máximo de emisión $\lambda_{max}$ es inversamente proporcional a $T$:

$$\lambda_{max} = \frac{b}{T}, \qquad b = 2.898 \times 10^{-3} \text{ m·K}$$

**Ejemplos numéricos:**

| Cuerpo | $T$ (K) | $\lambda_{max}$ | Rango espectral |
|---|---|---|---|
| Cuerpo humano | 310 | 9.35 μm | Infrarrojo medio (invisible) |
| Hierro al rojo | ~1100 | ~2.6 μm | Infrarrojo cercano / rojo |
| Sol (superficie) | 5778 | ~501 nm | Visible (verde-amarillo) |
| Estrella azul (tipo O) | 30000 | ~97 nm | Ultravioleta |

Nótese que el Sol emite el máximo en el verde, pero el ojo humano integra todo el espectro visible y lo percibe como blanco-amarillento.

### 8.3. La Ley de Planck: Distribución Espectral Completa

La distribución completa de la radiación del cuerpo negro, derivada en la Clase 01 y recordada aquí, es:

$$W(f) = \frac{8\pi h f^3}{c^3\left(e^{hf/k_BT} - 1\right)}$$

Esta ecuación contiene las dos leyes anteriores como casos particulares: la integración sobre $f$ da la ley de Stefan-Boltzmann, y la condición $\partial W/\partial f = 0$ da la ley de Wien.

---

## 9. Espectros de Emisión y Absorción Atómica

*Fuente: Bohr, N., "On the Constitution of Atoms and Molecules", Philosophical Magazine, 26, 1–25, 1913. Análisis moderno: Weinberg, Foundations of Modern Physics, sec. 3.5; Serway, R. A., Moses, C. J., Modern Physics, 3ª ed., Brooks/Cole, 2005, cap. 4.*

### 9.1. Espectro Continuo: Sólidos Incandescentes

En un sólido, los átomos están tan estrechamente empaquetados que sus niveles de energía se superponen y forman **bandas de energía continuas** (teoría de bandas). La radiación emitida tiene componentes en todas las longitudes de onda, formando el espectro continuo del cuerpo negro, cuya curva es la distribución de Planck.

### 9.2. Espectros de Línea: Gases y la Cuantización Atómica

En un gas a baja presión (como el hidrógeno o el mercurio en un tubo de descarga), los átomos están suficientemente separados como para tener niveles de energía **discretos y bien definidos**. Cuando un electrón desciende del nivel de energía $E_i$ al nivel $E_f$ ($E_i > E_f$), emite un fotón de frecuencia exactamente:

$$\boxed{f = \frac{E_i - E_f}{h} = \frac{\Delta E}{h}}$$

Cada transición produce una línea espectral de frecuencia determinada. El conjunto de todas las líneas posibles forma el **espectro de emisión** del elemento, su "firma espectral" única —denominación acertadamente utilizada en clase por el alumno Jorge y avalada por su aplicación en teledetección y astrofísica.

### 9.3. Los Niveles de Energía del Átomo de Hidrógeno

Para el átomo de hidrógeno, el modelo de Bohr (1913) predice:

$$E_n = -\frac{m_e e^4}{8\varepsilon_0^2 h^2 n^2} = -\frac{13.6 \text{ eV}}{n^2}, \quad n = 1, 2, 3, \ldots$$

El entero $n$ es el **número cuántico principal**. El nivel $n=1$ es el estado fundamental (el de menor energía); $n = \infty$ corresponde al electrón libre ($E = 0$). El valor 13.6 eV es la energía de ionización del hidrógeno.

Las líneas espectrales se agrupan en **series** según el nivel inferior al que cae el electrón:

| Serie | Nivel final $n_f$ | Rango espectral | Ejemplo de longitud de onda |
|---|---|---|---|
| Lyman | 1 | Ultravioleta | 121.6 nm ($n=2 \to 1$) |
| Balmer | 2 | Visible | 656.3 nm (rojo, $n=3 \to 2$) |
| Paschen | 3 | Infrarrojo cercano | 1875 nm ($n=4 \to 3$) |
| Brackett | 4 | Infrarrojo medio | 4051 nm ($n=5 \to 4$) |

Las cuatro líneas visibles de la **serie de Balmer** (Hα = 656 nm rojo; Hβ = 486 nm azul-verde; Hγ = 434 nm violeta; Hδ = 410 nm violeta profundo) son las más fácilmente observables en laboratorio y fueron descritas empíricamente por Balmer en 1885, décadas antes de que Bohr las explicara.

La fórmula de Rydberg generaliza estas series:

$$\frac{1}{\lambda} = R_H \left( \frac{1}{n_f^2} - \frac{1}{n_i^2} \right), \quad R_H = 1.097 \times 10^7 \text{ m}^{-1}$$

### 9.4. Espectro de Absorción

El proceso inverso ocurre cuando un fotón de frecuencia precisa $f = \Delta E / h$ incide sobre un átomo en su estado base: el electrón absorbe el fotón y asciende al nivel superior. Si la luz continua (espectro completo) pasa a través de un gas frío, este absorbe las frecuencias correspondientes a sus transiciones propias, generando líneas oscuras sobre el espectro continuo: el **espectro de absorción**.

La identidad entre las frecuencias de emisión y absorción de un mismo elemento fue confirmada por Kirchhoff y Bunsen (1859) y es la base de la **espectroscopía astronómica**: la composición química de las estrellas se determina analizando las líneas de absorción en su espectro.

---

## 10. El Láser: Emisión Estimulada y Coherencia

*Fuente: Saleh, B. E. A., Teich, M. C., Fundamentals of Photonics, 3ª ed., Wiley-Interscience, 2019, cap. 15. Fuente histórica: Maiman, T. H., "Stimulated Optical Radiation in Ruby", Nature, 187, 493–494, 1960.*

### 10.1. Los Tres Procesos de Interacción Radiación-Materia

Einstein (1917) identificó tres procesos fundamentales de interacción entre fotones y átomos, cada uno con una probabilidad de ocurrencia distinta:

1. **Absorción:** Un fotón de energía $hf = \Delta E$ incide sobre un átomo en el estado base y es absorbido, llevando al átomo al estado excitado.

2. **Emisión espontánea:** El átomo excitado decae espontáneamente al estado base, emitiendo un fotón en una **dirección y fase aleatorias**. Este proceso es el responsable de la luz de las lámparas incandescentes y los tubos de descarga.

3. **Emisión estimulada:** Un fotón incidente de energía $hf = \Delta E$ interactúa con un átomo que **ya está en el estado excitado** e induce su decaimiento, produciendo un segundo fotón **idéntico al primero**: misma frecuencia, misma dirección de propagación y en **fase** con el fotón estimulante:

$$\text{fotón incidente} + \text{átomo}^* \rightarrow 2 \text{ fotones idénticos} + \text{átomo base}$$

La emisión estimulada es el mecanismo fundamental del láser.

### 10.2. Inversión de Población y Amplificación

En condiciones normales de equilibrio térmico, la mayoría de los átomos se encuentra en el estado base y los fotones son más probablemente absorbidos que estimulados. Para que haya amplificación neta, es necesario conseguir que la mayoría de los átomos esté en el estado excitado: esto se llama **inversión de población** y se logra mediante **bombeo** (óptico, eléctrico o químico).

Un **nivel metaestable** —un estado excitado con tiempo de vida largo (~$10^{-3}$ s, frente a los ~$10^{-8}$ s de la emisión espontánea típica)— es esencial para acumular átomos excitados y mantener la inversión de población.

### 10.3. Propiedades del Láser y Contraste con Otras Fuentes

Las características únicas del láser derivan directamente de la emisión estimulada:

| Propiedad | Fuente incandescente | Tubo de descarga | Láser |
|---|---|---|---|
| **Espectro** | Continuo (cuerpo negro) | Líneas discretas | Monocromático (una línea) |
| **Coherencia temporal** | Muy baja | Baja | Muy alta |
| **Coherencia espacial** | Muy baja | Baja | Muy alta |
| **Divergencia del haz** | Alta (isotrópica) | Alta | Muy baja (dirigido) |
| **Brillo** ($\sim$W/cm²/sr) | Bajo | Bajo | Muy alto |

La **coherencia** (espacial y temporal) es la propiedad que distingue al láser. Todos los fotones emitidos están en fase, lo que concentra la energía de manera extraordinaria. Como señala la alumna María Isabel, esto explica por qué un láser de 40 W puede cortar una lámina de acero, mientras que una bombilla de igual potencia solo calienta e ilumina difusamente.

El primer láser fue construido por Theodore Maiman en 1960 usando un cristal de rubí como medio activo y una lámpara de xenón como fuente de bombeo. *(Fuente: Maiman, 1960, op. cit.)*

---

## 11. Conclusiones de la Clase

1. **La mecánica cuántica** es la teoría que describe la naturaleza a escala subatómica. Sus diferencias con la física clásica no son graduales sino cualitativas: determinismo vs. probabilismo, continuidad vs. cuantización, separación onda-partícula vs. dualidad.
2. **El principio de incertidumbre de Heisenberg** prohíbe conocer simultáneamente con precisión arbitraria la posición y el momento de una partícula, con consecuencias que van desde la estabilidad del átomo hasta la nanociencia.
3. **El entrelazamiento cuántico** es un recurso físico real, verificado experimentalmente, que permite correlaciones entre partículas distantes sin violar la causalidad relativista.
4. **El efecto túnel** permite a las partículas penetrar barreras energéticas clásicamente infranqueables. Sus aplicaciones van desde la radioactividad hasta el STM.
5. **La energía del fotón** $E = hf$ cuantiza el intercambio energético entre luz y materia. Con ella se explican el efecto fotoeléctrico, la estabilidad atómica y los espectros de línea.
6. **Los espectros atómicos** son consecuencia directa de la cuantización de la energía. Cada elemento tiene una firma espectral única, base de la espectroscopía analítica y astronómica.
7. **El láser** es la aplicación tecnológica directa de la emisión estimulada predicha por Einstein en 1917, posible gracias a la inversión de población y la coherencia inherente al proceso cuántico.

---

## 12. Pendiente

La presentación en PDF de la Clase 02 no está aún disponible. Cuando sea entregada por el docente, este análisis será revisado y complementado con:
- Las gráficas del espectro del cuerpo negro mostradas en clase.
- Los diagramas de niveles de energía dibujados por el docente.
- Las ecuaciones auxiliares presentadas visualmente.

---

## Referencias Bibliográficas

### Textos del Curso
1. Weinberg, S., *Foundations of Modern Physics*, Cambridge University Press, 2021. Secs. 3.1–3.6.

### Textos Universitarios Estándar
2. Griffiths, D. J., Schroeter, D. F., *Introduction to Quantum Mechanics*, 3ª ed., Cambridge University Press, 2018. Caps. 1, 2, 9.
3. Sakurai, J. J., Napolitano, J., *Modern Quantum Mechanics*, 3ª ed., Cambridge University Press, 2021. Caps. 1, 2.
4. Serway, R. A., Moses, C. J., *Modern Physics*, 3ª ed., Brooks/Cole, 2005. Caps. 3, 4.
5. Halliday, D., Resnick, R., Walker, J., *Fundamentals of Physics*, 10ª ed., Wiley, 2014. Cap. 38.
6. Saleh, B. E. A., Teich, M. C., *Fundamentals of Photonics*, 3ª ed., Wiley-Interscience, 2019. Cap. 15.

### Recursos de Libre Acceso y Rigor Verificado
7. Feynman, R. P., Leighton, R. B., Sands, M., *The Feynman Lectures on Physics*, Vol. III. Caltech, 1965. Disponible en: feynmanlectures.caltech.edu

### Artículos Científicos de Fuente Primaria (Revisados por Pares)
8. Einstein, A., "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt", *Annalen der Physik*, 17, 132–148, 1905.
9. Bohr, N., "On the Constitution of Atoms and Molecules", *Philosophical Magazine*, 26, 1–25, 1913.
10. Bell, J. S., "On the Einstein Podolsky Rosen Paradox", *Physics Physique Fizika*, 1, 195–200, 1964.
11. Gamow, G., "Zur Quantentheorie des Atomkerns", *Zeitschrift für Physik*, 51, 204–212, 1928.
12. Arndt, M., et al., "Wave–particle duality of C60 molecules", *Nature*, 401, 680–682, 1999. DOI: 10.1038/44348.
13. Hensen, B., et al., "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres", *Nature*, 526, 682–686, 2015. DOI: 10.1038/nature15759.
14. Yin, J., et al., "Satellite-based entanglement distribution over 1200 kilometers", *Science*, 356, 1140–1144, 2017. DOI: 10.1126/science.aan3211.
15. Binnig, G., Rohrer, H., "Scanning tunneling microscopy — from birth to adolescence", *Rev. Mod. Phys.*, 59, 615–625, 1987.
16. Maiman, T. H., "Stimulated Optical Radiation in Ruby", *Nature*, 187, 493–494, 1960.
17. Alivisatos, A. P., "Semiconductor Clusters, Nanocrystals, and Quantum Dots", *Science*, 271, 933–937, 1996.
18. Shor, P. W., "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", *SIAM J. Comput.*, 26, 1484–1509, 1997.
