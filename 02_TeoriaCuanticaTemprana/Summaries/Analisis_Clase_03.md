# Análisis Clase 03: Derivación del Cuerpo Negro, Efecto Fotoeléctrico y Modelos Atómicos

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Paulraj Manidurai (Prof. Paul)  
**Fecha:** 17 de julio de 2026  
**Duración:** 3 h 8 min  
**Resultados de aprendizaje:** RA 2 — Derivación de la densidad de modos y la ley de Planck; RA 3 — Efecto fotoeléctrico y cuantización de la luz; RA 4 — Evolución histórica de los modelos atómicos.

> **Fuentes disponibles:** Únicamente transcripción del video (`.docx`). La presentación en PDF no ha sido entregada aún. Este análisis será complementado y actualizado cuando el PDF esté disponible. La bibliografía externa cubre los desarrollos matemáticos presentados visualmente en clase.

---

## 1. Repaso: El Cuerpo Negro y la Catástrofe Ultravioleta

*Fuente: Weinberg, S., Foundations of Modern Physics, Cambridge University Press, 2021, sec. 3.1. Fuente complementaria: Serway, R. A., Moses, C. J., Modern Physics, 3ª ed., Brooks/Cole, 2005, sec. 3.1.*

El docente abre la clase con una recapitulación de las sesiones anteriores para conectar la discusión con la derivación formal de la densidad de modos, presentada en esta sesión.

El **cuerpo negro ideal** absorbe el 100% de la radiación que incide sobre él y, en consecuencia, emite el 100% de la energía absorbida como radiación térmica pura, dependiente únicamente de su temperatura $T$. El mejor aproximante experimental es una **cavidad cerrada con un pequeño orificio**: la radiación entrante rebota múltiples veces en las paredes y es absorbida casi por completo; la radiación que escapa por el orificio es representativa del equilibrio térmico del interior.

Al calentar el cuerpo, la curva de emisión espectral $W(f,T)$ tiene forma de campana y su máximo se desplaza hacia longitudes de onda más cortas (mayor frecuencia) al aumentar $T$ — **Ley de Desplazamiento de Wien**: $\lambda_{max} T = b = 2.898 \times 10^{-3}$ m·K. La teoría clásica (Rayleigh-Jeans) fallaba a altas frecuencias produciendo una divergencia; la solución de Planck resolvió este problema mediante la cuantización de la energía.

---

## 2. Derivación de la Densidad de Modos del Campo Electromagnético (Ley de Rayleigh-Jeans)

*Fuente principal: Rayleigh, Lord, Philosophical Magazine, 49, 539–540, 1900. Jeans, J. H., Philosophical Magazine, 10, 91–98, 1905. Análisis moderno: Griffiths, D. J., Schroeter, D. F., Introduction to Quantum Mechanics, 3ª ed., Cambridge University Press, 2018, sec. 2.3. Mandl, F., Statistical Physics, 2ª ed., Wiley, 1988, cap. 10.*

### 2.1. Ondas Estacionarias en una Cavidad Cúbica

Para facilitar el cálculo, se reemplaza la cavidad esférica por un **cubo de lado $L$** (la forma geométrica no afecta el resultado final para una cavidad grande). Las ondas electromagnéticas dentro de la cavidad deben satisfacer condiciones de frontera: los campos deben anularse en las paredes. Esto restringe las longitudes de onda a valores discretos: entre dos paredes opuestas separadas por $L$, solo caben longitudes de onda $\lambda$ tales que $L = m \cdot \lambda/2$, con $m$ entero positivo. Por lo tanto:

$$\lambda_m = \frac{2L}{m}, \qquad m = 1, 2, 3, \ldots$$

Y la frecuencia correspondiente es:

$$f = \frac{c}{\lambda} = \frac{cm}{2L}$$

### 2.2. Conteo de Modos en Tres Dimensiones

En una cavidad tridimensional, los modos están caracterizados por tres enteros positivos $(m_x, m_y, m_z)$, uno por cada dimensión. El número de onda en cada dirección es $k_i = m_i \pi / L$. El módulo del vector de onda es:

$$k^2 = \left(\frac{\pi}{L}\right)^2\left(m_x^2 + m_y^2 + m_z^2\right)$$

Usando la relación de dispersión $k = 2\pi f/c$:

$$m_x^2 + m_y^2 + m_z^2 = \left(\frac{2Lf}{c}\right)^2 \equiv R^2$$

