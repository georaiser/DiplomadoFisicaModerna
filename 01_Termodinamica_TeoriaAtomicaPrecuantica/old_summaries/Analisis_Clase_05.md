# Análisis de Clase 05 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Encabezado

| Campo | Detalle |
|-------|---------|
| **Módulo** | Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1) |
| **Docente** | Prof. Julio Eduardo Oliva Zapata |
| **Fecha** | 12 de junio de 2026 |
| **Duración** | 3 h 9 min |
| **Resultados de aprendizaje** | Segunda ley de la termodinámica (formulaciones de Clausius y Kelvin); teorema de Clausius; definición de entropía termodinámica; entropía estadística de Boltzmann; fórmula de Sackur–Tetrode; resolución de la paradoja de Gibbs; termodinámica de agujeros negros |

---

## Nota sobre las fuentes

> **Nota especial:** La Clase 05 no cuenta con diapositivas formales. El Prof. Oliva impartió la clase escribiendo directamente en tablet (notas a mano), compartidas posteriormente como `Clase 5 notas a mano.pdf`. La transcripción es la fuente primaria y dominante de contenido estructurado. Las referencias al material escrito se han reconocido en el texto cuando fue posible identificar los temas abordados.

---

## Fuentes Utilizadas

- **Transcripción de video:** `Clase_05/grabacion/Clase del Diplomado de Física Moderna.docx` (fuente principal, ~128 KB, procesada en su totalidad).  
- **Notas a mano:** `Clase_05/Clase 5 notas a mano.pdf`.  
- **Libro de referencia central:** Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021).  
- **Bibliografía de apoyo:** Callen, *Thermodynamics* (Wiley, 1985); Reif, *Fundamentals of Statistical and Thermal Physics* (McGraw-Hill, 1965); Bekenstein (1973); Hawking (1975).

---

## 1. Recapitulación de la Clase 04 y motivación

*Fuente: Transcripción, minutos 0–15. Fuente complementaria: Weinberg, cap. 2.*

El Prof. Oliva abrió la sesión recordando los pilares construidos en la Clase 04:

1. **Variables termodinámicas de estado:** $P$, $V$, $T$, $N$, $U$, $C_V$, $C_P$, $\kappa_T$.
2. **Superficie de fase / ecuación de estado:** en equilibrio, existe una relación funcional $f(P,V,T,N)=0$ que define una superficie en el espacio termodinámico.
3. **Compresibilidad isotérmica:** $\kappa_T = -\frac{1}{V}(\partial V/\partial P)_T > 0$ para fases estables.
4. **Primera ley de la termodinámica:** $dU = \delta Q - P\, dV$.
5. **Calor y trabajo como diferenciales inexactos** (cantidades en transferencia, no variables de estado).

El objetivo central de la Clase 05 es introducir la **entropía** —primero desde la perspectiva termodinámica macroscópica (mediante la segunda ley), y luego desde la perspectiva estadística microscópica (mediante el conteo de microestados). La conexión entre ambas definiciones constituye uno de los mayores logros intelectuales de la física del siglo XIX.

---

## 2. La segunda ley de la termodinámica: dos formulaciones

*Fuente: Transcripción, minutos 10–35. Fuente complementaria: Zemansky, cap. 7; Fermi, cap. 3.*

La segunda ley es una ley física: no se deduce de principios más fundamentales (dentro del marco de la termodinámica clásica), sino que se establece a partir de la acumulación de evidencia experimental. Tiene dos formulaciones históricas equivalentes.

### 2.1 Formulación de Clausius (1850)

> **No existe un proceso cuyo único efecto sea transferir calor de un sistema a temperatura menor hacia un sistema a temperatura mayor.**

La palabra clave es **"único efecto"**: si se está dispuesto a introducir algún otro efecto en el proceso (por ejemplo, consumir trabajo eléctrico), entonces sí es posible transferir calor desde el frío hacia el calor —eso es precisamente lo que hace un refrigerador o una bomba de calor.

