# Análisis de Clase 04 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Encabezado

| Campo | Detalle |
|-------|---------|
| **Módulo** | Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1) |
| **Docente** | Prof. Julio Eduardo Oliva Zapata |
| **Fecha** | 5 de junio de 2026 |
| **Duración** | 3 h 6 min |
| **Resultados de aprendizaje** | Variables y ecuaciones de estado; superficie de fase del gas ideal y real (Van der Waals); compresibilidad isotérmica y estabilidad de fases; transiciones de fase líquido–gas; procesos cuasi estáticos vs. repentinos; capacidades caloríficas $C_V$ y $C_P$; primer principio de la termodinámica; paradoja de Gibbs |

---

## Fuentes Utilizadas

- **Transcripción de video:** `Clase_04/grabacion/Clase del Diplomado de Física Moderna.docx` (fuente principal, ~136 KB, procesada en su totalidad).  
- **Diapositivas:** `Clase_04/Clase 4 preliminar.pdf` y `Clase_04/Notas tablet clase 4.pdf`.  
- **Libro de referencia central:** Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021).  
- **Bibliografía de apoyo:** Callen, *Thermodynamics and an Introduction to Thermostatistics* (Wiley, 1985); Zemansky & Dittman, *Heat and Thermodynamics* (McGraw-Hill, 1997); Fermi, *Thermodynamics* (Dover, 1956).

---

## 1. Motivación: ¿qué hemos construido y hacia dónde vamos?

*Fuente: Transcripción, minutos 0–10. Fuente complementaria: Weinberg, cap. 1.*

El Prof. Oliva recapituló los tres pilares construidos en las sesiones anteriores:

1. **Fenomenología del gas ideal:** la ley $PV = Nk_BT$ como síntesis de las leyes de Boyle, Charles y Gay-Lussac.
2. **Modelo microscópico:** la temperatura como medida de la energía cinética promedio de traslación; distribución de Maxwell–Boltzmann para velocidades.
3. **Movimiento browniano:** evidencia de la naturaleza discreta de la materia; difusión como consecuencia estadística de los choques moleculares.

En la Clase 04, el enfoque se desplaza hacia la **termodinámica macroscópica**: cómo se relacionan entre sí las variables macroscópicas (presión, volumen, temperatura, entropía) sin necesidad de recurrir al nivel microscópico; qué procesos están permitidos; y cómo predecir el comportamiento de fases (gas, líquido, sólido).

---

## 2. Variables termodinámicas de estado

*Fuente: Transcripción, minutos 10–25. Fuente complementaria: Callen, cap. 1; Zemansky, cap. 2.*

El Prof. Oliva clasificó las **variables de estado** de un sistema termodinámico —aquellas que se pueden medir en cualquier punto del sistema en equilibrio— como:

| Variable | Símbolo | Descripción |
|----------|---------|-------------|
| Número de partículas | $N$ | Conteo de constituyentes |
| Volumen | $V$ | Extensión geométrica del sistema |
| Presión | $P$ | Fuerza por unidad de área |
| Temperatura | $T$ | Medida de la energía cinética promedio de traslación |
| Entropía termodinámica | $S$ | Medida del desorden; requiere derivación adicional |
| Capacidad calorífica a $V$ cte. | $C_V$ | Costo energético de subir la temperatura a $V$ fijo |
| Capacidad calorífica a $P$ cte. | $C_P$ | Costo energético de subir la temperatura a $P$ fija |
| Compresibilidad isotérmica | $\kappa_T$ | Respuesta del volumen ante cambios de presión a $T$ fija |

Las capacidades caloríficas se expresan en J/K antes de dividir por la cantidad de materia, y en J/(mol·K) o J/(kg·K) cuando se dividen por ella (calores específicos).

---

## 3. Equilibrio termodinámico y ecuación de estado

*Fuente: Transcripción, minutos 15–45. Fuente complementaria: Callen, cap. 2; Fermi, cap. 1.*

### 3.1 Definición de equilibrio

