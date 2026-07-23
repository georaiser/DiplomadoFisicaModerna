# Módulo 2 — Teoría Cuántica Temprana | Docentes: Pablo Solano, Paulraj Manidurai | 3 clases

---

## Clase 01: Radiación del Cuerpo Negro e Hipótesis de Planck
**Docente:** Pablo Solano (3 jul 2026)

### 1. El Problema del Cuerpo Negro
Un cuerpo negro ideal absorbe toda radiación incidente y emite un espectro dependiente exclusivamente de su temperatura $T$. A finales del siglo XIX, las observaciones experimentales establecieron dos leyes fundamentales:
- **Ley de Stefan-Boltzmann:** La potencia total emitida por unidad de área es $R = \sigma T^4$.
- **Ley de Desplazamiento de Wien:** La longitud de onda de máxima emisión cumple $\lambda_{max} T = 2.898 \times 10^{-3} \text{ m}\cdot\text{K}$.

### 2. La Catástrofe Ultravioleta
La física clásica modeló el campo electromagnético en una cavidad usando ondas estacionarias. La densidad de modos por volumen es:
$$ g(f) = \frac{8\pi f^2}{c^3} $$
Aplicando el teorema de equipartición (energía media $\langle E \rangle = k_B T$ por modo), se obtiene la **Ley de Rayleigh-Jeans**:
$$ W_{RJ}(f) = \frac{8\pi f^2}{c^3} k_B T $$
Este modelo concuerda con el experimento a bajas frecuencias, pero diverge al infinito a altas frecuencias ($f \to \infty$), fenómeno conocido como la **Catástrofe Ultravioleta**.

### 3. La Hipótesis de Planck (1900)
Para resolver la divergencia, Max Planck postuló que los osciladores de la cavidad intercambian energía en múltiplos discretos:
$$ \boxed{E_n = nhf, \quad n = 0,1,2,\dots} $$
Esto modifica la energía promedio por oscilador cuántico mediante la distribución de Boltzmann:
$$ \boxed{\langle E \rangle = \frac{hf}{e^{hf/k_B T} - 1}} $$
Multiplicando la densidad de modos por esta nueva energía media, resulta la **Ley de Radiación de Planck**:
$$ \boxed{W(f,T) = \frac{8\pi h f^3}{c^3} \frac{1}{e^{hf/k_B T} - 1}} $$
A alta frecuencia, la supresión exponencial anula la divergencia clásica. Integrando esta ley sobre todas las frecuencias se deriva exactamente la constante de Stefan-Boltzmann en términos de $h$, $c$ y $k_B$.

---

## Clase 02: Fundamentos Cuánticos y Espectros
**Docente:** Paulraj Manidurai (10 jul 2026)

### 1. Dualidad Onda-Corpúsculo y Probabilismo
La mecánica cuántica reemplaza el determinismo por probabilidades, usando la función de onda $\Psi$. La relación de Louis de Broglie (1924) asocia una longitud de onda a partículas con momento $p$:
$$ \boxed{\lambda = \frac{h}{p}} $$
Esta dualidad se evidencia en el experimento de la doble rendija con partículas masivas (electrones o moléculas), donde se observa interferencia si no se mide la trayectoria.

### 2. Principio de Incertidumbre de Heisenberg (1927)
Establece un límite fundamental a la precisión simultánea de variables conjugadas:
$$ \boxed{\sigma_x \sigma_{p_x} \geq \frac{\hbar}{2}} $$
Este principio explica la estabilidad atómica, impidiendo que el electrón colapse hacia el núcleo al conferirle una energía cinética de punto cero irremplazable, y altera las propiedades de los nanomateriales por confinamiento.

### 3. Entrelazamiento Cuántico y Efecto Túnel
El **entrelazamiento** describe sistemas multipartitos cuyo estado no se puede factorizar; una medición colapsa instantáneamente el estado conjunto. Esto fue comprobado al violar las desigualdades de Bell (1964).
El **efecto túnel** ocurre cuando una partícula atraviesa una barrera de potencial clásicamente prohibida ($E < V_0$). La función de onda decae exponencialmente, dejando una probabilidad de transmisión no nula.

### 4. Fotón, Espectros Atómicos y Láser
La cuantización de la energía radiante (Einstein, 1905) introdujo el fotón con energía $E = hf$. Esto explicó los **espectros atómicos** en los que las emisiones discretas corresponden a saltos entre niveles cuantizados. 
La **emisión estimulada** (Einstein, 1917) postula que un fotón interactuando con un átomo excitado genera un segundo fotón idéntico. Con inversión de población en niveles metaestables, este principio se aplica para crear el **láser**.

---

## Clase 03: Derivaciones, Efecto Fotoeléctrico y Modelos Atómicos
**Docente:** Paulraj Manidurai (17 jul 2026)

### 1. Derivación de la Densidad de Modos
Contando modos de ondas estacionarias en el espacio de momento (espacio $k$) para un cubo de lado $L$. Utilizando el primer octante de una esfera (factor $1/8$) y considerando dos polarizaciones de la luz (factor $2$):
$$ dN = 2 \cdot \frac{1}{8} \cdot 4\pi R^2 dR = \pi \left(\frac{2Lf}{c}\right)^2 \left(\frac{2L}{c} df\right) = \frac{8\pi L^3 f^2}{c^3} df $$
Dividiendo por el volumen $V=L^3$, se obtiene $g(f) = \frac{8\pi f^2}{c^3}$.

### 2. El Efecto Fotoeléctrico
La luz incide sobre un material expulsando electrones. Clásicamente, la energía de emisión debería depender de la intensidad. Experimentalmente, existe una frecuencia umbral $f_0$. Einstein formuló:
$$ \boxed{K_{max} = hf - \phi, \quad \phi = hf_0} $$
Donde $\phi$ es la función de trabajo. El voltaje de frenado se define como $V_s = K_{max}/e$.

### 3. Evolución de los Modelos Atómicos
El avance empírico forzó a refinar la estructura atómica:
- **Dalton (1803):** Esferas indivisibles.
- **Thomson (1897):** Pudín de pasas; cargas positivas y negativas uniformes.
- **Rutherford (1911):** Experimento de dispersión alfa. Núcleo central denso positivo y electrones orbitando. Falla clásica: el electrón radiaría y colapsaría.
- **Bohr (1913):** Cuantización del momento angular ($L=n\hbar$). Funciona para el hidrógeno ($E_n = -13.6 \text{ eV} / n^2$), falla con la repulsión de más electrones (ej. Helio).
- **Schrödinger (1926):** Resolución cuántica completa mediante $\Psi(\mathbf{r})$ orbitales probabilísticos y la ecuación $-\frac{\hbar^2}{2m_e}\nabla^2\Psi + V(r)\Psi = E\Psi$.

---

## Hilo Conductor del Módulo
La incapacidad de la física clásica para explicar la radiación del cuerpo negro requirió que Planck introdujera un postulado puramente matemático de **cuantización de energía**. Einstein dotó a este cuanto matemático de realidad física identificándolo como el **fotón**, resolviendo el efecto fotoeléctrico. Esta cuantización de luz luego se extendió a la materia por de Broglie (dualidad onda-corpúsculo).
A nivel atómico, la inestabilidad del modelo de Rutherford se subsanó primero con las órbitas discretas ad-hoc de Bohr (justificando los espectros de líneas), y culminó orgánicamente en la ecuación de Schrödinger, donde la cuantización surge de forma natural de las condiciones de frontera de la función de onda, rigiéndose por los límites del principio de incertidumbre de Heisenberg.