**Ejemplos intuitivos:**
- Al sumergirse en el océano, el cuerpo humano (más caliente, ~37 °C) calienta el agua, no al revés.
- Un cubo de hielo no puede espontáneamente enfriarse aún más transfiriendo calor al ambiente caliente.

### 2.2 Formulación de Kelvin (1851)

> **No existe un proceso cuyo único efecto sea extraer calor de un reservorio térmico y convertirlo completamente en trabajo.**

**Reservorio térmico (baño térmico):** es un sistema con tantos grados de libertad que, aunque se le transfiera o extraiga energía, su temperatura no cambia apreciablemente. Ejemplos: el océano, la atmósfera terrestre, el substrato de una ciudad.

**Consecuencia:** ninguna máquina térmica puede tener eficiencia del 100%. Parte del calor extraído de la fuente caliente siempre debe cederse a un sumidero frío.

### 2.3 Equivalencia de ambas formulaciones

Las dos formulaciones son **lógicamente equivalentes**. La demostración formal utiliza la contrapositiva en lógica proposicional:
- Si se niega la formulación de Kelvin → se puede deducir la negación de Clausius.
- Si se niega la formulación de Clausius → se puede deducir la negación de Kelvin.

Por tanto, si una es verdadera, la otra también lo es.

**Orden histórico:** Carnot (1824) diseñó el ciclo de máxima eficiencia sin disponer aún de la noción formal de entropía; Clausius (1850) formalizó la segunda ley; Kelvin (1851) dio la segunda formulación; Clausius (1865) acuñó el término "entropía".

---

## 3. El teorema de Clausius y la integral de ciclo

*Fuente: Transcripción, minutos 35–65. Fuente complementaria: Callen, sec. 4.1; Zemansky, cap. 7.*

### 3.1 Enunciado del teorema

El **teorema de Clausius** establece la siguiente consecuencia matemática de la segunda ley:

$$\boxed{\oint \frac{\delta Q}{T} \leq 0,}$$

con igualdad cuando el proceso cíclico es **cuasi estático (reversible)**:

$$\oint_\text{reversible} \frac{\delta Q}{T} = 0, \qquad \oint_\text{irreversible} \frac{\delta Q}{T} < 0.$$

### 3.2 Significado de la integral de ciclo

El símbolo $\oint$ denota una **integral sobre un ciclo cerrado**: se sigue un camino termodinámico que comienza y termina en el mismo estado. Para implementarla:

1. Dividir el ciclo en $N$ pasos infinitesimales.
2. En el paso $j$, el sistema tiene temperatura $T_j$ y absorbe (o cede) una cantidad de calor $\delta Q_j$.
3. Calcular $\sum_{j=1}^N \delta Q_j / T_j$ y tomar el límite $N \to \infty$.

En la práctica computacional o experimental (con datos discretos), la suma finita es lo que se implementa. En el tratamiento teórico, se usa la integral continua.

**Convención de signos:**
$$\delta Q > 0: \text{ el sistema absorbe calor.} \qquad \delta Q < 0: \text{ el sistema cede calor.}$$

### 3.3 Consecuencia inmediata del teorema

En un proceso cuasi estático, si $\oint \delta Q/T = 0$, y considerando que para cualquier integral de ciclo de una diferencial exacta se cumple que la integral cerrada es cero, se puede inferir que **$\delta Q/T$ es un diferencial exacto cuando el proceso es reversible**. Esto implica la existencia de una función de estado $S$ tal que:

$$\frac{\delta Q_\text{rev}}{T} = dS.$$

---

## 4. Definición termodinámica de la entropía

*Fuente: Transcripción, minutos 65–90. Fuente complementaria: Callen, cap. 4; Fermi, cap. 4.*

### 4.1 Argumento de existencia

El teorema de Clausius garantiza que en un proceso cuasi estático (reversible):

$$\oint_\text{rev} \frac{\delta Q}{T} = 0.$$

