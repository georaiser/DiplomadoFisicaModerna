# Análisis de Clase 03: El Factor k de Bondi, Efecto Doppler Relativista y Composición Relativista de Velocidades

**Diplomado en Física Moderna — Módulo 03: Relatividad Especial**  
**Docente:** Dr. Guillermo Rubilar Alegría  
**Fecha de la sesión:** 14 de agosto de 2026  
**Duración:** 2 horas 58 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`grabacion/Clase del Diplomado de Física Moderna-20260814_191603.docx`).
- Diapositivas oficiales del módulo (`RE.pdf`, diapositivas 35 a 44).
- Fuente primaria: H. Bondi, *Relativity and Common Sense: A New Approach to Einstein* (Heinemann, 1964), caps. 7–9.
- Fuente primaria: A. Einstein, *Zur Elektrodynamik bewegter Körper*, Ann. Phys. 17, 891 (1905), § 5 (Adición de velocidades) y § 7 (Efecto Doppler).
- Bibliografía complementaria: E. F. Taylor & J. A. Wheeler, *Spacetime Physics* (W. H. Freeman, 1992), cap. 3; A. P. French, *Special Relativity* (Norton, 1968), cap. 5; S. Weinberg, *Foundations of Modern Physics* (Cambridge, 2021), cap. 1.

---

## 1. Introducción y Fundamentos del $k$-cálculo de Bondi

*Fuente: RE.pdf, diaps. 35–36; Transcripción de Clase, 00:05–00:45; Bondi (1964).*

En la Clase 02 se demostró que un observador inercial puede mapear eventos asignando coordenadas mediante pulsos de luz emitidos y recibidos por su reloj propio (protocolo del radar). En esta sesión, el Dr. Rubilar extendió este formalismo para conectar las observaciones realizadas por **dos observadores inerciales en movimiento relativo rectilíneo uniforme**, empleando el método del **$k$-cálculo de Hermann Bondi**.

```
                           CONEXIÓN ENTRE OBSERVADORES INERCIALES
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
   Enfoque Tradicional (Lorentz-Einstein)              Enfoque Operacional (k-cálculo de Bondi)
   - Redes infinitas de relojes sincronizados         - Observadores locales con relojes propios
   - Transformaciones de coordenadas (t, x)            - Intercambio directo de señales luminosas
   - Deducción vía ecuaciones algebraicas lineales    - Geometría de conos de luz y razones de escala
```

### 1.1. Hipótesis Operacional Fundamental de Bondi
Consideremos dos observadores inerciales $A$ y $B$ que se mueven con velocidad relativa constante a lo largo de una línea recta común.
- Supongamos que en el instante inicial $t_A = t_B = 0$, ambos observadores coinciden espacialmente en un evento común $O$ (sincronización de orígenes).
- A partir de ese momento, el observador $A$ emite pulsos de luz sucesivos separados por un intervalo de tiempo propio $\Delta T_A$ medido en su reloj.
- El observador $B$ recibe estos pulsos registrando un intervalo de tiempo propio $\Delta T_B$ en su respectivo reloj.

Por la homogeneidad del espaciotiempo y el Principio de Relatividad, la relación entre los intervalos de emisión y recepción debe ser estrictamente **lineal e invariante en el tiempo**:

$$\Delta T_B = k \, \Delta T_A$$

donde $k = k(v)$ es un factor adimensional positivo que depende exclusivamente de la velocidad relativa $v$ entre $A$ y $B$.

---

## 2. Deducción Matemática Formal del Factor $k$ de Bondi

*Fuente: RE.pdf, diaps. 37–40; Transcripción de Clase, 00:45–01:15; Bondi (1964), cap. 8.*

```
                DEDUCCIÓN DEL FACTOR k MEDIANTE SEÑALES LUMINOSAS
                
         ct (según A)
         ▲
         │                                       / Línea de Universo de B
    t₃   │ (R) Recepción de señal reflejada     /  (velocidad v)
         │  │\                                 /
         │  │ \                               /
         │  │  \                             /
         │  │   \                           /
    t_P  │ - - - \ - - - - - - - - - - - - (P) Evento de Reflexión en B (t_P, x_P)
         │  │     \                       /
         │  │      \                     /
         │  │       \                   /  Rayo de ida (viaja a c)
         │  │        \                 /
    t₁=T │ (E) Emisión de señal       /
         │  │                        /
         │  │                       /
       0 └──┴──────────────────────/────────────────────────────────► x
           (O) Coincidencia inicial
```