Un sistema está en **equilibrio termodinámico** si y solo si sus variables macroscópicas son uniformes en todo el sistema:
- Temperatura uniforme: $T(\mathbf{r}) = \text{cte}$.
- Presión uniforme: $P(\mathbf{r}) = \text{cte}$.
- Densidad uniforme: $\rho(\mathbf{r}) = \text{cte}$.

### 3.2 Teorema de la ecuación de estado

En equilibrio, existe una relación funcional (no arbitraria) entre las variables de estado:

$$\boxed{f(P, V, T, N) = 0.}$$

Esta relación se llama **ecuación de estado** (o **superficie de fase**). Si se fija $N$, la ecuación de estado define una superficie en el espacio tridimensional $(P, V, T)$: cada punto sobre esta superficie es un **estado de equilibrio posible**. Ningún punto fuera de esta superficie corresponde a un estado de equilibrio.

**Ejemplo —gas ideal:** la ecuación de estado es

$$PV = Nk_BT \implies T = \frac{PV}{Nk_B}.$$

Con $N$ fijo, $T$ es una función de $P$ y $V$ que define la superficie de Van der Waals del gas ideal —una hoja hiperbólica.

### 3.3 Interpretación geométrica de la superficie de fase

El Prof. Oliva exploró la superficie de fase del gas ideal mediante el sistema de álgebra simbólica Mathematica:

- **Corte a $V = \text{cte}$:** la relación $P \propto T$ es una recta (ley de Charles).
- **Corte a $T = \text{cte}$ (isoterma):** la relación $P \propto 1/V$ es una hipérbola (ley de Boyle).
- **Cambiar $N$:** solo reescala el eje de presión, sin alterar la forma de la superficie.

---

## 4. La ecuación de Van der Waals y las transiciones de fase

*Fuente: Transcripción, minutos 45–100. Fuente complementaria: Weinberg, sec. 1.5; Zemansky, cap. 15.*

### 4.1 Ecuación de Van der Waals

La ley de los gases ideales supone partículas puntuales sin interacciones. Para gases reales se introduce la corrección de Van der Waals (1873):

$$\boxed{\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT,}$$

donde:
- $a > 0$: cuantifica las **interacciones atractivas** entre moléculas (corrección a la presión).
- $b > 0$: cuantifica el **volumen excluido** por molécula (corrección al volumen accesible).

Despejando $P$:

$$P = \frac{Nk_BT}{V - Nb} - \frac{aN^2}{V^2}.$$

### 4.2 Isotermas de Van der Waals y transición de fases

A temperatura suficientemente alta ($T > T_c$, temperatura crítica), las isotermas de Van der Waals son cualitativamente similares a las del gas ideal (monotónicamente decrecientes). Al bajar $T$ por debajo de $T_c$, las isotermas adquieren una **ondulación** (máximo seguido de un mínimo local), lo que da lugar a tres posibles valores de $V$ para una presión dada.

**Los tres volúmenes:**
1. $V_1$ (pequeño): fase **líquida** (alta densidad).
2. $V_2$ (intermedio): fase **inestable** (debe descartarse).
3. $V_3$ (grande): fase **gaseosa** (baja densidad).

### 4.3 Compresibilidad isotérmica y estabilidad

La **compresibilidad isotérmica** se define como:

$$\kappa_T \equiv -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T.$$

El signo negativo es convencional: en condiciones normales, comprimir ($\Delta V < 0$) aumenta la presión ($\Delta P > 0$), de modo que $(\partial V/\partial P)_T < 0$ y $\kappa_T > 0$.

- **Fase estable:** $\kappa_T > 0$ (al comprimir, la presión sube: el sistema resiste la compresión).
- **Fase inestable:** $\kappa_T < 0$ (al comprimir, la presión baja: el sistema colapsa por compresión, proceso runaway). La rama intermedia de Van der Waals tiene $\kappa_T < 0$ y debe descartarse.

