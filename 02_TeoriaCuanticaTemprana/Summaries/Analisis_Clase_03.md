# Análisis Clase 03: Derivación del Cuerpo Negro, Efecto Fotoeléctrico y Modelos Atómicos

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Paulraj Manidurai (Prof. Paul)  
**Fecha:** 17 de julio de 2026  
**Duración:** 3 h 8 min  
**Resultados de aprendizaje:** RA 2 — Derivación de la densidad de modos y la ley de Planck; RA 3 — Efecto fotoeléctrico y cuantización de la luz; RA 4 y RA 5 — Evolución de los modelos atómicos y modelo de Bohr.

> **Fuentes trianguladas:** Transcripción del video (`.docx`) + Diapositivas de clase (`class_II_Diplomado en Física Moderna.pdf`) + Documento auxiliar (`Desarrollo de los leyes-Cuerpo negro.pdf`) + Weinberg, *Foundations of Modern Physics*.

---

## 1. El Cuerpo Negro y las Fórmulas Clásicas de Wien y Rayleigh-Jeans

*Fuente: Desarrollo de los leyes-Cuerpo negro.pdf, págs. 1–4; Weinberg, S., Foundations of Modern Physics, sec. 3.1.*

El **cuerpo negro ideal** es un objeto hipotético que absorbe el 100% de la radiación incidente a cualquier frecuencia y reemite el 100% de la energía en forma de radiación térmica. La mejor aproximación experimental es una cavidad cerrada con un pequeño orificio: toda luz que entra rebota internamente hasta ser totalmente absorbida.

La causa microscópica del brillo de un objeto caliente reside en la agitación térmica de los electrones en la superficie del material. Al acelerarse y desacelerarse impulsados por el calor, los electrones emiten luz.

### 1.1. La Fórmula Empírica de Wien

Wilhelm Wien propuso una expresión basada en la termodinámica clásica:

$$u(\nu, T) = A \nu^5 e^{-\beta \nu / T}$$

Donde $A$ y $\beta$ son constantes. Esta fórmula se ajustaba de forma excelente a altas frecuencias (longitudes de onda cortas), pero fallaba rotundamente en el rango de bajas frecuencias.

### 1.2. Derivación Completa de la Ley de Rayleigh-Jeans

Rayleigh y Jeans consideraron un cubo de arista $L$ con paredes perfectamente reflejantes en cuyo interior se forman ondas electromagnéticas estacionarias.

#### Paso 1: Condición de onda estacionaria en 1D
Para que exista una onda estacionaria paralela a un borde del cubo, un número entero $m$ de semilongitudes de onda debe encajar en la dimensión $L$:

$$\frac{L}{\lambda/2} = m \implies \lambda = \frac{2L}{m}$$

Como la frecuencia es $\nu = c/\lambda$:

$$\nu = \frac{c m}{2L}$$

#### Paso 2: Expresión en términos del número de onda $q$
El número de onda se define como $q = \frac{2\pi}{\lambda} = \frac{2\pi \nu}{c}$. Sustituyendo $\nu = \frac{cm}{2L}$:

$$q = \frac{2\pi m}{2L} = \pi \left(\frac{m}{L}\right) \implies q^2 = \pi^2 \left(\frac{m}{L}\right)^2$$

#### Paso 3: Extensión tridimensional
En tres dimensiones, caracterizadas por la terna de enteros positivos $(m_x, m_y, m_z)$:

$$q^2 = \pi^2 \left[ \left(\frac{m_x}{L}\right)^2 + \left(\frac{m_y}{L}\right)^2 + \left(\frac{m_z}{L}\right)^2 \right]$$

Sustituyendo $q = \frac{2\pi \nu}{c}$ y simplificando:

$$m_x^2 + m_y^2 + m_z^2 = \frac{4 L^2 \nu^2}{c^2} \equiv R^2$$

