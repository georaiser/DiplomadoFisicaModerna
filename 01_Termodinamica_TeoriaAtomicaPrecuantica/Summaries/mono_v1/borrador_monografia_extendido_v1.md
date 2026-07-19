# La entropía en gases ideales y reales: de Clausius a Planck
### Versión extendida — Autoevaluación de contenido

**Informe Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica**
**Diplomado en Física Moderna: Termodinámica, Mecánica Cuántica y Relatividad**
Docente: Prof. Julio Eduardo Oliva Zapata
Estudiante: [Nombre]
Fecha de entrega: 25 de septiembre de 2026

---

> **Nota sobre esta versión:** Este documento es un borrador extendido para autoevaluación de contenido. Contiene toda la materia que podría incluirse en el informe final. La versión a entregar deberá seleccionar, sintetizar y reescribir en voz personal sin exceder 5 páginas.

---

## 1. Contexto histórico

### 1.1 El problema del calor en el siglo XIX

A comienzos del siglo XIX, el calor se entendía como un fluido material —el *calórico*— que fluía de los cuerpos calientes a los fríos. Esta imagen era consistente con los experimentos disponibles y permitía calcular procesos de transferencia de calor con éxito. Sin embargo, los experimentos de Rumford (1798) y Joule (1843) mostraron que el calor podía generarse indefinidamente mediante trabajo mecánico, lo que era incompatible con la idea de un fluido conservado. Joule estableció cuantitativamente el equivalente mecánico del calor: $1\,\text{cal} = 4.186\,\text{J}$.

Sadi Carnot (1824), sin saber que el calórico era incorrecto, construyó el argumento más importante de la termodinámica clásica: la eficiencia máxima de cualquier máquina térmica depende solo de las temperaturas entre las que opera, no del fluido de trabajo. Su resultado —que hoy escribimos como $\eta_\text{Carnot} = 1 - T_C/T_H$— fue rederivado correctamente por Clausius y Kelvin una vez que se aceptó que el calor era energía en tránsito.

### 1.2 Clausius y la segunda ley (1850–1865)

Rudolf Clausius formuló la segunda ley en dos versiones equivalentes:

- **Formulación de Clausius (1850):** No existe proceso cuyo único efecto sea transferir calor de un cuerpo frío a uno caliente.
- **Formulación de Kelvin (1851):** No existe proceso cuyo único efecto sea extraer calor de un reservorio y convertirlo íntegramente en trabajo.

Clausius demostró que ambas formulaciones son lógicamente equivalentes (si una falla, la otra también) y derivó de ellas el **teorema del ciclo**:

$$\oint \frac{\delta Q}{T} \leq 0,$$

con igualdad para ciclos reversibles. La demostración usa el hecho de que para cualquier ciclo de Carnot reversible, $Q_H/T_H = Q_C/T_C$, y cualquier ciclo irreversible puede acotarse por una combinación de ciclos de Carnot.

En 1865, Clausius dio el paso decisivo: demostró que para cualquier proceso reversible, la integral $\oint \delta Q_\text{rev}/T = 0$ implica que $\delta Q_\text{rev}/T$ es un diferencial exacto. Existe entonces una función de estado $S$ —que llamó **entropía**, del griego *τροπή* (transformación)— tal que:

$$dS = \frac{\delta Q_\text{rev}}{T}.$$

El nombre fue elegido deliberadamente para que sonara parecido a "energía": Clausius intuía que eran conceptos del mismo rango de importancia.

### 1.3 Boltzmann y el significado microscópico (1872–1877)

Ludwig Boltzmann comprendió que la entropía no era solo una cantidad macroscópica conveniente: tenía un significado probabilístico profundo. En 1877, después de un largo camino que incluye la ecuación cinética de Boltzmann (1872) y el teorema H, formuló la relación:

$$S = k_B\ln\Omega,$$

donde $\Omega$ es el número de microestados compatibles con el macroestado del sistema. Esta ecuación —grabada en su lápida en Viena— conectó la termodinámica macroscópica con la física molecular.

La constante $k_B = R/N_A = 1.381\times10^{-23}\,\text{J/K}$ fue determinada cuantitativamente más tarde; Boltzmann la escribía en términos de $R$ y $N_A$ por separado.

Boltzmann enfrentó resistencia intensa. Ernst Mach y Wilhelm Ostwald negaban la existencia de los átomos y consideraban que la mecánica estadística era especulación sin base experimental. En 1906, deprimido y enfermo, Boltzmann se suicidó. Un año después, el experimento de Perrin sobre el movimiento browniano midió directamente $N_A$ con precisión de cinco cifras significativas, confirmando todo lo que Boltzmann había construido.

### 1.4 Van der Waals y el gas real (1873)

En 1873, Johannes Diderik van der Waals presentó su tesis doctoral en Leiden con el título "Sobre la continuidad de los estados gaseoso y líquido". Su contribución fue doble: por un lado, corrigió la ecuación de estado del gas ideal incorporando el volumen propio de las moléculas y sus interacciones atractivas; por otro, demostró que gas y líquido son estados del mismo sistema continuo, separados por una transición de fase. Thomas Andrews, experimentando con CO₂ en 1869, había observado exactamente este fenómeno —la continuidad entre gas y líquido— sin poder explicarlo. Van der Waals le dio la base teórica.

Van der Waals recibió el Nobel de Física en 1910.

