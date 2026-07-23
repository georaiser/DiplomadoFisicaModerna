# Análisis Clase 03 — Derivación Completa del Espectro de Planck, Efecto Fotoeléctrico y Modelos Atómicos

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Paulraj Manidurai  
**Fecha:** 17 de julio de 2026  
**Resultados de Aprendizaje cubiertos:** RA 2, RA 3, RA 4, RA 5  
**Fuentes:** Transcripción de video (clase 17 jul 2026) · Diapositivas `class_II_Diplomado en Física Moderna` (47 págs.) · `Desarrollo de los leyes-Cuerpo negro.pdf` (7 págs.) · Bibliografía externa verificada

---

## 1. Recapitulación y Motivación

*Fuente: Diapositivas `class_II`, págs. 2–7. Fuente complementaria: Weinberg, Foundations of Modern Physics, §1.1.*

La clase anterior estableció el problema: la ley de Rayleigh-Jeans, derivada rigurosamente de la mecánica clásica y el teorema de equipartición, predice una densidad de energía espectral que diverge a alta frecuencia:

$$u_{RJ}(\nu, T) = \frac{8\pi\nu^2}{c^3} k_B T \xrightarrow{\nu \to \infty} \infty \quad \text{(catástrofe ultravioleta)}$$

La fórmula de Wien, por su parte, reproduce bien el extremo ultravioleta pero falla en el infrarrojo:

$$u_{Wien}(\nu, T) = A\nu^5 e^{-\beta\nu/T}$$

Ninguna de las dos describe el espectro completo. Esta clase desarrolla la solución de Max Planck (1900): la cuantización de la energía de los osciladores.

---

## 2. Derivación Completa de la Ley de Rayleigh-Jeans

*Fuente: Diapositivas `class_II`, págs. 8–14. `Desarrollo de los leyes`, págs. 2–4. Fuente complementaria: Serway & Jewett, Física universitaria con física moderna, §40.2.*

Esta sección repite y consolida la derivación de la clase anterior con mayor detalle algebraico, siguiendo paso a paso el material de las diapositivas.

### 2.1. Ondas Estacionarias en la Cavidad Cúbica

Se modela la cavidad como un cubo de arista $L$. La condición de onda estacionaria para radiación paralela a un borde es que un número entero $m$ de semilongitudes de onda quepa en $L$:

$$\frac{L}{\lambda/2} = m \implies \boxed{\lambda = \frac{2L}{m}} \tag{1}$$

La frecuencia correspondiente, usando $c = \lambda\nu$:

$$\boxed{\nu = \frac{cm}{2L}} \tag{2}$$

En términos del número de onda $q = 2\pi/\lambda$:

$$q = \frac{2\pi\nu}{c} \tag{3}$$

Sustituyendo (2) en (3):

$$q = \frac{2\pi}{c} \cdot \frac{cm}{2L} = \frac{\pi m}{L} \implies q^2 = \pi^2\left(\frac{m}{L}\right)^2 \tag{4}$$

El número de onda también se puede escribir como $q = \omega/c$ donde $\omega = 2\pi\nu$ es la frecuencia angular.

### 2.2. Extensión a Tres Dimensiones

Si $m_x$, $m_y$, $m_z$ son los números enteros para las tres direcciones del cubo, la condición 3D para que exista una onda estacionaria es:

$$q^2 = \pi^2\left[\left(\frac{m_x}{L}\right)^2 + \left(\frac{m_y}{L}\right)^2 + \left(\frac{m_z}{L}\right)^2\right] \tag{5}$$

Combinando con $q = 2\pi\nu/c$:

$$\frac{4\pi^2\nu^2}{c^2} = \frac{\pi^2}{L^2}\left(m_x^2 + m_y^2 + m_z^2\right)$$

$$\boxed{m_x^2 + m_y^2 + m_z^2 = \frac{4L^2\nu^2}{c^2} \equiv R^2} \tag{6}$$

Cada triplete $(m_x, m_y, m_z)$ de enteros positivos representa un modo de oscilación permitido en la cavidad. La cantidad $R = 2L\nu/c$ juega el papel de radio en un espacio tridimensional de índices.

### 2.3. Conteo de Modos mediante Integración Esférica

El número de modos entre frecuencias $\nu$ y $\nu + d\nu$ equivale al número de ternas $(m_x, m_y, m_z)$ de enteros positivos cuyo radio $R$ cae entre $R$ y $R + dR$.

