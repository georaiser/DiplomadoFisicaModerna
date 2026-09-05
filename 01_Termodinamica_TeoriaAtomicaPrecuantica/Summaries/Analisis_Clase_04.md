# Análisis de Clase 04: Ruptura del Gas Ideal, Ecuación de Estado de Van der Waals y la Primera Ley de la Termodinámica

**Diplomado en Física Moderna — Módulo 01: Termodinámica y Teoría Atómica Precuántica**  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Fecha de la sesión:** 05 de junio de 2026  
**Duración:** 3 horas 06 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`Clase_04/grabacion/Clase del Diplomado de Física Moderna.docx`).
- Diapositivas y apuntes manuscritos oficiales: `Clase_04/Clase 4 preliminar.pdf` (24 págs) y `Clase_04/Notas tablet clase 4.pdf` (12 págs).
- Texto guía central: Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Cap. 2: §2.1 *Heat and Energy* (pp. 16–21) y §2.2 *Absolute Temperature* (pp. 21–27).
- Fuentes primarias históricas: J. D. van der Waals, *Over de Continuïteit van den Gas- en Vloeistoftoestand* (Tesis doctoral, Leiden, 1873); J. P. Joule, *On the Caloric Effects of Magneto-Electricity, and on the Mechanical Value of Heat*, Phil. Mag. 23, 263 (1843); J. C. Maxwell, *On the Dynamical Evidence of the Molecular Constitution of Bodies*, Nature 11, 357 (1875); S. Carnot, *Réflexions sur la puissance motrice du feu* (1824).

---

## 1. El Límite del Gas Ideal y la Evidencia de las Fuerzas Intermoleculares

*Fuente: Diapositivas Clase 4, diaps. 1–8; Notas tablet diaps. 1–3; Transcripción 00:03–00:45; Weinberg, §2.1.*

El modelo cinético de los gases ideales analizado en las Clases 01 a 03 descansa sobre dos aproximaciones drásticas:
1. Las partículas son puntos geométricos sin extensión espacial finita ($V_{\text{propio}} = 0$).
2. No existen fuerzas de interacción atractiva ni repulsiva a distancia entre moléculas ($U_{\text{inter}}(r) = 0$).

Aunque este modelo reproduce con gran exactitud el comportamiento de gases diluidos a presiones moderadas ($P \lesssim 1\text{ bar}$) y temperaturas elevadas, **fracasa de manera catastrófica al intentar describir la condensación gaseosa hacia la fase líquida**, así como el comportamiento a altas densidades. 

Definiendo el **factor de compresibilidad** adimensional:
$$Z = \frac{P V_m}{R T}$$
donde $V_m = \frac{V}{n}$ es el volumen molar. Para un gas ideal, $Z = 1$ en todo el espacio de estados $(P, T)$. Los experimentos de Thomas Andrews (1869) con dióxido de carbono ($CO_2$) mostraron que $Z$ desciende marcadamente por debajo de 1 a presiones intermedias (evidenciando fuerzas atractivas cohesivas que facilitan la compresión) y se dispara por encima de 1 a presiones muy elevadas (evidenciando la repulsión estérica debida al volumen impenetrable de los núcleos atómicos).

```
                      DESVIACIONES DEL GAS IDEAL Y FACTOR Z
             Z
             ▲
             │             / (Repulsión dominante a alta P: Z > 1)
             │            /
         1.0 ┼───────────/─────── Gas Ideal (Z = 1)
             │          / 
             │   ╭─────╯  (Atracción dominante a P moderada: Z < 1)
             │  ╭╯
             └──┴────────────────────────► P
```

---

## 2. Deducción Física de la Ecuación de Estado de Van der Waals (1873)

*Fuente: Notas tablet Clase 4, diaps. 3–7; Diapositivas Clase 4, diaps. 9–16; Transcripción 00:45–01:30; Van der Waals (1873).*

Johannes Diderik van der Waals propuso en su tesis doctoral de 1873 dos modificaciones microscópicas exactas a la ecuación ideal $P V_m = R T$:

### 2.1. Corrección por Volumen Excluido (Parámetro $b$)
Las moléculas son partículas materiales de radio finito $r_0$ (o diámetro de colisión $d = 2r_0$). El centro de masa de una segunda molécula no puede acercarse al centro de la primera a una distancia inferior a $d$. Por tanto, cada par de moléculas excluye una esfera de radio $d$, cuyo volumen impenetrable es:
$$v_{\text{esfera excl}} = \frac{4}{3}\pi d^3 = \frac{4}{3}\pi (2r_0)^3 = 8\left(\frac{4}{3}\pi r_0^3\right) = 8\, v_{\text{mol}}$$

Dado que este volumen es excluido conjuntamente para el par, el volumen impenetrable atribuible a cada molécula individual es la mitad:
$$v_{\text{excl, individual}} = \frac{1}{2}(8 v_{\text{mol}}) = 4\, v_{\text{mol}}$$

Para un mol de sustancia ($N_A$ moléculas), el **covolumen** o volumen molar excluido $b$ es:
$$b = 4\, N_A \left(\frac{4}{3}\pi r_0^3\right)$$

En consecuencia, el volumen libre real en el cual las moléculas pueden desplazarse no es $V$, sino:
$$V_{\text{libre}} = V - n b$$

### 2.2. Corrección por Cohesión Atractiva Intermolecular (Parámetro $a$)
A distancias mayores que el diámetro de colisión, las fluctuaciones de densidad electrónica inducen dipolos instantáneos que generan fuerzas de atracción atractivas de corto alcance (fuerzas de dispersión de London / Van der Waals).

En el interior del fluido, una molécula está rodeada simétricamente por vecinas en todas direcciones, por lo que la fuerza resultante promedio es cero. Sin embargo, para una molécula que se aproxima a la pared del recipiente, existe una carencia de vecinas en el lado de la pared y una densidad completa de moléculas en el interior que tiran de ella hacia el seno del gas. Esto frena a la molécula justo antes de impactar, reduciendo el momento transferido a la pared y disminuyendo la presión medida experimentalmente frente a la presión cinética teórica ideal:

$$P_{\text{medida}} = P_{\text{cinética}} - P_{\text{cohesión}} \implies P_{\text{cinética}} = P_{\text{medida}} + P_{\text{cohesión}}$$

La presión de cohesión o presión interna depende de dos factores acoplados:
1. El número de moléculas que impactan la pared por unidad de tiempo, proporcional a la densidad numérica: $\frac{n}{V}$.
2. El número de moléculas atractivas que tiran hacia atrás desde la capa inmediata interior, también proporcional a $\frac{n}{V}$.

Por tanto, el efecto colectivo escala con el cuadrado de la densidad molar:
$$P_{\text{cohesión}} = a\left(\frac{n}{V}\right)^2 = \frac{a n^2}{V^2}$$
donde $a$ es una constante macroscópica característica que cuantifica la intensidad de las atracciones intermoleculares.

Sustituyendo la presión cinética efectiva y el volumen libre en la ecuación de estado:

$$\boxed{\left(P + \frac{a n^2}{V^2}\right)(V - n b) = n R T}$$

Para un mol ($n=1$), en términos del volumen molar $V_m = V/n$:

$$\boxed{\left(P + \frac{a}{V_m^2}\right)(V_m - b) = R T}$$

---

## 3. Análisis de las Isotermas de Van der Waals y el Punto Crítico

*Fuente: Notas tablet Clase 4, diaps. 7–10; Transcripción 01:14–02:05; Weinberg, §2.1.*

Despejando la presión en función del volumen molar y la temperatura:
$$P(V_m, T) = \frac{R T}{V_m - b} - \frac{a}{V_m^2}$$

Multiplicando por $V_m^2(V_m - b)$, la ecuación se reescribe como una **ecuación cúbica en el volumen molar $V_m$**:
$$P V_m^3 - (P b + R T) V_m^2 + a V_m - a b = 0$$

Dividiendo entre $P$:
$$\boxed{V_m^3 - \left(b + \frac{R T}{P}\right) V_m^2 + \frac{a}{P} V_m - \frac{a b}{P} = 0}$$

Una ecuación algebraica cúbica con coeficientes reales posee, según el teorema fundamental del álgebra, una raíz real y dos complejas conjugadas, o tres raíces reales.