Cada terna $(m_x, m_y, m_z)$ con $m_i \in \mathbb{Z}^+$ representa un modo posible. El número de modos con $|\mathbf{m}|$ entre $R$ y $R + dR$ se cuenta como el volumen del cascarón esférico de radio $R$ en el primer octante (donde todos los $m_i > 0$):

$$dN_{geom} = \frac{1}{8} \cdot 4\pi R^2\, dR$$

Convirtiendo de $R$ a $f$ usando $R = 2Lf/c$ y $dR = (2L/c)\,df$:

$$dN_{geom} = \frac{1}{8} \cdot 4\pi \left(\frac{2Lf}{c}\right)^2 \frac{2L}{c}\,df = \frac{4\pi L^3 f^2}{c^3}\,df$$

### 2.3. El Factor $1/8$: Explicación Física

El factor $1/8$ corresponde a trabajar solo en el primer octante del espacio $(m_x, m_y, m_z)$, donde todos los índices son positivos. Geométricamente, el punto origen es compartido por 8 cubos adyacentes (uno por cada octante), y la esfera completa abarca los 8. Al tomar solo el primer octante, se toma exactamente $1/8$ del volumen total de la esfera.

### 2.4. Polarización: Factor 2

Las ondas electromagnéticas son transversales y tienen **dos estados de polarización independientes** para cada vector de onda (campo eléctrico perpendicular al campo magnético, con dos orientaciones posibles en el plano transversal). Esto duplica el número de modos:

$$dN = 2 \cdot dN_{geom} = \frac{8\pi L^3 f^2}{c^3}\,df$$

La **densidad de modos por unidad de volumen y de frecuencia** es:

$$\boxed{g(f) = \frac{1}{V}\frac{dN}{df} = \frac{8\pi f^2}{c^3}}$$

### 2.5. Energía Media Clásica: Teorema de Equipartición

*Fuente: Reif, F., Fundamentals of Statistical and Thermal Physics, Waveland Press, 2009, cap. 7.*

El **teorema de equipartición de la energía**, formulado por Boltzmann, establece que en equilibrio térmico a temperatura $T$, cada grado de libertad cuadrático (ya sea cinético o potencial) contribuye con $\frac{1}{2}k_BT$ a la energía media. Cada modo electromagnético actúa como un oscilador armónico con dos grados de libertad cuadráticos (energía cinética y potencial), de modo que:

$$\langle E_{clasico} \rangle = 2 \times \frac{1}{2}k_BT = k_BT$$

Multiplicando la densidad de modos por la energía promedio clásica:

$$\boxed{W_{RJ}(f) = \frac{8\pi f^2}{c^3} k_BT}$$

Esta es la **Ley de Rayleigh-Jeans**. Acuerda con los datos experimentales para frecuencias bajas (infrarrojo), pero diverge para $f \to \infty$ (catástrofe ultravioleta).

---

## 3. El Modelo de los Resonadores de Planck y su Solución

*Fuente: Planck, M., Verhandlungen der Deutschen Physikalischen Gesellschaft, 2, 237–245, 1900. Análisis: Weinberg, Foundations of Modern Physics, sec. 3.2. Derivación estadística: Mandl, Statistical Physics, 2ª ed., Wiley, 1988, sec. 2.5.*

### 3.1. Los Resonadores de Planck

Planck imaginó que la cavidad del cuerpo negro contiene, además de la radiación, moléculas de gas ideal que actúan como **resonadores**: osciladores que absorben energía de radiación de una frecuencia específica y la re-emiten en la misma frecuencia. Las moléculas del gas son los resonadores.

Como se discute en la transcripción (pregunta del alumno Galo): *"Las mismas moléculas del gas son los que reciben energía y, dependiendo del monto, la vuelven a emitir."* Esto es correcto: cada resonador absorbía solo ciertos fotones (de frecuencia resonante) y los re-emitía, funcionando como un oscilador sintonizado.

Esta abstracción permite separar el problema en dos partes:
1. Cuántos resonadores de frecuencia $f$ caben en el volumen: esto da la densidad de modos $g(f)$ (ya calculada).
2. Cuánta energía tiene en promedio cada resonador: esto es lo que Planck modificó radicalmente.

### 3.2. El Postulado de Cuantización