El volumen de la cáscara esférica completa de radio $R$ y espesor $dR$:

$$dA = 4\pi R^2\,dR \tag{7}$$

Solo el primer octante ($m_x, m_y, m_z > 0$) es físicamente relevante, lo que introduce el factor $1/8$:

$$dN = \frac{1}{8} \cdot 4\pi R^2\,dR \tag{8}$$

Expresando $R$ y $dR$ en función de $\nu$, desde la ecuación (6):

$$R = \sqrt{\frac{4L^2\nu^2}{c^2}} = \frac{2L\nu}{c}, \qquad dR = \frac{2L}{c}\,d\nu \tag{9}$$

Sustituyendo en (8):

$$dN = \frac{1}{8} \cdot 4\pi\left(\frac{2L\nu}{c}\right)^2 \cdot \frac{2L}{c}\,d\nu = \frac{1}{8} \cdot 4\pi \cdot \frac{4L^2\nu^2}{c^2} \cdot \frac{2L}{c}\,d\nu = \frac{4\pi\nu^2 L^3}{c^3}\,d\nu \tag{10}$$

*Nota sobre el factor $1/8$:* todo punto $(m_x, m_y, m_z)$ en la red de enteros es compartido por 8 celdas unitarias (los 8 octantes del espacio de índices). Al trabajar solo con el octante positivo, se cuenta exactamente cada modo una sola vez.

### 2.4. Teorema de Equipartición y Densidad de Energía

*Fuente: `Desarrollo de los leyes`, pág. 4; Diapositivas `class_II`, págs. 12–14.*

El teorema de equipartición establece que en equilibrio térmico a temperatura $T$, cada grado de libertad cuadrático tiene energía media $\tfrac{1}{2}k_BT$. Para un oscilador armónico (dos grados de libertad: cinético y potencial):

$$\bar{K} = \frac{1}{2}k_BT, \qquad \bar{U} = \frac{1}{2}k_BT, \qquad \bar{E} = k_BT \tag{11}$$

La energía media total de radiación por unidad de frecuencia:

$$\frac{dE}{d\nu} = \bar{E} \cdot \frac{dN}{d\nu} = k_BT \cdot \frac{4\pi\nu^2 L^3}{c^3} \tag{12}$$

La densidad de energía $u_\nu$ se obtiene dividiendo por el volumen $V = L^3$:

$$\frac{du_\nu}{d\nu} = \frac{1}{L^3}\frac{dE}{d\nu} = \frac{4\pi k_BT\nu^2}{c^3} \tag{13}$$

El campo electromagnético tiene **dos polarizaciones independientes** (campo eléctrico y campo magnético perpendiculares), lo que introduce un factor adicional de 2:

$$\boxed{\frac{du_\nu}{d\nu} = \frac{8\pi k_BT\nu^2}{c^3}} \tag{14 — Rayleigh-Jeans}$$

**Verificación en el límite de baja frecuencia:** cuando $h\nu \ll k_BT$, la ley de Planck (derivada a continuación) se reduce exactamente a Rayleigh-Jeans, lo cual es el principio de correspondencia.

**Catástrofe ultravioleta:** la integral $\int_0^\infty (8\pi k_BT\nu^2/c^3)\,d\nu$ diverge, mostrando que la física clásica es incapaz de describir el espectro completo del cuerpo negro.

---

## 3. Modelo de Planck y Cuantización de la Energía

*Fuente: Diapositivas `class_II`, págs. 15–21. `Desarrollo de los leyes`, págs. 5–6. Fuente primaria: Planck, M. (1901). Über das Gesetz der Energieverteilung im Normalspectrum. Annalen der Physik, 309(3), 553–563.*

### 3.1. El Modelo de Resonadores

Planck imagina la cavidad llena no solo de radiación, sino también de moléculas de un **gas ideal**: sin volumen, sin fuerzas intermoleculares, con colisiones perfectamente elásticas. Introduce **resonadores moleculares** como intermediarios entre la radiación y las moléculas del gas: los resonadores absorben energía de la radiación y la transfieren parcial o totalmente a las moléculas en los choques, estableciendo el equilibrio termodinámico.

La densidad de energía de la radiación se escribe como:

$$u_\nu = \frac{8\pi\nu^2}{c^3} E_\nu \tag{15}$$

donde $E_\nu$ es la energía media de un resonador que emite a la frecuencia $\nu$.

