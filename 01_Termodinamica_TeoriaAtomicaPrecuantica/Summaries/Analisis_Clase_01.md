# Análisis de Clase 01: Del Vacío de Torricelli al Modelo Cinético Molecular de los Gases Ideales

**Diplomado en Física Moderna — Módulo 01: Termodinámica y Teoría Atómica Precuántica**  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Fecha de la sesión:** 08 de mayo de 2026  
**Duración:** 3 horas 02 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`Clase_01/grabacion/Clase 1.docx`).
- Diapositivas oficiales del módulo (`Clase_01/Clase1 Final con Links Claros.pdf` y `Clase1.pdf`).
- Texto guía central: Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Cap. 1: §1.1 *Gas Properties* (pp. 2–6) y §1.2 *Chemistry* (pp. 6–10).
- Lecturas complementarias de cátedra: R. Feynman, *The Feynman Lectures on Physics*, Vol. I, Cap. 1: "Átomos en movimiento" (`Estructura de la materia Feynman V1.pdf`); Guía PHYWE LEP 3.2.03 (`Guia Experimento Original.pdf`).
- Fuentes primarias históricas: E. Torricelli (1643), R. Boyle (1662), J. Charles (1787), J. L. Gay-Lussac (1802, 1808), A. Avogadro (1811), D. Bernoulli (*Hydrodynamica*, 1738), R. Clausius (1857).

---

## 1. Contexto Histórico y Ruptura Epistemológica: La Superación del *Horror Vacui*

*Fuente: Weinberg, Foundations of Modern Physics, §1.1; Diapositivas Clase 1, diaps. 3–12; Transcripción 00:03–00:45.*

Durante casi dos milenios, el pensamiento físico occidental estuvo dominado por el axioma aristotélico del *horror vacui*: la naturaleza aborrece el vacío. Bajo este marco escolástico, se postulaba que el espacio vacío era una imposibilidad metafísica y física, argumentándose que cualquier intento de separar dos cuerpos generaría una resistencia infinita de la naturaleza para evitar la discontinuidad de la materia.

La ruptura con este dogma no provino de una especulación teórica abstracta, sino de un problema ingenieril concreto en la Toscana del siglo XVII: las bombas aspirantes de agua utilizadas en la minería y en las fuentes de Florencia eran incapaces de elevar agua por encima de aproximadamente 10.33 metros (34 pies).

```
                        RUPTURA DEL DOGMA DEL HORROR VACUI (1643)
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         ▼                                                                   ▼
   Dogma Aristotélico Scholástico                               Evangelista Torricelli (1643)
   - "La naturaleza aborrece el vacío"                          - "Vivimos sumergidos en el fondo
   - El agua sube por succión pura                                de un océano de aire elemental"
   - Vacío como imposibilidad absoluta                          - La columna de Hg no es atraída:
                                                                  es sostenida por la presión externa
                                           │
                                           ▼
                            Experimento del Barómetro de Mercurio
                            - Tubo invertido de L = 1 m lleno de Hg
                            - Altura de equilibrio h ≈ 760 mm Hg
                            - Espacio superior: Vacío Torricelliano
```

En 1643, Evangelista Torricelli, discípulo de Galileo Galilei, comprendió que el límite de 10.33 metros no representaba la fuerza de atracción del vacío, sino el peso finito de la columna de aire atmosférico que presiona sobre la superficie libre del líquido. Para comprobarlo experimentalmente sin necesidad de columnas de agua de más de 10 metros, Torricelli sustituyó el agua por mercurio líquido, cuya densidad es $
ho_{\text{Hg}} \approx 13.6\text{ g/cm}^3 \approx 13600\text{ kg/m}^3$.

Llenando un tubo de vidrio cerrado por un extremo con mercurio e invirtiéndolo sobre una cubeta con el mismo metal, la columna descendió hasta estabilizarse a una altura vertical $h \approx 760\text{ mm} = 0.76\text{ m}$ sobre el nivel de la cubeta, dejando en la parte superior un espacio desprovisto de materia: el **vacío torricelliano**.

### 1.1. Determinación de la Presión Atmosférica
Aplicando el principio de hidrostática de Simon Stevin y Blaise Pascal, la presión en el fondo de la columna de mercurio debe equilibrar exactamente la presión ejercida por la atmósfera terrestre $P_0$:

$$P_0 = 
ho_{\text{Hg}}\, g\, h$$

Sustituyendo los valores del Sistema Internacional:
- $
ho_{\text{Hg}} = 13595\text{ kg/m}^3$ (a $0\text{ °C}$),
- $g = 9.80665\text{ m/s}^2$,
- $h = 0.760\text{ m}$.

$$P_0 = (13595\text{ kg/m}^3)(9.80665\text{ m/s}^2)(0.760\text{ m}) = 101325\text{ Pa} = 1.01325\text{ bar} = 1\text{ atm}$$

Posteriormente, en 1648, Blaise Pascal instruyó a su cuñado Florin Périer para realizar el célebre experimento del Puy de Dôme, demostrando que al ascender una montaña, la altura de la columna de mercurio disminuye sistemáticamente. Este hecho probó de forma incontrovertible que el aire posee masa, ejerce un peso hidrostático decreciente con la altitud y que el espacio atmosférico está acotado por un vacío exterior.

---

## 2. Las Leyes Empíricas Macroscópicas de los Gases

*Fuente: Weinberg, §1.1; Diapositivas Clase 1, diaps. 13–24; Transcripción 00:45–01:30.*

A partir del barómetro de Torricelli y de las bombas de vacío perfeccionadas por Otto von Guericke y Robert Boyle, la física experimental del siglo XVII y XVIII inició la medición sistemática del comportamiento mecánico y térmico de los gases en función de cuatro variables de estado macroscópicas: presión ($P$), volumen ($V$), temperatura ($T$) y cantidad de sustancia ($n$ o $N$).

```
                      LEYES EXPERIMENTALES DE LOS GASES (1662 - 1811)
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼                                 ▼                                 ▼
   Ley de Boyle (1662)            Ley de Charles (1787)            Ley de Avogadro (1811)
   Isoterma: T = cte              Isobara: P = cte                 V ∝ n  (a P, T ctes)
   P · V = constante              V(T) = V₀(1 + β T_C)             Volúmenes iguales contienen
   P₁ V₁ = P₂ V₂                  β ≈ 1/273.15 °C⁻¹                igual número de moléculas
         │                                 │                                 │
         └─────────────────────────────────┼─────────────────────────────────┘
                                           ▼
                          Ecuación de Estado del Gas Ideal
                          P V = n R T  =  N k_B T
```

### 2.1. Ley de Boyle-Mariotte (1662)
Robert Boyle (y de forma independiente Edme Mariotte en 1676) estudió el aire confinado en un tubo en forma de J, variando la presión mediante la adición de columnas de mercurio bajo temperatura constante. Halló que el volumen ocupado por una masa fija de gas es estrictamente inversamente proporcional a la presión absoluta:

$$P \propto \frac{1}{V} \implies P V = \text{constante} \qquad (T = \text{cte})$$

### 2.2. Ley de Charles y Gay-Lussac: El Cero Absoluto (1787, 1802)
Jacques Charles y Joseph Louis Gay-Lussac investigaron la dilatación térmica de diversos gases a presión constante. Descubrieron que todos los gases diluidos experimentan la misma tasa fraccionaria de expansión volumétrica por cada grado de incremento térmico:

$$V(T_C) = V_0\left(1 + \beta\, T_C\right)$$

donde $V_0$ es el volumen a $0\text{ °C}$, $T_C$ es la temperatura en la escala Celsius y el coeficiente de dilatación isobárica $\beta$ resultaba experimentalmente idéntico para todos los gases:

$$\beta \approx \frac{1}{273.15}\text{ °C}^{-1}$$

Factorizando la expresión:

$$V(T_C) = \frac{V_0}{273.15}\left(T_C + 273.15\right)$$

Esta relación lineal reveló una profunda propiedad de la materia: si la temperatura descendiera hasta $-273.15\text{ °C}$, el volumen de un gas ideal hipotético se reduciría a cero. Esto definió la existencia de un **cero absoluto** de temperatura, permitiendo la formulación de la **escala de temperatura absoluta Kelvin** ($T$):

$$T = T_C + 273.15\text{ K}$$

Con esta escala, la ley toma la forma canónica:

$$\frac{V}{T} = \text{constante} \qquad (P = \text{cte})$$

De manera simétrica, a volumen constante (transformación isócora, atribuida a Guillaume Amontons y Gay-Lussac):

$$\frac{P}{T} = \text{constante} \qquad (V = \text{cte})$$

### 2.3. Hipótesis de Avogadro y la Ecuación del Gas Ideal (1811)
Amedeo Avogadro, reconciliando la ley de los volúmenes de combinación de Gay-Lussac (1808) con la teoría atómica de Dalton (1808), postuló en 1811 que:
> *Volúmenes iguales de gases diferentes, medidos bajo las mismas condiciones de presión y temperatura, contienen exactamente el mismo número de partículas elementales (moléculas).*

Combinando las relaciones de proporcionalidad ($V \propto 1/P$, $V \propto T$, $V \propto n$):

$$P V = n R T = N k_B T$$

donde:
- $n$ es la cantidad de sustancia en moles ($n = N/N_A$),
- $N$ es el número total de partículas microscópicas,
- $R \approx 8.314462\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ es la constante universal de los gases,
- $N_A \approx 6.02214 \times 10^{23}\text{ mol}^{-1}$ es el número de Avogadro,
- $k_B = \frac{R}{N_A} \approx 1.380649 \times 10^{-23}\text{ J/K}$ es la constante de Boltzmann.

---

## 3. El Modelo Cinético Molecular de Bernoulli y Clausius

*Fuente: Weinberg, §1.1 y §2.1; Diapositivas Clase 1, diaps. 25–38; Transcripción 01:30–02:35; Bernoulli, Hydrodynamica (1738); Clausius (1857).*

La ecuación $PV = N k_B T$ fue un triunfo empírico, pero permaneció como una ley puramente fenomenológica hasta que Daniel Bernoulli (1738) y posteriormente Rudolf Clausius (1857) postularon que las propiedades macroscópicas de un gas son el resultado estadístico directo de colisiones mecánicas de un número gigantesco de partículas invisibles dotadas de movimiento perpetuo.

```
                  DEDUCCIÓN CINÉTICA DE LA PRESIÓN (BERNOULLI-CLAUSIUS)
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         ▼                                                                   ▼
   Pared normal a x en x = L                                     Gas en contenedor cúbico V = L³
   - Molécula de masa m choca elásticamente                      - N moléculas idénticas
   - v_x' = -v_x  (v_y, v_z invariantes)                         - Movimiento isotrópico caótico
   - Δp_x = p_final - p_inicial = -2 m v_x                       - Densidad numérica n = N/V
                                           │
                                           ▼
                     Momento transferido a la pared por colisión:
                                  q_x = + 2 m v_x
                                           │
                                           ▼
              Número de colisiones en área A durante intervalo infinitesimal dt:
                          dN = (1/2) · n · A · v_x · dt
                                           │
                                           ▼
                            Fuerza total media sobre la pared:
                        F = dP_total / dt = n · A · m · ⟨v_x²⟩
                                           │
                                           ▼
                                 Presión cinética:
                         P = F / A = n · m · ⟨v_x²⟩ = (1/3) · (N/V) · m · ⟨v²⟩
```

### 3.1. Postulados del Gas Ideal Microscópico
1. El gas está compuesto por un ensamble de $N$ partículas idénticas de masa $m$, cuyo volumen propio es despreciable frente al volumen total del recipiente ($V$).
2. Las moléculas no ejercen fuerzas mutuas a distancia; interactúan únicamente mediante colisiones elásticas instantáneas entre sí y con las paredes del contenedor.
3. El movimiento de las moléculas es totalmente caótico e **isotrópico**: ninguna dirección del espacio está privilegiada.
4. Se aplican las leyes de la mecánica newtoniana a cada choque individual.

### 3.2. Deducción Rigurosa Paso a Paso de la Presión Cinética

Consideremos un contenedor cúbico de arista $L$ y volumen $V = L^3$, cuyas caras son perpendiculares a los ejes cartesianos. Analicemos una partícula individual que posee un vector velocidad $\vec{v} = (v_x, v_y, v_z)$ antes de colisionar contra una pared perpendicular al eje $x$ ubicada en $x = L$.

