# Bohr → Espectroscopía Estelar: Plan maestro del proyecto
## Evaluación 2 — Teoría Cuántica Temprana

---

## 0. Contexto y propósito

**Tema elegido:** Modelo atómico de Bohr → Aplicación en espectroscopía astronómica (composición química de estrellas)

**Pregunta guía del video:** ¿Cómo sabemos de qué está hecha una estrella a años luz de distancia, sin tocarla jamás?

**Propósito de la app:** Es material de apoyo visual para el video de 5 minutos, NO el entregable principal, pero será entregada al profesor junto con el video — por lo tanto **debe ser físicamente correcta, sin errores conceptuales, y defendible si se pregunta "¿de dónde sale ese número?"**.

**Principio de diseño no negociable:** ningún valor mostrado en pantalla se inventa. Las líneas del hidrógeno se calculan en vivo con la fórmula de Bohr (exacta para este caso). Las líneas de otros elementos (He, Na, Ca) son datos experimentales reales tabulados (NIST), no derivaciones — ver sección 2 para la distinción honesta entre ambos casos.

**Requisitos de UX:** experiencia agradable, didáctica, limpia, prolija, fácil de entender, con al menos un panel de cálculo interactivo en tiempo real (selector de niveles $n_i \to n_f$) — sin necesidad de motor de física complejo, porque a diferencia de Rutherford/RBS, aquí la física central sí tiene solución analítica cerrada y exacta.

**Stack:** JS/HTML para la app interactiva (cálculo en vivo con fórmulas cerradas, MathJax para renderizado de fórmulas). Python opcional para verificar valores antes de programar, y para descargar/inspeccionar espectros reales de SDSS si el grupo quiere ir más allá de los valores tabulados.

### 0.1 Cómo renderizar las fórmulas correctamente (LaTeX vs. MathJax)

Todas las fórmulas de este documento están en **sintaxis LaTeX**. Para que se rendericen como notación matemática real en el navegador (no como texto plano con backslashes), la app debe integrar **MathJax** — es la librería estándar académica para esto, con mejor soporte de símbolos físicos que alternativas como KaTeX.

**Integración necesaria en el HTML de la app:**

```html
<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
```

**Nota práctica:** si la app actualiza un valor numérico en vivo (como $\Delta E$ o $\lambda$ cambiando con el selector de niveles), MathJax no re-renderiza automáticamente al cambiar el texto por JS. Recomendación: mantener la fórmula simbólica fija (renderizada una sola vez por MathJax) y actualizar solo el número resultante en un `<span>` HTML normal aparte, sin LaTeX — evita llamadas innecesarias a `MathJax.typesetPromise()`.

### 0.2 Mockup visual de referencia (wireframe)

Layout de los tres paneles, apilados verticalmente, cada uno en una tarjeta separada:

```
┌─────────────────────────────────────────────────────────┐
│ PANEL A · El átomo de Bohr (calculadora de saltos)        │
│                                                            │
│   n=4  ─────────────────────                              │
│   n=3  ─────────────────────  ← electrón aquí              │
│              │                                             │
│              │ salto (click o selector)                    │
│              ▼                                             │
│   n=2  ─────────────────────  ← cae aquí, emite fotón      │
│   n=1  ─────────────────────                               │
│                                                             │
│         ● ← fotón rojo animado saliendo                    │
│                                                             │
│   n inicial [▼ 3]     n final [▼ 2]                        │
│                                                             │
│   ΔE = 1.89 eV    λ = 656.3 nm    (Hα)                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ PANEL B · Huellas espectrales por elemento                │
│                                                             │
│   H    │  │    │      │                                    │
│   He           │                                            │
│   Na            │                                           │
│   Ca  │ │                                                   │
│        400   500   600   700  nm                            │
│                                                              │
│   (H calculado en vivo con Bohr · He/Na/Ca datos NIST)      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ PANEL C · Identifica la estrella                           │
│                                                              │
│   [espectro de absorción de una estrella desconocida]       │
│   ▓▓▓▓▓▓▓▓▓▓▓▓░░▓▓▓▓▓▓░▓▓▓▓▓▓▓▓▓▓░▓▓▓▓▓                    │
│                     ┊        ┊      ┊                       │
│   [H] [He] [Na] [Ca]  ← el usuario marca qué reconoce       │
│                                                              │
│   ✓ Correcto: Estrella tipo G — mismo tipo que el Sol       │
└─────────────────────────────────────────────────────────┘
```

