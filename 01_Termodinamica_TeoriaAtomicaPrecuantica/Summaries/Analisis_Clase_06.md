# Análisis de Clase 06: Mecánica Estadística, Entropía de Boltzmann, Colectividades y la Teoría de Einstein del Movimiento Browniano

**Diplomado en Física Moderna — Módulo 01: Termodinámica y Teoría Atómica Precuántica**  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Fecha de la sesión:** 19 de junio de 2026  
**Duración:** 3 horas 19 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`Clase_06/grabacion/Clase del Diplomado de Física Moderna.docx` y `transcripcion_clase06.txt`).
- Apuntes manuscritos de pizarra digital: `Clase_06/Clase 6 Notas a mano.pdf` (17 págs).
- Texto guía central: Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Cap. 2: §2.4 *Kinetic Theory and Statistical Mechanics* (pp. 33–42) y §2.6 *The Atomic Scale* (pp. 53–60).
- Fuentes primarias históricas: L. Boltzmann, *Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung respektive den Sätzen über das Wärmegleichgewicht*, Wiener Berichte 76, 373 (1877); J. W. Gibbs, *Elementary Principles in Statistical Mechanics* (Yale University Press, 1902); A. Einstein, *Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen*, Ann. Phys. 17, 549 (1905); J. Perrin, *Mouvement brownien et réalité moléculaire*, Ann. Chim. Phys. 18, 5 (1909).

---

## 1. La Conexión Microscópica: La Fórmula de Entropía de Boltzmann (1877)

*Fuente: Notas a mano Clase 6, diaps. 1–5; Transcripción 00:04–00:55; Weinberg, §2.4.*

La termodinámica clásica definió la entropía de forma puramente fenomenológica a través de calor reversible y temperatura: $dS = \frac{\delta Q_{\text{rev}}}{T}$. Sin embargo, dejaba sin respuesta la pregunta fundamental: ¿qué es físicamente la entropía en el ámbito de las partículas materiales?

Ludwig Boltzmann (1877) formuló la respuesta más trascendente de la física térmica del siglo XIX: la entropía es una medida cuantitativa del **número de microestados microscópicos ($\Omega$) compatibles con el mismo macroestado termodinámico observable**.

```
                         CONEXIÓN MICRO-MACRO DE BOLTZMANN
                                         │
         ┌───────────────────────────────┴───────────────────────────────┐
         ▼                                                               ▼
   Macroestado Termodinámico (E, V, N)                             Microestado en el Espacio de Fases
   - Presión P, Temperatura T, Volumen V                           - 6N coordenadas: (q⃗₁, p⃗₁, ..., q⃗_N, p⃗_N)
   - Estados globales de equilibrio                                - Configuración instantánea exacta
         │                                                               │
         └───────────────────────────────┬───────────────────────────────┘
                                         ▼
                             Volumen Accesible en Espacio de Fases
                                  Ω(E, V, N) = Conteo de microestados
                                         │
                                         ▼
                                 Fórmula de Boltzmann:
                                    S = k_B · ln Ω
```

### 1.1. Deducción Analítica de la Relación Logarítmica
Consideremos dos sistemas termodinámicos independientes, $A$ y $B$, con números de microestados accesibles $\Omega_A$ y $\Omega_B$ respectivamente.

1. **Aditividad Macroscópica de la Entropía:**  
   Dado que la entropía es una propiedad extensiva (demostrado por Clausius):
   $$S_{AB} = S_A + S_B$$
2. **Multiplicatividad Estadística de los Microestados:**  
   Como los subsistemas $A$ y $B$ son estadísticamente independientes, por cada microestado en el cual se encuentre $A$, el subsistema $B$ puede hallarse en cualquiera de sus $\Omega_B$ estados. El número total de microestados combinados del sistema compuesto $AB$ es el producto de las probabilidades de fase:
   $$\Omega_{AB} = \Omega_A \cdot \Omega_B$$

Buscamos una función monótona $S = f(\Omega)$ que cumpla simultáneamente ambas propiedades:
$$f(\Omega_A \cdot \Omega_B) = f(\Omega_A) + f(\Omega_B)$$

