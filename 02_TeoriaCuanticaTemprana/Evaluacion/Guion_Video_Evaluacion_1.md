# Guión del Video — Evaluación 1: El Cuerpo Negro y la Revolución de Planck

---

## Metadata

| Campo | Detalle |
|---|---|
| **Duración** | 4:40 (máximo estricto: 5:00) |
| **Formato** | Exposición oral grabando pantalla con la App HTML |
| **Tópicos obligatorios** | 3 + conclusión |
| **Enfoque** | Física conceptual, precisión matemática y demostración interactiva |
| **App interactiva (principal)** | `Evaluacion_1_App.html` — abrir en navegador, grabar pantalla |
| **Presentación (respaldo)** | `Evaluacion_1_Presentacion.pptx` |
| **Última actualización** | 08 ago 2026 |

---

## Introducción (0:00 – 0:20) — Sección Hero de la App

*(La sección "Hero" es la portada al cargar la página: título, badges temáticos y el botón "▶ Iniciar exploración" — no requiere scroll.)*

**Indicación de cámara:** Encuadre medio, fondo limpio. Contacto visual directo. La App debe estar abierta en la portada inicial (Hero).

> "A finales del siglo XIX, la física clásica parecía completa. Las ecuaciones de Maxwell (1865) explicaban la luz; la termodinámica estadística de Boltzmann (décadas de 1870-1880) explicaba el calor; y la mecánica de Newton (1687) describía el movimiento de los cuerpos. Sin embargo, un problema aparentemente sencillo —cómo emite luz un objeto caliente— puso en evidencia las limitaciones de esa descripción. Hoy veremos por qué la teoría clásica conducía a una predicción imposible y cómo Max Planck propuso en 1900 una idea revolucionaria: que la energía solo puede intercambiarse en paquetes discretos llamados cuantos."

*(Click en "▶ Iniciar exploración" en la App → scroll automático a la Sección 1: Espectro del Cuerpo Negro)*

## Tópico 1 — El Cuerpo Negro (0:20 – 1:20) — Sección "Espectro del Cuerpo Negro"

**Indicación visual:** Mostrar la sección "Espectro del Cuerpo Negro". Señalar el título del gráfico: *📊 Curvas de Radiación del Cuerpo Negro: Planck vs. Rayleigh-Jeans vs. Wien*. Mover el slider de temperatura en vivo.

> "Un cuerpo negro es un objeto idealizado que absorbe el cien por ciento de la radiación que incide sobre él —no refleja nada, no transmite nada— y emite radiación electromagnética únicamente en función de su temperatura. Es el emisor y absorbedor perfecto."

> "Este concepto no es solo teórico: cerca de los 525 grados Celsius, la mayoría de los sólidos opacos comienzan a emitir una luminiscencia roja tenue, perceptible al ojo humano —sin importar de qué material estén hechos. Es la primera señal visible de que la luz emitida depende únicamente de la temperatura."

**Mover el slider de T a 2 000 K → activar el toggle "Escala Adaptativa (Auto-fit T)" →**

> "A 2 000 kelvin, en la escala absoluta la curva parece una línea plana cerca del eje debido al crecimiento de $T^5$. Al activar el interruptor de 'Escala Adaptativa (Auto-fit T)', el eje vertical reajusta automáticamente su escala, permitiéndonos apreciar claramente la forma campana de la curva de Planck, con su máximo en 1 449 nanómetros en el infrarrojo cercano."

**Subir el slider a 5 778 K (Temperatura del Sol) → señalar que la curva crece en altura y se desplaza a la izquierda.**

> "Al subir la temperatura a 5 778 kelvin —la superficie del Sol— observamos dos fenómenos fundamentales: el máximo de emisión se desplaza hacia longitudes de onda más cortas, alcanzando aproximadamente 502 nanómetros en el visible (Ley de Wien), y la potencia total irradiada se dispara a 63.2 megavatios por metro cuadrado (Ley de Stefan-Boltzmann)."

$$\lambda_{\max} \cdot T = 2.898 \times 10^{-3} \;\text{m·K}, \qquad R = \sigma T^4$$

**Subir el slider a ~9 000 K → señalar la tarjeta a todo lo ancho "📚 Fundamentos Físicos: Unicidad y Escalamiento del Pico Espectral".**

