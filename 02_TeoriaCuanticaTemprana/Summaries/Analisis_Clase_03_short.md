# Análisis Clase 03 — Derivación Completa del Cuerpo Negro, Efecto Fotoeléctrico y Modelos Atómicos

**Módulo:** Teoría Cuántica Temprana | **Docente:** Paulraj Manidurai | **Fecha:** 17 jul 2026  
**Fuentes:** Diapositivas `class_II` (47 págs.), `Desarrollo de los leyes-Cuerpo negro.pdf` (7 págs.), transcripción de clase

---

## 1. Revisión — El Problema del Cuerpo Negro

Un **cuerpo negro ideal** absorbe el 100% de la radiación incidente y la re-emite exclusivamente en función de su temperatura $T$. Su realización experimental es una cavidad cerrada con un pequeño orificio.

Según la teoría clásica, un cuerpo negro debería emitir una cantidad **infinita** de energía al integrar sobre todas las frecuencias, lo que contradice toda observación. Esta crisis constituye el punto de partida de la física cuántica.

### 1.1. Fórmula de Wien

$$u(\nu, T) = A \nu^5 e^{-\beta\nu/T}$$

Válida para frecuencias altas; falla en el infrarrojo. Los parámetros $A$ y $\beta$ son constantes empíricas.

### 1.2. Ley de Rayleigh-Jeans

$$u(\nu, T) = \frac{8\pi\nu^2}{c^3} k_B T$$

Válida para frecuencias bajas; diverge en el ultravioleta (**Catástrofe Ultravioleta**, término de Paul Ehrenfest, 1911).

---

## 2. Derivación Completa de la Ley de Rayleigh-Jeans

### 2.1. Ondas Estacionarias en la Cavidad Cúbica

Se modela la cavidad como un cubo de arista $L$. La condición de onda estacionaria para radiación paralela a un borde:

$$\frac{L}{\lambda/2} = m \implies \lambda = \frac{2L}{m} \implies \nu = \frac{cm}{2L}$$

En número de onda $q = 2\pi/\lambda = 2\pi\nu/c$, la condición 3D es:

$$q^2 = \pi^2\left[\left(\frac{m_x}{L}\right)^2 + \left(\frac{m_y}{L}\right)^2 + \left(\frac{m_z}{L}\right)^2\right]$$

Sustituyendo $q = 2\pi\nu/c$:

$$m_x^2 + m_y^2 + m_z^2 = \frac{4L^2\nu^2}{c^2} \equiv R^2 \tag{2.10}$$

### 2.2. Conteo de Modos (Integración en Cáscara Esférica)

El número de ternas $(m_x, m_y, m_z)$ de enteros positivos entre radios $R$ y $R + dR$:

$$dA = 4\pi R^2\,dR \qquad \text{(volumen de la cáscara esférica)}$$

Expresando $R$ y $dR$ en función de $\nu$:

$$R = \frac{2L\nu}{c}, \qquad dR = \frac{2L\,d\nu}{c}$$

$$dA = 4\pi\left(\frac{2L\nu}{c}\right)^2 \cdot \frac{2L}{c}\,d\nu = \frac{32\pi L^3 \nu^2}{c^3}\,d\nu$$

Solo se considera el primer octante (enteros positivos $\Rightarrow$ factor $1/8$), y entre dos extremos existen dos ondas estacionarias por polarización del campo electromagnético (factor $\times 2$ posterior):

$$dN = \frac{1}{8}\cdot \frac{32\pi L^3\nu^2}{c^3}\,d\nu = \frac{4\pi\nu^2 L^3}{c^3}\,d\nu \tag{2.18}$$

### 2.3. Teorema de Equipartición

Para un oscilador armónico simple en equilibrio térmico, la energía media se distribuye igualmente entre energía cinética y potencial:

$$K = \frac{1}{2}k_BT, \qquad U = \frac{1}{2}k_BT, \qquad \bar{E} = K + U = k_BT$$

La energía media de radiación por unidad de frecuencia:

$$\frac{dE}{d\nu} = k_BT \cdot \frac{dN}{d\nu} = \frac{4\pi k_BT L^3}{c^3}\nu^2$$

