# Resumen Ejecutivo: Clase 01 — Fundamentos de Relatividad Especial y Experimento de Michelson-Morley

**Diplomado en Física Moderna — Módulo 03: Relatividad Especial**  
**Docente:** Dr. Guillermo Rubilar Alegría  
**Fecha:** 31 de julio de 2026  
**Documento:** `Analisis_Clase_01_short.md`

---

## 1. La Crisis de la Física Clásica hacia 1900
La Mecánica Newtoniana se sustenta en el Principio de Relatividad de Galileo y las nociones absolutas de espacio y tiempo, siendo invariante bajo las transformaciones galileanas:

$$\vec{x}' = \vec{x} - \vec{v} t, \qquad t' = t, \qquad \vec{u}' = \vec{u} - \vec{v}, \qquad \vec{a}' = \vec{a}$$

Por el contrario, las Ecuaciones de Maxwell predicen la propagación de ondas electromagnéticas en el vacío con una rapidez constante $c = 1/\sqrt{\varepsilon_0 \mu_0} \approx 3 \times 10^8\text{ m/s}$, pero **no son invariantes bajo las transformaciones de Galileo**. Para conciliar ambas teorías, la física del siglo XIX postuló la existencia del **éter luminífero**, un medio mecánico universal de rigidez inmensa y densidad nula que definía el marco de reposo absoluto.

---

## 2. La Analogía Hidrodinámica del Río
Para una corriente de agua de velocidad $v$ y dos botes con rapidez propia $c > v$ que recorren trayectorias ortogonales de longitud $L$:

- **Tiempo Longitudinal (aguas abajo y aguas arriba):**
  $$t_\parallel = \frac{L}{c+v} + \frac{L}{c-v} = \frac{2Lc}{c^2-v^2} = \frac{2L}{c} \frac{1}{1-v^2/c^2} \approx \frac{2L}{c} \left(1 + \frac{v^2}{c^2}\right)$$

- **Tiempo Transversal (perpendicular a la corriente):**
  $$t_\perp = \frac{2L}{\sqrt{c^2-v^2}} = \frac{2L}{c} \frac{1}{\sqrt{1-v^2/c^2}} \approx \frac{2L}{c} \left(1 + \frac{1}{2}\frac{v^2}{c^2}\right)$$

- **Diferencia de Tiempos:**
  $$\Delta t = t_\parallel - t_\perp \approx \frac{L}{c} \frac{v^2}{c^2} > 0$$

El recorrido longitudinal siempre toma mayor tiempo que el transversal debido al retraso cuadrático generado por el tramo en contra de la corriente.

---

## 3. El Experimento de Michelson-Morley (1887)
Michelson y Morley emplearon un interferómetro óptico para detectar el "viento de éter" generado por el movimiento orbital terrestre ($v \approx 30\text{ km/s}$, $\beta = v/c = 10^{-4}$). Al rotar el instrumento $90^\circ$, la variación neta en la diferencia de tiempos de vuelo es:

$$\Delta(\Delta t) = \frac{2L v^2}{c^3}$$

El desplazamiento teórico esperado de franjas de interferencia para $L = 11.0\text{ m}$ y $\lambda = 590\text{ nm}$ era:

$$\Delta N = \frac{c \, \Delta(\Delta t)}{\lambda} = \frac{2 L v^2}{\lambda c^2} \approx 0.373 \approx 0.4 \text{ franjas}$$

**Resultado Experimental:**  
El desplazamiento observado fue $\Delta N < 0.01$ franjas (compatible con cero dentro del error experimental). El experimento demostró de manera concluyente la **inexistencia del viento de éter** y la isotropía de la rapidez de la luz.

---

## 4. Postulados de Einstein (1905)
Albert Einstein resolvió la crisis abandonando la hipótesis del éter y reformulando los principios fundamentales de la física:

1. **Principio de Relatividad:**  
   *Las leyes de la física (incluyendo mecánica y electromagnetismo) son idénticas en todos los sistemas de referencia inerciales.*
2. **Invarianza de la Rapidez de la Luz:**  
   *La rapidez de la luz en el vacío es una constante universal $c = 299\,792\,458\text{ m/s}$ en todos los sistemas inerciales, independiente del movimiento de la fuente y del observador.*

**Consecuencias Inmediatas:**
- Ruptura del tiempo absoluto newtoniano ($t' \neq t$).
- Relatividad de la simultaneidad.
- Necesidad de una nueva cinemática espacio-temporal (Transformaciones de Lorentz).

---

## 5. Conclusiones de la Clase
1. Las ecuaciones de Maxwell son incompatibles con la relatividad galileana.
2. El éter luminífero fue descartado experimentalmente por el resultado nulo de Michelson y Morley ($\Delta N < 0.01$).
3. Las hipótesis ad hoc de arrastre y contracción clásica fueron superadas por la formulación axiomática de Einstein.
4. La constancia universal de $c$ rige para cualquier observador inercial y redefine las nociones de espacio y tiempo.