**Interpretación macroscópica.** En la fase inestable: comprimir un poco → la presión baja → el sistema se sigue comprimiendo → inestabilidad. Análogamente, expandir un poco → la presión sube → el sistema sigue expandiéndose → también inestable.

### 4.4 Regla de las áreas de Maxwell

A una temperatura $T < T_c$ dada, ¿a qué presión exacta ocurre la transición de fase líquido–gas? La respuesta la da la **regla de las áreas de Maxwell**: la transición ocurre a la presión $P^*$ tal que las áreas encerradas por la isoterma por encima y por debajo de $P^*$ son iguales. Geométricamente:

$$\int_{V_1}^{V_3} [P(\text{isoterma}) - P^*]\, dV = 0.$$

**Interpretación termodinámica:** esta condición garantiza que la energía libre de Gibbs del líquido es igual a la del gas en la presión de coexistencia $P^*$, cumpliendo el criterio de equilibrio entre fases.

### 4.5 Temperatura crítica, presión crítica y punto crítico

El punto crítico es aquel en que el máximo y el mínimo de la isoterma de Van der Waals se fusionan: el punto de inflexión en la curva $P(V)$. Se determina mediante:

$$\left(\frac{\partial P}{\partial V}\right)_T = 0, \qquad \left(\frac{\partial^2 P}{\partial V^2}\right)_T = 0.$$

Resolviendo para el gas de Van der Waals:

$$T_c = \frac{8a}{27k_Bb}, \qquad P_c = \frac{a}{27b^2}, \qquad V_c = 3Nb.$$

Para el agua: $T_c = 374$ °C, $P_c = 221$ atm.

---

## 5. Diagrama de fase del agua

*Fuente: Transcripción, minutos 100–130. Fuente complementaria: Blog de Francis Villatoro.*

El Prof. Oliva presentó el **diagrama de fase del agua** ($P$ vs. $T$), destacando:

### 5.1 Regiones del diagrama

| Región | Fase | Condiciones |
|--------|------|-------------|
| Baja $T$, cualquier $P$ razonable | Sólido (hielo) | Átomos en red cristalina |
| $T$ y $P$ intermedias | Líquido | Moléculas móviles pero cohesionadas |
| Alta $T$ y baja $P$ | Gas (vapor) | Moléculas en traslación libre |
| $T > 374$ °C, $P > 221$ atm | Fluido supercrítico | Propiedades intermedias entre líquido y gas |

### 5.2 Punto triple

El **punto triple** del agua es la única combinación $(T, P)$ en la que las tres fases (sólido, líquido, gas) coexisten en equilibrio:

$$T_\text{triple} = 273{,}16 \text{ K} = 0{,}01 \text{ °C}, \qquad P_\text{triple} = 611{,}7 \text{ Pa} \approx 0{,}006 \text{ atm}.$$

Es el punto fundamental en la definición de la escala de temperatura Kelvin y del SI.

### 5.3 Anomalía del agua

La pendiente de la línea de coexistencia sólido–líquido del agua es **negativa** (aumentar la presión disminuye el punto de fusión), al contrario que la mayoría de los líquidos. Esto se debe a que el hielo es menos denso que el agua líquida a la misma temperatura: al comprimir el sólido, es energéticamente favorable convertirlo en líquido.

### 5.4 Fluido supercrítico

Por encima del punto crítico no existe frontera nítida entre líquido y gas: el fluido supercrítico presenta simultáneamente densidades moderadas (típicas de líquidos) y la capacidad de expandirse para llenar su contenedor (típica de gases). Tiene aplicaciones en extracción de cafeína, cromatografía, y procesado de materiales.

### 5.5 Fases sólidas del agua

Se han identificado experimentalmente **20 formas cristalinas del hielo** (hielo I a hielo XX), con distintos arreglos de la red de puentes de hidrógeno. Los cálculos basados en principios de enlace sugieren hasta ~75.000 posibles variantes cristalinas. El agua es un sistema aparentemente simple ($\mathrm{H_2O}$) que exhibe una riqueza fenomenológica extraordinaria.