### 2.1. Protocolo de Emisión, Reflexión y Recepción
1. En $t = 0$, los observadores $A$ y $B$ coinciden ($x_A = x_B = 0$).
2. En el instante $t_1 = T$ (según el reloj de $A$), $A$ emite una señal luminosa hacia $B$.
3. La señal viaja a través del vacío con rapidez $c$ e intercepta a $B$ en el evento $P$. Según el reloj propio de $B$, el tiempo transcurrido desde la coincidencia inicial es:
   $$t_2' = (\Delta T)_B = k \, T$$
4. En el mismo instante $P$, $B$ refleja inmediatamente la señal luminosa de vuelta hacia $A$.
5. Debido a la simetría del Principio de Relatividad, el viaje de regreso de la señal desde $B$ hacia $A$ introduce un segundo factor idéntico $k$. Por lo tanto, el observador $A$ recibe la señal reflejada en el instante:
   $$t_3 = k \, t_2' = k (k T) = k^2 T$$

### 2.2. Coordenadas del Evento $P$ según el Observador $A$
Aplicando el método del radar deducido en la Clase 02, el observador $A$ asigna al evento de reflexión $P$ las siguientes coordenadas espacio-temporales:

- **Tiempo asignado a $P$ ($t_P$):**
  $$t_P = \frac{t_1 + t_3}{2} = \frac{T + k^2 T}{2} = \left( \frac{1 + k^2}{2} \right) T \qquad \text{(Ecuación 1)}$$

- **Posición espacial asignada a $P$ ($x_P$):**
  $$x_P = c \left( \frac{t_3 - t_1}{2} \right) = c \left( \frac{k^2 T - T}{2} \right) = c \left( \frac{k^2 - 1}{2} \right) T \qquad \text{(Ecuación 2)}$$

### 2.3. Determinación de la Velocidad Relativa ($v$)
Dado que el evento $P$ ocurre exactamente sobre la línea de universo del observador $B$, y sabiendo que $B$ partió del origen en $t = 0$ moviéndose a velocidad constante $v$, la posición de $B$ en el tiempo $t_P$ debe ser $x_P = v \, t_P$.

Dividiendo miembro a miembro la Ecuación 2 por la Ecuación 1:

$$\frac{x_P}{t_P} = \frac{c \left( \dfrac{k^2 - 1}{2} \right) T}{\left( \dfrac{1 + k^2}{2} \right) T} = c \left( \frac{k^2 - 1}{k^2 + 1} \right)$$

Igualando a la velocidad relativa $v$:

$$v = c \left( \frac{k^2 - 1}{k^2 + 1} \right) \iff \beta \equiv \frac{v}{c} = \frac{k^2 - 1}{k^2 + 1}$$

### 2.4. Despeje Explícito del Factor de Bondi $k(v)$
Multiplicando ambos lados por $(k^2 + 1)$:

$$\beta (k^2 + 1) = k^2 - 1$$

$$\beta k^2 + \beta = k^2 - 1$$

$$1 + \beta = k^2 - \beta k^2 = k^2 (1 - \beta)$$

Despejando $k^2$:

$$k^2 = \frac{1 + \beta}{1 - \beta} = \frac{1 + \frac{v}{c}}{1 - \frac{v}{c}}$$

Tomando la raíz cuadrada positiva (dado que $k > 0$):

$$k = \sqrt{\frac{1 + \frac{v}{c}}{1 - \frac{v}{c}}} = \sqrt{\frac{1 + \beta}{1 - \beta}}$$

**Resultado Fundamental:**  
El factor de Bondi $k$ es una función monótona creciente de la velocidad relativa $v/c$.

---

## 3. Efecto Doppler Relativista Longitudinal y Redshift

*Fuente: RE.pdf, diaps. 40–41; Transcripción de Clase, 01:15–01:40; French, Special Relativity, cap. 5.*

