# Análisis Clase 04: Dinámica de la Radiación, Coeficientes de Einstein y Física del Láser

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Pablo Andrés Solano Palma  
**Fecha:** 24 de julio de 2026  
**Resultados de Aprendizaje cubiertos:** RA 3 (Describir las propiedades de los fotones y su rol en procesos ópticos, químicos y astrofísicos) y RA 6 (Analizar los procesos de emisión y absorción de radiación y sus aplicaciones en física nuclear y fotoquímica).  
**Fuentes:** Transcripción de video (clase 24 jul 2026, 3h 00m) · Presentación de diapositivas PPTX Clase 4 (27 diapositivas) · Weinberg, *Foundations of Modern Physics* (2021), cap. 3 · Bibliografía externa verificada (Griffiths, Sakurai, Saleh-Teich, Svelto, Siegman).

---

## 1. Introducción y Planteamiento del Problema Físico

*Fuente principal: Transcripción de video, min 20:00–26:00; Diapositivas PPTX, láminas 3–5. Fuente complementaria: Weinberg, S., Foundations of Modern Physics, Cambridge University Press, 2021, sec. 3.2.*

La teoría cuántica temprana resolvió la crisis de la radiación térmica postulando que la energía intercambiada entre la materia y el campo electromagnético está cuantizada en paquetes de magnitud $E = hf$ (Planck, 1900; Einstein, 1905). Posteriormente, el modelo atómico de Bohr (1913) estableció que los electrones ocupan órbitas o estados discretos y estacionarios con energías $E_n, E_m$.

Sin embargo, estos modelos iniciales dejaron abiertas interrogantes dinámicas cruciales:
1. ¿Por qué un átomo en un estado excitado no permanece en dicho estado indefinidamente?
2. ¿Qué mecanismo microscópico "empuja" al electrón a decaer hacia un nivel de menor energía y emitir un cuanto de luz?
3. ¿Cómo interactúa dinámicamente un conjunto de átomos cuando se encuentra inmerso dentro de un **"baño" o reservorio de fotones térmicos** (campo de radiación de cuerpo negro a temperatura finita $T$)?

### 1.1. El Oscilador Armónico como Modelo Universal en Física

Como discusión introductoria de alto valor pedagógico en clase, el docente clarifica por qué el oscilador armónico es el paradigma central de la física:
- **Universalidad:** Toda perturbación pequeña alrededor de un mínimo estable de potencial $V(x)$ puede aproximarse mediante una parábola $V(x) \approx V(x_0) + \frac{1}{2}k(x-x_0)^2$, lo que genera dinámicas lineales cuya frecuencia es independiente de la amplitud (comportamiento armónico).
- **Dualidad de Aplicación en Radiación:** En el problema del cuerpo negro, el oscilador armónico interviene en dos frentes:
  1. En el **campo electromagnético**, donde cada modo espacial de la cavidad oscila sinusoidalmente como un oscilador armónico desacoplado.
  2. En la **materia**, donde los electrones ligados en los átomos o redes sólidas vibran respecto al núcleo atómico, acelerando y radiando ondas electromagnéticas según la electrodinámica clásica (fórmula de potencia radiada de Larmor: $P = \frac{q^2 a^2}{6\pi \varepsilon_0 c^3}$).

---

## 2. Los Tres Procesos Fundamentales de Einstein (1917)

*Fuente principal: Einstein, A., "Zur Quantentheorie der Strahlung", Physikalische Zeitschrift, 18, 121–128, 1917; Diapositivas PPTX, láminas 5–6. Fuente complementaria: Griffiths, D. J., Introduction to Quantum Mechanics, 3ª ed., sec. 9.3.*

En 1917, Albert Einstein publicó un artículo seminal donde reformuló completamente la interacción entre radiación y materia. Para un átomo con dos niveles discretos de energía $E_n$ (estado fundamental) y $E_m$ (estado excitado), con diferencia energética:

$$hf = E_m - E_n \qquad (E_m > E_n)$$

Einstein postuló que la transición entre estos estados está gobernada por tres procesos estocásticos elementales:

```
        Nivel Excitado E_m  ─────────────────────────
                             ▲        │         │
                             │        │ A_nm    │ B_nm ρ(f)
             Absorción       │        ▼         ▼ Emisión
             B_mn ρ(f)       │     Emisión        Estimulada
                             │    Espontánea    │
        Nivel Basal E_n     ─────────────────────────
```

### 2.1. Emisión Espontánea ($A_{nm}$)

Un átomo situado en el nivel excitado $E_m$ tiene una probabilidad por unidad de tiempo intrínseca e independiente del campo externo de decaer al nivel $E_n$, emitiendo un fotón de energía $hf = E_m - E_n$.
- La tasa de decaimiento por átomo es $A_{nm}$ (unidades de $\text{s}^{-1}$).
- La probabilidad de decaimiento en un intervalo diferencial $dt$ es $dP = A_{nm} dt$.
- El tiempo de vida radiativo espontáneo del estado excitado es $\tau_{sp} = \frac{1}{A_{nm}}$.

