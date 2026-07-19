# Formulario del Módulo 1 — Termodinámica y Teoría Atómica Pre-Cuántica

---

## Constantes fundamentales

| Constante | Símbolo | Valor | Unidades |
|-----------|---------|-------|---------|
| Constante de Boltzmann | $k_B$ | $1{,}380\,649\times10^{-23}$ | J/K |
| Constante de gas universal | $R$ | $8{,}314$ | J/(mol·K) |
| Número de Avogadro | $N_A$ | $6{,}022\times10^{23}$ | mol⁻¹ |
| Constante de Planck | $h$ | $6{,}626\times10^{-34}$ | J·s |
| Constante de Planck reducida | $\hbar = h/(2\pi)$ | $1{,}055\times10^{-34}$ | J·s |
| Velocidad de la luz | $c$ | $2{,}998\times10^8$ | m/s |
| Constante de Newton | $G$ | $6{,}674\times10^{-11}$ | N·m²/kg² |
| Magnetón de Bohr | $\mu_B$ | $9{,}274\times10^{-24}$ | J/T |

---

## 1. Gases ideales

### Ecuación de estado del gas ideal

$$\boxed{PV = Nk_BT = nRT}$$

- $P$: presión [Pa]
- $V$: volumen [m³]
- $N$: número de partículas
- $n = N/N_A$: número de moles
- $T$: temperatura [K]

### Relación entre energía cinética y temperatura

$$\frac{1}{2}m\langle v^2\rangle = \frac{3}{2}k_BT$$

**Velocidades características:**

| Velocidad | Expresión | Relación |
|-----------|-----------|----------|
| Más probable | $v_p = \sqrt{2k_BT/m}$ | 1 |
| Promedio | $\bar{v} = \sqrt{8k_BT/(\pi m)}$ | $\sqrt{4/\pi} \approx 1{,}128$ |
| Cuadrática media | $v_\text{rms} = \sqrt{3k_BT/m}$ | $\sqrt{3/2} \approx 1{,}225$ |

$v_p < \bar{v} < v_\text{rms}$

### Teorema de equipartición

Para un sistema clásico en equilibrio a temperatura $T$: cada grado de libertad cuadrático contribuye $\frac{1}{2}k_BT$ a la energía promedio.

Para un gas ideal de $N$ partículas con $f$ grados de libertad:

$$U = \frac{f}{2}Nk_BT$$

| Gas | $f$ | $U$ |
|-----|-----|-----|
| Monoatómico | 3 (traslación) | $\frac{3}{2}Nk_BT$ |
| Diatómico (alta T) | 5 (tra. + rot.) | $\frac{5}{2}Nk_BT$ |
| Diatómico (muy alta T) | 7 (tra. + rot. + vib.) | $\frac{7}{2}Nk_BT$ |

---

## 2. Distribución de Maxwell–Boltzmann

### Distribución de velocidades vectoriales

$$f(\mathbf{v}) = \left(\frac{m}{2\pi k_BT}\right)^{3/2} \exp\!\left(-\frac{mv^2}{2k_BT}\right)$$

### Distribución de módulos de velocidad

$$f(v) = 4\pi v^2\left(\frac{m}{2\pi k_BT}\right)^{3/2}\exp\!\left(-\frac{mv^2}{2k_BT}\right)$$

### Distribución de energía traslacional

$$g(\varepsilon) = \frac{2\pi}{(\pi k_BT)^{3/2}}\,\varepsilon^{1/2}\,e^{-\varepsilon/k_BT}, \quad \langle\varepsilon\rangle = \frac{3}{2}k_BT$$

---

## 3. Capacidades caloríficas y trabajo

### Definiciones

$$C_V = \left(\frac{\delta Q}{dT}\right)_V, \qquad C_P = \left(\frac{\delta Q}{dT}\right)_P$$

### Gas ideal (predicción del modelo microscópico)

$$C_V = \frac{f}{2}Nk_B, \qquad C_P = C_V + Nk_B$$

**Identidad de Mayer:**

