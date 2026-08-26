# Análisis de Clase 04: Transformaciones de Lorentz, Geometría del Espaciotiempo y Dinámica Relativista

**Diplomado en Física Moderna — Módulo 03: Relatividad Especial**  
**Docente:** Dr. Guillermo Rubilar Alegría  
**Fecha de la sesión:** 21 de agosto de 2026  
**Duración:** 3 horas 16 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`grabacion/Clase del Diplomado de Física Moderna-20260821_190420.docx`).
- Diapositivas oficiales del módulo (`RE.pdf`, diapositivas 45 a 78).
- Fuente primaria: A. Einstein, *Zur Elektrodynamik bewegter Körper*, Ann. Phys. 17, 891 (1905).
- Fuente primaria: A. Einstein, *Ist die Trägheit eines Körpers von seinem Energiegehalt abhängig?*, Ann. Phys. 18, 639 (1905) [$E = mc^2$].
- Fuente primaria: H. Minkowski, *Raum und Zeit*, Vorträge der 80. Naturforscherversammlung zu Köln (1908).
- Test experimental de precisión: S. Rainville et al., *World year of physics: A direct test of $E = mc^2$*, Nature 438, 1096 (2005).
- Bibliografía complementaria: E. F. Taylor & J. A. Wheeler, *Spacetime Physics* (W. H. Freeman, 1992); S. Weinberg, *Foundations of Modern Physics* (Cambridge, 2021); A. P. French, *Special Relativity* (Norton, 1968); R. Resnick, *Introduction to Special Relativity* (Wiley, 1968); D. J. Griffiths, *Introduction to Electrodynamics* (Cambridge, 2017), cap. 12.

---

## 1. Contexto Teórico: La Culminación del Marco Relativista

*Fuente: RE.pdf, diaps. 45–48; Transcripción de Clase, 00:05–00:35; Weinberg, Foundations of Modern Physics, cap. 1.*

La cuarta sesión del módulo constituye el núcleo formal y conceptual más profundo de la Relatividad Especial. Habiendo establecido en las sesiones previas la crisis del éter (Clase 01), la metrología operacional de eventos (Clase 02) y el $k$-cálculo de Bondi con la composición de velocidades (Clase 03), esta clase completó la reconstrucción integral de la física moderna:

```
                          ESTRUCTURA DE LA TEORÍA RELATIVISTA
                                      │
            ┌─────────────────────────┼─────────────────────────┐
            ▼                         ▼                         ▼
   Transformaciones de Lorentz   Geometría de Minkowski       Dinámica Relativista
   - Boosts en 1D (x, t)         - Invarianza de Δs²          - Momentum p = γmv
   - Dilatación del tiempo       - Conos de luz y causalidad  - Energía total E = γmc²
   - Contracción de longitud     - Eventos tipo tiempo/espacio- Invariante E² = p²c² + m²c⁴
   - Relatividad de simultaneidad                             - Equivalencia E₀ = mc²
```

---

## 2. Deducción Rigurosa de las Transformaciones de Lorentz (Boosts)

*Fuente: RE.pdf, diaps. 45–48; Transcripción de Clase, 00:20–00:50; Einstein (1905), § 3; Bondi (1964).*

### 2.1. Planteamiento Cinemático
Consideremos dos Sistemas de Referencia Inerciales (SRI), $K$ y $K'$, en configuración estándar:
- $K'$ se desplaza con velocidad constante $\vec{v} = v\,\hat{x}$ respecto a $K$.
- En el instante inicial $t = t' = 0$, los orígenes coinciden: $O \equiv O'$.
- Las coordenadas transversales no se ven afectadas por el movimiento longitudinal:
  $$y' = y, \qquad z' = z$$

Queremos encontrar la transformación lineal general que conecta las coordenadas $(t, x)$ en $K$ con $(t', x')$ en $K'$.

```
         ct                                     ct'
         ▲                                       ▲      v (hacia +x)
         │       K                               │       K'  ───►
         │                                       │
         │                                       │───────► Evento P (t, x) / (t', x')
         │                                       │
         └────────────────► x                    └────────────────► x'
        O                                       O'
```

### 2.2. Deducción mediante Señales Luminosas y el Factor de Bondi
Consideremos un evento arbitrario $P$ en el espaciotiempo.
Un observador en $K$ emite un rayo de luz en $t_E$ que rebota en $P(t, x)$ y regresa a $K$ en $t_R$. Según las fórmulas del radar deducidas en la Clase 02:

$$ct_E = ct - x \qquad \text{y} \qquad ct_R = ct + x$$

Para el observador comóvil $K'$, el mismo evento $P$ es alcanzado por un pulso emitido en $t_E'$ y recibido en $t_R'$, cumpliendo idénticamente:

$$ct_E' = ct' - x' \qquad \text{y} \qquad ct_R' = ct' + x'$$

Dado que $K'$ se aleja de $K$ a velocidad $v$, las señales luminosas que conectan ambos orígenes están escaladas por el factor de Bondi $k = \sqrt{\dfrac{1+\beta}{1-\beta}}$ (con $\beta = v/c$):

$$ct_E' = k \, ct_E = k(ct - x) \qquad \text{(Ecuación 1)}$$

$$ct_R = k \, ct_R' \implies ct_R' = \frac{1}{k} ct_R = \frac{1}{k}(ct + x) \qquad \text{(Ecuación 2)}$$

### 2.3. Despeje de las Coordenadas Transformadas $(ct', x')$
Sumando las Ecuaciones 1 y 2:

$$(ct' - x') + (ct' + x') = k(ct - x) + \frac{1}{k}(ct + x)$$

$$2ct' = \left( k + \frac{1}{k} \right) ct - \left( k - \frac{1}{k} \right) x$$

$$ct' = \frac{1}{2}\left( k + \frac{1}{k} \right) ct - \frac{1}{2}\left( k - \frac{1}{k} \right) x \qquad \text{(Ecuación 3)}$$

