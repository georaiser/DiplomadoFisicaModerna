# Guión del Video — Evaluación 1: El Cuerpo Negro y la Revolución de Planck

---

## Metadata

| Campo | Detalle |
|---|---|
| **Duración** | 4:40 (máximo estricto: 5:00) |
| **Formato** | Exposición oral grabando pantalla con la App HTML |
| **Tópicos obligatorios** | 3 + conclusión |
| **Enfoque** | Física conceptual y demostración interactiva |
| **App interactiva (principal)** | `Evaluacion_1_App.html` — abrir en navegador, grabar pantalla |
| **Presentación (respaldo)** | `Evaluacion_1_Presentacion.pptx` |
| **Última actualización** | 02 ago 2026 |

---

## Introducción (0:00 – 0:20) — Sección Hero de la App

**Indicación de cámara:** Encuadre medio, fondo limpio. Contacto visual directo. La App debe estar abierta en el Hero (portada inicial, antes de hacer scroll).

> "A finales del siglo XIX, la física clásica parecía completa. Las ecuaciones de Maxwell (1865) explicaban la luz —como ondas oscilantes de campo eléctrico y magnético que se propagan incluso en el vacío—; la termodinámica estadística de Boltzmann (décadas de 1870-1880) explicaba el calor —como el movimiento promedio de billones de partículas microscópicas—; y la mecánica de Newton (1687) explicaba el movimiento de los cuerpos, desde una manzana cayendo hasta las órbitas de los planetas. Sin embargo, un problema aparentemente simple —¿cómo emite luz un objeto caliente?— reveló una contradicción tan grave que destruyó los fundamentos de esa física. Hoy vamos a ver ese problema, por qué la solución clásica fue catastrófica, y cómo Max Planck propuso en 1900 una idea que nadie esperaba: que la energía no puede tomar cualquier valor."

*(Click en "▶ Iniciar exploración" en la App → scroll a Sección 1)*

---

## Tópico 1 — El Cuerpo Negro (0:20 – 1:20) — Sección "Espectro del Cuerpo Negro"

**Indicación visual:** Mostrar la App en la sección "Espectro del Cuerpo Negro". Mover el slider de temperatura en vivo. **La gráfica usa escala absoluta referenciada al Sol (5 778 K).**

> "Un cuerpo negro es un objeto idealizado que absorbe el cien por ciento de la radiación que incide sobre él —no refleja nada, no transmite nada— y emite radiación electromagnética únicamente en función de su temperatura. Es el emisor y absorbedor perfecto."

> "Este concepto no es solo teórico. Si calentamos una pieza de hierro a unos 600 grados Celsius, comienza a brillar en rojo."

**Mover el slider de T a ~1500 K → mostrar curva baja y desplazada al IR.**

> "A 1500 kelvin, la curva es baja —la mayor parte de la emisión está en el infrarrojo— y la potencia total es una fracción muy pequeña de la solar. La escala vertical es absoluta: la altura de la curva refleja la intensidad real."

**Subir el slider lentamente a 5778 K → señalar que la curva CRECE en altura Y se desplaza hacia la izquierda.**

> "Observen dos cosas al mismo tiempo: el pico se desplaza hacia longitudes de onda más cortas —la Ley de Wien— y la curva crece enormemente en altura. A 5778 kelvin —la temperatura de la superficie del Sol— el pico está en 501 nanómetros, justo en el visible, y la potencia es de 63 megavatios por metro cuadrado."

$$\lambda_{\max} \cdot T = 2.898 \times 10^{-3} \;\text{m·K}$$

> "...y la potencia total irradiada según Stefan-Boltzmann..."

$$R = \sigma T^4$$

> "...que nos asegura que la energía total emitida es finita y crece con la cuarta potencia de la temperatura."

**Subir el slider a ~10 000 K → señalar la anotación "Pico: ×Sol" en la esquina superior del gráfico.**

