# Formulario Matemático del Módulo 01: Termodinámica y Teoría Atómica Precuántica

**Diplomado en Física Moderna — Universidad de Concepción**  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Propósito:** Compendio analítico estricto de todas las ecuaciones fundamentales del módulo con definición de variables, dimensiones y unidades en el Sistema Internacional (SI).

---

## 1. Hidrostática y Gases Ideales

### 1.1. Presión Hidrostática y Barómetro de Torricelli
$$P = \rho\, g\, h$$
- $P$: Presión hidrostática $[\text{Pa} = \text{N/m}^2 = \text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-2}]$
- $\rho$: Densidad del fluido $[\text{kg/m}^3]$ (Mercurio: $
ho_{\text{Hg}} \approx 13595\text{ kg/m}^3$)
- $g$: Aceleración de gravedad estándar ($9.80665\text{ m/s}^2$)
- $h$: Altura de la columna ($0.760\text{ m}$ al nivel del mar $\implies P_0 = 101325\text{ Pa}$)

### 1.2. Ecuación de Estado del Gas Ideal
$$P V = n R T = N k_B T$$
- $V$: Volumen del contenedor $[\text{m}^3]$
- $n$: Cantidad de sustancia en moles $[\text{mol}]$
- $N$: Número total de moléculas (adimensional)
- $R$: Constante universal de los gases ($8.314462\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$)
- $k_B$: Constante de Boltzmann ($k_B = R/N_A = 1.380649 \times 10^{-23}\text{ J/K}$)
- $T$: Temperatura absoluta $[\text{K}]$ ($T = T_C + 273.15$)

### 1.3. Presión Cinética y Energía Térmica de Bernoulli-Clausius
$$P = \frac{1}{3} n_V m \langle v^2\rangle = \frac{1}{3} \rho \langle v^2\rangle$$
$$\langle E_k\rangle = \frac{1}{2} m \langle v^2\rangle = \frac{3}{2} k_B T$$
- $n_V = N/V$: Densidad numérica de moléculas $[\text{m}^{-3}]$
- $m$: Masa de una molécula individual $[\text{kg}]$
- $\langle v^2\rangle$: Media de la rapidez al cuadrado $[\text{m}^2/\text{s}^2]$
- $\langle E_k\rangle$: Energía cinética media traslacional $[\text{J}]$

---

## 2. Cinemática Estadística y Distribución de Maxwell-Boltzmann

### 2.1. Distribución Unidimensional de Velocidades
$$g(v_x) = \left(\frac{m}{2\pi k_B T}\right)^{1/2} \exp\left(-\frac{m v_x^2}{2 k_B T}\right)$$
- $v_x$: Componente cartesiana de velocidad $[\text{m/s}]$
- $\langle v_x\rangle = 0, \qquad \langle v_x^2\rangle = \frac{k_B T}{m}$

### 2.2. Distribución Tridimensional Vectorial Conjunta
$$f(\vec{v}) = \left(\frac{m}{2\pi k_B T}\right)^{3/2} \exp\left(-\frac{m(v_x^2 + v_y^2 + v_z^2)}{2 k_B T}\right)$$

### 2.3. Distribución de Rapidez Escalar
$$P(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2 k_B T}\right)$$
- $v = |\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2} \ge 0$: Rapidez escalar $[\text{m/s}]$

### 2.4. Momentos Estadísticos de Rapidez
$$v_{\text{mp}} = \sqrt{\frac{2 k_B T}{m}} = \sqrt{\frac{2 R T}{M_{\text{mol}}}}$$
$$\langle v\rangle = \sqrt{\frac{8 k_B T}{\pi m}} = \sqrt{\frac{8 R T}{\pi M_{\text{mol}}}}$$
$$v_{\text{rms}} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3 k_B T}{m}} = \sqrt{\frac{3 R T}{M_{\text{mol}}}}$$
- $M_{\text{mol}} = N_A m$: Masa molar del gas $[\text{kg/mol}]$
- Jerarquía: $v_{\text{mp}} < \langle v\rangle < v_{\text{rms}}$ ($\sqrt{2} < \sqrt{8/\pi} < \sqrt{3}$)

---

## 3. Fenómenos de Transporte y Colisiones

