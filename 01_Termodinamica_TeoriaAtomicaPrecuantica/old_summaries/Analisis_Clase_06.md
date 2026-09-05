# Análisis de Clase 06 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Encabezado

| Campo | Detalle |
|-------|---------|
| **Módulo** | Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1) |
| **Docente** | Prof. Julio Eduardo Oliva Zapata |
| **Fecha** | 19 de junio de 2026 |
| **Duración** | 3 h 19 min |
| **Resultados de aprendizaje** | Física estadística / mecánica estadística: microestados y macroestados; hipótesis de equiprobabilidad de Boltzmann; derivación de la fórmula de Sackur–Tetrode; entropía de Boltzmann $S = k_B\ln\Omega$; paradoja de Gibbs e indistinguibilidad cuántica; capacidad calorífica de sales paramagnéticas; resolución definitiva de la paradoja de Gibbs |

---

## Nota sobre las fuentes

> **Nota especial:** La Clase 06 es la última del módulo y no tiene diapositivas formales. El Prof. Oliva escribió directamente en tablet (notas a mano, `Clase 6 Notas a mano.pdf`). La transcripción es la fuente primaria dominante. Se utiliza bibliografía especializada para desarrollar con rigor los temas tratados.

---

## Fuentes Utilizadas

- **Transcripción de video:** `Clase_06/grabacion/Clase del Diplomado de Física Moderna.docx` (fuente principal, ~132 KB, procesada en su totalidad).  
- **Notas a mano:** `Clase_06/Clase 6 Notas a mano.pdf`.  
- **Libro de referencia central:** Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021).  
- **Bibliografía de apoyo:** Reif, *Fundamentals of Statistical and Thermal Physics* (1965); Kittel & Kroemer, *Thermal Physics* (1980); Huang, *Statistical Mechanics* (Wiley, 1987).

---

## 1. Recapitulación y motivación: la paradoja de Gibbs como punto de partida

*Fuente: Transcripción, minutos 0–20. Fuente complementaria: Weinberg, sec. 3.5.*

El Prof. Oliva abrió la última clase del módulo retomando los dos resultados centrales de la Clase 05:

1. **Entropía termodinámica del gas ideal** (desde la primera y segunda leyes):

