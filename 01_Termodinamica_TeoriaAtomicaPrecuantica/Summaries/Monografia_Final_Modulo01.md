# Monografía Final: Del Calórico a la Fluctuación Browniana — El Triunfo de la Hipótesis Atómica en la Termodinámica Clásica

**Diplomado en Física Moderna — Módulo 01: Termodinámica y Teoría Atómica Precuántica**  
**Universidad de Concepción**  
**Docente Guía:** Dr. Julio Eduardo Oliva Zapata  
**Referencia Bibliográfica Central:** Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Capítulos 1 y 2.

---

## Resumen Ejecutivo

La física del siglo XIX estuvo marcada por una profunda tensión epistemológica entre dos concepciones ontológicas irreconciliables: la escuela fenomenológica del continuo energético (liderada por Ernst Mach, Wilhelm Ostwald y Georg Helm), que defendía que la ciencia debía restringirse a leyes macroscópicas observables sin apelar a entidades hipotéticas invisibles; y la escuela atomista y mecanicista (encabezada por Ludwig Boltzmann, James Clerk Maxwell y Rudolf Clausius), que postulaba que las leyes termodinámicas son manifestaciones estadísticas del movimiento de un número colosal de partículas discretas regidas por las leyes de la mecánica. Esta monografía reconstruye el arco analítico e histórico de dicha confrontación, examinando la demolición de la teoría del calórico mediante la Primera Ley, la formulación de la Segunda Ley y la entropía como función de estado, el desarrollo de la teoría cinética y la mecánica estadística de colectividades, y su resolución experimental definitiva a través de la teoría de Albert Einstein del movimiento browniano (1905) y las verificaciones cuantitativas de Jean Perrin (1908).

---

## 1. Introducción: El Conflicto Epistemológico del Siglo XIX

Hacia mediados del siglo XIX, la física clásica se estructuraba sobre la convicción de que la materia macroscópica podía ser modelada matemáticamente como un medio continuo homogéneo. Fenómenos como la hidrostática de fluidos, la conducción del calor de Fourier y la termodinámica de Carnot descansaban sobre ecuaciones diferenciales continuas donde el concepto de átomo era enteramente prescindible.

Para los defensores del **Energetismo**, la noción de corpúsculo material invisible constituía un residuo metafísico del mecanicismo cartesiano. Ernst Mach llegó a increpar públicamente a los partidarios de la teoría cinética con su célebre frase: *"¿Ha visto usted alguna vez un átomo?"*. La acusación principal residía en la aparente incapacidad de la teoría atómica para ofrecer predicciones observables que no pudieran derivarse de la termodinámica fenomenológica pura, sumado a la severa objeción de la reversibilidad mecánica (Paradoja de Loschmidt) frente a la irreversibilidad inexorable de la Segunda Ley.

El objetivo central de este tratado es demostrar cómo la formulación matemática rigurosa de la teoría cinética y la mecánica estadística no solo reprodujo la termodinámica macroscópica, sino que predijo fenómenos enteramente nuevos e inaccesibles al modelo continuo —específicamente las fluctuaciones mesoscópicas brownianas—, zanjando definitivamente la realidad objetiva de los átomos y abriendo el camino hacia la física cuántica.

---

## 2. El Colapso del Calórico y la Estructura de la Primera Ley

Durante más de un siglo, el calor fue concebido bajo el postulado de Antoine Lavoisier como el *calórico*: un fluido material elástico, sutil e imponderable, que repelía sus propias partículas pero era atraído por la materia ordinaria. Bajo este dogma, el calor se conservaba en toda transformación física, actuando como un fluido indestructible que caía desde un nivel térmico alto a uno bajo en las máquinas de vapor, de manera análoga al agua que mueve una rueda hidráulica (Carnot, 1824).

La bancarrota teórica del calórico se originó en las observaciones de Benjamin Thompson (Conde Rumford, 1798) durante el taladrado de cañones de bronce en Múnich, al notar que la fricción continuada producía cantidades virtualmente inagotables de calor. Si el calórico fuera una sustancia contenida en el metal, eventualmente debería agotarse.

La demolición definitiva fue consumada por James Prescott Joule (1843–1850). Mediante experimentos calorimétricos de alta precisión con paletas giratorias accionadas por pesas mecánicas, Joule estableció que una cantidad fija de trabajo mecánico disipado ($W$) genera invariablemente la misma elevación térmica ($Q$), deduciendo el equivalente mecánico universal:
$$1\text{ caloría} \approx 4.184\text{ Joules}$$

