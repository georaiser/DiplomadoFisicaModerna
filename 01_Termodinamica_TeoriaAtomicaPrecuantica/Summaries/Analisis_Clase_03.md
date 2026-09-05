# Análisis de Clase 03: Fenómenos de Transporte, Colisiones Moleculares y la Dinámica del Movimiento Browniano

**Diplomado en Física Moderna — Módulo 01: Termodinámica y Teoría Atómica Precuántica**  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Fecha de la sesión:** 29 de mayo de 2026  
**Duración:** 3 horas 07 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`Clase_03/grabacion/Reunión en _General_ .docx`).
- Diapositivas oficiales del módulo (`Clase_03/Clase 3 Final.pdf`).
- Guía experimental de cátedra: `Clase_03/Lab viscosidad final.pdf`.
- Cuadernos de cómputo simbólico de cátedra: `Clase_03/Fokker-Planck 1D.nb` / `.pdf` y `Clase_03/EjemplosTaylor.nb` / `.pdf`.
- Texto guía central: Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Cap. 1: §1.2 y Cap. 2: §2.5 *Transport Phenomena* (pp. 42–52) y §2.6 *The Atomic Scale* (pp. 53–60).
- Fuentes primarias históricas: R. Clausius (1858), J. C. Maxwell (1860), G. G. Stokes (1851), A. D. Fokker (1914), M. Planck (1917), A. Einstein (1905).

---

## 1. Motivación Física: Fenómenos Fuera del Equilibrio

*Fuente: Diapositivas Clase 3, diaps. 1–6; Transcripción 00:04–00:40; Weinberg, §2.5.*

En las Clases 01 y 02 se describió el gas ideal en estado de estricto equilibrio térmico homogéneo e isotrópico. En tal condición, no existen flujos netos macroscópicos. Sin embargo, en los sistemas físicos reales surgen perturbaciones e inhomogeneidades espaciales: gradientes de concentración, gradientes de velocidad macroscópica de flujo y gradientes de temperatura.

La tendencia natural y espontánea de la materia hacia la homogeneización produce los llamados **fenómenos de transporte**:
1. **Transporte de Masa (Difusión):** Impulsado por un gradiente de concentración de partículas ($\nabla n$).
2. **Transporte de Momento Lineal (Viscosidad):** Impulsado por un gradiente transversal de velocidad macroscópica ($\nabla \vec{u}$).
3. **Transporte de Energía Térmica (Conducción del Calor):** Impulsado por un gradiente de temperatura ($\nabla T$).

```
                         FENÓMENOS DE TRANSPORTE EN GASES DILUIDOS
                                             │
         ┌───────────────────────────────────┼───────────────────────────────────┐
         ▼                                   ▼                                   ▼
   Transporte de Masa (Difusión)       Transporte de Momento (Viscosidad)   Transporte de Energía (Conducción)
   Ley de Fick:                       Ley de Newton:                       Ley de Fourier:
   J_x = -D · (∂n / ∂x)               τ_xz = -η · (∂u_x / ∂z)              q_x = -κ · (∂T / ∂x)
         │                                   │                                   │
         └───────────────────────────────────┼───────────────────────────────────┘
                                             ▼
                        Mecanismo Unificador: Camino Libre Medio (λ)
                                   λ = 1 / (√2 π d² n)
                        Las partículas transportan propiedades físicas
                        a lo largo de distancias promedio de vuelo libre
```

---

## 2. Sección Eficaz de Colisión y Camino Libre Medio ($\lambda$)

*Fuente: Diapositivas Clase 3, diaps. 7–14; Transcripción 00:40–01:25; Weinberg, §2.5; Clausius (1858).*

Para cuantificar la frecuencia de colisiones, Rudolf Clausius (1858) introdujo el modelo de **esferas duras impenetrables** de diámetro molecular $d$.

### 2.1. Sección Eficaz Geométrica
Dos moléculas idénticas de diámetro $d$ colisionarán siempre que la distancia entre sus centros sea menor o igual a $d$. Si fijamos imaginariamente una molécula como proyectil y consideramos a las demás como blancos estáticos, la colisión ocurre dentro de un disco perpendicular a la dirección relativa de área:
$$\sigma = \pi d^2$$
donde $\sigma$ es la **sección eficaz de dispersión**.