*(Interpretación moderna en Electrodinámica Cuántica):* Históricamente catalogada como un evento puramente espontáneo y probabilístico, la electrodinámica cuántica (QED) demostró posteriormente que la emisión espontánea es en realidad **emisión estimulada por las fluctuaciones cuánticas del estado de vacío** del campo electromagnético, cuya densidad de energía de punto cero es $\frac{1}{2}\hbar\omega$ por modo.

### 2.2. Absorción Estimulada ($B_{mn}\rho(f)$)

Un átomo en el nivel fundamental $E_n$, al estar expuesto a una densidad espectral de energía de radiación $\rho(f)$ (energía por unidad de volumen y de frecuencia, en $\text{J}\cdot\text{m}^{-3}\cdot\text{Hz}^{-1}$), puede absorber un fotón de energía $hf$ y transicionar al estado excitado $E_m$.
- La tasa de transición por átomo es directamente proporcional a la intensidad del campo circundante: $W_{abs} = B_{mn}\rho(f)$.
- $B_{mn}$ es el coeficiente de Einstein para la absorción (unidades $\text{m}^3\cdot\text{J}^{-1}\cdot\text{s}^{-2}$).

### 2.3. Emisión Estimulada ($B_{nm}\rho(f)$)

El postulado más revolucionario de Einstein fue la existencia de la **emisión estimulada**: si un átomo se encuentra en el nivel excitado $E_m$ y sobre él incide un fotón de frecuencia resonante $f = (E_m - E_n)/h$, dicho fotón puede estimular o forzar al electrón a desexcitarse hacia $E_n$, emitiendo un **segundo fotón** que posee idéntica frecuencia, fase, dirección y estado de polarización que el fotón incidente.
- La tasa de transición estimulada por átomo excitado es $W_{stim} = B_{nm}\rho(f)$.
- $B_{nm}$ es el coeficiente de Einstein para la emisión estimulada.

---

## 3. Derivación Rigurosa de las Ecuaciones de Tasa y Relaciones de Einstein

*Fuente principal: Diapositivas PPTX, láminas 7–9; Transcripción de video, min 46:00–1:15:00. Fuente complementaria: Reif, F., Fundamentals of Statistical and Thermal Physics, McGraw-Hill, cap. 9; Mandl, F., Statistical Physics, 2ª ed., Wiley, sec. 10.4.*

### 3.1. Ecuaciones Diferenciales de Población

Considérese un ensamble de $N$ átomos idénticos de dos niveles en un volumen $V$. Sean $N_n(t)$ y $N_m(t)$ el número total de átomos en los estados $E_n$ y $E_m$ respectivamente ($N = N_n + N_m$).

La variación temporal del número de átomos en el estado fundamental $N_n(t)$ se rige por:

$$\frac{dN_n(t)}{dt} = \underbrace{N_m(t) A_{nm}}_{\text{Ganancia por emisión espontánea}} + \underbrace{N_m(t) B_{nm}\rho(f)}_{\text{Ganancia por emisión estimulada}} - \underbrace{N_n(t) B_{mn}\rho(f)}_{\text{Pérdida por absorción}}$$

Por conservación del número total de átomos ($\frac{dN_n}{dt} + \frac{dN_m}{dt} = 0$), la variación del nivel excitado es:

$$\frac{dN_m(t)}{dt} = N_n(t) B_{mn}\rho(f) - N_m(t)\left[A_{nm} + B_{nm}\rho(f)\right]$$

### 3.2. Condición de Equilibrio Estadístico Estacionario

Cuando el sistema átomo-radiación alcanza el equilibrio termodinámico a temperatura absoluta $T$, las poblaciones macroscópicas se estabilizan, anulándose las derivadas temporales:

$$\frac{dN_n}{dt} = 0 \iff \frac{dN_m}{dt} = 0$$

Esto impone el **principio de balance detallado**: la tasa total de absorción debe ser idéntica a la suma de todas las tasas de emisión:

$$N_n B_{mn}\rho(f) = N_m A_{nm} + N_m B_{nm}\rho(f) \tag{1}$$

### 3.3. Despeje Algebraico de la Densidad Espectral $\rho(f)$

Agrupando los términos que contienen la densidad espectral $\rho(f)$ en el miembro izquierdo:

$$N_n B_{mn}\rho(f) - N_m B_{nm}\rho(f) = N_m A_{nm}$$

$$\rho(f)\left[N_n B_{mn} - N_m B_{nm}\right] = N_m A_{nm}$$

Dividiendo ambos lados de la ecuación entre el producto $N_m$:

$$\rho(f)\left[\left(\frac{N_n}{N_m}\right)B_{mn} - B_{nm}\right] = A_{nm}$$

Despejando explícitamente $\rho(f)$:

$$\rho(f) = \frac{A_{nm}}{\left(\dfrac{N_n}{N_m}\right)B_{mn} - B_{nm}} \tag{2}$$

### 3.4. Incorporación del Factor de Boltzmann

En equilibrio térmico a temperatura $T$, la distribución canónica de Boltzmann dicta la razón exacta entre las poblaciones de los dos estados cuánticos:

$$\frac{N_m}{N_n} = \frac{g_m e^{-E_m/k_BT}}{g_n e^{-E_n/k_BT}} = \frac{g_m}{g_n} e^{-(E_m - E_n)/k_BT} = \frac{g_m}{g_n} e^{-hf/k_BT}$$