La diferencia clave de Planck respecto a Rayleigh-Jeans: en lugar de permitir que cada resonador tenga una energía continua $E \in [0, \infty)$, Planck postuló que los resonadores solo pueden tener energías que son múltiplos enteros de la cantidad $\varepsilon = hf$:

$$\boxed{E_n = nhf, \qquad n = 0, 1, 2, 3, \ldots}$$

Con $h = 6.626 \times 10^{-34}$ J·s la **constante de Planck**, determinada ajustando los datos experimentales. En clase, el docente guía al alumno Pablo Vicencio a calcular el valor de $h$ usando la relación $E = hf$ junto con la longitud de Compton del electrón, obteniendo $h \approx 6.6 \times 10^{-34}$ J·s, en excelente acuerdo con el valor aceptado.

### 3.3. Energía Media del Resonador Cuántico

Con la distribución de Boltzmann aplicada a los niveles discretos $E_n = nhf$, la energía promedio es (derivación completa en Análisis Clase 01):

$$\langle E_f \rangle = \frac{hf}{e^{hf/k_BT} - 1}$$

### 3.4. La Ley de Radiación de Planck

Combinando la densidad de modos con la energía media cuántica:

$$\boxed{W(f,T) = \frac{8\pi hf^3}{c^3} \cdot \frac{1}{e^{hf/k_BT}-1}}$$

Esta expresión, como se muestra en clase comparando las dos curvas, **no diverge** a alta frecuencia: cuando $f \to \infty$, el denominador crece exponencialmente, suprimiendo el término $f^3$ y llevando $W \to 0$. La **catástrofe ultravioleta queda eliminada**.

También en longitudes de onda:

$$W(\lambda, T) = \frac{8\pi hc}{\lambda^5} \cdot \frac{1}{e^{hc/\lambda k_BT}-1}$$

---

## 4. El Efecto Fotoeléctrico: La Cuantización de la Luz

*Fuente primaria: Einstein, A., "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt", Annalen der Physik, 17, 132–148, 1905. Verificación experimental: Millikan, R. A., Physical Review, 7, 355–388, 1916. Análisis moderno: Weinberg, Foundations of Modern Physics, sec. 3.3; Krane, K. S., Modern Physics, 4ª ed., Wiley, 2020, sec. 3.2.*

### 4.1. El Problema Experimental

Cuando luz de frecuencia $f$ incide sobre la superficie de un metal, puede arrancar electrones de la capa de valencia. Las observaciones experimentales (Hertz, 1887; Lenard, 1902) eran inexplicables con la óptica clásica de Maxwell:

| Observación experimental | Predicción clásica (onda) | Realidad |
|---|---|---|
| Existe una frecuencia umbral $f_0$ por debajo de la cual no hay emisión | No hay umbral; con suficiente intensidad debería funcionar | Confirmado: existe umbral |
| La energía cinética máxima de los e⁻ depende de $f$, no de la intensidad | La intensidad determina la energía | Confirmado: solo depende de $f$ |
| El efecto es instantáneo (< $10^{-9}$ s) | Se requiere tiempo para acumular energía | Confirmado: es instantáneo |
| Aumentar la intensidad aumenta la corriente, no la energía de los e⁻ | Más intensidad → más energía | Confirmado: más e⁻, misma energía |

### 4.2. La Hipótesis del Fotón (Einstein, 1905)

Einstein extendió la cuantización de Planck de los osciladores al campo mismo: la luz se propaga como **cuantos discretos de energía** — fotones — cada uno con energía:

$$E_{foton} = hf$$

Un fotón individual interactúa de forma unitaria (uno a uno) con un electrón. Si la energía del fotón supera la energía de enlace del electrón con el metal (función de trabajo $\phi$), el electrón es expulsado. El exceso de energía se convierte en energía cinética:

$$\boxed{K_{max} = hf - \phi}$$

La **función de trabajo** $\phi = hf_0$ representa la energía mínima necesaria para extraer un electrón de la capa de valencia de ese material específico:

$$\phi = hf_0 \implies f_0 = \frac{\phi}{h}$$

Solo cuando $f > f_0$ hay efecto fotoeléctrico. Aumentar la intensidad de la luz solo aumenta el número de fotones (y por tanto el número de electrones expulsados), pero no la energía de cada fotón ni la velocidad de los electrones emitidos.

La demostración en clase mediante el simulador (sodio, zinc, cobre, calcio, platino) ilustra directamente que:
- Cada metal tiene su propia $f_0$ (su propia función de trabajo $\phi$).
- Con $\lambda > \lambda_0$ (rojo), ninguna intensidad produce emisión.
- Con $\lambda < \lambda_0$ (UV), incluso una intensidad baja produce emisión.