> "Si seguimos subiendo la temperatura —digamos a una estrella tipo A, 10 000 kelvin— la curva casi llena la escala del gráfico, que está calibrada exactamente hasta ese punto. La anotación de la esquina muestra que el pico es ahora cerca de 15.5 veces el del Sol. El pico también se ha desplazado al ultravioleta —por eso las estrellas calientes son azul-blancas."

> [!TIP]
> **Detalle opcional (solo si sobra tiempo):** la card de la izquierda muestra que la *potencia total* a 10 000 K es "solo" ~9 veces la del Sol —un número distinto al ~15.5× del pico. La razón: el **pico** de la curva escala como \(T^5\) (ley de Wien), pero la **potencia total** —el área bajo toda la curva, Stefan-Boltzmann— escala como \(T^4\). La App lo aclara con una fórmula justo bajo el gráfico.

**Bajar de nuevo a 5778 K. Activar/desactivar los toggles de Rayleigh-Jeans y Wien. (Opcional: señalar brevemente las tres tarjetas debajo del gráfico que resumen cuándo es válida cada curva.)**

> "Noten cómo la curva naranja —Rayleigh-Jeans— coincide con Planck a longitudes de onda largas, pero diverge hacia la izquierda. Esa divergencia es precisamente el problema que vamos a ver ahora."

*(Scroll a Sección 2: Catástrofe UV)*


---

## Tópico 2 — La Catástrofe Ultravioleta (1:20 – 2:35) — Sección "La Catástrofe Ultravioleta"

**Indicación visual:** Mostrar la sección de catástrofe UV en la App. Usar los pasos interactivos (1–4) y la animación.

> "¿De dónde viene el desastre? Vamos paso a paso."

**Click en Paso 1 →**

> "Primero, contamos los modos de oscilación dentro de una cavidad. Piensen en la cavidad como una caja cerrada: solo ciertas ondas estacionarias —definidas por números enteros en cada dirección— encajan exactamente entre sus paredes, igual que una cuerda de guitarra solo vibra en ciertas notas permitidas. El número de esos modos electromagnéticos crece como nu al cuadrado:"

$$dN = \frac{8\pi\nu^2 L^3}{c^3}\,d\nu$$

> "A frecuencias altas —hacia el ultravioleta— hay cada vez más modos disponibles."

**Click en Paso 2 →**

> "Segundo, la física clásica aplica el teorema de equipartición: cada modo, sin importar su frecuencia, recibe la misma energía promedio:"

$$\bar{E} = k_B T$$

**Click en Paso 3 →**

> "Tercero, combinamos ambos y obtenemos la fórmula de Rayleigh-Jeans:"

$$u(\nu,T) = \frac{8\pi\nu^2}{c^3}\,k_B T$$

**Click en Paso 4 → luego botón "▶ Animar divergencia" →**

> "Y aquí está la catástrofe: como nu-cuadrado crece sin límite, esta función se dispara hacia el infinito. La energía total sería infinita."

> "Quiero enfatizar algo: esto NO fue un error de cálculo. Es una consecuencia inevitable de dos pilares de la física clásica: la termodinámica de Boltzmann, que asigna energía constante a cada modo, y el electromagnetismo de Maxwell, que permite infinitos modos. Ambas teorías correctas por separado, pero juntas producen un resultado imposible."

> "En 1911, Paul Ehrenfest bautizó este fracaso como la 'catástrofe ultravioleta'. No era una anomalía menor — era una crisis fundamental."

*(Scroll a Sección 3: La Solución de Planck)*

---

## ⭐ Tópico 3 — La Solución de Planck (2:35 – 4:05) — Sección "La Solución de Planck"

> [!IMPORTANT]
> **Esta es la sección más importante del video.** Dedicarle el mayor tiempo (1 min 30 s) y la mayor energía de exposición. Aquí está el núcleo de la evaluación.

**Indicación visual:** La App muestra el banner "⭐ Núcleo del Video", el diagrama comparativo Clásico vs. Cuántico, la tabla de 5 filas, y los niveles interactivos.

### Parte A — El Diagrama Comparativo (2:35 – 3:05)