Asumiendo niveles no degenerados ($g_n = g_m = 1$):

$$\frac{N_m}{N_n} = e^{-hf/k_BT} \implies \frac{N_n}{N_m} = e^{hf/k_BT} \tag{3}$$

Sustituyendo (3) en la ecuación (2):

$$\boxed{\rho(f) = \frac{A_{nm}}{B_{mn} e^{hf/k_BT} - B_{nm}}} \tag{4}$$

### 3.5. Correspondencia Término a Término con la Ley de Radiación de Planck

La densidad espectral de energía de radiación de un cuerpo negro derivada por Max Planck (1900) viene dada rigurosamente por:

$$\rho_{Planck}(f) = \frac{8\pi h f^3}{c^3} \cdot \frac{1}{e^{hf/k_BT} - 1} \tag{5}$$

Para que la ecuación fenomenológica (4) reproduzca **exactamente** la ley experimental y universal de Planck (5) para cualquier temperatura $T$ ($0 < T < \infty$), se reescribe (4) factorizando el coeficiente $B_{nm}$:

$$\rho(f) = \frac{A_{nm}}{B_{nm}} \cdot \frac{1}{\left(\dfrac{B_{mn}}{B_{nm}}\right) e^{hf/k_BT} - 1} \tag{6}$$

Comparando término a término (6) con (5):

$$\frac{A_{nm}}{B_{nm}} \cdot \frac{1}{\left(\dfrac{B_{mn}}{B_{nm}}\right) e^{hf/k_BT} - 1} \equiv \frac{8\pi h f^3}{c^3} \cdot \frac{1}{e^{hf/k_BT} - 1}$$

De esta identidad matemática se desprenden obligatoriamente las **dos relaciones fundamentales de Einstein**:

#### 1. Simetría de Coeficientes de Absorción y Emisión Estimulada
$$\boxed{B_{mn} = B_{nm} \equiv B} \tag{7}$$

*Interpretación física:* La probabilidad cuántica intrínseca de que un fotón sea absorbido por un átomo en el estado basal es exactamente igual a la probabilidad de que un fotón idéntico induzca la emisión en un átomo excitado.

#### 2. Razón Fundamental entre Coeficientes de Einstein
$$\boxed{\frac{A_{nm}}{B_{nm}} = \frac{8\pi h f^3}{c^3}} \tag{8}$$

*Interpretación física:*
- La tasa de emisión espontánea $A_{nm}$ no es una variable libre e independiente: está unívocamente determinada por el coeficiente de emisión estimulada $B_{nm}$ multiplicado por la densidad de modos del vacío $\frac{8\pi f^2}{c^3}$ y la energía del fotón $hf$.
- **Dependencia con $f^3$:** El cociente $A/B$ escala cúbicamente con la frecuencia. En el espectro de radio y microondas ($f \sim 10^6 - 10^{10}\ \text{Hz}$), $A \ll B\rho$, predominando los procesos estimulados. En el rango óptico, ultravioleta y de rayos X ($f \sim 10^{14} - 10^{18}\ \text{Hz}$), $A \gg B\rho$, de modo que los átomos excitados decaen de forma casi instantánea por emisión espontánea, haciendo extremadamente difícil la amplificación coherente a altas frecuencias.

---

## 4. El "Fotón Clonado": Coherencia Cuántica y Estadística Bosónica

*Fuente principal: Diapositivas PPTX, lámina 11; Transcripción de video, min 1:26:00–1:40:00. Fuente complementaria: Saleh, B. E. A., Teich, M. C., Fundamentals of Photonics, 3ª ed., Wiley, 2019, cap. 13.*

### 4.1. Propiedades de Identidad Total del Fotón Estimulado

Cuando un fotón induce la transición de un electrón desde $E_m$ hacia $E_n$, el campo electromagnético resultante se describe microscópicamente como la adición coherente de dos paquetes de onda:

1. **Frecuencia idéntica ($f = f_0$):** Por estricta conservación de energía, la energía del segundo fotón es exactamente $E = hf$.
2. **Fase idéntica ($\phi = \phi_0$):** Las crestas y valles del campo eléctrico oscilan en perfecta sincronía temporal y espacial con el fotón estimulador, produciendo una interferencia constructiva total ($E_{total} = E_1 + E_2 \implies I \propto |E_1 + E_2|^2 = 4I_0$).
3. **Dirección idéntica ($\hat{\mathbf{k}} = \hat{\mathbf{k}}_0$):** Por conservación del momento lineal cuántico ($\mathbf{p} = \hbar \mathbf{k}$), el fotón emitido se propaga a lo largo del mismo vector de onda $\mathbf{k}$.
4. **Polarización idéntica ($\hat{\boldsymbol{\epsilon}} = \hat{\boldsymbol{\epsilon}}_0$):** El vector de polarización del campo radiado coincide exactamente con la del fotón incidente.

### 4.2. Mecanismo Físico de Resonancia y Dualidad

