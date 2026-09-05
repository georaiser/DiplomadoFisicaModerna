# Análisis Clase 04 — Gases Reales, Ecuación de Van der Waals y Primera Ley

**Módulo:** Termodinámica y Teoría Atómica Precuántica | **Docente:** Dr. Julio Eduardo Oliva Zapata | **Fecha:** 05 de junio de 2026

---

## 1. Desviación del Gas Ideal y Ecuación de Van der Waals (1873)

El modelo de gas ideal ($PV_m = RT$) falla a presiones elevadas y bajas temperaturas porque ignora el tamaño real de las moléculas y sus fuerzas de cohesión. El factor de compresibilidad $Z = \frac{PV_m}{RT}$ se desvía de la unidad debido a la competencia entre la atracción intermolecular ($Z < 1$) y el volumen excluido impenetrable ($Z > 1$).

Johannes D. van der Waals introdujo dos correcciones físicas:
1. **Volumen excluido ($b$):** Cada molécula impenetrable de radio $r_0$ excluye para los choques un volumen cuádruple de su volumen propio: $b = 4 N_A (\frac{4}{3}\pi r_0^3)$. El volumen libre disponible se reduce a $V_m - b$.
2. **Presión de cohesión ($a$):** Las fuerzas de atracción hacia el interior reducen el impacto contra la pared en una cantidad proporcional a la densidad al cuadrado: $P_{\text{efectiva}} = P + \frac{a}{V_m^2}$.

La **ecuación de estado de Van der Waals** adopta la forma:

$$\boxed{\left(P + \frac{a}{V_m^2}\right)(V_m - b) = R T}$$

---

## 2. Isotermas Cúbicas, Punto Crítico y Regla de Maxwell

Desarrollando la ecuación como polinomio cúbico en $V_m$:

$$V_m^3 - \left(b + \frac{R T}{P}\right) V_m^2 + \frac{a}{P} V_m - \frac{a b}{P} = 0$$

En el **punto crítico** $(T_c, P_c, V_c)$, las tres raíces reales se fusionan en un punto de inflexión con tangente horizontal: $\left(\frac{\partial P}{\partial V_m}\right)_{T_c} = 0$ y $\left(\frac{\partial^2 P}{\partial V_m^2}\right)_{T_c} = 0$. Esto determina las constantes críticas en función de los parámetros moleculares:

$$\boxed{V_c = 3b, \qquad P_c = \frac{a}{27 b^2}, \qquad T_c = \frac{8a}{27 R b}}$$

El factor de compresibilidad crítico universal resulta idéntico para todos los gases:

$$\boxed{Z_c = \frac{P_c V_c}{R T_c} = \frac{3}{8} = 0.375}$$

Para temperaturas subcríticas ($T < T_c$), la oscilación cúbica inestable se reemplaza por la meseta horizontal de coexistencia de fases líquido-gas a la presión de vapor $P_{\text{sat}}$. La **regla de áreas iguales de Maxwell** garantiza la igualdad del potencial químico en ambas fases:

$$\int_{V_L}^{V_V} \left[P(V_m, T) - P_{\text{sat}}\right] dV_m = 0$$

---

## 3. Primera Ley de la Termodinámica

Los experimentos de Joule (1843) demostraron que el calor no es una sustancia fluida indestructible (*calórico*), sino una forma de energía en tránsito, estableciendo el equivalente mecánico ($1\text{ cal} \approx 4.184\text{ J}$).

La **Primera Ley de la Termodinámica** establece la existencia de una función de estado diferencial exacta, la **energía interna** $U$:

$$\boxed{dU = \delta Q - \delta W = \delta Q - P\, dV}$$

Para un gas ideal monoatómico:
- Energía interna dependiente exclusivamente de la temperatura: $U = \frac{3}{2} n R T$.
- En procesos adiabáticos reversibles ($\delta Q = 0$): $\boxed{P V^\gamma = \text{cte}}$, con $\gamma = C_P/C_V = 5/3$.
- En procesos isotérmicos ($T = \text{cte}$, $\Delta U = 0$): $Q = W = n R T \ln(V_2/V_1)$.

---

## 4. Conclusiones de la Clase

1. El factor de compresibilidad $Z$ manifiesta las interacciones moleculares atractivas y repulsivas en fluidos densos.
2. La ecuación de Van der Waals predice de forma continua la transición líquido-gas y cuantifica el punto crítico mediante parámetros microscópicos: $V_c = 3b$, $P_c = a/(27b^2)$, $T_c = 8a/(27Rb)$.
3. El factor crítico $Z_c = 3/8$ ilustra el poder unificador del principio de estados correspondientes.
4. La construcción de áreas iguales de Maxwell resuelve la inestabilidad mecánica del bucle cúbico asegurando la continuidad del potencial químico.
5. El principio de conservación de la energía $dU = \delta Q - P dV$ formaliza la energía interna como función de estado, preparando la formulación de la Segunda Ley y la entropía (Clase 05).
