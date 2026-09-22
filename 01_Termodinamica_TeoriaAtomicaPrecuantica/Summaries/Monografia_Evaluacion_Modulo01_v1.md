# ¿Tienen los átomos existencia física real? De Boltzmann a Einstein

**Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica**
**Diplomado en Física Moderna: Termodinámica, Mecánica Cuántica y Relatividad**
Docente: Prof. Julio Eduardo Oliva Zapata | Estudiante: [Nombre] | Septiembre 2026

---

## Resumen

Durante más de cincuenta años, la física estuvo dividida por una pregunta sin respuesta experimental: ¿tienen los átomos existencia real, o son simplemente una herramienta matemática conveniente? Este informe sigue el hilo que lleva de esa pregunta a su resolución. Primero, se muestra que si los átomos existen, la entropía macroscópica de Clausius debe coincidir con el logaritmo del número de configuraciones microscópicas de Boltzmann ($S = k_B \ln \Omega$). Segundo, el propio conteo de esas configuraciones revela una propiedad profunda de los átomos: son indistinguibles entre sí, algo que la física clásica no preveía (paradoja de Gibbs). Tercero, Einstein (1905) traduce esa realidad microscópica en una predicción macroscópica directamente medible — el movimiento browniano — que Perrin verificó en el laboratorio, cerrando definitivamente el debate.

**Palabras clave:** entropía estadística, fórmula de Boltzmann, paradoja de Gibbs, función de partición, movimiento browniano, número de Avogadro.

---

## 1. Introducción

¿Tienen los átomos existencia física real, o son simplemente una herramienta matemática conveniente para describir la materia?

Esta pregunta no era filosófica: era el debate central de la física entre 1860 y 1910. Los atomistas, encabezados por Ludwig Boltzmann y James Clerk Maxwell, defendían que los fenómenos térmicos son la consecuencia directa del movimiento de millones de partículas discretas. Sus adversarios — los energetistas, liderados por Ernst Mach y Wilhelm Ostwald — sostenían que la ciencia debía limitarse a relaciones entre magnitudes observables, y que postular átomos invisibles era especulación metafísica.

Este informe responde esa pregunta siguiendo tres pasos en secuencia lógica:

1. **Demostrar que la hipótesis atómica da una definición microscópica de la entropía** equivalente a la definición macroscópica de Clausius. Si los átomos explican la entropía, tienen poder predictivo real.

2. **Mostrar que el propio conteo de configuraciones atómicas revela una propiedad inesperada de los átomos**: son indistinguibles entre sí. Este resultado, conocido como la resolución de la paradoja de Gibbs, anticipa la mecánica cuántica.

3. **Explicar cómo Einstein convirtió la hipótesis atómica en una predicción experimentalmente verificable**, al conectar las fluctuaciones microscópicas de los átomos con el movimiento observable de partículas visibles bajo el microscopio.

---

## 2. El Contexto del Debate

La segunda ley de la termodinámica, establecida por Clausius en 1865, captura una asimetría fundamental de la naturaleza: los procesos espontáneos tienen una dirección preferida. Clausius definió la entropía como la función de estado que cuantifica esa asimetría:

$$dS = \frac{\delta Q_{\text{rev}}}{T}, \qquad dS \geq 0 \text{ en sistemas aislados.}$$

Esta definición era operativamente correcta — permitía calcular variaciones de entropía en ciclos y procesos — pero no explicaba *por qué* la entropía siempre aumenta, ni *qué es* físicamente la entropía a nivel de las partículas. Esa pregunta abierta era el campo de batalla del debate.

| Postura | Representantes | Naturaleza de la materia | Interpretación de la entropía |
|---|---|---|---|
| **Energetismo** | Mach, Ostwald | Continua, sin estructura | Magnitud macroscópica abstracta |
| **Atomismo** | Boltzmann, Maxwell | Discreta: partículas en movimiento | Medida del desorden microscópico |

Boltzmann disponía de las ecuaciones, pero no de una prueba experimental irrefutable. Murió en 1906 sin ver la resolución. Einstein la proporcionó en 1905, y Perrin la confirmó entre 1908 y 1909.

---

## 3. La Respuesta de Boltzmann: la Entropía como Conteo de Configuraciones

Si los átomos existen, el estado microscópico de un gas queda determinado por las posiciones y velocidades de todas sus partículas. Para un macroestado dado (presión, temperatura, volumen), existe un número enorme $\Omega$ de configuraciones microscópicas compatibles. Boltzmann (1877) propuso que la entropía mide ese número:

$$S = k_B \ln \Omega.$$

La deducción no es arbitraria: emerge de exigir que la función buscada satisfaga dos propiedades que la entropía macroscópica ya tiene.

**Aditividad.** La entropía es extensiva: para dos sistemas independientes $A$ y $B$,
$$S_{AB} = S_A + S_B.$$

**Multiplicatividad.** Las configuraciones de dos sistemas independientes se multiplican, porque cada microestado de $A$ puede combinarse con cualquiera de los de $B$:
$$\Omega_{AB} = \Omega_A \cdot \Omega_B.$$

Buscamos entonces una función $f(\Omega)$ que convierta productos en sumas:
$$f(\Omega_A \cdot \Omega_B) = f(\Omega_A) + f(\Omega_B).$$

Diferenciando respecto a $\Omega_A$ y reorganizando, la expresión $\Omega f'(\Omega)$ debe ser una constante universal positiva. Llamándola $k_B$:
$$\Omega \frac{df}{d\Omega} = k_B \implies f(\Omega) = k_B \ln \Omega + C.$$

Fijando $C = 0$ por la condición de que un estado sin degeneración tiene entropía cero, se obtiene la fórmula grabada en la tumba de Boltzmann en el Cementerio Central de Viena:

$$\boxed{S = k_B \ln \Omega,}$$

donde $k_B = 1.381 \times 10^{-23}$ J/K.

**Verificación:** Un mol de gas ideal monoatómico duplica su volumen en una expansión libre adiabática. Al duplicar el volumen, el número de posiciones accesibles por partícula se duplica, y los microestados totales escalan como $2^{N_A}$:
$$\Delta S_{\text{Boltzmann}} = k_B \ln(2^{N_A}) = N_A k_B \ln 2 = R \ln 2 \approx 5.76 \text{ J/K.}$$
El mismo proceso calculado con Clausius da $\Delta S = nR\ln(V_2/V_1) = R\ln 2 \approx 5.76$ J/K. Las dos definiciones son equivalentes.

---

## 4. La Paradoja de Gibbs: los Átomos Revelan su Naturaleza

El conteo de microestados en la mecánica clásica trata a cada partícula como si tuviera una etiqueta individual. Esto produce una entropía que escala como $S \propto Nk_B \ln V$ — y genera una contradicción.

Consideremos dos recipientes con el mismo gas, $N$ partículas cada uno, a igual temperatura $T$ y volumen $V$. Al retirar la pared divisoria, macroscópicamente nada cambia: el sistema final es idéntico al inicial. Sin embargo, el conteo clásico predice un aumento espurio de entropía:

$$\Delta S_{\text{mezcla}} = 2Nk_B \ln(2V) - 2Nk_B \ln V = 2Nk_B \ln 2 > 0.$$

Para un mol, esto equivale a $\Delta S \approx 11.5$ J/K — un valor perfectamente medible — producido sin que haya ocurrido ningún proceso físico real. Esta es la **paradoja de Gibbs**, y revela que la expresión $S \propto Nk_B \ln V$ no es extensiva.

La solución de Gibbs (1902) es conceptualmente profunda: el error está en suponer que las partículas idénticas son distinguibles. En la naturaleza, **intercambiar dos átomos del mismo elemento no produce un nuevo estado físico**. Las $N!$ permutaciones posibles son todas el mismo estado. El conteo correcto divide por $N!$:

$$\Omega_{\text{correcto}} = \frac{1}{N!\, h^{3N}} \int \prod_{i=1}^{N} d^3q_i\, d^3p_i,$$

donde $h$ es la constante de Planck, que fija el volumen mínimo de una celda en el espacio de configuraciones. Con la aproximación de Stirling ($\ln N! \approx N\ln N - N$), la dependencia pasa de $\ln V$ a $\ln(V/N)$, que sí es extensiva. La paradoja desaparece: $\Delta S_{\text{mezcla}} = 0$.

Este resultado es más importante de lo que parece: la indistinguibilidad de los átomos, introducida aquí como corrección estadística, se convertiría en un principio fundamental de la mecánica cuántica. La estadística clásica de Maxwell-Boltzmann se generaliza en el siglo XX a las estadísticas de Fermi-Dirac y Bose-Einstein.

La colectividad canónica de Gibbs organiza todo este formalismo: para un sistema en contacto con un baño térmico a temperatura $T$, la probabilidad del microestado $i$ con energía $E_i$ es:

$$P_i = \frac{e^{-\beta E_i}}{Z}, \quad \beta = \frac{1}{k_B T}, \quad Z = \sum_i e^{-\beta E_i}.$$

La función de partición $Z$ contiene toda la información termodinámica del sistema. La energía libre de Helmholtz se obtiene directamente:

$$\boxed{F = -k_B T \ln Z,}$$

y de $F$ se recuperan por diferenciación todas las demás magnitudes: $U$, $P$ y $S$.

---

## 5. La Prueba Experimental: Einstein y el Movimiento Browniano

La teoría de Boltzmann era matemáticamente sólida, pero sus adversarios exigían una prueba experimental directa. Einstein (1905) la proporcionó con una idea elegante: si los átomos existen, sus colisiones aleatorias sobre una partícula coloidal visible deben producir un movimiento errático observable bajo el microscopio — el movimiento browniano, descrito por Robert Brown en 1827 pero nunca explicado.

La deducción combina la presión osmótica con la fricción hidrodinámica. Si un conjunto de partículas coloidales de radio $r$ suspendidas en un fluido de viscosidad $\eta$ a temperatura $T$ presenta un gradiente de concentración $\partial n/\partial x$, la presión osmótica $P_{\text{osm}} = nk_BT$ genera una fuerza neta sobre cada partícula. Esa fuerza induce un flujo de arrastre con movilidad hidrodinámica $\mu = 1/(6\pi\eta r)$ (resultado de Stokes para esferas):

$$J_{\text{arrastre}} = -\mu k_B T \frac{\partial n}{\partial x}.$$

En el estado de equilibrio dinámico, este flujo se cancela con el flujo difusivo de Fick ($J_{\text{dif}} = -D\,\partial n/\partial x$). Igualando:

$$\boxed{D = \frac{k_B T}{6\pi \eta r}.}$$

Esta es la **relación de Einstein-Smoluchowski**: un resultado macroscópicamente medible — el coeficiente de difusión $D$ — está determinado por cantidades microscópicas ($k_B T$) y macroscópicas ($\eta$, $r$). Es el primer ejemplo del *teorema de fluctuación-disipación*: la disipación viscosa y las fluctuaciones térmicas son dos caras del mismo fenómeno.

La solución de la ecuación de difusión muestra que el desplazamiento promedio es nulo, pero el desplazamiento cuadrático medio crece linealmente con el tiempo:

$$\langle x^2(t) \rangle = 2Dt = \frac{RT}{3\pi\eta r N_A}\, t.$$

Despejando el número de Avogadro:

$$\boxed{N_A = \frac{RT}{3\pi\eta r} \cdot \frac{t}{\langle x^2(t)\rangle}.}$$

Todas las variables del miembro derecho son directamente medibles en el laboratorio. Einstein había convertido la hipótesis atómica en un protocolo experimental.

**Ejercicio — Determinación de $N_A$:** Partículas esféricas de gomaguta suspendidas en agua a $T = 293$ K, con $\eta = 1.00 \times 10^{-3}$ Pa·s y radio $r = 0.50\,\mu$m. En $t = 30$ s se mide $\langle x^2 \rangle = 2.60 \times 10^{-11}$ m².

| Paso | Cálculo | Resultado |
|---|---|---|
| Coeficiente de difusión | $D = \langle x^2\rangle / 2t$ | $4.33 \times 10^{-13}$ m²/s |
| Constante de Boltzmann | $k_B = 6\pi\eta r D / T$ | $1.39 \times 10^{-23}$ J/K |
| Número de Avogadro | $N_A = R / k_B$ | $\approx 5.98 \times 10^{23}$ mol⁻¹ |

El acuerdo con el valor aceptado ($6.022 \times 10^{23}$ mol⁻¹) fue definitivo. Ante los resultados de Perrin, Ostwald reconoció públicamente en 1908 la existencia real de los átomos. Jean Perrin recibió el Premio Nobel de Física en 1926.

---

## 6. Conclusión

Los átomos tienen existencia física real. Esa es la respuesta, y el camino para llegar a ella es el argumento central del módulo.

Boltzmann demostró que si los átomos existen, la entropía macroscópica de Clausius y el logaritmo del número de configuraciones microscópicas son la misma cantidad — dos descripciones del mismo fenómeno a distinta escala. El propio conteo de esas configuraciones reveló que los átomos son indistinguibles entre sí, una propiedad que la física clásica no había anticipado y que la mecánica cuántica elevaría a principio fundamental. Finalmente, Einstein tradujo toda esa estructura teórica en una predicción experimental concreta: el desplazamiento cuadrático medio de una partícula visible en un fluido es inversamente proporcional al número de Avogadro, y Perrin lo midió.