Densidad de energía ($u_\nu = dE/d\nu / L^3$), incluyendo las **dos polarizaciones** del campo EM:

$$\boxed{u(\nu, T) = \frac{8\pi\nu^2}{c^3} k_B T} \tag{Rayleigh-Jeans}$$

**Por qué falla:** la energía total integrada $\int_0^\infty u(\nu,T)\,d\nu \propto \int_0^\infty \nu^2\,d\nu \to \infty$. La física clásica no tiene mecanismo que frene la emisión a alta frecuencia.

---

## 3. Derivación de la Ley de Planck

### 3.1. El Modelo de Planck

Planck imagina la cavidad llena de **resonadores moleculares** (gas ideal): moléculas sin volumen, sin fuerzas intermoleculares, con colisiones elásticas perfectas. Los resonadores absorben energía de la radiación y la redistribuyen al gas.

**Hipótesis cuántica (1900):** los resonadores no pueden emitir ni absorber energía de forma continua. El intercambio ocurre solo en múltiplos enteros del cuanto:

$$\varepsilon = h\nu, \qquad E_n = n\varepsilon = nh\nu \quad (n = 0, 1, 2, 3, \ldots)$$

### 3.2. Derivación de la Energía Media del Resonador

Sean $N_0, N_1, N_2, \ldots, N_r$ los números de resonadores con energía $0, \varepsilon, 2\varepsilon, \ldots, r\varepsilon$. Según la distribución de Boltzmann:

$$N_r = N_0 e^{-r\varepsilon/k_BT} \tag{3.6}$$

Definimos $y = e^{-\varepsilon/k_BT}$. Entonces:

$$N = N_0 + N_0 y + N_0 y^2 + \cdots = \frac{N_0}{1-y} \tag{3.9}$$

$$E = \varepsilon N_0 (y + 2y^2 + 3y^3 + \cdots) = \varepsilon N_0 \frac{y}{(1-y)^2} \tag{3.11}$$

La energía media del resonador:

$$\bar{E}_\nu = \frac{E}{N} = \frac{y\varepsilon}{1-y} = \frac{\varepsilon e^{-\varepsilon/k_BT}}{1 - e^{-\varepsilon/k_BT}} \tag{3.13}$$

Multiplicando numerador y denominador por $e^{\varepsilon/k_BT}$ y usando $e^{-x}\cdot e^x = 1$:

$$\bar{E}_\nu = \frac{\varepsilon}{e^{\varepsilon/k_BT} - 1} = \boxed{\frac{h\nu}{e^{h\nu/k_BT} - 1}} \tag{3.17}$$

Esta energía media **no es** $k_BT$ (resultado clásico). A alta frecuencia ($h\nu \gg k_BT$), el denominador crece exponencialmente y $\bar{E}_\nu \to 0$, suprimiendo la emisión UV.

### 3.3. Densidad de Energía de Planck

Sustituyendo $\bar{E}_\nu$ en la densidad de modos:

$$\boxed{u(\nu, T)\,d\nu = \frac{8\pi h\nu^3}{c^3} \cdot \frac{1}{e^{h\nu/k_BT} - 1}\,d\nu} \tag{Ley de Planck en $\nu$}$$

En términos de longitud de onda (usando $|d\nu| = c/\lambda^2\,d\lambda$):

$$\boxed{u(\lambda, T)\,d\lambda = \frac{8\pi hc}{\lambda^5} \cdot \frac{1}{e^{hc/\lambda k_BT} - 1}\,d\lambda} \tag{Ley de Planck en $\lambda$}$$

---

## 4. Derivación de $h$ desde Constantes Fundamentales

Igualando la equivalencia masa-energía de Einstein con la energía del fotón:

$$E = mc^2 = h\nu \implies mc^2 = \frac{hc}{\lambda} \implies h = mc\lambda \tag{4.5}$$

Con la **longitud de onda Compton** del electrón $\lambda_C = 2.426 \times 10^{-12}$ m (longitud de onda de un fotón cuya energía es igual a la energía de masa en reposo del electrón):