**Paso 1: Variación del momento lineal por choque elástico**  
Al impactar elásticamente contra la pared fija, la componente normal de la velocidad se invierte, mientras que las componentes tangenciales permanecen inalteradas por simetría:
$$\vec{v}_{\text{inicial}} = (v_x, v_y, v_z) \implies \vec{v}_{\text{final}} = (-v_x, v_y, v_z)$$

El cambio en la cantidad de movimiento de la molécula es:
$$\Delta p_{x,\text{mol}} = m(-v_x) - m(v_x) = -2m v_x$$

Por la Tercera Ley de Newton (acción y reacción), el momento transferido a la pared en cada choque es:
$$\Delta p_{x,\text{pared}} = +2m v_x$$

**Paso 2: Conteo de colisiones en un intervalo de tiempo $\Delta t$**  
Consideremos una sección de pared de área $A$. En un intervalo $\Delta t$, únicamente podrán alcanzar la pared aquellas moléculas que se encuentren a una distancia no mayor a $v_x \Delta t$ a lo largo del eje $x$, es decir, dentro del cilindro de volumen:
$$\Delta V = A\, v_x\, \Delta t$$

Si la densidad numérica total de partículas es $n_V = \frac{N}{V}$, y asumiendo una distribución uniforme, la mitad de las moléculas dentro de dicho volumen se desplaza hacia la derecha ($+x$) y la otra mitad hacia la izquierda ($-x$). Por lo tanto, el número de impactos contra el área $A$ en el tiempo $\Delta t$ para partículas con velocidad $v_x$ es:
$$\Delta N_{\text{choques}} = \frac{1}{2} n_V A\, v_x\, \Delta t = \frac{1}{2}\left(\frac{N}{V}\right) A\, v_x\, \Delta t$$

**Paso 3: Fuerza media y presión ejercida**  
La cantidad total de movimiento transferida al área $A$ en el intervalo $\Delta t$ por estas partículas es:
$$\Delta p_{\text{total}} = \Delta N_{\text{choques}} \cdot \Delta p_{x,\text{pared}} = \left[\frac{1}{2}\left(\frac{N}{V}\right) A\, v_x\, \Delta t\right] (2m v_x) = \left(\frac{N}{V}\right) A\, m\, v_x^2\, \Delta t$$

Por la Segunda Ley de Newton, la fuerza neta ejercida sobre la pared es la tasa temporal de transferencia de momento:
$$F = \frac{\Delta p_{\text{total}}}{\Delta t} = \left(\frac{N}{V}\right) A\, m\, v_x^2$$

Dividiendo por el área $A$, obtenemos la presión parcial debida a las partículas con velocidad $v_x$:
$$P = \frac{F}{A} = \frac{N}{V} m\, v_x^2$$

Generalizando al ensamble de partículas que poseen distintas componentes de velocidad, reemplazamos $v_x^2$ por su valor esperado o promedio estadístico $\langle v_x^2\rangle$:
$$P = \frac{N}{V} m\, \langle v_x^2\rangle$$

**Paso 4: Condición de Isotropía Espacial**  
La rapidez al cuadrado de cada partícula está dada por el teorema de Pitágoras tridimensional:
$$v^2 = v_x^2 + v_y^2 + v_z^2$$

Tomando el promedio estadístico de conjunto en ambos lados:
$$\langle v^2\rangle = \langle v_x^2\rangle + \langle v_y^2\rangle + \langle v_z^2\rangle$$

Dado que el gas no posee flujo macroscópico ni direcciones privilegiadas en el espacio tridimensional (isotropía completa):
$$\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle$$

Por consiguiente:
$$\langle v^2\rangle = 3\langle v_x^2\rangle \implies \langle v_x^2\rangle = \frac{1}{3}\langle v^2\rangle$$

Sustituyendo esta relación fundamental en la ecuación de presión:

$$\boxed{P = \frac{1}{3} \frac{N}{V} m \langle v^2\rangle = \frac{1}{3} \rho \langle v^2\rangle}$$

donde $\rho = \frac{N m}{V}$ es la densidad de masa del gas. Multiplicando ambos lados por el volumen $V$:

$$\boxed{P V = \frac{1}{3} N m \langle v^2\rangle = \frac{2}{3} N \left(\frac{1}{2} m \langle v^2\rangle\right)}$$

