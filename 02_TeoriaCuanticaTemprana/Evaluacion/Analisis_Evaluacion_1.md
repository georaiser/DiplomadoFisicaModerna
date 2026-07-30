# Análisis de la Evaluación 1 — Teoría Cuántica Temprana

**Fuentes integradas:** Clase 01 (Solano, 3 jul) · Clase 02 (Manidurai, 10 jul, diapositivas + PDF desarrollo) · Clase 03 (Manidurai, 17 jul, diapositivas + PDF desarrollo)  
**Última actualización:** 30 jul 2026  
**Archivos complementarios:** Guion_Video_Evaluacion_1.md · Evaluacion_1_App.html · Evaluacion_1_Presentacion.pptx

---

## Descripción de la Tarea

**Formato:** Video de máximo 5 minutos, rol de divulgador o docente.  
**Entrega:** Teams / YouTube / Google Drive / OneDrive.

### Tres tópicos obligatorios

| # | Tópico | Exigencia mínima |
|---|---|---|
| 1 | **Radiación del Cuerpo Negro** | Qué es, qué buscaba explicar, discrepancia experimento vs. teoría clásica |
| 2 | **Catástrofe del Ultravioleta** | Cómo Rayleigh-Jeans predice emisión infinita y por qué es una crisis |
| 3 | **Solución de Planck** | Cómo $E = nhf$ resuelve la catástrofe, impacto en la mecánica cuántica |

---

## Rúbrica Completa

| Criterio | Excelente (4 pts) | Competente (3 pts) | En Desarrollo (2 pts) | Insatisfactorio (1 pt) |
|---|---|---|---|---|
| **Dominio de Contenido y Rigor Científico** *(RA 2)* | Explica los 3 fenómenos con total precisión, sin errores, con lenguaje físico fluido | Buena claridad pero alguna imprecisión menor que no altera la validez general | Omite un concepto clave o comete errores importantes que revelan comprensión fragmentada | Confusión grave; la explicación de catástrofe o cuantización es errónea o es solo lectura de definiciones |
| **Contextualización Histórica y Epistemológica** *(RA 1)* | Sitúa el problema como crisis del paradigma clásico; destaca la naturaleza colaborativa de la ciencia y su impacto histórico | Sitúa históricamente como falla de la física clásica, pero la mención colaborativa/histórica es superficial | Menciona datos históricos de forma anecdótica, sin explicar por qué representó una crisis | Sin contextualización; trata los conceptos como fórmulas abstractas desconectadas de la crisis |
| **Síntesis y Estructura** *(Habilidad Transversal)* | Articula los 3 hitos de forma fluida, lógica y conectada; discurso con introducción, desarrollo y conclusión claros | Lógico pero con transiciones abruptas; cumple el tiempo pero se nota apresurado al cierre | Sin estructura clara; se extiende en un punto y deja otro sin tiempo, o excede el límite | Desorganizado, repetitivo o incompleto; tiempo drásticamente fuera del rango |
| **Recursos Didácticos y Explicación Propia** *(Instruccional)* | Explica en sus propias palabras con analogías o ejemplos efectivos; el soporte visual facilita la comprensión | Principalmente en propias palabras pero con lecturas directas ocasionales; visual correcto pero decorativo | Depende excesivamente de leer diapositivas; explicación rígida y mecánica | Solo lee texto de pantalla/hoja; sin transposición didáctica ni uso efectivo de apoyos |

**Puntaje máximo: 16 pts**

---

## Análisis Estratégico: Lo que el Evaluador Busca

### Criterio 1 — Dominio de Contenido (el más importante)

Para obtener **Excelente (4 pts)** se necesita:
- Usar el término "cuerpo negro" con definición correcta (no "cuerpo caliente").
- Mencionar que la ley de Rayleigh-Jeans **diverge** (no "falla un poco") a alta frecuencia.
- Explicar *por qué* diverge: el número de modos de oscilación crece como $f^2$, y la física clásica asigna la misma energía $k_BT$ a cada uno.
- Decir explícitamente que Planck cuantizó la energía: los osciladores solo pueden tener energías $E_n = nhf$.
- Explicar *por qué* la cuantización elimina la catástrofe: a alta frecuencia el cuanto $hf$ es mayor que la energía térmica $k_BT$ disponible, y los modos de alta frecuencia no pueden ser excitados.
- Conectar la constante $h$ con el ajuste del espectro experimental.