Diferenciando esta ecuación funcional respecto a $\Omega_A$:
$$\Omega_B\, f'(\Omega_A \cdot \Omega_B) = f'(\Omega_A)$$

Multiplicando por $\Omega_A$:
$$(\Omega_A \Omega_B)\, f'(\Omega_A \Omega_B) = \Omega_A\, f'(\Omega_A)$$

Dado que el miembro izquierdo depende exclusivamente del producto $\Omega = \Omega_A \Omega_B$ y el derecho solo de $\Omega_A$, la expresión $\Omega f'(\Omega)$ debe ser idénticamente igual a una constante universal:
$$\Omega\, f'(\Omega) = k_B \implies \frac{df}{d\Omega} = \frac{k_B}{\Omega}$$

Integrando directamente:
$$f(\Omega) = k_B \ln \Omega + C$$

Eligiendo el estado fundamental cuántico sin degeneración como referencia cero ($\Omega = 1 \implies S = 0$, Tercera Ley de Nernst):

$$\boxed{S = k_B \ln \Omega}$$

donde $k_B \approx 1.380649 \times 10^{-23}\text{ J/K}$ es la constante de Boltzmann, introducida explícitamente en la literatura por Max Planck en 1900.

---

## 2. La Paradoja de Gibbs y la Indistinguibilidad Cuántica

*Fuente: Notas a mano Clase 6, diaps. 6–8; Transcripción 00:55–01:40; Weinberg, §2.4.*

En la formulación de la mecánica clásica, el estado microscópico de un gas de $N$ partículas está determinado por un punto en el **espacio de fases** $\Gamma$ de $6N$ dimensiones: $(\vec{q}_1, \dots, \vec{q}_N; \vec{p}_1, \dots, \vec{p}_N)$. El número de microestados se calculaba dividiendo el volumen continuo de la hipersuperficie de energía por una celda de referencia:

$$\Omega_{\text{clásica}} = \frac{1}{\Delta \Gamma_0} \int \prod_{i=1}^N d^3q_i\, d^3p_i$$

### 2.1. La Paradoja de la Mezcla de Gases Idénticos
Si aplicamos esta expresión clásica al cálculo de la entropía de un gas ideal, se obtiene una dependencia con el volumen del tipo $S \propto N k_B \ln V$. 

Consideremos un recipiente rígido de volumen total $2V$, dividido por un tabique central en dos compartimentos de volumen $V$, cada uno conteniendo $N$ moléculas del **mismo gas ideal a idéntica temperatura $T$ y presión $P$**.
- Antes de remover el tabique: $S_{\text{inicial}} = S_1 + S_2 = 2 S(T, V, N)$.
- Al remover el tabique, las moléculas se difunden libremente en el volumen combinado $2V$. La energía térmica y la masa se conservan, por lo que macroscópicamente el estado final no ha cambiado en absoluto: sigue siendo un gas homogéneo a temperatura $T$ y presión $P$.
- Sin embargo, la fórmula clásica predice un aumento espurio de entropía (**entropía de mezcla de Gibbs**):
  $$\Delta S_{\text{mezcla}} = S_{\text{final}} - S_{\text{inicial}} = 2N k_B \ln(2V) - 2N k_B \ln V = 2N k_B \ln 2 > 0$$

Esto representaría un proceso macroscópico irreversible espontáneo sin cambio alguno en ninguna variable de estado, violando la extensividad de la entropía ($S(\alpha E, \alpha V, \alpha N) = \alpha S(E, V, N)$).

```
                        LA PARADOJA DE GIBBS Y SU RESOLUCIÓN
                                          │
         ┌────────────────────────────────┴────────────────────────────────┐
         ▼                                                                 ▼
   Hipótesis Clásica (Partículas Distinguibles)                    Corrección de Gibbs (Indistinguibilidad)
   - Cada átomo posee una "etiqueta" imaginaria                   - Las partículas idénticas no son distinguibles
   - Permutar dos átomos genera un nuevo microestado              - Permutar N átomos no cambia el estado físico
   - Volumen de fase sobreestimado por N!                         - Hay que dividir el espacio de fases por N!
                                          │
                                          ▼
                         Ecuación de Sackur-Tetrode (1912):
                           Celda elemental de volumen h³
               S = N k_B · [ ln( (V/N) · (4π m U / 3 h² N)^(3/2) ) + 5/2 ]
```