### 1.5 Gibbs y la termodinámica de equilibrio (1876–1878)

Josiah Willard Gibbs publicó entre 1876 y 1878 "On the Equilibrium of Heterogeneous Substances", considerado uno de los trabajos más importantes de la física del siglo XIX. Gibbs sistematizó la termodinámica, introdujo los potenciales termodinámicos (energía de Helmholtz, energía de Gibbs, entalpía), el potencial químico, y señaló la paradoja que hoy lleva su nombre: la entropía termodinámica del gas ideal predice un aumento al mezclar gases idénticos, cuando no debería haber ningún cambio físico.

---

## 2. La entropía termodinámica del gas ideal

### 2.1 Derivación completa

La relación fundamental de la termodinámica, derivada combinando la primera y segunda ley, es:

$$dU = T\,dS - P\,dV \quad \Longrightarrow \quad dS = \frac{dU}{T} + \frac{P}{T}\,dV.$$

Para el gas ideal monoatómico, la energía interna depende solo de la temperatura. Por el **teorema de equipartición**, cada grado de libertad cuadrático aporta $\frac{1}{2}k_BT$ a la energía promedio. Con tres grados de libertad de traslación:

$$U = \frac{3}{2}Nk_BT \quad \Longrightarrow \quad dU = \frac{3}{2}Nk_B\,dT.$$

La ecuación de estado del gas ideal es $PV = Nk_BT$, de modo que $P/T = Nk_B/V$. Sustituyendo en $dS$:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + Nk_B\frac{dV}{V}.$$

Integrando entre un estado de referencia $(T_0, V_0)$ y el estado $(T, V)$:

$$\Delta S = \frac{3}{2}Nk_B\ln\frac{T}{T_0} + Nk_B\ln\frac{V}{V_0}.$$

Sin fijar el estado de referencia, la entropía es:

$$\boxed{S_\text{ideal}(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln V + C(N),}$$

donde $C(N)$ es una constante de integración que la termodinámica no determina. Esta indeterminación es el primer signo de incompletitud del marco termodinámico.

### 2.2 Capacidad calorífica a presión constante

Para un gas ideal, la entalpía es $H = U + PV = \frac{3}{2}Nk_BT + Nk_BT = \frac{5}{2}Nk_BT$. Por tanto:

$$C_P = \left(\frac{\partial H}{\partial T}\right)_P = \frac{5}{2}Nk_B.$$

La identidad de Mayer sigue directamente: $C_P - C_V = Nk_B = nR$.

El índice adiabático para el gas monoatómico es $\gamma = C_P/C_V = 5/3 \approx 1.67$, en acuerdo con los valores medidos para gases nobles (He, Ne, Ar).

### 2.3 Proceso adiabático del gas ideal

En un proceso reversible adiabático ($dS = 0$, $\delta Q = 0$), la relación entre temperatura y volumen se obtiene de $dU = -P\,dV$:

$$\frac{3}{2}Nk_B\,dT = -\frac{Nk_BT}{V}\,dV \quad \Longrightarrow \quad \frac{dT}{T} = -\frac{2}{3}\frac{dV}{V}.$$

Integrando: $TV^{2/3} = \text{cte}$, o equivalentemente $PV^{5/3} = \text{cte}$ (ley de Poisson). La generalización para un gas con $f$ grados de libertad es $PV^\gamma = \text{cte}$.

---

## 3. La paradoja de Gibbs y su resolución microscópica

### 3.1 El experimento mental

Consideremos el experimento pensado más simple que captura la paradoja. Dos recipientes, cada uno de volumen $V$, temperatura $T$ y presión $P$, ambos con el mismo gas ideal, $N$ partículas en cada uno, separados por una pared. La entropía inicial del sistema compuesto es:

$$S_i = 2\left[\frac{3}{2}Nk_B\ln T + Nk_B\ln V + C\right] = 3Nk_B\ln T + 2Nk_B\ln V + 2C.$$

Retiramos la pared. No hay transferencia de energía (ambos lados estaban a la misma $T$), no hay flujo neto de masa (misma $P$). El sistema final tiene $2N$ partículas, volumen $2V$, temperatura $T$:

$$S_f = \frac{3}{2}(2N)k_B\ln T + (2N)k_B\ln(2V) + C'.$$

Para que la paradoja sea mínima, elegimos $C = 0$ (constante de referencia). Entonces:

$$S_f - S_i = 2Nk_B\ln 2 + (C' - 0).$$

Si $C'$ también es cero (la misma convención para el sistema de $2N$ partículas):

$$\Delta S = 2Nk_B\ln 2 \approx 1.39\,Nk_B > 0.$$

Para un mol de gas ($N = N_A$), $\Delta S \approx 11.5$ J/K — un valor perfectamente medible. Sin embargo, físicamente no ocurrió nada: el sistema no evolucionó.

**Raíz del problema:** La expresión $S \propto Nk_B\ln V$ no es extensiva. Al escalar $(N, V) \to (2N, 2V)$ manteniendo $T$ constante:

$$S(2N, 2V, T) = 3Nk_B\ln T + 2Nk_B\ln(2V) = 2S(N, V, T) + 2Nk_B\ln 2 \neq 2S(N, V, T).$$

### 3.2 La hipótesis de Boltzmann y el conteo de microestados

La mecánica estadística define la entropía como $S = k_B\ln\Omega$, donde $\Omega$ es el número de microestados compatibles con el macroestado $(U, V, N)$.

**¿Qué es un microestado?** Para un gas clásico de $N$ partículas en 3D, un microestado queda especificado por las $3N$ posiciones y los $3N$ momentos de todas las partículas: un punto en el **espacio de fases** de $6N$ dimensiones.

**¿Cómo se cuenta $\Omega$?** El espacio de fases es continuo, pero necesitamos un volumen mínimo de celda para que el conteo tenga sentido. La mecánica cuántica impone que cada estado cuántico ocupa un volumen $h^{3N}$ en el espacio de fases, donde $h$ es la constante de Planck. Esto fija la normalización:

$$\Omega = \frac{\text{Volumen del espacio de fases compatible con }(U,V,N)}{h^{3N}}.$$

El volumen compatible con energía total $U$ (dentro de una capa de espesor $\delta U$) es:

$$\Phi(U,V,N) = V^N \cdot \mathcal{S}_{3N}(\sqrt{2mU}) \cdot \delta U \cdot \sqrt{2mU},$$

donde $\mathcal{S}_{3N}(r) = \frac{2\pi^{3N/2}}{\Gamma(3N/2)} r^{3N-1}$ es el "área" de la hiperesfera de radio $r$ en $3N$ dimensiones.

**La corrección de indistinguibilidad:** Si las partículas son idénticas, las $N!$ permutaciones que intercambian partículas en estados distintos no corresponden a microestados físicamente diferentes. El conteo correcto es:

$$\Omega_\text{correcto} = \frac{1}{N!}\cdot\frac{V^N}{h^{3N}}\cdot\frac{(2\pi mU)^{3N/2}}{\left(\frac{3N}{2}\right)!}.$$

### 3.3 Derivación de la fórmula de Sackur–Tetrode

Aplicamos $S = k_B\ln\Omega_\text{correcto}$ y usamos la **aproximación de Stirling**: $\ln(n!) \approx n\ln n - n$ para $n \gg 1$. Sea $\nu = 3N/2$:

$$\ln\Omega = N\ln V - N\ln h^3 + \frac{3N}{2}\ln(2\pi mU) - \ln(N!) - \ln\left(\nu!\right).$$

Usando Stirling:

$$\ln(N!) \approx N\ln N - N, \qquad \ln\left(\nu!\right) \approx \nu\ln\nu - \nu = \frac{3N}{2}\ln\frac{3N}{2} - \frac{3N}{2}.$$

Sustituyendo y simplificando, con $U = \frac{3}{2}Nk_BT$:

$$\ln\Omega = N\ln V - N\ln N + N - \frac{3N}{2}\ln\frac{3N}{2} + \frac{3N}{2} + \frac{3N}{2}\ln(2\pi mU).$$

Reemplazando $U = \frac{3}{2}Nk_BT$:

$$\frac{3N}{2}\ln(2\pi m \cdot \frac{3}{2}Nk_BT) - \frac{3N}{2}\ln\frac{3N}{2} = \frac{3N}{2}\ln(2\pi mk_BT).$$

Agrupando todos los términos que involucran $N$:

$$\ln\Omega = N\left[\ln\frac{V}{N} + \frac{3}{2}\ln(2\pi mk_BT) - \ln h^3 + 1 + \frac{3}{2}\right].$$

$$\ln\Omega = N\left[\ln\frac{V}{N} + \frac{3}{2}\ln\frac{2\pi mk_BT}{h^2} + \frac{5}{2}\right].$$

Multiplicando por $k_B$:

$$\boxed{S_\text{ST}(T, V, N) = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].}$$

Esta es la **ecuación de Sackur–Tetrode**, derivada independientemente por Otto Sackur y Hugo Tetrode en 1911–1912. Sus propiedades clave son:

1. **Extensividad:** $S_\text{ST}(2N, 2V, T) = 2\,S_\text{ST}(N, V, T)$. El factor $V/N$ bajo el logaritmo garantiza que al escalar simultáneamente $V$ y $N$, el argumento queda invariante.

2. **Resolución de la paradoja de Gibbs:** Para gases idénticos, $\Delta S_\text{mezcla} = 0$.

3. **Presencia de $h$:** La constante de Planck es necesaria para calcular el valor absoluto de la entropía. La termodinámica clásica no puede determinar $C(N)$; la mecánica estadística cuántica la fija.

4. **Verificación experimental:** La entropía absoluta del argón a 25°C y 1 atm predicha por Sackur–Tetrode es $S/N_A = 154.8$ J/(mol·K), en excelente acuerdo con los valores experimentales obtenidos por integración de capacidades caloríficas desde 0 K.

---

## 4. La entropía del gas de Van der Waals

### 4.1 La ecuación de Van der Waals: fundamento microscópico

La corrección al gas ideal parte de dos observaciones:

**a) Volumen excluido ($b$):** Las moléculas no son puntos. Cada molécula de radio efectivo $r$ excluye a las demás de una esfera de radio $2r$ (el diámetro molecular). El volumen excluido *por par* es $\frac{4}{3}\pi(2r)^3/2$. Para $N$ moléculas:

$$b = 4 \cdot \frac{4}{3}\pi r^3 \cdot \frac{1}{2} = 4 V_\text{molécula}.$$

El volumen libre disponible pasa de $V$ a $V - Nb$.