### 4.3. Determinación Experimental de $h$: El Voltaje de Frenado

*Fuente: Millikan, R. A., "A Direct Photoelectric Determination of Planck's 'h'", Physical Review, 7, 355–388, 1916.*

Para medir la energía cinética máxima de los fotoelectrones, se aplica un **voltaje de frenado** $V_s$ (polarización inversa): se conecta la batería de manera que el campo eléctrico se oponga al movimiento de los electrones. El voltaje mínimo para detener completamente la corriente satisface:

$$eV_s = K_{max} = hf - \phi$$

Reordenando:

$$V_s = \frac{h}{e} f - \frac{\phi}{e}$$

Esto predice que $V_s$ es una función lineal de $f$, con pendiente $h/e$ y ordenada $-\phi/e$. Millikan midió con gran precisión esta relación para varios metales y determinó:

$$h = e \cdot \frac{\Delta V_s}{\Delta f} = 6.626 \times 10^{-34} \text{ J·s}$$

En perfecto acuerdo con el valor que Planck había usado para ajustar el espectro del cuerpo negro. Este resultado confirmó de forma independiente que la constante de Planck es una constante universal de la naturaleza.

Millikan recibió el Premio Nobel de Física de 1923 en parte por esta medición. Einstein recibió el Nobel de 1921 por la interpretación teórica del efecto.

### 4.4. Ejemplo Numérico Resuelto en Clase

**Problema 1:** Luz UV de $\lambda = 300$ nm incide sobre plata. La función de trabajo de la plata es $\phi = 4.73$ eV. ¿Hay efecto fotoeléctrico?

La longitud de onda umbral de la plata es:

$$\lambda_0 = \frac{hc}{\phi} = \frac{(6.626\times10^{-34})(3\times10^8)}{4.73 \times 1.6 \times 10^{-19}} = \frac{1.988\times10^{-25}}{7.568\times10^{-19}} \approx 262 \text{ nm}$$

Como $\lambda = 300$ nm $> \lambda_0 = 262$ nm, la frecuencia es menor que la umbral. **No hay efecto fotoeléctrico**.

**Problema 2:** Luz UV de $\lambda = 430$ nm (violeta) incide sobre calcio. $\phi_{Ca} = 2.75$ eV. Calcular la energía del fotón y la energía cinética máxima del fotoelectrón.

Energía del fotón:

$$E = \frac{hc}{\lambda} = \frac{(6.626\times10^{-34})(3\times10^8)}{430\times10^{-9}} = \frac{1.988\times10^{-25}}{4.3\times10^{-7}} = 4.62\times10^{-19} \text{ J} = 2.89 \text{ eV}$$

Energía cinética máxima:

$$K_{max} = E - \phi = 2.89 - 2.75 = 0.14 \text{ eV}$$

Voltaje de frenado requerido: $V_s = K_{max}/e = 0.14$ V (en la transcripción, el docente menciona $\approx 0.17$ V, la diferencia se debe al redondeo del valor de $h$).

---

## 5. Evolución Histórica de los Modelos Atómicos

*Fuente: Krane, K. S., Modern Physics, 4ª ed., Wiley, 2020, caps. 4 y 5. Serway y Moses, Modern Physics, 3ª ed., Brooks/Cole, 2005, cap. 4. Fuente histórica: Pais, A., Subtle is the Lord: The Science and Life of Albert Einstein, Oxford University Press, 1982.*

El docente dedica la parte final de la clase a recorrer la evolución histórica de los modelos atómicos, desde las ideas filosóficas griegas hasta el modelo cuántico de Schrödinger. Esta progresión ilustra cómo cada modelo fue corregido por las limitaciones que el anterior no podía explicar.

### 5.1. Modelo de Dalton (1803): El Átomo Sólido

John Dalton formuló la primera teoría atómica cuantitativa con base experimental: cada elemento está compuesto de átomos idénticos e indivisibles. Los átomos son esferas sólidas que se combinan en proporciones enteras para formar compuestos. 

**Limitación:** No explicaba por qué los materiales tienen carga eléctrica ni por qué existen efectos electrostáticos (atracción entre cargas opuestas).

*(Fuente: Dalton, J., A New System of Chemical Philosophy, Manchester, 1808.)*