**Señalar la imagen del diagrama Clásico vs. Cuántico →**

> "Antes de entrar en las fórmulas, veamos visualmente la diferencia fundamental entre el modelo clásico y la hipótesis de Planck."

> "A la izquierda, el modelo clásico: la energía del oscilador es continua, puede tomar cualquier valor. Es una rampa lisa, sin restricciones."

> "A la derecha, Planck: la energía solo puede estar en peldaños discretos. Cero, h-nu, dos-h-nu, tres-h-nu, y así sucesivamente. Las zonas entre peldaños son estados prohibidos — no existen."

**Señalar la tabla comparativa →**

> "Esta tabla resume la diferencia clave. En el modelo clásico, la energía media de cada oscilador es $k_B T$, constante para toda frecuencia — y por eso la integral diverge. En Planck, la energía media cae a cero cuando la frecuencia es alta, y la integral converge. Concordancia perfecta con el experimento."

### Parte B — La Hipótesis y las Fórmulas (3:05 – 3:35)

> "En diciembre de 1900, Max Planck presentó su solución radical. Su hipótesis: la energía de un oscilador de frecuencia nu no puede tomar cualquier valor. Solo puede ser un múltiplo entero de un cuanto mínimo:"

$$E_n = n h \nu, \qquad n = 0, 1, 2, \ldots$$

> "donde h es una constante nueva, la constante de Planck:"

$$h = 6.626 \times 10^{-34} \;\text{J·s}$$

> "Con esta restricción, la energía promedio ya no es $k_B T$ para todos. Depende de la frecuencia:"

$$\bar{E} = \frac{h\nu}{e^{h\nu / k_B T} - 1}$$

### Parte C — Demostración Interactiva (3:35 – 4:05)

**Mover los sliders de T y ν en la App →**

> "Veamos esto interactivamente. Ajusto la temperatura a 1000 kelvin y la frecuencia baja — infrarrojo."

**Slider ν bajo (2–3 ×10¹³ Hz) → mostrar que muchos niveles están excitados →**

> "Cuando h-nu es mucho menor que k-B-T, observen: muchos niveles están ocupados, el mensaje dice 'Régimen clásico'. La energía media se aproxima a k-B-T. Aquí la física clásica funciona bien."

**Subir slider ν a 10–12 ×10¹³ Hz → mostrar niveles congelados →**

> "Pero cuando subo la frecuencia al ultravioleta — ahora h-nu es mucho mayor que k-B-T. Miren: los niveles superiores están apagados. Solo queda n igual a cero. Es como un 'precio de entrada mínimo' que la temperatura no puede pagar. El modo queda congelado."

> "Y la ley de distribución completa de Planck, que ajusta perfectamente todo el espectro, es:"

$$u(\nu,T) = \frac{8\pi h\nu^3}{c^3} \cdot \frac{1}{e^{h\nu / k_B T} - 1}$$

*(Scroll a Sección 4: Historia)*

---

## Conclusión (4:05 – 4:40) — Sección "Línea de Tiempo Histórica"

**Indicación visual:** Mostrar la línea de tiempo y el bloque de impacto tecnológico en la App.

> "Pongamos esto en perspectiva histórica."

**Señalar cada punto en la línea de tiempo →**

| Año | Hito |
|---|---|
| 1879 | Stefan: $R \propto T^4$ (experimental) |
| 1893 | Wien: ley de desplazamiento |
| 1900 | **Planck: $E = nh\nu$** |
| 1900–05 | Rayleigh-Jeans: catástrofe UV |
| 1905 | Einstein: efecto fotoeléctrico |
| 1913 | Bohr: modelo atómico cuantizado |
| 1925–26 | Heisenberg y Schrödinger: mecánica cuántica completa |

> "El impacto de esta revolución es gigantesco. En la App podemos ver seis grandes familias tecnológicas que nacieron de la cuantización."

**Señalar cada tarjeta de impacto en la App →**

