# Formulario Matemático Integral: Módulo 03 — Relatividad Especial

**Diplomado en Física Moderna — Módulo 03**  
**Docente:** Dr. Guillermo Rubilar Alegría (Universidad de Concepción)  
**Documento:** `Formulario_Modulo03.md`

---

## 1. Constantes Físicas Fundamentales

| Símbolo | Significado Físico | Valor Numérico en el SI | Unidades SI |
|---|---|---|---|
| $c$ | Rapidez de la luz en el vacío (definición exacta) | $299\,792\,458$ | $\text{m/s}$ |
| $\varepsilon_0$ | Permitividad eléctrica del vacío | $8.854\,187\,8128(13) \times 10^{-12}$ | $\text{F/m} = \text{C}^2/(\text{N}\cdot\text{m}^2)$ |
| $\mu_0$ | Permeabilidad magnética del vacío | $1.256\,637\,062\,12(19) \times 10^{-6}$ | $\text{N/A}^2 = \text{T}\cdot\text{m/A}$ |
| $h$ | Constante de Planck | $6.626\,070\,15 \times 10^{-34}$ | $\text{J}\cdot\text{s}$ |
| $\hbar \equiv h/(2\pi)$ | Constante reducida de Planck | $1.054\,571\,817 \times 10^{-34}$ | $\text{J}\cdot\text{s}$ |
| $e$ | Carga elemental del electrón | $1.602\,176\,634 \times 10^{-19}$ | $\text{C}$ |
| $m_e$ | Masa en reposo del electrón | $9.109\,383\,7015(28) \times 10^{-31}$ | $\text{kg}$ |
| $m_e c^2$ | Energía en reposo del electrón | $0.510\,998\,950\,00(15)$ | $\text{MeV}$ |
| $m_p$ | Masa en reposo del protón | $1.672\,621\,923\,69(51) \times 10^{-27}$ | $\text{kg}$ |
| $m_p c^2$ | Energía en reposo del protón | $938.272\,088\,16(29)$ | $\text{MeV}$ |
| $m_n$ | Masa en reposo del neutrón | $1.674\,927\,498\,04(95) \times 10^{-27}$ | $\text{kg}$ |
| $u$ | Unidad de masa atómica unificada | $1.660\,539\,066\,60(50) \times 10^{-27}$ | $\text{kg}$ |
| $u c^2$ | Equivalente energético de $1\text{ u}$ | $931.494\,102\,42(28)$ | $\text{MeV}$ |

---

## 2. Cinemática Clásica y Transformaciones de Galileo

| Ecuación | Variables y Parámetros | Unidades SI | Descripción Matemática |
|---|---|---|---|
| $\vec{x}' = \vec{x} - \vec{v}t$ | $\vec{x}, \vec{x}'$: vectores de posición; $\vec{v}$: velocidad relativa | $\text{m}$ | Transformación de coordenadas galileana espacial. |
| $t' = t$ | $t, t'$: coordenadas temporales | $\text{s}$ | Postulado del tiempo absoluto universal de Newton. |
| $\vec{u}' = \vec{u} - \vec{v}$ | $\vec{u}, \vec{u}'$: velocidades de una partícula | $\text{m/s}$ | Ley clásica de adición de velocidades de Galileo. |
| $\vec{a}' = \vec{a}$ | $\vec{a}, \vec{a}'$: aceleraciones | $\text{m/s}^2$ | Invarianza galileana de la aceleración. |
| $\vec{F}' = \vec{F} = m\vec{a}$ | $\vec{F}$: fuerza neta; $m$: masa inercial | $\text{N}$ | Invarianza formal de la Segunda Ley de Newton. |

---

## 3. Ecuaciones de Onda y el Experimento de Michelson-Morley