Esta igualdad implica que la cantidad $\delta Q_\text{rev}/T$ es un **diferencial exacto**, es decir, es el diferencial total de alguna función de estado. La demostración es análoga a la demostración de que la fuerza conservativa en mecánica clásica (cuyo trabajo en ciclo cerrado es cero) puede escribirse como el gradiente de un potencial:

$$\oint \mathbf{F}_\text{cons} \cdot d\mathbf{r} = 0 \implies \mathbf{F}_\text{cons} = -\nabla U.$$

### 4.2 Definición

La **entropía termodinámica** es la función de estado $S$ tal que, en cualquier proceso infinitesimal cuasi estático:

$$\boxed{dS = \frac{\delta Q_\text{rev}}{T}.}$$

**Interpretación:** aunque $\delta Q$ es un diferencial inexacto (solo es una cantidad en transferencia), al dividirlo por la temperatura $T$ —que sí es una variable de estado— se obtiene un diferencial exacto. La entropía es la variable de estado cuya variación está ligada a la transferencia de calor en procesos reversibles.

**Nota lingüística.** El Prof. Oliva enfatizó la distinción:
- $\delta Q$: "cantidad pequeña de calor" — **no** un "cambio en el calor" (el calor no es una propiedad del sistema).
- $dT$: "cambio pequeño en la temperatura" — sí es el cambio de una variable de estado.
- $dS$: "cambio pequeño en la entropía" — sí es el cambio de una variable de estado.

### 4.3 Primera ley con entropía

Combinando la primera ley $dU = \delta Q - P\, dV$ con $\delta Q_\text{rev} = T\, dS$:

$$\boxed{dU = T\, dS - P\, dV.}$$

Esta es la **relación fundamental de la termodinámica**, que relaciona tres variables de estado: $U$, $S$, $V$. Se puede reescribir como:

$$T = \left(\frac{\partial U}{\partial S}\right)_V, \qquad P = -\left(\frac{\partial U}{\partial V}\right)_S.$$

---

## 5. Desigualdad de Clausius y aumento de entropía

*Fuente: Transcripción, minutos 85–105. Fuente complementaria: Callen, sec. 4.2.*

Para procesos **irreversibles** (no cuasi estáticos), el teorema de Clausius da:

$$\oint \frac{\delta Q}{T} < 0.$$

Para un proceso infinitesimal cualquiera (no necesariamente reversible) entre dos estados:

$$dS \geq \frac{\delta Q}{T},$$

con igualdad para procesos reversibles. En un sistema **aislado** ($\delta Q = 0$):

$$\boxed{dS \geq 0 \quad (\text{sistema aislado}).}$$

**Enunciado del segundo principio en términos de entropía:** la entropía de un sistema aislado nunca disminuye. En un proceso espontáneo (irreversible), la entropía aumenta.

---

## 6. Definición estadística de la entropía: Boltzmann

*Fuente: Transcripción, minutos 110–150. Fuente complementaria: Reif, cap. 6; Weinberg, sec. 3.3.*

### 6.1 El número de microestados $\Omega$

A nivel microscópico, el sistema macroscópico tiene un número astronómico de configuraciones microscópicas (microestados) compatibles con los valores macroscópicos $(U, V, N)$. Este número se denomina $\Omega(U, V, N)$.

**Principio de equiprobabilidad (postulado):** en el equilibrio, todos los microestados compatibles con los valores macroscópicos son igualmente probables.

### 6.2 Fórmula de Boltzmann

La **entropía estadística** se define como:

$$\boxed{S = k_B \ln \Omega,}$$

donde $k_B = 1{,}380\,649 \times 10^{-23}$ J/K es la constante de Boltzmann. Esta ecuación está inscrita en la lápida de Ludwig Boltzmann en el Cementerio Central de Viena.

**Equivalencia con la entropía termodinámica:** en el llamado régimen termodinámico (sistemas con muchos constituyentes, $N \gg 1$), las dos definiciones de entropía coinciden:

$$S_\text{Boltzmann} = S_\text{Clausius}.$$