### 3.1. Relación entre Periodos y Frecuencias
Si una fuente emisora $A$ emite una onda electromagnética monocromática de frecuencia propia $\nu_A$ y periodo propio $T_A = 1/\nu_A$, dos crestas de onda consecutivas salen separadas por un intervalo de tiempo $\Delta t_{\text{em}} = T_A$.

El observador receptor $B$ recibe estas crestas separadas por un periodo medido $T_B = \Delta t_{\text{rec}} = k \, T_A$.

Dado que la frecuencia es el inverso del periodo ($\nu = 1/T$):

$$\nu_B = \frac{1}{T_B} = \frac{1}{k \, T_A} = \frac{\nu_A}{k}$$

### 3.2. Fuente en Alejamiento (Corrimiento al Rojo / Redshift)
Cuando la fuente y el receptor se **alejan** mutuamente a velocidad $v > 0$:

$$\nu_B = \frac{\nu_A}{\sqrt{\dfrac{1 + \beta}{1 - \beta}}} = \nu_A \sqrt{\frac{1 - \beta}{1 + \beta}} = \nu_A \sqrt{\frac{1 - v/c}{1 + v/c}} < \nu_A$$

Como la frecuencia disminuye ($\nu_B < \nu_A$), la longitud de onda aumenta ($\lambda_B > \lambda_A$), desplazando el espectro luminoso hacia el extremo rojo.

### 3.3. Fuente en Aproximación (Corrimiento al Azul / Blueshift)
Cuando la fuente y el receptor se **acercan** mutuamente ($v \to -v$, o $\beta \to -\beta$):

$$k_{\text{acercamiento}} = \frac{1}{k} = \sqrt{\frac{1 - \beta}{1 + \beta}}$$

$$\nu_B = \nu_A \sqrt{\frac{1 + \beta}{1 - \beta}} = \nu_A \sqrt{\frac{1 + v/c}{1 - v/c}} > \nu_A$$

La frecuencia observada es mayor que la emitida, desplazando el espectro hacia el azul.

### 3.4. Definición del Parámetro de Redshift Astrofísico ($z$)
En astronomía y cosmología observacional, el corrimiento al rojo $z$ se define operacionalmente como:

$$z \equiv \frac{\Delta \lambda}{\lambda_0} = \frac{\lambda_{\text{rec}} - \lambda_{\text{em}}}{\lambda_{\text{em}}} = \frac{\lambda_{\text{rec}}}{\lambda_{\text{em}}} - 1$$

Dado que $\lambda \nu = c \implies \frac{\lambda_{\text{rec}}}{\lambda_{\text{em}}} = \frac{\nu_{\text{em}}}{\nu_{\text{rec}}} = k$:

$$z = k - 1 = \sqrt{\frac{1 + \beta}{1 - \beta}} - 1$$

### 3.5. Límite Clásico no Relativista ($v \ll c$)
Expandiendo el factor de Bondi en serie de Taylor de primer orden en $\beta = v/c \ll 1$:

$$k = (1 + \beta)^{1/2}(1 - \beta)^{-1/2} \approx \left( 1 + \frac{1}{2}\beta \right)\left( 1 + \frac{1}{2}\beta \right) \approx 1 + \beta + \mathcal{O}(\beta^2)$$

Sustituyendo en la expresión de la frecuencia:

$$\nu_B = \frac{\nu_A}{1 + \beta} \approx \nu_A (1 - \beta) = \nu_A \left( 1 - \frac{v}{c} \right)$$

$$z \approx \beta = \frac{v}{c}$$

**Interpretación Física:**  
Para velocidades bajas ($v \ll c$), se recupera exactamente la fórmula clásica de Doppler para ondas acústicas. Sin embargo, a velocidades relativistas, la raíz cuadrada $\sqrt{\frac{1-\beta}{1+\beta}}$ incorpora automáticamente tanto el efecto cinemático clásico de Doppler como la **dilatación temporal relativista** del reloj emisor.

---

## 4. Composición Relativista de Velocidades en 1D

*Fuente: RE.pdf, diaps. 42–44; Transcripción de Clase, 01:54–02:30; Bondi (1964), cap. 9; Einstein (1905), § 5.*

