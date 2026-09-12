# Evaluación Módulo 01: Termodinámica y Teoría Atómica Precuántica
## Monografía de Clase 06: Fundamentos de la Mecánica Estadística, la Entropía de Boltzmann y la Demostración del Átomo mediante el Movimiento Browniano

**Programa:** Diplomado en Física Moderna (Universidad de Concepción)  
**Módulo:** 01 — Termodinámica y Teoría Atómica Precuántica  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Formato:** Informe estructurado (equivalente a 5 páginas en Arial 12, interlineado simple)  

---

## 1. Contexto Histórico y Epistemológico: La Disputa por la Existencia del Átomo

Hacia finales del siglo XIX, la física europea se encontraba dividida por un debate filosófico y metodológico fundamental. Por una parte, la corriente del **Energetismo** (liderada por el físico Ernst Mach y el químico Wilhelm Ostwald) sostenía que la ciencia debía limitarse a describir las relaciones matemáticas directas entre magnitudes macroscópicas observables como la presión, el volumen y la temperatura. Para esta escuela, la materia era un medio continuo y homogéneo; los átomos eran considerados ficciones metafísicas o herramientas contables útiles, pero carentes de existencia real en la naturaleza.

Por otra parte, la escuela del **Atomismo Mecanicista** (encabezada por Ludwig Boltzmann, James Clerk Maxwell y Rudolf Clausius) defendía que los fenómenos térmicos son la consecuencia directa del movimiento caótico de una cantidad inmensa de partículas discretas regidas por las leyes de Newton. Sin embargo, los atomistas enfrentaban dos objeciones teóricas severas planteadas por sus contemporáneos:

1. **La Paradoja de la Reversibilidad (Paradoja de Loschmidt):** Si las colisiones newtonianas entre partículas son perfectamente reversibles en el tiempo ($t \to -t$), ¿cómo puede surgir de ellas la Segunda Ley de la Termodinámica, que impone una dirección temporal irreversible e inexorable?
2. **La Paradoja de la Recurrencia (Teorema de Poincaré-Zermelo):** En un sistema cerrado de partículas con interacciones mecánicas, el estado microscópico debe retornar arbitrariamente cerca de su configuración inicial tras un tiempo finito, lo que contradice el crecimiento monótono de la entropía.

Para resolver estas inconsistencias, Ludwig Boltzmann comprendió que la Segunda Ley no debía interpretarse como una certeza mecánica absoluta, sino como una **ley estadística de probabilidades abrumadoras**. El macroestado de equilibrio termodinámico no es un estado estático, sino aquel que posee la mayor cantidad de microestados microscópicos compatibles.

| Postura Epistemológica | Representantes Principales | Concepción de la Materia | Interpretación de la Entropía |
|---|---|---|---|
| **Energetismo / Fenomenología** | Ernst Mach, Wilhelm Ostwald, Georg Helm | Medio continuo, homogéneo, sin estructura interna corpuscular. | Magnitud macroscópica abstracta que mide la degradación de la energía ($dS = \delta Q_{\text{rev}}/T$). |
| **Atomismo / Mecánica Estadística** | Ludwig Boltzmann, J. Willard Gibbs, Albert Einstein | Discreta, compuesta por $\sim 10^{23}$ átomos o moléculas en movimiento. | Medida probabilística del desorden microscópico y volumen en el espacio de fases ($S = k_B \ln \Omega$). |

---

## 2. Articulación Temática con las Clases Anteriores del Diplomado

La Clase 06 no constituye un tema aislado, sino la **culminación y síntesis analítica** de los conceptos construidos progresivamente a lo largo de todo el módulo. Cada elemento teórico presentado por el Dr. Julio Oliva en esta sesión final resuelve preguntas abiertas dejadas en las sesiones previas:

| Sesión Previa | Concepto Central Desarrollado | Problema Abierto o Límite Encontrado | Resolución en la Clase 06 |
|---|---|---|---|
| **Clase 01** | Presión cinética: $P = \frac{1}{3}nm\langle v^2\rangle$ y temperatura como $\langle E_k\rangle = \frac{3}{2}k_B T$. | Asumía un valor promedio uniforme para las velocidades sin conocer la dispersión real. | Se fundamenta el espacio de fases continuo tridimensional y la distribución de microestados. |
| **Clase 02** | Distribución de rapideces de Maxwell: $P(v) \propto v^2 e^{-\frac{mv^2}{2k_BT}}$. | Se derivó por simetría geométrica sin explicar el origen del factor exponencial térmico. | Emerge rigurosamente como la distribución de probabilidad canónica del ensamble de Gibbs ($e^{-\beta E_i}$). |
| **Clase 03** | Fenómenos de transporte: camino libre medio ($\lambda$), viscosidad ($\eta$) y ley de Stokes ($F = 6\pi\eta r v$). | Describía la resistencia viscosa macroscópica de forma puramente disipativa. | La fuerza de Stokes se acopla a las fluctuaciones térmicas en la relación de Einstein ($D = \frac{k_BT}{6\pi\eta r}$). |
| **Clase 04** | Ecuación de Van der Waals: $\left(P + \frac{a}{V_m^2}\right)(V_m - b) = RT$. | Corrección fenomenológica de volumen propio ($b$) y atracción ($a$) sin función de partición. | El volumen excluido y las interacciones se integran de manera formal en el cálculo de estados en el espacio de fases. |
| **Clase 05** | Segunda Ley, Entropía de Clausius ($dS = \frac{\delta Q_{\text{rev}}}{T}$) y Energía Libre de Helmholtz ($F = U - TS$). | La entropía macroscópica deja una constante de integración $S_0$ arbitraria e indeterminada. | Boltzmann define la entropía absoluta como $S = k_B \ln \Omega$, y Gibbs conecta $F$ directamente con $Z$ ($F = -k_B T \ln Z$). |

La relación con la **Clase 05** es especialmente estrecha: mientras que en la Clase 05 se definió la entropía a partir del calor transferido en un ciclo reversible de Carnot, en la Clase 06 se demuestra que dicha función de estado mide en realidad el logaritmo del número de configuraciones microscópicas accesibles para el sistema.

---

## 3. La Entropía Microscópica de Boltzmann y la Solución de Gibbs

### 3.1. Deducción Funcional de la Fórmula de Boltzmann
Consideremos dos sistemas térmicos independientes, $A$ y $B$, cuyos microestados accesibles son $\Omega_A$ y $\Omega_B$.

1. **Aditividad de la entropía (propiedad extensiva de la Clase 05):**  
   $$S_{AB} = S_A + S_B$$
2. **Multiplicatividad de las configuraciones microscópicas (probabilidad compuesta):**  
   Como ambos sistemas no interactúan fuertemente, cada microestado de $A$ puede coexistir con cualquiera de los microestados de $B$:  
   $$\Omega_{AB} = \Omega_A \cdot \Omega_B$$

Buscamos una función continua y diferenciable $S = f(\Omega)$ tal que:
$$f(\Omega_A \cdot \Omega_B) = f(\Omega_A) + f(\Omega_B)$$

Derivando parcialmente con respecto a $\Omega_A$:
$$\Omega_B\, f'(\Omega_A \Omega_B) = f'(\Omega_A)$$

Multiplicando por $\Omega_A$ en ambos miembros:
$$(\Omega_A \Omega_B)\, f'(\Omega_A \Omega_B) = \Omega_A\, f'(\Omega_A)$$

Dado que el miembro izquierdo depende únicamente del producto combinado y el derecho únicamente de $\Omega_A$, la expresión $\Omega f'(\Omega)$ debe ser una constante universal positiva. Denominando a esta constante $k_B$ (constante de Boltzmann):
$$\Omega \frac{df}{d\Omega} = k_B \implies df = k_B \frac{d\Omega}{\Omega}$$

Integrando directamente se obtiene la célebre fórmula inscrita en la tumba de Boltzmann:
$$\boxed{S = k_B \ln \Omega}$$