$$\boxed{C_P - C_V = Nk_B = nR}$$

### Índice adiabático

$$\gamma = \frac{C_P}{C_V} = \frac{f+2}{f}$$

| Gas | $\gamma$ |
|-----|---------|
| Monoatómico | $5/3 \approx 1{,}67$ |
| Diatómico (dos rot.) | $7/5 = 1{,}40$ |

### Trabajo en un proceso cuasi estático

$$\delta W = P\, dV$$

### Presión de radiación

$$P_\text{rad} = \frac{u}{3}$$

donde $u$ es la densidad volumétrica de energía de la radiación.

---

## 4. Movimiento browniano y transporte

### Desplazamiento cuadrático medio

$$\langle x^2\rangle = 2Dt \quad (\text{1D}), \qquad \langle r^2\rangle = 6Dt \quad (\text{3D})$$

### Coeficiente de difusión (relación de Einstein–Stokes)

$$\boxed{D = \frac{k_BT}{6\pi\eta r}}$$

donde $\eta$ es la viscosidad dinámica del fluido y $r$ el radio de la partícula browniana.

### Ecuación de Fokker-Planck (caso libre)

$$\frac{\partial P(x,t)}{\partial t} = D\frac{\partial^2 P(x,t)}{\partial x^2}$$

**Solución** con $P(x, 0) = \delta(x)$:

$$P(x, t) = \frac{1}{\sqrt{4\pi Dt}}\exp\!\left(-\frac{x^2}{4Dt}\right)$$

### Libre camino medio

$$\ell = \frac{1}{\sqrt{2}\,\pi d^2 n}$$

donde $d$ es el diámetro molecular y $n = N/V$ la densidad numérica.

### Viscosidad de un gas ideal

$$\eta = \frac{1}{3}\rho\bar{v}\ell \propto \sqrt{T} \quad (\text{independiente de }P)$$

---

## 5. Ecuación de estado de Van der Waals

$$\boxed{\left(P + \frac{aN^2}{V^2}\right)(V - Nb) = Nk_BT}$$

Despejando la presión:

$$P = \frac{Nk_BT}{V - Nb} - \frac{aN^2}{V^2}$$

### Punto crítico

$$T_c = \frac{8a}{27k_Bb}, \qquad P_c = \frac{a}{27b^2}, \qquad V_c = 3Nb$$

### Compresibilidad isotérmica

$$\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T$$

- $\kappa_T > 0$: fase estable
- $\kappa_T < 0$: fase inestable (se excluye físicamente)

### Regla de las áreas de Maxwell

La presión de coexistencia $P^*$ satisface:

$$\int_{V_\text{liq}}^{V_\text{gas}}[P(V) - P^*]\,dV = 0$$

---

## 6. Primera ley de la termodinámica

$$\boxed{dU = \delta Q - \delta W = \delta Q - P\,dV}$$

### Relación fundamental

$$\boxed{dU = T\,dS - P\,dV}$$

### Consecuencias:

$$T = \left(\frac{\partial U}{\partial S}\right)_V, \qquad P = -\left(\frac{\partial U}{\partial V}\right)_S$$

---

## 7. Segunda ley y entropía termodinámica

### Teorema de Clausius

$$\oint \frac{\delta Q}{T} \leq 0$$

Igualdad para procesos reversibles; desigualdad para irreversibles.

### Definición de entropía termodinámica

$$\boxed{dS = \frac{\delta Q_\text{rev}}{T}}$$

### Desigualdad de Clausius diferencial

$$dS \geq \frac{\delta Q}{T}$$

Para sistemas aislados: $dS \geq 0$ (el segundo principio en su forma más compacta).

### Eficiencia de Carnot

$$\boxed{\eta_\text{Carnot} = 1 - \frac{T_C}{T_H} \leq 1}$$

---

## 8. Entropía estadística (mecánica estadística)

### Hipótesis de Boltzmann

En un sistema aislado, todos los $\Omega$ microestados compatibles con el macroestado tienen probabilidad $1/\Omega$.