### 4.1. Configuración de Tres Observadores Inerciales Colineales
Consideremos tres observadores inerciales colineales $A$, $B$ y $C$ en movimiento rectilíneo relativo a lo largo del mismo eje espacial $x$:
- El observador $B$ se mueve con velocidad $v_{AB}$ respecto al observador $A$.
- El observador $C$ se mueve con velocidad $v_{BC}$ respecto al observador $B$.
- Deseamos determinar la velocidad $v_{AC}$ del observador $C$ respecto a $A$.

```
                COMPOSICIÓN DE VELOCIDADES MEDIANTE SEÑALES LUMINOSAS
                
         ct
         ▲
         │                                       / Línea de Universo de C
         │                                      /   (v_AC respecto a A)
         │                                     /
         │                                    /  / Línea de Universo de B
         │                                   /  /    (v_AB respecto a A)
         │                                  /  /
         │                                 /  /
         │  (A emite señal en T)          /  /
         │  ─────────► (B recibe en k_AB·T) /
         │             ────────────────► (C recibe en k_BC·(k_AB·T))
         │
       0 └──┴───────────────────────────────┴────────────────────────► x
           (A, B, C coinciden en t = 0)
```

### 4.2. La Propiedad de Transitividad del Factor $k$
1. En $t = 0$, los tres observadores coinciden en el origen común.
2. $A$ emite una señal luminosa en el instante $t_A = T$.
3. $B$ recibe dicha señal en su tiempo propio:
   $$t_B = k_{AB} \, T$$
4. $B$ retransmite de inmediato la señal a $C$. El observador $C$ recibe la señal en su tiempo propio:
   $$t_C = k_{BC} \, t_B = k_{BC} (k_{AB} \, T) = (k_{AB} \, k_{BC}) T$$
5. Por definición directa del factor de Bondi global entre $A$ y $C$:
   $$t_C = k_{AC} \, T$$

Por consiguiente, el factor de Bondi se compone mediante una simple **multiplicación algebraica**:

$$k_{AC} = k_{AB} \cdot k_{BC}$$

### 4.3. Deducción Algebraica de la Fórmula de Adición Relativista
Elevando al cuadrado ambos lados de la ecuación de transitividad:

$$k_{AC}^2 = k_{AB}^2 \cdot k_{BC}^2$$

Sustituyendo la relación fundamental $k^2 = \frac{1 + v/c}{1 - v/c}$ para cada par de observadores:

$$\frac{1 + \frac{v_{AC}}{c}}{1 - \frac{v_{AC}}{c}} = \left( \frac{1 + \frac{v_{AB}}{c}}{1 - \frac{v_{AB}}{c}} \right) \left( \frac{1 + \frac{v_{BC}}{c}}{1 - \frac{v_{BC}}{c}} \right)$$

Definiendo las velocidades normalizadas $\beta_{AC} = v_{AC}/c$, $\beta_{AB} = v_{AB}/c$, $\beta_{BC} = v_{BC}/c$:

$$\frac{1 + \beta_{AC}}{1 - \beta_{AC}} = \frac{(1 + \beta_{AB})(1 + \beta_{BC})}{(1 - \beta_{AB})(1 - \beta_{BC})} = \frac{1 + \beta_{AB} + \beta_{BC} + \beta_{AB}\beta_{BC}}{1 - \beta_{AB} - \beta_{BC} + \beta_{AB}\beta_{BC}}$$

Sea la fracción $\dfrac{N}{D} = \dfrac{1 + \beta_{AB} + \beta_{BC} + \beta_{AB}\beta_{BC}}{1 - \beta_{AB} - \beta_{BC} + \beta_{AB}\beta_{BC}}$.  
Aplicando la propiedad algebraica de las proporciones: si $\dfrac{1 + \beta_{AC}}{1 - \beta_{AC}} = \dfrac{N}{D}$, entonces:

$$\beta_{AC} = \frac{N - D}{N + D}$$

Calculando el numerador $N - D$:

$$N - D = (1 + \beta_{AB} + \beta_{BC} + \beta_{AB}\beta_{BC}) - (1 - \beta_{AB} - \beta_{BC} + \beta_{AB}\beta_{BC}) = 2(\beta_{AB} + \beta_{BC})$$