### 2.2. La Solución de Gibbs y la Celda Cuántica
Josiah Willard Gibbs (1902) comprendió que la mecánica clásica contenía un error conceptual: asumir que las partículas atómicas idénticas son individualmente distinguibles mediante etiquetas imaginarias. En la naturaleza:
> *La permutación de dos partículas idénticas de la misma especie química no genera un nuevo microestado físico; describe exactamente el mismo estado del ensamble.*

Existen $N!$ permutaciones posibles de las $N$ partículas. Por lo tanto, el número de microestados físicos accesibles debe ser **dividido estrictamente entre $N!$**:

$$\Omega_{\text{Gibbs}} = \frac{1}{N!\, h^{3N}} \int \prod_{i=1}^N d^3q_i\, d^3p_i$$

donde la constante $h$ (con dimensiones de acción $[p \cdot q] = \text{J}\cdot\text{s}$) corresponde al cuanto de acción de Planck, el cual define el volumen elemental irreductible de una celda en el espacio de fases bidimensional $(\Delta q_x \Delta p_x \ge h)$.

Aplicando la aproximación asintótica de Stirling $\ln(N!) \approx N \ln N - N$:
$$\ln\left(\frac{V^N}{N!}\right) = N \ln V - (N \ln N - N) = N \ln\left(\frac{V}{N}\right) + N$$

La dependencia no extensiva $\ln V$ se transforma en la dependencia intensiva canónica $\ln(V/N) = \ln v$, resolviendo de manera exacta la paradoja de Gibbs ($\Delta S_{\text{mezcla}} = 0$ para gases idénticos). Esto condujo en 1912 a la célebre **Ecuación de Sackur-Tetrode** para la entropía absoluta del gas ideal monoatómico:

$$\boxed{S = N k_B \left[\ln\left(\frac{V}{N}\left(\frac{4\pi m U}{3 h^2 N}\right)^{3/2}\right) + \frac{5}{2}\right]}$$

---

## 3. Colectividades Estadísticas de Gibbs

*Fuente: Notas a mano Clase 6, diaps. 9–13; Transcripción 01:40–02:25; Weinberg, §2.4.*

J. Willard Gibbs sistematizó la mecánica estadística mediante el concepto de **colectividad o ensamble** (*ensemble*): un conjunto mental gigantesco de copias virtuales idénticas del sistema macroscópico, caracterizadas por distintas condiciones de contorno con su entorno.

```
                         LAS TRES COLECTIVIDADES DE GIBBS
                                         │
         ┌───────────────────────────────┼───────────────────────────────┐
         ▼                               ▼                               ▼
   Colectividad Microcanónica          Colectividad Canónica           Colectividad Gran Canónica
   - Sistema aislado                   - En contacto térmico           - Contacto térmico y químico
   - Variables fijas: (E, V, N)        - Variables fijas: (T, V, N)    - Variables fijas: (T, V, μ)
   - Intercambio: NINGUNO              - Intercambio: ENERGÍA          - Intercambio: ENERGÍA Y MATERIA
   - P_i = 1 / Ω                       - P_i = e^(-β E_i) / Z          - P_i = e^(-β(E_i - μ N)) / Ξ
   - Potencial: S = k_B ln Ω           - Potencial: F = -k_B T ln Z    - Potencial: Φ_G = -k_B T ln Ξ
```

### 3.1. Colectividad Canónica y Función de Partición
Consideremos un sistema cerrado de volumen $V$ y número de partículas $N$ en equilibrio térmico con un reservorio gigante a temperatura $T$.

La probabilidad $P_i$ de que el sistema se encuentre en un microestado individual específico $i$ con energía $E_i$ está gobernada por el **factor de Boltzmann**:
$$P_i = \frac{e^{-\beta E_i}}{Z}$$
donde $\beta = \frac{1}{k_B T}$ y la constante de normalización $Z$ es la **Función de Partición Canónica**:

$$\boxed{Z(T, V, N) = \sum_i e^{-\beta E_i}}$$

Para un gas clásico en el continuo del espacio de fases:
$$Z = \frac{1}{N!\, h^{3N}} \int d^{3N}q\, d^{3N}p\, \exp\left(-\beta H(\vec{q}, \vec{p})\right)$$