```
                      ISOTERMAS DE VAN DER WAALS Y PUNTO CRÍTICO
             P
             ▲
             │                  Isoterma T > T_c (Monótona decreciente)
             │                                  │                      \    Punto Crítico (T_c, P_c)
         P_c ┼───────────────────────(•)────────────────
             │                      /                │        ╭───╮        /     \   Isoterma T < T_c
             │       ╭╯   ╰╮      /       \  (Líquido - Vapor)
             │   ────╯     ╰──────                        └───┴───────────┴─────────────────┴────────► V_m
                V_líquido   V_c               V_vapor
```

### 3.1. Condiciones Analíticas del Punto Crítico
En el **punto crítico** $(T_c, P_c, V_c)$, las tres raíces reales del polinomio cúbico se fusionan en una única raíz triple real:
$$(V_m - V_c)^3 = V_m^3 - 3 V_c V_m^2 + 3 V_c^2 V_m - V_c^3 = 0$$

Termodinámicamente, el punto crítico corresponde a un **punto de inflexión con pendiente horizontal** en el plano $(P, V_m)$:
$$\left(\frac{\partial P}{\partial V_m}\right)_{T_c} = 0 \qquad \text{y} \qquad \left(\frac{\partial^2 P}{\partial V_m^2}\right)_{T_c} = 0$$

Calculamos las derivadas a partir de $P = \frac{R T}{V_m - b} - \frac{a}{V_m^2}$:
$$\left(\frac{\partial P}{\partial V_m}\right)_T = -\frac{R T}{(V_m - b)^2} + \frac{2a}{V_m^3} = 0 \implies \frac{R T_c}{(V_c - b)^2} = \frac{2a}{V_c^3}$$

$$\left(\frac{\partial^2 P}{\partial V_m^2}\right)_T = \frac{2 R T}{(V_m - b)^3} - \frac{6a}{V_m^4} = 0 \implies \frac{2 R T_c}{(V_c - b)^3} = \frac{6a}{V_c^4}$$

Dividiendo la primera ecuación entre la segunda:
$$\frac{V_c - b}{2} = \frac{V_c}{3} \implies 3(V_c - b) = 2 V_c \implies \boxed{V_c = 3b}$$

Sustituyendo $V_c = 3b$ en la ecuación de la primera derivada:
$$\frac{R T_c}{(3b - b)^2} = \frac{2a}{(3b)^3} \implies \frac{R T_c}{4b^2} = \frac{2a}{27 b^3} \implies \boxed{T_c = \frac{8a}{27 R b}}$$

Sustituyendo $V_c$ y $T_c$ en la expresión de la presión:
$$P_c = \frac{R\left(\frac{8a}{27 R b}\right)}{3b - b} - \frac{a}{(3b)^2} = \frac{8a}{27(2b^2)} - \frac{a}{9b^2} = \frac{4a}{27b^2} - \frac{3a}{27b^2} \implies \boxed{P_c = \frac{a}{27 b^2}}$$

### 3.2. Factor de Compresibilidad Crítico Universal
Evaluando el factor de compresibilidad en el punto crítico para cualquier gas de Van der Waals:

$$\boxed{Z_c = \frac{P_c V_c}{R T_c} = \frac{\left(\frac{a}{27 b^2}\right)(3b)}{R\left(\frac{8a}{27 R b}\right)} = \frac{3a / 27b}{8a / 27b} = \frac{3}{8} = 0.375}$$

Esta predicción es universal e independiente de los valores particulares de $a$ y $b$, lo que condujo a Van der Waals a postular la **Ley de Estados Correspondientes** en términos de las variables reducidas $P_r = P/P_c$, $T_r = T/T_c$, $V_r = V_m/V_c$. Experimentalmente, la mayoría de los gases reales presentan $Z_c \approx 0.28 - 0.31$, un acuerdo notable para un modelo de dos parámetros.

---

## 4. La Regla de Áreas Iguales de Maxwell

*Fuente: Notas tablet Clase 4, diaps. 9–12; Transcripción 01:15–01:45.*