#### Paso 4: Conteo de modos en la cáscara esférica
El número de combinaciones de $(m_x, m_y, m_z)$ entre una esfera de radio $R$ y $R + dR$ corresponde al volumen de la cáscara esférica $dA = 4\pi R^2 dR$.
Con $R = \frac{2L\nu}{c}$ y $dR = \frac{2L}{c}d\nu$:

$$dA = 4\pi \left(\frac{2L\nu}{c}\right)^2 \left(\frac{2L}{c}\right) d\nu = \frac{32 \pi L^3 \nu^2}{c^3} d\nu$$

Dado que los enteros $(m_x, m_y, m_z)$ deben ser positivos ($m_i > 0$), se toma únicamente el primer octante ($1/8$ del volumen total):

$$dN = \frac{1}{8} dA = \frac{1}{8} \left( \frac{32 \pi L^3 \nu^2}{c^3} d\nu \right) = \frac{4\pi \nu^2 L^3}{c^3} d\nu$$

#### Paso 5: Teorema de equipartición de la energía
Para un oscilador armónico simple clásico, la energía media total se divide en partes iguales entre energía cinética y potencial:
- Energía cinética: $K = \frac{1}{2} k_B T$
- Energía potencial: $U = \frac{1}{2} k_B T$
- Energía media total: $\bar{E} = K + U = k_B T$

La energía total por intervalo de frecuencia es $dE = k_B T \, dN$:

$$\frac{dE}{d\nu} = \frac{4\pi k_B T L^3 \nu^2}{c^3}$$

Dividiendo por el volumen $V = L^3$ para obtener la densidad de energía por unidad de volumen:

$$\frac{du_\nu}{d\nu} = \frac{4\pi k_B T \nu^2}{c^3}$$

#### Paso 6: Factor de polarización
Considerando los dos estados de polarización independientes de las ondas electromagnéticas (factor $2$):

$$\boxed{u(\nu, T) = \frac{8\pi \nu^2}{c^3} k_B T}$$

Esta es la **Ley de Rayleigh-Jeans**. Para $\nu \to \infty$, $u(\nu, T) \to \infty$, produciendo la **Catástrofe del Ultravioleta**.

---

## 2. Derivación Formal de la Ley de Radiación de Planck

*Fuente: Desarrollo de los leyes-Cuerpo negro.pdf, págs. 5–6; class_II_Diplomado en Física Moderna.pdf, págs. 15–21.*

### 2.1. El Modelo de Resonadores de Planck
Planck postuló que la cavidad contiene moléculas de gas ideal y **resonadores de dimensiones moleculares** que sirven de intermediarios absorbiendo y reemitiendo energía.

Planck abandonó la hipótesis de emisión continua y asumió que la energía intercambiada solo puede ocurrir en paquetes discretos mínimos:

$$\varepsilon = h\nu$$

Donde $h$ es la constante universal de Planck. La energía de los resonadores solo puede tomar valores múltiplos enteros: $0, \varepsilon, 2\varepsilon, 3\varepsilon, \ldots, r\varepsilon, \ldots$

### 2.2. Estadística de los Resonadores
La cantidad de resonadores $N_r$ con energía $r\varepsilon$ sigue la distribución de Boltzmann:

$$N_r = N_0 e^{-r\varepsilon / k_B T}$$

El número total de resonadores $N$ y la energía total $E$ son:

$$N = \sum_{r=0}^{\infty} N_r = N_0 \left(1 + e^{-\varepsilon/k_BT} + e^{-2\varepsilon/k_BT} + \ldots \right)$$

$$E = \sum_{r=0}^{\infty} r\varepsilon N_r = \varepsilon N_0 \left(e^{-\varepsilon/k_BT} + 2e^{-2\varepsilon/k_BT} + 3e^{-3\varepsilon/k_BT} + \ldots \right)$$

Haciendo el cambio de variable $y = e^{-\varepsilon / k_B T}$:

$$N = N_0 (1 + y + y^2 + y^3 + \ldots) = \frac{N_0}{1 - y}$$