> "A 9 000 kelvin, el máximo se ubica exactamente en 322 nanómetros, en el ultravioleta. Como explica la tarjeta interactiva ubicada debajo del gráfico, para una temperatura dada en un cuerpo negro ideal, el máximo es único e ineludible por la Ley de Wien: es físicamente imposible trazar otra curva a 9 000 K con un máximo en una longitud de onda distinta."

> "Además, observen que la altura del máximo puntual crece como la quinta potencia de la temperatura, $u(\lambda_{\max},T) \propto T^5$, al combinar Planck con Wien; mientras que la potencia total emitida —el área acumulada bajo toda la curva— escala como $T^4$ según Stefan-Boltzmann."

**Bajar el slider nuevamente a 5 778 K. Activar el toggle de Rayleigh-Jeans.**

> "Noten cómo la curva clásica de Rayleigh-Jeans coincide con Planck a longitudes de onda largas, pero diverge hacia la izquierda. Esa divergencia hacia el infinito es la catástrofe ultravioleta."

*(Scroll a Sección 2: La Catástrofe Ultravioleta)*

---

## Tópico 2 — La Catástrofe Ultravioleta (1:20 – 2:35) — Sección "La Catástrofe Ultravioleta"

**Indicación visual:** Mostrar la sección de catástrofe UV en la App. Usar los pasos interactivos (1–4) y la animación.

> "¿De dónde viene el desastre? Vamos paso a paso."

**Click en Paso 1 →**

> "Primero, contamos los modos de oscilación dentro de una cavidad. Consideren la cavidad como una caja cerrada: solo ciertas ondas estacionarias —definidas por números enteros en cada dirección— encajan exactamente entre sus paredes, igual que una cuerda de guitarra solo vibra en ciertas notas permitidas. El número de esos modos electromagnéticos crece como nu al cuadrado:"

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

> "Quiero enfatizar algo: esto no fue un error de cálculo. Fue la consecuencia inevitable de combinar dos postulados de la física clásica: el teorema de equipartición, que asigna una energía media de $k_BT$ a cada modo, y el electromagnetismo de Maxwell, que predice un número de modos cada vez mayor a medida que aumenta la frecuencia. Juntos conducen a una energía total infinita, un resultado incompatible con la realidad."

> "En 1911, Paul Ehrenfest bautizó este fracaso como la 'catástrofe ultravioleta'. No se trataba de una anomalía menor: era una crisis fundamental de la física clásica."

*(Scroll a Sección 3: La Solución de Planck)*

---

## ⭐ Tópico 3 — La Solución de Planck (2:35 – 4:05) — Sección "La Solución de Planck"

> [!IMPORTANT]
> **Esta es la sección más importante del video (1 min 30 s).** La App presenta una cuadrícula estructurada de **2×2** para facilitar la explicación fluida de la cuantización.

**Indicación visual:** La App muestra la cuadrícula 2×2 en pantalla:
- **Arriba-Izquierda (Top-Left):** *Niveles de Energía Cuantizados* (diagrama $n=0..8$, cajas de $k_BT$, $h\nu$, $h\nu/k_BT$, mensaje dinámico, y sliders de $T$ y $\nu$ abajo).
- **Arriba-Derecha (Top-Right):** *¿Cómo se calcula la energía media $\bar{E}$ y por qué cambia con $T$ y $\nu$?* (tarjeta con la derivación formal abierta).
- **Abajo-Izquierda (Bottom-Left):** Gráfico interactivo en Canvas de $\bar{E}/k_BT$ vs. frecuencia.
- **Abajo-Derecha (Bottom-Right):** Tabla comparativa Clásico vs. Planck.

### Parte A — La Hipótesis de Cuantización (2:35 – 3:15)

> "En diciembre de 1900, Max Planck introdujo una hipótesis revolucionaria: la energía de un oscilador de frecuencia $\nu$ dentro de la cavidad no es continua, sino que está cuantizada. Solo puede tomar valores discretos enteros:"

$$E_n = n h \nu, \qquad n = 0, 1, 2, \ldots$$

> "donde $h$ es una constante fundamental, la constante de Planck:"

$$h = 6.626 \times 10^{-34} \;\text{J·s}$$

> "Al aplicar la distribución de Boltzmann a estos niveles discretos, la función de partición del sistema es $Z = \frac{1}{1 - e^{-h\nu/k_BT}}$, y la población relativa del nivel $n$ respecto al nivel base es $P_n/P_0 = e^{-nh\nu/k_BT}$. Promediando la energía ponderada por estas probabilidades, se obtiene la energía media del oscilador:"

