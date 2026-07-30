# Guión del Video — Evaluación 1: El Cuerpo Negro y la Revolución de Planck

---

## Metadata

| Campo | Detalle |
|---|---|
| **Duración** | 4:40 (máximo estricto: 5:00) |
| **Formato** | Exposición oral con diapositivas de apoyo |
| **Tópicos obligatorios** | 3 + conclusión |
| **Enfoque transversal** | Analogías en Geomática y Teledetección |
| **Archivo de diapositivas** | `Evaluacion_1_Presentacion.pptx` |
| **App interactiva de apoyo** | `Evaluacion_1_App.html` |

---

## Introducción (0:00 – 0:20) — Slide 1

**Indicación de cámara:** Encuadre medio, fondo limpio. Contacto visual directo.

> "A finales del siglo XIX, la física clásica parecía completa. Las ecuaciones de Maxwell explicaban la luz, la termodinámica de Boltzmann explicaba el calor, y la mecánica de Newton explicaba el movimiento. Sin embargo, un problema aparentemente simple —¿cómo emite luz un objeto caliente?— reveló una contradicción tan grave que destruyó los fundamentos de esa física. Hoy vamos a ver ese problema, por qué la solución clásica fue catastrófica, y cómo Max Planck propuso en 1900 una idea que nadie esperaba: que la energía no puede tomar cualquier valor."

*(Transición a Slide 2)*

---

## Tópico 1 — El Cuerpo Negro (0:20 – 1:20) — Slide 2

**Indicación visual:** Mostrar diagrama de cavidad con apertura pequeña. Luego gráfica de espectro del cuerpo negro desde la App.

> "Un cuerpo negro es un objeto idealizado que absorbe el cien por ciento de la radiación que incide sobre él —no refleja nada, no transmite nada— y emite radiación electromagnética únicamente en función de su temperatura. Es el emisor y absorbedor perfecto."

> "Este concepto no es solo teórico. Si calentamos una pieza de hierro a unos 600 grados Celsius, comienza a brillar en rojo. Si pudiéramos calentarla a la temperatura de la superficie del Sol —5778 kelvin— emitiría su máximo en el rango visible, en el amarillo-verde."

**Señalar la fórmula en pantalla →**

> "Dos leyes clásicas describen muy bien este comportamiento. Primero, la ley de desplazamiento de Wien:"

$$\lambda_{\max} \cdot T = 2.898 \times 10^{-3} \;\text{m·K}$$

> "Esta ley nos dice que al aumentar la temperatura, el pico de emisión se desplaza hacia longitudes de onda más cortas. Segundo, la ley de Stefan-Boltzmann:"

$$R = \sigma T^4$$

> "que nos asegura que la energía total emitida es finita y crece con la cuarta potencia de la temperatura. Hasta aquí, todo consistente."

**Señalar la gráfica de la App →**

> "Ahora piensen en esto desde la teledetección. Imaginen un sensor multiespectral —un Landsat o un Sentinel-2— midiendo la radiancia de una superficie. La teoría clásica diría que cada banda espectral contribuye con la misma cantidad de energía al total, y como hay infinitas bandas posibles hacia el ultravioleta, la energía total sería infinita. Pero cualquier sensor real les muestra exactamente lo contrario: la señal cae en el ultravioleta. Esa discrepancia entre teoría clásica y realidad es precisamente el problema que vamos a ver ahora."

**[Mostrar gráfica de espectro del cuerpo negro de la App]**

*(Transición a Slide 3)*

---

## Tópico 2 — La Catástrofe Ultravioleta (1:20 – 2:35) — Slide 3

**Indicación visual:** Mostrar la animación de catástrofe UV en la App. Superponer curva de Rayleigh-Jeans vs. datos experimentales.

> "¿De dónde viene el desastre? Vamos paso a paso."

> "Primero, contamos los modos de oscilación dentro de una cavidad. El número de modos electromagnéticos en un rango de frecuencias $d\nu$ es:"

$$dN = \frac{8\pi\nu^2 L^3}{c^3}\,d\nu$$

> "Noten algo clave: este conteo crece como $\nu^2$. Es decir, a frecuencias altas —hacia el ultravioleta— hay cada vez más modos disponibles."

> "Segundo, la física clásica aplica el teorema de equipartición de la energía. Este teorema dice que cada modo, sin importar su frecuencia, recibe la misma energía promedio:"

$$\bar{E} = k_B T$$

> "Tercero, combinamos ambos resultados y obtenemos la fórmula de Rayleigh-Jeans para la densidad de energía espectral:"

$$u(\nu,T) = \frac{8\pi\nu^2}{c^3}\,k_B T$$

**Señalar la gráfica donde la curva diverge →**

> "Y aquí está la catástrofe: como $\nu^2$ crece sin límite, esta función se dispara hacia el infinito en el ultravioleta. La energía total sería infinita. Esto es físicamente absurdo."