Pedagógicamente, el proceso se comprende como una resonancia inducida:
- El campo eléctrico oscilante del fotón incidente fuerza a la nube electrónica del átomo a oscilar armónicamente a la frecuencia resonante $f$.
- Como dipolo oscilante acelerado, la nube electrónica emite radiación electromagnética que reproduce la frecuencia, fase y polarización de la fuerza impulsora.
- *Dualidad Onda-Corpúsculo:* Desde la perspectiva ondulatoria, se trata de una onda de mayor amplitud por superposición constructiva; desde la perspectiva corpuscular, se detectan dos paquetes discretos de energía $hf$ y momento $\hbar k$ en el mismo estado cuántico de ocupación.

### 4.3. Naturaleza Bosónica del Fotón

Los fotones poseen espín entero ($S = 1$) y obedecen la estadística cuántica de Bose-Einstein. El operador de creación fotónico $\hat{a}^\dagger$ actuando sobre un estado de Fock con $n$ fotones cumple:

$$\hat{a}^\dagger |n\rangle = \sqrt{n+1} |n+1\rangle$$

La probabilidad de emitir un fotón adicional en un modo que ya contiene $n$ fotones es proporcional a:

$$P_{emisión} \propto |\langle n+1|\hat{a}^\dagger|n\rangle|^2 = n + 1$$

- El término $+1$ representa la **emisión espontánea** (ocurre incluso si $n = 0$, estimulada por el vacío).
- El término $+n$ representa la **emisión estimulada** (proporcional al número de fotones $n$ presentes en el modo, que es proporcional a $\rho(f)$).

---

## 5. Fenómeno de Absorción Suprimida y Aplicación Astrofísica

*Fuente principal: Diapositivas PPTX, lámina 12; Transcripción de video, min 1:40:00–1:48:00. Fuente complementaria: Rybicki, G. B., Lightman, A. P., Radiative Processes in Astrophysics, Wiley-VCH, 1979, cap. 10.*

### 5.1. Régimen de Alta Temperatura o Baja Energía ($hf \ll k_BT$)

En el régimen donde la energía del fotón es mucho menor que la energía térmica del medio ($hf \ll k_BT$), la razón de poblaciones de Boltzmann se aproxima a la unidad mediante expansión de Taylor ($e^{-x} \approx 1 - x$):

$$\frac{N_m}{N_n} = e^{-hf/k_BT} \approx 1 - \frac{hf}{k_BT} \approx 1 \implies N_m \approx N_n$$

Bajo esta condición:
- La tasa total de absorción es $R_{abs} = N_n B \rho(f)$.
- La tasa total de emisión estimulada es $R_{stim} = N_m B \rho(f) \approx N_n B \rho(f)$.
- La absorción neta del medio es:
$$\Delta R = R_{abs} - R_{stim} = (N_n - N_m) B \rho(f) \approx N_n \left(\frac{hf}{k_BT}\right) B \rho(f) \to 0$$

Por cada fotón incidente absorbido por un átomo en el nivel basal, un átomo en el nivel excitado emite un fotón estimulado idéntico en la misma dirección. En promedio macroscópico, el haz de luz atraviesa el medio sin sufrir atenuación: este fenómeno se denomina **absorción suprimida** o transparencia inducida térmicamente.

### 5.2. Aplicación Astrofísica: La Línea de 21 cm del Hidrógeno Neutro (HI)

El hidrógeno atómico neutro en su estado basal ($1s$) presenta una estructura hiperfina debido a la interacción magnética dipolar entre el espín del electrón ($S_e = 1/2$) y el espín del protón ($S_p = 1/2$):
- **Nivel Superior:** Espines paralelos ($F = 1$, triplete).
- **Nivel Inferior:** Espines antiparalelos ($F = 0$, singlete).
- **Diferencia de Energía:** $\Delta E = 5.874 \times 10^{-6}\ \text{eV} = 9.412 \times 10^{-25}\ \text{J}$.
- **Frecuencia Resonante:** $\nu_{HI} = \frac{\Delta E}{h} \approx 1420.405\ \text{MHz}$.
- **Longitud de Onda en el Vacío:** $\lambda = \frac{c}{\nu_{HI}} \approx 21.106\ \text{cm}$.

Dado que la temperatura del medio interestelar es $T \sim 10 - 100\ \text{K}$, la energía térmica $k_BT \sim 10^{-3}\ \text{eV}$ es órdenes de magnitud mayor que $\Delta E$ ($hf/k_BT \sim 10^{-3} \ll 1$).

**Consecuencias para la Cartografía Galáctica:**
1. **Transparencia frente al Polvo Interestelar:** La radiación de 21 cm no es absorbida ni dispersada por los granos de polvo cósmico (cuyo tamaño $\sim 0.1\ \mu\text{m} \ll 21\ \text{cm}$), atravesando el disco galáctico de lado a lado.
2. **Medición de Cinemática por Efecto Doppler:** La velocidad radial del gas $v_r$ desplaza la frecuencia observada según $\frac{\Delta\nu}{\nu_0} = -\frac{v_r}{c}$, permitiendo determinar las curvas de rotación galáctica (evidencia de materia oscura) y mapear los brazos espirales de la Vía Láctea.
3. **Dinámica de las Nubes de Magallanes:** Las observaciones Doppler en 21 cm evidencian que la Gran y Pequeña Nube de Magallanes se desplazan a altas velocidades relativas hacia la Vía Láctea, trazando su interacción gravitacional y futura colisión.

---

## 6. Física del Láser e Inversión de Población

