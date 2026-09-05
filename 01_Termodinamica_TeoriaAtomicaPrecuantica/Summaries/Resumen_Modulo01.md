# Resumen Consolidado del Módulo 01: Termodinámica y Teoría Atómica Precuántica

**Diplomado en Física Moderna — Universidad de Concepción**  
**Docente Titular:** Dr. Julio Eduardo Oliva Zapata  
**Material de Referencia:** `tabla_Modulo_1.pdf`, Steven Weinberg (Caps. 1 y 2), Clases 01 a 06.

---

## 1. Tabla Cronológica de Hitos y Barreras Conceptuales Superadas

La siguiente tabla (integrada a partir del documento oficial `tabla_Modulo_1.pdf` del Diplomado) sintetiza los descubrimientos que forjaron la física moderna precuántica:

| Descubrimiento / Concepto | Fecha | Investigador(es) | Situación del Momento / Barrera Conceptual | Aporte a la Ciencia Posterior (Semilla Cuántica) |
|---|---|---|---|---|
| **Barómetro y Vacío** | 1643 | Evangelista Torricelli | La naturaleza se consideraba continua y el vacío una imposibilidad filosófica absoluta (*horror vacui*). | Demostró la existencia física del vacío y la presión atmosférica ($101.3\text{ kPa}$), rompiendo paradigmas escolásticos. |
| **Leyes de Gases Ideales** | 1662–1811 | R. Boyle, J. Charles, Gay-Lussac, A. Avogadro | Se medían comportamientos empíricos macroscópicos sin comprender la estructura interna ni poseer una hipótesis atómica aceptada. | Establecieron las relaciones fundamentales de macrovariables ($P, V, T, n$), cimiento de la ecuación de estado ideal y la constante $R$. |
| **Presión Cinética y Temperatura** | 1738–1857 | D. Bernoulli, R. Clausius | La comunidad académica rechazaba reducir la termodinámica macroscópica a colisiones mecánicas invisibles. | Demostró que $P = \frac{1}{3}nm\langle v^2\rangle$ y que la temperatura absoluta mide la energía cinética media traslacional: $\langle E_k\rangle = \frac{3}{2}k_B T$. |
| **Primera Ley y Fin del Calórico** | 1843–1850 | J. P. Joule, J. R. Mayer, H. von Helmholtz | Se creía ciegamente en el 'calórico' como un fluido material indestructible conservado en los cuerpos. | Estableció el equivalente mecánico ($1\text{ cal} \approx 4.184\text{ J}$) y la conservación de la energía: $dU = \delta Q - \delta W$. |
| **Segunda Ley y Ciclo de Carnot** | 1824–1865 | Sadi Carnot, Lord Kelvin, Rudolf Clausius | Se desconocía el límite térmico y la razón por la cual los procesos naturales exhiben una asimetría temporal irreversible. | Rendimiento máximo de Carnot $\eta = 1 - T_C/T_H$, escala absoluta Kelvin y definición formal de la entropía $dS = \delta Q_{rev}/T$. |
| **Distribución de Rapideces** | 1859–1872 | J. C. Maxwell, L. Boltzmann | Se asumía que todas las moléculas se desplazaban a una misma rapidez media uniforme. | Introdujo la densidad estadística continua $P(v) \propto v^2 e^{-mv^2/2k_BT}$ y la jerarquía de momentos $v_{mp} < \langle v\rangle < v_{rms}$. |
| **Ecuación de Van der Waals** | 1873 | Johannes van der Waals | La física clásica trataba a las partículas como puntos sin volumen real ni atracciones mutuas, incapaz de modelar la licuefacción. | Introdujo el volumen excluido ($b$) y la cohesión intermolecular ($a$), modelando transiciones de fase y el punto crítico ($Z_c = 3/8$). |
| **Entropía Estadística y Gibbs** | 1877–1902 | Ludwig Boltzmann, J. Willard Gibbs | El determinismo newtoniano chocaba con la introducción de probabilidades en las leyes fundamentales del universo. | Definición estadística $S = k_B \ln \Omega$. La paradoja de Gibbs en el espacio de fases obligó a postular la indistinguibilidad ($1/N!$). |
| **Movimiento Browniano** | 1905–1908 | Albert Einstein, Jean Perrin | La hipótesis atómica era duramente atacada por Mach y Ostwald, quienes la consideraban una mera ficción matemática. | Relación $D = \frac{k_BT}{6\pi\eta r}$ y desplazamiento $\langle x^2\rangle \propto t$. Perrin calculó $N_A \approx 6 \times 10^{23}$, probando la realidad del átomo. |
| **Ecuación de Sackur-Tetrode** | 1912 | Hugo Sackur, Otto Tetrode | La física clásica predecía entropías absolutas indeterminadas o infinitas en el espacio de fases continuo. | Obligó a introducir la constante de Planck ($h$) para definir el volumen mínimo de celda de fase ($h^3$), uniendo estadística y cuántica. |