Calculando el denominador $N + D$:

$$N + D = (1 + \beta_{AB} + \beta_{BC} + \beta_{AB}\beta_{BC}) + (1 - \beta_{AB} - \beta_{BC} + \beta_{AB}\beta_{BC}) = 2(1 + \beta_{AB}\beta_{BC})$$

Sustituyendo y simplificando el factor $2$:

$$\beta_{AC} = \frac{2(\beta_{AB} + \beta_{BC})}{2(1 + \beta_{AB}\beta_{BC})} = \frac{\beta_{AB} + \beta_{BC}}{1 + \beta_{AB}\beta_{BC}}$$

Multiplicando por $c$, obtenemos la célebre **Ley de Composición Relativista de Velocidades 1D de Einstein (1905)**:

$$v_{AC} = \frac{v_{AB} + v_{BC}}{1 + \dfrac{v_{AB} v_{BC}}{c^2}}$$

---

## 5. Propiedades Fundamentales y Teorema de Velocidad Límite

*Fuente: RE.pdf, diap. 44; Transcripción de Clase, 02:10–02:35; Taylor & Wheeler (1992).*

### 5.1. Recuperación del Límite Clásico Newtoniano ($v \ll c$)
Si ambas velocidades relativas son pequeñas en comparación con la rapidez de la luz ($v_{AB} \ll c$ y $v_{BC} \ll c$):

$$\frac{v_{AB} v_{BC}}{c^2} \approx 0 \implies v_{AC} \approx v_{AB} + v_{BC}$$

Se recupera de forma exacta la ley de adición galileana clásica.

### 5.2. Invarianza Absoluta de la Rapidez de la Luz
Supongamos que el observador $B$ emite un pulso de luz hacia adelante ($v_{BC} = c$):

$$v_{AC} = \frac{v_{AB} + c}{1 + \dfrac{v_{AB} c}{c^2}} = \frac{v_{AB} + c}{1 + \dfrac{v_{AB}}{c}} = \frac{v_{AB} + c}{\left( \dfrac{c + v_{AB}}{c} \right)} = c \left( \frac{v_{AB} + c}{v_{AB} + c} \right) = c$$

**Resultado Impresionante:**  
Cualquiera sea la velocidad $v_{AB}$ del emisor ($B$) respecto a $A$, el observador $A$ medirá siempre que la luz viaja con rapidez exactamente $c$. Esto demuestra la **consistencia interna perfecta** de la cinemática relativista con el Segundo Postulado.

### 5.3. Teorema de la Velocidad Límite Infralumínica
Si dos cuerpos materiales se mueven con rapideces estrictamente inferiores a la de la luz ($|v_{AB}| < c$ y $|v_{BC}| < c$), su velocidad combinada $v_{AC}$ es **estrictamente menor que $c$**.

**Demostración Analítica:**  
Calculamos la diferencia $c - v_{AC}$:

$$\begin{aligned}
c - v_{AC} &= c - \frac{v_{AB} + v_{BC}}{1 + \dfrac{v_{AB} v_{BC}}{c^2}} = \frac{c \left( 1 + \dfrac{v_{AB} v_{BC}}{c^2} \right) - (v_{AB} + v_{BC})}{1 + \dfrac{v_{AB} v_{BC}}{c^2}} \\
&= \frac{c + \dfrac{v_{AB} v_{BC}}{c} - v_{AB} - v_{BC}}{1 + \dfrac{v_{AB} v_{BC}}{c^2}} = \frac{c \left( 1 - \dfrac{v_{AB}}{c} \right) - v_{BC} \left( 1 - \dfrac{v_{AB}}{c} \right)}{1 + \dfrac{v_{AB} v_{BC}}{c^2}} \\
&= \frac{(c - v_{BC})\left( 1 - \dfrac{v_{AB}}{c} \right)}{1 + \dfrac{v_{AB} v_{BC}}{c^2}} = \frac{(c - v_{AB})(c - v_{BC})}{c \left( 1 + \dfrac{v_{AB} v_{BC}}{c^2} \right)}
\end{aligned}$$