$$S_\text{TD}(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln V + C,$$

donde $C$ es una constante de integración arbitraria.

2. **Paradoja de Gibbs:** al mezclar dos porciones iguales del mismo gas ideal a la misma temperatura y presión, la entropía termodinámica predice un incremento:

$$\Delta S = 2Nk_B\ln 2 > 0,$$

cuando debería ser nulo (no hay ningún efecto físico observable al retirar la pared).

La clase 06 tuvo como objetivo resolver esta paradoja mediante la **mecánica estadística** —el marco microscópico que "explica" las leyes termodinámicas— y derivar explícitamente la fórmula de Sackur–Tetrode, que sí resuelve la paradoja.

---

## 2. Entropía termodinámica del gas ideal: derivación y extensividad

*Fuente: Transcripción, minutos 5–40. Fuente complementaria: Callen, cap. 3.*

### 2.1 Derivación desde el primer y segundo principio

La entropía termodinámica se calcula integrando $dS = \delta Q_\text{rev}/T$ a lo largo de un camino cuasi estático. Para el gas ideal monoatómico:

- **A volumen constante:** $\delta Q_V = C_V\, dT = \frac{3}{2}Nk_B\, dT$, por lo que $dS_V = \frac{3}{2}Nk_B\frac{dT}{T}$.
- **A temperatura constante:** $\delta Q_T = P\, dV = \frac{Nk_BT}{V}\, dV$, por lo que $dS_T = Nk_B\frac{dV}{V}$.

Integrando ambos procesos:

$$S(T, V, N) = \frac{3}{2}Nk_B\ln T + Nk_B\ln V + C(N),$$

donde $C(N)$ es una constante que puede depender de $N$ pero que la termodinámica no puede determinar.

### 2.2 La paradoja de Gibbs en detalle

Consideremos el experimento mental exacto:

**Estado inicial:** dos porciones del mismo gas ideal, cada una con $N$ partículas a temperatura $T$ y volumen $V$, separadas por una pared.

$$S_\text{inicial} = 2\left(\frac{3}{2}Nk_B\ln T + Nk_B\ln V\right) = 3Nk_B\ln T + 2Nk_B\ln V.$$

**Estado final:** se retira la pared. El sistema conjunto tiene $2N$ partículas, volumen $2V$, temperatura $T$ (sin cambio, ya que ambas partes estaban en equilibrio térmico).

$$S_\text{final} = \frac{3}{2}(2N)k_B\ln T + (2N)k_B\ln(2V) = 3Nk_B\ln T + 2Nk_B(\ln V + \ln 2).$$

**Diferencia:**

$$\Delta S = S_\text{final} - S_\text{inicial} = 2Nk_B\ln 2 \approx 1{,}39\, Nk_B.$$

Para $N = N_A = 6{,}022\times10^{23}$ (un mol): $\Delta S \approx 1{,}39\, R \approx 11{,}5$ J/K. Un cambio no nulo y observable en principio.

**La contradicción:** macroscópicamente, al retirar la pared entre dos porciones del mismo gas en equilibrio no ocurre ningún cambio observable —la presión, temperatura y densidad son idénticas a ambos lados. El desorden físico no debería haber aumentado.

### 2.3 Diagnóstico de la paradoja

La raíz del problema está en que la entropía termodinámica $\propto Nk_B\ln V$ **no es extensiva** con el número de partículas: al duplicar $N$ y $V$ simultáneamente, la entropía no se duplica como debería:

$$S(2N, 2V, T) = 3Nk_B\ln T + 2Nk_B\ln(2V) = 2S(N, V, T) + 2Nk_B\ln 2 \neq 2S.$$

La expresión termodinámica falla en garantizar la extensividad de $S$.

---

## 3. Fundamentos de mecánica estadística

*Fuente: Transcripción, minutos 40–80. Fuente complementaria: Reif, cap. 6; Kittel & Kroemer, cap. 1.*

### 3.1 Macroestados y microestados

**Macroestado:** especificación de las variables macroscópicas medibles del sistema (por ejemplo, $U$, $V$, $N$ para un sistema aislado). Un macroestado no determina completamente el estado microscópico del sistema.

**Microestado:** especificación completa del estado de cada uno de los constituyentes del sistema (posición y velocidad de cada partícula, o spin de cada sitio). Un microestado es compatible con un macroestado si los valores de las variables macroscópicas calculados a partir de ese microestado coinciden con los del macroestado.

**Ejemplo didáctico (sistema de 3 spines):**

El Prof. Oliva introdujo el ejemplo de tres "flechas" (espines) que pueden apuntar hacia arriba ($\uparrow$) o hacia abajo ($\downarrow$). El número total de microestados es $2^3 = 8$:

| # | Flechas | $s$ |
|---|---------|-----|
| 1 | $\uparrow\uparrow\uparrow$ | 3 |
| 2 | $\uparrow\uparrow\downarrow$ | 1 |
| 3 | $\uparrow\downarrow\uparrow$ | 1 |
| 4 | $\downarrow\uparrow\uparrow$ | 1 |
| 5 | $\uparrow\downarrow\downarrow$ | −1 |
| 6 | $\downarrow\uparrow\downarrow$ | −1 |
| 7 | $\downarrow\downarrow\uparrow$ | −1 |
| 8 | $\downarrow\downarrow\downarrow$ | −3 |

donde $s = N_\uparrow - N_\downarrow$ es el "spin total" (definición del macroestado).

- Si el macroestado se define por $s = 1$: hay **3 microestados compatibles** ($\Omega = 3$).
- Si el macroestado se define por $s = 3$: hay **1 microestado compatible** ($\Omega = 1$).
- Si el macroestado se define solo por el número total $N = 3$ (sin especificar $s$): hay **8 microestados compatibles** ($\Omega = 8$).

### 3.2 Hipótesis de Boltzmann (equiprobabilidad)

**Enunciado:** Para un sistema aislado, todos los microestados compatibles con el macroestado tienen la misma probabilidad de ocurrir.

Matemáticamente, si hay $\Omega$ microestados compatibles, la probabilidad de cada uno es:

$$P_i = \frac{1}{\Omega}, \quad i = 1, \ldots, \Omega.$$

**Justificación:** la hipótesis es, en última instancia, empírica. Su validez se establece a posteriori, verificando que las predicciones derivadas de ella concuerdan con los experimentos. Como señaló el Prof. Oliva: "la historia ha mostrado que es una buena hipótesis".

**Implicación filosófica:** la hipótesis de Boltzmann es la "democracia en la ignorancia": ante el desconocimiento del microestado real, asignamos la misma probabilidad a todos los compatibles.

### 3.3 Probabilidad de un macroestado

La probabilidad de que el sistema esté en un macroestado caracterizado por un valor dado de $s$ es:

$$P(s) = \frac{\Omega(s)}{\Omega_\text{total}},$$

donde $\Omega(s)$ es el número de microestados compatibles con ese valor de $s$ y $\Omega_\text{total}$ es el número total de microestados.

**Ejemplo (continuación):** $P(s=1) = 3/8$, $P(s=3) = 1/8$, $P(s=-1) = 3/8$, $P(s=-3) = 1/8$.

---

## 4. Entropía de Boltzmann y derivación de la fórmula de Sackur–Tetrode

*Fuente: Transcripción, minutos 80–140. Fuente complementaria: Reif, cap. 9; Huang, cap. 6.*

### 4.1 Fórmula de Boltzmann

La entropía estadística se define como:

$$\boxed{S = k_B\ln\Omega,}$$

donde $\Omega$ es el número de microestados compatibles con el macroestado del sistema.

**Propiedades matemáticas:**
1. $S \geq 0$ (pues $\Omega \geq 1$).
2. Si el sistema está compuesto de partes independientes $A$ y $B$: $\Omega_{A+B} = \Omega_A \cdot \Omega_B$, por lo que $S_{A+B} = S_A + S_B$ (extensividad).
3. $S$ es máxima cuando $\Omega$ es máxima (estado de equilibrio = estado de máxima entropía).

### 4.2 Conteo de microestados del gas ideal

Para un gas ideal de $N$ partículas monoatómicas en un volumen $V$ con energía total $U$, el número de microestados se calcula en el espacio de fases de $6N$ dimensiones (3 coordenadas y 3 momentos por partícula):

$$\Omega(U, V, N) = \frac{1}{h^{3N}} \cdot V^N \cdot \mathcal{A}_{3N}(p_\text{max}),$$

donde $\mathcal{A}_{3N}(r)$ es el "área" de la hiperesfera de radio $r = \sqrt{2mU}$ en $3N$ dimensiones, y $h^{3N}$ aparece como la celda de volumen mínima en el espacio de fases (cuantización de Planck).

La indistinguibilidad de las partículas impone dividir por $N!$ (número de permutaciones de partículas idénticas que no crean nuevos microestados):

$$\Omega_\text{corregido}(U, V, N) = \frac{1}{N!} \cdot \frac{V^N}{h^{3N}} \cdot \frac{(2\pi m U)^{3N/2}}{\left(\frac{3N}{2}\right)!}.$$

### 4.3 La fórmula de Sackur–Tetrode

Aplicando $S = k_B\ln\Omega_\text{corregido}$ y la aproximación de Stirling ($\ln N! \approx N\ln N - N$, $\ln\Gamma(3N/2+1) \approx \frac{3N}{2}\ln\frac{3N}{2} - \frac{3N}{2}$):

$$\boxed{S = Nk_B\left[\ln V - \ln N + \frac{3}{2}\ln T + \frac{3}{2}\ln\left(\frac{2\pi mk_B}{h^2}\right) + \frac{5}{2}\right].}$$

Esta es la **ecuación de Sackur–Tetrode** (1911–1912), que puede reescribirse de manera compacta:

$$S = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].$$

