---
title: "El efecto fotoeléctrico y la cuantización de la energía: de Planck a Einstein"
author: "Diplomado en Física Moderna - Módulo 2"
date: "2026-07-21"
---

# El Efecto Fotoeléctrico y la Cuantización de la Energía: De Planck a Einstein

**Resumen**
Esta monografía examina la transición paradigmática en el entendimiento de la radiación electromagnética entre los años 1900 y 1905. Se inicia detallando la derivación rigurosa de la ley de Planck que resolvió el problema del espectro térmico del cuerpo negro. Seguidamente, se analiza cómo Einstein extrapolita el concepto heurístico de osciladores cuantizados hacia la propuesta fundamental del cuanto de radiación (fotón), proveyendo el sustrato teórico del efecto fotoeléctrico. El trabajo concluye con aplicaciones prácticas de la teoría, mediante la resolución analítica de emisión de fotoelectrones para sustratos de plata y calcio.

**Palabras clave:** Cuantización, Max Planck, Albert Einstein, Efecto Fotoeléctrico, Fotón, Función de Trabajo.

---

## 1. Introducción

El amanecer del siglo XX delineó un período de crisis para la física clásica. Si bien el compendio newtoniano y la termodinámica de Maxwell ostentaban éxito analizando fenómenos macroscópicos, su extensión hacia el dominio térmico subatómico exponía divergencias insalvables. El propósito de este trabajo es detallar la evolución del postulado de cuantización como respuesta a estos fallos, conectando matemáticamente la hipótesis estadística introducida por Max Planck en 1900 para el cuerpo negro, con la demostración mecanicista expuesta por Albert Einstein en 1905 para el efecto fotoeléctrico.

---

## 2. Contexto Histórico (1900-1905)

A finales de la década de 1890, los físicos se enfrentaron a un obstáculo teórico: predecir el espectro del "cuerpo negro", un absorbente y emisor ideal de radiación en equilibrio térmico. Lord Rayleigh y James Jeans utilizaron el electromagnetismo y la termodinámica para modelar el problema, descubriendo que predecían energía infinita a altas frecuencias.

En 1900, Max Planck dedujo empíricamente una fórmula que ajustaba con perfección los datos experimentales y procedió a justificarla modelando las paredes emitiendo y absorbiendo energía discretamente. En 1905, un joven Albert Einstein, en su "año milagroso", fue un paso más allá, afirmando que no solo el intercambio era discreto, sino que la misma radiación electromagnética estaba constituida por paquetes indivisibles de energía. 

---

## 3. Desarrollo Físico-Matemático

### 3.1. Hipótesis de Planck y Derivación Completa

Para un volumen modelado como osciladores atómicos, Planck exigió que la energía adoptase valores discretos:
$$E_n = nhf,\qquad n = 0, 1, 2, \ldots$$

Bajo estadística de Boltzmann, la probabilidad de un estado es proporcional a $e^{-E_n/k_BT}$. Definiendo $x = e^{-hf/k_BT}$, la energía media térmica del conjunto resulta:
$$\langle E\rangle = \frac{\sum_{n=0}^{\infty} nhf\cdot x^n}{\sum_{n=0}^{\infty} x^n}$$

Aplicando las propiedades de las series geométricas, $\sum x^n = (1-x)^{-1}$ y $\sum nx^n = x(1-x)^{-2}$, se tiene:
$$\langle E\rangle = \frac{hf \cdot \frac{x}{(1-x)^2}}{\frac{1}{1-x}} = \frac{hf\,x}{1-x}$$

Regresando a las variables originales:
$$\langle E\rangle = \frac{hf}{e^{hf/k_BT}-1}$$

Multiplicando esta energía por la densidad clásica de estados $g(f) = \frac{8\pi f^2}{c^3}$, deducida del conteo geométrico en el primer octante del espacio $k$, se obtiene la densidad de Planck:
$$W(f,T) = \frac{8\pi hf^3}{c^3}\cdot\frac{1}{e^{hf/k_BT}-1}$$
Esta forma evade la Catástrofe Ultravioleta, debido a que el decaimiento exponencial del denominador supera al cubo del numerador a medida que $f \to \infty$.

### 3.2. Hipótesis del Fotón de Einstein

Einstein formuló la idea de que la luz viaja por el espacio como cuantos localizados (fotones). Cada fotón posee una energía dada por:
$$E = hf$$
donde la constante $h$ asume su rol como operador vinculante entre las propiedades cinemáticas de una partícula (energía) y la propiedad oscilatoria (frecuencia).

### 3.3. El Efecto Fotoeléctrico