Como $|v_{AB}| < c$ y $|v_{BC}| < c$, los términos $(c - v_{AB}) > 0$, $(c - v_{BC}) > 0$, y el denominador es estrictamente positivo.  
Por lo tanto:

$$c - v_{AC} > 0 \implies v_{AC} < c$$

No existe ninguna cantidad finita de adiciones de velocidades sublumínicas que permita superar o igualar la velocidad de la luz en el vacío.

---

## 6. Comparación Numérica: Cinemática Clásica vs. Cinemática Relativista

*Fuente: Transcripción de Clase, 02:15–02:30; Tabla comparativa discutida en sesión.*

Para ilustrar las discrepancias entre ambas teorías, consideremos varios casos numéricos:

| Velocidad $v_{AB}$ | Velocidad $v_{BC}$ | Predicción Clásica ($v_{AB} + v_{BC}$) | Predicción Relativista ($v_{AC}$) | Discrepancia Relativa |
|---|---|---|---|---|
| $100\text{ km/h} \approx 27.8\text{ m/s}$ | $100\text{ km/h} \approx 27.8\text{ m/s}$ | $200\text{ km/h} = 55.56\text{ m/s}$ | $55.55555555555551\text{ m/s}$ | $\sim 8.6 \times 10^{-15}\%$ (Imperceptible) |
| $0.10\,c$ | $0.10\,c$ | $0.20\,c$ | $\dfrac{0.20\,c}{1 + 0.01} \approx 0.1980\,c$ | $0.99\%$ |
| $0.50\,c$ | $0.50\,c$ | $1.00\,c$ | $\dfrac{1.00\,c}{1 + 0.25} = 0.8000\,c$ | $20.0\%$ |
| $0.80\,c$ | $0.80\,c$ | $1.60\,c$ (¡Superlumínico!) | $\dfrac{1.60\,c}{1 + 0.64} = \dfrac{1.60}{1.64}\,c \approx 0.9756\,c$ | $39.0\%$ (Límite preservado) |
| $0.99\,c$ | $0.99\,c$ | $1.98\,c$ (¡Superlumínico!) | $\dfrac{1.98\,c}{1 + 0.9801} \approx 0.99995\,c$ | $49.5\%$ |
| $0.90\,c$ | $1.00\,c$ (fotón) | $1.90\,c$ | $\dfrac{0.90 + 1}{1 + 0.90}\,c = 1.0000\,c$ | Invarianza exacta de $c$ |

---

## 7. Preguntas Relevantes y Discusiones de la Clase

*Fuente: Transcripción oficial de la clase, intervenciones de estudiantes.*

1. **Pregunta de Cristopher Angulo (00:04):** *¿A qué nos referimos con relatividad cuando se habla de velocidades relativas en comparación con el sentido general del término?*  
   **Respuesta del docente:** El concepto de relatividad en cinemática refiere estrictamente a cómo un mismo fenómeno físico es cuantificado numéricamente por distintos observadores inerciales que se encuentran en movimiento relativo entre sí. La velocidad no es una propiedad intrínseca y absoluta de un cuerpo, sino una relación entre el cuerpo y el sistema de referencia elegido para medirlo.

2. **Pregunta de Sebastián Paz y Galo Eidelstein (00:08–00:15):** *¿Por qué en los diagramas de Minkowski el factor $k$ se aplica multiplicativamente tanto de ida como de vuelta?*  
   **Respuesta del docente:** Por la perfecta simetría del Principio de Relatividad y la homogeneidad del espaciotiempo. Si $A$ ve que los relojes de $B$ se alejan a velocidad $v$, $B$ ve que los relojes de $A$ se alejan a la misma rapidez $v$ en sentido opuesto. La razón geométrica de dilatación de intervalos luminosos entre líneas de universo rectas que se intersecan en el origen es una constante de escala invariante $k(v)$.