| Ecuación | Variables y Parámetros | Unidades SI | Descripción Matemática |
|---|---|---|---|
| $\nabla^2\vec{E} - \mu_0\varepsilon_0\dfrac{\partial^2\vec{E}}{\partial t^2} = \vec{0}$ | $\vec{E}$: campo eléctrico; $\mu_0, \varepsilon_0$: constantes del vacío | $\text{V/m}^3$ | Ecuación de onda electromagnética en el vacío. |
| $c = \dfrac{1}{\sqrt{\varepsilon_0\mu_0}}$ | $c$: rapidez de propagación de fase de la luz | $\text{m/s}$ | Relación electrodinámica fundamental de Maxwell. |
| $t_\parallel = \dfrac{2Lc}{c^2-v^2} \approx \dfrac{2L}{c}\left(1 + \dfrac{v^2}{c^2}\right)$ | $L$: longitud del brazo longitudinal; $v$: velocidad respecto al éter | $\text{s}$ | Tiempo de vuelo de ida y vuelta longitudinal en el interferómetro. |
| $t_\perp = \dfrac{2L}{\sqrt{c^2-v^2}} \approx \dfrac{2L}{c}\left(1 + \dfrac{1}{2}\dfrac{v^2}{c^2}\right)$ | $L$: longitud del brazo transversal | $\text{s}$ | Tiempo de vuelo de ida y vuelta transversal en el interferómetro. |
| $\Delta t = t_\parallel - t_\perp \approx \dfrac{L}{c}\dfrac{v^2}{c^2}$ | $\Delta t$: diferencia de tiempos ortogonales inicial | $\text{s}$ | Desfase temporal en la orientación inicial. |
| $\Delta(\Delta t) = \Delta t_{\text{inicial}} - \Delta t_{\text{rotado}} = \dfrac{2L v^2}{c^3}$ | $\Delta(\Delta t)$: diferencia total tras rotar $90^\circ$ | $\text{s}$ | Variación neta de tiempo de vuelo tras rotación. |
| $\Delta N = \dfrac{c \, \Delta(\Delta t)}{\lambda} = \dfrac{2Lv^2}{\lambda c^2}$ | $\Delta N$: corrimiento de franjas; $\lambda$: longitud de onda | Franjas | Desplazamiento teórico del patrón de interferencia. |

---

## 4. Metrología Operacional y Método del Radar de Bondi

| Ecuación | Variables y Parámetros | Unidades SI | Descripción Matemática |
|---|---|---|---|
| $t_P = \dfrac{t_E + t_R}{2}$ | $t_E$: tiempo propio de emisión; $t_R$: recepción | $\text{s}$ | Tiempo asignado a un evento $P$ remoto mediante radar. |
| $x_P = c\left(\dfrac{t_R - t_E}{2}\right)$ | $x_P$: distancia física asignada al evento $P$ | $\text{m}$ | Posición espacial como magnitud derivada del tiempo de vuelo. |
| $k = \sqrt{\dfrac{1 + v/c}{1 - v/c}} = \sqrt{\dfrac{1+\beta}{1-\beta}}$ | $k$: factor de Bondi ($k > 0$); $\beta = v/c$ | Adimensional | Razón de dilatación de intervalos luminosos entre SRI. |
| $\beta = \dfrac{v}{c} = \dfrac{k^2 - 1}{k^2 + 1}$ | $\beta$: velocidad normalizada respecto a $c$ | Adimensional | Velocidad relativa expresada en términos del factor $k$. |

---

## 5. Efecto Doppler Relativista y Composición de Velocidades 1D