> "Primero, los **semiconductores**: la banda prohibida de un material —los estados de energía prohibidos entre la banda de valencia y la de conducción— es consecuencia directa de la cuantización. El silicio tiene $E_{\text{gap}} \approx 1.1$ eV. Sin semiconductores no existirían computadoras, smartphones, ni LEDs."

> "Segundo, los **sensores CCD y CMOS** en Sentinel-2, Landsat y el JWST: funcionan por el efecto fotoeléctrico *interno* en semiconductores. Cada fotón de energía $E = h\nu \geq E_{\text{gap}}$ genera un par electrón-hueco que se convierte en señal eléctrica medible."

> "Tercero, los **láseres** — LASER significa *Light Amplification by Stimulated Emission of Radiation*. Einstein predijo en 1917 que un fotón puede estimular a un átomo excitado a emitir un segundo fotón idéntico: misma frecuencia, fase y dirección. Eso es luz cuántica coherente."

> "Cuarto, la **Resonancia Magnética** (MRI/RMN): el espín nuclear de los protones de hidrógeno, con $s = \tfrac{1}{2}$, solo puede estar en dos estados bajo un campo magnético $B_0$ — paralelo o antiparalelo, separados por la energía de Larmor $\Delta E = \gamma\hbar B_0$. A 1.5 Tesla, esa frecuencia es de unos 64 MHz."

> "Quinto, la **Computación Cuántica**: un qubit puede estar en superposición de $|0\rangle$ y $|1\rangle$ simultáneamente. Dos qubits entrelazados comparten estado instantáneamente. Al medir, el sistema colapsa. Esto permite algoritmos exponencialmente más rápidos para problemas como la factorización y la simulación molecular."

> "Y sexto, el **GPS y los Relojes Atómicos**: el segundo está definido exactamente como $9\,192\,631\,770$ transiciones cuánticas hiperfinas del átomo de cesio-133. Un error de 1 nanosegundo en sincronía produce un error de 30 centímetros en la posición GPS."

**Señalar la cadena de descubrimientos →**

> "Esta cadena de descubrimientos —de Planck 1900 a Einstein, Bohr, Schrödinger, Dirac, el transistor de 1947, el láser de 1960, el CCD de 1969, el GPS de 1978 y los qubits de hoy— toda nació con una idea que Planck llamó 'un acto de desesperación': que la energía se intercambia en paquetes discretos $E = nh\nu$. La catástrofe ultravioleta no fue una falla menor — fue la grieta por donde entró toda la física cuántica."

> "Gracias por su atención."

---

## Notas de Producción

### Método de Grabación Recomendado

1. **Abrir la App** `Evaluacion_1_App.html` en Chrome/Edge a pantalla completa
2. **Presionar `P`** para activar el modo presentación (oculta el nav y footer)
3. **Usar software de grabación de pantalla** (OBS, Xbox Game Bar, o similar)
4. **Cámara web** en una esquina (picture-in-picture) para el rostro
5. **Navegar la App con `↑↓`** para saltar entre secciones durante la grabación
6. El **banner inferior** muestra los tiempos de cada sección — presionar `B` para ocultarlo cuando se grabe

### Consejos de Entrega

- **No leer literalmente.** Este guión es para ensayar. Durante la grabación, habla de forma natural.
- **Ensaya con cronómetro.** Cada tópico tiene un tiempo asignado; si uno se extiende, comprime sin eliminar puntos clave.
- **Interactúa con la App en vivo.** Mover los sliders crea engagement visual que un PPTX estático no puede lograr.
- **Ritmo.** Pausas breves (1–2 s) después de cada fórmula importante.
- **Voz.** Más enfático en frases clave ("esto NO fue un error de cálculo", "un acto de desesperación").
- **La Sección 3 (Planck) es el núcleo.** Dedicarle más energía y claridad que las demás.

### Indicaciones Visuales por Sección