3. **Pregunta de Javier Wolf (02:51):** *¿Cómo queda el cálculo del efecto Doppler o de la velocidad si la señal de luz se emite formando un ángulo de $90^\circ$ o si rotamos el sistema?*  
   **Respuesta del docente:** Eso corresponde al **Efecto Doppler Transversal**. En la física clásica no existe efecto Doppler transversal (a $90^\circ$ el corrimiento es cero). En la Relatividad Especial, debido a la dilatación del tiempo del emisor ($\Delta t = \gamma \Delta t_0$), un observador que mira la fuente pasar a $90^\circ$ de su línea de visión detecta una frecuencia reducida por el factor de Lorentz: $\nu = \nu_0 \sqrt{1 - v^2/c^2} = \nu_0 / \gamma$. Esto fue verificado experimentalmente de forma brillante por Ives y Stilwell en 1938 y por Saathoff et al. en 2003.

---

## 8. Conclusiones Clave de la Clase

1. **Eficacia del $k$-cálculo de Bondi:** Permite deducir los resultados cinemáticos centrales de la Relatividad Especial mediante el intercambio directo de pulsos luminosos entre observadores inerciales locales, sin requerir redes infinitas de relojes preconcebidas.
2. **Deducción del Factor de Bondi:**
   $$k = \sqrt{\frac{1 + v/c}{1 - v/c}} = \sqrt{\frac{1 + \beta}{1 - \beta}}$$
3. **Efecto Doppler Relativista Longitudinal:**
   - En alejamiento (Redshift): $\nu_{\text{rec}} = \nu_{\text{em}} \sqrt{\dfrac{1 - \beta}{1 + \beta}} = \dfrac{\nu_{\text{em}}}{k}$
   - En acercamiento (Blueshift): $\nu_{\text{rec}} = \nu_{\text{em}} \sqrt{\dfrac{1 + \beta}{1 - \beta}} = k \, \nu_{\text{em}}$
   - Redshift cosmológico: $z = k - 1$.
4. **Composición Relativista de Velocidades 1D:**
   $$v_{AC} = \frac{v_{AB} + v_{BC}}{1 + \dfrac{v_{AB} v_{BC}}{c^2}}$$
5. **Universalidad de la Rapidez de la Luz:** La suma relativista con la velocidad de la luz siempre arroja exactamente $c$, y ninguna combinación finita de velocidades sublumínicas puede alcanzar o superar $c$.

---

## 9. Referencias Bibliográficas

### 1. Artículos Científicos Originales (Fuentes Primarias)
- Einstein, A. (1905). *Zur Elektrodynamik bewegter Körper*. Annalen der Physik, 17(10), 891–921. DOI: `10.1002/andp.19053221004`.
- Ives, H. E., & Stilwell, G. R. (1938). *An Experimental Study of the Rate of a Moving Atomic Clock*. Journal of the Optical Society of America, 28(7), 215–226. DOI: `10.1364/JOSA.28.000215`.
- Saathoff, G., Karpuk, S., Eisenbarth, U., Huber, G., Krohn, S., Muñoz Horta, R., Reinhardt, S., Schwalm, D., Wolf, A., & Gwinner, G. (2003). *Improved Test of Time Dilation in Special Relativity*. Physical Review Letters, 91(19), 190403. DOI: `10.1103/PhysRevLett.91.190403`.

### 2. Textos del Curso y Universitarios Canónicos
- Rubilar Alegría, G. (2026). *Apuntes del Módulo de Relatividad Especial (RE.pdf)*. Diplomado en Física Moderna, Universidad de Concepción.
- Bondi, H. (1964). *Relativity and Common Sense: A New Approach to Einstein*. Heinemann Educational Books (Dover Publications, 1980).
- Taylor, E. F., & Wheeler, J. A. (1992). *Spacetime Physics: Introduction to Special Relativity* (2nd ed.). W. H. Freeman and Company.
- French, A. P. (1968). *Special Relativity*. The M.I.T. Introductory Physics Series. W. W. Norton & Company.
- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.
- Resnick, R. (1968). *Introduction to Special Relativity*. John Wiley & Sons.

### 3. Recursos de Libre Acceso Verificados
- Feynman, R. P., Leighton, R. B., & Sands, M. (1963). *The Feynman Lectures on Physics, Vol. I, Cap. 34: Relativistic Effects in Radiation*. California Institute of Technology. [https://www.feynmanlectures.caltech.edu/I_34.html](https://www.feynmanlectures.caltech.edu/I_34.html)
