# Análisis del Módulo 2 — Teoría Cuántica Temprana

**Diplomado en Física Moderna** | **Módulo:** 2
**Docentes:** Pablo Solano, Paulraj Manidurai

---

## 1. Hilo Conductor del Módulo

El Módulo 2 presenta una progresión lógica y cronológica desde el quiebre de la física clásica hasta la formulación rigurosa de la mecánica cuántica moderna. El argumento inicia en la **Clase 01** con la falla predictiva del modelo clásico continuo frente a la radiación térmica (la Catástrofe Ultravioleta) y la introducción heurística de la hipótesis cuántica de Planck. La **Clase 02** generaliza esta ruptura, mostrando cómo la cuantización y la dualidad onda-corpúsculo impregnan toda la materia y radiación, estableciendo nuevos pilares fenomenológicos (incertidumbre, entrelazamiento, efecto túnel). Finalmente, la **Clase 03** formaliza matemáticamente estas ideas, uniendo la derivación microscópica de modos en una cavidad con la validación experimental del cuanto de energía (efecto fotoeléctrico) y consolidando la visión espacial del cuanto a través de la evolución de los modelos atómicos hasta la ecuación de Schrödinger.

---

## 2. Análisis Temático por Clase

### Clase 01: Cuerpo Negro e Hipótesis de Planck
El análisis comienza con el fracaso del teorema de equipartición. En una cavidad, la densidad de modos electromagnéticos clásicos es:
$$g(f) = \frac{8\pi f^2}{c^3}$$
Asignar energía $\langle E\rangle = k_BT$ conduce a la densidad de Rayleigh-Jeans:
$$W_{RJ}(f) = \frac{8\pi f^2}{c^3}\,k_BT$$
Esto diverge a altas frecuencias ($\int_0^\infty W_{RJ}\,df = \infty$). Planck soluciona esto cuantizando la energía de los osciladores ($E_n = nhf$), lo que suprime estadísticamente los estados excitados de alta energía. Con $x = e^{-hf/k_BT}$, la energía media resulta:
$$\langle E\rangle = \frac{\sum_{n=0}^{\infty} nhf\cdot x^n}{\sum_{n=0}^{\infty} x^n} = \frac{hf}{e^{hf/k_BT}-1}$$
Esta ley permite derivar la de Stefan-Boltzmann integrando sobre $f$:
$$R = \sigma T^4, \qquad \sigma = \frac{2\pi^5 k_B^4}{15 c^2 h^3}$$

### Clase 02: Fundamentos Cuánticos y Fenomenología
La ruptura de la continuidad y el determinismo es el eje de esta clase. La función de onda $\Psi$ describe el estado, gobernada por:
$$i\hbar\frac{\partial\Psi}{\partial t} = \hat{H}\Psi$$
El Principio de Incertidumbre restringe la información conjugada:
$$\sigma_x\,\sigma_{p_x} \geq \frac{\hbar}{2}$$
Esto previene el colapso atómico clásico. Se introducen los conceptos de dualidad ($\lambda = h/p$), el efecto túnel cuántico en barreras de potencial (probabilidad de transmisión $T \propto e^{-2\kappa a}$) y el entrelazamiento, mostrando que las correlaciones cuánticas trascienden el espacio local.

### Clase 03: Derivaciones Formales y Modelos Atómicos
Se matematiza el conteo de modos en el espacio $k$. Usando un cascarón esférico en el primer octante, $dN = 2 \cdot \frac{1}{8} \cdot 4\pi R^2 dR$, se recupera rigurosamente $g(f)$. Posteriormente, la clase formaliza el Efecto Fotoeléctrico mediante el fotón ($E=hf$):
$$K_{max} = hf - \phi, \qquad eV_s = K_{max}$$
Este modelo corpúsculo culmina conectando la cuantización con la estructura de la materia. Desde el modelo orbital rígido de Bohr ($L=n\hbar$, $E_n = -13.6\text{ eV}/n^2$), hasta la densidad probabilística $|\Psi|^2$ del modelo de Schrödinger.

---

## 3. Conexiones entre Clases

- **De Clase 01 a Clase 03 (Radiación a Formalismo):** La Clase 01 presenta los resultados de Planck, pero la Clase 03 justifica el andamiaje geométrico (conteo de modos en espacio $k$) que fundamenta $g(f)$.
- **De Clase 01 a Clase 02 (Osciladores a Fotones):** Planck aplicó la cuantización solo a las paredes de la cavidad. Einstein (Clase 02 y 03) eleva la cuantización al campo mismo (el fotón), sentando las bases de la dualidad onda-corpúsculo.
- **De Clase 02 a Clase 03 (Incertidumbre a Orbitales):** El principio de incertidumbre de Heisenberg expuesto en la Clase 02 justifica conceptualmente la imposibilidad de trayectorias en el átomo, preparando el terreno para los orbitales probabilísticos introducidos en la Clase 03 al comparar a Bohr con Schrödinger.

---

## 4. Conexión con Módulo 1 (Termodinámica)

El Módulo 2 es inherente a los fundamentos del Módulo 1:
1. **Teorema de Equipartición:** El fallo de aplicar $k_BT/2$ a cada grado de libertad electromagnético demuestra los límites de la termodinámica estadística clásica.
2. **Distribución de Boltzmann:** Fundamental en la derivación de Planck. La probabilidad de que un oscilador esté en el estado $n$ depende de $e^{-E_n/k_BT}$, lo que introduce las sumatorias estadísticas en el marco cuántico.
3. **Equilibrio Térmico:** El concepto de cuerpo negro exige condiciones de equilibrio perfectas descritas clásicamente por la termodinámica de sistemas cerrados.

---

## 5. Conclusiones

1. La transición clásica a cuántica obedece al fracaso predictivo explícito en escenarios microscópicos y de alta energía, no a preferencias estéticas.
2. La constante de Planck $h$ es el parámetro estabilizador universal: previene la divergencia en la emisión térmica e impide el colapso electrónico en el modelo atómico.
3. La dualidad onda-partícula es un modelo unificador en donde fotones y electrones exhiben comportamiento probabilístico, formalizado mediante $\lambda = h/p$ y $E = hf$.
4. El avance de los modelos atómicos muestra que la imposición de postulados discretos (Bohr) fue un puente temporal y necesario antes de una formulación ondulatoria completa (Schrödinger).
5. Las consecuencias empíricas como el láser, el STM y los espectros atómicos son pruebas contundentes y directas de la discretización del universo a escalas subnanométricas.
