# Análisis Clase 02 — Distribución de Velocidades y Rapidez de Maxwell-Boltzmann

**Módulo:** Termodinámica y Teoría Atómica Precuántica | **Docente:** Dr. Julio Eduardo Oliva Zapata | **Fecha:** 22 de mayo de 2026

---

## 1. El Salto Conceptual de Maxwell: Del Promedio a la Distribución

En un gas diluido en equilibrio, las moléculas experimentan miles de millones de colisiones elásticas por segundo, redistribuyendo continuamente el momento y la energía. El equilibrio térmico macroscópico no corresponde a una rapidez uniforme, sino a un estado estacionario caracterizado por una **función de distribución estadística continua**.

James Clerk Maxwell (1860) dedujo la forma funcional de esta distribución combinando dos principios fundamentales:
1. **Isotropía espacial:** En ausencia de fuerzas externas o flujo macroscópico, la probabilidad $f(\vec{v})$ depende exclusivamente de la magnitud $v^2 = v_x^2 + v_y^2 + v_z^2$.
2. **Independencia estadística:** Las componentes cartesianas son mutuamente independientes: $f(\vec{v}) = g(v_x) g(v_y) g(v_z)$.

La ecuación funcional $\ln \phi(v_x^2 + v_y^2 + v_z^2) = \ln g(v_x) + \ln g(v_y) + \ln g(v_z)$ exige que $\frac{d}{d(v_x^2)}\ln g(v_x) = -\alpha = \text{cte}$. Integrando y normalizando con $\langle v_x^2\rangle = k_B T / m$, se obtiene la gaussiana unidimensional:

$$\boxed{g(v_x) = \left(\frac{m}{2\pi k_B T}\right)^{1/2} \exp\left(-\frac{m v_x^2}{2 k_B T}\right)}$$

---

## 2. Distribución de Rapidez Escalar $P(v)$

Integrando la distribución tridimensional sobre cascarones esféricos en el espacio de velocidades ($d^3v = 4\pi v^2 dv$), la densidad de probabilidad para la rapidez escalar $v \ge 0$ resulta:

$$\boxed{P(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2 k_B T}\right)}$$

La curva surge de la competencia entre dos factores físicos:
- **Factor geométrico ($v^2$):** Para $v \to 0$, el volumen del cascarón esférico en el espacio de velocidades tiende a cero, impidiendo que haya partículas con velocidad estrictamente nula.
- **Factor de Boltzmann ($\exp(-mv^2 / 2k_B T)$):** Para velocidades altas, el costo de energía cinética suprime exponencialmente la probabilidad.

---

## 3. Momentos Estadísticos de Rapidez

La diferenciación e integración de $P(v)$ permite deducir con exactitud las tres velocidades características del gas:

1. **Rapidez más probable ($v_{\text{mp}}$):** Punto culminante de la curva ($\frac{dP}{dv} = 0$):
   $$v_{\text{mp}} = \sqrt{\frac{2 k_B T}{m}} \approx 1.414 \sqrt{\frac{k_B T}{m}}$$
2. **Rapidez media ($\langle v\rangle$):** Primer momento estadístico ($\int_0^\infty v P(v) dv$):
   $$\langle v\rangle = \sqrt{\frac{8 k_B T}{\pi m}} \approx 1.596 \sqrt{\frac{k_B T}{m}}$$
3. **Rapidez cuadrática media ($v_{\text{rms}}$):** Raíz del segundo momento ($\sqrt{\int_0^\infty v^2 P(v) dv}$):
   $$v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}} \approx 1.732 \sqrt{\frac{k_B T}{m}}$$

Debido a la asimetría de la cola exponencial térmica, se cumple siempre la **jerarquía universal**:
$$\boxed{v_{\text{mp}} < \langle v\rangle < v_{\text{rms}}}$$

---

## 4. Efectos de la Temperatura y la Masa Molar

Tal como se analizó en el cuaderno computacional `Maxwellianas.nb`:
- **Aumento de temperatura ($T$):** Ensancha la distribución y desplaza el máximo hacia mayores rapideces ($\propto \sqrt{T}$), disminuyendo la altura del pico para preservar el área total unitaria.
- **Variación de masa ($m$):** A igual temperatura, gases livianos como el hidrógeno o helio presentan rapideces térmicas mucho mayores que gases pesados como el xenón o argón, explicando por qué los planetas rocosos pequeños pierden sus gases livianos hacia el espacio.

---

## 5. Conclusiones de la Clase

1. Las velocidades moleculares en equilibrio térmico no son uniformes, sino que obedecen una distribución gaussiana continua en cada coordenada cartesiana.
2. La densidad de rapidez $P(v)$ presenta un comportamiento asimétrico dominado por $v^2$ cerca del origen y por $\exp(-mv^2/2k_BT)$ a altas velocidades.
3. Se verificó analíticamente la jerarquía universal de velocidades: $v_{\text{mp}} : \langle v\rangle : v_{\text{rms}} = \sqrt{2} : \sqrt{8/\pi} : \sqrt{3}$.
4. La distribución de Maxwell constituye la base de equilibrio estadístico a partir de la cual se deducen los fenómenos de transporte fuera del equilibrio (Clase 03).