**Error frecuente que baja a 2 pts:** decir que Planck "descubrió la fórmula" sin explicar la hipótesis cuántica ni el mecanismo físico que elimina la catástrofe.

### Criterio 2 — Contextualización Histórica

Para obtener **Excelente (4 pts)** se necesita:
- Mencionar el año (~1900) y que Rayleigh-Jeans era la mejor teoría disponible en ese momento.
- Decir que el problema era una **crisis del paradigma**: la termodinámica de Boltzmann y el electromagnetismo de Maxwell, tomados juntos, predecían algo físicamente absurdo.
- Mencionar que Planck tomó el resultado como un "recurso matemático" y que solo después se reconoció su profundidad física (Einstein, 1905: el fotón).
- Señalar la cadena colaborativa: Stefan (1879) → Wien (1893, 1896) → Rayleigh-Jeans (1900) → Planck (1900) → Einstein (1905).

### Criterio 3 — Síntesis y Estructura

**Distribución recomendada de tiempo:**

| Sección | Tiempo |
|---|---|
| Introducción | 20 s |
| Cuerpo negro | 60 s |
| Catástrofe UV | 75 s |
| Solución de Planck | 90 s |
| Conclusión | 35 s |
| **Total** | **280 s ≈ 4 min 40 s** |

### Criterio 4 — Recursos Didácticos

Para obtener **Excelente (4 pts)** se necesita:
- Al menos **una analogía original** vinculada a teledetección (ver guión).
- El soporte visual debe estar en pantalla cuando se explica el concepto (no solo decorativo).
- No leer párrafos; el texto de las láminas debe ser mínimo (palabras clave, no oraciones).
- La app interactiva Evaluacion_1_App.html puede usarse como apoyo visual durante la grabación.
- La app incluye MathJax para renderizar fórmulas LaTeX en tiempo real.

---

## Fundamento Científico Completo (Integración Clases 01–03)

Esta sección es el respaldo conceptual para poder explicar con rigor. No es para leer; es para internalizar.

### A. El Cuerpo Negro: por qué la curva tiene forma de campana

*(Clases 01 y 02)*

La curva espectral de un cuerpo negro tiene forma de campana porque dos efectos compiten:
- A baja frecuencia: hay pocos modos de oscilación posibles → poca energía emitida.
- A alta frecuencia: hay muchos modos disponibles, pero la energía para excitarlos es grande → la emisión cae.

El resultado clásico (Rayleigh-Jeans) solo captura el primer efecto; el clásico no tiene mecanismo para el segundo. Planck introduce ese mecanismo.

La ley de Stefan-Boltzmann integra todo el espectro: $R = \sigma T^4$. Que el total sea finito y medible (no infinito) ya era una evidencia experimental de que la teoría clásica fallaba.

### B. Por qué Rayleigh-Jeans diverge: el conteo de modos

*(Clases 02 y 03 — derivación del PDF "Desarrollo de los leyes")*

En una cavidad de arista $L$, los modos de oscilación permitidos cumplen:

$$m_x^2 + m_y^2 + m_z^2 = \frac{4L^2\nu^2}{c^2}$$

El número de modos entre $\nu$ y $\nu + d\nu$ (primer octante, dos polarizaciones):

$$dN = \frac{8\pi\nu^2 L^3}{c^3}\,d\nu$$

El teorema de equipartición clásico asigna energía media $\bar{E} = k_BT$ a cada modo, dando:

$$u(\nu, T) = \frac{8\pi\nu^2}{c^3}\,k_BT \quad \xrightarrow{\nu\to\infty} \infty$$

El número de modos crece como $\nu^2$ sin límite. Con energía constante por modo, la energía total diverge. Eso es la catástrofe ultravioleta.

**Punto clave para el video:** no es un error algebraico — es una consecuencia inevitable de asignar energía continua a infinitos modos.

### C. Por qué la cuantización de Planck resuelve el problema

*(Clases 01 y 03 — derivación paso a paso del PDF)*

Planck postula que los osciladores solo pueden tener energías $E_n = nh\nu$ ($n = 0,1,2,\ldots$). La distribución de Boltzmann da:

$$N_r = N_0\,e^{-rh\nu/k_BT}$$

Sumando la serie geométrica, la energía media del oscilador resulta:

$$\bar{E}_\nu = \frac{h\nu}{e^{h\nu/k_BT} - 1}$$