**Notas de diseño:** tarjetas apiladas en una columna, selector/slider debajo de cada visualización, color consistente para "el fotón" en los tres paneles (mismo tono para reforzar que es el mismo tipo de evento mostrado tres veces), tarjetas tipo "metric card" para ΔE y λ (etiqueta chica arriba, número grande abajo), sin bloques largos de texto dentro de la app.

---

## 1. Fundamento físico completo

### 1.1 El problema que Bohr quería resolver

Antes de Bohr, el modelo de Rutherford (núcleo denso + electrón orbitando) tenía un problema fatal: según el electromagnetismo clásico de Maxwell, un electrón acelerando en órbita debe irradiar energía continuamente y colapsar en espiral hacia el núcleo en una fracción de segundo del orden de $10^{-11}$ s. Los átomos no deberían ser estables — y sin embargo lo son. Bohr resolvió esto en 1913 con un postulado que no se deriva de nada anterior: simplemente lo propuso, y funcionó.

### 1.2 Postulado 1 — Cuantización del momento angular

$$L = m_e v r = n\hbar, \qquad n = 1, 2, 3, \dots$$

Este es el paso "audaz" — el electrón solo puede orbitar en ciertos radios específicos donde su momento angular es un múltiplo entero de $\hbar$.

### 1.3 Derivación paso a paso (para mostrar en Panel A / explicar en el video)

**Paso 1 — Radio de cada órbita permitida.** Igualando la fuerza de Coulomb con la fuerza centrípeta:

$$\frac{ke^2}{r^2} = \frac{m_e v^2}{r}$$

Combinando con el postulado de cuantización ($m_e v r = n\hbar$) y despejando, se obtiene:

$$r_n = \frac{n^2\hbar^2}{m_e k e^2} = n^2 \cdot a_0$$

donde $a_0 = 0.529$ Å es el radio de Bohr (radio de la órbita más pequeña, $n=1$). Los radios crecen con $n^2$.

**Paso 2 — Energía de cada nivel.** La energía total (cinética + potencial eléctrico), sustituyendo $r_n$, se simplifica a una expresión que solo depende de $n$:

$$E_n = -\frac{m_e k^2 e^4}{2\hbar^2}\cdot\frac{1}{n^2} = -\frac{13.6\text{ eV}}{n^2}$$

La energía está cuantizada. El signo negativo indica que el electrón está ligado (hace falta energía para liberarlo).

**Paso 3 — Energía del fotón emitido.** Cuando el electrón cae de un nivel superior $n_i$ a uno inferior $n_f$:

$$\Delta E = E_{n_i} - E_{n_f} = 13.6\text{ eV}\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

Y como $\Delta E = h\nu = hc/\lambda$, despejando $1/\lambda$ se llega a la **fórmula de Rydberg** (empírica desde 1888, 25 años antes de Bohr — los físicos sabían que funcionaba, pero no por qué; ese fue el logro de Bohr: derivarla desde primeros principios):

$$\frac{1}{\lambda} = R_H\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right), \qquad R_H = 1.097\times10^7 \text{ m}^{-1}$$

### 1.4 Serie de Balmer (líneas visibles, $n_f = 2$)

| Línea | Salto | $\Delta E$ | $\lambda$ | Color |
|---|---|---|---|---|
| $H\alpha$ | $3\to2$ | 1.89 eV | 656.3 nm | Rojo |
| $H\beta$ | $4\to2$ | 2.55 eV | 486.1 nm | Verde-azulado |
| $H\gamma$ | $5\to2$ | 2.86 eV | 434.0 nm | Azul-violeta |
| $H\delta$ | $6\to2$ | 3.02 eV | 410.2 nm | Violeta |

Patrón físico: saltos que empiezan más lejos ($n$ más alto) son más energéticos (más cerca del violeta) y más débiles (salto menos probable). Esta tabla es literalmente lo que el Panel A debe poder reproducir en vivo para cualquier combinación de $n_i \to n_f$ que el usuario elija.

### 1.5 Por qué esto pertenece al módulo de Teoría Cuántica Temprana