El calor no es una sustancia material, sino una **forma de energía en tránsito**. La energía total se conserva:
$$dU = \delta Q - P\, dV$$
La energía interna $U$ emerge como una función de estado matemática con diferencial exacta ($\oint dU = 0$), mientras que el calor y el trabajo representan flujos microscópicos desordenados y macroscópicos ordenados, respectivamente.

---

## 3. La Emergencia de la Irreversibilidad: De Carnot a la Entropía de Clausius

Si bien la Primera Ley garantiza la conservación energética, no explica por qué los procesos espontáneos poseen un sentido temporal preferente. La Segunda Ley fue formalizada por Rudolf Clausius (1850, 1865) a partir del análisis del ciclo ideal de cuatro etapas reversibles propuesto por Sadi Carnot (1824).

El **Teorema de Carnot** demostró que la eficiencia de cualquier máquina reversible operando entre dos temperaturas $T_H$ y $T_C$ es máxima e independiente de la sustancia de trabajo:
$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$$
lo que permitió a William Thomson (Lord Kelvin, 1848) definir la escala termodinámica absoluta.

Clausius generalizó este resultado para cualquier ciclo cerrado reversible continuo mediante su célebre teorema:
$$\oint_{\text{rev}} \frac{\delta Q}{T} = 0$$
demostrando que la cantidad $\frac{\delta Q_{\text{rev}}}{T}$ es la diferencial exacta de una nueva función de estado: la **entropía** ($S$):
$$dS = \frac{\delta Q_{\text{rev}}}{T}$$

Para sistemas aislados térmicamente ($\delta Q = 0$), los procesos irreversibles reales imponen la desigualdad:
$$\Delta S_{\text{aislado}} \ge 0$$
La entropía de un sistema aislado jamás decrece; evoluciona espontáneamente hacia un máximo en el equilibrio térmico.

---

## 4. La Reinterpretación Estadística de Boltzmann y la Paradoja de Gibbs

¿Cómo conciliar el aumento inexorable de la entropía con las leyes microscópicas de Newton, las cuales son estrictamente invariantes bajo inversión temporal ($t \to -t$)?

Ludwig Boltzmann (1877) resolvió este dilema epistemológico conectando la termodinámica con el cálculo combinatorio en el espacio de fases. La entropía no es una propiedad sustancial continua, sino el logaritmo del número de microestados microscópicos ($\Omega$) compatibles con el mismo macroestado térmico observable:
$$S = k_B \ln \Omega$$

El equilibrio termodinámico no es un estado estático; es simplemente el **macroestado de máxima probabilidad estadística**, aquel que contiene la inmensa mayoría de las configuraciones microscópicas accesibles. La irreversibilidad no es una imposibilidad mecánica absoluta, sino una **improbabilidad estadística abrumadora**.

Sin embargo, el cálculo continuo clásico de Boltzmann tropezó con una grave inconsistencia: la **Paradoja de Gibbs** (1902). Al remover un tabique entre dos gases idénticos a igual $T$ y $P$, la fórmula clásica predecía un aumento ficticio de entropía de mezcla ($\Delta S = 2Nk_B \ln 2$), violando la extensividad. J. Willard Gibbs restauró la consistencia postulando que las partículas materiales de la misma especie química son **estrictamente idénticas e indistinguibles**, obligando a dividir el espacio de fases entre $N!$. Junto con la constante de Planck ($h^3$), esto desembocó en la ecuación de Sackur-Tetrode (1912):
$$S = N k_B \left[\ln\left(\frac{V}{N}\left(\frac{4\pi m U}{3 h^2 N}\right)^{3/2}\right) + \frac{5}{2}\right]$$
Esta corrección demostró que la física estadística clásica contenía en su propio seno una semilla premonitoria de la mecánica cuántica.

---

## 5. La Prueba Decisiva: Einstein y el Movimiento Browniano (1905)

A pesar de los triunfos matemáticos de Boltzmann y Gibbs, la escuela energetista sostenía que los átomos eran meras construcciones analíticas que no podían ser detectadas de forma individual ni directa.

La estocada final al antiatomismo fue asestada por Albert Einstein en su *Annus Mirabilis* de 1905. Einstein razonó que si las moléculas de agua existen y poseen una energía cinética media $\langle E_k\rangle = \frac{3}{2} k_B T$, entonces una partícula coloidal mesoscópica suspendida en agua (visible bajo un microscopio) debe considerarse como una gigantesca molécula en equilibrio térmico.