| Sección App | Tiempo | Qué hacer en pantalla |
|---|---|---|
| **Hero** | 0:00 – 0:20 | Mostrar título. Click en "▶ Iniciar exploración". |
| **Espectro del Cuerpo Negro** | 0:20 – 1:20 | Mover slider T (900K → 5778K → 10000K). Activar/desactivar toggles Planck/RJ/Wien. Señalar la card "Valores calculados en tiempo real" (incluye las leyes de Wien y Stefan-Boltzmann) y la anotación "Pico: ×Sol" en la esquina del gráfico. Opcional: señalar las 3 tarjetas explicativas bajo el gráfico. |
| **Catástrofe UV** | 1:20 – 2:35 | Click en pasos 1→2→3→4. Animar divergencia con botón ▶. |
| **⭐ La Solución de Planck** | 2:35 – 4:05 | Señalar diagrama Clásico vs Cuántico. Leer tabla comparativa. Mover sliders T y ν para mostrar régimen clásico → congelación UV. |
| **Línea de Tiempo** | 4:05 – 4:40 | Scroll por la timeline (7 hitos). Señalar las 6 tarjetas de impacto tecnológico y la cadena de descubrimientos. Cita final. |

### Checklist de Puntos Clave para Máxima Calificación

> [!IMPORTANT]
> Según la rúbrica, **todos** los siguientes puntos deben mencionarse explícitamente en el video.

#### Tópico 1 — Cuerpo Negro
- [ ] Definición: absorbe 100% de la radiación incidente
- [ ] Emite solo en función de la temperatura $T$
- [ ] Ley de Wien: $\lambda_{\max} \cdot T = 2.898 \times 10^{-3}$ m·K
- [ ] Ley de Stefan-Boltzmann: $R = \sigma T^4$
- [ ] Ejemplo concreto (hierro rojo / Sol a 5778 K)
- [ ] Demostración interactiva moviendo el slider de T
- [ ] *(Opcional/bonus)* Distinguir el pico de la curva (∝\(T^5\)) de la potencia total (∝\(T^4\))

#### Tópico 2 — Catástrofe Ultravioleta
- [ ] Conteo de modos: crece como $\nu^2$
- [ ] Equipartición: $\bar{E} = k_B T$ por modo
- [ ] Fórmula de Rayleigh-Jeans y su divergencia
- [ ] Explicar que NO es error de cálculo sino consecuencia inevitable
- [ ] Mención de Ehrenfest (1911) y el nombre "catástrofe ultravioleta"
- [ ] Identificar la crisis: Boltzmann + Maxwell → resultado absurdo
- [ ] Usar la animación de la App para visualizar la divergencia

#### ⭐ Tópico 3 — Solución de Planck (EL MÁS IMPORTANTE)
- [ ] Diagrama visual: modelo clásico continuo vs. niveles discretos de Planck
- [ ] Tabla comparativa: 5 diferencias entre clásico y cuántico
- [ ] Hipótesis de cuantización: $E_n = nh\nu$
- [ ] Valor de $h = 6.626 \times 10^{-34}$ J·s
- [ ] Energía promedio: $\bar{E} = \frac{h\nu}{e^{h\nu/k_BT}-1}$
- [ ] Límite clásico: $h\nu \ll k_BT \Rightarrow \bar{E} \approx k_BT$ ✓
- [ ] Límite UV: $h\nu \gg k_BT \Rightarrow \bar{E} \to 0$ (modos congelados) ✓
- [ ] Argumento del "precio de entrada mínimo"
- [ ] Ley completa de Planck: $u(\nu,T)$
- [ ] Demostración interactiva: mover sliders T y ν para ver congelación de modos

#### Conclusión
- [ ] Línea de tiempo: Stefan → Wien → Rayleigh-Jeans → Planck → Einstein → Bohr → Schrödinger
- [ ] Impacto tecnológico (6 áreas): semiconductores, CMOS/CCD, láseres, MRI, computación cuántica, GPS
- [ ] Mención de la cadena de descubrimientos (1900 a hoy)
- [ ] Cita de Planck: "un acto de desesperación"
- [ ] Frase de cierre sobre la catástrofe como puerta a la física cuántica
