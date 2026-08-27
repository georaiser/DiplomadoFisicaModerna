# Análisis Clase 04 — Dinámica de la Radiación, Coeficientes de Einstein y Física del Láser

**Módulo:** Teoría Cuántica Temprana | **Docente:** Pablo Andrés Solano Palma | **Fecha:** 24 jul 2026  
**Fuentes:** Transcripción de clase (24 jul 2026) · Diapositivas PPTX Clase 4 (27 diapositivas) · Bibliografía estándar del curso

---

## 1. Motivación Física: El Átomo en un Baño Térmico

Considérese un átomo inmerso en una cavidad cerrada en equilibrio térmico a temperatura $T$ (un "baño de fotones térmicos"). La cavidad emite radiación de cuerpo negro con densidad espectral de energía $\rho(f)$ descrita por la ley de Planck.

La cuestión fundamental formulada por Albert Einstein en 1917 fue: **¿Cuáles son los mecanismos microscópicos que permiten a la materia y a la radiación intercambiar energía y alcanzar dicho equilibrio estadístico?**

---

## 2. Los Tres Procesos de Einstein (1917)

Para un átomo idealizado con dos niveles de energía discretos $E_n$ (nivel fundamental o inferior) y $E_m$ (nivel excitado o superior), donde la frecuencia de transición resonante es:

$$hf = E_m - E_n$$

Einstein postuló la existencia de tres procesos elementales:

1. **Emisión Espontánea ($A_{nm}$):** Transición probabilística desde $E_m$ hacia $E_n$ sin intervención de radiación externa. La tasa por átomo excitado es $A_{nm}$ (unidades $\text{s}^{-1}$), una constante intrínseca del átomo.
2. **Absorción Estimulada ($B_{mn}\rho(f)$):** Transición desde $E_n$ hacia $E_m$ inducida por la densidad espectral de radiación $\rho(f)$. La tasa por átomo en el estado basal es $B_{mn}\rho(f)$.
3. **Emisión Estimulada ($B_{nm}\rho(f)$):** Un fotón incidente de frecuencia resonante $f$ induce la desexcitación desde $E_m$ hacia $E_n$, liberando un segundo fotón estrictamente idéntico al primero. La tasa por átomo excitado es $B_{nm}\rho(f)$.

---

## 3. Balance Estadístico y Derivación de $\rho(f)$

### 3.1. Ecuación de Tasa Poblacional

Sean $N_n$ y $N_m$ las poblaciones (número de átomos) en los niveles $E_n$ y $E_m$, respectivamente. La tasa de cambio temporal de la población del nivel inferior $N_n$ es:

$$\frac{dN_n}{dt} = \underbrace{N_m A_{nm}}_{\text{Emisión Espontánea}} + \underbrace{N_m B_{nm}\rho(f)}_{\text{Emisión Estimulada}} - \underbrace{N_n B_{mn}\rho(f)}_{\text{Absorción}}$$

### 3.2. Condición de Equilibrio Térmico

En el equilibrio estacionario a temperatura $T$, la derivada temporal es nula ($\frac{dN_n}{dt} = 0$), lo que impone el balance detallado:

$$N_n B_{mn}\rho(f) = N_m A_{nm} + N_m B_{nm}\rho(f)$$

Factorizando $\rho(f)$:

$$\rho(f)\left[N_n B_{mn} - N_m B_{nm}\right] = N_m A_{nm}$$

Dividiendo numerador y denominador entre $N_m$:

$$\rho(f) = \frac{A_{nm}}{\left(\dfrac{N_n}{N_m}\right) B_{mn} - B_{nm}}$$

### 3.3. Distribución Canónica de Boltzmann

En equilibrio térmico a temperatura $T$, las poblaciones relativas satisfacen la distribución de Boltzmann:

$$\frac{N_m}{N_n} = e^{-(E_m - E_n)/k_BT} = e^{-hf/k_BT} \implies \frac{N_n}{N_m} = e^{hf/k_BT}$$

Sustituyendo en la expresión para $\rho(f)$:

$$\boxed{\rho(f) = \frac{A_{nm}}{B_{mn} e^{hf/k_BT} - B_{nm}}}$$

---

## 4. Correspondencia con la Ley de Planck y Relaciones de Einstein

La ley de radiación de Planck para la densidad espectral de energía dentro de una cavidad viene dada por:

$$\rho_{Planck}(f) = \frac{8\pi h f^3}{c^3} \cdot \frac{1}{e^{hf/k_BT} - 1}$$

Para que la expresión obtenida por balance microscópico coincida idénticamente con la ley de Planck a cualquier temperatura $T$, deben satisfacerse simultáneamente dos condiciones matemáticas:

