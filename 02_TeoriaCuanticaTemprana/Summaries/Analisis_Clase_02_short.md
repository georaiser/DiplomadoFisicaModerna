# Análisis Clase 02 — Mundo Cuántico, Cuerpo Negro y Espectros Atómicos

**Módulo:** Teoría Cuántica Temprana | **Docente:** Paulraj Manidurai | **Fuentes:** Diapositivas `class_I`, `Desarrollo de los leyes-Cuerpo negro.pdf`, transcripción de clase

---

## 1. Física Clásica vs. Física Cuántica

La física clásica trata con el mundo macroscópico: las partículas tienen energía $E$ y momento $p$; las ondas tienen amplitud $A$ y vector de onda $k = 2\pi/\lambda$. Partículas y ondas son entidades separadas e incompatibles.

La física cuántica rige cuando la masa es extremadamente pequeña ($m \sim 10^{-31}$ kg) y/o las velocidades se aproximan a $c$:

- En el régimen cuántico, una partícula puede exhibir propiedades ondulatorias y viceversa.
- El estado no se describe por coordenadas deterministas, sino por la función de onda $\Psi(\mathbf{r},t)$; la cantidad $|\Psi|^2$ es la densidad de probabilidad de encontrar la partícula en una posición.

**Criterio de escala:**

| Dominio | Masa | Velocidad | Herramienta |
|---|---|---|---|
| Clásico | $m \gg 10^{-27}$ kg | $v \ll c$ | Mecánica newtoniana |
| Relativista | cualquiera | $v \lesssim c$ | Relatividad especial |
| Cuántico | $m \lesssim 10^{-27}$ kg | cualquiera | Mecánica cuántica |

---

## 2. Fenómenos Cuánticos Clave

### 2.1. Dualidad Onda-Corpúsculo

Las partículas subatómicas demuestran propiedades tanto de partícula como de onda. Esta observación invalidó la física clásica a nivel atómico:

> *"La idea de que las ondas (como la luz) pueden actuar como partículas (como electrones) y viceversa fue la gran revelación que dio paso a la física cuántica."*

La relación de de Broglie (1924) conecta ambas naturalezas:

$$\boxed{\lambda = \frac{h}{p} = \frac{h}{\sqrt{2mK}}}$$

donde $K$ es la energía cinética de la partícula.

### 2.2. Entrelazamiento Cuántico

Dos partículas pueden compartir un único estado cuántico unificado, independientemente de la distancia que las separe. Medir el estado físico de una determina instantáneamente el estado de la otra:

$$|\Psi^-\rangle = \frac{1}{\sqrt{2}}\bigl(|\uparrow\rangle|\downarrow\rangle - |\downarrow\rangle|\uparrow\rangle\bigr)$$

### 2.3. Efecto Túnel Cuántico

Una partícula puede penetrar a través de una barrera de potencial $V_0 > E$ que clásicamente sería imposible de superar. La probabilidad de transmisión decae exponencialmente con el grosor $a$ de la barrera:

$$T \approx e^{-2\kappa a}, \qquad \kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$$

---

## 3. Mecanismo de la Radiación Térmica

Cuando un cuerpo absorbe radiación, esta aumenta la energía cinética de oscilación de sus átomos. Los átomos contienen cargas (electrones); al acelerarse en las oscilaciones, emiten radiación electromagnética (principio del electromagnetismo de Maxwell). En equilibrio térmico, la tasa de absorción iguala la tasa de emisión.

**Observaciones experimentales:**

- Por debajo de ~600 °C la radiación térmica es invisible (infrarrojo).
- A 600–700 °C el cuerpo brilla en rojo opaco.
- Al aumentar $T$, el pico espectral se desplaza hacia longitudes de onda más cortas (rojo brillante → blanco caliente).

---

## 4. Cuerpo Negro Ideal y Ley de Stefan-Boltzmann

Un **cuerpo negro ideal** absorbe el 100% de la radiación incidente y re-emite el 100%. La mejor aproximación experimental es una cavidad cerrada con un pequeño orificio: la radiación que entra rebota en las paredes y queda atrapada.

$$\text{Emisividad} = \varepsilon = 1 \quad \text{(cuerpo negro ideal)}$$

Stefan (1879) determinó empíricamente la potencia total emitida por unidad de área:

$$\boxed{R = \sigma T^4, \qquad \sigma = 5.6703 \times 10^{-8}\ \text{W m}^{-2}\text{K}^{-4}}$$

**Propiedades:**
1. $R$ depende solo de $T$, no del color ni el material.
2. Duplicar $T$ incrementa la potencia emitida en un factor $2^4 = 16$.
3. Objetos reales emiten menos que el ideal; su emisividad real $\varepsilon < 1$ actúa como factor multiplicativo: $R_{real} = \varepsilon \sigma T^4$.

### Problema Resuelto — Cálculo del Radio Estelar

**Datos:** Estrella con $T_{\star} = 3000$ K, $P_{\star} = 100\,P_{\odot}$; Sol: $T_{\odot} = 5800$ K, $r_{\odot} = 6.96 \times 10^8$ m.