### 3.1. Sección Eficaz y Camino Libre Medio
$$\sigma = \pi d^2$$
$$\lambda = \frac{1}{\sqrt{2}\,\pi d^2 n_V} = \frac{k_B T}{\sqrt{2}\,\pi d^2 P}$$
- $d$: Diámetro molecular de esfera dura $[\text{m}]$
- $\sigma$: Sección eficaz geométrica de colisión $[\text{m}^2]$
- $\lambda$: Camino libre medio $[\text{m}]$

### 3.2. Frecuencia de Colisiones
$$z = \sqrt{2}\,\pi d^2 n_V \langle v\rangle, \qquad \tau = \frac{1}{z} = \frac{\lambda}{\langle v\rangle}$$
- $z$: Frecuencia de choque por molécula $[\text{s}^{-1}]$
- $\tau$: Tiempo medio entre colisiones sucesivas $[\text{s}]$

### 3.3. Viscosidad Dinámica en Gases
$$\eta = \frac{1}{3} \rho \langle v\rangle \lambda = \frac{2}{3\pi^{3/2} d^2} \sqrt{m k_B T}$$
- $\eta$: Viscosidad dinámica $[\text{Pa}\cdot\text{s} = \text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-1}]$

### 3.4. Ley de Stokes y Velocidad Terminal de Sedimentación
$$\vec{F}_{\text{Stokes}} = -6\pi \eta r\, \vec{v}$$
$$v_t = \frac{2 r^2 g (
ho_s - 
ho_f)}{9 \eta}$$
- $r$: Radio de la esfera suspendida $[\text{m}]$
- $
ho_s$: Densidad de la esfera sólida $[\text{kg/m}^3]$
- $
ho_f$: Densidad del fluido circundante $[\text{kg/m}^3]$
- $v_t$: Velocidad terminal constante de caída $[\text{m/s}]$

### 3.5. Difusión y Fokker-Planck 1D
$$J_x = -D \frac{\partial n}{\partial x}, \qquad \frac{\partial n}{\partial t} = D \frac{\partial^2 n}{\partial x^2}$$
$$\frac{\partial f}{\partial t} = -\mu \frac{\partial f}{\partial x} + Dif \frac{\partial^2 f}{\partial x^2}$$
$$f(x, t) = \frac{1}{\sqrt{4\pi\, Dif\, t}} \exp\left(-\frac{(x - \mu t)^2}{4\, Dif\, t}\right)$$
$$\sigma_x^2(t) = \langle (x - \mu t)^2\rangle = 2\, Dif\, t$$
- $D, Dif$: Coeficiente de difusión $[\text{m}^2/\text{s}]$
- $\mu$: Velocidad de deriva sistemática $[\text{m/s}]$

---

## 4. Gases Reales de Van der Waals y Primera Ley

### 4.1. Ecuación de Estado de Van der Waals
$$\left(P + \frac{a n^2}{V^2}\right)(V - n b) = n R T \iff \left(P + \frac{a}{V_m^2}\right)(V_m - b) = R T$$
- $a$: Parámetro de cohesión intermolecular $[\text{Pa}\cdot\text{m}^6\cdot\text{mol}^{-2} = \text{J}\cdot\text{m}^3\cdot\text{mol}^{-2}]$
- $b$: Covolumen molar excluido ($b = 4 N_A \frac{4}{3}\pi r_0^3$) $[\text{m}^3/\text{mol}]$
- $V_m = V/n$: Volumen molar $[\text{m}^3/\text{mol}]$

### 4.2. Constantes del Punto Crítico
$$V_c = 3b, \qquad P_c = \frac{a}{27 b^2}, \qquad T_c = \frac{8a}{27 R b}$$
$$Z_c = \frac{P_c V_c}{R T_c} = \frac{3}{8} = 0.375$$

### 4.3. Regla de Áreas Iguales de Maxwell
$$\int_{V_L}^{V_V} \left[P_{\text{VdW}}(V_m, T) - P_{\text{sat}}\right] dV_m = 0$$

### 4.4. Primera Ley de la Termodinámica
$$dU = \delta Q - \delta W = \delta Q - P\, dV$$
- Proceso Adiabático Reversible: $\delta Q = 0 \implies P V^\gamma = \text{cte}, \quad T V^{\gamma - 1} = \text{cte}$
- Coeficiente adiabático: $\gamma = \frac{C_P}{C_V}$ (Monoatómico: $\gamma = \frac{5/2 R}{3/2 R} = \frac{5}{3} \approx 1.67$)
- Relación de Mayer: $C_P - C_V = R$