El módulo no solo establece que los átomos son reales: muestra que las mismas herramientas que prueban su existencia — la estadística de microestados, la indistinguibilidad, la función de partición — apuntan ya hacia la física cuántica que se desarrolla en el Módulo 2.

---

## 7. Cinco Preguntas Originales

**1.** La corrección de Gibbs divide el espacio de fases por $N!$ para partículas idénticas clásicas. Esta corrección es exacta cuando la probabilidad de que dos partículas ocupen el mismo microestado elemental $h^3$ es despreciable. ¿Bajo qué condición física concreta deja de ser despreciable esa probabilidad, y qué tipo de estadística reemplaza a la de Boltzmann en ese régimen?

*Relevancia:* Cuando la longitud de onda de De Broglie $\lambda = h/\sqrt{2\pi mk_BT}$ es comparable al espaciado interparticular, las partículas no pueden distinguirse por su posición. La estadística de Maxwell-Boltzmann debe reemplazarse por la de Fermi-Dirac (electrones en metales) o Bose-Einstein (fotones, átomos de He-4 superflúido).

**2.** La relación de Einstein $D = k_BT/(6\pi\eta r)$ fue deducida para un fluido newtoniano con fricción lineal e instantánea. ¿Cómo cambiaría la forma de $\langle x^2(t)\rangle$ si el fluido tuviera memoria viscoelástica, de modo que la fuerza de fricción sobre la partícula dependiera de su historia de movimiento?

*Relevancia:* En fluidos viscoelásticos (como el citoplasma celular), $\langle x^2(t)\rangle \propto t^\alpha$ con $\alpha < 1$. Este régimen de *subdifusión* tiene consecuencias directas en biofísica: la velocidad de transporte de proteínas y organelos dentro de la célula es cualitativamente distinta del caso newtoniano.

**3.** En la colectividad canónica, la energía media es $\langle E\rangle = -\partial \ln Z/\partial\beta$. La segunda derivada, $\partial^2 \ln Z / \partial\beta^2$, también tiene significado físico. ¿A qué magnitud termodinámica medible está directamente relacionada?

*Relevancia:* $\partial^2\ln Z/\partial\beta^2 = \langle E^2\rangle - \langle E\rangle^2 = k_B T^2 C_V$, lo que conecta las fluctuaciones estadísticas microscópicas con la capacidad calorífica. Las fluctuaciones son medibles y crecen con la temperatura.

**4.** En el experimento de Perrin, $k_B$ se determinó a partir de partículas coloidales de radio $\sim 0.5\,\mu$m. El mismo valor aparece en la presión cinética de los gases para moléculas de tamaño $\sim 0.1$ nm. ¿Qué implica esa universalidad sobre la naturaleza del equilibrio térmico?

*Relevancia:* La universalidad de $k_B$ es evidencia directa de que el equilibrio térmico y el teorema de equipartición rigen a todas las escalas de tamaño, desde moléculas hasta coloides. Esta universalidad es el fundamento empírico de toda la mecánica estadística.

**5.** Con $m_{\text{Ar}} = 39.95$ u, $T = 298$ K y $P = 101{,}325$ Pa, la fórmula de Sackur-Tetrode predice la entropía molar del argón. El valor experimental, obtenido por integración calorimétrica desde 0 K, es $S/N_A = 154.8$ J/(mol·K). ¿Qué se concluye del acuerdo entre ambos valores, considerando que la constante de Planck $h$ fue determinada originalmente ajustando el espectro del cuerpo negro?

*Relevancia:* El acuerdo muestra que $h$ es una constante universal, no un parámetro libre del cuerpo negro. Es uno de los tests más directos de coherencia entre termodinámica, mecánica estadística y mecánica cuántica: tres marcos construidos independientemente producen el mismo número.

---

## 8. Referencias Bibliográficas

**Artículos originales**
- Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze... *Wiener Berichte*, 76, 373–435.
- Gibbs, J. W. (1902). *Elementary Principles in Statistical Mechanics*. Yale University Press.
- Einstein, A. (1905). Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung... *Ann. Phys.*, 17, 549–560.
- Perrin, J. (1909). Mouvement brownien et réalité moléculaire. *Ann. Chim. Phys.*, 18, 5–114.

**Texto del curso**
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. §2.4 y §2.6.

**Textos universitarios**
- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.
- Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley.