Restando la Ecuación 1 de la Ecuación 2:

$$(ct' + x') - (ct' - x') = \frac{1}{k}(ct + x) - k(ct - x)$$

$$2x' = \left( \frac{1}{k} - k \right) ct + \left( k + \frac{1}{k} \right) x$$

$$x' = \frac{1}{2}\left( k + \frac{1}{k} \right) x - \frac{1}{2}\left( k - \frac{1}{k} \right) ct \qquad \text{(Ecuación 4)}$$

### 2.4. Definición del Factor de Lorentz ($\gamma$)
Calculemos explícitamente los coeficientes en términos de $\beta = v/c$:

$$\begin{aligned}
\frac{1}{2}\left( k + \frac{1}{k} \right) &= \frac{1}{2}\left( \sqrt{\frac{1+\beta}{1-\beta}} + \sqrt{\frac{1-\beta}{1+\beta}} \right) = \frac{1}{2}\left( \frac{(1+\beta) + (1-\beta)}{\sqrt{(1-\beta)(1+\beta)}} \right) \\
&= \frac{1}{2}\left( \frac{2}{\sqrt{1-\beta^2}} \right) = \frac{1}{\sqrt{1-\beta^2}} \equiv \gamma
\end{aligned}$$

$$\begin{aligned}
\frac{1}{2}\left( k - \frac{1}{k} \right) &= \frac{1}{2}\left( \sqrt{\frac{1+\beta}{1-\beta}} - \sqrt{\frac{1-\beta}{1+\beta}} \right) = \frac{1}{2}\left( \frac{(1+\beta) - (1-\beta)}{\sqrt{1-\beta^2}} \right) \\
&= \frac{1}{2}\left( \frac{2\beta}{\sqrt{1-\beta^2}} \right) = \frac{\beta}{\sqrt{1-\beta^2}} \equiv \gamma \beta
\end{aligned}$$

### 2.5. Ecuaciones Finales de las Transformaciones de Lorentz
Sustituyendo $\gamma$ y $\gamma\beta$ en las Ecuaciones 3 y 4:

$$\begin{aligned}
x' &= \gamma (x - \beta ct) = \gamma (x - vt) = \frac{x - vt}{\sqrt{1 - \dfrac{v^2}{c^2}}} \\[2ex]
y' &= y \\[2ex]
z' &= z \\[2ex]
t' &= \gamma \left( t - \frac{\beta}{c} x \right) = \gamma \left( t - \frac{v}{c^2} x \right) = \frac{t - \dfrac{v}{c^2}x}{\sqrt{1 - \dfrac{v^2}{c^2}}}
\end{aligned}$$

### 2.6. Transformaciones Inversas de Lorentz
Por el Principio de Relatividad, el sistema $K$ se mueve con velocidad $-v$ respecto a $K'$. Invirtiendo formalmente el signo de $v$ (o resolviendo algebraicamente el sistema lineal para $x$ y $t$):

$$\begin{aligned}
x &= \gamma (x' + vt') = \frac{x' + vt'}{\sqrt{1 - \dfrac{v^2}{c^2}}} \\[2ex]
y &= y' \\[2ex]
z &= z' \\[2ex]
t &= \gamma \left( t' + \frac{v}{c^2} x' \right) = \frac{t' + \dfrac{v}{c^2}x'}{\sqrt{1 - \dfrac{v^2}{c^2}}}
\end{aligned}$$

### 2.7. Representación Matricial y Coordenadas Cuadridimensionales
En términos de coordenadas homogéneas $x^\mu = (x^0, x^1, x^2, x^3) = (ct, x, y, z)$:

$$\begin{pmatrix} x'^0 \\ x'^1 \\ x'^2 \\ x'^3 \end{pmatrix} = \begin{pmatrix} \gamma & -\gamma\beta & 0 & 0 \\ -\gamma\beta & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x^0 \\ x^1 \\ x^2 \\ x^3 \end{pmatrix}$$

---

## 3. Invariancia del Intervalo Espaciotemporal ($\Delta s^2$)

*Fuente: RE.pdf, diaps. 49–50; Transcripción de Clase, 01:00–01:25; Minkowski (1908).*

### 3.1. Definición del Intervalo de Minkowski
Para dos eventos $P(t_1, x_1, y_1, z_1)$ y $Q(t_2, x_2, y_2, z_2)$, se definen las separaciones de coordenadas $\Delta t = t_2 - t_1$, $\Delta x = x_2 - x_1$, $\Delta y = y_2 - y_1$, $\Delta z = z_2 - z_1$.

El **intervalo espaciotemporal cuadrático** $\Delta s^2$ se define en la convención estándar $(+,-,-,-)$ como:

$$\Delta s^2 \equiv c^2 \Delta t^2 - \Delta x^2 - \Delta y^2 - \Delta z^2 = c^2 \Delta t^2 - |\Delta\vec{x}|^2$$

### 3.2. Demostración Matemática de la Invariancia Bajo Boosts
Calculamos el intervalo en el sistema transformado $K'$:

$$\Delta s'^2 = c^2 \Delta t'^2 - \Delta x'^2 - \Delta y'^2 - \Delta z'^2$$

Dado que $\Delta y' = \Delta y$ y $\Delta z' = \Delta z$, nos concentramos en la componente 1+1D:

$$\begin{aligned}
c^2 \Delta t'^2 - \Delta x'^2 &= c^2 \left[ \gamma \left( \Delta t - \frac{v}{c^2}\Delta x \right) \right]^2 - \left[ \gamma (\Delta x - v \Delta t) \right]^2 \\
&= \gamma^2 \left[ c^2 \left( \Delta t^2 - \frac{2v}{c^2}\Delta t \Delta x + \frac{v^2}{c^4}\Delta x^2 \right) - \left( \Delta x^2 - 2v \Delta x \Delta t + v^2 \Delta t^2 \right) \right] \\
&= \gamma^2 \left[ c^2 \Delta t^2 - 2v \Delta t \Delta x + \frac{v^2}{c^2}\Delta x^2 - \Delta x^2 + 2v \Delta x \Delta t - v^2 \Delta t^2 \right] \\
&= \gamma^2 \left[ (c^2 - v^2)\Delta t^2 - \left( 1 - \frac{v^2}{c^2} \right)\Delta x^2 \right] \\
&= \gamma^2 \left( 1 - \frac{v^2}{c^2} \right) \left[ c^2 \Delta t^2 - \Delta x^2 \right]
\end{aligned}$$

Recordando la definición del factor de Lorentz: $\gamma^2 = \dfrac{1}{1 - v^2/c^2} \implies \gamma^2 \left( 1 - \dfrac{v^2}{c^2} \right) = 1$.

Por lo tanto:

$$c^2 \Delta t'^2 - \Delta x'^2 = c^2 \Delta t^2 - \Delta x^2 \implies \Delta s'^2 = \Delta s^2$$

**Significado Físico Fundamental:**  
El intervalo espaciotemporal $\Delta s^2$ es un **invariante de Lorentz**: su valor numérico es exactamente idéntico para todos los observadores inerciales del universo, jugando en la geometría hiperbólica de Minkowski el mismo papel que la distancia euclidiana pitagórica ($\Delta r^2 = \Delta x^2 + \Delta y^2 + \Delta z^2$) en el espacio euclidiano tridimensional.

---

## 4. Relatividad de la Simultaneidad

*Fuente: RE.pdf, diaps. 51–55; Transcripción de Clase, 00:55–01:15; Einstein (1905), § 1–2.*

```
                     RELATIVIDAD DE LA SIMULTANEIDAD
                     
        Sistema K (Eventos P y Q simultáneos):
        
        t
        ▲
        │           Línea de simultaneidad en K (t = cte)
   t_P  ├──────────(P)──────────────────────────(Q)──────────► x
        │           x_P                         x_Q
        └─────────────────────────────────────────────────────►
        
        Sistema K' (En movimiento hacia +x con velocidad v):
        
        t'
        ▲
   t'_P │          (P)
        │
   t'_Q │                       (Q)   <── Ocurre ANTES en K' !
        └─────────────────────────────────────────────────────► x'
```

### 4.1. Análisis Cuantitativo
Sean dos eventos $P$ y $Q$ que son **estrictamente simultáneos** para un observador $K$:

$$\Delta t = t_Q - t_P = 0$$

pero que se encuentran espacialmente separados por una distancia no nula:

$$\Delta x = x_Q - x_P \neq 0$$

Aplicando la transformación de Lorentz temporal:

$$\Delta t' = t_Q' - t_P' = \gamma \left( \Delta t - \frac{v}{c^2}\Delta x \right) = \gamma \left( 0 - \frac{v}{c^2}\Delta x \right) = -\frac{\gamma v \Delta x}{c^2} \neq 0$$