### 4.4 Propiedades de la fórmula de Sackur–Tetrode

**1. Extensividad:** $S(\lambda N, \lambda V, T) = \lambda\, S(N, V, T)$ para cualquier $\lambda > 0$.

*Demostración:* el factor $V/N$ bajo el logaritmo garantiza que al escalar simultáneamente $V \to \lambda V$ y $N \to \lambda N$, el argumento del logaritmo queda invariante.

**2. Resolución de la paradoja de Gibbs:** para gases idénticos:

$$\Delta S_\text{mezcla} = S(2N, 2V, T) - 2S(N, V, T) = 0.$$

**3. Dependencia en $h$:** la presencia de la constante de Planck $h$ en la fórmula de Sackur–Tetrode indica que la entropía de un gas clásico tiene raíces cuánticas profundas. **No se puede calcular el valor absoluto de la entropía sin mecánica cuántica**.

**4. Límite de baja temperatura:** cuando $T \to 0$, la fórmula predice $S \to -\infty$, lo que es una señal de que la física cuántica no relativista de partículas idénticas invalida la aproximación clásica a bajas temperaturas.

---

## 5. Resolución completa de la paradoja de Gibbs

*Fuente: Transcripción, minutos 140–165. Fuente complementaria: Reif, sec. 9.7.*

### 5.1 La hipótesis de indistinguibilidad