---

## 6. Procesos termodinámicos

*Fuente: Transcripción, minutos 130–160. Fuente complementaria: Fermi, cap. 2; Callen, cap. 4.*

### 6.1 Proceso cuasi estático

Un **proceso cuasi estático** es aquel en que el sistema se mueve de un estado de equilibrio a otro de manera lo suficientemente lenta como para que en todo instante intermedio el sistema esté en equilibrio:

$$\text{cuasi estático} \iff \text{en todo instante } (P, V, T) \in \text{superficie de fase.}$$

Matemáticamente: es una curva continua sobre la superficie de fase, parametrizada por el tiempo.

**Condición física:** el tiempo característico del proceso debe ser mucho mayor que el tiempo de termalización del sistema. En un gas, el tiempo de termalización es del orden del tiempo entre colisiones ($\sim 10^{-10}$ s a presión estándar).

**Tipos de procesos cuasi estáticos:**

| Proceso | Condición | Nombre |
|---------|-----------|--------|
| $T = \text{cte}$ | Isotérmico | temperatura constante |
| $P = \text{cte}$ | Isobárico | presión constante |
| $V = \text{cte}$ | Isocórico | volumen constante |
| Sin intercambio de calor | Adiabático | $\delta Q = 0$ |
| $S = \text{cte}$ | Isentrópico | entropía constante |

### 6.2 Proceso no cuasi estático (repentino)

Un **proceso repentino** parte y termina en estados de equilibrio, pero los estados intermedios **no están en equilibrio**: no es posible asignarles valores únicos de $P$, $T$, $\rho$.

**Ejemplo:** expansión de Joule (expansión libre). Un gas confinado en volumen $V_1$ se expande súbitamente al vacío hasta un volumen $V_1 + V_2$. Durante la expansión, el gas no está en equilibrio. En el estado final (largo tiempo después), el gas vuelve al equilibrio.

**Representación gráfica:** los libros de texto representan los procesos no cuasi estáticos con líneas punteadas o rayas (indicando que la curva no pertenece a la superficie de fase); se trata de un abuso pictórico pero convencional.

---

## 7. Capacidades caloríficas y primer principio de la termodinámica

*Fuente: Transcripción, minutos 145–200. Fuente complementaria: Zemansky, cap. 4; Callen, cap. 5.*

### 7.1 Historia del calórico y la energía

Históricamente, el calor fue concebido como un fluido (el **calórico**) que se transfería de un cuerpo caliente a uno frío. Este modelo —hoy sabemos que incorrecto en su ontología— fue extraordinariamente exitoso: sustentó la Revolución Industrial y permitió predecir cuantitativamente el funcionamiento de máquinas de vapor. La interpretación moderna es que el **calor es energía transferida por diferencia de temperatura**.

### 7.2 Definición de las capacidades caloríficas

**Capacidad calorífica a volumen constante** $C_V$:

Si se transfiere una cantidad infinitesimal de calor $\delta Q$ al sistema manteniendo $V$ fijo, la temperatura cambia en $dT$:

$$\delta Q_V = C_V\, dT, \implies C_V = \left(\frac{\delta Q}{dT}\right)_V.$$

**Capacidad calorífica a presión constante** $C_P$:

$$\delta Q_P = C_P\, dT, \implies C_P = \left(\frac{\delta Q}{dT}\right)_P.$$

**Unidades:** $[C_V] = [C_P] = $ J/K. Los **calores específicos** $c_V$ y $c_P$ se obtienen dividiendo por la masa o cantidad de materia: unidades J/(kg·K) o J/(mol·K).

### 7.3 El calor NO es una variable de estado

El Prof. Oliva subrayó una distinción conceptual fundamental:

- **$\delta Q$** (con barrita): **cantidad infinitesimal de calor transferida** en un proceso. No es un "cambio en el calor" porque el calor no "pertenece" a un sistema; solo tiene sentido en el contexto de un proceso. Por eso se escribe con la barrita.
- **$dT$**: **cambio infinitesimal de temperatura**. La temperatura sí es una variable de estado; tiene sentido hablar de temperatura antes y después de un proceso.