- Cuando $h\nu \ll k_BT$ (baja frecuencia): $\bar{E}_\nu \approx k_BT$ → recupera Rayleigh-Jeans ✓  
- Cuando $h\nu \gg k_BT$ (alta frecuencia): $\bar{E}_\nu \approx h\nu\,e^{-h\nu/k_BT} \to 0$ → suprime la catástrofe ✓

La ley de Planck completa:

$$\boxed{u(\nu,T) = \frac{8\pi h\nu^3}{c^3}\cdot\frac{1}{e^{h\nu/k_BT}-1}}$$

**Argumento para el video:** a alta frecuencia, el "precio de entrada" mínimo ($h\nu$) supera la energía térmica disponible ($k_BT$). Los modos de alta frecuencia quedan "congelados" porque el sistema no tiene suficiente energía para comprar ni siquiera el cuanto más pequeño.

### D. Analogías en Teledetección (para el video)

#### Analogía 1 — Sensor Multiespectral (Sección Cuerpo Negro)
Un sensor multiespectral (Landsat / Sentinel-2) mide la radiancia espectral de la superficie terrestre. Si la teoría clásica fuera correcta, cada banda espectral hacia el UV sumaría energía infinita al total. Sin embargo, cualquier radiómetro real muestra que la señal decae en el UV — exactamente como predice Planck.

#### Analogía 2 — Digitalización Radiométrica (Sección Planck)
En un sensor de 8 bits, no existe el DN (Digital Number) 127.5 — solo 127 o 128. Si el cambio de radiancia en la escena es menor que un bit, el sensor no lo registra. Planck aplicó exactamente esta discretización a la energía: si la temperatura del sistema no alcanza para suministrar el cuanto mínimo $h\nu$ de un oscilador de alta frecuencia, ese oscilador simplemente no se activa. El resultado es que la emisión a frecuencias muy altas cae a cero de forma natural.

#### Impacto Tecnológico Moderno
La cuantización de la energía sustenta el desarrollo de:
- **Semiconductores** — la banda prohibida es un efecto directo de la cuantización
- **Sensores CMOS/CCD** — cámaras satelitales (Sentinel, Landsat) detectan fotones individuales
- **Láseres y espectrometría** — LiDAR, Raman, fluorescencia dependen de la emisión cuántica

---

## Guión Propuesto (versión actualizada con Clases 01–03)

### Introducción (0:00 – 0:20)
> "A finales del siglo XIX, la física clásica parecía completa. Sin embargo, un problema aparentemente simple —¿cómo emite luz un objeto caliente?— reveló una contradicción tan grave que destruyó los fundamentos de esa física. Hoy vamos a ver ese problema, por qué la solución clásica fue catastrófica, y cómo Max Planck propuso en 1900 una idea que nadie esperaba: que la energía no puede tomar cualquier valor."

---

### Tópico 1 — Cuerpo Negro (0:20 – 1:20)

**Definición:**
> "Un cuerpo negro ideal es un objeto que absorbe el 100% de la radiación que recibe y la re-emite de forma pura, dependiendo solo de su temperatura. La mejor aproximación experimental es una cavidad cerrada con un pequeño orificio: cualquier luz que entre rebota dentro y queda atrapada."

**El fenómeno medido:**
> "Al calentar el cuerpo, la curva de emisión tiene forma de campana con un máximo que se desplaza hacia frecuencias más altas al aumentar la temperatura —un hierro a 600 °C brilla rojo; el Sol, a 5800 K, emite principalmente en el visible. Josef Stefan midió en 1879 que la potencia total emitida sigue $R = \sigma T^4$: una energía finita y perfectamente medible. Ese era el desafío: la curva experimental era precisa, hermosa... y completamente inexplicable con la física de la época."

**Analogía (teledetección):**
> "Imagina un sensor multiespectral —un Landsat o un Sentinel-2— midiendo la radiancia de una superficie. La teoría clásica diría que cada banda espectral contribuye con la misma cantidad de energía al total, y como hay infinitas bandas posibles hacia el ultravioleta, la energía total sería infinita. Pero cualquier sensor real te muestra exactamente lo contrario: la señal cae en el UV. La teoría clásica predecía algo que ningún radiómetro ha medido jamás."

---

### Tópico 2 — Catástrofe Ultravioleta (1:20 – 2:35)

**La causa física, no solo el resultado:**
> "Lord Rayleigh y James Jeans contaron cuántos modos de oscilación del campo electromagnético caben en una cavidad a cada frecuencia. El resultado es que ese número crece proporcionalmente a $f^2$: el doble de frecuencia, cuatro veces más modos. La termodinámica clásica —el teorema de equipartición— asigna la misma energía $k_BT$ a cada modo. Multiplicar infinitos modos por energía constante da energía infinita."