### 3.2. Conexión Directa con la Termodinámica
Gibbs demostró que la función de partición canónica $Z$ es el puente maestro hacia toda la termodinámica clásica mediante la **Energía Libre de Helmholtz** $F(T, V, N)$:

$$\boxed{F = -k_B T \ln Z = -\frac{1}{\beta} \ln Z}$$

A partir de $F$, todas las magnitudes termodinámicas se obtienen mediante diferenciación analítica directa:
1. **Energía interna media:**
   $$U = \langle E\rangle = -\frac{\partial \ln Z}{\partial \beta} = k_B T^2 \frac{\partial \ln Z}{\partial T}$$
2. **Presión:**
   $$P = -\left(\frac{\partial F}{\partial V}\right)_T = k_B T \left(\frac{\partial \ln Z}{\partial V}\right)_T$$
3. **Entropía:**
   $$S = -\left(\frac{\partial F}{\partial T}\right)_{V, N} = k_B \ln Z + \frac{U}{T}$$

---

## 4. La Teoría de Einstein del Movimiento Browniano (1905)

*Fuente: Notas a mano Clase 6, diaps. 14–17; Transcripción 02:25–03:15; Weinberg, §2.6; Einstein (1905); Perrin (1909).*

A comienzos del siglo XX, a pesar de los éxitos matemáticos de Maxwell y Boltzmann, prominentes físicos y filósofos de la ciencia —liderados por Ernst Mach y el premio Nobel de química Wilhelm Ostwald— rechazaban ferozmente la realidad física del átomo, catalogando a las moléculas como "artificios matemáticos auxiliares sin existencia ontológica real".

En mayo de 1905 (su *Annus Mirabilis*), Albert Einstein publicó su célebre artículo:
> *"Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen"*  
> (*Sobre el movimiento de partículas suspendidas en líquidos en reposo requerido por la teoría molecular-cinética del calor*).

Einstein comprendió que si la teoría cinética era correcta, las partículas mesoscópicas microscópicamente visibles (como granos de polen o esporas de gomaguta suspendidas en agua, observadas por Robert Brown en 1827) debían estar en equilibrio térmico con las moléculas invisibles del líquido, sufriendo fluctuaciones de presión no balanceadas.

```
                    TEORÍA DE EINSTEIN DEL MOVIMIENTO BROWNIANO (1905)
                                            │
         ┌──────────────────────────────────┴──────────────────────────────────┐
         ▼                                                                     ▼
   Presión Osmótica Molecular (Van 't Hoff)                      Fuerza Hidrodinámica de Fricción (Stokes)
   P_osm = n · k_B · T                                           F_arrastre = 6π · η · r · v
   Fuerza impulsora: -∇ P_osm                                    Movilidad: μ = v / F = 1 / (6π η r)
         │                                                                     │
         └──────────────────────────────────┬──────────────────────────────────┘
                                            ▼
                       Relación de Einstein-Smoluchowski:
                               D = μ · k_B · T = k_B · T / (6π η r)
                                            │
                                            ▼
                     Desplazamiento Cuadrático Medio Observable:
                             ⟨x²(t)⟩ = 2 D t = [ R T / (3π η r N_A) ] · t
                                            │
                                            ▼
                         Experimentos Decisivos de Jean Perrin (1908)
                             Cálculo experimental directo de N_A
                             Capitulación definitiva del antiatomismo
```

### 4.1. Deducción de la Relación de Einstein
Consideremos partículas coloidales suspendidas de radio $r$ en un líquido de viscosidad $\eta$ a temperatura $T$. Si se establece un gradiente de concentración $\frac{\partial n}{\partial x}$, la presión osmótica $P_{\text{osm}} = n k_B T$ genera una fuerza termodinámica por unidad de volumen:
$$F_{\text{osm}} = -\frac{\partial P_{\text{osm}}}{\partial x} = -k_B T \frac{\partial n}{\partial x}$$

La fuerza que actúa sobre cada partícula individual suspendida es:
$$f_{\text{partícula}} = \frac{F_{\text{osm}}}{n} = -\frac{k_B T}{n} \frac{\partial n}{\partial x}$$