donde $k_B \approx 1.3806 \times 10^{-23}\text{ J/K}$. La constante aditiva de integración se anula al fijar que para un estado puro fundamental no degenerado ($\Omega = 1$), la entropía sea estrictamente cero.

### 3.2. La Paradoja de Gibbs y la Indistinguibilidad Cuántica Premonitoria
Al calcular el volumen del espacio de fases para un gas ideal monoatómico clásico de $N$ partículas en un volumen $V$, la mecánica clásica consideraba a los átomos como esferas distinguibles (con "etiquetas" individuales). Esto conducía a una función del tipo $\Omega \propto V^N$, de modo que la entropía resultaba:
$$S_{\text{clásica}} = N k_B \ln V + f(E, N)$$

Si un recipiente de volumen $2V$ con un tabique intermedio contiene $N$ partículas del mismo gas a igual temperatura y presión a cada lado, la entropía inicial es $S_1 + S_2 = 2 S(T, V, N)$. Al retirar el tabique, los gases se mezclan espontáneamente. La fórmula clásica predecía un aumento de entropía espurio denominado **entropía de mezcla**:
$$\Delta S_{\text{mezcla}} = 2N k_B \ln(2V) - 2N k_B \ln V = 2 N k_B \ln 2 > 0$$

Esto constituía una paradoja inaceptable: retirar y reinsertar un tabique imaginario entre porciones del mismo gas generaría entropía de la nada, violando el principio de que la entropía es una propiedad extensiva que no varía si no se altera el estado termodinámico macroscópico.

J. Willard Gibbs (1902) resolvió esta contradicción introduciendo un principio de profunda resonancia cuántica: **las partículas materiales de la misma especie son rigurosamente idénticas e indistinguibles**. Intercambiar dos moléculas idénticas no produce un nuevo microestado físico. Por ende, el número de configuraciones en el espacio de fases debe dividirse entre el número de permutaciones posibles ($N!$):

$$\Omega_{\text{corregido}} = \frac{1}{N!\, h^{3N}} \int \prod_{i=1}^N d^3q_i\, d^3p_i$$

donde $h$ es la constante de Planck, que establece el volumen mínimo elemental de cada celda en el espacio de fases tridimensional ($h^3$). Aplicando la aproximación de Stirling ($\ln N! \approx N \ln N - N$):
$$\ln\left(\frac{V^N}{N!}\right) \approx N \ln V - N \ln N + N = N \ln\left(\frac{V}{N}\right) + N$$

La dependencia pasa de ser el volumen total no extensivo ($\ln V$) a la densidad volumétrica por partícula $\ln(V/N)$, garantizando que para gases idénticos $\Delta S_{\text{mezcla}} = 0$. Esta deducción condujo en 1912 a la ecuación de Sackur-Tetrode para la entropía absoluta.

---

## 4. Colectividades Estadísticas y la Función de Partición Canónica

Gibbs formalizó el tratamiento microscópico mediante el concepto de **ensamble o colectividad**: un conjunto estadístico de réplicas virtuales del sistema bajo condiciones de contorno definidas:

| Colectividad | Condiciones de Contorno | Intercambio con el Entorno | Potencial Termodinámico Vinculado |
|---|---|---|---|
| **Microcanónica** | Energía $E$, Volumen $V$, Partículas $N$ fijos | Aislado (sin energía ni materia) | Entropía: $S(E, V, N) = k_B \ln \Omega$ |
| **Canónica** | Temperatura $T$, Volumen $V$, Partículas $N$ fijos | Intercambia energía térmica con un baño | Energía Libre de Helmholtz: $F(T, V, N) = -k_B T \ln Z$ |
| **Gran Canónica** | Temperatura $T$, Volumen $V$, Potencial químico $\mu$ fijos | Intercambia energía y partículas | Gran Potencial: $\Phi_G(T, V, \mu) = -k_B T \ln \Xi$ |

En la colectividad canónica (un gas a temperatura constante $T$), la probabilidad $P_i$ de encontrar al sistema en un estado cuántico $i$ con energía $E_i$ viene modulada por el factor de Boltzmann:
$$P_i = \frac{e^{-\beta E_i}}{Z}, \qquad \beta = \frac{1}{k_B T}$$