| Ecuación | Variables y Parámetros | Unidades SI | Descripción Matemática |
|---|---|---|---|
| $\nu_{\text{rec}} = \dfrac{\nu_{\text{em}}}{k} = \nu_{\text{em}}\sqrt{\dfrac{1-\beta}{1+\beta}}$ | $\nu_{\text{em}}$: frecuencia propia emitida; $\nu_{\text{rec}}$: recibida | $\text{Hz}$ | Efecto Doppler longitudinal para fuente en alejamiento ($v>0$). |
| $\nu_{\text{rec}} = k\,\nu_{\text{em}} = \nu_{\text{em}}\sqrt{\dfrac{1+\beta}{1-\beta}}$ | $\nu_{\text{rec}}$: frecuencia para fuente en aproximación | $\text{Hz}$ | Efecto Doppler longitudinal para fuente en acercamiento ($v<0$). |
| $z \equiv \dfrac{\lambda_{\text{rec}}-\lambda_{\text{em}}}{\lambda_{\text{em}}} = k - 1$ | $z$: parámetro de corrimiento al rojo (redshift) | Adimensional | Redshift astrofísico exacto ($z \approx v/c$ para $v \ll c$). |
| $\nu_{\text{trans}} = \nu_0\sqrt{1-\beta^2} = \dfrac{\nu_0}{\gamma}$ | $\nu_{\text{trans}}$: frecuencia medida a $90^\circ$ de la visual | $\text{Hz}$ | **Efecto Doppler Transversal** (verificación de dilatación temporal). |
| $k_{AC} = k_{AB} \cdot k_{BC}$ | $k_{AB}, k_{BC}$: factores de Bondi entre 3 SRI | Adimensional | Relación de transitividad multiplicativa de Bondi. |
| $v_{AC} = \dfrac{v_{AB} + v_{BC}}{1 + \dfrac{v_{AB} v_{BC}}{c^2}}$ | $v_{AB}, v_{BC}$: velocidades relativas colineales | $\text{m/s}$ | **Ley de Composición Relativista de Velocidades 1D**. |
| $\beta_{AC} = \dfrac{\beta_{AB} + \beta_{BC}}{1 + \beta_{AB}\beta_{BC}}$ | $\beta = v/c$: forma normalizada de adición | Adimensional | Adición adimensional de rapideces relativistas. |

---

## 6. Transformaciones de Lorentz y Cinemática Relativista