El factor $1/N!$ en el conteo de microestados proviene de la **indistinguibilidad cuántica** de las partículas idénticas:

> Dos configuraciones que difieren solo en qué partícula ocupa qué estado cuántico **no son microestados distintos** si las partículas son idénticas.

Esta propiedad —que no tiene análogo en la física clásica— implica que el número de microestados verdaderamente distinguibles es $N!$ veces menor que el conteo clásico.

### 5.2 Verificación explícita

Con la fórmula de Sackur–Tetrode:

$$S_\text{inicial} = 2 \cdot Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].$$

$$S_\text{final} = (2N)k_B\left[\ln\frac{2V}{2N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right] = 2Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].$$

$$\Delta S = S_\text{final} - S_\text{inicial} = 0. \quad \checkmark$$

### 5.3 Para gases diferentes

Si los gases a ambos lados de la pared son de distinto tipo (diferente masa $m_1 \neq m_2$), entonces los microestados con partícula del tipo 1 en la "mitad derecha" y del tipo 2 en la "mitad izquierda" SÍ son distinguibles de las configuraciones con tipos intercambiados. En este caso:

$$\Delta S_\text{mezcla} = Nk_B\ln 2 + Nk_B\ln 2 = 2Nk_B\ln 2 > 0.$$

Este es el resultado correcto: mezclar gases distintos sí aumenta la entropía (el sistema se vuelve más desordenado al mezclarse).

---

## 6. Modelo de espines y capacidad calorífica de sales paramagnéticas

*Fuente: Transcripción, minutos 50–90. Fuente complementaria: Kittel & Kroemer, cap. 2; Reif, sec. 7.1.*

### 6.1 El modelo

El sistema de $N$ espines de Boltzmann (sin interacción entre ellos) en un campo magnético externo $B$ es un modelo exactamente soluble que permite calcular la capacidad calorífica desde principios microscópicos.

Cada espín puede estar en dos estados:
- **Paralelo al campo** ($\uparrow$): energía $\varepsilon_\uparrow = -\mu_B B$ (estado de baja energía).
- **Antiparalelo al campo** ($\downarrow$): energía $\varepsilon_\downarrow = +\mu_B B$ (estado de alta energía).

donde $\mu_B = e\hbar/(2m_e) = 9{,}274\times10^{-24}$ J/T es el magnetón de Bohr.

### 6.2 Número de microestados compatibles con una energía dada

Si hay $N_\uparrow$ espines paralelos y $N_\downarrow = N - N_\uparrow$ antiparalelos, la energía total es:

$$U = N_\uparrow\varepsilon_\uparrow + N_\downarrow\varepsilon_\downarrow = -(N_\uparrow - N_\downarrow)\mu_BB = -M\mu_BB,$$

donde $M = N_\uparrow - N_\downarrow$ es la magnetización total (análoga a la variable $s$ del ejemplo didáctico).

El número de formas de elegir $N_\uparrow$ espines paralelos de entre $N$ es el coeficiente binomial:

$$\Omega(N, N_\uparrow) = \binom{N}{N_\uparrow} = \frac{N!}{N_\uparrow!\, (N-N_\uparrow)!}.$$

### 6.3 Entropía del sistema de espines

$$S = k_B\ln\Omega = k_B\ln\binom{N}{N_\uparrow} \approx k_B\left[N\ln N - N_\uparrow\ln N_\uparrow - N_\downarrow\ln N_\downarrow\right],$$

(aproximación de Stirling). Introduciendo $f = N_\uparrow/N$ (fracción de espines paralelos):

$$S = -Nk_B\left[f\ln f + (1-f)\ln(1-f)\right].$$

Esta expresión es la **entropía de Shannon** para una variable binaria, que tiene máximo en $f = 1/2$ (igual número de espines hacia arriba y hacia abajo: máximo desorden).

### 6.4 Temperatura y capacidad calorífica

Usando $1/T = (\partial S/\partial U)_{N,B}$ y la relación $U = -N\mu_BB(2f-1)$:

$$f = \frac{1}{1 + e^{-2\mu_BB/k_BT}} = \frac{1}{2}\left(1 + \tanh\frac{\mu_BB}{k_BT}\right).$$

La energía interna queda:

$$U(T) = -N\mu_BB\tanh\frac{\mu_BB}{k_BT}.$$

La capacidad calorífica a campo constante es:

$$C_B = \left(\frac{\partial U}{\partial T}\right)_B = Nk_B\left(\frac{\mu_BB}{k_BT}\right)^2 \frac{1}{\cosh^2(\mu_BB/k_BT)}.$$

