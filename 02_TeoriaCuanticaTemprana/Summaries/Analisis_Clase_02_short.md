# Análisis Clase 02 — Fundamentos de la Física Cuántica, Radiación Térmica y Aplicaciones

**Módulo:** Teoría Cuántica Temprana | **Docente:** Paulraj Manidurai | **Fecha:** 10 jul 2026

---

## 1. Física Clásica vs. Física Cuántica

La física clásica (mundo macroscópico) separa partículas de ondas: las partículas poseen energía $E$ y momento $p$; las ondas poseen amplitud $A$ y vector de onda $k = 2\pi/\lambda$.

La física cuántica rige en el mundo microscópico cuando la masa es extremadamente pequeña ($m \sim 10^{-31}$ kg) y las velocidades se aproximan a la velocidad de la luz ($c = 3\times 10^8$ m/s):

- **Probabilismo:** El estado se describe por la función de onda $\Psi(\mathbf{r},t)$, y $|\Psi|^2$ es la densidad de probabilidad.
- **Dualidad de de Broglie (1924):** Toda partícula de momento $p$ tiene una longitud de onda asociada:

$$\boxed{\lambda = \frac{h}{p} = \frac{h}{\sqrt{2mK}}}$$

---

## 2. Mecanismo de la Radiación Térmica y Ley de Stefan-Boltzmann

La radiación absorbida aumenta la energía cinética de oscilación de los átomos constituyentes, elevando la temperatura $T$. Dado que los átomos contienen cargas (electrones), su aceleración por las oscilaciones provoca la emisión de radiación electromagnética (fórmula de Larmor). En el equilibrio térmico, la tasa de absorción iguala la tasa de emisión.

Para un **cuerpo negro ideal** ($\varepsilon = 1$), la potencia emitida por unidad de área es:

$$\boxed{R = \sigma T^4,\qquad \sigma = 5.6703 \times 10^{-8}\ \text{W m}^{-2}\text{K}^{-4}}$$

### Problema Resuelto (Cálculo del Radio Estelar)

**Enunciado:** Una estrella tiene $T_{estrella} = 3000$ K y emite 100 veces la potencia del Sol ($P_{estrella} = 100 P_{\odot}$). Sabiendo que $T_{\odot} = 5800$ K y $r_{\odot} = 6.96 \times 10^8$ m, calcule el radio de la estrella.

**Deducción paso a paso:**
$$P_{estrella} = 4\pi r_{estrella}^2 \sigma T_{estrella}^4 \quad \text{y} \quad P_{\odot} = 4\pi r_{\odot}^2 \sigma T_{\odot}^4$$

$$\frac{P_{estrella}}{P_{\odot}} = 100 = \left(\frac{r_{estrella}}{r_{\odot}}\right)^2 \left(\frac{T_{estrella}}{T_{\odot}}\right)^4$$

$$r_{estrella} = 10 \cdot \left(\frac{T_{\odot}}{T_{estrella}}\right)^2 r_{\odot} = 10 \cdot \left(\frac{5800}{3000}\right)^2 r_{\odot} = 37.38\,r_{\odot}$$

$$r_{estrella} = 37.38 \times (6.96 \times 10^8\ \text{m}) = \mathbf{2.60 \times 10^{11}\ \text{m}}$$

---

## 3. Entrelazamiento y Efecto Túnel Cuántico

- **Entrelazamiento:** Dos partículas comparten un estado cuántico único $|\Psi^-\rangle = \frac{1}{\sqrt{2}}(|\uparrow\rangle|\downarrow\rangle - |\downarrow\rangle|\uparrow\rangle)$. La medición de una determina instantáneamente el estado de la otra.
- **Efecto Túnel:** Transmisión de una partícula a través de una barrera de potencial $V_0 > E$:
  $$T \approx e^{-2\kappa a},\qquad \kappa = \frac{\sqrt{2m(V_0-E)}}{\hbar}$$

---

## 4. Espectros Atómicos

Las transiciones entre niveles de energía discretos emiten o absorben fotones de frecuencia $hf = E_i - E_f$. La separación de líneas da origen a espectros de emisión y absorción, divididos por acoplamiento espín-órbita en estructuras finas e hiperfinas.

---

## 5. Conclusiones

1. El régimen cuántico predomina cuando $m \ll 10^{-27}$ kg y $v \to c$.
2. La emisión térmica microscópica es causada por electrones acelerados durante las oscilaciones atómicas.
3. La constante de Stefan-Boltzmann permite calcular radios estelares a partir de la temperatura y la potencia radiada ($r_{estrella} = 37.4 r_{\odot} \approx 2.6\times 10^{11}$ m).
4. El entrelazamiento y el efecto túnel demuestran propiedades cuánticas no locales y probabilísticas sin equivalente clásico.