### 5.2. Modelo de Thomson (1897): El Pudín de Pasas

Tras el descubrimiento del electrón por J.J. Thomson en 1897 (usando tubos de rayos catódicos), quedó claro que los átomos contienen cargas negativas. Como el átomo en su conjunto es neutro, Thomson propuso que los electrones (carga negativa) estaban dispersos dentro de una nube uniforme de carga positiva — el modelo del "pudín de pasas" (*plum pudding*).

**Limitación:** No explicaba los espectros de emisión ni el comportamiento de los electrones al colisionar con otros átomos.

*(Fuente: Thomson, J. J., Philosophical Magazine, 44, 293–316, 1897.)*

### 5.3. Modelo de Rutherford (1911): El Núcleo

Ernest Rutherford bombardeó una **lámina ultradelgada de oro** (comparable a una capa de pan de oro, de apenas unos átomos de espesor) con partículas alfa ($\alpha$: núcleos de helio, carga $+2e$). Los resultados fueron inesperados:

- La mayoría de las partículas pasaron directamente, sin deflexión significativa.
- Algunas se desviaron a ángulos grandes.
- Una fracción muy pequeña rebotó hacia atrás.

Como señala Rutherford: fue tan sorprendente como si se disparara un cañón contra papel de seda y las balas regresaran. La conclusión fue que prácticamente toda la masa del átomo y toda la carga positiva están concentradas en un **núcleo** extremadamente pequeño y denso (radio ~$10^{-15}$ m = 1 fm) rodeado de espacio casi vacío donde orbitan los electrones (radio atómico ~$10^{-10}$ m = 1 Å). Como señala el docente, la proporción es equivalente a un grano de arveja (núcleo) en el centro de un campo de fútbol (átomo).

**Limitación:** Un electrón en órbita circular está en movimiento acelerado. Según Maxwell, toda carga acelerada emite radiación, perdiendo energía continuamente. En este modelo, el electrón espiralearía hacia el núcleo en un tiempo de $\sim 10^{-8}$ s, emitiendo un espectro continuo. Ningún átomo podría existir de forma estable.

*(Fuente: Geiger, H., Marsden, E., Proceedings of the Royal Society A, 82, 495–500, 1909. Rutherford, E., Philosophical Magazine, 21, 669–688, 1911.)*

### 5.4. Modelo de Bohr (1913): Órbitas Cuantizadas

Niels Bohr resolvió la inestabilidad del modelo de Rutherford incorporando la cuantización. Sus postulados:

1. **Postulado de las órbitas estacionarias:** Los electrones solo pueden existir en ciertas órbitas circulares específicas, sin emitir radiación. Estas órbitas satisfacen la condición de cuantización del momento angular:

$$L = m_e v r = n\hbar, \qquad n = 1, 2, 3, \ldots$$

2. **Postulado de la emisión/absorción:** Cuando un electrón transita entre dos órbitas, emite o absorbe un fotón de energía exactamente igual a la diferencia de energía:

$$hf = E_i - E_f$$

Aplicando la fuerza de Coulomb como fuerza centrípeta y la condición de cuantización:

$$E_n = -\frac{m_e e^4}{8\varepsilon_0^2 h^2 n^2} = -\frac{13.6 \text{ eV}}{n^2}, \qquad n = 1, 2, 3, \ldots$$

Y el radio de las órbitas:

$$r_n = \frac{n^2 \varepsilon_0 h^2}{\pi m_e e^2} = n^2 a_0, \qquad a_0 = 0.0529 \text{ nm (radio de Bohr)}$$

El modelo de Bohr explicó con precisión el espectro del hidrógeno (series de Balmer, Lyman, Paschen) y la estabilidad del átomo.

**Limitación:** Como señala el alumno Sebastián con precisión, el modelo falla para átomos con más de un electrón (helio en adelante) porque el problema de tres cuerpos (núcleo + 2 electrones) no tiene solución analítica exacta y además requiere considerar la repulsión electrón-electrón. Tampoco explica la intensidad relativa de las líneas espectrales ni los efectos de campo magnético (efecto Zeeman).

*(Fuente: Bohr, N., Philosophical Magazine, 26, 1–25, 1913.)*

### 5.5. Modelo de Schrödinger–Heisenberg (1925–1926): La Mecánica Cuántica Completa