**El colapso:**
> "Esta fórmula —llamada ley de Rayleigh-Jeans— funciona bien en el infrarrojo, pero a alta frecuencia la energía predicha se dispara al infinito. Esto se llamó **catástrofe ultravioleta**, y Paul Ehrenfest acuñó ese nombre en 1911 porque era exactamente eso: una catástrofe para toda la física clásica."

**El problema conceptual:**
> "No era un error de cálculo. Era una consecuencia directa e inevitable de combinar la termodinámica de Boltzmann con el electromagnetismo de Maxwell. La teoría más avanzada de la época predecía que un horno ordinario debería emitir energía infinita en el ultravioleta. Y no tenía ninguna herramienta interna para resolverlo."

---

### Tópico 3 — Solución de Planck (2:35 – 4:05)

**La hipótesis:**
> "En diciembre de 1900, Max Planck propuso algo radicalmente nuevo: los osciladores de la cavidad no pueden absorber ni emitir energía de forma continua. Solo pueden hacerlo en cantidades discretas, múltiplos enteros de $hf$:"
>
> $$E_n = nhf, \qquad n = 0, 1, 2, 3, \ldots$$
>
> "Donde $h = 6.626\times10^{-34}$ J·s es la constante de Planck, ajustada para reproducir exactamente los datos experimentales."

**Por qué elimina la catástrofe — el mecanismo:**
> "Con esta cuantización, la energía media de un oscilador ya no es $k_BT$, sino $hf$ dividido por $e^{hf/k_BT}$ menos uno. A baja frecuencia, esto vale exactamente $k_BT$ —la física clásica se recupera, como debe ser. Pero a alta frecuencia, el cuanto mínimo de energía $hf$ supera la energía térmica disponible $k_BT$: el sistema simplemente no puede 'comprar' ni siquiera el cuanto más barato de ese modo. La emisión cae a cero de forma natural. La catástrofe desaparece."

**Analogía de la cuantización (teledetección):**
> "Es como la resolución radiométrica de un sensor digital: en un sensor de 8 bits, no existe el valor de píxel 127.5, solo 127 o 128. Si el cambio de radiancia en la escena es menor que un bit, el sensor no lo registra —no tiene resolución para detectarlo. Planck hizo lo mismo con la energía: si la temperatura del sistema no alcanza para suministrar el cuanto mínimo $hf$ de un oscilador de alta frecuencia, ese oscilador simplemente no se activa. El resultado es que la emisión a frecuencias muy altas cae a cero de forma natural."

**Impacto:**
> "La constante $h$ permitió reproducir exactamente el espectro experimental para toda frecuencia y temperatura. Pero la implicación era más profunda: si la energía es discreta, la naturaleza tiene una granularidad fundamental. Cinco años después, Einstein extendió esta idea para decir que la luz misma está compuesta de cuantos —los fotones—, y así nació la mecánica cuántica."

---

### Conclusión (4:05 – 4:40)
> "Planck no buscaba revolucionar la física: él mismo describió su hipótesis como 'un acto de desesperación'. Sin embargo, al postular que la energía se intercambia en paquetes discretos $E = nhf$, abrió la puerta a un cambio de paradigma que hoy sustenta desde los semiconductores hasta los láseres y la resonancia magnética. La catástrofe ultravioleta no fue una falla menor —fue la grieta por donde entró toda la física cuántica."

---

## Diseño de Diapositivas (5 láminas)

### Lámina 1 — Portada
- Título: "El Cuerpo Negro y la Cuantización de Planck"
- Subtítulo: "Cómo una crisis en la física clásica creó la mecánica cuántica"
- Imagen: espectro de cuerpo negro con curvas a 3000 K, 4500 K, 6000 K
- Nombre, fecha, institución

### Lámina 2 — Cuerpo Negro
- Esquema: cavidad con orificio (flechas de radiación entrante y absorbida)
- Curvas de emisión a 3 temperaturas, con flecha de desplazamiento del máximo
- Ecuaciones clave: $R = \sigma T^4$ y $\lambda_{max} T = 2.898\times10^{-3}$ m·K
- Recuadro: "Energía total = finita y medible"