```
                   CILINDRO DE COLISIÓN DE RADIO d
                          ╭──────────────────────────╮
               ╭──────────┤                          ├──────────╮
          d    │          │  V_barrido = σ · ⟨v_rel⟩ · Δt       │    d
               ╰──────────┤                          ├──────────╯
                          ╰──────────────────────────╯
                                   ⟨v_rel⟩ · Δt
```

### 2.2. Velocidad Relativa y Factor $\sqrt{2}$
En un intervalo $\Delta t$, una partícula barre un cilindro de colisión de volumen $\Delta V_{\text{barrido}} = \sigma \langle v_{\text{rel}}\rangle \Delta t$, donde $\langle v_{\text{rel}}\rangle$ es la velocidad relativa promedio entre dos moléculas en movimiento térmico:
$$\vec{v}_{\text{rel}} = \vec{v}_1 - \vec{v}_2 \implies v_{\text{rel}}^2 = v_1^2 + v_2^2 - 2\vec{v}_1\cdot\vec{v}_2$$

Promediando en el ensamble, dado que las velocidades de dos moléculas no correlacionadas son independientes ($\langle \vec{v}_1\cdot\vec{v}_2\rangle = 0$):
$$\langle v_{\text{rel}}^2\rangle = \langle v_1^2\rangle + \langle v_2^2\rangle = 2\langle v^2\rangle$$

Para una distribución maxwelliana, la relación exacta entre rapideces medias es:
$$\langle v_{\text{rel}}\rangle = \sqrt{2}\,\langle v\rangle$$

### 2.3. Frecuencia de Colisiones y Camino Libre Medio
Si la densidad numérica del gas es $n = \frac{N}{V}$, el número promedio de colisiones que experimenta una molécula por unidad de tiempo (**frecuencia de colisión** $z$) es:
$$z = n\, \sigma \langle v_{\text{rel}}\rangle = \sqrt{2}\,\pi d^2 n\, \langle v\rangle$$

El tiempo medio entre dos choques sucesivos es $\tau = \frac{1}{z}$. Por consiguiente, la distancia media recorrida por una molécula entre dos colisiones sucesivas —el **camino libre medio** $\lambda$— resulta:

$$\boxed{\lambda = \langle v\rangle \tau = \frac{\langle v\rangle}{z} = \frac{1}{\sqrt{2}\,\pi d^2 n}}$$

Utilizando la ecuación del gas ideal $P = n k_B T \implies n = \frac{P}{k_B T}$:

$$\boxed{\lambda = \frac{k_B T}{\sqrt{2}\,\pi d^2 P}}$$

#### Dependencias Físicas Relevantes:
- A presión constante: $\lambda \propto T$ (al aumentar la temperatura, el gas se dilata y las moléculas se separan más).
- A temperatura constante: $\lambda \propto \frac{1}{P}$ (al aumentar la presión, la densidad aumenta y las colisiones son más frecuentes).
- Para el aire a condiciones estándar ($P = 1\text{ atm}$, $T = 300\text{ K}$, $d \approx 3 \times 10^{-10}\text{ m}$):
  $$\lambda \approx 6.8 \times 10^{-8}\text{ m} \approx 68\text{ nm}$$
  Una molécula de gas recorre en promedio cientos de veces su propio diámetro atómico antes de sufrir un impacto.

---

## 3. Viscosidad Dinámica y la Paradoja de Maxwell

*Fuente: Diapositivas Clase 3, diaps. 15–21; Transcripción 01:25–02:10; Weinberg, §2.5.*

Consideremos un gas sometido a un flujo laminar estacionario en dirección $x$, con un gradiente transversal de velocidad macroscópica a lo largo de $z$: $\vec{u}(z) = u_x(z)\,\hat{x}$.

El esfuerzo cortante o tensión tangencial $\tau_{xz}$ (fuerza por unidad de área paralela a la superficie) se define según la ley de Newton de la viscosidad:
$$\tau_{xz} = \eta \frac{\partial u_x}{\partial z}$$
donde $\eta$ es el **coeficiente de viscosidad dinámica** (unidades SI: $\text{Pa}\cdot\text{s} = \text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-1}$).

### 3.1. Deducción Cinética Elemental de la Viscosidad
Las moléculas que cruzan un plano de referencia horizontal $z = z_0$ en dirección vertical provienen, en promedio, de una capa situada a una distancia vertical del orden del camino libre medio: $z_0 \pm \frac{2}{3}\lambda$.

