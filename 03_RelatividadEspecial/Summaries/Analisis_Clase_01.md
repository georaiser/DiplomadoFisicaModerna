# Análisis de Clase 01: Fundamentos de la Relatividad Especial, la Crisis del Éter y el Experimento de Michelson-Morley

**Diplomado en Física Moderna — Módulo 03: Relatividad Especial**  
**Docente:** Dr. Guillermo Rubilar Alegría  
**Fecha de la sesión:** 31 de julio de 2026  
**Duración:** 3 horas 21 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`grabacion/Clase del Diplomado de Física Moderna-20260731_190806.docx`).
- Diapositivas oficiales del módulo (`RE.pdf`, diapositivas 1 a 28).
- Fuente primaria: A. A. Michelson & E. W. Morley, *On the Relative Motion of the Earth and the Luminiferous Ether*, Am. J. Sci. 34, 333 (1887).
- Fuente primaria: A. Einstein, *Zur Elektrodynamik bewegter Körper*, Ann. Phys. 17, 891 (1905).
- Bibliografía complementaria: A. P. French, *Special Relativity* (MIT Introductory Physics Series, 1968); R. Resnick, *Introduction to Special Relativity* (Wiley, 1968); S. Weinberg, *Foundations of Modern Physics* (Cambridge, 2021).

---

## 1. Contexto Histórico y Epistemológico: La Física hacia 1900

*Fuente: RE.pdf, diaps. 2–8; Transcripción de Clase, 00:03–00:35; Weinberg, Foundations of Modern Physics, cap. 1.*

Hacia finales del siglo XIX, la física clásica parecía haber alcanzado una estructura teórica casi completa, sustentada sobre dos pilares monumentales:
1. **La Mecánica Clásica (Newtoniana):** Basada en las tres leyes del movimiento de Newton (1687) y la ley de gravitación universal, cimentada sobre las nociones absolutas de espacio y tiempo.
2. **La Electrodinámica Clásica (Maxwelliana):** Sintetizada por James Clerk Maxwell (1865), que unificó la electricidad, el magnetismo y la óptica mediante un conjunto de cuatro ecuaciones diferenciales vectoriales, prediciendo la existencia de ondas electromagnéticas transversales que se propagan en el vacío con una rapidez constante $c \approx 3 \times 10^8\text{ m/s}$.

Sin embargo, existía una incompatibilidad fundamental y profunda entre ambos pilares:
- Las leyes de la Mecánica Newtoniana son invariantes bajo las **Transformaciones de Galileo** entre sistemas de referencia inerciales (SRI).
- Las ecuaciones de Maxwell **no son invariantes** bajo las transformaciones de Galileo. Si se aplican las reglas galileanas de adición de velocidades, la rapidez de la luz debería depender del estado de movimiento del observador respecto al supuesto medio de propagación (el *éter luminífero*).

Esta contradicción teórica y la incapacidad de detectar experimentalmente cualquier movimiento de la Tierra respecto al éter constituyeron la crisis fundamental que motivó a Albert Einstein a formular, en su *Annus Mirabilis* de 1905, la **Teoría de la Relatividad Especial** (*Zur Elektrodynamik bewegter Körper*).

```
                            CRISIS DE LA FÍSICA CLÁSICA (c. 1900)
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
   Mecánica Newtoniana                                 Electrodinámica de Maxwell
   - Espacio y tiempo absolutos                        - Ecuaciones de onda EM
   - Principio de Relatividad Galileana                - Rapidez de la luz c = 1/√(ε₀μ₀)
   - Invariante bajo Galileo                           - NO invariante bajo Galileo
            │                                                   │
            └─────────────────────────┬─────────────────────────┘
                                      ▼
                        Incompatibilidad Teórica
                        ¿En qué sistema vale c?
                                      │
                                      ▼
                      Hipótesis del Éter Luminífero
                     (Viento de éter v_Tierra ≈ 30 km/s)
                                      │
                                      ▼
                     Experimento de Michelson-Morley (1887)
                     Resultado: NULO (ΔN < 0.01 franjas)
                                      │
                                      ▼
                     Postulados de Einstein (1905)
                     1. Principio de Relatividad
                     2. Constancia universal de c
```

---

## 2. El Principio de Relatividad de Galileo y las Transformaciones Clásicas

*Fuente: RE.pdf, diaps. 9–11; Transcripción de Clase, 00:35–01:10; French, Special Relativity, cap. 2.*

### 2.1. Sistemas de Referencia Inerciales (SRI)
Un **Sistema de Referencia Inercial (SRI)** es aquel en el que se cumple la Primera Ley de Newton (Ley de Inercia): un cuerpo sobre el cual no actúa ninguna fuerza neta permanece en reposo o continúa en movimiento rectilíneo uniforme con velocidad constante.

El **Principio de Relatividad de Galileo** (1632) establece que:
> *Las leyes fundamentales de la mecánica tienen exactamente la misma forma matemática en todos los sistemas de referencia inerciales.*