*Fuente principal: Diapositivas PPTX, láminas 17–19; Transcripción de video, min 2:05:00–2:35:00. Fuente complementaria: Svelto, O., Principles of Lasers, 5ª ed., Springer, 2010, caps. 1 y 2; Siegman, A. E., Lasers, University Science Books, 1986.*

### 6.1. Definición y Acrónimo

El término **LÁSER** es el acrónimo de **L**ight **A**mplification by **S**timulated **E**mission of **R**adiation (Amplificación de Luz por Emisión Estimulada de Radiación).

Para que un haz de luz que se propaga a lo largo del eje $z$ experimente ganancia óptica ($dI/dz > 0$) en un medio con coeficiente de ganancia $\gamma(f)$:

$$\frac{dI}{dz} = \gamma(f) I(z) \implies I(z) = I(0) e^{\gamma(f) z}$$

El coeficiente de ganancia neta por unidad de longitud viene dado por:

$$\gamma(f) = \sigma_{stim}(f) \left(N_m - N_n\right)$$

donde $\sigma_{stim}(f) = \frac{c^2}{8\pi f^2} A_{nm} g(f)$ es la sección eficaz de emisión estimulada y $g(f)$ es el perfil espectral de línea.
- Si $N_m < N_n \implies \gamma(f) < 0$ (Atenuación / Absorción neta).
- Si $N_m = N_n \implies \gamma(f) = 0$ (Transparencia / Saturación).
- Si $N_m > N_n \implies \gamma(f) > 0$ (**Amplificación Láser**).

### 6.2. La Barrera Térmica del Equilibrio

En equilibrio termodinámico a cualquier temperatura positiva $T > 0$, la distribución de Boltzmann impone:

$$\frac{N_m}{N_n} = e^{-hf/k_BT} < 1 \implies N_m < N_n$$

Por ende, **es físicamente imposible obtener amplificación láser en un sistema en equilibrio térmico**. Es indispensable llevar el sistema a un estado de **no-equilibrio** forzado mediante fuentes externas de energía (**bombeo**), logrando la **inversión de población**:

$$\boxed{N_m > N_n \qquad \text{(Inversión de Población)}}$$

### 6.3. Imposibilidad del Láser en Sistemas de Dos Niveles bajo Bombeo Óptico

En un sistema cerrado de dos niveles sometido a un campo de bombeo óptico intenso $\rho_p$:

$$\frac{dN_m}{dt} = N_n B \rho_p - N_m B \rho_p - N_m A = 0$$

$$\frac{N_m}{N_n} = \frac{B\rho_p}{A + B\rho_p} \xrightarrow{\rho_p \to \infty} 1 \implies N_m = N_n = \frac{N_{total}}{2}$$

En el límite de bombeo infinito, la tasa de emisión estimulada iguala exactamente a la tasa de absorción (saturación). **Nunca se puede lograr $N_m > N_n$ en un sistema de 2 niveles cerrado**.

### 6.4. Esquema de Bombeo de Tres Niveles

Para eludir la barrera de saturación, Maiman (1960) implementó el esquema de tres niveles en el láser de Rubí ($\text{Cr}^{3+}:\text{Al}_2\text{O}_3$):

```
   Nivel 3 (Banda de Excitación) ──────────────────────────
                                       ▲               │
                                       │ Bombeo Óptico │ Decaimiento no radiativo
                                       │ Rápido (W_p)  │ ultra-rápido (τ_32 ~ 10^-11 s)
                                       │               ▼
   Nivel 2 (Nivel Metaestable)         │            ────────────────────────
                                       │               │
                                       │               │ Transición Láser (hν_21)
                                       │               │ (A_21 pequeño, τ_21 ~ 3 ms)
                                       │               ▼
   Nivel 1 (Estado Fundamental)        ─────────────────────────────────────
```

**Dinámica del Sistema de 3 Niveles:**
1. **Bombeo ($1 \to 3$):** Una fuente externa (lámpara de destello) excita electrones desde el estado fundamental (1) hacia la banda ancha superior (3).
2. **Relajación no radiativa ($3 \to 2$):** Mediante interacción con fonones de la red, los átomos decaen con extrema rapidez ($\tau_{32} \sim 10^{-11}\ \text{s}$) al nivel 2.
3. **Acumulación en el Estado Metaestable (2):** El nivel 2 posee una regla de selección de espín o paridad que prohíbe la transición dipolar eléctrica directa al nivel fundamental, otorgándole un tiempo de vida extraordinariamente largo ($\tau_{21} \sim 3\ \text{ms} \gg \tau_{32}$).
4. **Inversión y Emisión Láser ($2 \to 1$):** La acumulación en el nivel 2 supera el 50% de la población total del cristal, logrando $N_2 > N_1$ y desatando la emisión estimulada coherente.

*(Nota: En sistemas de 4 niveles, como el Nd:YAG, la transición láser ocurre hacia un nivel intermedio 1 que se vacía casi instantáneamente hacia el fundamental 0, permitiendo umbrales de bombeo mucho más bajos).*

---

## 7. Clasificación y Mecanismos de Sistemas Láser Modernos

*Fuente principal: Diapositivas PPTX, lámina 20. Fuente complementaria: Yariv, A., Quantum Electronics, 3ª ed., Wiley, cap. 10.*