**Consecuencia matemática.** En un ciclo cerrado:
$$\oint dT = 0 \quad \text{(variable de estado)}, \qquad \oint \delta Q \neq 0 \text{ en general (no variable de estado)}.$$

Esta distinción es la que clasifica a $\delta Q$ como un **diferencial inexacto**.

### 7.4 Trabajo y primer principio

Análogamente, el **trabajo** $\delta W$ realizado por el sistema en un proceso cuasi estático de expansión es:

$$\delta W = P\, dV.$$

El trabajo tampoco es una variable de estado; solo tiene sentido en el contexto de un proceso.

El **primer principio de la termodinámica** establece la conservación de energía:

$$\boxed{dU = \delta Q - \delta W = \delta Q - P\, dV,}$$

donde $U$ es la **energía interna** del sistema, que sí es una variable de estado. Aunque $\delta Q$ y $\delta W$ son individualmente diferenciales inexactos, su diferencia $dU$ es un diferencial exacto.

**Interpretación física.** La energía interna del gas aumenta si se le transfiere calor (energía entra), y disminuye si el gas realiza trabajo mecánico sobre el entorno (energía sale como trabajo de expansión).

### 7.5 Predicción microscópica de $C_V$: gas ideal monoatómico

Para un gas ideal monoatómico (partículas con solo 3 grados de libertad traslacionales):

$$U = N \cdot \frac{3}{2}k_BT \implies C_V = \left(\frac{\partial U}{\partial T}\right)_V = \frac{3}{2}Nk_B.$$

En términos molares:

$$C_{V,m} = \frac{3}{2}R = 12{,}47 \text{ J/(mol·K)}.$$

Este resultado puede verificarse experimentalmente con gases nobles (He, Ne, Ar) a temperatura ambiente.

---

## 8. Relación entre $C_P$ y $C_V$: diferencia de Mayer

*Fuente: Transcripción, minutos 190–220. Fuente complementaria: Zemansky, cap. 4; Callen, sec. 3.2.*

### 8.1 Derivación de la relación de Mayer

Para un gas ideal, $PV = Nk_BT$. En un proceso isobárico ($P = \text{cte}$), parte del calor absorbido se convierte en trabajo de expansión:

$$\delta Q_P = dU + P\, dV = C_V\, dT + P\, dV.$$

Diferenciando $PV = Nk_BT$ a $P$ constante: $P\, dV = Nk_B\, dT$. Sustituyendo:

$$C_P\, dT = C_V\, dT + Nk_B\, dT,$$

$$\boxed{C_P - C_V = Nk_B = nR,}$$

donde $n$ es el número de moles y $R = 8{,}314$ J/(mol·K). Esta relación se conoce como la **identidad de Mayer** (Julius Robert von Mayer, 1842).

**Interpretación:** $C_P > C_V$ siempre (para gases), porque al calentar a presión constante parte del calor absorbido se invierte en expandir el gas (trabajo $P\, dV$), y el resto en aumentar la temperatura. A volumen constante, **todo** el calor va a aumentar $U$ y por tanto $T$.

### 8.2 El cociente $\gamma = C_P/C_V$ (índice adiabático)

El cociente $\gamma = C_P/C_V$ aparece en la ecuación de la expansión adiabática (proceso cuasi estático sin intercambio de calor):

$$PV^\gamma = \text{cte} \quad (\text{proceso adiabático reversible}).$$

Para un gas ideal monoatómico: $\gamma = 5/3 \approx 1{,}67$.

Para un gas diatómico a temperatura ambiente (con rotación activada): $\gamma = 7/5 = 1{,}40$.

Esto se verificó experimentalmente: la velocidad del sonido en un gas es $c_s = \sqrt{\gamma P/\rho}$, que concuerda con las mediciones experimentales solo si se usa $\gamma$, no 1 (que correspondería a una expansión isotérmica).