$$h = (9.109 \times 10^{-31}\ \text{kg}) \times (2.998 \times 10^8\ \text{m/s}) \times (2.426 \times 10^{-12}\ \text{m})$$

$$\boxed{h = 6.625 \times 10^{-34}\ \text{J·s}}$$

---

## 5. Efecto Fotoeléctrico

### 5.1. Fenomenología Experimental

Cuando luz de frecuencia suficientemente alta incide sobre una superficie metálica, se emiten electrones (fotoelectrones). Los resultados **contradicen** la predicción clásica:

| Observación | Predicción clásica | Resultado experimental |
|---|---|---|
| Depende de la intensidad | La energía cinética aumenta con intensidad | La KE máxima no depende de la intensidad |
| Umbral de frecuencia | No debería existir | Existe $\nu_0$ umbral |
| Tiempo de respuesta | Retardado a baja intensidad | Inmediato |

**Explicación de Einstein (1905):** la luz consiste en cuantos de energía (fotones) de energía $E = h\nu$. Un fotón transfiere toda su energía a un electrón de golpe.

### 5.2. Ecuación de Einstein

La energía cinética máxima de los fotoelectrones:

$$KE_{max} = h\nu - W = h(\nu - \nu_0)$$

donde $W = h\nu_0$ es la **función de trabajo** (energía mínima para extraer un electrón de la superficie). Solo hay emisión si $\nu \geq \nu_0$.

La longitud de onda umbral: $\lambda_0 = hc/W = 1242\ \text{eV·nm}/W[\text{eV}]$.

### 5.3. Problema Resuelto 1 — Plata

**Datos:** $\lambda_{inc} = 300$ nm, $W_{Ag} = 4.73$ eV.

$$\lambda_0 = \frac{hc}{W} = \frac{1242\ \text{eV·nm}}{4.73\ \text{eV}} = 262\ \text{nm}$$

Como $\lambda_{inc} = 300\ \text{nm} > \lambda_0 = 262\ \text{nm}$, la energía del fotón es insuficiente.  
**Conclusión: no se observan fotoelectrones.**

### 5.4. Problema Resuelto 2 — Calcio

**Datos:** $\lambda_{inc} = 430$ nm (luz violeta), $W_{Ca} = 2.71$ eV.

$$E_{foton} = \frac{hc}{\lambda} = \frac{1242}{430} = 2.89\ \text{eV}$$

$$KE_{max} = E_{foton} - W = 2.89 - 2.71 = 0.18\ \text{eV}$$

**El potencial de frenado** (tensión que detiene los fotoelectrones): $V_s = 0.18$ V.

---

## 6. Evolución de los Modelos Atómicos

### 6.1. Modelo de Thomson (1897) — "Pudín de Pasas"

Átomo como esfera continua de carga positiva con electrones incrustados. Superado por el experimento de Rutherford.

### 6.2. Modelo de Rutherford (1911) — Modelo Planetario

**Experimento con lámina de oro:** partículas $\alpha$ disparadas contra una lámina delgada de oro.

| Resultado observado | Conclusión |
|---|---|
| Mayoría pasa sin desviar | El átomo es casi todo espacio vacío |
| Algunos se desvían ligeramente | Existe una carga positiva concentrada al centro |
| Algunos rebotan hacia atrás | La masa y carga positiva están en un núcleo muy pequeño y denso |

**Limitación crítica:** según el electromagnetismo clásico (Maxwell), una carga acelerada emite radiación. Un electrón en órbita circular perdería energía continuamente y colapsaría en el núcleo en $\sim 10^{-8}$ s. El modelo no explica la estabilidad atómica.

### 6.3. Modelo de Bohr (1913)

Primer modelo en incorporar la mecánica cuántica. Sus postulados:

1. **Estados estacionarios:** los electrones orbitan en capas circulares discretas sin emitir radiación.
2. **Momento angular cuantizado:**
$$L = n\hbar = n\frac{h}{2\pi}, \qquad n = 1, 2, 3, \ldots$$
3. **Transiciones radiativas:** al saltar entre niveles, el electrón emite o absorbe un fotón:
$$\Delta E = E_f - E_i = h\nu$$