> "Y quiero enfatizar algo: esto NO fue un error de cálculo. Es una consecuencia inevitable de dos pilares de la física clásica: la termodinámica de Boltzmann, que asigna energía continua a cada modo, y el electromagnetismo de Maxwell, que permite infinitos modos a frecuencias altas. Ambas teorías eran correctas por separado, pero juntas producían un resultado imposible."

> "En 1911, Paul Ehrenfest bautizó este fracaso como la 'catástrofe ultravioleta'. No era una anomalía menor — era una crisis fundamental."

**[Mostrar animación de catástrofe en la App]**

*(Transición a Slide 4)*

---

## Tópico 3 — La Solución de Planck (2:35 – 4:05) — Slide 4

**Indicación visual:** Mostrar diagrama de niveles de energía cuantizados. Luego superponer curva de Planck ajustando perfectamente los datos experimentales.

> "En diciembre de 1900, Max Planck presentó una solución radical. Su hipótesis fue esta: la energía de un oscilador electromagnético de frecuencia $\nu$ no puede tomar cualquier valor. Solo puede ser un múltiplo entero de un cuanto mínimo:"

$$E_n = n h \nu, \qquad n = 0, 1, 2, \ldots$$

> "donde $h$ es una constante nueva, hoy llamada la constante de Planck:"

$$h = 6.626 \times 10^{-34} \;\text{J·s}$$

> "Con esta restricción, la energía promedio de cada oscilador ya no es $k_B T$ para todos. Ahora depende de la frecuencia:"

$$\bar{E} = \frac{h\nu}{e^{h\nu / k_B T} - 1}$$

> "¿Por qué esto resuelve el problema? Analicemos dos casos."

**Señalar el caso de baja frecuencia →**

> "Cuando $h\nu$ es mucho menor que $k_B T$ —frecuencias bajas, como el infrarrojo— el cuanto es pequeño comparado con la energía térmica disponible. En este límite, $\bar{E}$ se aproxima a $k_B T$, y recuperamos el resultado clásico. La física clásica funciona bien aquí."

**Señalar el caso de alta frecuencia →**

> "Pero cuando $h\nu$ es mucho mayor que $k_B T$ —frecuencias altas, el ultravioleta— el cuanto mínimo $h\nu$ excede la energía térmica $k_B T$ disponible. Es como un 'precio de entrada mínimo' que la temperatura no puede pagar. En este límite, $\bar{E}$ tiende a cero. Los modos ultravioletas quedan 'congelados': existen, pero no se activan."

> "Y la ley de distribución completa de Planck es:"

$$u(\nu,T) = \frac{8\pi h\nu^3}{c^3} \cdot \frac{1}{e^{h\nu / k_B T} - 1}$$

> "Esta fórmula ajusta perfectamente los datos experimentales en todo el espectro."

**Señalar niveles cuantizados en la App →**

> "Para entender esto con una analogía de teledetección, piensen en la resolución radiométrica de un sensor digital. En un sensor de 8 bits, el número digital —o DN— solo puede ser 0, 1, 2, hasta 255. No existe el DN 127.5; solo existe 127 o 128. Si el cambio de radiancia entre dos píxeles es menor que un bit, el sensor simplemente no lo registra."

> "Planck hizo algo equivalente con la energía: si la temperatura no alcanza para suministrar el cuanto mínimo $h\nu$ de un oscilador de alta frecuencia, ese oscilador simplemente no se activa. La energía está cuantizada, y hay un umbral mínimo que no se puede franquear."

**[Mostrar niveles de energía cuantizados en la App]**

*(Transición a Slide 5)*

---

## Conclusión (4:05 – 4:40) — Slide 5

**Indicación visual:** Mostrar línea de tiempo en pantalla.

> "Pongamos esto en perspectiva histórica."

| Año | Hito |
|---|---|
| 1879 | Stefan: $R \propto T^4$ (experimental) |
| 1893 | Wien: ley de desplazamiento |
| 1900 | Planck: $E = nh\nu$ |
| 1900–05 | Rayleigh-Jeans: catástrofe UV |
| 1905 | Einstein: efecto fotoeléctrico |
| 1913 | Bohr: modelo atómico cuantizado |
| 1926 | Schrödinger: mecánica ondulatoria |

> "El impacto tecnológico de esta revolución es enorme: los semiconductores, los láseres, y los sensores CCD y CMOS que capturan las imágenes en nuestros satélites — todo descansa sobre la física cuántica que comenzó aquí."

> "Planck no buscaba revolucionar la física: él mismo describió su hipótesis como 'un acto de desesperación'. Sin embargo, al postular que la energía se intercambia en paquetes discretos $E = nh\nu$, abrió la puerta a un cambio de paradigma que hoy sustenta desde los semiconductores hasta los láseres y la resonancia magnética. La catástrofe ultravioleta no fue una falla menor — fue la grieta por donde entró toda la física cuántica."

> "Gracias por su atención."

---

## Notas de Producción

### Consejos de Entrega