### Lámina 3 — Catástrofe Ultravioleta
- Gráfica: curva experimental (campana) vs. Rayleigh-Jeans (divergente)
- Fórmula: $u(f,T) = \dfrac{8\pi f^2}{c^3}k_BT$
- Anotación: "Modos crecen como $f^2$ · Energía constante por modo = Divergencia"
- Zona marcada "Catástrofe UV" con flecha hacia la región de divergencia

### Lámina 4 — Solución de Planck
- Hipótesis: $E_n = nhf$ (destacada en color)
- Comparación en tabla:

| | Clásico (R-J) | Planck |
|---|---|---|
| Energía por modo | $k_BT$ | $\dfrac{hf}{e^{hf/k_BT}-1}$ |
| A alta frecuencia | $\to\infty$ | $\to 0$ |

- Gráfica: curva de Planck superpuesta sobre los datos experimentales

### Lámina 5 — Impacto y Línea de Tiempo
- Línea de tiempo:
  - 1879: Stefan — $R = \sigma T^4$
  - 1893: Wien — ley de desplazamiento
  - 1900: Rayleigh-Jeans — catástrofe UV
  - 1900: Planck — $E = nhf$, resolución cuántica
  - 1905: Einstein — fotón, efecto fotoeléctrico
  - 1913: Bohr — modelo atómico cuántico
  - 1926: Schrödinger — mecánica cuántica completa
- Frase de cierre: *"La catástrofe ultravioleta fue la grieta por donde entró toda la física cuántica."*

---

## Checklist de Preparación

### Contenido (Criterio 1 — 4 pts)
- [ ] Definición correcta de cuerpo negro (absorbe 100%, emite solo según $T$)
- [ ] Mención a Stefan-Boltzmann: la energía total es finita ($R = \sigma T^4$)
- [ ] Explicar que R-J diverge porque los modos crecen como $f^2$ con energía constante por modo
- [ ] La divergencia a alta frecuencia se menciona explícitamente como consecuencia inevitable
- [ ] Hipótesis de Planck: $E_n = nhf$ (enunciada literalmente)
- [ ] Mecanismo por el que la cuantización suprime la divergencia: "el cuanto $hf$ supera la energía térmica $k_BT$"

### Historia (Criterio 2 — 4 pts)
- [ ] Cadena histórica: Stefan → Wien → Rayleigh-Jeans → Planck → Einstein
- [ ] El problema como crisis del paradigma (termodinámica + Maxwell combinados)
- [ ] Planck como punto de partida de la mecánica cuántica
- [ ] Mención de la naturaleza colaborativa del descubrimiento

### Estructura (Criterio 3 — 4 pts)
- [ ] Introducción que anuncia los 3 tópicos (≤ 20 s)
- [ ] Los 3 tópicos en orden lógico con frases de transición
- [ ] Conclusión que conecta con el impacto histórico (≥ 30 s)
- [ ] Tiempo total: entre 4:00 y 5:00 minutos

### Recursos Didácticos (Criterio 4 — 4 pts)
- [ ] Analogía del sensor multiespectral (cuerpo negro)
- [ ] Analogía de la resolución radiométrica en bits (cuantización de Planck)
- [ ] El soporte visual está en pantalla durante la explicación del concepto correspondiente
- [ ] No se leen párrafos; las láminas tienen solo palabras clave
- [ ] Usar Evaluacion_1_App.html como demostración visual interactiva
- [ ] Mencionar el impacto tecnológico (semiconductores, CMOS/CCD, láseres)

---

## Errores Críticos a Evitar

| Error | Criterio afectado | Consecuencia |
|---|---|---|
| Decir que R-J "falla un poco" | Dominio (1) | Baja a 2 pts |
| No explicar *por qué* R-J diverge (solo citar el resultado) | Dominio (1) | Queda en 3 pts |
| No mencionar la hipótesis $E_n = nhf$ | Dominio (1) | Baja a 2 pts |
| No explicar el mecanismo de supresión a alta frecuencia | Dominio (1) | Queda en 3 pts |
| Tratar a Planck como "el descubridor de la cuántica" sin contexto | Historia (2) | Baja a 2 pts |
| Saltar directamente a la fórmula sin el problema experimental | Historia (2) | Baja a 3 pts |
| No hay transición entre cuerpo negro y catástrofe | Estructura (3) | Baja a 3 pts |
| Leer párrafos completos de las láminas | Recursos (4) | Baja a 2 pts |
| Exceder los 5 minutos | Estructura (3) | Baja automáticamente |
| No incluir analogía con teledetección | Recursos (4) | Queda en 3 pts |