$$E = \varepsilon N_0 y (1 + 2y + 3y^2 + \ldots) = \frac{\varepsilon N_0 y}{(1 - y)^2}$$

### 2.3. Energía Media de un Resonador
La energía media $\bar{E}_\nu$ por resonador es:

$$\bar{E}_\nu = \frac{E}{N} = \frac{\frac{\varepsilon N_0 y}{(1-y)^2}}{\frac{N_0}{1-y}} = \frac{\varepsilon y}{1 - y} = \frac{\varepsilon}{y^{-1} - 1} = \frac{\varepsilon}{e^{\varepsilon / k_B T} - 1}$$

Sustituyendo $\varepsilon = h\nu$:

$$\boxed{\bar{E}_\nu = \frac{h\nu}{e^{h\nu / k_B T} - 1}}$$

### 2.4. La Ecuación de Planck
Sustituyendo la energía media cuántica en la densidad de modos:

$$\boxed{u(\nu, T) d\nu = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu / k_B T} - 1} d\nu}$$

En función de la longitud de onda $\lambda$ (usando $|d\nu| = \frac{c}{\lambda^2} d\lambda$):

$$\boxed{u(\lambda, T) d\lambda = \frac{8\pi h c}{\lambda^5} \frac{1}{e^{h c / \lambda k_B T} - 1} d\lambda}$$

---

## 3. Derivación de la Constante de Planck a partir de Constantes Fundamentales

*Fuente: class_II_Diplomado en Física Moderna.pdf, págs. 22–23 (Desarrollo directo del docente en diapositivas).*

El docente presenta una deducción matemática para determinar el valor de la constante de Planck $h$ a partir de la masa del electrón $m_e$, la velocidad de la luz $c$ y la longitud de onda de Compton $\lambda_C$:

1. Equivalencia masa-energía de Einstein: $E = m_e c^2$
2. Energía del fotón: $E = h\nu$
3. Igualando ambas expresiones: $m_e c^2 = h\nu$
4. Como $\nu = c / \lambda_C$:
   $$m_e c^2 = \frac{h c}{\lambda_C} \implies \boxed{h = m_e c \lambda_C}$$

**Sustitución con valores conocidos del CODATA:**
- Masa del electrón: $m_e = 9.109 \times 10^{-31}$ kg
- Velocidad de la luz: $c = 2.998 \times 10^8$ m/s
- Longitud de onda Compton del electrón: $\lambda_C = 2.426 \times 10^{-12}$ m

$$h = (9.109 \times 10^{-31} \text{ kg}) \times (2.998 \times 10^8 \text{ m/s}) \times (2.426 \times 10^{-12} \text{ m})$$

$$h = 6.6251 \times 10^{-34} \text{ kg}\cdot\text{m}^2/\text{s} = \mathbf{6.625 \times 10^{-34} \text{ J·s}}$$

Resultado en perfecto acuerdo con el valor aceptado universalmente ($6.626 \times 10^{-34}$ J·s).

---

## 4. Efecto Fotoeléctrico y Problemas Resueltos

*Fuente: class_II_Diplomado en Física Moderna.pdf, págs. 24–32.*

### 4.1. Ecuación Fotoeléctrica de Einstein
Einstein postuló que la luz está compuesta por fotones de energía $E = h\nu$. La energía cinética máxima del fotoelectrón expulsado es:

$$KE_{max} = h\nu - W = h(\nu - \nu_0)$$

Donde $W = h\nu_0 = \frac{hc}{\lambda_0}$ es la **función de trabajo** del material.

### 4.2. Problema 1: Radiación sobre Plata (Resuelto en Diapositivas)

**Enunciado:** Una radiación con $\lambda = 300$ nm incide sobre una superficie de plata ($\phi_{Ag} = 4.73$ eV). ¿Se observan fotoelectrones?

**Solución:**
La longitud de onda de corte es:

$$\lambda_0 = \frac{hc}{W} = \frac{1242 \text{ eV}\cdot\text{nm}}{4.73 \text{ eV}} = \mathbf{262 \text{ nm}}$$

Para que ocurra el efecto fotoeléctrico se requiere $\lambda_{incidente} \le \lambda_0$. Dado que $\lambda_{incidente} = 300\text{ nm} > 262\text{ nm}$, **no se observan fotoelectrones** (la energía del fotón incidente es insuficiente).

### 4.3. Problema 2: Radiación sobre Calcio (Resuelto en Diapositivas)

**Enunciado:** Luz violeta de $\lambda = 430$ nm incide sobre un fotoelectrodo de calcio con función de trabajo $W_{Ca} = 2.71$ eV. Encuentre la energía cinética máxima y el voltaje de frenado.

**Solución:**
Energía del fotón incidente:
$$E_{foton} = \frac{hc}{\lambda} = \frac{1242 \text{ eV}\cdot\text{nm}}{430 \text{ nm}} = 2.888 \text{ eV}$$

Energía cinética máxima:
$$KE_{max} = E_{foton} - W = 2.888 \text{ eV} - 2.71 \text{ eV} = \mathbf{0.178 \text{ eV} \approx 0.18 \text{ eV}}$$

Potencial de frenado: $V_s = \frac{KE_{max}}{e} = \mathbf{0.18 \text{ V}}$.

---

## 5. Evolución de los Modelos Atómicos

*Fuente: class_II_Diplomado en Física Moderna.pdf, págs. 33–47.*

1. **Dalton (1803):** Esferas indivisibles. Falla: no contempla subpartículas ni cargas eléctricas.
2. **Thomson (1897):** Pudín de pasas tras descubrir el electrón. Falla: no explica la dispersión $\alpha$ ni la estabilidad.
3. **Rutherford (1911):** Núcleo denso y pequeño ($1$ fm) rodeado de espacio vacío ($1$ Å). Falla: las cargas aceleradas espiralan al núcleo emitir radiación en $10^{-8}$ s.
4. **Bohr (1913):** Órbitas cuantizadas $L = n\hbar$, $E_n = -13.6\text{ eV}/n^2$. Falla: se limita al átomo hidrogenoide (1 electrón); no resuelve el problema de 3 cuerpos con repulsión e-e.
5. **Schrödinger (1926):** Mecánica cuántica de ondas $|\Psi|^2$ y orbitales $s, p, d, f$. Modelo probabilístico vigente.

---

## 6. Conclusiones de la Clase

1. La Ley de Rayleigh-Jeans se deriva formalmente en un cubo 3D multiplicando la densidad de modos $g(\nu) = 8\pi\nu^2/c^3$ por la energía de equipartición $k_BT$.
2. Planck eliminó la catástrofe ultravioleta sumando series geométricas finitas sobre estados discretos $r\varepsilon$, obteniendo la energía promedio $\bar{E}_\nu = \frac{h\nu}{e^{h\nu/k_BT}-1}$.
3. La constante de Planck puede derivarse como $h = m_e c \lambda_C \approx 6.625 \times 10^{-34}$ J·s.
4. Los problemas numéricos demuestran que el efecto fotoeléctrico exige estrictamente $\lambda \le \lambda_0$; para la plata ($\lambda_0 = 262$ nm), la luz de $300$ nm no produce fotoelectrones.

---

## 7. Referencias Bibliográficas

1. Planck, M., "Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum", *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237–245, 1900.
2. Rayleigh, Lord, "Remarks upon the Law of Complete Radiation", *Philosophical Magazine*, 49, 539–540, 1900.
3. Einstein, A., "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt", *Annalen der Physik*, 17, 132–148, 1905.
4. Weinberg, S., *Foundations of Modern Physics*, Cambridge University Press, 2021.
5. Serway, R. A., Jewett, J. W., *Física universitaria con física moderna*, 9ª ed., Cengage Learning, 2005.