### Entropía de Boltzmann

$$\boxed{S = k_B\ln\Omega}$$

### Entropía del sistema de espines

Para $N$ espines con $N_\uparrow$ paralelos al campo:

$$\Omega = \binom{N}{N_\uparrow} = \frac{N!}{N_\uparrow!\,(N - N_\uparrow)!}$$

$$S = -Nk_B\left[f\ln f + (1-f)\ln(1-f)\right], \quad f = N_\uparrow/N$$

### Fórmula de Sackur–Tetrode (gas ideal monoatómico)

$$\boxed{S = Nk_B\left[\ln\!\left(\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2}\right) + \frac{5}{2}\right]}$$

**Características:**
- Extensiva: $S(2N, 2V, T) = 2S(N, V, T)$.
- Resuelve la paradoja de Gibbs: $\Delta S_\text{mezcla} = 0$ para gases idénticos.
- Contiene $h$: la entropía del gas ideal es de origen cuántico.

### Paradoja de Gibbs

**Entropía clásica (sin corrección):** al mezclar dos porciones iguales del mismo gas:
$$\Delta S_\text{clásico} = 2Nk_B\ln 2 \neq 0 \quad \text{(paradoja)}$$

**Entropía corregida (Sackur–Tetrode):**
$$\Delta S = 0 \quad \text{(correcto)}$$

La corrección proviene del factor $1/N!$ en el conteo de microestados, que refleja la indistinguibilidad cuántica de las partículas idénticas.

---

## 9. Capacidad calorífica del sistema paramagnético (espines en campo)

$$U(T) = -N\mu_BB\tanh\!\left(\frac{\mu_BB}{k_BT}\right)$$

$$C_B = Nk_B\left(\frac{\mu_BB}{k_BT}\right)^2\frac{1}{\cosh^2\!\left(\frac{\mu_BB}{k_BT}\right)}$$

**Pico de Schottky:** máximo en $T^* \approx 0{,}83\,\mu_BB/k_B$.

Magnetización:

$$M(T) = N\mu_B\tanh\!\left(\frac{\mu_BB}{k_BT}\right)$$

---

## 10. Termodinámica de agujeros negros

### Entropía de Bekenstein–Hawking

$$\boxed{S_\text{BH} = \frac{k_Bc^3}{4G\hbar}\,A}$$

donde $A$ es el área del horizonte de eventos.

### Temperatura de Hawking (Schwarzschild)

$$\boxed{T_H = \frac{\hbar c^3}{8\pi GMk_B}}$$

### Leyes de la termodinámica de agujeros negros

| Ley | Termodinámica | Agujero negro |
|-----|--------------|---------------|
| 0 | $T$ uniforme en equilibrio | $\kappa$ uniforme en el horizonte |
| 1 | $dU = T\,dS - P\,dV$ | $dM = \frac{\kappa}{8\pi G}\,dA + \Omega_H\,dJ + \Phi_H\,dQ$ |
| 2 | $dS \geq 0$ (sistema aislado) | $dA \geq 0$ (clásico) |
| 3 | $S \to 0$ cuando $T \to 0$ (con excepciones) | $\kappa \to 0$ inalcanzable en pasos finitos |

---

## 11. Entropía de distintos sistemas: tabla comparativa

| Sistema | Entropía |
|---------|---------|
| Gas ideal monoatómico | $Nk_B\left[\ln(V/N) + \frac{3}{2}\ln T + \text{cte.}\right]$ |
| Gas ideal (Sackur–Tetrode) | $Nk_B\left[\ln\frac{V}{N}\left(\frac{2\pi mk_BT}{h^2}\right)^{3/2} + \frac{5}{2}\right]$ |
| $N$ espines (dos niveles) | $-Nk_B\left[f\ln f + (1-f)\ln(1-f)\right]$ |
| Cristal perfecto a 0 K | $0$ ($\Omega = 1$, única configuración) |
| Agujero negro Schwarzschild | $4\pi k_B G M^2/(\hbar c)$ |