Este punto casi no necesita justificación adicional — a diferencia de Rutherford, Bohr **es** directamente la mecánica cuántica temprana: la cuantización del momento angular es el primer postulado cuántico aplicado a un sistema atómico. Vale la pena, sin embargo, hacer explícito el hilo narrativo completo del módulo para el video:

> Planck cuantiza la energía de la radiación (1900) → Einstein cuantiza la luz en fotones (1905) → Rutherford descubre el núcleo y con eso rompe la física clásica del átomo (1911) → Bohr cuantiza el momento angular del electrón y resuelve la estabilidad atómica, prediciendo exactamente el espectro del hidrógeno (1913).

Esta cadena conecta el proyecto directamente con el contenido del módulo completo (si el grupo ya trabajó blackbody/Planck en la Evaluación 1, esto cierra el círculo del curso, lo cual es un excelente gancho de apertura).

---

## 2. Qué se calcula en vivo vs. qué es dato real tabulado (transparencia total)

Esta sección es el equivalente, para este proyecto, de la distinción "física real vs. simplificación" trabajada en el proyecto de Rutherford/RBS — aquí el eje no es "tiempo real vs. precalculado" sino **"derivado por Bohr vs. medido experimentalmente"**, y es importante declararlo con la misma honestidad.

### ✅ Física real, calculada en vivo con fórmula exacta (Panel A)

- $\Delta E$ y $\lambda$ para cualquier salto $n_i \to n_f$ del hidrógeno, usando la fórmula de Rydberg derivada arriba. Esto es una fórmula cerrada, sin iteración, sin riesgo de bugs numéricos — segura de evaluar en cada interacción del usuario.
- El hidrógeno es el único átomo para el cual la fórmula de Bohr da resultados **exactos**, porque el modelo asume un solo electrón orbitando un núcleo — que es literalmente la estructura del átomo de hidrógeno.

### ⚠️ Datos reales, pero NO derivados con la fórmula de Bohr (Panel B y C)

- **Helio (He), sodio (Na), calcio (Ca)** tienen más de un electrón. La fórmula analítica de Bohr no puede calcular sus líneas espectrales exactas — eso requiere la mecánica cuántica completa (ecuación de Schrödinger con múltiples electrones, apantallamiento, acoplamiento espín-órbita), que está fuera del alcance del modelo de Bohr y de este curso.
- Esto **no es un problema para el proyecto** — es una oportunidad de mostrar rigor. Las líneas que se muestran para estos elementos deben ser **datos experimentales reales**, tomados del NIST Atomic Spectra Database (gratuito, es la referencia estándar de la disciplina), no calculados ni estimados a ojo.
- El *principio* que explica por qué existen esas líneas (electrones saltando entre niveles de energía discretos) sigue siendo exactamente el principio cuántico de Bohr — solo el cálculo numérico exacto requiere teoría posterior.

**Frase sugerida para el guion (declara esta distinción con naturalidad, sin sonar como una disculpa):**

> "Para el hidrógeno, podemos calcular estas líneas exactamente con la fórmula de Bohr — un electrón, un núcleo, matemática exacta. Para elementos más pesados como el helio o el calcio, el mismo principio cuántico opera, pero calcular la posición exacta de sus líneas requiere la mecánica cuántica completa que vino después de Bohr. Las líneas que ven aquí para esos elementos son datos reales medidos en laboratorio, no estimaciones."

### 🔴 Recurso visual sin respaldo físico directo (declarar en el guion)

- **El tamaño y la velocidad del fotón animado** en el Panel A no están a escala real ni representan una velocidad física medible — son un recurso visual para que el salto de energía sea legible. El fotón real viaja a $c$ y el evento cuántico del salto no tiene una "duración" observable de la forma en que se anima aquí.
- **Las órbitas dibujadas como círculos concéntricos** son la representación clásica de Bohr (útil pedagógicamente), no la imagen real del átomo según la mecánica cuántica moderna, donde el electrón no tiene una órbita definida sino una distribución de probabilidad (orbital). Vale la pena decir esto en 5-10 segundos del video para mostrar que el grupo entiende la diferencia entre el modelo de Bohr (semiclásico, con órbitas) y la mecánica cuántica posterior (con orbitales probabilísticos) — es un punto de rigor fácil de ganar.

**Frase sugerida:**