**Comportamiento asintótico:**
- $T \to \infty$ (límite de alta temperatura): $C_B \to Nk_B(\mu_BB/k_BT)^2 \to 0$.
- $T \to 0$ (límite de baja temperatura): $C_B \to 0$ (exponencialmente).
- La capacidad calorífica tiene un **máximo** ("pico de Schottky") a $T^* \approx 0{,}83\,\mu_BB/k_B$.

Este comportamiento es radicalmente distinto del de los sólidos armónicos (ley de Dulong-Petit) o los gases ideales, y se ha verificado experimentalmente en sales paramagnéticas como CeSO₄·9H₂O y varios compuestos de iones de tierras raras.

---

## 7. La mecánica estadística como base microscópica de la termodinámica

*Fuente: Transcripción, minutos 155–190. Fuente complementaria: Huang, cap. 1.*

### 7.1 La jerarquía conceptual

El Prof. Oliva expuso la estructura conceptual del módulo:

```
Mecánica cuántica + Mecánica clásica
         ↓
Mecánica estadística (física microscópica)
         ↓
Termodinámica (fenomenología macroscópica)
```

La termodinámica es un **marco conceptual efectivo**: sus leyes son verdaderas y útiles sin necesidad de conocer la física microscópica. Sin embargo, su significado profundo solo se revela a través de la mecánica estadística.

### 7.2 La pregunta sobre la jerarquía infinita

El Prof. Oliva planteó la pregunta filosófica: ¿es la mecánica estadística a su vez un marco efectivo de algo más fundamental? No se conoce la respuesta. La existencia de una jerarquía potencialmente infinita de marcos conceptuales es una pregunta abierta en los fundamentos de la física.

### 7.3 El papel de la constante de Planck

La aparición de $h$ en la fórmula de Sackur–Tetrode demuestra que **la termodinámica estadística no es completamente clásica**: aunque las partículas se traten como clásicas en su dinámica, el conteo de microestados requiere establecer una celda mínima de volumen $h^{3N}$ en el espacio de fases —lo que es esencialmente cuántico. Sin este piso cuántico, la entropía sería divergente y la termodinámica estaría mal definida.

---

## 8. Síntesis del módulo: recorrido histórico y conceptual

*Fuente: Transcripción, minutos 190–210. Fuente complementaria: Weinberg, prólogo.*

La Clase 06 cerró el primer módulo del Diplomado. El Prof. Oliva propuso a los estudiantes un trabajo final de 5 páginas sobre cualquiera de las seis clases, como síntesis de aprendizaje.

### 8.1 Los seis temas del módulo

| Clase | Tema central | Hito histórico |
|-------|-------------|----------------|
| 1 | Gas ideal, teoría cinética, átomo | Boltzmann (1872), Maxwell (1859) |
| 2 | Distribución de Maxwell–Boltzmann | Maxwell (1860), Boltzmann (1868) |
| 3 | Movimiento browniano, Fokker–Planck | Einstein (1905), Perrin (1908) |
| 4 | Termodinámica: ecuación de estado, fases | Van der Waals (1873), Gibbs (1876) |
| 5 | Segunda ley, entropía termodinámica | Clausius (1865), Kelvin (1851) |
| 6 | Física estadística, Sackur–Tetrode, indistinguibilidad | Boltzmann (1877), Sackur–Tetrode (1911–12) |

### 8.2 El mensaje central del módulo

La física clásica del siglo XIX (termodinámica y teoría cinética) es extraordinariamente exitosa en predecir propiedades macroscópicas de los gases y de los materiales. Sin embargo, en su propio seno contiene semillas que apuntan inevitablemente hacia la física cuántica:
- La paradoja de Gibbs requiere la indistinguibilidad cuántica.
- La constante de Planck es necesaria para calcular la entropía absoluta.
- El movimiento browniano y su relación con la temperatura anuncian la relación de Einstein–Smoluchowski.
- Las anomalías de las capacidades caloríficas a bajas temperaturas (sales paramagnéticas, sólidos cuánticos) no se pueden explicar clásicamente.

---

## Conclusiones de la Clase

1. **La entropía termodinámica $\propto Nk_B\ln V$ no es extensiva**, lo que da lugar a la paradoja de Gibbs: la entropía predice un aumento de $\Delta S = 2Nk_B\ln 2$ al mezclar gases idénticos, cuando debería ser nulo.