| Tipo de Láser | Medio Activo | Longitud de Onda ($\lambda$) | Mecanismo de Bombeo | Aplicaciones Principales |
|---|---|---|---|---|
| **Semiconductor (Diodo)** | Uniones p-n (GaAs, InGaAsP, GaN) | $405\ \text{nm}$ (azul) a $1550\ \text{nm}$ (IR) | Inyección de corriente eléctrica directa | Telecomunicaciones por fibra óptica, lectores de código de barras, almacenamiento óptico, punteros. |
| **Gas ($\text{CO}_2$)** | Moléculas de $\text{CO}_2$, $\text{N}_2$, $\text{He}$ | $10.6\ \mu\text{m}$ (Infrarrojo lejano) | Descarga eléctrica por arco en gas | Corte y soldadura industrial de metales pesados, manufactura, cirugía de tejidos blandos. |
| **Gas ($\text{He-Ne}$)** | Mezcla gaseosa de Helio y Neón | $632.8\ \text{nm}$ (Rojo visible) | Descarga eléctrica continua en gas | Alineación óptica de precisión, metrología de laboratorio, interferometría y holografía. |
| **Estado Sólido ($\text{Nd:YAG}$)** | Granate de itrio y aluminio dopado con Neodimio | $1064\ \text{nm}$ (fundamental), $532\ \text{nm}$ (2º armónico) | Bombeo óptico por lámparas o diodos láser | Cirugía oftalmológica, dermatología, corte de microelectrónica, aplicaciones de defensa y LIDAR. |
| **Colorante Líquido / Fibra** | Moléculas orgánicas (Rodamina 6G) en solvente / Fibra dopada Erbio | Sintonizable continua ($400 - 900\ \text{nm}$) / $1550\ \text{nm}$ | Bombeo óptico por otro láser | Espectroscopía atómica de alta resolución, amplificadores ópticos de telecomunicación transoceánica (EDFA). |

---

## 8. Propiedades de la Radiación Láser y Aplicaciones Tecnológicas

*Fuente principal: Diapositivas PPTX, láminas 21–24; Transcripción de video, min 2:35:00–2:45:00.*

### 8.1. Coherencia Espacial y Enfoque al Límite de Difracción

La coherencia espacial describe la correlación de fase entre dos puntos transversales del frente de onda.
- **Mecanismo Físico:** Todos los puntos del frente de onda oscilan en fase, comportándose como una onda esférica o plana perfecta sin aberraciones aleatorias.
- **Enfoque Micrométrico:** Una lente de apertura numérica $\text{NA}$ puede enfocar el haz láser en un punto cuyo diámetro está limitado únicamente por la difracción:
$$d_{spot} \approx 1.22 \frac{\lambda}{\text{NA}} \sim 1\ \mu\text{m}$$
- **Concentración de Potencia:** Un haz de $5\ \text{W}$ enfocado en un área de $1\ \mu\text{m}^2$ genera una irradiancia de:
$$I = \frac{P}{A} = \frac{5\ \text{W}}{\pi (0.5 \times 10^{-6}\ \text{m})^2} \approx 6.37 \times 10^{12}\ \text{W/m}^2 = 637\ \text{kW/cm}^2$$
- **Aplicaciones:** Cirugía ocular refractiva LASIK (ablación precisa de la córnea sin calentar el tejido adyacente) y microfabricación de circuitos integrados (fotolitografía EUV a $13.5\ \text{nm}$).

### 8.2. Coherencia Temporal y Monocromaticidad

La coherencia temporal mide el intervalo de tiempo $\tau_c$ sobre el cual la onda electromagnética mantiene una relación de fase determinista y predecible.
- **Longitud de Coherencia:** $L_c = c \tau_c = \frac{c}{\Delta\nu}$, donde $\Delta\nu$ es el ancho de línea espectral.
- En láseres estabilizados, $\Delta\nu$ puede ser de pocos Hertz, arrojando longitudes de coherencia de miles de kilómetros (frente a pocos micrómetros en ampolletas incandescentes).
- **Aplicación:** Multiplexación por División de Longitud de Onda Densa (DWDM) en redes de fibra óptica a $1550\ \text{nm}$, transmitiendo decenas de terabits por segundo en cientos de canales ultra-cercanos en frecuencia sin interferencia mutua.

### 8.3. Alta Direccionalidad y Colimación

El ángulo de divergencia angular $\theta$ de un haz láser gaussiano de cintura $w_0$ está dado por:

$$\theta = \frac{\lambda}{\pi w_0}$$

Para un haz con $w_0 = 1\ \text{cm}$ a $\lambda = 1064\ \text{nm}$, la divergencia es $\theta \approx 3.4 \times 10^{-5}\ \text{rad} \approx 7\ \text{segundos de arco}$.
- **Aplicaciones:** Cartografía atmosférica y topográfica mediante LiDAR, y detección de ondas gravitacionales en los interferómetros **LIGO** (EE.UU.) y **VIRGO** (Italia), donde haces láser ultra-estables recorren brazos de $4\ \text{km}$ y $3\ \text{km}$ en ultra-alto vacío para medir deformaciones métricas espaciotemporales del orden de $\Delta L/L \sim 10^{-21}$ (fracciones del diámetro de un protón).