$$\bar{E} = \frac{h\nu}{e^{h\nu / k_B T} - 1}$$

> "Como muestra la tarjeta superior derecha de la cuadrícula, todo el comportamiento térmico depende exclusivamente de la razón $h\nu/k_BT$."

### Parte B — Demostración Interactiva y Accesibilidad Térmica (3:15 – 4:05)

**Mover los sliders de T y ν (ubicados en la parte inferior del panel superior izquierdo) →**

> "Veamos esto interactivamente en la tarjeta superior izquierda. En el diagrama, un nivel se enciende cuando su población relativa supera $1/e \approx 36.8\%$. Esta es la **escala natural de la distribución de Boltzmann**: equivale a la condición $nh\nu \le k_BT$, indicando que el nivel es térmicamente accesible."

**Ajustar $\nu$ a baja frecuencia (IR, ~3×10¹³ Hz) →**

> "A baja frecuencia, la separación entre niveles $h\nu$ es mucho menor que la energía térmica disponible $k_BT$ ($h\nu \ll k_BT$). Los peldaños son pequeños, múltiples niveles están encendidos y la energía media se aproxima a $k_BT$. En este límite, recuperamos el régimen clásico."

**Subir slider $\nu$ hacia el ultravioleta (~12×10¹³ Hz) → mostrar la congelación del nivel $n=1$ →**

> "Sin embargo, al aumentar la frecuencia al ultravioleta, el cuanto $h\nu$ supera la energía térmica ($h\nu > k_BT$). El costo energético para alcanzar el primer nivel excitado ($n=1$) es tan alto que su población cae por debajo de $1/e$. El primer nivel se apaga y el modo queda **congelado cuánticamente** en $n=0$. Por lo tanto, la energía media tiende a cero ($\bar{E} \to 0$), suprimiendo los modos de alta frecuencia y eliminando por completo la catástrofe ultravioleta."

> "La densidad de energía espectral completa de Planck, que ajusta perfectamente el espectro experimental, es:"

$$u(\nu,T) = \frac{8\pi h\nu^3}{c^3} \cdot \frac{1}{e^{h\nu / k_B T} - 1}$$

*(Scroll a Sección 4: Historia e Impacto)*

---

## Conclusión (4:05 – 4:40) — Sección "Línea de Tiempo Histórica"

**Indicación visual:** Recorrer la línea de tiempo histórica y mostrar las 6 tarjetas de aplicaciones tecnológicas modernas.

> "La hipótesis de Planck marcó el nacimiento de la física cuántica."

**Señalar cada punto en la línea de tiempo →**

| Año | Hito |
|---|---|
| 1879 | Stefan: $R \propto T^4$ (experimental) |
| 1893 | Wien: ley de desplazamiento $\lambda_{\max}T = b$ |
| 1900 | **Planck: $E = nh\nu$ y ley de radiación** |
| 1900–05 | Rayleigh-Jeans: catástrofe UV |
| 1905 | Einstein: fotones y efecto fotoeléctrico |
| 1913 | Bohr: modelo atómico cuantizado |
| 1925–26 | Heisenberg y Schrödinger: mecánica cuántica completa |

**Señalar brevemente las tarjetas de aplicaciones tecnológicas →**

> "Hoy, esta teoría sustenta tecnologías fundamentales: los **semiconductores** en procesadores, los **sensores de cámaras** (CCD/CMOS), los **láseres**, la **resonancia magnética** médica, la **computación cuántica** y los **relojes atómicos del GPS**."

> "Planck definió su propia hipótesis como 'un acto de desesperación'. La catástrofe ultravioleta no fue un simple error de cálculo: fue la señal ineludible de que el universo funciona en paquetes discretos de energía."

> "Muchas gracias por su atención."

---

## Notas de Producción

### Método de Grabación Recomendado

1. **Abrir la App** `Evaluacion_1_App.html` en Chrome/Edge a pantalla completa.
2. **Presionar `P`** para activar el modo presentación (oculta el nav y footer si se desea).
3. **Usar software de grabación de pantalla** (OBS, Xbox Game Bar, o similar) a 1080p 60fps.
4. **Navegar la App con `↑↓`** para saltar suavemente entre las 4 secciones principales.