Las partículas que ascienden desde $z_0 - \frac{2}{3}\lambda$ transportan un momento lineal en $x$ menor:
$$p_{x,\text{sube}} = m\, u_x\left(z_0 - \frac{2}{3}\lambda\right) \approx m\left[u_x(z_0) - \frac{2}{3}\lambda \frac{\partial u_x}{\partial z}\right]$$

Las partículas que descienden desde $z_0 + \frac{2}{3}\lambda$ transportan un momento mayor:
$$p_{x,\text{baja}} = m\, u_x\left(z_0 + \frac{2}{3}\lambda\right) \approx m\left[u_x(z_0) + \frac{2}{3}\lambda \frac{\partial u_x}{\partial z}\right]$$

El flujo neto de masa que cruza el plano por unidad de área y tiempo en un sentido es $\frac{1}{6} n m \langle v\rangle$ (un tercio del movimiento en el eje $z$, dividido en dos sentidos). El flujo neto de momento por unidad de área (esfuerzo viscoso) es la diferencia:

$$\tau_{xz} = \frac{1}{3} n m \langle v\rangle \lambda \frac{\partial u_x}{\partial z}$$

Comparando con la definición $\tau_{xz} = \eta \frac{\partial u_x}{\partial z}$:

$$\eta = \frac{1}{3} \rho \langle v\rangle \lambda$$

Sustituyendo la densidad $\rho = n m$ y la expresión del camino libre medio $\lambda = \frac{1}{\sqrt{2}\pi d^2 n}$:

$$\eta = \frac{1}{3} (n m) \langle v\rangle \left(\frac{1}{\sqrt{2}\pi d^2 n}\right) = \frac{m \langle v\rangle}{3\sqrt{2}\pi d^2}$$

Reemplazando $\langle v\rangle = \sqrt{\frac{8 k_B T}{\pi m}}$:

$$\boxed{\eta = \frac{2}{3\pi^{3/2} d^2} \sqrt{m k_B T}}$$

### 3.2. La Predicción Extraordinaria de Maxwell
Esta fórmula teórica predice dos hechos sumamente contraintuitivos:
1. **Independencia de la Presión y Densidad:**  
   La densidad numérica $n$ se cancela estrictamente: un gas altamente comprimido y un gas rarificado (siempre que se mantenga el régimen molecular continuo, $\lambda \ll L$) poseen exactamente la misma viscosidad. Al aumentar la densidad, aumenta el número de transportadores pero disminuye en igual proporción el camino libre medio a lo largo del cual transportan momento.
2. **Dependencia con la Temperatura ($\eta \propto \sqrt{T}$):**  
   A diferencia de los líquidos (cuya viscosidad disminuye abruptamente con $T$ debido a la ruptura de enlaces intermoleculares), la viscosidad de un gas **aumenta con la temperatura**, ya que el mecanismo dominante es la transferencia de momento por agitación térmica ($\langle v\rangle \propto \sqrt{T}$).

Los experimentos realizados por el propio Maxwell en 1866 con discos oscilantes confirmaron con precisión asombrosa la independencia de la viscosidad con la presión, constituyendo uno de los triunfos empíricos más contundentes de la teoría cinética.

---

## 4. Ley de Stokes y Medición Experimental de Viscosidad (`Lab viscosidad final.pdf`)

*Fuente: `Clase_03/Lab viscosidad final.pdf`; Transcripción 02:10–02:45.*

Para un cuerpo esférico macroscópico de radio $r$ que se desplaza con velocidad $\vec{v}$ en un fluido viscoso continuo en régimen de bajo número de Reynolds ($Re = \frac{\rho v r}{\eta} \ll 1$), George Gabriel Stokes (1851) dedujo analíticamente a partir de las ecuaciones de Navier-Stokes que la fuerza de resistencia hidrodinámica es:

$$\vec{F}_{\text{Stokes}} = -6\pi \eta r\, \vec{v}$$

### 4.1. Dinámica de Caída Libre con Empuje de Arquímedes
Consideremos una esfera de masa $M$, radio $r$ y densidad sólida $
ho_s$, que desciende verticalmente bajo la gravedad $g$ en el seno de un fluido de densidad $
ho_f$ y viscosidad $\eta$. Sobre la esfera actúan tres fuerzas colineales:
1. Peso: $P = M g = 
ho_s V g$.
2. Empuje hidrostático de Arquímedes: $E = 
ho_f V g$.
3. Fuerza de fricción viscosa de Stokes: $F_v = 6\pi \eta r v(t)$.