---

## 9. Conexión Experimental Contemporánea (Laboratorio LAMP - Universidad de Concepción)

*Fuente principal: Transcripción de video, min 2:45:00–2:55:00 (presentación del profesor Pablo Solano).*

Como ilustración del impacto de la teoría cuántica de la radiación en la ciencia de frontera en Chile, el docente compartió dos líneas de investigación experimental activas en el **Laboratorio de Física Atómica y Molecular (LAMP)** del Departamento de Física de la Universidad de Concepción:

### 9.1. Astroquímica de Superficies con Nanopartículas en Trampas Ópticas

- **Objetivo:** Simular en el laboratorio las condiciones extremas del medio interestelar (ultra-alto vacío y radiación controlada) para desentrañar la síntesis de moléculas orgánicas complejas y prebióticas en el espacio.
- **Técnica Experimental:** Se levita ópticamente una nanopartícula individual de sílica ($\text{SiO}_2$) dentro de una cámara de vacío mediante pinzas ópticas láser.
- **Medición de Masa por Resonancia Mecánica:** La nanopartícula oscila en la trampa con un movimiento característico en forma de "8". Detectando con fotodiodos la frecuencia de oscilación mecánica $\Omega_0 = \sqrt{k_{trampa}/m}$, se mide la masa con sensibilidad de picogramos ($10^{-12}\ \text{g}$).
- **Monitoreo de Adsorción y Desorción:** Al inyectar gases controlados ($O_2, H_2$), la adsorción de monocapas moleculares altera la masa y la frecuencia de resonancia, permitiendo cuantificar energías de enlace y mecanismos de reacción química catalizados por superficies estelares.

### 9.2. Espectroscopía Atómica de Ultra-Precisión y Enfriamiento Láser

- **Montaje:** Láseres de diodo de emisión externa (ECDL) diseñados y fabricados localmente mediante impresión 3D y componentes optoelectrónicos optimizados.
- **Interrogación Atómica:** Se sintoniza la emisión láser con precisión sub-megahertz a las líneas $D_1$ y $D_2$ de vapor atómico de Rubidio ($^{85}\text{Rb}$ y $^{87}\text{Rb}$ a $795\ \text{nm}$ y $780\ \text{nm}$).
- **Óptica Cuántica:** Los átomos son desacelerados y enfriados radiativamente mediante presión de radiación (trampas magneto-ópticas, MOT) para interrogar estados cuánticos a nivel de fotón individual.

---

## 10. Discusión de Problemas Conceptuales de la Sesión

*Fuente principal: Diapositivas PPTX, láminas 13–16 y 22–24; Transcripción de clase.*

### Pregunta 1: Stefan-Boltzmann vs. Coeficientes Intrínsecos de Einstein
- **Enunciado:** Si los coeficientes $A$ y $B$ de Einstein son propiedades intrínsecas del átomo y no dependen de la temperatura, ¿por qué un cuerpo caliente emite exponencialmente más radiación al elevar su temperatura ($R = \sigma T^4$)?
- **Explicación Física:** La potencia emitida total depende del producto de la tasa por átomo y el número de átomos en el estado excitado: $P_{emitida} \propto N_m(T) \cdot A_{nm}$. Aunque la probabilidad intrínseca $A_{nm}$ permanece constante, el factor de Boltzmann $N_m(T) \propto e^{-hf/k_BT}$ incrementa drásticamente la población de estados excitados disponibles a mayor temperatura, aumentando exponencialmente la tasa macroscópica de emisión.

### Pregunta 2: Dificultad Láser en Rayos X vs. Infrarrojo
- **Enunciado:** Si la tasa de emisión espontánea es proporcional a $f^3$, ¿por qué es extraordinariamente más difícil construir un láser de rayos X que uno infrarrojo?
- **Explicación Física:** La ganancia láser depende de la emisión estimulada, mientras que la emisión espontánea actúa como un canal de pérdida disipativa que vacía el nivel superior antes de que los fotones coherentes puedan multiplicarse. Al escalar como $f^3$, en rayos X ($f \sim 10^{18}\ \text{Hz}$) el tiempo de vida espontáneo se reduce a femtosegundos ($\tau_{sp} \sim 10^{-15}\ \text{s}$), requiriendo potencias de bombeo colosales ($P_{bombeo} \propto f^4$) que solo pueden suministrarse mediante láseres de electrones libres (XFEL).

### Pregunta 3: Letalidad Térmica: Ampolleta de 5 W vs. Láser de 5 W
- **Enunciado:** Si se coloca la mano cerca de una ampolleta de 5 W, apenas se percibe tibieza; sin embargo, un haz láser de 5 W destruye instantáneamente el tejido ocular o cutáneo. ¿Qué propiedad explica esta diferencia?
- **Explicación Física:** La potencia total es idéntica ($5\ \text{J/s}$), pero la ampolleta emite radiación incoherente e isótropa en $4\pi$ estereorradianes sobre un área esférica extensa ($I \sim 10\ \text{W/m}^2$). El láser emite un haz colimado y espacialmente coherente que puede enfocarse en un área de micras cuadradas, alcanzando irradiancias de $I \sim 10^{12}\ \text{W/m}^2$, superando por más de 10 órdenes de magnitud el umbral de daño térmico y fotodisrupción del tejido biológico.