Esta equivalencia puede demostrarse explícitamente para el gas ideal.

### 6.3 Interpretación: entropía como medida del desorden

Cuanto más grande es $\Omega$, más "desordenado" (o más uniforme microscópicamente) es el estado. Así:

- **Gas expandido:** mayor volumen → más posiciones accesibles → mayor $\Omega$ → mayor $S$.
- **Gas comprimido:** menor volumen → menos posiciones accesibles → menor $\Omega$ → menor $S$.
- **Sistema ordenado (cristal a 0 K):** un solo microestado posible → $\Omega = 1$ → $S = 0$.

El Prof. Oliva señaló que esta interpretación de la entropía como "medida del desorden" **solo puede sostenerse responsablemente desde la física estadística microscópica**, no desde la termodinámica macroscópica, donde la entropía es simplemente la función de estado cuyo diferencial es $\delta Q_\text{rev}/T$.

---

## 7. Entropía del gas ideal: ecuación de Sackur–Tetrode

*Fuente: Transcripción, minutos 145–175. Fuente complementaria: Reif, sec. 9.2.*

### 7.1 Cálculo de $\Omega$ para el gas ideal

Para $N$ partículas monoatómicas idénticas en un volumen $V$ con energía interna $U = \frac{3}{2}Nk_BT$, el número de microestados accesibles es:

$$\Omega(U, V, N) = \frac{1}{N!} \cdot \frac{V^N}{h^{3N}} \cdot \frac{(2\pi m U)^{3N/2}}{\Gamma(3N/2+1)} \cdot (\text{factores de normalización}).$$

Aplicando la aproximación de Stirling ($\ln N! \approx N\ln N - N$) y tomando el logaritmo:

$$S = k_B \ln \Omega = Nk_B \left[\ln\left(\frac{V}{N}\right) + \frac{3}{2}\ln\left(\frac{4\pi m U}{3Nh^2}\right) + \frac{5}{2}\right].$$

Expresando en términos de $T$ usando $U = \frac{3}{2}Nk_BT$:

$$\boxed{S = Nk_B\left[\ln\left(\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2}\right) + \frac{5}{2}\right].}$$

Esta es la **fórmula de Sackur–Tetrode** (1911–1912). Es notable porque:
1. Es **extensiva**: $S(2N, 2V, T) = 2S(N, V, T)$, como físicamente se requiere.
2. Contiene la constante de Planck $h$ — la entropía del gas ideal tiene raíces cuánticas profundas.
3. Predice $\Delta S_\text{mezcla} = 0$ para gases idénticos (resuelve la paradoja de Gibbs).

### 7.2 División por $N!$: indistinguibilidad cuántica

El factor $1/N!$ en $\Omega$ es crucial: sin él, la fórmula de Sackur–Tetrode no sería extensiva y daría $\Delta S_\text{mezcla} > 0$ para gases idénticos (paradoja de Gibbs).

La corrección de Gibbs —dividir por $N!$— no puede justificarse en términos puramente clásicos. Su justificación profunda es la **indistinguibilidad cuántica**: las partículas idénticas (del mismo tipo, mismo spin, mismo isótopo) son intrínsecamente indistinguibles. Intercambiar la partícula $i$ con la partícula $j$ no produce un nuevo microestado; es el mismo estado.

---

## 8. La paradoja de Gibbs y su resolución

*Fuente: Transcripción, minutos 170–185. Fuente complementaria: Weinberg, sec. 3.5.*

### 8.1 Enunciado de la paradoja

Consideremos dos compartimentos separados por una pared, cada uno con $N$ moléculas del **mismo gas** (idéntico), a la misma temperatura $T$ y presión $P$, con volumen $V/2$ cada uno. Al retirar la pared:

- **Macroscópicamente:** no ocurre nada observable: $P$, $T$, $\rho$ son los mismos a ambos lados.
- **Cálculo clásico ingenuo:** la entropía de mezcla resulta $\Delta S_\text{mezcla} = 2Nk_B\ln 2 > 0$.