En la teoría clásica, por equipartición, $E_\nu = k_BT$ y se recupera la ley de Rayleigh-Jeans. Planck abandona esta hipótesis.

### 3.2. La Hipótesis Cuántica

**Postulado de Planck (1900):** los osciladores (resonadores) no pueden emitir ni absorber energía de forma continua. El intercambio ocurre únicamente en múltiplos enteros de una cantidad mínima $\varepsilon$:

$$\varepsilon = h\nu, \qquad E_n = n\varepsilon = nh\nu, \quad n = 0, 1, 2, 3, \ldots \tag{16}$$

La constante $h$ es la **constante de Planck**, cuyo valor ajustado a los datos espectrales es $h = 6.626 \times 10^{-34}$ J·s.

### 3.3. Derivación de la Energía Media del Resonador

*Fuente: `Desarrollo de los leyes`, págs. 5–6. Diapositivas `class_II`, págs. 17–20.*

Sean $N_0, N_1, N_2, \ldots, N_r$ el número de resonadores con energía $0, \varepsilon, 2\varepsilon, \ldots, r\varepsilon$. Según la distribución de Boltzmann:

$$N_r = N_0\,e^{-r\varepsilon/k_BT} \tag{17}$$

**Paso 1:** definimos la variable auxiliar $y = e^{-\varepsilon/k_BT}$, de modo que $N_r = N_0 y^r$.

**Paso 2:** número total de resonadores (suma de serie geométrica con $|y| < 1$):

$$N = \sum_{r=0}^{\infty} N_r = N_0\sum_{r=0}^{\infty} y^r = \frac{N_0}{1-y} \tag{18}$$

**Paso 3:** energía total del sistema:

$$E_{total} = \sum_{r=0}^{\infty} r\varepsilon N_r = \varepsilon N_0\sum_{r=0}^{\infty} r\,y^r = \varepsilon N_0 \cdot \frac{y}{(1-y)^2} \tag{19}$$

donde se usó la identidad $\sum_{r=0}^\infty r y^r = y/(1-y)^2$ para $|y|<1$.

**Paso 4:** energía media por resonador:

$$E_\nu = \frac{E_{total}}{N} = \frac{\varepsilon N_0\, y/(1-y)^2}{N_0/(1-y)} = \frac{\varepsilon y}{1-y} \tag{20}$$

Restituyendo $y = e^{-\varepsilon/k_BT}$:

$$E_\nu = \frac{\varepsilon\, e^{-\varepsilon/k_BT}}{1 - e^{-\varepsilon/k_BT}} \tag{21}$$

**Paso 5:** multiplicar numerador y denominador por $e^{\varepsilon/k_BT}$, usando que $e^{-x}\cdot e^{x} = 1$:

$$E_\nu = \frac{\varepsilon\, e^{-\varepsilon/k_BT} \cdot e^{\varepsilon/k_BT}}{\left(1 - e^{-\varepsilon/k_BT}\right) e^{\varepsilon/k_BT}} = \frac{\varepsilon}{e^{\varepsilon/k_BT} - 1} \tag{22}$$

Sustituyendo $\varepsilon = h\nu$:

$$\boxed{E_\nu = \frac{h\nu}{e^{h\nu/k_BT} - 1}} \tag{23}$$

*Interpretación física:* la energía media **no es** $k_BT$ (resultado clásico). A alta frecuencia, $h\nu \gg k_BT$ y $e^{h\nu/k_BT} \to \infty$, por lo que $E_\nu \to 0$: los modos de alta frecuencia no pueden ser excitados térmicamente porque el cuanto mínimo de energía $h\nu$ es mayor que la energía térmica disponible $k_BT$. Esto suprime la emisión en el UV y elimina la catástrofe.

### 3.4. La Ley de Planck

Sustituyendo la energía media cuántica (23) en la densidad de modos (15):

$$u_\nu\,d\nu = \frac{8\pi\nu^2}{c^3} \cdot \frac{h\nu}{e^{h\nu/k_BT}-1}\,d\nu$$

$$\boxed{u(\nu, T)\,d\nu = \frac{8\pi h\nu^3}{c^3} \cdot \frac{1}{e^{h\nu/k_BT} - 1}\,d\nu} \tag{24 — Ley de Planck en $\nu$}$$

Para expresar en términos de longitud de onda $\lambda$, se usa el cambio de variable $\nu = c/\lambda$, con $|d\nu| = (c/\lambda^2)\,d\lambda$:

$$\boxed{u(\lambda, T)\,d\lambda = \frac{8\pi hc}{\lambda^5} \cdot \frac{1}{e^{hc/\lambda k_BT} - 1}\,d\lambda} \tag{25 — Ley de Planck en $\lambda$}$$

### 3.5. Verificación de los Límites

**Límite de baja frecuencia** ($h\nu \ll k_BT$): expandiendo la exponencial $e^{h\nu/k_BT} \approx 1 + h\nu/k_BT$:

$$u(\nu,T) \approx \frac{8\pi h\nu^3}{c^3} \cdot \frac{k_BT}{h\nu} = \frac{8\pi\nu^2}{c^3}k_BT \quad \checkmark \text{ (Rayleigh-Jeans)}$$

**Límite de alta frecuencia** ($h\nu \gg k_BT$): $e^{h\nu/k_BT} \gg 1$, por lo que $1/(e^{h\nu/k_BT}-1) \approx e^{-h\nu/k_BT}$:

$$u(\nu,T) \approx \frac{8\pi h\nu^3}{c^3}\,e^{-h\nu/k_BT} \quad \checkmark \text{ (forma de Wien)}$$

*Interpretación física:* la ley de Planck es la única expresión que interpola correctamente entre los dos límites experimentalmente verificados, y su éxito completo en reproducir el espectro medido confirmó que la cuantización de la energía es una propiedad real de la naturaleza.

---

## 4. Determinación de la Constante de Planck desde Constantes Fundamentales

*Fuente: Diapositivas `class_II`, págs. 22–23. `Desarrollo de los leyes`, pág. 7. Fuente complementaria: NIST CODATA 2018.*

La constante de Planck puede calcularse sin ajustar datos espectrales, combinando dos resultados de Einstein:

**Equivalencia masa-energía** (Relatividad Especial, 1905):

$$E = mc^2 \tag{26}$$

**Energía del cuanto de luz** (Efecto Fotoeléctrico, 1905):

$$E = h\nu \tag{27}$$

Igualando para un fotón de frecuencia $\nu$ con longitud de onda $\lambda = c/\nu$:

$$mc^2 = h\nu = \frac{hc}{\lambda} \implies \boxed{h = mc\lambda} \tag{28}$$

Se elige la **longitud de onda Compton del electrón** $\lambda_C$: longitud de onda de un fotón cuya energía es igual a la energía de masa en reposo del electrón ($E = m_e c^2$):

$$\lambda_C = \frac{h}{m_e c} = 2.426 \times 10^{-12}\ \text{m} \tag{definición}$$

Usando esta relación en (28): $h = m_e c \lambda_C$. Numéricamente:

$$h = (9.109 \times 10^{-31}\ \text{kg}) \times (2.998 \times 10^8\ \text{m/s}) \times (2.426 \times 10^{-12}\ \text{m})$$

$$h = 66.251 \times 10^{-35}\ \text{kg m}^2\text{s}^{-1}$$

$$\boxed{h = 6.625 \times 10^{-34}\ \text{J·s}}$$

*Verificación:* el valor obtenido coincide con el valor aceptado por NIST CODATA 2018: $h = 6.62607015 \times 10^{-34}$ J·s (exacto por definición desde 2019).

---

## 5. El Efecto Fotoeléctrico

*Fuente: Diapositivas `class_II`, págs. 24–32. Fuente primaria: Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. Annalen der Physik, 322(6), 132–148. Fuente complementaria: Griffiths, Introduction to Quantum Mechanics, 3ª ed., §1.1.*

### 5.1. Fenomenología Experimental

Cuando luz de frecuencia suficientemente alta incide sobre una superficie metálica, se emiten electrones (fotoelectrones). Los resultados **contradicen sistemáticamente** la predicción clásica:

| Observación experimental | Predicción clásica (onda continua) | Discrepancia |
|---|---|---|
| $KE_{max}$ no depende de la intensidad de la luz | $KE$ debería crecer con la intensidad | Total |
| Existe una frecuencia umbral $\nu_0$ por debajo de la cual no hay emisión | No debería haber umbral | Total |
| La emisión es inmediata, independiente de la intensidad | A baja intensidad debería haber retardo | Total |
| $KE_{max}$ crece linealmente con $\nu$ | Sin predicción de esta dependencia | — |

### 5.2. Explicación de Einstein (1905)

Einstein propuso que la luz consiste en **paquetes de energía discretos** (cuantos de luz, posteriormente llamados fotones). Cada fotón tiene energía:

$$E_{foton} = h\nu \tag{29}$$

Un fotón transfiere toda su energía a un único electrón. Parte de esa energía se usa para vencer la **función de trabajo** $W$ (energía mínima para extraer el electrón de la superficie):

$$W = h\nu_0 \tag{30}$$

donde $\nu_0$ es la frecuencia umbral del material. La energía cinética máxima del fotoelectrón es:

$$\boxed{KE_{max} = h\nu - W = h(\nu - \nu_0)} \tag{31}$$

Para que haya emisión se requiere $\nu \geq \nu_0$, es decir, $\lambda \leq \lambda_0 = hc/W$.

La relación práctica para calcular $\lambda_0$, usando $hc = 1242$ eV·nm:

$$\lambda_0 = \frac{hc}{W} = \frac{1242\ \text{eV·nm}}{W[\text{eV}]} \tag{32}$$

*Interpretación física:* la función de trabajo es una propiedad característica del material metálico; varía entre ~2 eV (cesio) y ~5 eV (platino). La energía cinética del fotoelectrón se puede medir aplicando un **potencial de frenado** $V_s$ que detiene los electrones: $eV_s = KE_{max}$.

### 5.3. Problema Resuelto 1 — Plata

*Fuente: Diapositivas `class_II`, págs. 30–31.*

**Datos:** longitud de onda incidente $\lambda_{inc} = 300$ nm; función de trabajo de la plata $W_{Ag} = 4.73$ eV.

**Paso 1:** calcular la longitud de onda umbral:

$$\lambda_0 = \frac{1242\ \text{eV·nm}}{4.73\ \text{eV}} = 262.6\ \text{nm} \approx 262\ \text{nm}$$

**Paso 2:** comparar con la longitud de onda incidente:

$$\lambda_{inc} = 300\ \text{nm} > \lambda_0 = 262\ \text{nm}$$

**Conclusión:** la frecuencia de la radiación incidente es menor que la frecuencia umbral; los fotones no tienen energía suficiente para vencer la función de trabajo. **No se observan fotoelectrones.**

*Verificación numérica:* energía del fotón incidente $E = 1242/300 = 4.14$ eV $< W_{Ag} = 4.73$ eV. Coherente.

### 5.4. Problema Resuelto 2 — Calcio

*Fuente: Diapositivas `class_II`, pág. 32.*

**Datos:** longitud de onda incidente $\lambda_{inc} = 430$ nm (luz violeta); función de trabajo del calcio $W_{Ca} = 2.71$ eV.

**Paso 1:** energía del fotón incidente:

$$E_{foton} = \frac{hc}{\lambda} = \frac{1242\ \text{eV·nm}}{430\ \text{nm}} = 2.888\ \text{eV} \approx 2.89\ \text{eV}$$

**Paso 2:** energía cinética máxima de los fotoelectrones:

$$KE_{max} = E_{foton} - W_{Ca} = 2.89\ \text{eV} - 2.71\ \text{eV} = 0.18\ \text{eV}$$

**Paso 3:** potencial de frenado:

$$V_s = \frac{KE_{max}}{e} = 0.18\ \text{V}$$

**Conclusión:** sí se observan fotoelectrones. Son detenidos por un potencial de frenado de $0.18$ V.

---

## 6. Evolución de los Modelos Atómicos

*Fuente: Diapositivas `class_II`, págs. 33–46. Fuente complementaria: Serway & Jewett, Física universitaria, cap. 42; Weinberg, Foundations of Modern Physics, cap. 2.*

### 6.1. Modelos Pre-Cuánticos

*Fuente: Diapositivas `class_II`, págs. 33–35.*

Los primeros modelos atómicos (Dalton, Thomson) no incorporan la mecánica cuántica:

- **Dalton (1803):** átomo como esfera sólida e indivisible; explica la ley de proporciones definidas pero no la estructura interna.
- **Thomson (1897):** átomo como esfera continua de carga positiva con electrones incrustados ("pudín de pasas"); predice espectros continuos, en contradicción con los espectros de líneas observados.

### 6.2. Modelo de Rutherford (1911) — El Núcleo Atómico

*Fuente: Diapositivas `class_II`, págs. 36–38. Fuente primaria: Geiger, H. & Marsden, E. (1909). On a diffuse reflection of the α-particles. Proceedings of the Royal Society A, 82(557), 495–500.*