donde $V = \frac{4}{3}\pi r^3$.

La Segunda Ley de Newton adopta la forma:
$$M \frac{dv}{dt} = M g - 
ho_f V g - 6\pi \eta r v(t)$$

$$M \frac{dv}{dt} = (
ho_s - 
ho_f) g \left(\frac{4}{3}\pi r^3\right) - 6\pi \eta r v(t)$$

Dividiendo entre $M = 
ho_s \left(\frac{4}{3}\pi r^3\right)$:
$$\frac{dv}{dt} = g\left(1 - \frac{
ho_f}{
ho_s}\right) - \frac{9\eta}{2
ho_s r^2} v(t)$$

Definiendo la aceleración efectiva $g_{\text{eff}} = g\left(1 - \frac{
ho_f}{
ho_s}\right)$ y el tiempo característico de relajación viscosa $\tau_v = \frac{2
ho_s r^2}{9\eta}$:
$$\frac{dv}{dt} + \frac{v}{\tau_v} = g_{\text{eff}}$$

Integrando con la condición inicial de reposo $v(0) = 0$:
$$v(t) = g_{\text{eff}}\,\tau_v \left(1 - e^{-t/\tau_v}\right)$$

### 4.2. Velocidad Terminal y Determinación Experimental de $\eta$
Para tiempos $t \gg \tau_v$, el término transitorio decae y la velocidad alcanza asintóticamente su valor terminal constante $v_t$ ($\frac{dv}{dt} = 0$):

$$(
ho_s - 
ho_f) g \left(\frac{4}{3}\pi r^3\right) = 6\pi \eta r v_t$$

Despejando la **velocidad terminal**:
$$\boxed{v_t = \frac{2 r^2 g (
ho_s - 
ho_f)}{9 \eta}}$$

Invertida para el trabajo de laboratorio:
$$\boxed{\eta = \frac{2 r^2 g (
ho_s - 
ho_f)}{9 v_t}}$$

Midiendo experimentalmente la velocidad terminal de caída en una probeta vertical graduada, se calcula con alta precisión la viscosidad dinámica del fluido, metodología que Jean Perrin y Robert Millikan adaptaron posteriormente para determinar la escala atómica y la carga del electrón.

---

## 5. Procesos Difusivos y Ecuación de Fokker-Planck 1D (`Fokker-Planck 1D.nb`)

*Fuente: `Clase_03/Fokker-Planck 1D.nb` y `Fokker-Planck 1D.pdf`; Transcripción 01:12–02:00; `EjemplosTaylor.nb`.*

### 5.1. Ley de Difusión de Fick
El transporte de masa molecular debido a un gradiente de densidad $n(x, t)$ está gobernado por la Primera Ley de Fick:
$$J_x = -D \frac{\partial n}{\partial x}$$
donde $J_x$ es el flujo de partículas y $D$ es el **coeficiente de difusión** ($[D] = \text{m}^2/\text{s}$).

Combinando la ley de Fick con la ecuación de continuidad $\frac{\partial n}{\partial t} + \frac{\partial J_x}{\partial x} = 0$, obtenemos la ecuación diferencial de difusión (Segunda Ley de Fick):
$$\frac{\partial n}{\partial t} = D \frac{\partial^2 n}{\partial x^2}$$

### 5.2. Ecuación de Fokker-Planck en Una Dimensión
En presencia de un campo de fuerza externo (que impone una velocidad media de arrastre o deriva $\mu$) superpuesto a las fluctuaciones estocásticas térmicas (difusión $Dif$), la evolución temporal de la función de densidad de probabilidad $f(x, t)$ se describe mediante la **ecuación de Fokker-Planck 1D**:

$$\boxed{\frac{\partial f(x, t)}{\partial t} = -\mu \frac{\partial f(x, t)}{\partial x} + Dif \frac{\partial^2 f(x, t)}{\partial x^2}}$$

Tal como se verificó simbólicamente en el cuaderno Mathematica oficial del curso (`Fokker-Planck 1D.nb`), la solución fundamental para una partícula localizada inicialmente en el origen ($f(x, 0) = \delta(x)$) es un paquete gaussiano que se desplaza y se ensancha temporalmente:

$$\boxed{f(x, t) = \frac{1}{\sqrt{4\pi\, Dif\, t}} \exp\left(-\frac{(x - \mu t)^2}{4\, Dif\, t}\right)}$$