---

## 5. Segunda Ley, Entropía y Potenciales Termodinámicos

### 5.1. Máquinas Térmicas y Ciclo de Carnot
$$\eta = \frac{W}{Q_H} = 1 - \frac{|Q_C|}{Q_H}$$
$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$$

### 5.2. Definición y Principio de Entropía
$$dS = \frac{\delta Q_{\text{rev}}}{T}$$
$$\oint \frac{\delta Q}{T} \le 0 \implies \Delta S_{\text{aislado}} \ge 0$$
- Gas ideal: $\Delta S = n C_V \ln\left(\frac{T_2}{T_1}\right) + n R \ln\left(\frac{V_2}{V_1}\right) = n C_P \ln\left(\frac{T_2}{T_1}\right) - n R \ln\left(\frac{P_2}{P_1}\right)$

### 5.3. Potenciales Termodinámicos Fundamentales
1. **Energía Interna:** $dU = T\, dS - P\, dV$
2. **Entalpía:** $H = U + P V \implies dH = T\, dS + V\, dP$
3. **Energía Libre de Helmholtz:** $F = U - T S \implies dF = -S\, dT - P\, dV$
4. **Energía Libre de Gibbs:** $G = H - T S \implies dG = -S\, dT + V\, dP$

### 5.4. Relaciones de Maxwell
$$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V, \qquad \left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$$
$$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V, \qquad \left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$$

---

## 6. Mecánica Estadística y Movimiento Browniano

### 6.1. Entropía Estadística de Boltzmann
$$S = k_B \ln \Omega$$
- $\Omega$: Número de microestados accesibles en la superficie de energía del espacio de fases.

### 6.2. Colectividad Canónica de Gibbs
$$P_i = \frac{e^{-\beta E_i}}{Z}, \qquad \beta = \frac{1}{k_B T}$$
$$Z(T, V, N) = \sum_i e^{-\beta E_i} = \frac{1}{N!\, h^{3N}}\int d^{3N}q\, d^{3N}p\, e^{-\beta H(q, p)}$$
$$F = -k_B T \ln Z$$
$$U = -\frac{\partial \ln Z}{\partial \beta}, \qquad P = k_B T \frac{\partial \ln Z}{\partial V}, \qquad S = -\left(\frac{\partial F}{\partial T}\right)_V$$

### 6.3. Ecuación de Sackur-Tetrode (Gas Ideal Monoatómico)
$$S = N k_B \left[\ln\left(\frac{V}{N}\left(\frac{4\pi m U}{3 h^2 N}\right)^{3/2}\right) + \frac{5}{2}\right]$$

### 6.4. Teoría de Einstein del Movimiento Browniano
$$D = \mu\, k_B T = \frac{k_B T}{6\pi \eta r}$$
$$\langle x^2(t)\rangle = 2\, D\, t = \frac{R T}{3\pi \eta r N_A}\, t$$
$$N_A = \frac{R T}{3\pi \eta r}\left(\frac{t}{\langle x^2\rangle}\right)$$

---

## 7. Constantes Físicas Universales Relevantes

| Constante | Símbolo | Valor Numérico Recomendado (CODATA) | Unidades SI |
|---|---|---|---|
| **Constante de Boltzmann** | $k_B$ | $1.380649 \times 10^{-23}$ | $\text{J}\cdot\text{K}^{-1}$ |
| **Número de Avogadro** | $N_A$ | $6.02214076 \times 10^{23}$ | $\text{mol}^{-1}$ |
| **Constante de los Gases** | $R = N_A k_B$ | $8.314462618$ | $\text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ |
| **Constante de Planck** | $h$ | $6.62607015 \times 10^{-34}$ | $\text{J}\cdot\text{s}$ |
| **Aceleración de Gravedad** | $g$ | $9.80665$ | $\text{m}\cdot\text{s}^{-2}$ |
| **Presión Atmosférica Estándar** | $P_0$ | $101325$ | $\text{Pa} = \text{N}\cdot\text{m}^{-2}$ |