**b) Atracciones intermoleculares ($a$):** Las moléculas en el interior del gas están rodeadas uniformemente de vecinas; las fuerzas atractivas se cancelan. Pero las moléculas cerca de la pared tienen menos vecinas de su lado (hay vacío fuera); sufren una atracción neta hacia el interior. Esto reduce la presión que ejercen sobre la pared:

$$\Delta P = -\frac{a N^2}{V^2},$$

donde el factor $N^2/V^2$ refleja que la atracción es proporcional al cuadrado de la densidad numérica.

La ecuación de estado de Van der Waals es:

$$\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT.$$

### 4.2 Cálculo de la energía interna

Para cualquier sistema, la derivada de la energía interna respecto al volumen a temperatura constante es:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P.$$

Esta es una de las **ecuaciones de Maxwell** derivadas del potencial de Helmholtz $F = U - TS$.

Para el gas de Van der Waals, $P = \frac{Nk_BT}{V-Nb} - \frac{aN^2}{V^2}$, de modo que:

$$\left(\frac{\partial P}{\partial T}\right)_V = \frac{Nk_B}{V - Nb}.$$

Entonces:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\cdot\frac{Nk_B}{V-Nb} - \left(\frac{Nk_BT}{V-Nb} - \frac{aN^2}{V^2}\right) = \frac{aN^2}{V^2}.$$

Este término representa la **energía potencial de las interacciones atractivas**: al expandir el gas, las moléculas se alejan entre sí y se gana energía potencial. Integrando desde $V_0 \to \infty$ (gas ideal) hasta $V$:

$$U_\text{VdW}(T, V) = \frac{3}{2}Nk_BT - \frac{aN^2}{V} + U_0.$$

Comparado con el gas ideal ($U_\text{ideal} = \frac{3}{2}Nk_BT$), el término $-aN^2/V$ es negativo: las atracciones reducen la energía interna. Este es el origen del calor latente de vaporización: al pasar de líquido (alta densidad, $V$ pequeño, $-aN^2/V$ muy negativo) a gas (baja densidad, $-aN^2/V \approx 0$), el sistema debe absorber energía para "romper" las atracciones.

### 4.3 Entropía del gas de Van der Waals

$$dS = \frac{dU + P\,dV}{T} = \frac{(3/2)Nk_B\,dT + (aN^2/V^2)\,dV + P\,dV}{T}.$$

Sustituyendo $P$:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + \frac{1}{T}\left[\frac{aN^2}{V^2} + \frac{Nk_BT}{V-Nb} - \frac{aN^2}{V^2}\right]dV.$$

Los términos con $a$ se cancelan exactamente:

$$dS = \frac{3}{2}Nk_B\frac{dT}{T} + \frac{Nk_B}{V-Nb}\,dV.$$

Integrando:

$$\boxed{S_\text{VdW}(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln(V - Nb) + C'(N).}$$

### 4.4 Comparación sistemática gas ideal vs. gas real

| Propiedad | Gas ideal | Gas de Van der Waals |
|-----------|-----------|----------------------|
| Ecuación de estado | $PV = Nk_BT$ | $(P + aN^2/V^2)(V-Nb) = Nk_BT$ |
| Energía interna $U$ | $\frac{3}{2}Nk_BT$ | $\frac{3}{2}Nk_BT - aN^2/V$ |
| Entropía $S$ | $\sim Nk_B\ln V$ | $\sim Nk_B\ln(V-Nb)$ |
| Capacidad calorífica $C_V$ | $\frac{3}{2}Nk_B$ | $\frac{3}{2}Nk_B$ |
| Temperatura crítica $T_c$ | No existe | $8a/(27k_Bb)$ |
| Presión crítica $P_c$ | No existe | $a/(27b^2)$ |
| Calor latente | No existe | $L = T^*(S_\text{gas} - S_\text{liq})$ |

**Observaciones importantes:**

1. La entropía del gas de Van der Waals reemplaza $\ln V$ por $\ln(V-Nb)$. Puesto que $V - Nb < V$, la entropía del gas real es **menor** que la del gas ideal al mismo estado macroscópico: el volumen excluido reduce el espacio de microestados accesibles.

2. El parámetro $a$ no aparece en la expresión de la entropía, pero sí modifica la energía interna. Esto tiene consecuencias observables en el **efecto Joule–Thomson**: la temperatura de un gas real cambia al expandirse a través de una válvula porosa (proceso isentálpico), y la temperatura de inversión a la que el efecto cambia de signo depende de $a$ y $b$.

3. La capacidad calorífica $C_V$ es idéntica a la del gas ideal. Esto no es obvio a priori: aunque la energía interna tiene un término adicional $-aN^2/V$, este término no depende de $T$, por lo que no contribuye a $C_V = (\partial U/\partial T)_V$.

### 4.5 La transición de fase y el punto crítico

Por debajo de $T_c$, las isotermas de Van der Waals presentan una oscilación no física: existe una región donde $(\partial P/\partial V)_T > 0$, es decir, donde la presión aumenta al aumentar el volumen. Esto corresponde a una compresibilidad isotérmica negativa:

$$\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T < 0,$$

que indica inestabilidad mecánica. La naturaleza elimina este segmento mediante la **coexistencia de fases**: a presión $P^*$, dos fases (líquido a $V_\text{liq}$ y gas a $V_\text{gas}$) coexisten en equilibrio.

La condición de coexistencia exige que temperatura, presión y potencial químico sean iguales en ambas fases. Maxwell demostró que la condición sobre el potencial químico se traduce en la **regla de las áreas iguales**:

$$\int_{V_\text{liq}}^{V_\text{gas}}[P(V) - P^*]\,dV = 0.$$

Geométricamente, la presión $P^*$ divide la isoterma de Van der Waals de manera que el área encerrada por encima y por debajo de $P^*$ son iguales.

En la transición de fase, el sistema absorbe calor latente $L$ a temperatura $T^*$ constante. El cambio de entropía es:

$$\Delta S_\text{transición} = \frac{L}{T^*} = S_\text{gas}(T^*, V_\text{gas}) - S_\text{liq}(T^*, V_\text{liq}) = Nk_B\ln\frac{V_\text{gas} - Nb}{V_\text{liq} - Nb}.$$

Esta expresión tiene sentido físico directo: el gas ocupa un volumen libre mucho mayor que el líquido, luego tiene muchos más microestados accesibles y mayor entropía.

El punto crítico es el estado donde la diferencia entre fases desaparece:

$$T_c = \frac{8a}{27k_Bb}, \qquad P_c = \frac{a}{27b^2}, \qquad V_c = 3Nb.$$

En el punto crítico, la compresibilidad diverge ($\kappa_T \to \infty$), las fluctuaciones de densidad se vuelven macroscópicas y el sistema dispersa la luz de todas las longitudes de onda (opalescencia crítica). Este fenómeno, observado experimentalmente, no tiene explicación en el marco del gas ideal.

---

## 5. La entropía microscópica y la indistinguibilidad

### 5.1 El sistema de espines como modelo didáctico

Antes de volver al gas, conviene consolidar la noción de microestado/macroestado con el ejemplo más simple posible: $N$ espines de dos niveles en un campo magnético externo $B$. Cada espín puede estar paralelo ($\uparrow$, energía $-\mu_B B$) o antiparalelo ($\downarrow$, energía $+\mu_B B$) al campo. No hay interacción entre espines.

Si hay $N_\uparrow$ espines paralelos, la energía total es $U = -(2N_\uparrow - N)\mu_B B$. El número de microestados compatibles con este valor de energía es el coeficiente binomial:

$$\Omega(N_\uparrow) = \binom{N}{N_\uparrow} = \frac{N!}{N_\uparrow!\,(N-N_\uparrow)!}.$$

La entropía en función de $f = N_\uparrow/N$ es:

$$S = k_B\ln\binom{N}{Nf} \approx -Nk_B\left[f\ln f + (1-f)\ln(1-f)\right],$$

donde se usó Stirling. Esta expresión tiene máximo en $f = 1/2$ (igual número de espines en cada dirección: máximo desorden) y vale cero en $f = 0$ y $f = 1$ (todos los espines en el mismo estado: un único microestado). Esto ilustra perfectamente que $S$ mide la "cantidad de desorden" o, más precisamente, el logaritmo del número de configuraciones accesibles.

### 5.2 La hipótesis de equiprobabilidad

La clave del formalismo es la **hipótesis de Boltzmann**: para un sistema aislado, todos los microestados compatibles con el macroestado son igualmente probables.

Esta hipótesis no puede derivarse de primeros principios en general —es un postulado que se valida por sus consecuencias. Una justificación parcial proviene de la ergodicidad: un sistema hamiltoniano genérico visita con igual frecuencia todos los microestados de igual energía en el límite de tiempo infinito (teorema ergódico de Birkhoff, 1931). Sin embargo, la ergodicidad es difícil de establecer para sistemas físicos concretos.

La hipótesis es correcta para todos los sistemas que se han analizado con suficiente detalle. Su consecuencia inmediata es que la probabilidad de un macroestado es proporcional a su número de microestados: el macroestado con mayor $\Omega$ es el más probable. En el límite termodinámico ($N \to \infty$), este macroestado más probable es abrumadoramente dominante: la probabilidad de encontrar el sistema significativamente alejado del equilibrio decae como $e^{-N}$.

---

## 6. Conexión con el Módulo 2: la entropía genera la física cuántica

### 6.1 El problema del cuerpo negro

Un **cuerpo negro** es un objeto que absorbe toda la radiación incidente. En equilibrio a temperatura $T$, emite radiación cuya distribución espectral depende solo de $T$. El problema físico es calcular la densidad de energía radiada por unidad de frecuencia: $u(f, T)$.

La física clásica aborda este problema modelando el campo electromagnético dentro de una cavidad como una colección de ondas estacionarias (modos normales). La densidad de modos por unidad de volumen y de frecuencia es:

$$g(f) = \frac{8\pi f^2}{c^3}.$$

Este resultado es puramente geométrico y se deriva contando el número de ondas estacionarias en una caja cúbica de lado $L$: cada modo ocupa un volumen $(\pi/L)^3$ en el espacio $\mathbf{k}$, y hay dos polarizaciones independientes. Es un resultado exacto —no tiene ningún error.

El teorema de equipartición clásico asigna energía promedio $k_BT$ a cada modo (oscilador armónico con energía cinética y potencial). La densidad espectral de energía sería:

$$u_\text{RJ}(f, T) = g(f)\cdot k_BT = \frac{8\pi f^2}{c^3}k_BT.$$

Esta es la **ley de Rayleigh-Jeans**. Funciona bien a baja frecuencia pero diverge como $f^2$ cuando $f \to \infty$. La energía total sería infinita:

$$u_\text{total} = \int_0^\infty u_\text{RJ}(f, T)\,df = \frac{8\pi k_BT}{c^3}\int_0^\infty f^2\,df \to \infty.$$

Paul Ehrenfest llamó a esto la **catástrofe ultravioleta** (1911). Es un fracaso absoluto de la física clásica.

### 6.2 La estrategia de Planck: entropía como herramienta

Planck conocía los dos límites asintóticos del espectro del cuerpo negro:

- A baja frecuencia: $u \propto f^2 T$ (ley de Rayleigh-Jeans, correcta experimentalmente).
- A alta frecuencia: $u \propto f^3 e^{-hf/k_BT}$ (ley empírica de Wien, correcta a alta frecuencia).

La distribución espectral está determinada por la entropía $S(U)$ de los osciladores. Para un oscilador en equilibrio a temperatura $T$, $1/T = \partial S/\partial U$, de modo que la segunda derivada $\partial^2 S/\partial U^2$ caracteriza la distribución.

Planck derivó que:
- El límite de Rayleigh-Jeans implica: $\partial^2 S/\partial U^2 \propto -1/U^2$.
- El límite de Wien implica: $\partial^2 S/\partial U^2 \propto -1/U$.

La interpolación más simple entre ambos límites es:

$$\frac{\partial^2 S}{\partial U^2} = -\frac{\alpha}{U(\varepsilon + U)},$$

donde $\alpha$ y $\varepsilon$ son constantes. Integrando dos veces:

$$\frac{1}{T} = \frac{\partial S}{\partial U} = \frac{\alpha}{\varepsilon}\ln\frac{\varepsilon + U}{U} + \text{cte}.$$

Despejando $U$ como función de $T$ y $\varepsilon$:

$$U = \frac{\varepsilon}{e^{\varepsilon/\alpha k_BT} - 1}.$$

Para recuperar la ley de Rayleigh-Jeans a bajas frecuencias ($\varepsilon \ll k_BT$): $U \approx \alpha k_BT$, lo que exige $\alpha = 1$. Para reproducir la ley de Wien a altas frecuencias: $\varepsilon = hf$. Así:

$$\langle E\rangle_\text{Planck} = \frac{hf}{e^{hf/k_BT} - 1}.$$

Multiplicando por la densidad de modos:

$$\boxed{u(f, T) = \frac{8\pi h f^3}{c^3}\cdot\frac{1}{e^{hf/k_BT} - 1}.}$$

Esta es la **distribución de Planck**, anunciada el 14 de diciembre de 1900 — fecha considerada el nacimiento de la física cuántica.

### 6.3 El fundamento estadístico: $S = k_B\ln\Omega$ aplicado a los osciladores

Para dar sentido físico a su interpolación, Planck necesitaba calcular $\Omega$ para un conjunto de $N$ osciladores con energía total $U$. Adoptó la hipótesis de que la energía solo puede distribuirse en paquetes discretos de tamaño $\varepsilon = hf$. El número de microestados compatibles con $n$ cuantos distribuidos entre $N$ osciladores es el número de maneras de repartir $n$ objetos en $N$ compartimentos:

$$\Omega = \binom{N + n - 1}{n} = \frac{(N + n - 1)!}{n!\,(N-1)!}.$$

Aplicando $S = k_B\ln\Omega$ y Stirling, y usando $1/T = \partial S/\partial U$ con $U = n\varepsilon$, se recupera exactamente la distribución de Planck. El factor clave es que este conteo de particiones —a diferencia del conteo clásico— no distingue los cuantos entre sí: los cuantos de energía son indistinguibles.

**La conexión con la paradoja de Gibbs es directa:** En ambos casos —las moléculas del gas y los cuantos de energía— la física clásica sobre-cuenta los microestados porque trata como distintos objetos que son físicamente indistinguibles. La corrección en el gas es el factor $1/N!$; en los osciladores de Planck, es el conteo combinatorio de particiones (que anticipa la estadística de Bose-Einstein).

### 6.4 Verificaciones de la distribución de Planck

La ley de Planck es verificada por dos resultados clásicos que emergen como casos límite:

**Ley de Stefan-Boltzmann:** Integrando sobre todas las frecuencias con el cambio $x = hf/k_BT$:

$$\int_0^\infty u(f,T)\,df = \frac{8\pi h}{c^3}\left(\frac{k_BT}{h}\right)^4 \int_0^\infty \frac{x^3}{e^x - 1}\,dx = \frac{8\pi^5 k_B^4}{15c^3h^3}T^4.$$

La integral $\int_0^\infty x^3/(e^x-1)\,dx = \pi^4/15$ (función zeta de Riemann $\zeta(4)\cdot\Gamma(4)$). La potencia radiada por unidad de área es $\sigma T^4$, con:

$$\sigma = \frac{2\pi^5 k_B^4}{15c^2h^3} = 5.670\times10^{-8}\,\text{W\,m}^{-2}\text{K}^{-4}.$$

La teoría cuántica no solo reproduce la ley de Stefan-Boltzmann: la deriva desde primeros principios y predice el valor exacto de $\sigma$ en términos de $h$, $k_B$ y $c$.

**Ley de desplazamiento de Wien:** Imponiendo $\partial u/\partial f = 0$ (en términos de $\lambda$) se obtiene la ecuación trascendente $5(1 - e^{-hc/\lambda k_BT}) = hc/\lambda k_BT$, cuya solución numérica da $\lambda_\text{max} T = b$ con $b = 2.898\times10^{-3}\,\text{m\cdot K}$.

---

## 7. El arco completo del Diplomado

### 7.1 La jerarquía de marcos conceptuales

El Diplomado en Física Moderna está estructurado en tres módulos que siguen una progresión conceptual coherente:

| Módulo | Tema | Marco conceptual |
|--------|------|-----------------|
| 1 | Termodinámica y Teoría Atómica Pre-Cuántica | Leyes macroscópicas + estadística clásica |
| 2 | Teoría Cuántica Temprana | Cuantización de energía, dualidad onda-corpúsculo |
| 3 | Relatividad | Espacio-tiempo, invariancia de Lorentz |

La entropía conecta los tres módulos:

- **Módulo 1:** La entropía se define termodinámicamente y se interpreta estadísticamente. La paradoja de Gibbs revela la necesidad de la indistinguibilidad cuántica.
- **Módulo 2:** La entropía de Boltzmann es la herramienta con que Planck deriva la distribución del cuerpo negro. Los fotones obedecen la estadística de Bose-Einstein, que generaliza el conteo de microestados para bosones indistinguibles.
- **Módulo 3 (Relatividad):** La termodinámica de agujeros negros (Bekenstein-Hawking) conecta la entropía con la geometría del espacio-tiempo. La entropía de un agujero negro es proporcional al área de su horizonte, no a su volumen — un resultado que no tiene análogo clásico y requiere relatividad general más mecánica cuántica.

### 7.2 Las "grietas" de la física clásica

El Módulo 1 deja ver, en retrospectiva, cinco señales de que la física clásica era incompleta:

1. **La paradoja de Gibbs** exige la indistinguibilidad cuántica de las partículas.
2. **La constante de Planck en Sackur-Tetrode** muestra que la entropía absoluta requiere mecánica cuántica.
3. **La catástrofe ultravioleta** fuerza la cuantización de la energía.
4. **Las anomalías de capacidades caloríficas** a baja temperatura (pico de Schottky, ley de Dulong-Petit modificada) no se explican clásicamente.
5. **El movimiento browniano** establece una conexión directa entre fluctuaciones térmicas y la escala atómica, prefigurando la física estadística cuántica.

### 7.3 Universalidad del concepto de entropía

La entropía como definida por Boltzmann ha resultado ser mucho más general que la termodinámica de gases. Sus aplicaciones modernas incluyen:

- **Teoría de la información (Shannon, 1948):** La entropía de Shannon $H = -\sum_i p_i\log_2 p_i$ es formalmente idéntica a la entropía de Boltzmann y cuantifica la información contenida en una distribución de probabilidades. Esta conexión, establecida rigurosamente por Shannon, unifica la termodinámica con la teoría de la comunicación.

- **Termodinámica de agujeros negros:** La entropía de Bekenstein-Hawking $S_\text{BH} = k_Bc^3 A/(4G\hbar)$ sugiere que la entropía tiene un significado geométrico fundamental aún no comprendido plenamente.

- **Mecánica cuántica de muchos cuerpos:** La entropía de entrelazamiento de un subsistema cuántico cuantifica las correlaciones cuánticas que no tienen análogo clásico, y es la base de los algoritmos de simulación cuántica (renormalization group tensorial).

---

## 8. Conclusión

La entropía recorre, en el espacio de cien años, un camino que va de lo fenomenológico a lo fundamental. Clausius la introduce como una variable de estado que captura la irreversibilidad; Boltzmann le da un significado microscópico que conecta la termodinámica con la estructura molecular de la materia; Gibbs revela la primera tensión con la física cuántica a través de su paradoja; Sackur y Tetrode la calculan desde primeros principios cuánticos y resuelven la paradoja; Planck la usa para postular la cuantización de la energía.

El gas real de Van der Waals ilustra que la entropía es sensible a la estructura microscópica: el volumen excluido reduce el espacio de microestados accesibles, y la transición de fase es una manifestación macroscópica del salto discontinuo en el número de configuraciones accesibles entre el líquido y el gas.

El mensaje central del módulo, visto a través del prisma de la entropía, es este: los conceptos termodinámicos del siglo XIX son correctos en su dominio, pero contienen dentro de sí mismos los gérmenes de su propia superación. La segunda ley no es solo una restricción sobre los procesos naturales: es la puerta de entrada a la física cuántica.

---

## 5 preguntas originales

### Pregunta 1
La fórmula de Sackur–Tetrode predice $S \to -\infty$ cuando $T \to 0$. Sin embargo, la tercera ley de la termodinámica (postulado de Nernst, 1906) establece que $S \to 0$ cuando $T \to 0$ para cualquier sistema cristalino en equilibrio. ¿Cuál hipótesis del modelo del gas ideal falla a temperatura muy baja, y qué corrección cuántica resuelve la discrepancia?

*Relevancia:* A bajas temperaturas, la longitud de onda de De Broglie $\lambda = h/\sqrt{2\pi mk_BT}$ se vuelve comparable al espaciado interparticular $n^{-1/3}$. La aproximación de gas clásico falla y debe reemplazarse por la estadística de Fermi-Dirac (fermiones) o Bose-Einstein (bosones), que sí reproducen $S \to 0$ al $T \to 0$.

---

### Pregunta 2
En el gas de Van der Waals, el parámetro $a$ no aparece en la expresión de la entropía pero sí en la energía interna. ¿Puede existir un proceso en un gas de Van der Waals con $\Delta S = 0$ y $\Delta U \neq 0$ simultáneamente? Construya un ejemplo explícito con la dirección y magnitud del trabajo involucrado.

*Relevancia:* Una expansión adiabática reversible del gas de Van der Waals satisface $dS = 0$. La variación de energía es $dU = -P\,dV + (\partial U/\partial V)_T dV = (-P + aN^2/V^2)dV \neq 0$ en general, mostrando que el trabajo realizado difiere del del gas ideal.

---

### Pregunta 3
La ley de Rayleigh-Jeans y el gas ideal comparten la misma raíz: la equipartición aplicada a un sistema con muchos grados de libertad. En el gas ideal, la equipartición también falla a baja temperatura. ¿En qué sentido es la catástrofe ultravioleta una "paradoja de Gibbs del campo electromagnético"? Señale las analogías estructurales entre ambos problemas y el tipo de corrección cuántica que cada uno requiere.

*Relevancia:* En ambos casos el conteo clásico de microestados o modos es incorrecto: el gas ignora la indistinguibilidad de las partículas; el campo electromagnético ignora la naturaleza discreta de los cuantos de energía. La corrección en el gas es el factor $1/N!$; en el campo, es la distribución de Planck (estadística de Bose-Einstein para fotones).

---

### Pregunta 4
La regla de las áreas de Maxwell determina la presión de coexistencia $P^*$. Demuestre que esta condición es equivalente a exigir que la energía libre de Gibbs $G = U - TS + PV$ sea igual en las dos fases coexistentes. ¿Por qué la igualdad del potencial químico $\mu = G/N$ es la condición de equilibrio de fase correcta y no la igualdad de entropías?

*Relevancia:* Este es el criterio correcto de equilibrio de fase: en equilibrio a $T$ y $P$ fijas, el sistema minimiza $G$. La igualdad $G_\text{liq} = G_\text{gas}$ es equivalente a la regla de Maxwell, lo que muestra la coherencia interna del formalismo termodinámico.

---

### Pregunta 5
Planck ajustó el valor de $h = 6.626\times10^{-34}$ J·s a los datos del cuerpo negro en 1900. Con esa misma constante, la fórmula de Sackur–Tetrode predice la entropía molar del argón a 25°C y 1 atm. Usando $m_\text{Ar} = 39.95$ u, calcule ese valor y compárelo con la entropía experimental de $154.8$ J/(mol·K) obtenida por integración de capacidades caloríficas desde 0 K (método calorimétrico de Nernst). ¿Qué conclusión se extrae de ese acuerdo?

*Relevancia:* El acuerdo confirma que $h$ es una constante universal —no un parámetro ajustable del cuerpo negro— y que la mecánica estadística cuántica da la entropía correcta del gas monoatómico. Es uno de los tests más directos de la coherencia entre termodinámica, mecánica estadística y mecánica cuántica.

---

## Referencias bibliográficas

### Artículos científicos originales
- Clausius, R. (1865). Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie. *Annalen der Physik*, 125, 353–400.
- Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung. *Sitzungsberichte der Akademie der Wissenschaften*, 76, 373–435.
- Van der Waals, J. D. (1873). *Over de Continuïteit van den Gas- en Vloeistoftoestand* (tesis doctoral). Universidad de Leiden.
- Gibbs, J. W. (1876–78). On the Equilibrium of Heterogeneous Substances. *Transactions of the Connecticut Academy of Arts and Sciences*, 3, 108–248; 343–524.
- Sackur, O. (1911). Die Anwendung der kinetischen Theorie der Gase auf chemische Probleme. *Annalen der Physik*, 36, 958–980.
- Tetrode, H. (1912). Die chemische Konstante der Gase und das elementare Wirkungsquantum. *Annalen der Physik*, 38, 434–442.
- Planck, M. (1900). Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum. *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245.
- Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. *Annalen der Physik*, 17, 132–148.

### Textos del curso
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 3–5.

### Textos universitarios de referencia
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley. Caps. 5–9, 15.
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 6, 9, 15.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). Freeman. Caps. 3–5.
- Pathria, R. K., & Beale, P. D. (2011). *Statistical Mechanics* (3ª ed.). Elsevier. Cap. 1–3.
- Mandl, F. (1988). *Statistical Physics* (2ª ed.). Wiley. Caps. 2, 10.

### Historia de la física
- Cercignani, C. (1998). *Ludwig Boltzmann: The Man Who Trusted Atoms*. Oxford University Press.
- Kuhn, T. S. (1978). *Black-Body Theory and the Quantum Discontinuity 1894–1912*. Oxford University Press.
- Brush, S. G. (1983). *Statistical Physics and the Atomic Theory of Matter*. Princeton University Press.

### Recursos abiertos verificados
- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, caps. 40–44. [feynmanlectures.caltech.edu](https://www.feynmanlectures.caltech.edu)
- Sethna, J. P. (2021). *Statistical Mechanics: Entropy, Order Parameters, and Complexity* (2ª ed.). [sethna.lassp.cornell.edu](https://sethna.lassp.cornell.edu/StatMech/)
- NIST CODATA. Valores de constantes fundamentales. [physics.nist.gov/cuu/Constants](https://physics.nist.gov/cuu/Constants)