> "Dibujamos el átomo con órbitas circulares porque así lo imaginó Bohr — un modelo semiclásico, útil y potente, pero no la imagen final. Hoy sabemos que el electrón no tiene una trayectoria definida, sino una nube de probabilidad. Bohr fue el primer paso hacia esa idea, no la respuesta completa."

---

## 3. Estructura de la app (3 paneles)

### Panel A — El átomo de Bohr (calculadora interactiva de saltos)

**Elemento interactivo:** dos selectores (dropdown o slider discreto) para $n_i$ y $n_f$ (rango sugerido: 1 a 6), con la restricción $n_i > n_f$.

**Qué se dibuja:**
- Niveles de energía como líneas horizontales paralelas (más juntas a medida que crece $n$, reflejando que $E_n \propto -1/n^2$ — los niveles se acercan entre sí, no están equiespaciados).
- Un punto (electrón) en el nivel $n_i$ elegido, que "cae" visualmente hasta $n_f$, emitiendo un fotón animado del color correspondiente a $\lambda$ calculado.
- El color del fotón debe mapearse razonablemente del valor de $\lambda$ real (aprox. 380-750 nm = visible; fuera de ese rango, indicar "ultravioleta" o "infrarrojo" en vez de forzar un color falso — esto también es un punto de honestidad física fácil de score).

**Cálculo en vivo (fórmula cerrada, sin riesgo):**

```javascript
function actualizarPanelA(n_inicial, n_final) {
  const Ry = 13.6; // eV
  const deltaE = Ry * (1/(n_final**2) - 1/(n_inicial**2));
  const h = 4.1357e-15; // eV·s
  const c = 3e8; // m/s
  const lambda_m = (h * c) / deltaE;
  const lambda_nm = lambda_m * 1e9;

  actualizarTexto('deltaE', deltaE.toFixed(2) + ' eV');
  actualizarTexto('lambda', lambda_nm.toFixed(1) + ' nm');
  animarFoton(colorDesdeLambda(lambda_nm));
}
```

**Texto/fórmula visible:** mostrar la fórmula de Rydberg fija (renderizada una vez con MathJax) y los valores numéricos actualizándose en un `<span>` aparte (ver nota de sección 0.1).

### Panel B — Huellas espectrales por elemento

**Qué se dibuja:**
- 4 franjas horizontales (H, He, Na, Ca), cada una con líneas verticales de color en las posiciones reales de sus longitudes de onda.
- Las líneas de H deben coincidir exactamente con lo que calcula el Panel A (mismo motor de cálculo, reutilizado) — esto refuerza que ambos paneles están conectados, no son piezas sueltas.
- Las líneas de He, Na, Ca se cargan como datos fijos (constantes en el código), verificados contra NIST antes de programar (ver tabla en sección 4).

**Nota de diseño:** este panel no necesita interactividad compleja — su función es mostrar la comparación visual ("huella dactilar"), no recalcular nada. Puede incluirse un pequeño toggle para mostrar/ocultar cada elemento, si se quiere algo de interacción sin complejidad añadida.

### Panel C — Identifica la estrella (el desafío aplicado)

**Qué se dibuja:**
- Un espectro de absorción continuo (gradiente de colores del violeta al rojo) con 2-4 líneas oscuras superpuestas, en las posiciones de un espectro estelar real (ver sección 4 para fuente de datos).
- Botones o checkboxes con los elementos del Panel B (H, He, Na, Ca) para que el usuario "marque" cuáles reconoce comparando posiciones.
- Al confirmar, revelar: elementos presentes, nombre/tipo de la estrella real usada como referencia (ej. tipo espectral G, similar al Sol).
- Idealmente, 2-3 estrellas de dificultad creciente para que se sienta como un juego breve, no una sola respuesta fija.

**Cómo obtener el espectro "desconocido" sin inventar nada:**
- Usar **SDSS SkyServer** (Explore/visor de espectros) para inspeccionar visualmente 2-3 espectros reales y anotar a mano las posiciones de las líneas de absorción principales.
- Alternativamente, para no depender de conexión a APIs en la app, hardcodear esas posiciones ya anotadas como datos fijos — coherente con el mismo criterio usado en Panel B.

---

## 4. Datos reales a usar (verificar contra NIST antes de programar)

