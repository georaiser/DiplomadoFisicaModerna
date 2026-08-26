# Resumen Ejecutivo: Clase 03 — Factor k de Bondi, Efecto Doppler y Composición de Velocidades

**Diplomado en Física Moderna — Módulo 03: Relatividad Especial**  
**Docente:** Dr. Guillermo Rubilar Alegría  
**Fecha:** 14 de agosto de 2026  
**Documento:** `Analisis_Clase_03_short.md`

---

## 1. El Factor $k$ de Hermann Bondi
Para dos observadores inerciales $A$ y $B$ con velocidad relativa $v$, la relación entre intervalos de tiempo de emisión y recepción de pulsos luminosos es $\Delta T_B = k \Delta T_A$.

Mediante el protocolo de emisión, reflexión en $B$ y recepción en $A$:
- Coordenadas del evento de reflexión: $t_P = \frac{1+k^2}{2}T$, $x_P = c\frac{k^2-1}{2}T$.
- Relación con la velocidad relativa $\beta = v/c = \frac{x_P}{c t_P} = \frac{k^2-1}{k^2+1}$.

Despejando el **Factor de Bondi**:
$$k = \sqrt{\frac{1 + v/c}{1 - v/c}} = \sqrt{\frac{1 + \beta}{1 - \beta}}$$

---

## 2. Efecto Doppler Relativista Longitudinal
La relación entre la frecuencia emitida $\nu_{\text{em}}$ y la recibida $\nu_{\text{rec}}$ viene dada por:

- **Fuente en alejamiento (Redshift):**
  $$\nu_{\text{rec}} = \frac{\nu_{\text{em}}}{k} = \nu_{\text{em}} \sqrt{\frac{1 - v/c}{1 + v/c}} < \nu_{\text{em}}$$

- **Fuente en aproximación (Blueshift):**
  $$\nu_{\text{rec}} = k \, \nu_{\text{em}} = \nu_{\text{em}} \sqrt{\frac{1 + v/c}{1 - v/c}} > \nu_{\text{em}}$$

- **Parámetro de Redshift ($z$):**
  $$z \equiv \frac{\Delta \lambda}{\lambda_0} = k - 1 = \sqrt{\frac{1 + \beta}{1 - \beta}} - 1 \approx \frac{v}{c} \quad (\text{para } v \ll c)$$

---

## 3. Ley de Composición Relativista de Velocidades 1D
Por transitividad del factor de Bondi entre tres observadores $A$, $B$ y $C$:
$$k_{AC} = k_{AB} \cdot k_{BC}$$

Elevando al cuadrado y despejando $v_{AC}$:
$$v_{AC} = \frac{v_{AB} + v_{BC}}{1 + \dfrac{v_{AB} v_{BC}}{c^2}}$$

**Propiedades Clave:**
1. **Límite Clásico:** Para $v \ll c$, recupera $v_{AC} \approx v_{AB} + v_{BC}$.
2. **Invarianza de $c$:** Si $v_{BC} = c$, entonces $v_{AC} = c$ para todo observador.
3. **Velocidad Límite:** Si $|v_{AB}| < c$ y $|v_{BC}| < c$, entonces estrictamente $|v_{AC}| < c$.

---

## 4. Conclusiones de la Clase
1. El $k$-cálculo de Bondi proporciona una derivación geométrica directa y operacional de la cinemática relativista.
2. El efecto Doppler relativista incorpora de forma unificada el corrimiento de frecuencias clásico y la dilatación temporal del emisor.
3. La ley de adición relativista garantiza la imposibilidad de alcanzar o superar la velocidad de la luz mediante composición sucesiva de velocidades sublumínicas.