Esta fuerza induce una velocidad sistemática de arrastre $v_{\text{arrastre}} = \mu\, f_{\text{partícula}}$, donde $\mu$ es la **movilidad hidrodinámica**, dada por la inversa del coeficiente de fricción de Stokes:
$$\mu = \frac{1}{6\pi \eta r}$$

El flujo sistemático de partículas resultante es:
$$J_{\text{arrastre}} = n\, v_{\text{arrastre}} = n \mu\left(-\frac{k_B T}{n}\frac{\partial n}{\partial x}\right) = -\mu\, k_B T \frac{\partial n}{\partial x}$$

Por otro lado, por la Primera Ley de Fick, el flujo difusivo molecular es:
$$J_{\text{difusión}} = -D \frac{\partial n}{\partial x}$$

En el estado estacionario de equilibrio, ambos flujos deben balancearse idénticamente ($J_{\text{arrastre}} = J_{\text{difusión}}$):
$$-\mu\, k_B T \frac{\partial n}{\partial x} = -D \frac{\partial n}{\partial x}$$

Igualando los coeficientes, obtenemos la **Relación de Einstein-Smoluchowski**:

$$\boxed{D = \mu\, k_B T = \frac{k_B T}{6\pi \eta r}}$$

Esta fórmula es el prototipo del **Teorema de Fluctuación-Disipación**: relaciona directamente un fenómeno puramente disipativo e irreversible a nivel macroscópico (la viscosidad $\eta$) con la intensidad de las fluctuaciones térmicas aleatorias microscópicas ($k_B T$ y el coeficiente de difusión $D$).

### 4.2. El Desplazamiento Cuadrático Medio Observable
A partir de la solución de la ecuación de difusión obtenida en la Clase 03, el desplazamiento medio de las partículas en un plano unidimensional $x$ es nulo ($\langle x(t)\rangle = 0$), pero el **desplazamiento cuadrático medio** crece linealmente con el tiempo:

$$\langle x^2(t)\rangle = 2\, D\, t$$

Sustituyendo $D = \frac{k_B T}{6\pi \eta r}$ y $k_B = \frac{R}{N_A}$:

$$\boxed{\langle x^2(t)\rangle = \frac{R T}{3\pi \eta r N_A}\, t \implies \Delta x_{\text{rms}} = \sqrt{\frac{R T}{3\pi \eta r N_A}}\,\sqrt{t}}$$

### 4.3. El Triunfo Definitivo del Átomo: Los Experimentos de Jean Perrin (1908)
Einstein observó con agudeza que en su fórmula todas las variables son medibles directamente en el laboratorio macroscópico bajo un microscopio óptico ordinario:
- El desplazamiento cuadrático medio $\langle x^2\rangle$ de una partícula coloidal observada en intervalos regulares de tiempo $t$.
- La temperatura $T$, la viscosidad del líquido $\eta$, el radio coloidal esférico $r$ y la constante universal de los gases $R$.

Despejando el **número de Avogadro**:

$$\boxed{N_A = \frac{R T}{3\pi \eta r}\left(\frac{t}{\langle x^2\rangle}\right)}$$

El físico francés Jean Perrin, mediante minuciosos experimentos de sedimentación coloidal y seguimiento microscópico de partículas de gomaguta entre 1908 y 1909, midió $\langle x^2(t)\rangle$ para miles de trayectorias, determinando un valor experimental de:
$$N_A \approx 6.0 \times 10^{23}\text{ mol}^{-1}$$
idéntico al obtenido por métodos totalmente dispares (electrólisis de Faraday, leyes de radiación de Planck, teoría cinética de gases). 

Ante la consistencia ineludible de estas mediciones, Wilhelm Ostwald capituló públicamente en 1908:
> *"Me he convencido de que hemos entrado recientemente en posesión de pruebas experimentales de la naturaleza discontinua de la materia, la cual la hipótesis atómica había postulado durante siglos."*

El movimiento browniano transformó la hipótesis atómica en una realidad física incontestable, otorgándole a Jean Perrin el Premio Nobel de Física en 1926.

---

## 5. El Horizonte hacia la Física Cuántica

*Fuente: Transcripción Clase 6, 03:00–03:19; Weinberg, Cap. 3.*