Esta contradicción —la entropía aumentaría al mezclar cosas idénticas— es la **paradoja de Gibbs**.

### 8.2 Resolución: cuántica

El factor $1/N!$ que aparece en la fórmula de Sackur–Tetrode (por indistinguibilidad cuántica) resuelve la paradoja. Para gases idénticos:

$$\Delta S_\text{mezcla} = S_\text{final} - S_\text{inicial} = 0.$$

Para gases **diferentes**, en cambio, la entropía de mezcla es positiva —consecuencia real y observable. La paradoja de Gibbs fue el primer indicio de que los constituyentes de la materia son intrínsecamente indistinguibles, prefigurando la mecánica cuántica antes de su desarrollo formal.

---

## 9. Sistemas con entropía no nula a temperatura cero: spin glasses

*Fuente: Transcripción, minutos 15–25. Fuente complementaria: Parisi (1979); Mézard et al., *Spin Glass Theory and Beyond* (1987).*

La tercera ley de la termodinámica, en su formulación simplificada —"la entropía tiende a cero cuando $T \to 0$"— no es universalmente válida. El Prof. Oliva destacó dos contraejemplos:

### 9.1 Spin glasses (vidrios de spin)

Los **vidrios de spin** son materiales magnéticos (como Fe-Mn o Cu-Mn) donde los espines están distribuidos aleatoriamente en la red cristalina con interacciones ferromagnéticas y antiferromagnéticas en competencia. Esta **frustración** impide que el sistema alcance un estado fundamental único:

- A $T \to 0$: el sistema no sabe cómo ordenarse; queda "atascado" en una configuración aleatoria.
- Resultado: $\Omega > 1$ incluso a $T = 0$, por lo que $S(T=0) > 0$.

El estudio de los vidrios de spin dio lugar a herramientas matemáticas (el **método de réplicas**, desarrollado por Giorgio Parisi) aplicables a sistemas de optimización combinatoria, redes neuronales y muchos problemas de física estadística compleja. Giorgio Parisi recibió el Premio Nobel de Física en 2021.

### 9.2 Agujeros negros rotantes

Los **agujeros negros de Kerr** (rotantes) tienen entropía incluso a temperatura (de Hawking) tendiendo a cero. El Prof. Oliva adelantó el ejemplo de termodinámica de agujeros negros como ilustración de conceptos.

---

## 10. Termodinámica de agujeros negros: el vínculo entre gravitación y termodinámica

*Fuente: Transcripción, minutos 0–10 (introducción) y minutos 185–210. Fuente complementaria: Bekenstein (1973); Hawking (1975); Wald, *General Relativity* (1984).*

### 10.1 Las cuatro leyes de la termodinámica de agujeros negros

En la década de 1970, Bekenstein y Hawking establecieron una correspondencia formal entre las leyes de la termodinámica ordinaria y las leyes de la dinámica de agujeros negros (en el marco de la relatividad general):

| Ley Termodinámica | Ley de Agujeros Negros |
|---|---|
| Ley 0: en equilibrio, $T$ es uniforme | Ley 0: todos los puntos del horizonte tienen la misma gravedad superficial $\kappa$ |
| Ley 1: $dU = T\,dS - P\,dV$ | Ley 1: $dM = \frac{\kappa}{8\pi G}\,dA + \Omega_H\,dJ + \Phi_H\,dQ$ |
| Ley 2: $dS \geq 0$ | Ley 2: el área del horizonte $A$ nunca disminuye |
| Ley 3: $S \to 0$ cuando $T \to 0$ | Ley 3: es imposible alcanzar $\kappa = 0$ en un número finito de pasos |

donde $M$ es la masa del agujero negro, $A$ el área del horizonte de eventos, $J$ el momento angular, $Q$ la carga eléctrica, $\Omega_H$ la velocidad angular del horizonte y $\Phi_H$ el potencial eléctrico del horizonte.

### 10.2 Entropía de Bekenstein–Hawking