### 5.3. Propiedades Estadísticas Fundamentales
1. **Posición media:** $\langle x(t)\rangle = \mu\, t$ (avance lineal debido al arrastre macroscópico).
2. **Varianza y Desplazamiento Cuadrático Medio:**
   $$\sigma_x^2(t) = \langle (x - \langle x\rangle)^2\rangle = 2\, Dif\, t$$
   El ensanchamiento del paquete espacial no crece proporcionalmente al tiempo $t$ (como en el movimiento balístico newtoniano), sino con la **raíz cuadrada del tiempo**:
   $$\Delta x_{\text{rms}} = \sqrt{\langle (\Delta x)^2\rangle} = \sqrt{2\, Dif\, t}$$

Esta dependencia sublineal $\sqrt{t}$ es la firma inconfundible del movimiento browniano y de los procesos de caminata aleatoria (*random walk*), conectando directamente con los trabajos de Albert Einstein de 1905.

---

## 6. Conclusiones de la Clase

1. **Unificación del transporte:** Los fenómenos de transporte macroscópicos (viscosidad, difusión y conducción) son manifestaciones del mismo mecanismo microscópico: moléculas que viajan un camino libre medio $\lambda$ antes de redistribuir momento, masa o energía mediante choques.
2. **Estructura del camino libre medio:** Se demostró analíticamente que $\lambda = \frac{1}{\sqrt{2}\pi d^2 n} = \frac{k_B T}{\sqrt{2}\pi d^2 P}$, mostrando que las moléculas viajan distancias macroscópicamente apreciables entre colisiones a bajas presiones.
3. **Paradoja de la viscosidad gaseosa:** Se comprobó la predicción maxwelliana de que la viscosidad $\eta = \frac{1}{3}\rho\langle v\rangle\lambda \propto \sqrt{m k_BT}$ es independiente de la densidad y crece con $\sqrt{T}$, validando el modelo cinético frente a hipótesis de fluidos continuos.
4. **Resistencia de Stokes y flotabilidad:** La velocidad terminal de sedimentación esférica $v_t = \frac{2 r^2 g(
ho_s - 
ho_f)}{9\eta}$ permite calibrar experimentalmente coeficientes de transporte y preparar la base para la estimación de constantes atómicas.
5. **Difusión y Fokker-Planck:** La ecuación de Fokker-Planck unifica la deriva determinista y la difusión térmica estocástica, prediciendo un desplazamiento cuadrático medio difusivo $\langle (\Delta x)^2\rangle = 2 D t$ que anticipa el análisis del movimiento browniano (Clase 06).

---

## 7. Referencias Bibliográficas

1. **Fuentes primarias y artículos históricos:**
   - Clausius, R. (1858). "Über die mittlere Länge der Wege, welche von den Molekülen gasförmiger Körper zurückgelegt werden". *Annalen der Physik*, 105, 239–258.
   - Stokes, G. G. (1851). "On the effect of the internal friction of fluids on the motion of pendulums". *Transactions of the Cambridge Philosophical Society*, 9, 8–106.
   - Fokker, A. D. (1914). "Die mittlere Energie rotierender elektrischer Dipole im Strahlungsfeld". *Annalen der Physik*, 43, 810–820.
   - Planck, M. (1917). "Über einen Satz der statistischen Dynamik und seine Erweiterung in der Quantentheorie". *Sitzungsberichte der Preussischen Akademie der Wissenschaften*, 324–341.
2. **Textos y materiales del diplomado:**
   - Oliva Zapata, J. E. (2026). *Material pedagógico de Clase 03: Fenómenos de transporte*. Universidad de Concepción.
   - Oliva Zapata, J. E. (2026). *Fokker-Planck 1D.nb* y *EjemplosTaylor.nb*. Cuadernos simbólicos en Wolfram Mathematica.
   - Oliva Zapata, J. E. (2026). *Medición de la viscosidad de un fluido usando la velocidad terminal* (`Lab viscosidad final.pdf`).
3. **Textos universitarios canónicos:**
   - Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. Cap. 2: §2.5 "Transport Phenomena", pp. 42–52; §2.6 "The Atomic Scale", pp. 53–60.
   - Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. Nueva York: McGraw-Hill. Cap. 12: "Transport Theory".
   - Landau, L. D., & Lifshitz, E. M. (1987). *Fluid Mechanics* (2ª ed.). Oxford: Pergamon Press.
