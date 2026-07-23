# Análisis Clase 03 — Derivación del Cuerpo Negro, Efecto Fotoeléctrico y Modelos Atómicos

**Módulo:** Teoría Cuántica Temprana | **Docente:** Paulraj Manidurai | **Fecha:** 17 jul 2026

---

## 1. Derivación de la Ley de Rayleigh-Jeans

### 1.1. Ondas Estacionarias y Conteo de Modos 3D
En una cavidad cúbica de arista $L$:

$$\lambda = \frac{2L}{m} \implies \nu = \frac{cm}{2L} \implies q = \frac{2\pi\nu}{c} = \frac{\pi m}{L}$$

En tres dimensiones: $q^2 = \pi^2 [(m_x/L)^2 + (m_y/L)^2 + (m_z/L)^2]$. Igualando con $q = 2\pi\nu/c$:

$$m_x^2 + m_y^2 + m_z^2 = \frac{4L^2\nu^2}{c^2} \equiv R^2$$

El número de modos en el primer octante ($1/8$ de la cáscara esférica $dA = 4\pi R^2 dR$):

$$dN = \frac{1}{8} \cdot 4\pi \left(\frac{2L\nu}{c}\right)^2 \left(\frac{2L}{c}\right) d\nu = \frac{4\pi \nu^2 L^3}{c^3} d\nu$$

### 1.2. Equipartición y Polarización (Ley de Rayleigh-Jeans)
La energía media por modo es $\bar{E} = K + U = \frac{1}{2}k_BT + \frac{1}{2}k_BT = k_BT$. Incorporando 2 polarizaciones y dividiendo por el volumen $V = L^3$:

$$\boxed{u(\nu, T) = \frac{8\pi \nu^2}{c^3} k_B T}$$

Falla a alta frecuencia ($\nu \to \infty \implies u \to \infty$): **Catástrofe Ultravioleta**.

---

## 2. Derivación de la Ley de Planck

Planck introdujo la cuantización $\varepsilon = h\nu$ en los osciladores (resonadores):

$$N_r = N_0 e^{-r\varepsilon/k_BT} \implies N = \frac{N_0}{1-y}, \quad E = \frac{\varepsilon N_0 y}{(1-y)^2} \quad \left(y = e^{-\varepsilon/k_BT}\right)$$

La energía media del resonador resulta:

$$\bar{E}_\nu = \frac{E}{N} = \frac{\varepsilon y}{1-y} = \frac{h\nu}{e^{h\nu/k_BT} - 1}$$

Sustituyendo $\bar{E}_\nu$ en la densidad de modos:

$$\boxed{u(\nu, T) d\nu = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/k_BT} - 1} d\nu} \quad \text{y} \quad \boxed{u(\lambda, T) d\lambda = \frac{8\pi hc}{\lambda^5} \frac{1}{e^{hc/\lambda k_BT} - 1} d\lambda}$$

---

## 3. Derivación de $h$ desde Constantes Fundamentales

Igualando la masa-energía $E = m_e c^2$ y la energía del fotón $E = h\nu = hc/\lambda_C$:

$$\boxed{h = m_e c \lambda_C}$$

$$h = (9.109 \times 10^{-31}\ \text{kg}) \times (2.998 \times 10^8\ \text{m/s}) \times (2.426 \times 10^{-12}\ \text{m}) = \mathbf{6.625 \times 10^{-34}\ \text{J·s}}$$

---

## 4. Efecto Fotoeléctrico (Problemas Resueltos)

Ecuación de Einstein: $KE_{max} = h\nu - W = h(\nu - \nu_0)$.

- **Problema 1 (Plata, $W_{Ag} = 4.73$ eV, $\lambda_{inc} = 300$ nm):**  
  $$\lambda_0 = \frac{hc}{W} = \frac{1242\text{ eV·nm}}{4.73\text{ eV}} = 262\text{ nm}$$  
  Como $300\text{ nm} > 262\text{ nm}$, **no se observan fotoelectrones**.

- **Problema 2 (Calcio, $W_{Ca} = 2.71$ eV, $\lambda_{inc} = 430$ nm):**  
  $$E_{foton} = \frac{1242}{430} = 2.89\text{ eV} \implies KE_{max} = 2.89 - 2.71 = \mathbf{0.18\text{ eV}} \implies V_s = \mathbf{0.18\text{ V}}$$

---

## 5. Evolución de los Modelos Atómicos

1. **Dalton (1803):** Átomos sólidos e indivisibles.
2. **Thomson (1897):** Pudín de pasas con electrones dispersos.
3. **Rutherford (1911):** Núcleo denso ($1$ fm) en espacio vacío ($1$ Å). Falla: el electrón colapsa en $10^{-8}$ s.
4. **Bohr (1913):** Órbitas cuantizadas $L = n\hbar$, $E_n = -13.6\text{ eV}/n^2$. Falla: limitado al átomo hidrogenoide.
5. **Schrödinger (1926):** Mecánica cuántica probabilística $|\Psi|^2$ y orbitales $s, p, d, f$.

---

## 6. Conclusiones

1. La densidad de modos $g(\nu) = 8\pi\nu^2/c^3$ surge de integrar el volumen $dA = 4\pi R^2 dR$ en el octante con factor 2 de polarización.
2. La cuantización $E_n = nh\nu$ da la energía media $\bar{E}_\nu = \frac{h\nu}{e^{h\nu/k_BT}-1}$, resolviendo la catástrofe UV.
3. La constante $h$ se deduce analíticamente como $h = m_e c \lambda_C = 6.625 \times 10^{-34}$ J·s.
4. Los fotoelectrones requieren $\lambda \le \lambda_0$; para la plata ($\lambda_0 = 262$ nm), la luz de $300$ nm no produce emisión.