A pesar del colosal triunfo de la física estadística de Boltzmann y Einstein, el cierre del siglo XIX trajo consigo paradojas insolubles para la mecánica clásica continua:
1. **La Catástrofe de los Calores Específicos:** El teorema de equipartición asigna rígidamente $\frac{1}{2}k_B T$ a cada grado de libertad cuadrático, prediciendo capacidades caloríficas molares independientes de la temperatura. En el laboratorio, $C_V(T) \to 0$ al enfriar los sólidos hacia el cero absoluto, lo que solo pudo explicarse cuando Einstein (1907) introdujo la cuantización de los osciladores armónicos atómicos.
2. **La Catástrofe Ultravioleta:** La radiación térmica del cuerpo negro en equilibrio estadístico predecía una densidad infinita de energía espectral para longitudes de onda cortas (Rayleigh-Jeans), obligando a Max Planck en 1900 a postular que los intercambios de energía térmica ocurren en paquetes discretos $\varepsilon = h\nu$.

La física estadística clásica culminó triunfalmente demostrando la existencia real de los átomos, pero abrió inevitablemente las compuertas hacia la mayor revolución científica del siglo XX: la **Mecánica Cuántica** (objeto del Módulo 02).

---

## 6. Conclusiones de la Clase

1. **La fórmula de Boltzmann:** La entropía termodinámica macroscópica de Clausius es proporcional al logaritmo del número de microestados accesibles en el espacio de fases: $S = k_B \ln \Omega$.
2. **Indistinguibilidad elemental:** La paradoja de Gibbs demuestra que las partículas idénticas de la misma especie son cuánticamente indistinguibles, obligando a dividir el volumen de fase entre $N!$ e introduciendo el volumen de celda $h^3$ en la ecuación de Sackur-Tetrode.
3. **Colectividades de Gibbs:** La función de partición canónica $Z = \sum e^{-\beta E_i}$ permite deducir todos los potenciales termodinámicos a través de la energía libre de Helmholtz: $F = -k_B T \ln Z$.
4. **Triunfo ontológico del átomo:** La teoría de Einstein del movimiento browniano (1905) estableció la relación de fluctuación-disipación $D = \frac{k_BT}{6\pi\eta r}$ y el desplazamiento cuadrático medio $\langle x^2\rangle = \frac{RT}{3\pi\eta r N_A}t$, permitiendo a Jean Perrin medir $N_A$ y zanjar definitivamente la realidad del átomo.
5. **Transición al Módulo 02:** El fracaso de la equipartición clásica a bajas temperaturas y la radiación de cavidad revelan que la física estadística pre-cuántica necesita incorporar la discretización cuántica de los niveles de energía.

---

## 7. Referencias Bibliográficas

1. **Fuentes primarias y artículos históricos:**
   - Boltzmann, L. (1877). "Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung respektive den Sätzen über das Wärmegleichgewicht". *Wiener Berichte*, 76, 373–435.
   - Gibbs, J. W. (1902). *Elementary Principles in Statistical Mechanics*. Nueva York: Charles Scribner's Sons.
   - Einstein, A. (1905). "Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen". *Annalen der Physik*, 17, 549–560.
   - Perrin, J. (1909). "Mouvement brownien et réalité moléculaire". *Annales de Chimie et de Physique*, 18, 5–114.
2. **Textos y materiales del diplomado:**
   - Oliva Zapata, J. E. (2026). *Material pedagógico de Clase 06: Mecánica estadística, colectividades y movimiento browniano*. Universidad de Concepción.
   - Oliva Zapata, J. E. (2026). *Clase 6 Notas a mano.pdf* (Apuntes manuscritos de cátedra).
3. **Textos universitarios canónicos:**
   - Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. Cap. 2: §2.4 "Kinetic Theory and Statistical Mechanics", pp. 33–42; §2.6 "The Atomic Scale", pp. 53–60.
   - Pathria, R. K., & Beale, P. D. (2011). *Statistical Mechanics* (3ª ed.). Ámsterdam: Elsevier. Caps. 1–3.
   - Huang, K. (1987). *Statistical Mechanics* (2ª ed.). Nueva York: John Wiley & Sons.
