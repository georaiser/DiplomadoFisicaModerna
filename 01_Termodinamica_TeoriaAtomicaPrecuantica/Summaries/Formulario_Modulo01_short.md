# Formulario Módulo 01 — Termodinámica y Teoría Atómica Precuántica

**Módulo:** 01 — Diplomado en Física Moderna (UdeC) | **Docente:** Dr. Julio Eduardo Oliva Zapata

---

## 1. Gases Ideales y Cinética Elemental
- **Presión hidrostática:** $P = \rho g h$ ($P_0 = 101325\text{ Pa}$)
- **Gas ideal:** $P V = n R T = N k_B T$
- **Presión cinética:** $P = \frac{1}{3} \frac{N}{V} m \langle v^2\rangle = \frac{1}{3} \rho \langle v^2\rangle$
- **Energía cinética media:** $\langle E_k\rangle = \frac{1}{2} m \langle v^2\rangle = \frac{3}{2} k_B T$

---

## 2. Distribución de Maxwell-Boltzmann
- **Distribución de rapidez:** $P(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 e^{-\frac{m v^2}{2 k_B T}}$
- **Rapidez más probable:** $v_{\text{mp}} = \sqrt{\frac{2 k_B T}{m}}$
- **Rapidez media:** $\langle v\rangle = \sqrt{\frac{8 k_B T}{\pi m}}$
- **Rapidez cuadrática media:** $v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}}$
- **Jerarquía:** $v_{\text{mp}} < \langle v\rangle < v_{\text{rms}}$

---

## 3. Transporte y Colisiones
- **Camino libre medio:** $\lambda = \frac{1}{\sqrt{2}\pi d^2 n} = \frac{k_B T}{\sqrt{2}\pi d^2 P}$
- **Viscosidad dinámica:** $\eta = \frac{1}{3}\rho\langle v\rangle\lambda = \frac{2}{3\pi^{3/2}d^2}\sqrt{m k_B T}$
- **Fuerza y velocidad de Stokes:** $F = 6\pi\eta r v \implies v_t = \frac{2 r^2 g(
ho_s - 
ho_f)}{9\eta}$
- **Difusión y Fokker-Planck:** $\frac{\partial f}{\partial t} = -\mu\frac{\partial f}{\partial x} + D\frac{\partial^2 f}{\partial x^2} \implies \langle (\Delta x)^2\rangle = 2 D t$

---

## 4. Gases Reales de Van der Waals
- **Ecuación de estado:** $\left(P + \frac{a}{V_m^2}\right)(V_m - b) = R T$
- **Punto crítico:** $V_c = 3b, \quad P_c = \frac{a}{27 b^2}, \quad T_c = \frac{8a}{27 R b}$
- **Factor de compresibilidad crítico:** $Z_c = \frac{P_c V_c}{R T_c} = \frac{3}{8} = 0.375$
- **Regla de áreas de Maxwell:** $\int_{V_L}^{V_V} (P_{\text{VdW}} - P_{\text{sat}}) dV_m = 0$

---

## 5. Termodinámica, Entropía y Potenciales
- **Primera Ley:** $dU = \delta Q - P dV = T dS - P dV$
- **Adiabáticas reversibles:** $P V^\gamma = \text{cte} \quad (\gamma = C_P/C_V)$
- **Eficiencia de Carnot:** $\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$
- **Entropía de Clausius:** $dS = \frac{\delta Q_{\text{rev}}}{T} \implies \Delta S_{\text{aislado}} \ge 0$
- **Potenciales:**
  - $H = U + PV \implies dH = T dS + V dP$
  - $F = U - TS \implies dF = -S dT - P dV$
  - $G = H - TS \implies dG = -S dT + V dP$
- **Relaciones de Maxwell:** $\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V, \quad \left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$

---

## 6. Mecánica Estadística y Movimiento Browniano
- **Entropía de Boltzmann:** $S = k_B \ln \Omega$
- **Ensamble canónico:** $Z = \sum e^{-\beta E_i}, \quad F = -k_B T \ln Z$
- **Sackur-Tetrode:** $S = N k_B \left[\ln\left(\frac{V}{N}\left(\frac{4\pi m U}{3 h^2 N}\right)^{3/2}\right) + \frac{5}{2}\right]$
- **Relación de Einstein:** $D = \frac{k_B T}{6\pi \eta r}$
- **Desplazamiento browniano:** $\langle x^2(t)\rangle = 2 D t = \frac{R T}{3\pi \eta r N_A}\, t$
