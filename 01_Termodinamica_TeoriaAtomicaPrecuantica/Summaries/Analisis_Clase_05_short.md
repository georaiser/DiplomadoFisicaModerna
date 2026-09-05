# Análisis Clase 05 — Segunda Ley, Ciclo de Carnot, Entropía y Potenciales Termodinámicos

**Módulo:** Termodinámica y Teoría Atómica Precuántica | **Docente:** Dr. Julio Eduardo Oliva Zapata | **Fecha:** 12 de junio de 2026

---

## 1. La Segunda Ley de la Termodinámica y el Ciclo de Carnot

La Segunda Ley establece la irreversibilidad de los fenómenos naturales y prohíbe la existencia del móvil perpetuo de segunda especie:
- **Enunciado de Kelvin-Planck:** No existe ningún dispositivo cíclico cuyo único efecto sea convertir calor íntegramente en trabajo mecánico.
- **Enunciado de Clausius:** El calor no puede fluir espontáneamente de un foco frío a uno caliente sin consumo de trabajo exterior.

Sadi Carnot (1824) diseñó un ciclo reversible compuesto por dos isotermas y dos adiabáticas entre focos térmicos a $T_H$ y $T_C$. El **Teorema de Carnot** demuestra que el rendimiento reversible es máximo e independiente de la sustancia de trabajo:

$$\frac{|Q_C|}{Q_H} = \frac{T_C}{T_H} \implies \boxed{\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}}$$

Esta proporcionalidad universal define formalmente la **escala de temperatura absoluta Kelvin**.

---

## 2. La Entropía de Clausius

El Teorema de Clausius demuestra que para cualquier ciclo reversible $\oint_{\text{rev}} \frac{\delta Q}{T} = 0$, lo que garantiza que la cantidad $\frac{\delta Q_{\text{rev}}}{T}$ es la diferencial exacta de una función de estado: la **entropía** $S$:

$$\boxed{dS = \frac{\delta Q_{\text{rev}}}{T}}$$

Para ciclos y procesos irreversibles reales, la desigualdad de Clausius impone:

$$dS \ge \frac{\delta Q}{T} \implies \boxed{dS_{\text{aislado}} \ge 0}$$

En un sistema térmicamente aislado, la entropía permanece constante solo si la transformación es reversible y aumenta estrictamente en todo proceso espontáneo irreversible, definiendo la flecha del tiempo.

---

## 3. Ecuación Fundamental y Potenciales Termodinámicos

La síntesis de la Primera y Segunda Ley establece la ecuación fundamental:

$$\boxed{dU = T\, dS - P\, dV}$$

Mediante transformaciones de Legendre se definen los potenciales termodinámicos que alcanzan valores mínimos en el equilibrio según las variables de control:
1. **Entalpía:** $H(S, P) = U + PV \implies dH = T dS + V dP$
2. **Energía de Helmholtz:** $F(T, V) = U - TS \implies dF = -S dT - P dV$ (mínima a $T, V$ fijos).
3. **Energía de Gibbs:** $G(T, P) = H - TS \implies dG = -S dT + V dP$ (mínima a $T, P$ fijos).

La simetría de las segundas derivadas parciales ($d^2\Phi$) engendra las **Relaciones de Maxwell**:

$$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V, \qquad \left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$$
$$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V, \qquad \left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$$

---

## 4. Entropía del Gas Ideal

Para un gas ideal con capacidades caloríficas constantes, la variación de entropía entre dos estados es:

$$\boxed{\Delta S = n C_V \ln\left(\frac{T_2}{T_1}\right) + n R \ln\left(\frac{V_2}{V_1}\right) = n C_P \ln\left(\frac{T_2}{T_1}\right) - n R \ln\left(\frac{P_2}{P_1}\right)}$$

---

## 5. Conclusiones de la Clase

1. La Segunda Ley prohíbe el aprovechamiento total del calor disperso y establece la asimetría temporal fundamental de los procesos físicos.
2. El ciclo de Carnot define el límite termodinámico supremo de eficiencia $\eta_{\text{Carnot}} = 1 - T_C/T_H$ y la escala de temperatura Kelvin.
3. La entropía es una función de estado $dS = \delta Q_{\text{rev}}/T$ que no se conserva, sino que crece en todo proceso irreversible en un sistema aislado.
4. Los potenciales termodinámicos ($U, H, F, G$) y las relaciones de Maxwell permiten resolver analíticamente las propiedades de equilibrio térmico.
5. La constante de integración de la entropía clásica permanece indeterminada, demandando la formulación estadística de Boltzmann y la mecánica cuántica (Clase 06).