La **entropía de un agujero negro** es proporcional al área de su horizonte de eventos:

$$\boxed{S_\text{BH} = \frac{k_B c^3}{4G\hbar}\, A,}$$

donde $G$ es la constante de gravitación universal, $c$ la velocidad de la luz y $\hbar = h/(2\pi)$ la constante de Planck reducida. La combinación $\ell_P^2 = G\hbar/c^3 \approx 2{,}6\times10^{-70}$ m² es el área de Planck al cuadrado.

Para un agujero negro de Schwarzschild de masa $M$: $A = 16\pi G^2 M^2/c^4$, y:

$$S_\text{Schwarzschild} = \frac{4\pi k_B G M^2}{\hbar c} = \frac{4\pi k_B}{\ell_P^2}\,\left(\frac{GM}{c^2}\right)^2.$$

Para el sol ($M_\odot \approx 2\times10^{30}$ kg): $S_\text{Schwarzschild} \approx 10^{77}\, k_B$.

### 10.3 Temperatura de Hawking

En 1974, Hawking demostró (usando mecánica cuántica de campos en la curvatura del espacio-tiempo) que los agujeros negros **emiten radiación térmica** (radiación de Hawking) a una temperatura:

$$T_H = \frac{\hbar c^3}{8\pi G M k_B}.$$

Para un agujero negro solar: $T_H \approx 6 \times 10^{-8}$ K (completamente inobservable). Para un micro-agujero negro de $10^{12}$ kg (masa de una montaña): $T_H \approx 10^{11}$ K (emite rayos gamma y se evapora en menos de un segundo).

### 10.4 Agujeros negros extremos y tercera ley

Un **agujero negro de Kerr** con momento angular máximo $J = GM^2/c$ es un agujero negro **extremo**, cuya gravedad superficial $\kappa = 0$ (análogo a $T = 0$). En ese límite, la entropía no es nula:

$$S_\text{Kerr extremo} = \frac{2\pi k_B G M^2}{\hbar c} \neq 0.$$

Este es el ejemplo al que el Prof. Oliva se refirió al discutir la tercera ley: hay agujeros negros con "temperatura cero" y entropía no nula, análogos a los spin glasses.

---

## 11. Ciclo de Carnot y eficiencia máxima

*Fuente: Transcripción, minutos 20–25. Fuente complementaria: Fermi, cap. 5; Zemansky, cap. 8.*

### 11.1 El ciclo

El **ciclo de Carnot** consta de cuatro procesos cuasi estáticos:

1. **Expansión isotérmica** a temperatura $T_H$: el sistema absorbe calor $Q_H > 0$ de la fuente caliente.
2. **Expansión adiabática**: el sistema se enfría de $T_H$ a $T_C$ sin intercambio de calor.
3. **Compresión isotérmica** a temperatura $T_C$: el sistema cede calor $|Q_C|$ al sumidero frío.
4. **Compresión adiabática**: el sistema se calienta de $T_C$ a $T_H$ sin intercambio de calor.

### 11.2 Eficiencia

El trabajo neto realizado por el ciclo es $W = Q_H - |Q_C|$ (primer principio). La eficiencia es:

$$\eta = \frac{W}{Q_H} = 1 - \frac{|Q_C|}{Q_H}.$$

Aplicando el teorema de Clausius al ciclo de Carnot (proceso reversible):

$$\oint \frac{\delta Q}{T} = \frac{Q_H}{T_H} - \frac{|Q_C|}{T_C} = 0 \implies \frac{|Q_C|}{Q_H} = \frac{T_C}{T_H},$$

por lo que:

$$\boxed{\eta_\text{Carnot} = 1 - \frac{T_C}{T_H}.}$$

**Propiedades clave:**
- $\eta_\text{Carnot} < 1$ siempre que $T_C > 0$ (segunda ley).
- Independiente del material de trabajo (gas ideal, vapor, etc.).
- Es la eficiencia **máxima** de cualquier máquina que opere entre $T_H$ y $T_C$ (teorema de Carnot).

