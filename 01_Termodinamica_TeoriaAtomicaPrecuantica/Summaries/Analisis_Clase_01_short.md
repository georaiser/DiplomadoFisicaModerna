# Análisis Clase 01 — Del Vacío de Torricelli al Modelo Cinético de los Gases

**Módulo:** Termodinámica y Teoría Atómica Precuántica | **Docente:** Dr. Julio Eduardo Oliva Zapata | **Fecha:** 08 de mayo de 2026

---

## 1. El Colapso del *Horror Vacui* y la Presión Atmosférica

La física previa al siglo XVII interpretaba el ascenso del agua en bombas aspirantes bajo el dogma escolástico de que "la naturaleza aborrece el vacío". Evangelista Torricelli (1643) refutó esta concepción al demostrar que vivimos en el fondo de un océano de aire dotado de masa finita.

Utilizando mercurio ($\rho \approx 13600\text{ kg/m}^3$), Torricelli construyó el primer barómetro de tubo invertido. La columna se estabilizó en $h = 760\text{ mm}$, dejando un vacío superior y demostrando el equilibrio hidrostático:

$$P_0 = 
ho_{\text{Hg}}\, g\, h \approx 101.3\text{ kPa} = 1\text{ atm}$$

El experimento del Puy de Dôme (Pascal, 1648) ratificó que la presión disminuye con la altitud, desterrando de la ciencia la causa final del *horror vacui*.

---

## 2. Síntesis de las Leyes Empíricas y Gas Ideal

A lo largo de siglo y medio de mediciones macroscópicas se establecieron tres regularidades empíricas fundamentales:

1. **Ley de Boyle-Mariotte (1662):** $P \cdot V = \text{cte}$ a temperatura fija ($T = \text{cte}$).
2. **Ley de Charles y Gay-Lussac (1787, 1802):** La dilatación isobárica $V(T_C) = V_0(1 + \beta T_C)$ con $\beta \approx 1/273.15\text{ °C}^{-1}$ reveló la existencia física del **cero absoluto**, definiendo la escala Kelvin: $V/T = \text{cte}$ a presión constante.
3. **Hipótesis de Avogadro (1811):** Volúmenes idénticos a igual $P$ y $T$ contienen el mismo número de moléculas.

Estas leyes se unifican en la **ecuación de estado del gas ideal**:

$$\boxed{P V = n R T = N k_B T}$$

con $R \approx 8.314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ y $k_B = R/N_A \approx 1.3806 \times 10^{-23}\text{ J/K}$.

---

## 3. Deducción Cinética de la Presión (Bernoulli y Clausius)

Daniel Bernoulli (1738) y Rudolf Clausius (1857) explicaron la presión macroscópica como el bombardeo incesante de moléculas newtonianas puntuales contra las paredes del recipiente.

En una colisión elástica con una pared perpendicular a $x$, la molécula invierte su componente normal ($v_x \to -v_x$), transfiriendo un momento $\Delta p_x = 2 m v_x$. El número de impactos en un área $A$ durante un tiempo $\Delta t$ es $\Delta N = \frac{1}{2} n_V A v_x \Delta t$. La fuerza neta ejercida y la presión resultante resultan:

$$P = \frac{F}{A} = \frac{N}{V} m \langle v_x^2\rangle$$

Invocando la **isotropía espacial** del gas en equilibrio ($\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle = \frac{1}{3}\langle v^2\rangle$):

$$\boxed{P = \frac{1}{3} \frac{N}{V} m \langle v^2\rangle \implies P V = \frac{1}{3} N m \langle v^2\rangle}$$

---

## 4. Significado Microscópico de la Temperatura

Comparando la deducción mecanicista $P V = \frac{2}{3} N \left(\frac{1}{2} m \langle v^2\rangle\right)$ con la ley empírica $P V = N k_B T$, se deduce la energía cinética media por partícula:

$$\boxed{\langle E_k\rangle = \frac{1}{2} m \langle v^2\rangle = \frac{3}{2} k_B T}$$

La temperatura absoluta $T$ es una medida directa de la energía cinética traslacional molecular. A cada grado de libertad cartesiano independiente le corresponde una energía media de $\frac{1}{2} k_B T$.

La rapidez cuadrática media molecular está dada por:

$$v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}} = \sqrt{\frac{3 R T}{M_{\text{mol}}}}$$

Para el nitrógeno ($N_2$) a $300\text{ K}$, $v_{\text{rms}} \approx 517\text{ m/s}$, evidenciando velocidades térmicas superiores a la velocidad del sonido.

---

## 5. Conclusiones de la Clase

1. El barómetro de Torricelli desterró el *horror vacui* y estableció la presión atmosférica como una fuerza física medible ($101.3\text{ kPa}$).
2. La escala de temperatura absoluta Kelvin emerge de la extrapolación lineal del volumen de los gases hacia cero a $-273.15\text{ °C}$.
3. La presión no es una propiedad elástica estática, sino una consecuencia dinámica del cambio de momento de colisiones moleculares elásticas: $P = \frac{1}{3} n m \langle v^2\rangle$.
4. La temperatura es proporcional a la energía cinética media traslacional: $\langle E_k\rangle = \frac{3}{2} k_B T$.
5. La aparente contradicción entre rapideces térmicas de $\sim 500\text{ m/s}$ y difusión macroscópica lenta revela la existencia de colisiones continuas y conduce a la necesidad de formular una distribución estadística de velocidades.