donde la constante de normalización $Z$ es la **Función de Partición Canónica**:
$$\boxed{Z(T, V, N) = \sum_i e^{-\beta E_i}}$$

El puente maestro entre el ensamble microscópico y la termodinámica de la Clase 05 se establece a través de la **Energía Libre de Helmholtz** $F$:
$$\boxed{F = -k_B T \ln Z}$$

A partir de $F$, todas las variables térmicas del sistema se derivan mediante cálculo diferencial simple:
- **Energía interna:** $U = -\frac{\partial \ln Z}{\partial \beta}$
- **Presión:** $P = -\left(\frac{\partial F}{\partial V}\right)_T = k_B T \left(\frac{\partial \ln Z}{\partial V}\right)_T$
- **Entropía:** $S = -\left(\frac{\partial F}{\partial T}\right)_{V, N}$

---

## 5. La Demostración Irrefutable del Átomo: La Teoría de Einstein del Movimiento Browniano (1905)

En su célebre artículo de mayo de 1905, Albert Einstein ideó el experimento crucial que forzaría a los escépticos a aceptar la existencia real de los átomos. Razonó que una partícula coloidal suspendida en un fluido (como una espora visible al microscopio de radio $r$) no es más que una molécula gigante en equilibrio térmico con el solvente.

Debido a la naturaleza discreta del fluido, los impactos moleculares térmicos que recibe la partícula en sus distintos costados no se cancelan exactamente en todo instante; las **fluctuaciones estadísticas microscópicas** generan impulsos netos aleatorios.

```
                         EQUILIBRIO DINÁMICO DE EINSTEIN
                                        │
         ┌──────────────────────────────┴──────────────────────────────┐
         ▼                                                             ▼
   Flujo Difusivo Espontáneo (Clase 03)              Flujo de Arrastre Viscoso (Clase 03)
   Ley de Fick por gradiente osmótico:                Fuerza de Stokes: F = 6π η r v
   J_dif = -D · (∂n / ∂x)                             J_arrastre = n · μ · F_osm = -μ k_B T (∂n / ∂x)
         │                                                             │
         └──────────────────────────────┬──────────────────────────────┘
                                        ▼
                   Igualdad de Flujos en Equilibrio Estacionario:
                               D = μ · k_B · T = k_B · T / (6π η r)
                                        │
                                        ▼
                     Desplazamiento Cuadrático Medio Observable:
                             ⟨x²(t)⟩ = 2 D t = [ R T / (3π η r N_A) ] · t
```

### 5.1. Deducción de la Relación de Fluctuación-Disipación
Consideremos una columna de partículas coloidales suspendidas en un líquido de viscosidad dinámica $\eta$ a temperatura $T$.
1. Si existe un gradiente de concentración $\frac{\partial n}{\partial x}$, la presión osmótica de Van 't Hoff ($P_{\text{osm}} = n k_B T$) produce una fuerza impulsora difusiva por partícula igual a:
   $$f_{\text{osm}} = -\frac{1}{n} \frac{\partial P_{\text{osm}}}{\partial x} = -\frac{k_B T}{n} \frac{\partial n}{\partial x}$$
2. Esta fuerza genera una velocidad de arrastre $v = \mu f_{\text{osm}}$, donde la movilidad hidrodinámica $\mu$ está dada por la inversa del coeficiente de fricción de Stokes deducido en la Clase 03: $\mu = \frac{1}{6\pi \eta r}$. El flujo correspondiente es:
   $$J_{\text{arrastre}} = n v = -\mu\, k_B T \frac{\partial n}{\partial x}$$
3. Por la Primera Ley de Fick (Clase 03), el flujo difusivo es $J_{\text{dif}} = -D \frac{\partial n}{\partial x}$.

En el estado de equilibrio dinámico estacionario, ambos flujos deben anularse mutuamente ($J_{\text{dif}} + J_{\text{arrastre}} = 0$):
$$-D \frac{\partial n}{\partial x} = -\frac{k_B T}{6\pi \eta r} \frac{\partial n}{\partial x}$$