---

## Conclusiones de la Clase

1. **Segunda ley — Clausius:** no existe un proceso cuyo único efecto sea transferir calor espontáneamente de un sistema frío a uno caliente.

2. **Segunda ley — Kelvin:** no existe un proceso cuyo único efecto sea extraer calor de un reservorio y convertirlo completamente en trabajo; toda máquina térmica tiene eficiencia menor al 100%.

3. **Equivalencia:** las dos formulaciones son lógicamente equivalentes, demostrable mediante la contrapositiva.

4. **Teorema de Clausius:** $\oint \delta Q/T \leq 0$, con igualdad en procesos reversibles.

5. **Entropía termodinámica:** variable de estado $S$ definida por $dS = \delta Q_\text{rev}/T$. Su existencia se demuestra del teorema de Clausius y la equivalencia entre "integral de ciclo cero" y "diferencial exacto".

6. **Relación fundamental:** $dU = T\,dS - P\,dV$, que sintetiza la primera y segunda leyes.

7. **Entropía estadística:** $S = k_B\ln\Omega$ (Boltzmann, 1877). En el régimen termodinámico, coincide con la entropía de Clausius.

8. **Fórmula de Sackur–Tetrode:** expresión exacta de la entropía del gas ideal monoatómico, que contiene $h$ y requiere $N!$ en el denominador (indistinguibilidad cuántica).

9. **Paradoja de Gibbs:** mezclar gases idénticos no aumenta la entropía; la paradoja clásica se resuelve con la indistinguibilidad cuántica ($1/N!$ en $\Omega$).

10. **Termodinámica de agujeros negros:** $S_\text{BH} = k_Bc^3 A/(4G\hbar)$; los agujeros negros son objetos termales con temperatura de Hawking $T_H \propto 1/M$; los agujeros negros extremos tienen $S \neq 0$ a $T = 0$, análogos a los spin glasses.

---

## Referencias Bibliográficas

### 1. Artículos científicos originales (fuentes primarias)

- Clausius, R. (1865). *Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie.* Annalen der Physik, **125**, 353–400. (Primera aparición del término "entropía".)
- Boltzmann, L. (1877). *Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung.* Sitzungsberichte der Akademie der Wissenschaften, **76**, 373–435.
- Bekenstein, J. D. (1973). *Black holes and entropy.* Physical Review D, **7**, 2333–2346.
- Hawking, S. W. (1975). *Particle creation by black holes.* Communications in Mathematical Physics, **43**, 199–220.
- Parisi, G. (1979). *Infinite number of order parameters for spin-glasses.* Physical Review Letters, **43**, 1754–1756.

### 2. Textos del curso

- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 2–3.

### 3. Textos universitarios estándar

- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). John Wiley & Sons. Caps. 4–5.
- Fermi, E. (1956). *Thermodynamics*. Dover Publications. Caps. 3–5.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 6, 9.
- Zemansky, M. W., & Dittman, R. H. (1997). *Heat and Thermodynamics* (7ª ed.). McGraw-Hill. Caps. 7–8.

### 4. Recursos de libre acceso verificados

- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, cap. 44: *The Laws of Thermodynamics*. [https://www.feynmanlectures.caltech.edu/I_44.html](https://www.feynmanlectures.caltech.edu/I_44.html)
- Wald, R. M. (1994). *The thermodynamics of black holes.* Living Reviews in Relativity. [https://link.springer.com/article/10.12942/lrr-2001-6](https://link.springer.com/article/10.12942/lrr-2001-6)

### 5. Historia y filosofía de la física

- Klein, M. J. (1967). *Thermodynamics in Einstein's thought.* Science, **157**, 509–516.
- Mézard, M., Parisi, G., & Virasoro, M. A. (1987). *Spin Glass Theory and Beyond*. World Scientific.
- Pais, A. (1982). *'Subtle is the Lord…': The Science and the Life of Albert Einstein*. Oxford University Press. Cap. 4 (relación con la termodinámica estadística).