- **No leer literalmente.** Este guión es para ensayar. Durante la grabación, usa palabras clave en las diapositivas y habla de forma natural.
- **Ensaya con cronómetro.** Cada tópico tiene un tiempo asignado; si un tópico se extiende, comprime la explicación sin eliminar los puntos clave.
- **Contacto visual.** Mira a la cámara (o al público) el 70% del tiempo. Solo gira hacia la pantalla cuando señales una fórmula o gráfica.
- **Ritmo.** Haz pausas breves (1–2 segundos) después de cada fórmula importante para dar tiempo de procesamiento al espectador.
- **Voz.** Varía el tono: más enfático en las frases clave ("esto NO fue un error de cálculo", "un acto de desesperación"), más pausado en las fórmulas.

### Indicaciones Visuales por Slide

| Slide | Tiempo | Qué mostrar en pantalla |
|---|---|---|
| **1 — Intro** | 0:00 – 0:20 | Título del video, nombre del estudiante, fecha. Imagen de fondo: espectro electromagnético o cavidad de cuerpo negro. |
| **2 — Cuerpo Negro** | 0:20 – 1:20 | Diagrama de cavidad. Fórmulas de Wien y Stefan-Boltzmann. Gráfica de espectro a distintas temperaturas (desde la App `Evaluacion_1_App.html`). |
| **3 — Catástrofe UV** | 1:20 – 2:35 | Fórmula de conteo de modos. Fórmula de Rayleigh-Jeans. Gráfica comparativa: curva RJ divergente vs. datos experimentales (animación de la App). |
| **4 — Planck** | 2:35 – 4:05 | Fórmula $E_n = nh\nu$. Diagrama de niveles cuantizados (escalera de energía). Fórmula completa de Planck. Gráfica final con ajuste perfecto. Diagrama DN sensor 8-bit (analogía). |
| **5 — Conclusión** | 4:05 – 4:40 | Línea de tiempo (1879–1926). Lista de tecnologías derivadas. Cita final de Planck en pantalla. |

### Recursos de Apoyo

- **Presentación de diapositivas:** `Evaluacion_1_Presentacion.pptx` — contiene las 5 slides con las fórmulas, gráficas y diagramas listos.
- **App interactiva:** `Evaluacion_1_App.html` — úsala para mostrar en vivo:
  - La gráfica del espectro del cuerpo negro a distintas temperaturas (Slide 2).
  - La animación de la catástrofe ultravioleta: Rayleigh-Jeans vs. datos (Slide 3).
  - Los niveles de energía cuantizados como escalera discreta (Slide 4).

### Checklist de Puntos Clave para Máxima Calificación

> [!IMPORTANT]
> Según la rúbrica de evaluación, **todos** los siguientes puntos deben mencionarse explícitamente en el video.

#### Tópico 1 — Cuerpo Negro
- [ ] Definición: absorbe 100% de la radiación incidente
- [ ] Emite solo en función de la temperatura $T$
- [ ] Ley de Wien: $\lambda_{\max} \cdot T = 2.898 \times 10^{-3}$ m·K
- [ ] Ley de Stefan-Boltzmann: $R = \sigma T^4$
- [ ] Ejemplo concreto (hierro rojo / Sol)
- [ ] Analogía con sensor multiespectral (Landsat / Sentinel-2)

#### Tópico 2 — Catástrofe Ultravioleta
- [ ] Conteo de modos: crece como $\nu^2$
- [ ] Equipartición: $\bar{E} = k_B T$ por modo
- [ ] Fórmula de Rayleigh-Jeans y su divergencia
- [ ] Explicar que NO es error de cálculo sino consecuencia inevitable
- [ ] Mención de Ehrenfest (1911) y el nombre "catástrofe ultravioleta"
- [ ] Identificar la crisis: Boltzmann + Maxwell → resultado absurdo

#### Tópico 3 — Solución de Planck
- [ ] Hipótesis de cuantización: $E_n = nh\nu$
- [ ] Valor de $h = 6.626 \times 10^{-34}$ J·s
- [ ] Energía promedio: $\bar{E} = \frac{h\nu}{e^{h\nu/k_BT}-1}$
- [ ] Límite clásico: $h\nu \ll k_BT \Rightarrow \bar{E} \approx k_BT$
- [ ] Límite UV: $h\nu \gg k_BT \Rightarrow \bar{E} \to 0$ (modos congelados)
- [ ] Argumento del "precio de entrada mínimo"
- [ ] Ley completa de Planck: $u(\nu,T)$
- [ ] Analogía con resolución radiométrica (DN en sensor de 8 bits)

#### Conclusión
- [ ] Línea de tiempo: Stefan → Wien → Rayleigh-Jeans → Planck → Einstein → Bohr → Schrödinger
- [ ] Impacto tecnológico: semiconductores, láseres, sensores CCD/CMOS
- [ ] Cita de Planck: "un acto de desesperación"
- [ ] Frase de cierre sobre la catástrofe como puerta a la física cuántica