---

## 9. La paradoja de Gibbs: incógnita pendiente

*Fuente: Transcripción, minutos 230–260. Fuente complementaria: Weinberg, sec. 3.5; Reif, sec. 9.7.*

### 9.1 Enunciado de la paradoja

Consideremos dos gases **idénticos** separados por una pared. Al retirar la pared, los gases se mezclan. Desde el punto de vista macroscópico, **nada cambia**: la presión, la temperatura y la densidad son las mismas antes y después.

Sin embargo, al calcular la entropía termodinámica, un cálculo ingenuo predice un **aumento de entropía** al mezclar los dos gases, incluso si son idénticos:

$$\Delta S_\text{mezcla} = 2Nk_B \ln 2 > 0.$$

Este resultado es **paradójico**: mezclar dos porciones del mismo gas no puede producir un aumento de desorden físico, ya que no hay diferencia observable entre el estado inicial y el final.

### 9.2 Resolución: la indistinguibilidad cuántica

La paradoja de Gibbs revela que la entropía termodinámica, tal como se calcula clásicamente, no puede entenderse sin un modelo microscópico. La resolución correcta requiere la **mecánica cuántica**:

Las partículas idénticas (electrones, protones, átomos del mismo isótopo) son **indistinguibles** a nivel cuántico: no existe etiqueta que permita distinguir la partícula $i$ de la $j$. Esto significa que al contar los estados microscópicos del sistema, hay que dividir por el número de permutaciones de partículas idénticas ($N!$), lo que modifica la entropía y elimina la paradoja:

$$S = Nk_B\left[\ln\frac{V}{N} + \frac{3}{2}\ln\frac{mk_BT}{2\pi\hbar^2} + \frac{5}{2}\right].$$

Esta expresión (ecuación de Sackur–Tetrode) es extensiva: $S(2N, 2V, T) = 2S(N, V, T)$, como debe ser, y predice $\Delta S_\text{mezcla} = 0$ para gases idénticos. La paradoja de Gibbs fue el primer indicio histórico de que los constituyentes de la materia son cuánticamente indistinguibles.

---

## 10. Síntesis histórica: de Carnot a Boltzmann

*Fuente: Transcripción, minutos 195–205. Fuente complementaria: Brush, *The Kind of Motion We Call Heat* (1976).*

| Año | Científico | Contribución |
|-----|-----------|-------------|
| 1824 | Sadi Carnot | Ciclo de Carnot; primer enunciado del rendimiento máximo de una máquina térmica |
| 1842 | Julius Mayer | Conservación de la energía (primer principio) |
| 1848 | William Thomson (Lord Kelvin) | Escala de temperatura absoluta |
| 1850 | Rudolf Clausius | Primer enunciado preciso del segundo principio |
| 1873 | Johannes van der Waals | Ecuación de estado para gases reales; predicción de la transición líquido–gas |
| 1876 | J. Willard Gibbs | Potenciales termodinámicos; paradoja de Gibbs |
| 1877 | Ludwig Boltzmann | $S = k_B \ln \Omega$; interpretación estadística de la entropía |

---

## Conclusiones de la Clase

1. **Variables termodinámicas de estado** son aquellas que caracterizan completamente el sistema en equilibrio (sin necesidad de conocer la historia); incluyen $P$, $V$, $T$, $N$, $U$, $S$.

2. **Ecuación de estado:** en equilibrio, existe una relación $f(P,V,T,N)=0$ que define una superficie en el espacio de variables termodinámicas; cada punto sobre ella es un estado de equilibrio posible.

3. **Gas ideal vs. real (Van der Waals):** el gas real exhibe isotermas con ondulación por debajo de $T_c$, lo que da lugar a coexistencia de fases (líquido–gas). La rama inestable ($\kappa_T < 0$) debe descartarse.