| Ecuación | Variables y Parámetros | Unidades SI | Descripción Matemática |
|---|---|---|---|
| $\gamma \equiv \dfrac{1}{\sqrt{1 - \beta^2}} = \dfrac{1}{\sqrt{1 - v^2/c^2}}$ | $\gamma$: factor de Lorentz ($\gamma \ge 1$) | Adimensional | Factor cinemático universal de la Relatividad Especial. |
| $x' = \gamma (x - vt)$ | $x, x'$: coordenadas espaciales longitudinales | $\text{m}$ | Transformación de Lorentz para la coordenada $x$. |
| $y' = y, \quad z' = z$ | $y, y', z, z'$: coordenadas transversales | $\text{m}$ | Invarianza de las coordenadas espaciales transversales. |
| $t' = \gamma \left( t - \dfrac{v}{c^2}x \right)$ | $t, t'$: coordenadas temporales | $\text{s}$ | Transformación de Lorentz para la coordenada temporal $t$. |
| $x = \gamma (x' + vt')$ | Transformación inversa para $x$ ($v \to -v$) | $\text{m}$ | Transformación inversa de Lorentz espacial. |
| $t = \gamma \left( t' + \dfrac{v}{c^2}x' \right)$ | Transformación inversa para $t$ ($v \to -v$) | $\text{s}$ | Transformación inversa de Lorentz temporal. |
| $\Delta t' = -\dfrac{\gamma v \Delta x}{c^2}$ | $\Delta x$: separación espacial de eventos en $K$ | $\text{s}$ | **Relatividad de la Simultaneidad** ($\Delta t = 0 \implies \Delta t' \neq 0$). |
| $\Delta t = \gamma \Delta t_0 = \dfrac{\Delta t_0}{\sqrt{1 - v^2/c^2}}$ | $\Delta t_0$: tiempo propio ($\Delta x'=0$); $\Delta t$: tiempo medido | $\text{s}$ | **Dilatación Temporal** ($\Delta t \ge \Delta t_0$). |
| $L = \dfrac{L_0}{\gamma} = L_0\sqrt{1 - \dfrac{v^2}{c^2}}$ | $L_0$: longitud propia en reposo; $L$: en movimiento | $\text{m}$ | **Contracción de Longitud de Lorentz** ($L \le L_0$). |

---

## 7. Geometría de Minkowski y Clasificación Causal de Intervalos

| Ecuación | Variables y Parámetros | Unidades SI | Descripción Matemática |
|---|---|---|---|
| $\Delta s^2 \equiv c^2\Delta t^2 - \Delta x^2 - \Delta y^2 - \Delta z^2$ | $\Delta s^2$: intervalo espaciotemporal cuadrático | $\text{m}^2$ | **Invariante de Lorentz fundamental** ($\Delta s'^2 = \Delta s^2$). |
| $\Delta\tau = \dfrac{\sqrt{\Delta s^2}}{c} = \sqrt{\Delta t^2 - \dfrac{|\Delta\vec{x}|^2}{c^2}}$ | $\Delta\tau$: intervalo de tiempo propio | $\text{s}$ | Tiempo propio real en intervalos de tipo tiempo ($\Delta s^2 > 0$). |
| $\Delta\sigma = \sqrt{-\Delta s^2} = \sqrt{|\Delta\vec{x}|^2 - c^2\Delta t^2}$ | $\Delta\sigma$: intervalo de distancia propia | $\text{m}$ | Distancia propia real en intervalos de tipo espacio ($\Delta s^2 < 0$). |
| $c^2\Delta t^2 - |\Delta\vec{x}|^2 > 0$ | Intervalo de **Tipo Tiempo (Timelike)** | $\text{m}^2$ | Causalmente conectado ($v < c$); orden temporal absoluto. |
| $c^2\Delta t^2 - |\Delta\vec{x}|^2 = 0$ | Intervalo de **Tipo Luz / Nulo (Lightlike)** | $\text{m}^2$ | Conectado por fotones a $v = c$; superficie del cono de luz. |
| $c^2\Delta t^2 - |\Delta\vec{x}|^2 < 0$ | Intervalo de **Tipo Espacio (Spacelike)** | $\text{m}^2$ | Desconectado causalmente ($v > c$); simultaneidad posible. |

---

## 8. Dinámica Relativista, Momentum y Energía

| Ecuación | Variables y Parámetros | Unidades SI | Descripción Matemática |
|---|---|---|---|
| $\vec{p} = \gamma m \vec{v} = \dfrac{m\vec{v}}{\sqrt{1 - v^2/c^2}}$ | $\vec{p}$: momentum relativista; $m$: masa en reposo | $\text{kg}\cdot\text{m/s}$ | Momentum lineal relativista conservado en colisiones. |
| $\vec{F} = \dfrac{d\vec{p}}{dt} = \dfrac{d}{dt}(\gamma m\vec{v})$ | $\vec{F}$: fuerza neta relativista | $\text{N}$ | Forma vectorial exacta de la Segunda Ley de Newton. |
| $F = \gamma^3 m a$ (en 1D colineal) | $a = dv/dt$: aceleración instantánea longitudinal | $\text{N}$ | Relación fuerza-aceleración unidimensional ($\lim_{v\to c} a = 0$). |
| $K = (\gamma - 1)mc^2 = mc^2\left(\dfrac{1}{\sqrt{1-v^2/c^2}} - 1\right)$ | $K$: energía cinética relativista | $\text{J}$ | Trabajo mecánico de aceleración ($K \approx \frac{1}{2}mv^2$ si $v \ll c$). |
| $E_0 = mc^2$ | $E_0$: energía en reposo; $m$: masa invariante | $\text{J}$ | **Equivalencia Masa-Energía en Reposo de Einstein**. |
| $E = \gamma mc^2 = K + mc^2 = \dfrac{mc^2}{\sqrt{1-v^2/c^2}}$ | $E$: energía total relativista de una partícula | $\text{J}$ | Energía total (cinética más energía intrínseca en reposo). |
| $E^2 = (pc)^2 + (mc^2)^2$ | $E$: energía; $p$: magnitud del momentum | $\text{J}^2$ | **Relación Invariante de Dispersión Energía-Momentum**. |
| $p_\mu p^\mu = \dfrac{E^2}{c^2} - |\vec{p}|^2 = m^2 c^2$ | $p^\mu = (E/c, \vec{p})$: cuadrimomentum | $\text{kg}^2\cdot\text{m}^2/\text{s}^2$ | Norma invariante de Lorentz del cuadrimomentum. |
| $E = pc \iff p = \dfrac{E}{c} = \dfrac{h\nu}{c} = \dfrac{h}{\lambda}$ | Para partículas sin masa ($m = 0$, Fotones) | $\text{J}, \text{kg}\cdot\text{m/s}$ | Relación dinámica para partículas no masivas a $v = c$. |
| $\Delta E = \Delta m \cdot c^2$ | $\Delta m = \sum m_{\text{inicial}} - \sum m_{\text{final}}$ | $\text{J}$ (o $\text{MeV}$) | Energía liberada o absorbida por defecto de masa nuclear. |