---

## 4. La Temperatura Absoluta como Manifestación Microscópica

*Fuente: Weinberg, §1.1; Diapositivas Clase 1, diaps. 30–35; Transcripción 02:10–02:50.*

La derivación de Bernoulli y Clausius proporcionó el puente exacto entre la mecánica newtoniana microscópica y la termodinámica macroscópica. Comparando la deducción teórica con la ecuación experimental de los gases ideales:

$$P V = \frac{2}{3} N \langle E_k\rangle \qquad \text{y} \qquad P V = N k_B T$$

Igualando miembro a miembro:

$$\frac{2}{3} N \langle E_k\rangle = N k_B T$$

Despejando la energía cinética media traslacional por molécula $\langle E_k\rangle$:

$$\boxed{\langle E_k\rangle = \frac{1}{2} m \langle v^2\rangle = \frac{3}{2} k_B T}$$

### 4.1. Consecuencias Físicas Inmediatas
1. **Significado Físico de la Temperatura:**  
   La temperatura absoluta $T$ deja de ser una sensación fisiológica subjetiva o una propiedad térmica abstracta: **es una medida directa y unívoca de la energía cinética media del movimiento desordenado de traslación de las moléculas**.
2. **Equipartición Clásica por Grado de Libertad:**  
   Dado que el espacio posee tres grados de libertad traslacionales independientes ($x, y, z$):
   $$\langle E_{k,x}\rangle = \frac{1}{2}m\langle v_x^2\rangle = \frac{1}{2}k_B T, \qquad \langle E_{k,y}\rangle = \frac{1}{2}k_B T, \qquad \langle E_{k,z}\rangle = \frac{1}{2}k_B T$$
   Cada grado de libertad cuadrático en el hamiltoniano almacena una energía media idéntica de $\frac{1}{2}k_B T$.
3. **Energía Interna del Gas Ideal Monoatómico:**  
   Para un gas formado por $N$ átomos sin estructura interna ni modos de rotación o vibración:
   $$U = N \langle E_k\rangle = \frac{3}{2} N k_B T = \frac{3}{2} n R T$$
   La energía interna depende exclusivamente de la temperatura ($U = U(T)$), verificando analíticamente la ley empírica de Joule.
4. **Capacidad Calorífica Molar a Volumen Constante:**  
   $$C_V = \left(\frac{\partial U}{\partial T}\right)_V = \frac{3}{2} R \approx 12.47\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$$

### 4.2. Rapideces Moleculares Características
A partir de $\langle v^2\rangle = \frac{3 k_B T}{m} = \frac{3 R T}{M_{\text{mol}}}$, se define la **rapidez cuadrática media** (*root-mean-square*):

$$\boxed{v_{\text{rms}} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3 k_B T}{m}} = \sqrt{\frac{3 R T}{M_{\text{mol}}}}}$$

#### Ejemplo Numérico Concreto (Valores a $T = 300\text{ K}$):
- **Nitrógeno molecular ($N_2$):** $M_{\text{mol}} = 28.013 \times 10^{-3}\text{ kg/mol}$
  $$v_{\text{rms}}(N_2) = \sqrt{\frac{3(8.314)(300)}{0.028013}} \approx 517\text{ m/s}$$
- **Oxígeno molecular ($O_2$):** $M_{\text{mol}} = 31.999 \times 10^{-3}\text{ kg/mol}$
  $$v_{\text{rms}}(O_2) = \sqrt{\frac{3(8.314)(300)}{0.031999}} \approx 483\text{ m/s}$$
- **Hidrógeno molecular ($H_2$):** $M_{\text{mol}} = 2.016 \times 10^{-3}\text{ kg/mol}$
  $$v_{\text{rms}}(H_2) = \sqrt{\frac{3(8.314)(300)}{0.002016}} \approx 1928\text{ m/s}$$

Estas cifras revelaron por primera vez la escala colosal de las velocidades térmicas a temperatura ambiente (superiores a la velocidad del sonido en el aire, $c_s \approx 343\text{ m/s}$).

---

## 5. La Paradoja de la Difusión y la Necesidad de la Distribución Estadística