### 4.1. Simetría de Coeficientes de Absorción y Emisión Estimulada

$$B_{mn} = B_{nm} \equiv B$$

La probabilidad intrínseca por unidad de densidad de campo de absorber un fotón es exactamente igual a la de emitir un fotón por estímulo.

### 4.2. Razón Fundamental entre Emisión Espontánea y Estimulada

$$\boxed{\frac{A_{nm}}{B_{nm}} = \frac{8\pi h f^3}{c^3}}$$

**Significado Físico:**
- Los coeficientes $A$ y $B$ no son independientes; están acoplados rígidamente por constantes universales ($h, c$) y la frecuencia cúbica ($f^3$).
- A frecuencias bajas (microondas, radio, $f \ll$), domina la emisión estimulada ($B\rho$).
- A frecuencias elevadas (óptico, ultravioleta, rayos X, $f \gg$), la emisión espontánea escala como $f^3$, dominando fuertemente el decaimiento.

---

## 5. El "Fotón Clonado" y la Coherencia Cuántica

El fotón generado mediante **emisión estimulada** posee propiedades idénticas a las del fotón estimulador:

| Propiedad | Fotón Incidente | Fotón Estimulado | Consecuencia Física |
|---|---|---|---|
| **Energía / Frecuencia** | $E = hf$ | $E = hf$ | Monocromaticidad perfecta |
| **Fase** | $\phi_0$ | $\phi_0$ | Interferencia constructiva máxima |
| **Dirección** | $\hat{\mathbf{k}}$ | $\hat{\mathbf{k}}$ | Alta colimación y direccionalidad |
| **Polarización** | $\hat{\boldsymbol{\epsilon}}$ | $\hat{\boldsymbol{\epsilon}}$ | Estado de polarización idéntico |

*Origen cuántico:* Los fotones son bosones (espín entero $S=1$) que obedecen la estadística de Bose-Einstein. La presencia de $n$ fotones en un modo electromagnético incrementa la probabilidad de emitir un fotón adicional en ese mismo estado cuántico en un factor proporcional a $(n+1)$.

---

## 6. Absorción Suprimida y Astrofísica: La Línea de 21 cm

En el límite de bajas frecuencias o altas temperaturas ($hf \ll k_BT$):

$$\frac{N_m}{N_n} = e^{-hf/k_BT} \approx 1 - \frac{hf}{k_BT} \approx 1 \implies N_m \approx N_n$$

Las tasas de absorción ($N_n B \rho$) y de emisión estimulada ($N_m B \rho$) se igualan prácticamente. Cada fotón absorbido es compensado en promedio por un fotón emitido estimuladamente en la misma dirección, produciendo **absorción suprimida** (el medio se vuelve ópticamente transparente).

### Aplicación en Astrofísica: Hidrógeno Neutro (HI)
- **Transición:** Estructura hiperfina del estado fundamental del hidrógeno debido al acoplamiento de espines del protón y del electrón (paralelos vs. antiparalelos).
- **Frecuencia y Longitud de Onda:** $\nu = 1420.405\ \text{MHz}$, $\lambda = 21.1\ \text{cm}$.
- **Relevancia:** La radiación de 21 cm atraviesa el polvo interestelar sin ser extinguida, permitiendo mapear la rotación y estructura espiral de la Vía Láctea y medir cinemática galáctica (corrimiento Doppler de las Nubes de Magallanes).

---

## 7. Tecnología Láser (*Light Amplification by Stimulated Emission of Radiation*)

### 7.1. Inversión de Población

En equilibrio térmico ordinario, la distribución de Boltzmann impone que $N_m < N_n$ para cualquier $T > 0$. Para lograr **amplificación de luz**, es indispensable forzar un estado de no-equilibrio donde:

$$N_m > N_n \qquad \text{(Inversión de Población)}$$

Bajo esta condición, la ganancia por emisión estimulada supera las pérdidas por absorción.

### 7.2. Esquema de Bombeo de Tres Niveles

En un sistema cerrado de dos niveles, la saturación óptica solo permite alcanzar a lo sumo $N_m = N_n$. Se requiere al menos un esquema de tres niveles:

1. **Nivel 1 (Fundamental):** Población inicial.
2. **Nivel 3 (Banda de Bombeo):** Excitación externa rápida mediante bombeo óptico, eléctrico o descarga.
3. **Nivel 2 (Metaestable):** Decaimiento no radiativo ultra-rápido desde el nivel 3 al nivel 2 ($3 \to 2$). El nivel 2 tiene un tiempo de vida largo (coeficiente $A_{21}$ pequeño), permitiendo acumular electrones y lograr $N_2 > N_1$ para producir la transición láser $2 \to 1$.