---

## 11. Conclusiones de la Clase

1. **Balance Estadístico de Einstein (1917):** Demostró formalmente que el equilibrio térmico entre materia y radiación de cuerpo negro (Planck) exige la existencia obligatoria de tres procesos: emisión espontánea ($A_{nm}$), absorción estimulada ($B_{mn}\rho$) y **emisión estimulada** ($B_{nm}\rho$).
2. **Relaciones Fundamentales de Einstein:** La compatibilidad con la ley de Planck deduce rigurosamente que $B_{mn} = B_{nm}$ (simetría de absorción y emisión estimulada) y que $\frac{A_{nm}}{B_{nm}} = \frac{8\pi h f^3}{c^3}$, acoplando rígidamente la emisión espontánea a la densidad de modos del vacío.
3. **Coherencia Cuántica del Fotón Clonado:** El fotón estimulado es una réplica exacta del fotón estimulador en frecuencia, fase, dirección y polarización, consecuencia directa de la estadística bosónica de Bose-Einstein.
4. **Absorción Suprimida y Cartografía Galáctica:** En el límite $hf \ll k_BT$, la tasa de emisión estimulada cancela la absorción neta, tornando el medio transparente; esto explica por qué la línea hiperfina de 21 cm del hidrógeno neutro ($1420\ \text{MHz}$) atraviesa el polvo cósmico y permite mapear la cinemática de la Vía Láctea y las Nubes de Magallanes.
5. **Condición de Acción Láser:** La amplificación óptica exige superar la barrera térmica de Boltzmann mediante **inversión de población** ($N_m > N_n$), alcanzable únicamente fuera de equilibrio a través de esquemas de bombeo de 3 o 4 niveles con estados metaestables.
6. **Propiedades Únicas y Aplicaciones:** La coherencia espacial, temporal y direccionalidad del láser posibilitan tecnologías sin equivalente clásico: cirugía LASIK, microfabricación litográfica de chips, telecomunicaciones transoceánicas por fibra óptica (WDM) e interferometría gravitacional de ultra-precisión (LIGO/VIRGO).

---

## 12. Referencias Bibliográficas

### Artículos Científicos Originales (Fuentes Primarias)
1. Einstein, A., "Zur Quantentheorie der Strahlung", *Physikalische Zeitschrift*, 18, 121–128, 1917. *(Traducción al inglés: "On the Quantum Theory of Radiation", en The Old Quantum Theory, D. ter Haar, Pergamon Press, 1967).*
2. Planck, M., "Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum", *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245, 1900.
3. Bohr, N., "On the Constitution of Atoms and Molecules", *Philosophical Magazine*, 26, 1–25, 1913.
4. Maiman, T. H., "Stimulated Optical Radiation in Ruby", *Nature*, 187, 493–494, 1960.
5. Schawlow, A. L., Townes, C. H., "Infrared and Optical Masers", *Physical Review*, 112, 1940–1949, 1958.
6. Ewen, H. I., Purcell, E. M., "Observation of a Line in the Galactic Radio Spectrum: Radiation from Galactic Hydrogen at 1,420 Mc./sec.", *Nature*, 168, 356, 1951.

### Textos del Curso
7. Weinberg, S., *Foundations of Modern Physics*, Cambridge University Press, 2021. Cap. 3: "Early Quantum Theory", secs. 3.1–3.4.

### Textos Universitarios Estándar
8. Griffiths, D. J., Schroeter, D. F., *Introduction to Quantum Mechanics*, 3ª ed., Cambridge University Press, 2018. Sec. 9.3: "Spontaneous Emission".
9. Sakurai, J. J., Napolitano, J., *Modern Quantum Mechanics*, 3ª ed., Cambridge University Press, 2020. Cap. 5: "Time-Dependent Perturbation Theory and Radiation".
10. Saleh, B. E. A., Teich, M. C., *Fundamentals of Photonics*, 3ª ed., John Wiley & Sons, 2019. Caps. 13 ("Photon Optics"), 14 ("Photons and Atoms") y 15 ("Laser Amplifiers").
11. Svelto, O., *Principles of Lasers*, 5ª ed., Springer, 2010. Caps. 1 ("Introductory Concepts") y 2 ("Interaction of Radiation with Atoms and Ions").
12. Siegman, A. E., *Lasers*, University Science Books, 1986. Cap. 1: "Introduction to Lasers".
13. Reif, F., *Fundamentals of Statistical and Thermal Physics*, Waveland Press, 2009. Cap. 9: "Quantum Statistics of Ideal Gases".
14. Rybicki, G. B., Lightman, A. P., *Radiative Processes in Astrophysics*, John Wiley & Sons, 1979. Cap. 10: "Atomic Structure and Radiative Transitions".

### Recursos de Acceso Abierto Verificados
15. NIST, CODATA Recommended Values of Fundamental Physical Constants, disponible en `physics.nist.gov/cuu/Constants`.
16. The Feynman Lectures on Physics, Vol. III, Cap. 4: "Identical Particles" y Cap. 9: "The Ammonia Maser", disponible en `feynmanlectures.caltech.edu`.