Igualando los coeficientes de transporte, se obtiene la célebre **Relación de Einstein-Smoluchowski**:
$$\boxed{D = \frac{k_B T}{6\pi \eta r}}$$

Esta fórmula representa el primer ejemplo histórico del **Teorema de Fluctuación-Disipación**: vincula un parámetro puramente disipativo e irreversible macroscópico (la viscosidad del fluido $\eta$) con la intensidad de las fluctuaciones térmicas moleculares ($k_B T$ y el coeficiente de difusión $D$).

### 5.2. Desplazamiento Cuadrático Medio
A partir de la solución gaussiana de la ecuación de difusión (analizada en la Clase 03 mediante Fokker-Planck), el promedio del desplazamiento lineal en una dirección es cero ($\langle x(t)\rangle = 0$), pero su dispersión o **desplazamiento cuadrático medio** crece de forma estrictamente lineal con el tiempo:
$$\langle x^2(t)\rangle = 2\, D\, t$$

Sustituyendo la constante de difusión y expresando $k_B$ en términos de la constante molar $R$ y el número de Avogadro $N_A$ ($k_B = R/N_A$):

$$\boxed{\langle x^2(t)\rangle = \frac{R T}{3\pi \eta r N_A}\, t}$$

Despejando el número de Avogadro $N_A$:

$$\boxed{N_A = \frac{R T}{3\pi \eta r}\left(\frac{t}{\langle x^2(t)\rangle}\right)}$$

Todas las cantidades en el miembro derecho son directamente medibles en un laboratorio con instrumental común: la constante de los gases $R$, la temperatura absoluta $T$, la viscosidad del líquido $\eta$, el radio coloidal $r$ y el desplazamiento medio $\langle x^2\rangle$ observado a intervalos de tiempo $t$ bajo un microscopio con escala micrométrica.

---

## 6. Ejercicios Numéricos y Pequeñas Demostraciones Prácticas

### Ejercicio 1: Cálculo Estadístico de la Entropía en Expansión Libre
*Enunciado:* Un mol de gas ideal monoatómico duplica su volumen ($V_2 = 2 V_1$) mediante una expansión libre adiabática e irreversible en el vacío. Demuestre que la fórmula estadística de Boltzmann reproduce con exactitud el resultado termodinámico de la Clase 05.

*Resolución:*  
1. **Enfoque Termodinámico (Clase 05):**  
   Al ser una expansión libre adiabática contra el vacío, $W = 0$ y $Q = 0 \implies \Delta U = 0 \implies T_1 = T_2$. La variación de entropía macroscópica de Clausius es:
   $$\Delta S = n R \ln\left(\frac{V_2}{V_1}\right) = (1\text{ mol}) R \ln(2) \approx (8.314\text{ J/mol}\cdot\text{K})(0.6931) \approx 5.76\text{ J/K}$$
2. **Enfoque Estadístico de Boltzmann (Clase 06):**  
   Para $N$ partículas independientes, la probabilidad de que una partícula esté en el volumen duplicado se duplica; por tanto, el número de microestados espaciales accesibles escala como $\Omega_2 / \Omega_1 = (V_2 / V_1)^N = 2^N$. Aplicando la fórmula de Boltzmann:
   $$\Delta S = k_B \ln \Omega_2 - k_B \ln \Omega_1 = k_B \ln\left(\frac{\Omega_2}{\Omega_1}\right) = k_B \ln(2^N) = N k_B \ln 2$$
   Como $N = N_A$ para un mol y $N_A k_B = R$:
   $$\Delta S = R \ln 2 \approx 5.76\text{ J/K}$$
   *Conclusión:* La equivalencia matemática entre la integral macroscópica de Clausius y el recuento combinatorio de microestados de Boltzmann queda rigurosamente demostrada.

---