| Elemento | Línea(s) | $\lambda$ (nm) | Nota |
|---|---|---|---|
| Hidrógeno (H) | $H\alpha, H\beta, H\gamma, H\delta$ | 656.3 / 486.1 / 434.0 / 410.2 | Calculado en vivo con Bohr — no hardcodear, debe salir de la fórmula |
| Helio (He) | D3 | 587.6 | Línea histórica: descubierta en el Sol (1868) antes que en la Tierra |
| Sodio (Na) | Doblete D | 589.0 / 589.6 | Nomenclatura de Fraunhofer (1814), catalogada antes de saberse su causa |
| Calcio (Ca II) | H y K | 396.8 / 393.4 | Muy prominentes en espectros estelares tipo solar; **la letra no tiene relación con el símbolo químico** — es coincidencia de notación de Fraunhofer |

**Fuente de verificación:** NIST Atomic Spectra Database (nist.gov/pml/atomic-spectra-database) — estándar gratuito de la disciplina, referenciar explícitamente en el video o en la documentación de la app como respaldo de rigor.

**Origen de los nombres (para 20-30 segundos del video, opcional pero da mucho rigor):**
- $H\alpha, H\beta...$: notación por serie física (indica el salto electrónico exacto), predicha por Bohr.
- D3, H, K: notación histórica de Fraunhofer, asignada por posición en el espectro solar **antes** de que existiera la idea del átomo — el "misterio sin explicar" que Bohr vino a resolver un siglo después.

---

## 5. Aplicación moderna (para el cierre del video)

- **Descubrimiento del helio (1868):** la línea D3 se observó primero en el espectro solar, sin explicación en ese momento — llevó al nombre "helio" (*helios*, sol) antes de encontrarse el elemento en la Tierra. Gancho narrativo muy fuerte.
- **Clasificación espectral estelar:** el sistema de tipos O-B-A-F-G-K-M usado en astronomía se basa directamente en qué líneas de absorción aparecen y con qué intensidad — es, en esencia, el mismo ejercicio del Panel C, aplicado profesionalmente.
- **Telescopios/instrumentos reales:** SDSS (terrestre, EE.UU., la fuente de datos más accesible), ESO/VLT/HARPS (telescopios europeos en el desierto de Atacama, Chile — buen gancho local), y James Webb (JWST), que usa el mismo principio en infrarrojo para buscar agua y metano en atmósferas de exoplanetas — el cierre más "moderno" y reconocible para la audiencia.

**Frase sugerida para el cierre:**

> "Nunca hemos tocado una estrella. Pero Bohr nos dio la clave para leer su composición con solo mirar su luz — la misma técnica que hoy usa el telescopio James Webb para buscar agua en atmósferas de planetas fuera de nuestro sistema solar."

---

## 6. Guion del video (5 minutos, repartido entre 3 estudiantes)

**Estructura de reparto:** cada estudiante lleva un tramo completo (~1:40), no un fragmento técnico aislado — contexto → física central → cierre aplicado, igual que en el proyecto de Rutherford/RBS, para que cada persona tenga una porción con gancho propio.

### Estudiante 1 — Gancho, contexto histórico y derivación de Bohr (0:00–1:40)

| Tiempo | Contenido |
|---|---|
| 0:00–0:35 | Gancho: "¿Cómo sabemos de qué está hecha una estrella a años luz, sin tocarla jamás?" + dato del helio descubierto en el Sol antes que en la Tierra |
| 0:35–1:10 | El problema que resuelve Bohr: por qué el átomo de Rutherford era inestable según la física clásica, y el postulado de cuantización del momento angular |
| 1:10–1:40 | Demo Panel A: mostrar un salto (ej. $H\alpha$), la fórmula de Rydberg en pantalla, ΔE y λ calculándose en vivo |

**Cierre de esta parte (traspaso a Estudiante 2):** *"esta fórmula predice exactamente el hidrógeno — pero las estrellas tienen más que hidrógeno. Veamos cómo se ve eso."*

### Estudiante 2 — Huellas espectrales y honestidad del modelo (1:40–3:20)

| Tiempo | Contenido |
|---|---|
| 1:40–2:15 | Demo Panel B: mostrar las 4 huellas (H, He, Na, Ca), explicar el concepto de "huella dactilar" espectral |
| 2:15–2:50 | **Declarar explícitamente la distinción Bohr-exacto vs. datos reales tabulados** (frase sugerida en sección 2) — mencionar NIST como fuente |
| 2:50–3:20 | (Opcional, si sobra tiempo) origen de los nombres D3, H, K — Fraunhofer catalogando antes de entender la física |