**Experimento:** Ernest Rutherford y su equipo (Geiger y Marsden) dispararon partículas $\alpha$ (carga $+2e$, masa $\sim 7300\,m_e$) contra una lámina delgada de oro (~$10^{-7}$ m de espesor). Si el modelo de Thomson fuera correcto, la carga positiva difusa no debería desviar significativamente las partículas $\alpha$.

**Resultados y conclusiones:**

| Resultado observado | Fracción | Conclusión |
|---|---|---|
| Partículas pasan sin desviar | Mayoría | El átomo es casi todo espacio vacío |
| Desviaciones pequeñas ($\theta \lesssim 1°$) | Frecuente | Existe una distribución de carga que produce deflexiones suaves |
| Retrodispersión ($\theta > 90°$) | $\sim 1$ en $10^4$ | La masa y carga positiva están concentradas en un núcleo muy pequeño |

**Modelo resultante:** núcleo denso de tamaño $\sim 10^{-15}$ m = 1 fm, con electrones orbitando en un radio $\sim 10^{-10}$ m = 1 Å.

**Limitación crítica:** según el electromagnetismo clásico, un electrón en órbita circular es una carga acelerada centripetamente, y **toda carga acelerada emite radiación** (fórmula de Larmor). Perdería energía de forma continua y colapsaría en el núcleo en un tiempo estimado de $\sim 10^{-8}$ s. El modelo no explica la estabilidad de los átomos ni los espectros de líneas discretos.

### 6.3. Modelo de Bohr (1913)

*Fuente: Diapositivas `class_II`, págs. 39–42. Fuente primaria: Bohr, N. (1913). On the constitution of atoms and molecules. Philosophical Magazine, 26(151), 1–25. Fuente complementaria: Griffiths, Introduction to Quantum Mechanics, §2.4.*

Niels Bohr introduce la mecánica cuántica en el modelo atómico mediante tres postulados:

**Postulado 1 — Estados estacionarios:** los electrones se mueven en órbitas circulares específicas sin emitir radiación. Estas órbitas corresponden a energías discretas (niveles de energía).

**Postulado 2 — Cuantización del momento angular:** el momento angular del electrón está restringido a:

$$L = n\hbar = n\frac{h}{2\pi}, \qquad n = 1, 2, 3, \ldots \tag{33}$$

donde $n$ es el número cuántico principal.

**Postulado 3 — Regla de transición:** cuando un electrón salta entre dos niveles, emite o absorbe un fotón cuya energía es exactamente la diferencia entre los niveles:

$$\Delta E = E_{final} - E_{inicial} = h\nu \tag{34}$$

Para el átomo de hidrógeno, combinando la condición (33) con la dinámica circular ($F_{Coulomb} = F_{centrípeta}$), los niveles de energía son:

$$E_n = -\frac{m_e e^4}{8\varepsilon_0^2 h^2} \cdot \frac{1}{n^2} = -\frac{13.6\ \text{eV}}{n^2}, \qquad n = 1, 2, 3, \ldots \tag{35}$$

**Éxitos del modelo:**
- Explica la estabilidad atómica: los electrones en estados estacionarios no emiten radiación.
- Predice con precisión las series espectrales del hidrógeno (Lyman, Balmer, Paschen).

**Limitaciones:**
- No funciona para átomos con más de un electrón.
- No explica la intensidad relativa de las líneas espectrales.
- No incorpora la dualidad onda-corpúsculo del electrón.
- No puede explicar el efecto Zeeman (división de líneas en campo magnético) ni la estructura fina.

### 6.4. Modelo de Heisenberg-Schrödinger (1925–1926) — Mecánica Cuántica Completa

*Fuente: Diapositivas `class_II`, págs. 43–46. Fuente complementaria: Griffiths, Introduction to Quantum Mechanics, 3ª ed., cap. 1 y 2.*

#### 6.4.1. Principio de Incertidumbre de Heisenberg (1927)