Para temperaturas subcríticas ($T < T_c$), la isoterma cúbica describe un bucle con una porción intermedia en la cual $\left(\frac{\partial P}{\partial V}\right)_T > 0$. Esto representaría una fase termodinámicamente inestable: al aumentar la presión, el volumen aumentaría, lo que violaría el principio de estabilidad mecánica.

En la naturaleza, el sistema elude esta trayectoria no física mediante una **transición de fase de primer orden**: la condensación de vapor a líquido a una presión de vapor saturado constante $P_{\text{sat}}(T)$.

```
                     CONSTRUCCIÓN DE ÁREAS IGUALES DE MAXWELL
             P
             ▲
             │         Isoterma cúbica
             │             ╭─────╮  Área A₁
         P_sat ┼───────────┼─────┼──────────
             │             ╰─────╯  Área A₂
             │
             └───┴─────────┴─────┴──────────► V_m
                V_L             V_V
```

James Clerk Maxwell (1875) demostró que durante la coexistencia de dos fases en equilibrio térmico y mecánico, el potencial químico molar (o energía libre de Gibbs) debe ser idéntico en ambas fases: $\mu_L(T, P_{\text{sat}}) = \mu_V(T, P_{\text{sat}})$. Dado que $d\mu = -s dT + v dP$, a temperatura constante:
$$\mu_V - \mu_L = \int_L^V V_m\, dP = 0$$

Integrando por partes, esto equivale estrictamente a que la línea horizontal $P = P_{\text{sat}}$ corte la curva de Van der Waals de modo tal que las dos áreas encerradas por encima y por debajo de la meseta horizontal sean exactamente iguales:

$$\boxed{\int_{V_L}^{V_V} \left[P(V_m, T) - P_{\text{sat}}\right] dV_m = 0 \implies \text{Área } A_1 = \text{Área } A_2}$$

---

## 5. Fundamentos de la Termodinámica: El Colapso del Calórico y la Primera Ley

*Fuente: Weinberg, §2.1; Diapositivas Clase 4, diaps. 17–24; Transcripción 01:45–02:55.*

Durante el siglo XVIII y principios del XIX, el calor se interpretaba bajo la **teoría del calórico**: un fluido imponderable, indestructible y auto-repulsivo que impregnaba los cuerpos materiales y fluía desde los cuerpos calientes hacia los fríos conservando su masa total.

### 5.1. Los Experimentos de Joule y el Equivalente Mecánico
James Prescott Joule (1843–1850) destruyó definitivamente la hipótesis del calórico mediante su célebre experimento de las paletas mecánicas giratorias accionadas por la caída de pesos en un calorímetro aislado con agua. Joule demostró que:
1. El trabajo mecánico puede transformarse íntegramente en calor.
2. La cantidad de calor generada es cuantitativamente equivalente al trabajo disipado, estableciendo el **equivalente mecánico del calor**:
   $$1\text{ cal} \approx 4.184\text{ J}$$

El calor no es un fluido material que se conserve, sino una **forma de transferencia microscópica desordenada de energía**.

### 5.2. Formulación Matemática de la Primera Ley
La Primera Ley establece el principio universal de conservación de la energía para sistemas termodinámicos. Existe una función de estado extensiva denominada **energía interna** $U$, tal que para cualquier transformación entre dos estados de equilibrio:

$$\boxed{\Delta U = Q - W \implies dU = \delta Q - \delta W}$$

donde:
- $dU$ es una **diferencial exacta**: su integral depende exclusivamente de los estados inicial y final, no del camino seguido ($\oint dU = 0$).
- $\delta Q$ y $\delta W$ son **diferenciales inexactas** (notadas con $\delta$): dependen intrínsecamente de la trayectoria y de los detalles del proceso.

Para un proceso cuasiestático en el que el único trabajo macroscópico es de compresión o expansión volumétrica ($\delta W = P dV$):

$$\boxed{dU = \delta Q - P\, dV}$$

### 5.3. Procesos Particulares en Gases Ideales
1. **Proceso Isocórico ($dV = 0$):**  
   $$W = 0 \implies dU = \delta Q_V = n C_V dT$$