2. **La mecánica estadística** es el marco microscópico que explica las leyes termodinámicas. Sus ingredientes fundamentales son: la distinción macroestado/microestado, y la hipótesis de equiprobabilidad de Boltzmann.

3. **Hipótesis de Boltzmann:** para un sistema aislado, todos los microestados compatibles tienen la misma probabilidad. La entropía estadística es $S = k_B\ln\Omega$.

4. **Fórmula de Sackur–Tetrode:** la entropía del gas ideal monoatómico derivada desde la física microscópica (con indistinguibilidad cuántica, $1/N!$ en $\Omega$) es:
$$S = Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right].$$

5. Esta fórmula es **extensiva** y **resuelve la paradoja de Gibbs**: $\Delta S_\text{mezcla} = 0$ para gases idénticos.

6. **La indistinguibilidad cuántica** (dividir $\Omega$ por $N!$) es la hipótesis física clave que resuelve la paradoja y anticipa la mecánica cuántica.

7. **La constante de Planck $h$ es necesaria** para calcular el valor absoluto de la entropía del gas ideal: la termodinámica no puede ser completamente separada de la física cuántica.

8. **Sistema de espines:** el modelo de $N$ espines sin interacción en campo magnético $B$ permite calcular exactamente $\Omega$, $S$, $T$ y la capacidad calorífica, que presenta un pico de Schottky a $T^* \approx 0{,}83\mu_BB/k_B$.

9. **Estructura conceptual:** la mecánica estadística es el puente entre la física microscópica (mecánica cuántica y clásica) y la termodinámica macroscópica.

10. **Mensaje del módulo:** la física clásica del siglo XIX apunta inevitablemente a la mecánica cuántica; la paradoja de Gibbs, la constante de Planck en la entropía y las anomalías de capacidades caloríficas son los primeros indicios.

---

## Referencias Bibliográficas

### 1. Artículos científicos originales (fuentes primarias)

- Sackur, O. (1911). *Die Anwendung der kinetischen Theorie der Gase auf chemische Probleme.* Annalen der Physik, **36**, 958–980.
- Tetrode, H. (1912). *Die chemische Konstante der Gase und das elementare Wirkungsquantum.* Annalen der Physik, **38**, 434–442; **39**, 255–256.
- Boltzmann, L. (1877). *Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung.* Sitzungsberichte der Akademie der Wissenschaften, **76**, 373–435.
- Einstein, A. (1907). *Die Plancksche Theorie der Strahlung und die Theorie der spezifischen Wärme.* Annalen der Physik, **22**, 180–190.
- Schottky, W. (1922). *Über die Drehung der Atomachsen in festen Körpern.* Physikalische Zeitschrift, **23**, 448.

### 2. Textos del curso

- Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press. Caps. 3–4.

### 3. Textos universitarios estándar

- Reif, F. (1965). *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill. Caps. 6, 7, 9.
- Kittel, C., & Kroemer, H. (1980). *Thermal Physics* (2ª ed.). W. H. Freeman. Caps. 1–4.
- Huang, K. (1987). *Statistical Mechanics* (2ª ed.). John Wiley & Sons. Caps. 1, 6.
- Pathria, R. K., & Beale, P. D. (2011). *Statistical Mechanics* (3ª ed.). Elsevier. Caps. 1–3.

### 4. Recursos de libre acceso verificados

- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, cap. 40: *The Principles of Statistical Mechanics*. [https://www.feynmanlectures.caltech.edu/I_40.html](https://www.feynmanlectures.caltech.edu/I_40.html)
- Feynman, R. P. et al. (1963). *The Feynman Lectures on Physics*, Vol. I, cap. 46: *The Ratchet and the Pawl*. [https://www.feynmanlectures.caltech.edu/I_46.html](https://www.feynmanlectures.caltech.edu/I_46.html)
- Sethna, J. P. (2021). *Statistical Mechanics: Entropy, Order Parameters, and Complexity* (2ª ed.). Oxford. Disponible en: [https://sethna.lassp.cornell.edu/StatMech/EntropyOrderParametersComplexity20.pdf](https://sethna.lassp.cornell.edu/StatMech/EntropyOrderParametersComplexity20.pdf)

### 5. Historia y filosofía de la física

- Brush, S. G. (1983). *Statistical Physics and the Atomic Theory of Matter*. Princeton University Press. Caps. 4–5.
- Gallavotti, G. (1999). *Statistical Mechanics: A Short Treatise*. Springer. Cap. 1.
- Cercignani, C. (1998). *Ludwig Boltzmann: The Man Who Trusted Atoms*. Oxford University Press.