*Fuente primaria: Heisenberg, W. (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik. Zeitschrift für Physik, 43, 172–198.*

Es imposible conocer simultáneamente la posición exacta y el momento exacto de una partícula subatómica:

$$\Delta x \cdot \Delta p_x \geq \frac{\hbar}{2}, \qquad \hbar = \frac{h}{2\pi} = 1.055 \times 10^{-34}\ \text{J·s} \tag{36}$$

**Argumento físico:** para localizar un electrón se necesita iluminarlo con un fotón. Un fotón de longitud de onda $\lambda$ transfiere un momento $\sim h/\lambda$ al electrón al colisionarlo. Para mejorar la resolución espacial ($\Delta x \sim \lambda$) se necesita $\lambda$ más pequeño, lo que implica mayor transferencia de momento ($\Delta p \sim h/\lambda$). Mejorar uno empeora el otro inevitablemente.

*Consecuencia:* el electrón no tiene una trayectoria definida. El modelo de Bohr (órbitas circulares precisas) es incompatible con el principio de incertidumbre.

#### 6.4.2. Mecánica Ondulatoria de Schrödinger (1926)

*Fuente primaria: Schrödinger, E. (1926). Quantisierung als Eigenwertproblem. Annalen der Physik, 384(4), 361–376.*

Erwin Schrödinger formula la ecuación de movimiento para la **función de onda** $\Psi(\mathbf{r}, t)$:

$$i\hbar\frac{\partial\Psi}{\partial t} = \hat{H}\Psi = \left(-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})\right)\Psi \tag{37}$$

Para estados estacionarios ($\Psi(\mathbf{r},t) = \psi(\mathbf{r})\,e^{-iEt/\hbar}$), la ecuación se reduce a:

$$\hat{H}\psi = E\psi \tag{38}$$

La **densidad de probabilidad** de encontrar al electrón en el volumen $d^3r$ alrededor de $\mathbf{r}$ es:

$$P(\mathbf{r}) = |\Psi(\mathbf{r},t)|^2 = |\psi(\mathbf{r})|^2 \tag{39}$$

Las soluciones para el átomo de hidrógeno son los **orbitales atómicos**: nubes de densidad de probabilidad tridimensionales caracterizadas por tres números cuánticos ($n$, $l$, $m_l$) y el tipo orbital ($s$, $p$, $d$, $f$). Por convención, el orbital se define como la región donde se concentra el 90% de la densidad de probabilidad.

**Complementariedad de los dos modelos:**

| Contribución | Física |
|---|---|
| Ecuación de Schrödinger | Define la forma espacial y los niveles de energía de los orbitales |
| Principio de incertidumbre de Heisenberg | Justifica por qué solo se puede hablar en términos de probabilidades, no de trayectorias |

*Interpretación física:* el electrón no está en ningún punto particular hasta que se mide; está distribuido en el espacio según $|\psi|^2$. Esta interpretación probabilística (Born, 1926) es la base de toda la mecánica cuántica moderna.

---

## 7. Tabla Resumen de Ecuaciones Clave de la Clase

| Expresión | Ecuación | Condición de validez |
|---|---|---|
| Rayleigh-Jeans | $u(\nu,T) = \dfrac{8\pi\nu^2}{c^3}k_BT$ | $h\nu \ll k_BT$ |
| Planck (frecuencia) | $u(\nu,T) = \dfrac{8\pi h\nu^3}{c^3}\cdot\dfrac{1}{e^{h\nu/k_BT}-1}$ | Universal |
| Planck (longitud de onda) | $u(\lambda,T) = \dfrac{8\pi hc}{\lambda^5}\cdot\dfrac{1}{e^{hc/\lambda k_BT}-1}$ | Universal |
| Constante de Planck | $h = m_e c\lambda_C = 6.625\times10^{-34}$ J·s | Definición fundamental |
| Energía del fotón | $E = h\nu = hc/\lambda$ | Fotón relativista |
| Efecto fotoeléctrico | $KE_{max} = h\nu - W = h(\nu-\nu_0)$ | $\nu \geq \nu_0$ |
| Longitud de onda umbral | $\lambda_0 = hc/W = 1242\text{ eV·nm}/W[\text{eV}]$ | Por material |
| Bohr: niveles H | $E_n = -13.6\text{ eV}/n^2$ | Átomo hidrogenoide |
| Incertidumbre | $\Delta x\cdot\Delta p \geq \hbar/2$ | Universal |

---

## 8. Conclusiones de la Clase

1. La derivación completa de Rayleigh-Jeans muestra que el conteo de modos en el primer octante da $dN = 4\pi\nu^2 L^3/c^3\,d\nu$; al combinar con la equipartición ($\bar{E} = k_BT$) y las dos polarizaciones, se obtiene $u = 8\pi\nu^2 k_BT/c^3$. La divergencia de esta expresión al integrar sobre todas las frecuencias es una consecuencia inevitable de la teoría clásica.