2. **Proceso Isobárico ($P = \text{cte}$):**  
   $$\delta Q_P = dU + P dV = d(U + PV) = dH = n C_P dT$$
   donde $H = U + PV$ es la **entalpía**. Para el gas ideal, la relación de Mayer impone:
   $$C_P - C_V = R$$
3. **Proceso Isotérmico ($T = \text{cte}$):**  
   Dado que $U = U(T)$, $\Delta U = 0$:
   $$Q = W = \int_{V_1}^{V_2} P dV = n R T \int_{V_1}^{V_2} \frac{dV}{V} = n R T \ln\left(\frac{V_2}{V_1}\right)$$
4. **Proceso Adiabático Reversible ($\delta Q = 0$):**  
   $$dU = -P dV \implies n C_V dT = -\frac{n R T}{V} dV \implies \frac{dT}{T} + \frac{R}{C_V} \frac{dV}{V} = 0$$
   Definiendo el coeficiente adiabático $\gamma = \frac{C_P}{C_V} = 1 + \frac{R}{C_V}$:
   $$\ln T + (\gamma - 1)\ln V = \text{cte} \implies T V^{\gamma - 1} = \text{constante}$$
   Utilizando $T \propto PV$:
   $$\boxed{P V^\gamma = \text{constante}}$$

---

## 6. Conclusiones de la Clase

1. **Ruptura del gas ideal:** El factor de compresibilidad $Z = \frac{PV_m}{RT}$ evidencia que las moléculas poseen un volumen propio finito ($b$) y fuerzas atractivas de largo alcance ($a$), indispensables para explicar la condensación.
2. **Ecuación de Van der Waals:** Modifica la presión y el volumen libre: $\left(P + \frac{a}{V_m^2}\right)(V_m - b) = RT$, unificando analíticamente las fases gaseosa y líquida en una única ecuación cúbica.
3. **Punto crítico analítico:** Las condiciones $\left(\frac{\partial P}{\partial V_m}\right)_{T_c} = \left(\frac{\partial^2 P}{\partial V_m^2}\right)_{T_c} = 0$ determinan de manera única las constantes críticas: $V_c = 3b$, $P_c = \frac{a}{27b^2}$, $T_c = \frac{8a}{27Rb}$ y el factor universal $Z_c = 3/8 = 0.375$.
4. **Construcción de Maxwell:** Resuelve la inestabilidad termodinámica del bucle cúbico subcrítico imponiendo la igualdad de áreas $\int (P - P_{\text{sat}}) dV = 0$, garantizando el equilibrio de potencial químico entre líquido y vapor saturado.
5. **Primera Ley de la Termodinámica:** El colapso del calórico (Joule) formaliza el calor como transferencia microscópica de energía. La Primera Ley $dU = \delta Q - P dV$ define la energía interna como función de estado exacta, sentando las bases para el análisis de la Segunda Ley y la entropía (Clase 05).

---

## 7. Referencias Bibliográficas

1. **Fuentes primarias y artículos históricos:**
   - Van der Waals, J. D. (1873). *Over de Continuïteit van den Gas- en Vloeistoftoestand*. Leiden: A. W. Sijthoff.
   - Joule, J. P. (1843). "On the Caloric Effects of Magneto-Electricity, and on the Mechanical Value of Heat". *Philosophical Magazine*, 23, 263–276.
   - Maxwell, J. C. (1875). "On the Dynamical Evidence of the Molecular Constitution of Bodies". *Nature*, 11, 357–359.
   - Carnot, S. (1824). *Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance*. París: Bachelier.
2. **Textos y materiales del diplomado:**
   - Oliva Zapata, J. E. (2026). *Material pedagógico de Clase 04: Gases reales, ecuación de Van der Waals y Primera Ley*. Universidad de Concepción.
   - Oliva Zapata, J. E. (2026). *Notas tablet clase 4* (Apuntes manuscritos de pizarra digital).
3. **Textos universitarios canónicos:**
   - Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. Cap. 2: §2.1 "Heat and Energy", pp. 16–21; §2.2 "Absolute Temperature", pp. 21–27.
   - Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics* (2ª ed.). Nueva York: John Wiley & Sons.
   - Zemansky, M. W., & Dittman, R. H. (1997). *Heat and Thermodynamics* (7ª ed.). Nueva York: McGraw-Hill.