---

## 2. Comparativa Estructural de los Tres Marcos Teóricos

```
┌──────────────────────────────┬──────────────────────────────────┬─────────────────────────────────────┐
│ Termodinámica Clásica        │ Teoría Cinética Molecular        │ Mecánica Estadística de Ensembles   │
├──────────────────────────────┼──────────────────────────────────┼─────────────────────────────────────┤
│ • Variables: P, V, T, U, S   │ • Variables: m, v⃗, λ, d, z        │ • Variables: Espacio de fases (q,p) │
│ • Enfoque continuo empírico  │ • Enfoque mecánico colisional    │ • Enfoque probabilístico formal     │
│ • dU = T dS - P dV           │ • P = (1/3) n m ⟨v²⟩             │ • Z = ∑ e^(-β E_i)                  │
│ • dS_aislado ≥ 0             │ • η = (1/3) ρ ⟨v⟩ λ              │ • F = -k_B T ln Z                   │
│ • Leyes axiomáticas          │ • Maxwell: P(v) ∝ v² e^(-β E_c)  │ • S = k_B ln Ω                      │
└──────────────────────────────┴──────────────────────────────────┴─────────────────────────────────────┘
```

---

## 3. Síntesis de las 6 Clases del Módulo

1. **Clase 01:** Presión hidrostática de Torricelli ($P_0 = 101.3\text{ kPa}$), leyes empíricas de Boyle, Charles, Gay-Lussac y Avogadro. Deducción de $P = \frac{1}{3}nm\langle v^2\rangle$ y energía cinética media $\langle E_k\rangle = \frac{3}{2}k_BT$.
2. **Clase 02:** Distribución de velocidades de Maxwell en 1D y 3D. Distribución de rapidez $P(v) = 4\pi (m/2\pi k_BT)^{3/2} v^2 e^{-mv^2/2k_BT}$. Momentos analíticos: $v_{mp} = \sqrt{2k_BT/m}$, $\langle v\rangle = \sqrt{8k_BT/\pi m}$ y $v_{rms} = \sqrt{3k_BT/m}$. Simulación simbólica en `Maxwellianas.nb`.
3. **Clase 03:** Sección eficaz de colisión $\sigma = \pi d^2$ y camino libre medio $\lambda = \frac{1}{\sqrt{2}\pi d^2 n}$. Viscosidad dinámica $\eta = \frac{1}{3}\rho\langle v\rangle\lambda \propto \sqrt{T}$ (independiente de $P$). Ley de Stokes con flotabilidad y velocidad terminal $v_t = \frac{2r^2g(
ho_s-
ho_f)}{9\eta}$. Ecuación de Fokker-Planck 1D y dispersión $\sigma_x \propto \sqrt{t}$.
4. **Clase 04:** Factor de compresibilidad $Z$. Ecuación de Van der Waals $(P + a/V_m^2)(V_m - b) = RT$. Constantes del punto crítico: $V_c = 3b$, $P_c = a/27b^2$, $T_c = 8a/27Rb$, $Z_c = 3/8$. Regla de áreas iguales de Maxwell. Primera Ley de la Termodinámica $dU = \delta Q - P dV$ y adiabáticas $PV^\gamma = \text{cte}$.
5. **Clase 05:** Segunda Ley de la Termodinámica y teoremas de Carnot. Rendimiento $\eta = 1 - T_C/T_H$ y temperatura absoluta. Entropía de Clausius $dS = \delta Q_{rev}/T$. Potenciales termodinámicos ($U, H, F, G$) y las 4 Relaciones de Maxwell.
6. **Clase 06:** Fórmula de Boltzmann $S = k_B \ln \Omega$. Paradoja de Gibbs, indistinguibilidad ($1/N!$) y ecuación de Sackur-Tetrode. Colectividad canónica $Z = \sum e^{-\beta E_i}$ y $F = -k_BT\ln Z$. Teoría de Einstein del movimiento browniano: $D = \frac{k_BT}{6\pi\eta r}$, $\langle x^2\rangle = 2Dt$. Experimentos de Jean Perrin que consagraron la realidad física del átomo.