$$P_{\star} = 4\pi r_{\star}^2 \sigma T_{\star}^4 \qquad \text{y} \qquad P_{\odot} = 4\pi r_{\odot}^2 \sigma T_{\odot}^4$$

Dividiendo:

$$100 = \left(\frac{r_{\star}}{r_{\odot}}\right)^2 \left(\frac{T_{\star}}{T_{\odot}}\right)^4 \implies r_{\star} = 10\,r_{\odot} \left(\frac{T_{\odot}}{T_{\star}}\right)^2 = 10\,r_{\odot}\left(\frac{5800}{3000}\right)^2$$

$$r_{\star} = 10 \times 3.738\,r_{\odot} = 37.38\,r_{\odot}$$

$$\boxed{r_{\star} = 37.38 \times 6.96 \times 10^8\ \text{m} = 2.60 \times 10^{11}\ \text{m}}$$

---

## 5. La Fórmula de Wien y su Límite

Wilhelm Wien (1896) propuso, usando termodinámica clásica:

$$u(\nu, T) = A \nu^5 e^{-\beta\nu/T}$$

donde $A$ y $\beta$ son constantes empíricas. La fórmula coincide bien con los datos experimentales a **frecuencias altas** (UV), pero falla progresivamente a **frecuencias bajas** (infrarrojo).

---

## 6. Ley de Rayleigh-Jeans y la Catástrofe Ultravioleta

### Derivación desde primeros principios (PDF "Desarrollo de los leyes")

Se modela la cavidad del cuerpo negro como un cubo de arista $L$. La radiación forma ondas estacionarias con condición de frontera:

$$\frac{L}{\lambda/2} = m \implies \lambda = \frac{2L}{m} \implies \nu = \frac{c\,m}{2L}$$

En términos del número de onda $q = 2\pi/\lambda = 2\pi\nu/c$:

$$q^2 = \pi^2\left[\left(\frac{m_x}{L}\right)^2 + \left(\frac{m_y}{L}\right)^2 + \left(\frac{m_z}{L}\right)^2\right] \implies m_x^2 + m_y^2 + m_z^2 = \frac{4L^2\nu^2}{c^2} \equiv R^2$$

El número de modos en el octante positivo (cáscara esférica de radio $R$ y espesor $dR$):

$$dA = 4\pi R^2\,dR, \qquad R = \frac{2L\nu}{c}, \qquad dR = \frac{2L\,d\nu}{c}$$

$$dN = \frac{1}{8}\cdot 4\pi\left(\frac{2L\nu}{c}\right)^2 \cdot \frac{2L}{c}\,d\nu = \frac{4\pi\nu^2 L^3}{c^3}\,d\nu$$

El factor $1/8$ proviene de que cada punto del origen pertenece a 8 cubos adyacentes (primer octante).

Aplicando el **Teorema de Equipartición** (energía media por oscilador: $\bar{E} = k_BT$) e incorporando las dos polarizaciones del campo electromagnético:

$$\frac{du_\nu}{d\nu} = 2 \cdot \frac{k_BT}{L^3} \cdot \frac{4\pi\nu^2 L^3}{c^3} \implies \boxed{u(\nu, T) = \frac{8\pi\nu^2}{c^3} k_B T}$$

**El problema:** esta fórmula diverge cuando $\nu \to \infty$ (catástrofe ultravioleta). La integral $\int_0^\infty u\,d\nu \to \infty$ físicamente absurda.

---

## 7. Espectros Atómicos

Los átomos emiten o absorben radiación en frecuencias discretas ($h\nu = E_i - E_f$), produciendo:

| Tipo | Descripción |
|---|---|
| **Espectro de emisión** | Líneas brillantes sobre fondo oscuro; electrón cae a nivel inferior |
| **Espectro de absorción** | Líneas oscuras sobre continuo; electrón absorbe fotón y sube de nivel |
| **Espectro de bandas** | Transiciones vibracionales/rotacionales de moléculas |
| **Estructura fina** | División de líneas por acoplamiento espín-órbita |
| **Estructura hiperfina** | División ultrafina por interacción del espín nuclear con el campo electrónico |

---

## 8. Conclusiones

1. La física cuántica surge del fracaso de la mecánica clásica al intentar explicar fenómenos a escala subatómica.
2. La dualidad onda-corpúsculo ($\lambda = h/p$), el entrelazamiento y el efecto túnel son predicciones cuánticas sin equivalente clásico.
3. El cuerpo negro ideal, modelado como cavidad con orificio, emite potencia $R = \sigma T^4$ independiente del material.
4. La ley de Rayleigh-Jeans $u(\nu,T) = (8\pi\nu^2/c^3)k_BT$ es correcta a baja frecuencia, pero diverge en el UV, revelando una limitación fundamental de la física clásica que Planck resolverá mediante la cuantización.
5. La ley de Stefan-Boltzmann permite estimar radios estelares: para una estrella de 3000 K con $P_\star = 100P_\odot$, el radio es $r_\star \approx 37.4\,r_\odot = 2.6 \times 10^{11}$ m.
