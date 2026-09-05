# Análisis Transversal del Módulo 01: Termodinámica y Teoría Atómica Precuántica

**Diplomado en Física Moderna — Universidad de Concepción**  
**Docente Responsable:** Dr. Julio Eduardo Oliva Zapata | **Colaborador:** Dr. Pablo Solano Palma  
**Texto Guía Central:** Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Capítulos 1 y 2.  
**Material de Base:** Transcripciones completas, diapositivas y cuadernos de cómputo de las Clases 01 a 06 (Mayo – Junio 2026).

---

## 1. Introducción Epistemológica: La Gran Transición de la Física Clásica

El Módulo 01 del Diplomado en Física Moderna reconstruye uno de los arcos conceptuales más profundos y revolucionarios en la historia de la ciencia: el tránsito desde una física escolástica de fluidos continuos, imponderables y estáticos (*horror vacui*, *calórico*) hacia una física microscópica, corpuscular, mecanicista y, en última instancia, **estadística y pre-cuántica**.

A lo largo de seis sesiones magistrales dictadas por el Dr. Julio Eduardo Oliva Zapata, este módulo desmontó la visión ingenua de la termodinámica como un mero compendio de fórmulas empíricas para máquinas de vapor, revelándola como una teoría analítica de enorme elegancia matemática que obligó a replantear la estructura fundamental del espacio de fases, la flecha del tiempo y la realidad ontológica de los átomos.

```
                           ARCO CONCEPTUAL DEL MÓDULO 01
                                         │
         ┌───────────────────────────────┴───────────────────────────────┐
         ▼                                                               ▼
   Siglo XVII - XVIII: El Continuo Fenomenológico                  Siglo XIX: La Hipótesis Corpuscular
   - Torricelli (1643): Presión atmosférica                       - Bernoulli (1738) & Clausius (1857):
   - Boyle, Charles, Gay-Lussac: Leyes de gases                     Presión cinética P = (1/3) n m ⟨v²⟩
   - Teoría del Calórico: Calor como fluido                        - Temperatura = Energía cinética media
         │                                                               │
         └───────────────────────────────┬───────────────────────────────┘
                                         ▼
                 Siglo XIX (1850 - 1877): La Gran Síntesis Termodinámica
                 - Primera Ley (Joule): dU = δQ - P dV (Energía interna)
                 - Segunda Ley (Carnot, Kelvin, Clausius): Flecha del tiempo y Entropía dS = δQ_rev / T
                 - Potenciales termodinámicos (U, H, F, G) y Relaciones de Maxwell
                                         │
                                         ▼
                 Mecánica Estadística y Física Fuera del Equilibrio (1860 - 1902)
                 - Maxwell (1860): Distribución gaussiana de rapideces
                 - Clausius & Stokes: Camino libre medio λ y viscosidad gaseosa
                 - Van der Waals (1873): Gases reales y transición líquido-gas
                 - Boltzmann (1877): S = k_B ln Ω (Entropía estadística)
                 - Gibbs (1902): Colectividades canónicas e indistinguibilidad (N!)
                                         │
                                         ▼
                 La Consagración Definitiva del Átomo (1905 - 1909)
                 - Einstein (1905): Teoría del Movimiento Browniano D = k_B T / (6π η r)
                 - Jean Perrin (1908): Medición óptica directa de N_A
                 - Umbral Cuántico: Paradoja de calores específicos y Sackur-Tetrode
```

---

## 2. Articulación Temática: Mapeo de las Clases con Steven Weinberg

La estructura pedagógica del curso sigue con extraordinaria fidelidad la lógica expositiva de los dos primeros capítulos del texto guía de **Steven Weinberg (*Foundations of Modern Physics*, Cambridge, 2021)**:

| Clase | Ejes Temáticos Desarrollados | Secciones de Weinberg | Aporte Epistemológico Central |
|---|---|---|---|
| **Clase 01** | Vacío de Torricelli, barómetro, leyes empíricas de gases, modelo cinético de Bernoulli y Clausius, deducción de $P = \frac{1}{3}nm\langle v^2\rangle$. | Cap. 1: §1.1 (*Gas Properties*) | Demolición del *horror vacui*; la temperatura se revela como la energía cinética media traslacional. |
| **Clase 02** | Distribución de velocidades de Maxwell-Boltzmann, isotropía, deducción gaussiana, cálculo de momentos ($v_{mp}, \langle v\rangle, v_{rms}$), `Maxwellianas.nb`. | Cap. 1: §1.2 y Cap. 2: §2.4 (*Kinetic Theory*) | El equilibrio térmico abandona el promedio homogéneo rígido para constituirse en una función de densidad continua. |
| **Clase 03** | Fenómenos de transporte, camino libre medio ($\lambda$), viscosidad gaseosa, ley de Stokes con empuje, difusión y Fokker-Planck 1D. | Cap. 2: §2.5 (*Transport Phenomena*) | Explicación de la difusión lenta; predicción de Maxwell de la viscosidad independiente de la presión. |
| **Clase 04** | Ruptura del gas ideal, ecuación de Van der Waals ($a, b$), punto crítico ($Z_c = 3/8$), regla de Maxwell, Primera Ley y procesos adiabáticos. | Cap. 2: §2.1 (*Heat and Energy*) | Transición de fase continua líquido-vapor; el calor formalizado como energía interna desordenada (colapso del calórico). |
| **Clase 05** | Segunda Ley (Kelvin-Planck, Clausius), ciclo de Carnot, escala absoluta, entropía $dS = \delta Q_{rev}/T$, potenciales ($U,H,F,G$) y Maxwell. | Cap. 2: §2.2 (*Absolute Temp.*) y §2.3 (*Entropy*) | Fundamentación analítica de la irreversibilidad macroscópica y la geometría de los potenciales termodinámicos. |
| **Clase 06** | Mecánica estadística, fórmula de Boltzmann $S = k_B \ln \Omega$, paradoja de Gibbs ($N!$), ensambles, teoría de Einstein del movimiento browniano y Perrin. | Cap. 2: §2.4 y §2.6 (*The Atomic Scale*) | Conexión microscópica de la entropía; triunfo del atomismo frente a Mach-Ostwald y antesala cuántica. |

---

## 3. Los Tres Grandes Paradigmas Térmicos del Módulo

### 3.1. El Paradigma Fenomenológico Clásico
Representado por Carnot, Joule, Clausius y Kelvin. En este marco, no se asume ninguna hipótesis sobre la estructura atómica de la materia. El sistema se describe mediante coordenadas macroscópicas ($P, V, T$). La Primera Ley gobierna el balance energético exacto ($dU = \delta Q - P dV$), mientras que la Segunda Ley establece el principio de aumento de entropía en sistemas aislados ($dS_{\text{aislado}} \ge 0$). Es una teoría deductiva axiomática de validez universal, pero incapaz de calcular las constantes de proporcionalidad ($C_V, a, b, S_0$) desde primeros principios.

### 3.2. El Paradigma Cinético de Transporte
Iniciado por Bernoulli y culminado por Clausius, Maxwell y Stokes. Modela las moléculas como proyectiles newtonianos puntuales o esferas duras elásticas de diámetro $d$. Introduce el concepto de camino libre medio $\lambda = \frac{1}{\sqrt{2}\pi d^2 n}$ y la distribución probabilística de rapideces $P(v) = 4\pi (m/2\pi k_B T)^{3/2} v^2 e^{-m v^2 / 2 k_B T}$. Permite deducir analíticamente por qué la presión es $P = \frac{1}{3} \rho \langle v^2\rangle$ y por qué la viscosidad de un gas $\eta \propto \sqrt{m k_B T}$ no depende de su densidad.

### 3.3. El Paradigma Estadístico de Ensembles
Formulado por Boltzmann y Gibbs. Traslada el problema al espacio de fases continuo de $6N$ dimensiones. La entropía se resignifica como el logaritmo del volumen de fase accesible: $S = k_B \ln \Omega$. La función de partición canónica $Z = \sum e^{-\beta E_i}$ sintetiza todas las propiedades de equilibrio en la energía libre de Helmholtz $F = -k_B T \ln Z$. Para preservar la extensividad termodinámica y resolver la paradoja de Gibbs, la teoría exige la indistinguibilidad física de las partículas ($1/N!$) y la discretización elemental de las celdas de fase ($h^3$), anticipando la mecánica cuántica.

---

## 4. La Culminación Experimental: Einstein y Perrin (1905–1908)

El módulo culmina demostrando cómo la disputa epistemológica más feroz de la física finisecular —la controversia entre los *energetistas* (Mach, Ostwald) que negaban la realidad de los átomos y los *atomistas* (Boltzmann, Gibbs)— fue resuelta inapelablemente por Albert Einstein.

Al deducir la relación de fluctuación-disipación:
$$D = \frac{k_B T}{6\pi \eta r}$$
y demostrar que el desplazamiento cuadrático medio es $\langle x^2(t)\rangle = \frac{R T}{3\pi \eta r N_A} t$, Einstein suministró a Jean Perrin la clave para calcular el número de Avogadro $N_A \approx 6.0 \times 10^{23}\text{ mol}^{-1}$ bajo el microscopio. Este hito convirtió la hipótesis atómica en un hecho observable y abrió el camino hacia la física cuántica del siglo XX.

---

## 5. Referencias Bibliográficas

- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Capítulos 1 y 2.
- Oliva Zapata, J. E. (2026). *Apuntes y diapositivas de cátedra del Módulo 01*. UdeC.
- Boltzmann, L. (1877). *Wiener Berichte*, 76, 373.
- Einstein, A. (1905). *Annalen der Physik*, 17, 549.
- Perrin, J. (1909). *Annales de Chimie et de Physique*, 18, 5.