Debido al carácter estadístico del gas molecular, los impactos que recibe la partícula coloidal en sus diferentes caras no se anulan exactamente en cada microsegundo. Las fluctuaciones térmicas aleatorias generan una fuerza impulsora difusiva desbalanceada. Equilibrando la presión osmótica de difusión ($J = -D \nabla n$) con la resistencia hidrodinámica viscosa de Stokes ($F = 6\pi\eta r v$), Einstein derivó analíticamente la **relación de fluctuación-disipación**:
$$D = \frac{k_B T}{6\pi \eta r} = \frac{R T}{6\pi \eta r N_A}$$

A partir de la ecuación de difusión deducida en la teoría de procesos estocásticos, el desplazamiento medio de la partícula es cero ($\langle x(t)\rangle = 0$), pero su **desplazamiento cuadrático medio** crece linealmente con el tiempo:
$$\langle x^2(t)\rangle = 2 D t = \frac{R T}{3\pi \eta r N_A}\, t \implies \Delta x_{\text{rms}} = \sqrt{\frac{R T}{3\pi \eta r N_A}}\,\sqrt{t}$$

### La Verificación de Jean Perrin
En la fórmula de Einstein, todas las magnitudes son medibles mediante aparatos de laboratorio ordinarios: la temperatura $T$, la viscosidad del líquido $\eta$, el radio coloidal $r$, el tiempo transcurrido $t$, y el desplazamiento experimental $\langle x^2\rangle$ observado con un micrómetro acoplado al microscopio.

Jean Perrin (1908–1909) preparó suspensiones de esferas idénticas de gomaguta y mastique, midió miles de trayectorias individuales y aisló el valor numérico del número de Avogadro:
$$N_A \approx (6.0 \pm 0.2) \times 10^{23}\text{ mol}^{-1}$$
El valor obtenido coincidía exactamente con las determinaciones independientes provenientes del cuerpo negro de Planck, la ley de los gases y la electrólisis de Faraday.

Ante esta evidencia experimental convergente e irrebatible, Wilhelm Ostwald reconoció públicamente en 1908 la realidad física discontinua de los átomos. La hipótesis atómica había triunfado de manera irreversible.

---

## 6. Conclusiones y Epílogo hacia la Mecánica Cuántica

1. **Unificación Mecánico-Estadística:** La termodinámica macroscópica no es una disciplina aislada ni opuesta a la mecánica newtoniana; es la mecánica de sistemas con $10^{23}$ grados de libertad gobernada por las leyes de la probabilidad en el espacio de fases.
2. **Naturaleza de la Entropía:** La entropía de Clausius ($dS = \delta Q_{rev}/T$) encuentra su fundamento microscópico ontológico en el principio combinatorio de Boltzmann: $S = k_B \ln \Omega$. La irreversibilidad es la evolución espontánea hacia estados con un volumen de fase exponencialmente mayor.
3. **Fluctuación-Disipación:** El movimiento browniano demostró que los mismos choques microscópicos que causan la disipación irreversible (viscosidad $\eta$) generan simultáneamente las fluctuaciones térmicas estocásticas observables ($D = \frac{k_BT}{6\pi\eta r}$).
4. **El Umbral Cuántico:** La consagración de la teoría atómica no cerró la física, sino que abrió una crisis más profunda: la catástrofe de los calores específicos a bajas temperaturas ($C_V \to 0$), la radiación de cavidad y el volumen elemental de celda $h^3$ en la fórmula de Sackur-Tetrode revelaron que la mecánica clásica de partículas continuas requería una revolución aún más radical: la **cuantización de la energía**, objeto del Módulo 02.

---

## 7. Referencias Bibliográficas Canónicas

1. **Fuentes Primarias Históricas:**
   - Carnot, S. (1824). *Réflexions sur la puissance motrice du feu*. París: Bachelier.
   - Joule, J. P. (1850). "On the Mechanical Equivalent of Heat". *Philosophical Transactions of the Royal Society of London*, 140, 61–82.
   - Clausius, R. (1865). "Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie". *Annalen der Physik*, 125, 353–400.
   - Maxwell, J. C. (1860). "Illustrations of the Dynamical Theory of Gases". *Philosophical Magazine*, 19, 19–32.
   - Boltzmann, L. (1877). "Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung". *Wiener Berichte*, 76, 373–435.
   - Gibbs, J. W. (1902). *Elementary Principles in Statistical Mechanics*. Nueva York: Charles Scribner's Sons.
   - Einstein, A. (1905). "Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen". *Annalen der Physik*, 17, 549–560.
   - Perrin, J. (1909). "Mouvement brownien et réalité moléculaire". *Annales de Chimie et de Physique*, 18, 5–114.
2. **Tratados Universitarios Modernos:**
   - Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. Capítulos 1 y 2.
   - Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Wiley.
   - Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.
   - Pathria, R. K., & Beale, P. D. (2011). *Statistical Mechanics* (3ª ed.). Academic Press.