**Cierre de esta parte (traspaso a Estudiante 3):** *"con estas huellas ya identificadas, podemos usarlas para leer la luz de una estrella real."*

### Estudiante 3 — El desafío aplicado y cierre (3:20–5:00)

| Tiempo | Contenido |
|---|---|
| 3:20–4:00 | Demo Panel C: "Identifica la estrella" — comparar el espectro desconocido con las huellas del Panel B, revelar el resultado |
| 4:00–4:40 | Aplicación moderna: clasificación estelar, telescopios reales (SDSS, ESO en Chile, JWST) |
| 4:40–5:00 | Cierre + mención de que los datos usados son reales (NIST, SDSS) |

**Nota de producción:** igual que en el proyecto de Rutherford/RBS, ensayar las frases de traspaso entre estudiantes como texto fijo, no improvisado, para no perder segundos del bloque de 5 minutos.

---

## 7. Plan de desarrollo técnico (orden de trabajo sugerido)

1. **Verificar la fórmula de Bohr con Python** (~15 min): implementar $\Delta E(n_i, n_f)$ y $\lambda$, confirmar contra la tabla de Balmer de la sección 1.4.
2. **Verificar los datos NIST de He, Na, Ca** (~15-20 min): confirmar las longitudes de onda de la sección 4 contra la base de datos NIST antes de hardcodearlas.
3. **Programar Panel A primero** (más simple, fórmula cerrada, mayor claridad conceptual): selectores de $n_i/n_f$ + animación de salto + números en vivo.
4. **Programar Panel B**: reutilizar el motor de cálculo de A para las líneas de H; cargar datos fijos para He/Na/Ca.
5. **Programar Panel C**: espectro con líneas oscuras posicionadas según datos reales anotados de SDSS, más sistema simple de verificación de respuesta del usuario.
6. **Pulido de UX**: transiciones suaves, tipografía clara, colores de fotón/línea consistentes entre paneles, textos breves (el detalle va en el guion, no en la app).
7. **Prueba de "defensa"**: verificar que cada número mostrado se pueda explicar con una fórmula o fuente de este documento si el profesor pregunta.

### Estimado de tiempo total: ~3-3.5 horas de desarrollo conjunto

(Nota comparativa: este proyecto es, en general, más simple de implementar que Rutherford/RBS, porque no requiere trayectorias curvas ni cinemática de colisión — solo una fórmula cerrada de dos variables discretas y datos tabulados fijos.)

---

## 8. Checklist final antes de entregar

- [ ] La fórmula de Rydberg usada en Panel A coincide exactamente con la derivación de la sección 1.3
- [ ] Los valores de la serie de Balmer (tabla 1.4) fueron confirmados con cálculo independiente (Python)
- [ ] Las longitudes de onda de He, Na, Ca (sección 4) fueron verificadas contra NIST, no estimadas a ojo
- [ ] El guion incluye la declaración explícita de la distinción Bohr-exacto (H) vs. datos reales tabulados (otros elementos) — sección 2
- [ ] El guion menciona brevemente la diferencia entre el modelo de órbitas de Bohr y la mecánica cuántica moderna (orbitales de probabilidad)
- [ ] La app no tiene texto largo de explicación — es apoyo visual, la explicación detallada va en el video
- [ ] Diseño limpio: tipografía legible, colores consistentes entre los tres paneles, sin elementos decorativos que no aporten información
- [ ] El espectro del Panel C usa posiciones de líneas reales, anotadas de un espectro público (SDSS) o de una fuente citable
- [ ] El video dura 5 minutos o menos, con reparto claro entre los 3 integrantes
- [ ] Se menciona al menos una aplicación tecnológica moderna real (JWST, clasificación estelar, o telescopios en Chile)

---

*Documento generado como plan de traspaso para continuar el desarrollo en un chat nuevo. Contiene todo el análisis físico, las decisiones de diseño, y las justificaciones necesarias para que la app sea presentada como académicamente rigurosa — en línea con el mismo estándar aplicado en el proyecto paralelo de Rutherford → RBS.*