**Éxitos:** explicó la estabilidad atómica y predijo con precisión el espectro de emisión del hidrógeno.

**Limitaciones:**
- No funciona para átomos multielectrónicos.
- No incorpora la dualidad onda-corpúsculo del electrón.
- No puede explicar el efecto Zeeman ni la estructura fina espectral.

### 6.4. Modelo de Schrödinger-Heisenberg (1925–1926) — Mecánica Cuántica Completa

**Principio de Incertidumbre de Heisenberg:** es imposible conocer simultáneamente la posición y el momento exactos de una partícula:

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

Para observar un electrón, la luz debe interactuar con él; la perturbación inevitable destruye la posibilidad de conocer ambas cantidades simultáneamente.

**Ecuación de onda de Schrödinger:** trata al electrón como una "onda de materia tridimensional". Su solución es la **función de onda** $\Psi(\mathbf{r},t)$:

$$\hat{H}\Psi = E\Psi$$

La densidad de probabilidad $|\Psi|^2$ define los **orbitales atómicos**: regiones tridimensionales donde hay un 90% de probabilidad de encontrar al electrón (orbitales $s$, $p$, $d$, $f$).

**Complementariedad entre ambos modelos:**

1. La ecuación de onda de Schrödinger da la forma espacial y los niveles de energía de los orbitales.
2. El principio de incertidumbre de Heisenberg justifica por qué solo podemos hablar de probabilidades, no de trayectorias definidas.

---

## 7. Resumen de Ecuaciones Clave

| Expresión | Fórmula |
|---|---|
| Ley de Wien | $u(\nu,T) = A\nu^5 e^{-\beta\nu/T}$ |
| Rayleigh-Jeans | $u(\nu,T) = \dfrac{8\pi\nu^2}{c^3}k_BT$ |
| Planck (frecuencia) | $u(\nu,T) = \dfrac{8\pi h\nu^3}{c^3}\cdot\dfrac{1}{e^{h\nu/k_BT}-1}$ |
| Planck (longitud de onda) | $u(\lambda,T) = \dfrac{8\pi hc}{\lambda^5}\cdot\dfrac{1}{e^{hc/\lambda k_BT}-1}$ |
| Constante de Planck | $h = m_e c\lambda_C = 6.625\times10^{-34}$ J·s |
| Energía del fotón | $E = h\nu = hc/\lambda$ |
| Efecto fotoeléctrico | $KE_{max} = h\nu - W = h(\nu-\nu_0)$ |
| Función de trabajo | $W = h\nu_0 = hc/\lambda_0$ |
| Incertidumbre | $\Delta x\cdot\Delta p \geq \hbar/2$ |

---

## 8. Conclusiones

1. La catástrofe ultravioleta es consecuencia directa de aplicar el teorema de equipartición ($\bar{E} = k_BT$) a los modos de la cavidad, cuya densidad crece como $\nu^2$.
2. Planck resuelve el problema cuantizando la energía de los osciladores ($E_n = nh\nu$); la energía media cuántica $\bar{E}_\nu = h\nu/(e^{h\nu/k_BT}-1)$ suprime exponencialmente la emisión a alta frecuencia.
3. La constante de Planck se obtiene analíticamente como $h = m_e c\lambda_C = 6.625 \times 10^{-34}$ J·s, coherente con el valor histórico ajustado por Planck a los datos espectrales.
4. El efecto fotoeléctrico (Einstein, 1905) confirma la naturaleza corpuscular de la luz: la energía máxima de los fotoelectrones es $KE_{max} = h(\nu - \nu_0)$, independiente de la intensidad. Para la plata ($W = 4.73$ eV, $\lambda_0 = 262$ nm), la luz de 300 nm no produce emisión.
5. El modelo de Bohr (1913) introduce la cuantización del momento angular ($L = n\hbar$), explicando los espectros discretos del hidrógeno; el modelo cuántico de Schrödinger-Heisenberg (1925–26) lo generaliza mediante la función de onda $\Psi$ y el principio de incertidumbre.