El modelo de Schrödinger reemplaza las órbitas definidas de Bohr por **orbitales**: regiones tridimensionales del espacio donde la **probabilidad** de encontrar al electrón es significativa. El estado del electrón está descrito por la **función de onda** $\Psi(\mathbf{r}, t)$, que satisface la ecuación de Schrödinger:

$$-\frac{\hbar^2}{2m_e}\nabla^2\Psi + V(r)\Psi = E\Psi \quad \text{(estacionaria)}$$

La densidad de probabilidad de encontrar al electrón en la posición $\mathbf{r}$ es:

$$P(\mathbf{r}) = |\Psi(\mathbf{r})|^2$$

La función de onda $\Psi$ en general es un número complejo: $\Psi = A + iB$. Al elevar al cuadrado se obtiene la probabilidad real: $|\Psi|^2 = A^2 + B^2$. La parte imaginaria cumple una función matemática esencial: evita la pérdida de información sobre el estado del electrón (como señala el alumno Fernando en clase, conectando con el entrelazamiento cuántico).

Los orbitales tienen formas geométricas características (notación espectroscópica):
- **Orbital $s$:** Forma esférica. El electrón puede encontrarse con igual probabilidad en cualquier dirección.
- **Orbital $p$:** Forma de "marraqueta" (dos lóbulos) orientada en los ejes $x$, $y$ o $z$.
- **Orbitales $d$, $f$:** Formas más complejas con múltiples lóbulos.

Las zonas más oscuras en los diagramas de orbitales indican mayor probabilidad de encontrar al electrón; las más claras, menor probabilidad.

El **principio de incertidumbre de Heisenberg** ($\Delta x \cdot \Delta p \geq \hbar/2$) justifica por qué solo se puede hablar en términos de probabilidad: no se puede conocer simultáneamente con precisión la posición y el momento del electrón.

*(Fuente: Griffiths, Introduction to Quantum Mechanics, 3ª ed., Cambridge University Press, 2018, caps. 4 y 5. Eisberg, R., Resnick, R., Quantum Physics of Atoms, Molecules, Solids, Nuclei, and Particles, 2ª ed., Wiley, 1985, cap. 6.)*

### 5.6. Cronología Comparativa de los Modelos Atómicos

| Año | Modelo | Propuesto por | Aporte clave | Limitación principal |
|---|---|---|---|---|
| 1803 | Átomo sólido | Dalton | Estructura discreta de la materia | No explica cargas eléctricas |
| 1897 | Pudín de pasas | Thomson | Existencia del electrón | No explica espectros ni estabilidad |
| 1911 | Nuclear planetario | Rutherford | Núcleo denso y central | Electrón espirala al núcleo en $10^{-8}$ s |
| 1913 | Órbitas cuantizadas | Bohr | Espectro de H, estabilidad | Solo funciona para H (1 electrón) |
| 1925–26 | Orbitales (MQ completa) | Schrödinger/Heisenberg | Descripción probabilística completa | — (modelo aún vigente) |

---

## 6. Conexión entre Efecto Fotoeléctrico y Modelo de Bohr: Los Rayos X

*Fuente: Krane, K. S., Modern Physics, 4ª ed., Wiley, 2020, sec. 8.1.*

Al final de la clase, el docente hace una conexión pedagógica notable: el efecto fotoeléctrico no se limita a los electrones de valencia. Un fotón de energía suficientemente alta puede expulsar un electrón de las capas internas del átomo (cercanas al núcleo). Como estas capas están mucho más fuertemente ligadas (la fuerza de Coulomb aumenta al reducir la distancia al núcleo), se necesita una energía de fotón mucho mayor — correspondiente a los **rayos X**.

Cuando un fotón de rayos X expulsa un electrón de una capa interna, un electrón de una capa superior cae para llenar el hueco, emitiendo un fotón de energía correspondiente a la diferencia de niveles (fluorescencia de rayos X). Esta es la base de técnicas analíticas como la fluorescencia de rayos X (XRF) y la espectroscopía de emisión atómica.

---

## 7. Conclusiones de la Clase

1. La **densidad de modos** del campo electromagnético en una cavidad cúbica se deriva formalmente como $g(f) = 8\pi f^2/c^3$, resultado que combina la geometría del espacio $k$ con el factor de degeneración de polarización (× 2). El teorema de equipartición clásico da $\langle E \rangle = k_BT$ por modo, produciendo la ley de Rayleigh-Jeans y su catástrofe ultravioleta.

