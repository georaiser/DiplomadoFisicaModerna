# Análisis Clase 03 — Fenómenos de Transporte, Colisiones y Fokker-Planck

**Módulo:** Termodinámica y Teoría Atómica Precuántica | **Docente:** Dr. Julio Eduardo Oliva Zapata | **Fecha:** 29 de mayo de 2026

---

## 1. El Camino Libre Medio ($\lambda$)

En condiciones fuera del equilibrio térmico homogéneo, surgen gradientes espaciales que generan flujos de masa (difusión), momento (viscosidad) y energía (conducción). El mecanismo microscópico unificador es el **camino libre medio** $\lambda$: la distancia promedio que recorre una molécula entre dos colisiones sucesivas.

Modelando las moléculas como esferas duras de diámetro $d$, la sección eficaz de dispersión es $\sigma = \pi d^2$. Considerando que las partículas blanco también se mueven, la velocidad relativa promedio es $\langle v_{\text{rel}}\rangle = \sqrt{2}\langle v\rangle$. La frecuencia de colisiones resulta $z = \sqrt{2}\pi d^2 n \langle v\rangle$. El camino libre medio queda determinado por:

$$\boxed{\lambda = \frac{1}{\sqrt{2}\,\pi d^2 n} = \frac{k_B T}{\sqrt{2}\,\pi d^2 P}}$$

A temperatura ambiente y presión atmosférica ($1\text{ atm}$), $\lambda \approx 68\text{ nm}$, correspondiente a cientos de veces el diámetro atómico.

---

## 2. Viscosidad Dinámica y la Paradoja de Maxwell

El esfuerzo cortante $\tau_{xz} = \eta \frac{\partial u_x}{\partial z}$ transporta momento transversal mediante moléculas que cruzan un plano de referencia provenientes de capas separadas por $\sim \lambda$. La teoría cinética elemental establece que $\eta = \frac{1}{3}\rho \langle v\rangle \lambda$. Reemplazando $\lambda$ y $\rho = n m$:

$$\boxed{\eta = \frac{m \langle v\rangle}{3\sqrt{2}\pi d^2} = \frac{2}{3\pi^{3/2} d^2}\sqrt{m k_B T}}$$

Esta ecuación encierra dos resultados fundamentales:
1. **Independencia de la presión:** La viscosidad de un gas diluido no depende de la densidad ni de la presión, ya que un mayor número de partículas transportadoras se compensa exactamente con un camino libre medio más corto.
2. **Dependencia térmica positiva:** $\eta \propto \sqrt{T}$. A mayor agitación térmica, mayor es la tasa de transporte de momento (comportamiento opuesto al de los líquidos).

---

## 3. Ley de Stokes y Velocidad Terminal

Para una partícula esférica de radio $r$ que sedimenta en un fluido viscoso laminar ($Re \ll 1$), la fuerza de arrastre hidrodinámica es $\vec{F}_{\text{Stokes}} = -6\pi\eta r \vec{v}$.

Considerando el peso gravitatorio y el empuje de Arquímedes, el balance de fuerzas en régimen estacionario ($dv/dt = 0$) define la **velocidad terminal de caída**:

$$(
ho_s - 
ho_f) g\left(\frac{4}{3}\pi r^3\right) = 6\pi\eta r v_t \implies \boxed{v_t = \frac{2 r^2 g (
ho_s - 
ho_f)}{9\eta}}$$

Esta relación permite medir con alta precisión la viscosidad del fluido o determinar el radio molecular y la escala atómica.

---

## 4. Ecuación de Difusión y Fokker-Planck 1D

La superposición de una deriva macroscópica $\mu$ y fluctuaciones difusivas estocásticas $Dif$ obedece la **ecuación de Fokker-Planck 1D**:

$$\frac{\partial f(x, t)}{\partial t} = -\mu \frac{\partial f(x, t)}{\partial x} + Dif \frac{\partial^2 f(x, t)}{\partial x^2}$$

Con condición inicial localizada ($f(x,0) = \delta(x)$), la solución es un paquete gaussiano:

$$\boxed{f(x, t) = \frac{1}{\sqrt{4\pi\, Dif\, t}} \exp\left(-\frac{(x - \mu t)^2}{4\, Dif\, t}\right)}$$

El desplazamiento cuadrático medio respecto a la media crece linealmente con el tiempo:

$$\boxed{\langle (\Delta x)^2\rangle = 2\, Dif\, t}$$

Esta tasa sublineal $\Delta x_{\text{rms}} \propto \sqrt{t}$ es la signatura analítica del movimiento browniano y de las caminatas aleatorias.

---

## 5. Conclusiones de la Clase

1. Los fenómenos de transporte (difusión, viscosidad, conducción) se originan en el vuelo molecular libre a lo largo de distancias promedio $\lambda = \frac{1}{\sqrt{2}\pi d^2 n}$.
2. La viscosidad gaseosa $\eta \propto \sqrt{T}$ es independiente de la densidad del gas, confirmando experimentalmente la naturaleza discreta y cinética de los átomos.
3. El equilibrio hidrodinámico de Stokes-Arquímedes define la velocidad terminal $v_t = \frac{2 r^2 g(
ho_s - 
ho_f)}{9\eta}$.
4. La ecuación de Fokker-Planck describe formalmente la difusión térmica, prediciendo un ensanchamiento difusivo $\sigma_x \propto \sqrt{t}$ que vincula el azar molecular con leyes microscópicas deterministas.