### 4.2. Consecuencias Físicas y Orden Temporal
- Si $\Delta x > 0$ (el evento $Q$ está a la derecha del evento $P$ en $K$) y $v > 0$ (el sistema $K'$ se desplaza hacia la derecha):
  $$\Delta t' = t_Q' - t_P' < 0 \implies t_Q' < t_P'$$
  El observador $K'$ observa que el evento $Q$ ocurre **cronológicamente antes** que el evento $P$.
- Si un tercer observador $K''$ se desplaza en sentido opuesto ($v < 0$):
  $$\Delta t'' = t_Q'' - t_P'' > 0 \implies t_Q'' > t_P''$$
  El observador $K''$ observa que el evento $P$ ocurre **antes** que $Q$.

**Teorema de la Simultaneidad:**  
*Dos eventos espacialmente separados que son simultáneos respecto a un sistema de referencia inercial NO son simultáneos respecto a ningún otro sistema inercial en movimiento relativo.*

---

## 5. Dilatación Temporal (Time Dilation)

*Fuente: RE.pdf, diaps. 56–63; Transcripción de Clase, 01:15–01:45; French, Special Relativity, cap. 4.*

### 5.1. Definición de Tiempo Propio ($\Delta\tau$ o $\Delta t_0$)
El **tiempo propio** $\Delta t_0$ (denotado a menudo como $\Delta\tau$) es el intervalo de tiempo transcurrido entre dos eventos medido por un observador en cuyo sistema de referencia ambos eventos ocurren **en el mismo punto espacial** ($\Delta x' = 0$).

### 5.2. Deducción a partir de las Transformaciones de Lorentz
En el sistema $K'$ donde el reloj está en reposo ($\Delta x' = 0$), el intervalo registrado es $\Delta t' = \Delta t_0$.  
Aplicando la transformación inversa de Lorentz para el tiempo medido por un observador $K$ respecto al cual el reloj se desplaza a velocidad $v$:

$$\Delta t = \gamma \left( \Delta t' + \frac{v}{c^2}\Delta x' \right) = \gamma \left( \Delta t_0 + \frac{v}{c^2}(0) \right) = \gamma \, \Delta t_0$$

Sustituyendo el factor de Lorentz:

$$\Delta t = \frac{\Delta t_0}{\sqrt{1 - \dfrac{v^2}{c^2}}} \ge \Delta t_0$$

### 5.3. Deducción Geométrica Mediante el "Reloj de Luz"

```
                DEDUCCIÓN DEL RELOJ DE LUZ
                
   En Reposo (Sistema K'):                 En Movimiento (Sistema K):
   
   Espejo Superior ───                     Espejo Superior ───► v
          ▲     │                                 /\
          │     │                                /  \    Hipotenusa = c·Δt/2
        d │     │ d                            /     \
          │     ▼                            /   d    \
   Espejo Inferior ───                     /─────┬─────\
                                          Espejo Inferior ───► v
                                          │< v·Δt/2 >│
```

1. **En el sistema de reposo del reloj ($K'$):**  
   Un pulso de luz sube y baja verticalmente recorriendo una distancia $2d$:
   $$\Delta t_0 = \frac{2d}{c} \implies d = \frac{c \Delta t_0}{2}$$

2. **En el sistema del laboratorio ($K$):**  
   Mientras la luz viaja, los espejos avanzan horizontalmente una distancia $v \Delta t$.  
   Por el Teorema de Pitágoras en el triángulo rectángulo formado por la trayectoria del rayo:
   $$\left( \frac{c \Delta t}{2} \right)^2 = d^2 + \left( \frac{v \Delta t}{2} \right)^2$$
   Sustituyendo $d = \dfrac{c \Delta t_0}{2}$:
   $$\frac{c^2 \Delta t^2}{4} = \frac{c^2 \Delta t_0^2}{4} + \frac{v^2 \Delta t^2}{4}$$
   Multiplicando por 4 y agrupando términos en $\Delta t^2$:
   $$(c^2 - v^2)\Delta t^2 = c^2 \Delta t_0^2$$
   $$\Delta t^2 \left( 1 - \frac{v^2}{c^2} \right) = \Delta t_0^2$$
   $$\Delta t = \frac{\Delta t_0}{\sqrt{1 - \dfrac{v^2}{c^2}}} = \gamma \, \Delta t_0$$

### 5.4. Verificaciones Experimentales Inapelables
1. **Vida Media de los Muones Atmosféricos (Rossi & Hall, 1941; Frisch & Smith, 1963):**  
   Los muones ($\mu^-$) producidos por rayos cósmicos en la alta atmósfera ($h \approx 10\text{ km}$) tienen una vida media en reposo de $\tau_0 \approx 2.197\,\mu\text{s}$.  
   A rapidez $v = 0.995\,c$ ($\gamma \approx 10$):
   - Según la física clásica: distancia recorrida $d = v \tau_0 \approx (0.995 \times 3\times 10^8\text{ m/s}) \times 2.2\times 10^{-6}\text{ s} \approx 657\text{ m} \ll 10\text{ km}$ (ningún muón debería llegar al suelo).
   - Según la Relatividad Especial: para un observador terrestre, el tiempo de vida se dilata a $\tau = \gamma \tau_0 \approx 10 \times 2.2\,\mu\text{s} = 22\,\mu\text{s}$. Distancia recorrida $d = v \tau \approx 6.6\text{ km}$, explicando con exactitud el abundante flujo de muones medido a nivel del mar.
2. **Relojes Atómicos Ópticos (Chou et al., Science 2010):**  
   Medición directa de la dilatación del tiempo mediante espectroscopía de iones de $^{27}\text{Al}^+$ a velocidades de escala humana ($v < 10\text{ m/s}$, equivalente a andar en bicicleta).

---

## 6. Contracción de Longitud (Contracción de Lorentz-FitzGerald)

*Fuente: RE.pdf, diaps. 25, 48; Transcripción de Clase, 01:45–02:05; French (1968), cap. 4.*

### 6.1. Definición de Longitud Propia ($L_0$)
La **longitud propia** $L_0$ de una regla o cuerpo material es la longitud medida por un observador en cuyo sistema de referencia el cuerpo se encuentra **estrictamente en reposo**.

### 6.2. Deducción a partir de las Transformaciones de Lorentz
Consideremos una barra en reposo en el sistema $K'$, orientada a lo largo del eje $x'$, con extremos en $x_1'$ y $x_2'$, de modo que:

$$L_0 = x_2' - x_1'$$

Para que un observador $K$ (respecto al cual la barra se mueve con velocidad $v$) mida la longitud de la barra, debe registrar las posiciones espaciales de ambos extremos **de forma rigurosamente simultánea** en su propio tiempo ($t_1 = t_2 = t$, es decir, $\Delta t = 0$).

Aplicando la transformación directa de Lorentz para las coordenadas espaciales:

$$x_2' = \gamma (x_2 - v t)$$

$$x_1' = \gamma (x_1 - v t)$$

Restando miembro a miembro:

$$x_2' - x_1' = \gamma (x_2 - x_1) - \gamma v (t - t)$$

$$L_0 = \gamma \, L$$

Despejando la longitud $L = x_2 - x_1$ medida por el observador en movimiento:

$$L = \frac{L_0}{\gamma} = L_0 \sqrt{1 - \frac{v^2}{c^2}} \le L_0$$

### 6.3. Propiedades Fundamentales de la Contracción
1. **Unidireccionalidad:** La contracción ocurre **exclusivamente en la dirección paralela al vector velocidad relativa**. Las dimensiones transversales no sufren alteración:
   $$L_\parallel = \frac{L_{0,\parallel}}{\gamma}, \qquad L_\perp = L_{0,\perp}$$
2. **Reciprocidad Relativista:** Si $K$ mide una regla de $K'$, la ve contraída por un factor $\gamma$; simétricamente, si $K'$ mide una regla de $K$, también la ve contraída por el mismo factor $\gamma$.
3. **Medición Operacional vs. Apariencia Visual (Efecto Terrell-Penrose):**  
   La contracción de Lorentz describe la longitud medida mediante registros simultáneos de posición. Si un observador toma una fotografía óptica de un objeto en movimiento ultra-relativista, los fotones emitidos por la parte trasera del objeto tardan más tiempo en llegar a la cámara que los fotones emitidos por la parte delantera. Este retraso compensa exactamente la contracción visual, haciendo que el objeto no se vea aplastado, sino **aparentemente rotado** por un ángulo $\theta = \arcsin(v/c)$ (James Terrell y Roger Penrose, 1959).

---

## 7. Estructura Causal del Espaciotiempo y el Cono de Luz

*Fuente: RE.pdf, diaps. 64–67; Transcripción de Clase, 01:50–02:15; Taylor & Wheeler, cap. 3; Minkowski (1908).*

```
                           CONO DE LUZ DE MINKOWSKI
                           
                                  ct
                                  ▲       FUTURO ABSOLUTO (Tipo Tiempo)
                                  │      / (Efectos posibles de O)
                                  │     /
                                  │    /  / Línea de universo (v < c)
                                  │   /  /
                                  │  /  /
       TIPO ESPACIO               │ /  /                 TIPO ESPACIO
      (Inaccesible)               │/  /                 (Inaccesible)
    ──────────────────────────────┼──────────────────────────────► x
    (Presente Relativo)          /│ (O) Evento Presente
                                / │
                               /  │
                              /   │
                             /    │
                            /     │
                           /      │       PASADO ABSOLUTO (Tipo Tiempo)
                          /       │      (Causas posibles de O)
```

### 7.1. Clasificación Invariante de los Intervalos Espaciotemporales
Dado que el intervalo $\Delta s^2 = c^2 \Delta t^2 - |\Delta\vec{x}|^2$ es un invariante de Lorentz, su **signo** es idéntico para todos los observadores inerciales:

| Tipo de Intervalo | Condición Matemática | Relación Causal y Propiedades |
|---|---|---|
| **Tipo Tiempo (Timelike)** | $\Delta s^2 > 0 \iff c|\Delta t| > \|\Delta\vec{x}\|$ | - Los eventos pueden ser conectados por una partícula material ($v < c$).<br>- **Existe un SRI comóvil** donde ambos eventos ocurren en el mismo punto espacial ($\Delta x' = 0$).<br>- El **tiempo propio** es real: $\Delta\tau = \sqrt{\Delta s^2}/c$.<br>- **El orden temporal es absoluto e invariante**: ningún observador puede invertir el orden de causa y efecto. |
| **Tipo Luz / Nulo (Lightlike)** | $\Delta s^2 = 0 \iff c|\Delta t| = \|\Delta\vec{x}\|$ | - Los eventos solo pueden ser conectados por un rayo de luz o partícula sin masa que viaja a $c$.<br>- El tiempo propio es idénticamente nulo: $\Delta\tau = 0$.<br>- Los eventos yacen sobre la superficie del **Cono de Luz**. |
| **Tipo Espacio (Spacelike)** | $\Delta s^2 < 0 \iff c|\Delta t| < \|\Delta\vec{x}\|$ | - Ninguna señal física o interacción causal puede conectar ambos eventos ($v_{\text{requerida}} > c$).<br>- **Existe un SRI** donde ambos eventos son estrictamente simultáneos ($\Delta t' = 0$).<br>- La **distancia propia** es real: $\Delta\sigma = \sqrt{-\Delta s^2}$.<br>- El orden temporal relativo depende del observador (no viola la causalidad porque los eventos están desconectados causalmente). |

### 7.2. Principio de Causalidad Relativista
El postulado de que ninguna información ni interacción física puede viajar más rápido que la luz ($v \le c$) garantiza que la relación de causa y efecto permanezca inalterada en todo el universo:
- Un evento de causa $C$ y su efecto $E$ siempre están separados por un intervalo de **tipo tiempo** o **tipo luz** ($\Delta s^2 \ge 0$).
- Por consiguiente, $t_E > t_C$ para **todos** los observadores inerciales posibles: **el efecto jamás precede a la causa**.

---

## 8. Dinámica Relativista: Momentum y Energía

*Fuente: RE.pdf, diaps. 68–75; Transcripción de Clase, 02:15–03:00; Einstein (1905b); French, caps. 6–7; Griffiths, cap. 12.*

### 8.1. Reformulación del Momentum Lineal Relativista
En la mecánica clásica, el momentum $\vec{p}_{\text{cl}} = m\vec{v}$ es conservado bajo colisiones en todos los marcos inerciales si se asumen las transformaciones de Galileo. Sin embargo, bajo las transformaciones de Lorentz, la definición clásica no se conserva.

Para preservar el principio fundamental de conservación del momentum en colisiones inerciales, la definición relativista rigurosa debe incorporar la derivada respecto al **tiempo propio** del cuerpo ($d\tau = dt/\gamma$):

$$\vec{p} \equiv m \frac{d\vec{x}}{d\tau} = m \frac{d\vec{x}}{dt} \frac{dt}{d\tau} = \gamma m \vec{v}$$

$$\vec{p} = \frac{m \vec{v}}{\sqrt{1 - \dfrac{v^2}{c^2}}}$$

donde $m$ es la **masa invariante** (masa en reposo) de la partícula.

### 8.2. Segunda Ley de Newton Relativista
La fuerza neta que actúa sobre una partícula relativista se define como la tasa temporal de variación del momentum relativista:

$$\vec{F} \equiv \frac{d\vec{p}}{dt} = \frac{d}{dt}\left( \gamma m \vec{v} \right) = m \frac{d}{dt}\left( \frac{\vec{v}}{\sqrt{1 - v^2/c^2}} \right)$$

Desarrollando la derivada para el movimiento unidimensional:

$$\frac{d}{dt}\left( \frac{v}{\sqrt{1 - v^2/c^2}} \right) = \frac{\dot{v}\sqrt{1 - v^2/c^2} - v \left( \dfrac{-2v\dot{v}}{2\sqrt{1 - v^2/c^2}} \right)}{1 - v^2/c^2} = \frac{\dot{v}(1 - v^2/c^2) + \dfrac{v^2\dot{v}}{c^2}}{(1 - v^2/c^2)^{3/2}} = \frac{a}{(1 - v^2/c^2)^{3/2}} = \gamma^3 a$$

Por lo tanto:

$$F = \gamma^3 m a = \frac{m a}{\left(1 - \dfrac{v^2}{c^2}\right)^{3/2}}$$

**Interpretación Física:**  
A medida que la velocidad se aproxima a la de la luz ($v \to c$), $\gamma \to \infty$. La aceleración producida por una fuerza constante finita tiende asintóticamente a cero ($a \to 0$), haciendo físicamente imposible acelerar un cuerpo material con masa $m > 0$ hasta alcanzar la velocidad de la luz.

### 8.3. Deducción del Teorema del Trabajo y la Energía Cinética
El trabajo mecánico infinitesimal realizado por la fuerza neta a lo largo de un desplazamiento $dx$ es $dW = F dx = \dfrac{dp}{dt} dx = dp \dfrac{dx}{dt} = v dp$.

Integrando desde el reposo ($v = 0, p = 0$) hasta una velocidad final $v$:

$$K = \int_0^p v \, dp = [v p]_0^p - \int_0^v p \, dv$$

Sustituyendo $p = \gamma m v = \dfrac{mv}{\sqrt{1 - v^2/c^2}}$:

$$v p = \gamma m v^2 = \frac{m v^2}{\sqrt{1 - v^2/c^2}}$$

$$\int_0^v p \, dv = \int_0^v \frac{m v}{\sqrt{1 - v^2/c^2}} dv = -m c^2 \left[ \sqrt{1 - \frac{v^2}{c^2}} \right]_0^v = -m c^2 \sqrt{1 - \frac{v^2}{c^2}} + m c^2$$

Combinando ambos términos:

$$\begin{aligned}
K &= \frac{m v^2}{\sqrt{1 - v^2/c^2}} + m c^2 \sqrt{1 - \frac{v^2}{c^2}} - m c^2 = \frac{m v^2 + m c^2\left(1 - \frac{v^2}{c^2}\right)}{\sqrt{1 - v^2/c^2}} - m c^2 \\
&= \frac{m v^2 + m c^2 - m v^2}{\sqrt{1 - v^2/c^2}} - m c^2 = \frac{m c^2}{\sqrt{1 - v^2/c^2}} - m c^2 = \gamma m c^2 - m c^2
\end{aligned}$$

**Energía Cinética Relativista:**

$$K = (\gamma - 1) m c^2 = m c^2 \left( \frac{1}{\sqrt{1 - \dfrac{v^2}{c^2}}} - 1 \right)$$

### 8.4. Límite Clásico Newtoniano de la Energía Cinética
Expandiendo $\gamma = (1 - \beta^2)^{-1/2}$ en serie de Taylor para $\beta = v/c \ll 1$:

$$\gamma = 1 + \frac{1}{2}\frac{v^2}{c^2} + \frac{3}{8}\frac{v^4}{c^4} + \mathcal{O}\left(\frac{v^6}{c^6}\right)$$

Sustituyendo en la expresión de $K$:

$$K = m c^2 \left[ \left( 1 + \frac{1}{2}\frac{v^2}{c^2} + \frac{3}{8}\frac{v^4}{c^4} + \dots \right) - 1 \right] = \frac{1}{2} m v^2 + \frac{3}{8} m \frac{v^4}{c^2} + \mathcal{O}(v^6)$$

**Resultado:**  
El primer término reproduce con exactitud la energía cinética clásica newtoniana $K_{\text{cl}} = \frac{1}{2}mv^2$, mientras que el segundo término proporciona la primera corrección relativista de orden superior.

### 8.5. Energía Total Relativista y Energía en Reposo ($E_0 = mc^2$)
Reordenando la ecuación de la energía cinética:

$$\gamma m c^2 = K + m c^2$$

Definiendo la **Energía Total Relativista** $E$:

$$E \equiv \gamma m c^2 = \frac{m c^2}{\sqrt{1 - \dfrac{v^2}{c^2}}}$$

Cuando la partícula está en reposo relativo ($v = 0 \implies \gamma = 1$), su energía cinética es nula ($K = 0$), pero retiene una energía intrínseca fundamental denominada **Energía en Reposo ($E_0$)**:

$$E_0 = m c^2$$

```
                         DESGLOSE DE LA ENERGÍA RELATIVISTA
                         
            ┌───────────────────────────────────────────────────┐
            │           ENERGÍA TOTAL: E = γ·m·c²               │
            └─────────────────────────┬─────────────────────────┘
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
   Energía en Reposo (E₀ = m·c²)                       Energía Cinética (K = (γ-1)m·c²)
   - Energía intrínseca de la masa                     - Trabajo realizado para acelerar
   - Presente incluso a velocidad v = 0                 el cuerpo desde el reposo
```

### 8.6. Deducción de la Relación Invariante Energía-Momentum
Elevamos al cuadrado la energía total $E$ y el momentum relativista multiplicado por $c$ ($p c$):

$$E^2 = \gamma^2 m^2 c^4 = \frac{m^2 c^4}{1 - \dfrac{v^2}{c^2}}$$

$$(pc)^2 = (\gamma m v c)^2 = \gamma^2 m^2 v^2 c^2 = \frac{m^2 v^2 c^2}{1 - \dfrac{v^2}{c^2}}$$

Restando miembro a miembro:

$$E^2 - (pc)^2 = \frac{m^2 c^4 - m^2 v^2 c^2}{1 - \dfrac{v^2}{c^2}} = \frac{m^2 c^4 \left( 1 - \dfrac{v^2}{c^2} \right)}{1 - \dfrac{v^2}{c^2}} = m^2 c^4 = (mc^2)^2$$

Obtenemos la relación dinámica fundamental de la Relatividad Especial:

$$E^2 = (pc)^2 + (mc^2)^2 \iff E = \sqrt{p^2 c^2 + m^2 c^4}$$

En formalismo cuadrivectorial, esto equivale a la norma invariante del cuadrimomentum $p^\mu = (E/c, \vec{p})$:

$$p_\mu p^\mu = \frac{E^2}{c^2} - |\vec{p}|^2 = m^2 c^2 \quad (\text{Invariante de Lorentz})$$

### 8.7. Partículas sin Masa en Reposo ($m = 0$, Fotones)
Para partículas que carecen de masa invariante (como el fotón o los gravitones hipotéticos):

$$m = 0 \implies E^2 = (pc)^2 \implies E = p c \iff p = \frac{E}{c}$$

Dado que $p = \gamma m v$ y $E = \gamma m c^2$, el cociente $\dfrac{p}{E} = \dfrac{v}{c^2}$. Para el fotón, $p = E/c \implies \dfrac{E/c}{E} = \dfrac{1}{c} = \dfrac{v}{c^2} \implies v = c$.

**Conclusión:**  
Toda partícula sin masa ($m = 0$) debe viajar estrictamente a la velocidad de la luz $c$ en el vacío en todos los sistemas inerciales.

### 8.8. Aplicaciones Cuantitativas y Reacciones Nucleares
La equivalencia masa-energía $\Delta E = \Delta m \cdot c^2$ es el principio físico que explica la inmensa liberación energética en procesos nucleares:

1. **Magnitud de la Energía de 1 Gramo de Materia:**
   $$E = (10^{-3}\text{ kg}) \times (2.9979 \times 10^8\text{ m/s})^2 \approx 8.988 \times 10^{13}\text{ J} \approx 2.5 \times 10^7\text{ kWh} \approx 21.5\text{ kilotones de TNT}$$
2. **Fisión Nuclear del Uranio-235 ($^{235}\text{U}$):**
   $$^{235}\text{U} + n \longrightarrow \,^{141}\text{Ba} + \,^{92}\text{Kr} + 3n + \Delta E$$
   El defecto de masa $\Delta m = m_{\text{reactivos}} - m_{\text{productos}} \approx 0.215\text{ u}$ libera aproximadamente $200\text{ MeV}$ de energía cinética por cada núcleo fisionado.
3. **Fusión Nuclear Estelar (Cadena Protón-Protón en el Sol):**
   $$4 \,^1\text{H} \longrightarrow \,^4\text{He} + 2e^+ + 2\nu_e + 26.73\text{ MeV}$$
   La masa del núcleo de helio-4 es un $0.7\%$ menor que la masa de 4 protones libres; esta fracción $\Delta m/m = 0.007$ sustenta la radiación de las estrellas durante miles de millones de años.
4. **Test de Ultra-Alta Precisión de $E=mc^2$ (Rainville et al., Nature 2005):**  
   Comparación de masa mediante trampas de iones de Penning y longitudes de onda de rayos gamma en capturas de neutrones por núcleos de silicio y azufre ($^{28}\text{Si}(n,\gamma)^{29}\text{Si}$ y $^{32}\text{S}(n,\gamma)^{33}\text{S}$), verificando $E = mc^2$ con una precisión récord de **$0.00004\%$** ($4 \times 10^{-7}$).

---

## 9. Preguntas Relevantes y Discusiones de la Clase

*Fuente: Transcripción oficial de la clase, intervenciones de estudiantes.*

1. **Pregunta de Cristopher Angulo (00:21–00:23):** *¿A qué nos referimos formalmente con el término "boost" y por qué se escriben las transformaciones en términos de $ct$?*  
   **Respuesta del docente:** Un "boost" (empujón) es una transformación pura de coordenadas entre dos observadores inerciales que se encuentran en movimiento relativo a velocidad constante, sin rotación espacial de sus ejes coordenados. Se multiplica la coordenada temporal por $c$ ($x^0 = ct$) para que todas las componentes del cuadrivector posición tengan dimensiones homogéneas de longitud (metros), facilitando el álgebra y revelando la simetría de la métrica espaciotemporal.

2. **Pregunta de Cristian Oyarzún (03:03):** *¿Qué ocurre con el tiempo de un observador o partícula que viaja a la velocidad de la luz ($v = c$)? ¿Se detiene el tiempo?*  
   **Respuesta del docente:** Para una partícula con masa, alcanzar $v = c$ requeriría una energía infinita ($\gamma \to \infty$), por lo que es físicamente imposible. Para un fotón (que no tiene masa y viaja a $c$), el intervalo propio $\Delta\tau = \sqrt{c^2\Delta t^2 - \Delta x^2}/c = 0$. No existe ningún sistema de referencia inercial comóvil con un fotón en el cual la luz esté en reposo (violaría el Segundo Postulado). Desde la perspectiva geométrica, los fotones no acumulan tiempo propio a lo largo de su trayectoria nula en el espaciotiempo.

3. **Pregunta de Javier Wolf y Sebastián Paz (02:56–02:58):** *¿En las reacciones nucleares de fusión en reactores Tokamak se puede hacer el proceso inverso? ¿Y cuáles son los mayores desafíos tecnológicos?*  
   **Respuesta del docente:** Sí, se pueden inducir fisiones o absorciones endotérmicas bombardeando núcleos con aceleradores de partículas, pero no ocurren espontáneamente si la reacción es endotérmica. En reactores de fusión magnética (Tokamaks como ITER), el desafío principal es el confinamiento térmico del plasma a más de 100 millones de grados Kelvin, la interacción del flujo neutrónico intenso con las paredes del reactor y el daño por activación de la red cristalina de los materiales estructurales.

4. **Pregunta de Andrés Bluhm y Fernando Vega (02:41):** *¿La energía en reposo $E_0 = mc^2$ es análoga a la energía potencial clásica?*  
   **Respuesta del docente:** No, la energía potencial clásica ($U = mgh$ o $U = \frac{1}{2}kx^2$) depende de la posición relativa del cuerpo dentro de un campo de fuerza externo. La energía en reposo $E_0 = mc^2$ es una propiedad intrínseca de la propia masa inercial del cuerpo, independiente de su posición y de las fuerzas externas, equivalente a la energía latente total confinada en su estructura de materia.

---

## 10. Conclusiones Clave de la Clase

1. **Transformaciones de Lorentz:** Reemplazan definitivamente a las transformaciones de Galileo, preservando la constancia universal de $c$ y la forma de las ecuaciones de Maxwell:
   $$x' = \gamma (x - vt), \qquad t' = \gamma \left(t - \frac{v}{c^2}x\right), \qquad \gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$$
2. **Invarianza del Intervalo ($\Delta s^2$):** La cantidad $\Delta s^2 = c^2 \Delta t^2 - |\Delta\vec{x}|^2$ es idéntica en todos los SRI, definiendo la métrica hiperbólica pseudo-euclidiana del espaciotiempo de Minkowski.
3. **Relatividad de la Simultaneidad:** Eventos separados espacialmente que ocurren al mismo tiempo para un observador ocurren en instantes distintos para observadores en movimiento relativo ($\Delta t' = -\gamma v \Delta x / c^2$).
4. **Dilatación Temporal y Contracción de Longitud:**
   $$\Delta t = \gamma \Delta t_0 \ge \Delta t_0 \qquad \text{y} \qquad L = \frac{L_0}{\gamma} \le L_0$$
5. **Estructura Causal y Conos de Luz:**
   - Intervalos tipo tiempo ($\Delta s^2 > 0$): causalmente conectados, orden temporal absoluto.
   - Intervalos tipo luz ($\Delta s^2 = 0$): trayectoria de fotones a $45^\circ$.
   - Intervalos tipo espacio ($\Delta s^2 < 0$): causalmente desconectados, simultaneidad posible en algún SRI.
6. **Dinámica Relativista y Equivalencia Masa-Energía:**
   - Momentum: $\vec{p} = \gamma m \vec{v}$
   - Energía Total: $E = \gamma mc^2 = K + mc^2$
   - Relación Invariante: $E^2 = (pc)^2 + (mc^2)^2$
   - Energía en Reposo: $E_0 = mc^2$
   - Partículas sin masa ($m = 0$): $E = pc$, $v = c$.

---

## 11. Referencias Bibliográficas

### 1. Artículos Científicos Originales (Fuentes Primarias)
- Einstein, A. (1905a). *Zur Elektrodynamik bewegter Körper* [Sobre la electrodinámica de los cuerpos en movimiento]. Annalen der Physik, 17(10), 891–921. DOI: `10.1002/andp.19053221004`.
- Einstein, A. (1905b). *Ist die Trägheit eines Körpers von seinem Energiegehalt abhängig?* [¿Depende la inercia de un cuerpo de su contenido de energía?]. Annalen der Physik, 18(13), 639–641. DOI: `10.1002/andp.19053231314`.
- Minkowski, H. (1908). *Raum und Zeit* [Espacio y Tiempo]. Vortrag gehalten auf der 80. Naturforscherversammlung zu Köln. Physikalische Zeitschrift, 10, 104–111 (1909).
- Terrell, J. (1959). *Invisibility of the Lorentz Contraction*. Physical Review, 116(4), 1041–1045. DOI: `10.1103/PhysRev.116.1041`.
- Penrose, R. (1959). *The Apparent Shape of a Relativistically Moving Sphere*. Mathematical Proceedings of the Cambridge Philosophical Society, 55(1), 137–139.

### 2. Pruebas Experimentales Modernas y de Precisión
- Rainville, S., Thompson, J. K., Myers, E. G., Brown, J. M., Dewey, M. S., Kessler, E. G., Deslattes, R. D., Börner, H. G., Jentschel, M., Mutti, P., & Pritchard, D. E. (2005). *World Year of Physics: A direct test of $E = mc^2$*. Nature, 438(7071), 1096–1097. DOI: `10.1038/4381096a`.
- Chou, C. W., Hume, D. B., Rosenband, T., & Wineland, D. J. (2010). *Optical Clocks and Relativity*. Science, 329(5999), 1630–1633. DOI: `10.1126/science.1192720`.
- Saathoff, G., Karpuk, S., Eisenbarth, U., Huber, G., Krohn, S., Muñoz Horta, R., Reinhardt, S., Schwalm, D., Wolf, A., & Gwinner, G. (2003). *Improved Test of Time Dilation in Special Relativity*. Physical Review Letters, 91(19), 190403.
- Frisch, D. H., & Smith, J. H. (1963). *Measurement of the Relativistic Time Dilation Using $\mu$-Mesons*. American Journal of Physics, 31(5), 342–355.

### 3. Textos del Curso y Universitarios Canónicos
- Rubilar Alegría, G. (2026). *Apuntes del Módulo de Relatividad Especial (RE.pdf)*. Diplomado en Física Moderna, Universidad de Concepción.
- Taylor, E. F., & Wheeler, J. A. (1992). *Spacetime Physics: Introduction to Special Relativity* (2nd ed.). W. H. Freeman and Company.
- French, A. P. (1968). *Special Relativity*. The M.I.T. Introductory Physics Series. W. W. Norton & Company.
- Griffiths, D. J. (2017). *Introduction to Electrodynamics* (4th ed.). Cambridge University Press, cap. 12.
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.
- Resnick, R. (1968). *Introduction to Special Relativity*. John Wiley & Sons.

### 4. Recursos de Libre Acceso Verificados
- Feynman, R. P., Leighton, R. B., & Sands, M. (1963). *The Feynman Lectures on Physics, Vol. I, Cap. 15, 16 & 17: Special Relativity, Relativistic Energy and Momentum, Space-Time*. California Institute of Technology. [https://www.feynmanlectures.caltech.edu/](https://www.feynmanlectures.caltech.edu/)
- NIST Physical Measurement Laboratory. *Fundamental Physical Constants: Electron and Proton Rest Masses, Speed of Light*. [https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