2. Planck resuelve la catástrofe postulando que los resonadores solo intercambian energía en múltiplos de $h\nu$. Esto modifica la energía media de $k_BT$ a $h\nu/(e^{h\nu/k_BT}-1)$, expresión que suprime exponencialmente la emisión a alta frecuencia sin afectar el límite de baja frecuencia.

3. En ambos límites, la ley de Planck reproduce las leyes anteriores: $h\nu \ll k_BT \Rightarrow$ Rayleigh-Jeans; $h\nu \gg k_BT \Rightarrow$ Wien. Esto satisface el principio de correspondencia de Bohr.

4. La constante de Planck se puede derivar analíticamente como $h = m_e c\lambda_C = 6.625 \times 10^{-34}$ J·s, coherente con el valor CODATA.

5. El efecto fotoeléctrico (Einstein, 1905) confirma la naturaleza corpuscular de la luz: $KE_{max} = h(\nu - \nu_0)$, independiente de la intensidad. Para la plata ($W = 4.73$ eV), la longitud de onda de corte es $\lambda_0 = 262$ nm; la luz de 300 nm no produce fotoemisión. Para el calcio ($W = 2.71$ eV, $\lambda = 430$ nm): $KE_{max} = 0.18$ eV, potencial de frenado $V_s = 0.18$ V.

6. La secuencia de modelos atómicos (Dalton → Thomson → Rutherford → Bohr → Schrödinger-Heisenberg) muestra una progresión guiada por las evidencias experimentales. El modelo de Schrödinger-Heisenberg reemplaza trayectorias deterministas por densidades de probabilidad $|\Psi|^2$, y el principio de incertidumbre $\Delta x \Delta p \geq \hbar/2$ establece el límite fundamental de la descripción clásica.

---

## Referencias Bibliográficas

### 1. Artículos Científicos Originales (Fuentes Primarias)

- Planck, M. (1901). Über das Gesetz der Energieverteilung im Normalspectrum. *Annalen der Physik*, 309(3), 553–563.
- Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. *Annalen der Physik*, 322(6), 132–148.
- Geiger, H. & Marsden, E. (1909). On a diffuse reflection of the α-particles. *Proceedings of the Royal Society A*, 82(557), 495–500.
- Bohr, N. (1913). On the constitution of atoms and molecules. *Philosophical Magazine*, 26(151), 1–25.
- Heisenberg, W. (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik. *Zeitschrift für Physik*, 43, 172–198.
- Schrödinger, E. (1926). Quantisierung als Eigenwertproblem. *Annalen der Physik*, 384(4), 361–376.

### 2. Textos del Curso

- Manidurai, P. (2026). *Diapositivas `class_II_Diplomado en Física Moderna – Teoría Cuántica Temprana`* (47 págs.). Diplomado en Física Moderna.
- Manidurai, P. (2026). *Desarrollo de los leyes-Cuerpo negro.pdf* (7 págs.). Material de apoyo, Diplomado en Física Moderna.
- Manidurai, P. (2026). *Transcripción de video, Clase 17 jul 2026*. Diplomado en Física Moderna.

### 3. Textos Universitarios Estándar

- Serway, R. A. & Jewett, J. W. (2005). *Física universitaria con física moderna*, vol. 2. Thomson. ISBN: 970-686-492-X.
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. ISBN: 978-1-108-84176-4.
- Griffiths, D. J. (2018). *Introduction to Quantum Mechanics*, 3ª ed. Cambridge University Press.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.

### 4. Recursos de Libre Acceso Verificados

- NIST CODATA 2018: constante de Planck $h = 6.62607015 \times 10^{-34}$ J·s (exacto). [physics.nist.gov/cgi-bin/cuu/Value?h](https://physics.nist.gov/cgi-bin/cuu/Value?h)
- Feynman, R. P., Leighton, R. B. & Sands, M. (2013). *The Feynman Lectures on Physics*, vol. 3, cap. 1–2. Caltech. [feynmanlectures.caltech.edu](https://www.feynmanlectures.caltech.edu)
- PhET Interactive Simulations — Efecto Fotoeléctrico. Universidad de Colorado Boulder. [phet.colorado.edu/es/simulations/photoelectric](https://phet.colorado.edu/es/simulations/photoelectric)

### 5. Historia y Filosofía de la Física

- Kuhn, T. S. (1978). *Black-Body Theory and the Quantum Discontinuity, 1894–1912*. Oxford University Press.
- Jammer, M. (1966). *The Conceptual Development of Quantum Mechanics*. McGraw-Hill.