### Ejercicio 2: Determinación del Número de Avogadro emulando a Jean Perrin
*Enunciado:* En un experimento coloidal con partículas esféricas de gomaguta suspendidas en agua a $T = 293.15\text{ K}$ ($20\text{ °C}$), se dispone de los siguientes datos experimentales:
- Radio medio de las partículas: $r = 0.50\,\mu\text{m} = 5.0 \times 10^{-7}\text{ m}$.
- Viscosidad dinámica del agua a $20\text{ °C}$: $\eta = 1.00 \times 10^{-3}\text{ Pa}\cdot\text{s}$.
- Constante universal de los gases: $R = 8.314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.
- Desplazamiento cuadrático medio medido en el plano tras un tiempo de observación $t = 30\text{ s}$: $\langle x^2\rangle = 2.60 \times 10^{-11}\text{ m}^2$ (correspondiente a una desviación típica $\sqrt{\langle x^2\rangle} \approx 5.1\,\mu\text{m}$).

Calcule el coeficiente de difusión $D$ y determine el valor empírico del número de Avogadro $N_A$.

*Resolución:*  
1. Cálculo del coeficiente de difusión experimental:
   $$D = \frac{\langle x^2\rangle}{2t} = \frac{2.60 \times 10^{-11}\text{ m}^2}{2(30\text{ s})} \approx 4.333 \times 10^{-13}\text{ m}^2/\text{s}$$
2. Cálculo de la constante de Boltzmann:
   De la relación de Einstein, $k_B T = 6\pi \eta r D$:
   $$k_B = \frac{6\pi \eta r D}{T} = \frac{6\pi (1.00 \times 10^{-3}\text{ Pa}\cdot\text{s})(5.0 \times 10^{-7}\text{ m})(4.333 \times 10^{-13}\text{ m}^2/\text{s})}{293.15\text{ K}}$$
   $$k_B \approx \frac{4.084 \times 10^{-21}\text{ J}}{293.15\text{ K}} \approx 1.393 \times 10^{-23}\text{ J/K}$$
3. Determinación del número de Avogadro:
   $$N_A = \frac{R}{k_B} = \frac{8.314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}}{1.393 \times 10^{-23}\text{ J/K}} \approx 5.97 \times 10^{23}\text{ mol}^{-1} \approx 6.0 \times 10^{23}\text{ mol}^{-1}$$
*Conclusión:* Este cálculo reproduce fielmente las mediciones cuantitativas que le valieron a Jean Perrin el Premio Nobel de Física en 1926, demostrando que mediante la observación micrométrica del movimiento browniano es posible contar indirectamente los átomos de la materia.

---

## 7. Conclusiones del Aprendizaje

1. **Unificación Epistemológica de la Termodinámica:** La Clase 06 consolida la física térmica al demostrar que las leyes macroscópicas universales descubiertas entre los siglos XVII y XIX no contradicen el mecanicismo newtoniano, sino que representan su manifestación estadística en ensambles de $10^{23}$ partículas.
2. **Naturaleza Probabilística de la Irreversibilidad:** La entropía de Clausius deja de ser un misterio abstracto para convertirse en el recuento cuantitativo de microestados accesibles en el espacio de fases: $S = k_B \ln \Omega$. Los sistemas evolucionan espontáneamente hacia el equilibrio no porque sea mecánicamente imposible retornar, sino porque la probabilidad de retroceso espontáneo es infinitesimalmente nula.
3. **El Triunfo Ontológico del Átomo:** La relación de Einstein-Smoluchowski ($D = \frac{k_BT}{6\pi\eta r}$) y su verificación por Jean Perrin terminaron definitivamente con el escepticismo antiatomista de Mach y Ostwald, estableciendo la realidad material del átomo y sentando las bases experimentales para la física cuántica moderna (Módulo 02).

---

## 8. Cinco Preguntas Originales de Profundización

*(Preguntas analíticas y conceptuales inéditas sobre la materia de la clase, formuladas para expandir el debate físico más allá de lo expuesto en la pizarra)*

