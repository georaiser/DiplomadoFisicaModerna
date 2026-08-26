# Resumen Ejecutivo: Clase 04 — Transformaciones de Lorentz, Espaciotiempo y Dinámica Relativista

**Diplomado en Física Moderna — Módulo 03: Relatividad Especial**  
**Docente:** Dr. Guillermo Rubilar Alegría  
**Fecha:** 21 de agosto de 2026  
**Documento:** `Analisis_Clase_04_short.md`

---

## 1. Transformaciones de Lorentz (Boosts 1D)
Reemplazan a las transformaciones galileanas conectando las coordenadas $(t, x)$ y $(t', x')$ de dos SRI en movimiento relativo con velocidad $v$:

$$x' = \gamma (x - vt) = \frac{x - vt}{\sqrt{1 - v^2/c^2}}, \qquad t' = \gamma \left(t - \frac{v}{c^2}x\right) = \frac{t - \frac{v}{c^2}x}{\sqrt{1 - v^2/c^2}}, \qquad y'=y, \quad z'=z$$

con el **Factor de Lorentz**:
$$\gamma \equiv \frac{1}{\sqrt{1 - \beta^2}} = \frac{1}{\sqrt{1 - v^2/c^2}} \ge 1$$

---

## 2. Invarianza del Intervalo Espaciotemporal
El intervalo cuadrático de Minkowski $\Delta s^2$ es un invariante de Lorentz idéntico para todos los observadores:
$$\Delta s^2 = c^2 \Delta t^2 - |\Delta\vec{x}|^2 = c^2 \Delta t'^2 - |\Delta\vec{x}'|^2 = \text{invariante}$$

- **Tipo Tiempo ($\Delta s^2 > 0$):** Causalmente conectados ($v < c$). Tiempo propio real $\Delta\tau = \sqrt{\Delta s^2}/c$. Orden temporal absoluto.
- **Tipo Luz ($\Delta s^2 = 0$):** Conectados por fotones a $v = c$. Cono de luz.
- **Tipo Espacio ($\Delta s^2 < 0$):** Desconectados causalmente. Simultáneos en algún SRI ($\Delta t' = 0$).

---

## 3. Cinemática Relativista Fundamental
1. **Relatividad de la Simultaneidad:**
   $$\Delta t' = -\frac{\gamma v \Delta x}{c^2} \neq 0 \quad (\text{para eventos con } \Delta t = 0 \text{ y } \Delta x \neq 0)$$
2. **Dilatación Temporal:**
   $$\Delta t = \gamma \Delta t_0 = \frac{\Delta t_0}{\sqrt{1 - v^2/c^2}} \ge \Delta t_0 \quad (\text{comprobada con muones y relojes atómicos})$$
3. **Contracción de Longitud:**
   $$L = \frac{L_0}{\gamma} = L_0 \sqrt{1 - \frac{v^2}{c^2}} \le L_0 \quad (\text{sólo en dirección paralela a } \vec{v})$$

---

## 4. Dinámica Relativista: Momentum y Energía
- **Momentum Lineal Relativista:**
  $$\vec{p} = \gamma m \vec{v} = \frac{m\vec{v}}{\sqrt{1 - v^2/c^2}}$$
- **Fuerza Neta Relativista:**
  $$\vec{F} = \frac{d\vec{p}}{dt} = \gamma^3 m \vec{a} \quad (\text{en 1D})$$
- **Energía Total y Energía en Reposo:**
  $$E = \gamma m c^2 = K + m c^2 \qquad \text{con} \qquad E_0 = m c^2$$
- **Energía Cinética Relativista:**
  $$K = (\gamma - 1) m c^2 \approx \frac{1}{2}mv^2 + \frac{3}{8}m\frac{v^4}{c^2} + \dots \quad (\text{para } v \ll c)$$
- **Relación Invariante Energía-Momentum:**
  $$E^2 = (pc)^2 + (mc^2)^2$$
- **Partículas sin masa ($m = 0$, Fotones):**
  $$E = pc \iff p = \frac{E}{c} = \frac{h\nu}{c}, \qquad v = c$$
- **Procesos Nucleares:** Fisión y fusión liberan energía a partir del defecto de masa $\Delta E = \Delta m \cdot c^2$ ($1\text{ g} \approx 9 \times 10^{13}\text{ J}$).

---

## 5. Conclusiones de la Clase
1. Las transformaciones de Lorentz unifican el espacio y el tiempo en una estructura cuadridimensional continua (espaciotiempo de Minkowski).
2. La simultaneidad es relativa, el tiempo se dilata y la longitud se contrae según el observador inercial.
3. La conservación del momentum exige redefinir la masa y la energía, revelando la energía intrínseca en reposo $E_0 = mc^2$ y la relación invariante $E^2 = p^2c^2 + m^2c^4$.