*Fuente: Transcripción Clase 1, 02:40–03:02; Weinberg, §1.1 y §2.5.*

Hacia mediados del siglo XIX, la teoría cinética incipiente enfrentó una severa objeción planteada por el meteorólogo holandés Christoph Buys Ballot (1858):
> *Si las moléculas del aire viajan a más de $500\text{ m/s}$, ¿por qué el aroma de un perfume destapado en un extremo de una habitación tarda varios minutos en ser percibido en el otro extremo?*

La respuesta formulada por Rudolf Clausius introdujo un concepto revolucionario: las partículas no viajan en trayectorias balísticas libres, sino que sufren miles de millones de colisiones por segundo con otras partículas circundantes, desviando erráticamente su rumbo. Esto dio origen a la noción de **camino libre medio** ($\lambda$) y evidenció que las moléculas no poseen una única velocidad uniforme, sino un espectro probabilístico continuo de rapideces, preparando el escenario para la intervención de James Clerk Maxwell (1860).

---

## 6. Conclusiones de la Clase

1. **Superación del dogma del vacío:** El experimento de Torricelli (1643) probó que la presión atmosférica es una fuerza hidrostática cuantificable ($P_0 \approx 101.3\text{ kPa}$) debida al peso real del aire, disipando el *horror vacui*.
2. **Unificación empírica:** Las leyes independientes de Boyle, Charles, Gay-Lussac y la hipótesis de Avogadro convergen en la ecuación de estado unificada $PV = nRT = N k_B T$.
3. **Fundamentación mecanicista:** El modelo de Bernoulli-Clausius demuestra rigurosamente a partir de la Segunda y Tercera Ley de Newton que la presión macroscópica de un gas es la tasa temporal promedio de transferencia de momento de las colisiones moleculares contra las paredes: $P = \frac{1}{3} \frac{N}{V} m \langle v^2\rangle$.
4. **Desmitificación de la temperatura:** La temperatura absoluta $T$ es proporcional a la energía cinética media traslacional por molécula: $\langle E_k\rangle = \frac{3}{2} k_B T$. Cada grado de libertad cartesiano posee en promedio $\frac{1}{2} k_B T$.
5. **Apertura hacia la estadística:** La presencia de velocidades microscópicas enormes ($>500\text{ m/s}$) combinada con una difusión macroscópica lenta exigió abandonar la hipótesis de una rapidez molecular uniforme y demandó el desarrollo de una función de distribución estadística continua (Clase 02).

---

## 7. Referencias Bibliográficas

1. **Fuentes primarias y artículos históricos:**
   - Torricelli, E. (1644). *Lezioni accademiche d'Evangelista Torricelli*. Florencia.
   - Boyle, R. (1662). *New Experiments Physico-Mechanicall, Touching the Spring of the Air, and its Effects*. Oxford: H. Hall.
   - Bernoulli, D. (1738). *Hydrodynamica, sive de viribus et motibus fluidorum commentarii*. Estrasburgo: J. R. Dulseckeri.
   - Gay-Lussac, J. L. (1802). "Recherches sur la dilatation des gaz et des vapeurs". *Annales de Chimie*, 43, 137–175.
   - Avogadro, A. (1811). "Essai d'une manière de déterminer les masses relatives des molécules élémentaires des corps". *Journal de Physique*, 73, 58–76.
   - Clausius, R. (1857). "Über die Art der Bewegung, welche wir Wärme nennen". *Annalen der Physik*, 100, 353–380.
2. **Textos del diplomado:**
   - Oliva Zapata, J. E. (2026). *Material pedagógico y diapositivas de Clase 01: Termodinámica y teoría atómica pre-cuántica*. Universidad de Concepción.
3. **Textos universitarios canónicos:**
   - Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. Cap. 1: "Early Atomic Theory", pp. 1–15.
   - Feynman, R. P., Leighton, R. B., & Sands, M. (1963). *The Feynman Lectures on Physics*, Vol. I. Reading, Mass.: Addison-Wesley. Cap. 1: "Atoms in Motion".
   - Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. Nueva York: McGraw-Hill.
4. **Recursos experimentales:**
   - PHYWE Systeme GmbH. *Laboratory Experiments in Physics: Maxwellian velocity distribution* (LEP 3.2.03). Göttingen, Alemania.