4. **Regla de las áreas de Maxwell:** la presión de transición de fase es aquella que iguala las áreas por encima y por debajo de la isoterma de Van der Waals.

5. **Fluido supercrítico:** por encima del punto crítico ($T_c$, $P_c$) no existe frontera líquido–gas; el fluido tiene propiedades de ambas fases.

6. **Proceso cuasi estático:** el sistema permanece en equilibrio en todo instante; se representa como curva continua sobre la superficie de fase.

7. **Calor y trabajo no son variables de estado**: solo tienen sentido en el contexto de un proceso (diferenciales inexactos $\delta Q$ y $\delta W$). La energía interna $U$ sí lo es (diferencial exacto $dU = \delta Q - \delta W$).

8. **Capacidades caloríficas:** $C_V$ (volumen constante) y $C_P$ (presión constante) cuantifican el costo energético de cambiar la temperatura. Para un gas ideal monoatómico: $C_V = \frac{3}{2}Nk_B$ y $C_P - C_V = Nk_B$ (identidad de Mayer).

9. **Diagrama de fase del agua:** exhibe punto triple ($0{,}01$ °C, $611{,}7$ Pa), punto crítico ($374$ °C, $221$ atm), ~20 fases sólidas distintas y fluido supercrítico.

10. **Paradoja de Gibbs:** mezclar dos gases idénticos no debería aumentar la entropía, pero el cálculo clásico predice $\Delta S > 0$. La resolución requiere la indistinguibilidad cuántica de las partículas idénticas, prefigurando la mecánica cuántica.

---

## Referencias Bibliográficas

### 1. Artículos científicos originales (fuentes primarias)

- Van der Waals, J. D. (1873). *Over de Continuïteit van den Gas en Vloeistoftoestand* [Tesis doctoral, Universidad de Leiden]. Disponible en traducción inglesa: Rowlinson, J. S. (Ed., 1988). *J. D. van der Waals: On the Continuity of the Gaseous and Liquid States*. North-Holland.
- Gibbs, J. W. (1875–1878). *On the Equilibrium of Heterogeneous Substances.* Transactions of the Connecticut Academy of Arts and Sciences, **3**, 108–248, 343–524.
- Sackur, O. (1911). *Die Anwendung der kinetischen Theorie der Gase auf chemische Probleme.* Annalen der Physik, **36**, 958–980; Tetrode, H. (1912). *Die chemische Konstante der Gase und das elementare Wirkungsquantum.* Annalen der Physik, **38**, 434–442.

### 2. Textos del curso

- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 1–3.

### 3. Textos universitarios estándar

- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). John Wiley & Sons. Caps. 1–5.
- Zemansky, M. W., & Dittman, R. H. (1997). *Heat and Thermodynamics* (7ª ed.). McGraw-Hill. Caps. 2, 4, 15.
- Fermi, E. (1956). *Thermodynamics*. Dover Publications. Caps. 1–2.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 2, 9.

### 4. Recursos de libre acceso verificados

- Blog de Francis Villatoro (La Ciencia de la Mula Francis). Entrada sobre las fases del agua: [https://francis.naukas.com/](https://francis.naukas.com/)
- NIST WebBook — Diagramas de fase del agua: [https://webbook.nist.gov/chemistry/fluid/](https://webbook.nist.gov/chemistry/fluid/)
- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. II, cap. 44: *The Laws of Thermodynamics*. [https://www.feynmanlectures.caltech.edu/II_44.html](https://www.feynmanlectures.caltech.edu/II_44.html)

### 5. Historia y filosofía de la física

- Klein, M. J. (1970). *Maxwell, His Demon, and the Second Law of Thermodynamics.* American Scientist, **58**, 84–97.
- Brush, S. G. (1976). *The Kind of Motion We Call Heat*. North-Holland. Vol. 1, caps. 3–4 (calórico, Joule, Clausius).
- Pippard, A. B. (1957). *The Elements of Classical Thermodynamics*. Cambridge University Press. Cap. 1 (crítica del concepto de calórico y su superación).