```
   Nivel 3  ───────────────────────
               ▲               │ Decaimiento rápido no radiativo
   Bombeo      │               ▼
   externo     │            Nivel 2 (Metaestable) ───────────────
               │                                      │
               │                                      ▼ Transición Láser (hν)
   Nivel 1  ─────────────────────────────────────────────────────
```

### 7.3. Clasificación de Sistemas Láser

- **Semiconductores (Diodo):** Muy compactos y eficientes. Telecomunicaciones por fibra óptica ($\lambda \approx 1550\ \text{nm}$), lectores de códigos, punteros.
- **Gas ($\text{CO}_2$, $\text{He-Ne}$):** $\text{CO}_2$ ($\lambda = 10.6\ \mu\text{m}$, IR lejano) de alta potencia continua para corte industrial y manufactura pesada; $\text{He-Ne}$ ($\lambda = 632.8\ \text{nm}$) para alineación y holografía.
- **Estado Sólido ($\text{Nd:YAG}$, Rubí):** $\text{Nd:YAG}$ ($\lambda = 1064\ \text{nm}$) con pulsos gigantescos; medicina, dermatología y corte de precisión.
- **Líquidos (Colorantes) y Fibra Óptica:** Espectroscopía fina sintonizable y amplificación óptica directa (EDFA).

### 7.4. Propiedades Únicas de la Radiación Láser

1. **Coherencia Espacial:** Permite enfocar la energía en manchas difractivas del orden de $\lambda$ (densidades de potencia del orden de $\text{MW/cm}^2$ a $\text{GW/cm}^2$), fundamental en cirugía LASIK y fotolitografía de microchips.
2. **Coherencia Temporal:** Ancho de línea ultra-estrecho ($\Delta\nu \to 0$, longitud de coherencia kilométrica), base del multiplexado WDM en telecomunicaciones.
3. **Alta Direccionalidad:** Divergencia angular casi nula $\theta \approx \lambda/D$, esencial para LiDAR, metrología e interferometría de ondas gravitacionales (LIGO / VIRGO).

---

## 8. Resumen de Ecuaciones Clave

| Concepto | Ecuación / Expresión | Descripción de Variables |
|---|---|---|
| Frecuencia de transición | $hf = E_m - E_n$ | $h$: cte. Planck, $f$: frecuencia, $E_i$: energías |
| Balance de poblaciones | $\dfrac{dN_n}{dt} = N_m A_{nm} + N_m B_{nm}\rho - N_n B_{mn}\rho$ | $N$: poblaciones, $A, B$: coefs. Einstein, $\rho$: densidad radiación |
| Distribución de Boltzmann | $\dfrac{N_m}{N_n} = e^{-hf/k_BT}$ | $k_B$: cte. Boltzmann, $T$: temperatura absoluta |
| Simetría de coeficientes | $B_{mn} = B_{nm}$ | Igualdad de coeficientes de absorción y emisión estimulada |
| Razón de coeficientes Einstein | $\dfrac{A_{nm}}{B_{nm}} = \dfrac{8\pi h f^3}{c^3}$ | Relación fundamental entre emisión espontánea y estimulada |
| Condición de inversión láser | $N_m > N_n$ | Población del nivel superior supera al nivel inferior |
| Longitud de onda HI (21 cm) | $\nu_{HI} \approx 1420.4\ \text{MHz}, \ \lambda \approx 21.1\ \text{cm}$ | Transición hiperfina de inversión de espín en hidrógeno |

---

## 9. Conclusiones

1. **Einstein (1917)** demostró que la física estadística clásica y los niveles discretos de Bohr solo pueden reconciliarse con la ley de radiación de Planck si existe un mecanismo de **emisión estimulada**, proporcional a la densidad de energía del campo electromagnético.
2. Los coeficientes de Einstein satisfacen dos identidades universales: la igualdad de probabilidades de absorción y emisión estimulada ($B_{mn} = B_{nm}$) y el cociente $A_{nm}/B_{nm} = 8\pi h f^3/c^3$, evidenciando que la emisión espontánea es dominada por las altas frecuencias.
3. El fotón emitido por estímulo es una copia cuántica perfecta del fotón incidente (idéntica fase, frecuencia, dirección y polarización), consecuencia directa de la estadística bosónica.
4. En sistemas donde $hf \ll k_BT$ (como la transición hiperfina de 21 cm del hidrógeno), la emisión estimulada equilibra la absorción, suprimiendo la opacidad del medio interestelar y permitiendo la cartografía galáctica.
5. La construcción de un láser requiere superar la barrera térmica mediante **inversión de población** ($N_m > N_n$), alcanzada a través de esquemas de al menos tres niveles con estados metaestables, proveyendo haces de coherencia espacial, temporal y direccionalidad sin análogo clásico.