No existe ningún experimento mecánico interno que permita a un observador determinar si su sistema inercial se encuentra en reposo absoluto o en movimiento rectilíneo uniforme.

### 2.2. Deducción de las Transformaciones de Galileo
Sean dos sistemas de referencia inerciales, $K$ y $K'$, en configuración estándar:
- Los ejes coordenados espaciales $(x, y, z)$ y $(x', y', z')$ son paralelos entre sí.
- El sistema $K'$ se desplaza con velocidad constante $\vec{v} = v\,\hat{x}$ a lo largo del eje $x$ respecto a $K$.
- En el instante inicial $t = t' = 0$, los orígenes espaciales $O$ y $O'$ coinciden.
- En la física newtoniana se asume un **tiempo universal y absoluto**, idéntico para todos los observadores: $t' = t$.

```
         y                              y'
         │                              │       v (hacia +x)
         │       K                      │       K'  ───►
         │                              │
         │                              │───────► Evento P (t, x, y, z)
         │                              │                  (t', x', y', z')
         │                              │
         └─────────────► x              └─────────────► x'
        O                              O'
         │<───────────── v·t ──────────>│
         │<────────────────────── x ────────────────────>│
                                        │<───── x' ─────>│
```

Para un evento arbitrario $P$, la relación geométrica entre las coordenadas asignadas por ambos observadores es:

$$\begin{aligned}
x' &= x - v t \\
y' &= y \\
z' &= z \\
t' &= t
\end{aligned}$$

En forma vectorial compacta:

$$\vec{x}' = \vec{x} - \vec{v} t, \qquad t' = t$$

### 2.3. Ley de Transformación de Velocidades y Aceleraciones
Diferenciando respecto al tiempo absoluto $t = t'$:

$$\vec{u}' = \frac{d\vec{x}'}{dt'} = \frac{d}{dt}(\vec{x} - \vec{v} t) = \frac{d\vec{x}}{dt} - \vec{v} = \vec{u} - \vec{v}$$

Para el movimiento unidimensional a lo largo del eje $x$:

$$u_x' = u_x - v \iff u_x = u_x' + v$$

Diferenciando una vez más respecto al tiempo:

$$\vec{a}' = \frac{d\vec{u}'}{dt'} = \frac{d}{dt}(\vec{u} - \vec{v}) = \frac{d\vec{u}}{dt} - \frac{d\vec{v}}{dt} = \vec{a} - \vec{0} = \vec{a}$$

Dado que la aceleración es invariante ($\vec{a}' = \vec{a}$) y la masa inercial se postula como una propiedad invariante intrínseca ($m' = m$):

$$\vec{F}' = m \vec{a}' = m \vec{a} = \vec{F}$$

Por consiguiente, la Segunda Ley de Newton $\vec{F} = m\vec{a}$ es formalmente invariante bajo las transformaciones de Galileo.

---

## 3. La Naturaleza de la Luz y la Ecuación de Onda Electromagnética

*Fuente: RE.pdf, diaps. 12–15; Transcripción de Clase, 01:10–01:40; Griffiths, Introduction to Electrodynamics, cap. 9.*

### 3.1. Las Ecuaciones de Maxwell en el Vacío
En el vacío (ausencia de cargas libres $\rho = 0$ y corrientes libres $\vec{J} = \vec{0}$), las ecuaciones de Maxwell en el Sistema Internacional son:

$$\begin{aligned}
\nabla \cdot \vec{E} &= 0 \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}$$

Aplicando el operador rotacional a la ley de Faraday y utilizando la identidad vectorial $\nabla \times (\nabla \times \vec{E}) = \nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E}$:

$$\nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E} = -\frac{\partial}{\partial t}(\nabla \times \vec{B})$$

Sustituyendo $\nabla \cdot \vec{E} = 0$ y la ley de Ampère-Maxwell:

$$-\nabla^2 \vec{E} = -\frac{\partial}{\partial t}\left(\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}\right) = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$

Obtenemos la ecuación tridimensional de onda para el campo eléctrico (e idénticamente para el campo magnético $\vec{B}$):

$$\nabla^2 \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

Esta es una ecuación diferencial hiperbólica de onda cuya velocidad de propagación de fase viene dada directamente por:

$$c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} \approx 2.99792458 \times 10^8\text{ m/s}$$

### 3.2. Ruptura de la Invariancia Galileana en la Ecuación de Onda
Consideremos la ecuación de onda escalar 1D en el sistema $K$:

$$\frac{\partial^2 \psi}{\partial x^2} - \frac{1}{c^2}\frac{\partial^2 \psi}{\partial t^2} = 0$$

Al aplicar la transformación de Galileo $x' = x - vt$, $t' = t$, mediante la regla de la cadena:

$$\begin{aligned}
\frac{\partial}{\partial x} &= \frac{\partial x'}{\partial x}\frac{\partial}{\partial x'} + \frac{\partial t'}{\partial x}\frac{\partial}{\partial t'} = \frac{\partial}{\partial x'} \\
\frac{\partial}{\partial t} &= \frac{\partial x'}{\partial t}\frac{\partial}{\partial x'} + \frac{\partial t'}{\partial t}\frac{\partial}{\partial t'} = -v\frac{\partial}{\partial x'} + \frac{\partial}{\partial t'}
\end{aligned}$$

Los operadores de segundo orden se transforman como:

$$\frac{\partial^2}{\partial x^2} = \frac{\partial^2}{\partial x'^2}$$

$$\frac{\partial^2}{\partial t^2} = \left(-v\frac{\partial}{\partial x'} + \frac{\partial}{\partial t'}\right)^2 = \frac{\partial^2}{\partial t'^2} - 2v\frac{\partial^2}{\partial x'\partial t'} + v^2\frac{\partial^2}{\partial x'^2}$$

Sustituyendo en la ecuación de onda:

$$\left(1 - \frac{v^2}{c^2}\right)\frac{\partial^2 \psi}{\partial x'^2} + \frac{2v}{c^2}\frac{\partial^2 \psi}{\partial x'\partial t'} - \frac{1}{c^2}\frac{\partial^2 \psi}{\partial t'^2} = 0$$

**Conclusión Matemática Fundamental:**  
La ecuación transformada en $K'$ contiene un término cruzado $\frac{\partial^2 \psi}{\partial x'\partial t'}$ y un factor dependiente de la velocidad $(1 - v^2/c^2)$. Por lo tanto, **la forma de la ecuación de onda electromagnética NO es invariante bajo las transformaciones de Galileo**.

---

## 4. El Problema del Medio: La Hipótesis del Éter Luminífero

*Fuente: RE.pdf, diaps. 14–15; Transcripción de Clase, 01:15–01:45; French, Special Relativity, cap. 2.*

### 4.1. Mecánica de Ondas vs. Ondas Electromagnéticas
En toda la física del siglo XIX, cualquier onda conocida requería un medio material mecánico para su sustentación y propagación:
- Ondas sonoras: perturbaciones mecánicas de presión y densidad en el aire, agua o sólidos.
- Ondas en cuerdas o superficie del agua: deformaciones elásticas del medio material.

La velocidad de propagación $v_{\text{onda}}$ de una onda mecánica se define siempre **con respecto al sistema de reposo del medio**:

$$u_{\text{obs}} = v_{\text{medio}} \pm v_{\text{observador}}$$

Por analogía directa, los físicos del siglo XIX postularon que las ondas de luz debían propagarse en un medio universal que permeaba todo el espacio: el **éter luminífero**.

### 4.2. Propiedades Paradójicas del Éter
Para ser compatible con los fenómenos ópticos conocidos, el éter debía poseer propiedades físicas contradictorias y extremas:
1. **Rigidez elástica astronómica:** La velocidad de una onda transversal en un medio de módulo elástico $G$ y densidad volumétrica $\rho$ es $v = \sqrt{G/\rho}$. Para que $c \approx 3 \times 10^8\text{ m/s}$, el éter debía tener una rigidez inmensamente superior a la del acero.
2. **Densidad y viscosidad casi nula:** No debía ofrecer ninguna resistencia por fricción al movimiento de los planetas, cometas y cuerpos celestes en sus órbitas durante siglos (observación respaldada por la mecánica celeste newtoniana).
3. **Inmovilidad absoluta:** Debía definir el sistema de referencia privilegiado del universo: el estado de **Reposo Absoluto**.

---

## 5. La Analogía Hidrodinámica: Nadadores en un Río con Corriente

*Fuente: RE.pdf, diap. 17; Transcripción de Clase, 01:45–02:00; Resnick, Introduction to Special Relativity, cap. 1.*

Para ilustrar con claridad la física del interferómetro de Michelson, el Dr. Rubilar desarrolló la analogía clásica de dos nadadores (o botes) idénticos en un río de aguas que fluyen con velocidad constante $v$.

```
                                    RÍO (Flujo de agua: velocidad v ───►)
                                 
                     B (Boyas a distancia L)
                     ▲
                     │   Trayectoria transversal efectiva
                     │   (el bote debe apuntar contra corriente)
                     │
                     ▼
          C ◄────────A ────────► B'   (Brazo longitudinal paralelo a la corriente)
    (Aguas arriba)   │  (Aguas abajo)
                     │
                     │   Distancia AB = AB' = L
```

Ambos botes tienen la misma rapidez propia $c$ respecto al agua ($c > v$). Queremos calcular el tiempo total de ida y vuelta para:
1. **Brazo Longitudinal:** Un recorrido de longitud $L$ paralelo a la corriente (aguas abajo y aguas arriba).
2. **Brazo Transversal:** Un recorrido de longitud $L$ estrictamente perpendicular a las orillas del río.

### 5.1. Cálculo del Tiempo Longitudinal ($t_\parallel$)
- **Ida (aguas abajo, a favor de la corriente):**  
  La velocidad respecto a la orilla es $u_{\text{ida}} = c + v$.  
  El tiempo empleado es:
  $$t_1 = \frac{L}{c + v}$$

- **Regreso (aguas arriba, en contra de la corriente):**  
  La velocidad respecto a la orilla es $u_{\text{regreso}} = c - v$.  
  El tiempo empleado es:
  $$t_2 = \frac{L}{c - v}$$

El tiempo total longitudinal de ida y vuelta es:

$$\begin{aligned}
t_\parallel &= t_1 + t_2 = \frac{L}{c + v} + \frac{L}{c - v} = L \left( \frac{(c - v) + (c + v)}{(c + v)(c - v)} \right) \\
&= \frac{2 L c}{c^2 - v^2} = \frac{2 L}{c} \frac{1}{1 - \frac{v^2}{c^2}}
\end{aligned}$$

### 5.2. Cálculo del Tiempo Transversal ($t_\perp$)
Para cruzar perpendicularmente de $A$ a $B$ en línea recta respecto a la orilla, el bote debe enfilar su proa formando un ángulo hacia aguas arriba, de modo que la componente de su velocidad compense exactamente la corriente $v$:

```
                v_efectiva = √(c² - v²)
                      ▲
                      │ \
                      │   \  c (velocidad propia respecto al agua)
                      │     \
                      │  θ    \
                      └────────► v (arrastre del río)
```

Por el teorema de Pitágoras, la rapidez resultante perpendicular a la orilla es:

$$u_\perp = \sqrt{c^2 - v^2} = c \sqrt{1 - \frac{v^2}{c^2}}$$

Dado que el recorrido de regreso desde $B$ hacia $A$ requiere una compensación simétrica:

$$t_\perp = \frac{L}{u_\perp} + \frac{L}{u_\perp} = \frac{2L}{\sqrt{c^2 - v^2}} = \frac{2L}{c} \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}$$

### 5.3. Comparación y Expansión en Serie de Taylor
Definiendo el parámetro adimensional $\beta = v/c \ll 1$, expandimos ambas expresiones en series de Taylor:

$$\frac{1}{1 - \beta^2} = 1 + \beta^2 + \beta^4 + \mathcal{O}(\beta^6)$$

$$\frac{1}{\sqrt{1 - \beta^2}} = (1 - \beta^2)^{-1/2} = 1 + \frac{1}{2}\beta^2 + \frac{3}{8}\beta^4 + \mathcal{O}(\beta^6)$$

Sustituyendo estas aproximaciones de segundo orden:

$$t_\parallel \approx \frac{2L}{c} \left( 1 + \frac{v^2}{c^2} \right)$$

$$t_\perp \approx \frac{2L}{c} \left( 1 + \frac{1}{2}\frac{v^2}{c^2} \right)$$

La diferencia de tiempos de vuelo entre ambos trayectos ortogonales es:

$$\Delta t = t_\parallel - t_\perp \approx \frac{2L}{c} \left[ \left( 1 + \frac{v^2}{c^2} \right) - \left( 1 + \frac{1}{2}\frac{v^2}{c^2} \right) \right] = \frac{L}{c} \frac{v^2}{c^2}$$

**Resultado Crucial:**  
$t_\parallel > t_\perp$. El viaje longitudinal siempre toma más tiempo que el viaje transversal debido al efecto cuadrático del retraso generado por el tramo en contra de la corriente.

---

## 6. El Experimento de Michelson-Morley (1887)

*Fuente: RE.pdf, diaps. 16–25; Transcripción de Clase, 02:00–02:50; Paper original Michelson & Morley (1887).*

### 6.1. Principio y Diseño del Interferómetro
Albert A. Michelson y Edward W. Morley diseñaron un dispositivo óptico de ultra-alta precisión en la Escuela de Ciencias Aplicadas Case en Cleveland, Ohio:

```
                            Espejo M₂ (Plano, perpendicular a Brazo 2)
                               │
                               │  L₂ (Brazo Transversal)
                               │
       Fuente de Luz           ▼
      Monocromática ──► [ Divisor de Haz / Semiespejo S ] ──► Espejo M₁ (Brazo Longitudinal L₁)
                               │                                  ▲
                               │                                  │ (Viento de Éter v)
                               │
                               ▼
                           Telescopio / Detector
                          (Patrón de Interferencia)
```

1. Un haz de luz monocromática (lámpara de sodio/mercurio, $\lambda \approx 590\text{ nm}$) incide sobre una placa divisora de haz semirreflectante (semiespejo) a $45^\circ$.
2. El haz se divide en dos rayos perpendiculares:
   - **Rayo 1 (Longitudinal):** Se transmite hacia el espejo $M_1$ a lo largo de una distancia $L_1$ paralela al supuesto viento de éter.
   - **Rayo 2 (Transversal):** Se refleja hacia el espejo $M_2$ a lo largo de una distancia $L_2$ perpendicular al viento de éter.
3. Ambos rayos se reflejan en sus respectivos espejos, regresan al semiespejo y se recombinan en el telescopio, produciendo un **patrón de franjas de interferencia**.

### 6.2. Derivación Matemática del Desplazamiento de Franjas
Sean $L_1$ y $L_2$ las longitudes de los brazos (en general no exactamente iguales a nivel microscópico).

Los tiempos de recorrido en la posición inicial (Brazo 1 longitudinal, Brazo 2 transversal) son:

$$t_1 = \frac{2 L_1}{c} \frac{1}{1 - \beta^2} \approx \frac{2 L_1}{c} \left( 1 + \beta^2 \right)$$

$$t_2 = \frac{2 L_2}{c} \frac{1}{\sqrt{1 - \beta^2}} \approx \frac{2 L_2}{c} \left( 1 + \frac{1}{2}\beta^2 \right)$$

La diferencia de tiempos en la orientación inicial es:

$$\Delta t_{\text{inicial}} = t_1 - t_2 \approx \frac{2(L_1 - L_2)}{c} + \frac{2 L_1}{c}\beta^2 - \frac{L_2}{c}\beta^2$$

Si los brazos son aproximadamente de igual longitud $L_1 \approx L_2 = L$:

$$\Delta t_{\text{inicial}} \approx \frac{2(L_1 - L_2)}{c} + \frac{L}{c}\beta^2$$

El término $\frac{2(L_1 - L_2)}{c}$ no se puede conocer con precisión óptica absoluta debido a irregularidades mecánicas de longitud submicrométrica. Por esta razón, Michelson concibió la idea magistral de **rotar todo el aparato $90^\circ$ en el plano horizontal**.

```
                Rotación de 90° del Interferómetro
                
        Posición 1:                     Posición 2 (Rotado 90°):
        Brazo 1: Longitudinal (v)       Brazo 1: Transversal (⊥ v)
        Brazo 2: Transversal (⊥ v)      Brazo 2: Longitudinal (v)
```

Al rotar $90^\circ$, el Brazo 1 pasa a ser transversal y el Brazo 2 pasa a ser longitudinal:

$$t_1' \approx \frac{2 L_1}{c} \left( 1 + \frac{1}{2}\beta^2 \right)$$

$$t_2' \approx \frac{2 L_2}{c} \left( 1 + \beta^2 \right)$$

$$\Delta t_{\text{rotado}} = t_1' - t_2' \approx \frac{2(L_1 - L_2)}{c} + \frac{L_1}{c}\beta^2 - \frac{2 L_2}{c}\beta^2 \approx \frac{2(L_1 - L_2)}{c} - \frac{L}{c}\beta^2$$

Restando ambas diferencias de tiempo, el término instrumental desconocido $\frac{2(L_1 - L_2)}{c}$ se cancela exactamente:

$$\Delta(\Delta t) = \Delta t_{\text{inicial}} - \Delta t_{\text{rotado}} = \left( \frac{2(L_1 - L_2)}{c} + \frac{L}{c}\beta^2 \right) - \left( \frac{2(L_1 - L_2)}{c} - \frac{L}{c}\beta^2 \right) = \frac{2 L}{c}\beta^2 = \frac{2 L v^2}{c^3}$$

### 6.3. Relación con el Corrimiento de Franjas ($\Delta N$)
La diferencia de camino óptico equivalente es $\Delta d = c \cdot \Delta(\Delta t)$. Por ende, el desplazamiento en el número de franjas de interferencia observadas en el telescopio es:

$$\Delta N = \frac{c \, \Delta(\Delta t)}{\lambda} = \frac{2 L v^2}{\lambda c^2}$$

### 6.4. Estimación Numérica para la Órbita Terrestre
En el experimento de 1887:
- La velocidad orbital de la Tierra alrededor del Sol es $v \approx 30\text{ km/s} = 3 \times 10^4\text{ m/s}$.
- Por lo tanto, el factor de velocidad es:
  $$\beta = \frac{v}{c} = \frac{3 \times 10^4\text{ m/s}}{3 \times 10^8\text{ m/s}} = 10^{-4} \implies \beta^2 = 10^{-8}$$
- Longitud efectiva de los brazos: mediante reflexiones múltiples en un sistema de espejos montados sobre una losa pesada de arenisca flotando sobre mercurio líquido, se logró $L \approx 11.0\text{ m}$.
- Longitud de onda de la luz utilizada: $\lambda \approx 590\text{ nm} = 5.9 \times 10^{-7}\text{ m}$.

Sustituyendo estos valores numéricos:

$$\Delta N_{\text{esperado}} = \frac{2 \times 11.0\text{ m} \times (10^{-4})^2}{5.9 \times 10^{-7}\text{ m}} = \frac{2.2 \times 10^{-7}\text{ m}}{5.9 \times 10^{-7}\text{ m}} \approx 0.373 \text{ franjas}$$

El desplazamiento teórico esperado era de aproximadamente **$0.4$ franjas**.

### 6.5. El Resultado Nulo y su Trascendencia
El aparato de Michelson-Morley tenía una sensibilidad experimental capaz de detectar desplazamientos de **$0.01$ franjas** (e incluso estimar $0.005$ franjas).

**Resultado Experimental:**  
El desplazamiento observado fue inferior a $0.01$ franjas, siendo compatible con **cero absoluto dentro del margen de error experimental**. El experimento se repitió a diferentes horas del día, en diferentes estaciones del año (cuando la velocidad orbital de la Tierra invierte su sentido respecto al fondo cósmico) y a diferentes altitudes, arrojando invariablemente un **resultado nulo**.

---

## 7. Intentos de Rescate del Éter y su Refutación

*Fuente: RE.pdf, diaps. 25–26; Transcripción de Clase, 02:50–03:05; French, Special Relativity, cap. 2.*

Tras el resultado nulo de 1887, la comunidad física intentó salvar la teoría del éter mediante varias hipótesis *ad hoc*:

| Hipótesis Propuesta | Mecanismo Teórico | Razón de su Refutación |
|---|---|---|
| **Arrastre Total del Éter (Ether Drag)** | La Tierra arrastra completamente la capa de éter circundante en su movimiento. | **Refutada por la Aberración Estelar** descubierta por James Bradley (1728) y el experimento de Fizeau (1851) con agua en movimiento. |
| **Contracción de Lorentz-FitzGerald (1889/1892)** | Los cuerpos materiales que se mueven a velocidad $v$ respecto al éter sufren una contracción física real en la dirección longitudinal: $L_\parallel = L_0 \sqrt{1 - v^2/c^2}$. | Salvaba el resultado de Michelson-Morley, pero requería que las fuerzas electrostáticas del éter se ajustasen milagrosamente. Fue superada cuando el experimento de **Kennedy-Thorndike (1932)** con brazos desiguales demostró que la contracción de longitud por sí sola no bastaba sin la dilatación temporal. |
| **Teorías Emisoras (Balísticas) de Ritz** | La velocidad de la luz depende de la velocidad de la fuente: $c' = c \pm v_{\text{fuente}}$. | **Refutada por la observación de estrellas binarias (De Sitter, 1913)**: si la velocidad dependiese de la fuente, las órbitas de las binarias mostrarían espectros aberrantes y violaciones temporales nunca observadas. |

---

## 8. Verificaciones Experimentales Modernas de Alta Precisión

*Fuente: RE.pdf, diaps. 8, 23, 75; Recursos: `papers/ncomms9174.pdf`, `papers/Science.329.2010.1630.Chou.pdf`.*

En la actualidad, las pruebas de la invariancia de Lorentz y la isotropía de la velocidad de la luz han alcanzado niveles extraordinarios de precisión:
- **Resonadores Ópticos Criogénicos (Nature Communications 2015, `ncomms9174.pdf`):**  
  Experimentos modernos tipo Michelson-Morley utilizando cavidades ópticas resonantes criogénicas de zafiro han medido la posible anisotropía de la velocidad de la luz ($\Delta c / c$). El límite superior experimental actual es:
  $$\frac{|\Delta c|}{c} < 10^{-18}$$
- **Relojes Atómicos Ópticos (Chou et al., Science 2010, `Science.329.2010.1630.Chou.pdf`):**  
  Han demostrado la dilatación temporal relativista a velocidades cotidianas ($v < 10\text{ m/s}$, paso de una bicicleta) y diferencias gravitacionales de altura de solo $33\text{ cm}$.

---

## 9. La Síntesis Revolucionaria: Los Postulados de Einstein (1905)

*Fuente: RE.pdf, diaps. 26–28; Transcripción de Clase, 03:05–03:21; Einstein (1905), § 1–2.*

### 9.1. El Experimento Mental del Espejo a los 16 Años (1895)
A los 16 años, Albert Einstein se planteó una paradoja fundamental:  
> *Si persigo un rayo de luz a la velocidad $c$, ¿qué observaría?*

- Según la cinemática galileana, debería ver una onda electromagnética estacionaria en el espacio: un campo eléctrico y magnético oscilante congelado en el tiempo ($u = c - c = 0$).
- Sin embargo, las ecuaciones de Maxwell no admiten ondas electromagnéticas estáticas sin fuentes de carga.
- Si además el observador sostuviera un espejo frente a su rostro, la luz emitida por su rostro viajaría a $c$ hacia adelante, pero como el espejo también viaja a $c$, la luz nunca alcanzaría el espejo y **su imagen desaparecería**.
- Esto permitiría al observador saber que se mueve a la velocidad absoluta $c$ sin mirar al exterior, lo cual **viola el Principio de Relatividad**.

Einstein concluyó que la física debe ser coherente: **la imagen en el espejo se verá siempre idéntica**, y ningún observador inercial puede alcanzar la velocidad de la luz.

### 9.2. Los Dos Postulados Fundamentales de la Relatividad Especial

```
                          POSTULADOS DE EINSTEIN (1905)
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
       POSTULADO 1                                         POSTULADO 2
   Principio de Relatividad                            Invarianza de la Rapidez
                                                             de la Luz
  "Las leyes de la física son                         "La rapidez de la luz en el
   idénticas en todos los                             vacío es una constante universal
   sistemas de referencia inerciales."                c = 299 792 458 m/s, independiente
  (Abarca mecánica Y electromagnetismo)              del movimiento de la fuente o del receptor."
```

1. **Primer Postulado (Principio de Relatividad):**  
   *Las leyes que gobiernan los cambios de estado de los sistemas físicos son idénticas en todos los sistemas de referencia inerciales.*  
   (Extiende el principio galileano a toda la física, incluyendo explícitamente el electromagnetismo y la óptica).

2. **Segundo Postulado (Invariancia de la Rapidez de la Luz):**  
   *La rapidez de la luz en el vacío es siempre la misma, $c$, en todos los sistemas inerciales, independientemente del estado de movimiento del cuerpo emisor o del receptor.*

### 9.3. Consecuencias Radiales sobre los Conceptos de Espacio y Tiempo
De estos dos postulados se deduce de forma ineludible que:
- **El éter luminífero es una construcción superflua e inexistente:** el vacío no requiere ningún soporte mecánico para propagar la radiación electromagnética.
- **El tiempo absoluto newtoniano no existe:** el intervalo de tiempo entre dos eventos depende del estado de movimiento del observador ($\Delta t = \gamma \Delta t_0$).
- **La simultaneidad es relativa:** dos eventos que ocurren simultáneamente en distintas posiciones para un observador $K$, no ocurren simultáneamente para otro observador $K'$ en movimiento relativo.
- **El espacio absoluto no existe:** la longitud de un cuerpo en movimiento se contrae en la dirección del desplazamiento ($L = L_0 / \gamma$).

---

## 10. Preguntas Relevantes y Discusiones de la Clase

*Fuente: Transcripción oficial de la clase, intervenciones de estudiantes.*

1. **Pregunta de Sebastián Muñoz (01:39):** *¿Qué ocurre exactamente en el experimento mental del espejo de Einstein? ¿Se ve la imagen o no?*  
   **Respuesta del docente:** De acuerdo con la física clásica galileana, si viajaras a $c$, la luz emitida por tu rostro no alcanzaría el espejo. Pero según la Relatividad Especial, la rapidez de la luz respecto a ti sigue siendo $c$. Por lo tanto, te verás reflejado en el espejo exactamente de la misma manera que si estuvieras en reposo en la Tierra. No hay experimento que te permita distinguir que te mueves a velocidad constante.

2. **Pregunta de Eduardo Jiménez (01:24 y 03:17):** *¿Por qué la velocidad del sonido sí depende del medio (aire) y no de la fuente, mientras que con la luz no hay medio? ¿Y cómo se relaciona esto con los videos sobre medir la velocidad de la luz en un solo sentido (one-way speed of light)?*  
   **Respuesta del docente:** El sonido es una vibración de las moléculas del aire; por eso su velocidad está anclada al sistema en reposo del aire. Si te mueves respecto al aire, mides una velocidad diferente. Con la luz se pensó que el éter era ese medio. Pero la luz no necesita medio: viaja en el vacío y su velocidad es invariante. Respecto a la velocidad en un solo sentido, sincronizar dos relojes distantes requiere enviar una señal luminosa, lo cual presupone conocer de antemano la velocidad de ida de la luz. Por convención operacional (sincronización de Einstein-Poincaré), se asume que la velocidad de ida es igual a la de vuelta, lo cual es axiomático y consistente con toda la física experimental.

3. **Pregunta de Galo Eidelstein (01:15):** *¿El sistema de referencia en el caso de las ondas mecánicas siempre está ligado a la materia del medio?*  
   **Respuesta del docente:** Exactamente. Para el sonido, el sistema de reposo del fluido es el único donde la velocidad es isótropa e igual a su valor termodinámico ($v_s = \sqrt{\gamma R T / M}$). Para la luz, ningún sistema de referencia es privilegiado.

4. **Pregunta de Luis Alberto Inzunza (02:56 y 03:14):** *¿Si llenáramos el interferómetro con un gas, podríamos medir algo? ¿Y los postulados son universales e indemostrables?*  
   **Respuesta del docente:** Si introduces un gas, mides la velocidad de fase de la luz en ese medio material refractivo ($v = c/n$), fenómeno estudiado por Fizeau. Pero no estás midiendo el éter. Y respecto a los postulados, efectivamente son principios fundamentales (axiomas) que no se deducen de leyes más simples, sino que se postulan y se validan por su capacidad de predecir con exactitud todos los experimentos físicos.

---

## 11. Conclusiones Clave de la Clase

1. **Incompatibilidad Clásica:** La mecánica newtoniana respeta las transformaciones de Galileo, pero las ecuaciones de onda de Maxwell no son invariantes bajo ellas, creando una crisis fundamental sobre la propagación de la luz.
2. **La Hipótesis del Éter:** Se propuso el éter luminífero como el medio mecánico de sustentación de la luz y el marco de reposo absoluto del universo.
3. **El Experimento de Michelson-Morley (1887):** Diseñado con un interferómetro óptico para detectar el viento de éter ($v \approx 30\text{ km/s}$ por la órbita terrestre). La diferencia de tiempos longitudinal y transversal predijo un desplazamiento de $\approx 0.4$ franjas.
4. **Resultado Nulo Inapelable:** El desplazamiento medido fue compatible con cero ($\Delta N < 0.01$), descartando el viento de éter y refutando las hipótesis de arrastre del medio.
5. **Los Postulados de Einstein (1905):**
   - *Principio de Relatividad:* Las leyes de la física son idénticas en todos los SRI.
   - *Invarianza de la Rapidez de la Luz:* $c$ es una constante universal independiente del estado de movimiento del emisor y del receptor.
6. **Revisión del Espacio y el Tiempo:** El tiempo absoluto y la simultaneidad universal quedan abolidos, abriendo el camino a la cinemática relativista de Lorentz.

---

## 12. Referencias Bibliográficas

### 1. Artículos Científicos Originales (Fuentes Primarias)
- Michelson, A. A., & Morley, E. W. (1887). *On the Relative Motion of the Earth and the Luminiferous Ether*. American Journal of Science, 34(203), 333–345. DOI: `10.2475/ajs.s3-34.203.333`.
- Einstein, A. (1905). *Zur Elektrodynamik bewegter Körper* [Sobre la electrodinámica de los cuerpos en movimiento]. Annalen der Physik, 17(10), 891–921. DOI: `10.1002/andp.19053221004`.
- Bradley, J. (1728). *A Letter from the Reverend Mr. James Bradley to Dr. Edmond Halley Giving an Account of a New Discovered Motion of the Fix'd Stars*. Philosophical Transactions of the Royal Society, 35(406), 637–661.
- Fizeau, H. (1851). *Sur les hypothèses relatives à l'éther lumineux*. Comptes Rendus de l'Académie des Sciences, 33, 349–355.
- Ives, H. E., & Stilwell, G. R. (1938). *An Experimental Study of the Rate of a Moving Atomic Clock*. Journal of the Optical Society of America, 28(7), 215–226.
- Kennedy, R. J., & Thorndike, E. M. (1932). *Experimental Establishment of the Relativity of Time*. Physical Review, 42(3), 400–418.

### 2. Pruebas Experimentales Modernas
- Nagel, M., Parker, S. R., Kovalchuk, E. V., Stanwix, P. L., Hartnett, J. G., Ivanov, E. N., Peters, A., & Tobar, M. E. (2015). *Direct terrestrial test of Lorentz symmetry in electrodynamics to $10^{-18}$*. Nature Communications, 6, 8174. DOI: `10.1038/ncomms9174`.
- Chou, C. W., Hume, D. B., Rosenband, T., & Wineland, D. J. (2010). *Optical Clocks and Relativity*. Science, 329(5999), 1630–1633. DOI: `10.1126/science.1192720`.
- Saathoff, G., Karpuk, S., Eisenbarth, U., Huber, G., Krohn, S., Muñoz Horta, R., Reinhardt, S., Schwalm, D., Wolf, A., & Gwinner, G. (2003). *Improved Test of Time Dilation in Special Relativity*. Physical Review Letters, 91(19), 190403.

### 3. Textos del Curso y Universitarios Canónicos
- Rubilar Alegría, G. (2026). *Apuntes del Módulo de Relatividad Especial (RE.pdf)*. Diplomado en Física Moderna, Universidad de Concepción.
- French, A. P. (1968). *Special Relativity*. The M.I.T. Introductory Physics Series. W. W. Norton & Company.
- Resnick, R. (1968). *Introduction to Special Relativity*. John Wiley & Sons.
- Griffiths, D. J. (2017). *Introduction to Electrodynamics* (4th ed.). Cambridge University Press.
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.
- Taylor, E. F., & Wheeler, J. A. (1992). *Spacetime Physics: Introduction to Special Relativity* (2nd ed.). W. H. Freeman and Company.

### 4. Recursos de Libre Acceso Verificados
- Feynman, R. P., Leighton, R. B., & Sands, M. (1963). *The Feynman Lectures on Physics, Vol. I, Cap. 15: The Special Theory of Relativity*. California Institute of Technology. [https://www.feynmanlectures.caltech.edu/I_15.html](https://www.feynmanlectures.caltech.edu/I_15.html)
- National Institute of Standards and Technology (NIST). *Fundamental Physical Constants: Speed of Light in Vacuum ($c$)*. CODATA recommended values. [https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