Clásicamente, la intensidad lumínica determina la energía otorgada a los electrones, requiriendo en metales un tiempo de acumulación. Experimentalmente, se advirtió que la emisión resultaba inmediata, existía una frecuencia mínima de encendido y que el incremento de intensidad solo aumentaba el volumen de electrones expulsados. 

Einstein lo explicó como una colisión elástica $1 \to 1$ fotón-electrón:
$$K_{max} = hf - \phi, \qquad \phi = hf_0$$
donde $\phi$ es la función de trabajo (energía de retención atómica) y $K_{max}$ es la energía cinética máxima. Esto se verifica aplicando un voltaje de frenado retardador:
$$eV_s = K_{max} \implies V_s = \frac{h}{e}f - \frac{\phi}{e}$$

#### Ejemplos Numéricos Resueltos

**Ejemplo A: Efecto sobre Plata (Ag)**
- Incidencia luminosa: $\lambda = 300$ nm
- Función de trabajo: $\phi_{Ag} = 4.73$ eV

Calculamos la longitud de onda de corte máxima $\lambda_0$:
$$\lambda_0 = \frac{hc}{\phi} = \frac{(6.626\times10^{-34}\ \text{J·s})(3\times10^8\ \text{m/s})}{(4.73\ \text{eV})(1.6\times10^{-19}\ \text{J/eV})} \approx 262\ \text{nm}$$
Dado que $300\ \text{nm} > 262\ \text{nm}$, la frecuencia es menor a la frecuencia umbral. **No ocurre emisión fotoeléctrica**.

**Ejemplo B: Efecto sobre Calcio (Ca)**
- Incidencia luminosa: $\lambda = 430$ nm
- Función de trabajo: $\phi_{Ca} = 2.75$ eV

Energía del fotón incidente:
$$E_{foton} = \frac{hc}{\lambda} = \frac{(6.626\times10^{-34})(3\times10^8)}{430\times10^{-9}\ \text{m}} \approx 4.62\times10^{-19}\ \text{J} \approx 2.89\ \text{eV}$$

Energía cinética del fotoelectrón emitido:
$$K_{max} = E_{foton} - \phi = 2.89\ \text{eV} - 2.75\ \text{eV} = 0.14\ \text{eV}$$
Por tanto, el voltaje de frenado necesario para detener este flujo es $V_s \approx 0.14\ \text{V}$.

---

## 4. Conclusión y Líneas Abiertas

El desarrollo de la constante de Planck transitó de ser un simple artificio estadístico de un resonador confinado (1900) a materializarse en el componente intrínseco del campo electromagnético (1905). Esta reestructuración de la energía, validada numéricamente por el efecto fotoeléctrico, precipitó el surgimiento del modelo de Bohr y más adelante de la mecánica cuántica ondulatoria, al exponer que todo elemento físico posee, en el límite asintótico de su reducción espacial, características invariablemente granulares. Las líneas experimentales subsiguientes perfilaron las bases para la espectroscopía moderna y el desarrollo de tecnologías fotoemisoras.

---

## 5. Preguntas Originales de Discusión

1. Si la intensidad de luz clásica se redefine como el número de fotones por segundo, ¿existe un límite inferior de intensidad para que se considere que hay un campo electromagnético macroscópico continuo definido?
2. Si un fotón pierde energía al ascender en un campo gravitatorio, ¿cómo afectaría este corrimiento al rojo gravitacional al experimento fotoeléctrico si fuente y metal receptor estuvieran a distintas altitudes?
3. ¿Por qué la función de trabajo $\phi$ es un valor estadísticamente promedio para un metal sólido en lugar de ser un valor discreto absoluto de los electrones individuales de valencia?
4. El postulado asume la absorción completa del fotón por un solo electrón en un tiempo "instantáneo". Considerando las limitaciones temporales del principio de incertidumbre ($\Delta E \Delta t \ge \hbar/2$), ¿cuánto es este tiempo mínimo de interacción real?
5. ¿Es posible obtener un "efecto fotoeléctrico inverso" (o síntesis de Bremsstrahlung microscópico) donde bombardeo de electrones de energía $\Delta E$ exacta libere fotones de la misma precisión en la banda visible sin excitar fonones en el material?

---

## Referencias

1. Planck, M. (1900). Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum. *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237-245.
2. Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. *Annalen der Physik*, 322(6), 132-148.
3. Millikan, R. A. (1916). A Direct Photoelectric Determination of Planck's "h". *Physical Review*, 7(3), 355-388.
4. Kragh, H. (1999). *Quantum Generations: A History of Physics in the Twentieth Century*. Princeton University Press.
5. Tipler, P. A., & Llewellyn, R. A. (2012). *Modern Physics* (6th ed.). W. H. Freeman.