### Pregunta 1: ¿Qué ocurre con la trayectoria browniana a escalas de tiempo extremadamente cortas ($t \to 0$)?
*Fundamentación:* La fórmula de Einstein predice que la velocidad instantánea media cuadrática sería $\langle v^2\rangle = \frac{\langle x^2\rangle}{t^2} = \frac{2D}{t} \to \infty$ cuando $t \to 0$, lo cual viola la conservación de la energía y la mecánica clásica. ¿A partir de qué escala temporal característica (tiempo de relajación de Langevin $\tau = M / 6\pi\eta r$) el movimiento deja de ser difusivo ($\langle x^2\rangle \propto t$) y pasa a ser balístico newtoniano ($\langle x^2\rangle \propto t^2$)?

### Pregunta 2: ¿Por qué la corrección de Gibbs ($1/N!$) solo es válida en el régimen clásico de altas temperaturas y bajas densidades?
*Fundamentación:* Gibbs dividió el volumen del espacio de fases entre $N!$ asumiendo que la probabilidad de que dos partículas ocupen exactamente la misma celda elemental $h^3$ es despreciable. ¿En qué condiciones físicas de temperatura y densidad degenerada falla esta aproximación, obligando a sustituir la estadística de Boltzmann por las estadísticas cuánticas de Bose-Einstein o Fermi-Dirac?

### Pregunta 3: ¿Cómo se reconcilia la fórmula de Boltzmann $S = k_B \ln \Omega$ con el Teorema de Liouville del espacio de fases?
*Fundamentación:* El Teorema de Liouville demuestra que el volumen de cualquier región en el espacio de fases se conserva rígidamente bajo la evolución hamiltoniana determinista ($d\Gamma / dt = 0$). Si el volumen de fase total no puede aumentar mecánicamente, ¿cómo se justifica rigurosamente el aumento temporal de la entropía estadística? (Introducción al concepto de *grueso grano* o *coarse-graining*).

### Pregunta 4: ¿Es aplicable la relación de Einstein $D = \frac{k_B T}{6\pi \eta r}$ si el fluido solvente no es Newtoniano o presenta viscoelasticidad?
*Fundamentación:* La deducción de Einstein utiliza de forma crítica la ley de arrastre de Stokes para fluidos continuos, lineales e isotrópicos. ¿Cómo se modifica el teorema de fluctuación-disipación cuando la partícula coloidal se difunde en medios biológicos complejos (como el citoplasma celular), dando origen al fenómeno de difusión anómala o subdifusión ($\langle x^2(t)\rangle \propto t^\alpha$ con $\alpha < 1$)?

### Pregunta 5: ¿Cuál es el significado físico de que la energía libre de Helmholtz $F = -k_B T \ln Z$ actúe como función generatriz de cumulares en física estadística?
*Fundamentación:* En la clase se observó que la primera derivada de $\ln Z$ entrega la energía media $\langle E\rangle$. ¿Qué información física sobre las fluctuaciones térmicas espontáneas ($\Delta E^2 = \langle E^2\rangle - \langle E\rangle^2$) contiene la segunda derivada $\frac{\partial^2 \ln Z}{\partial \beta^2}$, y cómo se relaciona directamente con la capacidad calorífica $C_V$ del sistema?

---

## 9. Referencias Bibliográficas

1. **Weinberg, Steven (2021).** *Foundations of Modern Physics*. Cambridge University Press. Cap. 2: "Thermodynamics and Kinetic Theory", §2.4 (pp. 33–42) y §2.6 (pp. 53–60).
2. **Oliva Zapata, Julio E. (2026).** *Apuntes y transcripciones de Clase 06: Mecánica Estadística, Ensamble Canónico y Movimiento Browniano*. Diplomado en Física Moderna, Universidad de Concepción.
3. **Boltzmann, Ludwig (1877).** *Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung*. Wiener Berichte, 76, 373–435.
4. **Einstein, Albert (1905).** *Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen*. Annalen der Physik, 17(8), 549–560.
5. **Perrin, Jean (1909).** *Mouvement brownien et réalité moléculaire*. Annales de Chimie et de Physique, 18, 5–114.
6. **Reif, Frederick (1965).** *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 1, 3 y 15.