2. Planck resolvió el problema modelando los osciladores de la cavidad como **resonadores cuánticos** con energías discretas $E_n = nhf$, lo que modifica la energía media a $\langle E \rangle = hf/(e^{hf/k_BT}-1)$, suprimiendo la divergencia a alta frecuencia.

3. El **efecto fotoeléctrico** (Einstein, 1905) establece que la luz intercambia energía con la materia en cuantos discretos (fotones) de energía $E = hf$. La energía cinética máxima de los fotoelectrones es $K_{max} = hf - \phi$, donde $\phi$ es la función de trabajo del material. Este resultado fue verificado experimentalmente por Millikan (1916).

4. La **evolución de los modelos atómicos** (Dalton → Thomson → Rutherford → Bohr → Schrödinger) ilustra el método científico: cada modelo fue reemplazado porque no podía explicar observaciones específicas. El modelo de Schrödinger, que describe al electrón mediante una función de onda probabilística, es la descripción correcta y completa para sistemas de múltiples electrones.

5. El modelo de Bohr describe perfectamente el **espectro del hidrógeno** pero falla para átomos con más de un electrón, tanto por razones físicas (ignorar repulsión e–e) como matemáticas (el problema de tres cuerpos no tiene solución analítica exacta).

---

## 8. Pendiente: Actualización cuando el PDF esté Disponible

Este análisis será revisado y complementado cuando se disponga de la presentación en PDF de la Clase 03, especialmente para:
- Los diagramas de la densidad de modos y comparación visual de las curvas de Rayleigh-Jeans vs. Planck.
- Las figuras del experimento de Rutherford (geometría del colimador, detectores A, B, C).
- Los diagramas de orbitales atómicos ($s$, $p$, $d$, $f$) con colores de probabilidad.
- Las ecuaciones auxiliares presentadas en las diapositivas no visibles en la transcripción.

---

## 9. Referencias Bibliográficas

### Artículos Científicos Originales (Fuentes Primarias)
1. Planck, M., "Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum", *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245, 1900.
2. Rayleigh, Lord, "Remarks upon the Law of Complete Radiation", *Philosophical Magazine*, 49, 539–540, 1900.
3. Jeans, J. H., "On the Partition of Energy between Matter and Aether", *Philosophical Magazine*, 10, 91–98, 1905.
4. Einstein, A., "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt", *Annalen der Physik*, 17, 132–148, 1905.
5. Millikan, R. A., "A Direct Photoelectric Determination of Planck's 'h'", *Physical Review*, 7, 355–388, 1916.
6. Thomson, J. J., "Cathode Rays", *Philosophical Magazine*, 44, 293–316, 1897.
7. Geiger, H., Marsden, E., "On a Diffuse Reflection of the α-Particles", *Proceedings of the Royal Society A*, 82, 495–500, 1909.
8. Rutherford, E., "The Scattering of α and β Particles by Matter and the Structure of the Atom", *Philosophical Magazine*, 21, 669–688, 1911.
9. Bohr, N., "On the Constitution of Atoms and Molecules", *Philosophical Magazine*, 26, 1–25, 1913.
10. Dalton, J., *A New System of Chemical Philosophy*, Manchester, 1808.

### Textos del Curso
11. Weinberg, S., *Foundations of Modern Physics*, Cambridge University Press, 2021. Secs. 3.1–3.4.

### Textos Universitarios Estándar
12. Griffiths, D. J., Schroeter, D. F., *Introduction to Quantum Mechanics*, 3ª ed., Cambridge University Press, 2018. Secs. 2.3, 4.1–4.4.
13. Krane, K. S., *Modern Physics*, 4ª ed., Wiley, 2020. Caps. 3, 4, 5.
14. Serway, R. A., Moses, C. J., *Modern Physics*, 3ª ed., Brooks/Cole, 2005. Caps. 3, 4.
15. Mandl, F., *Statistical Physics*, 2ª ed., Wiley, 1988. Secs. 2.5, 10.3.
16. Reif, F., *Fundamentals of Statistical and Thermal Physics*, Waveland Press, 2009. Cap. 7.
17. Eisberg, R., Resnick, R., *Quantum Physics of Atoms, Molecules, Solids, Nuclei, and Particles*, 2ª ed., Wiley, 1985. Caps. 4, 6.

### Historia de la Física
18. Pais, A., *Subtle is the Lord: The Science and Life of Albert Einstein*, Oxford University Press, 1982.