### Indicaciones Visuales por Sección

| Sección App | Tiempo | Qué hacer en pantalla |
|---|---|---|
| **Hero** | 0:00 – 0:20 | Mostrar portada inicial. Clic en "▶ Iniciar exploración". |
| **Espectro del Cuerpo Negro** | 0:20 – 1:20 | Mover slider $T$ (1 500 K → 5 778 K → 9 000 K). Mostrar título del gráfico (*📊 Curvas de Radiación...*) y la tarjeta inferior a todo lo ancho de unicidad ($\lambda_{\max} = b/T$) y escalamiento $T^5$ vs. $T^4$. |
| **Catástrofe UV** | 1:20 – 2:35 | Clic en pasos 1 → 2 → 3 → 4. Activar "▶ Animar divergencia". |
| **⭐ La Solución de Planck** | 2:35 – 4:05 | En la cuadrícula 2×2: explicar cuantización en tarjeta teórica (arriba-derecha), mover sliders $T$ y $\nu$ (abajo en tarjeta arriba-izquierda) y mostrar congelación cuántica según el criterio $1/e \approx 36.8\%$. |
| **Línea de Tiempo** | 4:05 – 4:40 | Scroll por la línea de tiempo (1879–1926) y mostrar tarjetas de impacto tecnológico. Cita final. |

### Checklist de Puntos Clave para Máxima Calificación

> [!IMPORTANT]
> Según la rúbrica, **todos** los siguientes puntos deben mencionarse explícitamente en el video.

#### Tópico 1 — Cuerpo Negro
- [ ] Definición: absorbe 100% de la radiación incidente y emite solo en función de $T$.
- [ ] Ley de Wien: $\lambda_{\max} \cdot T = 2.898 \times 10^{-3}$ m·K (unicidad del máximo a una temperatura dada).
- [ ] Ley de Stefan-Boltzmann: $R = \sigma T^4$.
- [ ] Ejemplo concreto (luminiscencia a 525 °C / Sol a 5 778 K).
- [ ] Demostración interactiva moviendo el slider de $T$.
- [ ] Explicar escalamiento del máximo $u(\lambda_{\max},T) \propto T^5$ (Planck + Wien) vs. potencia total $R \propto T^4$.

#### Tópico 2 — Catástrofe Ultravioleta
- [ ] Conteo de modos: crece como $\nu^2$.
- [ ] Equipartición de Boltzmann: $\bar{E} = k_B T$ por modo.
- [ ] Fórmula de Rayleigh-Jeans y su divergencia a frecuencias altas.
- [ ] Explicar que NO fue error de cálculo sino consecuencia inevitable de la física clásica.
- [ ] Mención a Paul Ehrenfest (1911) y el término "catástrofe ultravioleta".
- [ ] Usar la animación interactiva de la App para visualizar la divergencia.

#### ⭐ Tópico 3 — Solución de Planck (EL MÁS IMPORTANTE)
- [ ] Estructura en cuadrícula 2×2 en la App.
- [ ] Hipótesis de cuantización: $E_n = nh\nu$ con $h = 6.626 \times 10^{-34}$ J·s.
- [ ] Función de partición $Z$ y distribución de Boltzmann $P_n/P_0 = e^{-nh\nu/k_BT}$.
- [ ] Fórmula de energía media de Planck: $\bar{E} = \frac{h\nu}{e^{h\nu/k_BT}-1}$.
- [ ] Explicación del criterio de accesibilidad térmica $1/e \approx 36.8\%$ ($nh\nu \le k_BT$).
- [ ] Límite clásico: $h\nu \ll k_BT \implies \bar{E} \approx k_BT$.
- [ ] Límite UV / Congelación cuántica: $h\nu > k_BT \implies n=1$ cae bajo $1/e \implies \bar{E} \to 0$.
- [ ] Demostración interactiva con sliders de $T$ y $\nu$.

#### Conclusión
- [ ] Línea de tiempo histórica (Stefan → Wien → Planck → Einstein → Bohr → Schrödinger).
- [ ] Impacto tecnológico (6 áreas): semiconductores, CCD/CMOS, láseres, MRI, qubits, GPS.
- [ ] Cita de Planck: "un acto de desesperación".
- [ ] Cierre reflexivo sobre el nacimiento de la mecánica cuántica.
