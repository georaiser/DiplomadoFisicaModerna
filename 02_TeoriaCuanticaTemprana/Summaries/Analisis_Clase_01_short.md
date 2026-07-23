# Análisis Clase 01 — Radiación del Cuerpo Negro e Hipótesis de Planck

**Módulo:** Teoría Cuántica Temprana | **Docente:** Pablo Solano | **Fecha:** 3 jul 2026

---

## 1. El Problema: Radiación Térmica del Cuerpo Negro

Todo cuerpo en equilibrio térmico a temperatura $T$ emite radiación electromagnética. Un **cuerpo negro ideal** es aquel que absorbe el 100% de la radiación incidente; en consecuencia, toda la radiación que emite depende exclusivamente de $T$.

La mejor realización experimental es una **cavidad cerrada con un pequeño orificio**: la radiación que entra rebota en las paredes y es absorbida. El orificio — no las paredes — es el cuerpo negro, pues cualquier radiación que entra queda atrapada.

A finales del siglo XIX, el experimento mostraba dos hechos establecidos:

**Ley de Stefan-Boltzmann:** La potencia total emitida por unidad de área escala con $T^4$:
$$R = \sigma T^4, \qquad \sigma = 5.67\times10^{-8}\ \text{W m}^{-2}\text{K}^{-4}$$

**Ley de Desplazamiento de Wien:** La longitud de onda del máximo de emisión es inversamente proporcional a $T$:
$$\lambda_{max}\cdot T = 2.898\times10^{-3}\ \text{m·K}$$

Cuanto mayor la temperatura, más corta la longitud de onda del máximo: hierro calentado pasa de infrarrojo a rojo a amarillo; el Sol ($T\approx5778$ K) tiene su máximo en $\approx 501$ nm (verde).

---

## 2. El Fracaso Clásico: Ley de Rayleigh-Jeans y la Catástrofe Ultravioleta

La física clásica modela el campo dentro de la cavidad como ondas estacionarias. Las condiciones de frontera en un cubo de lado $L$ restringen los vectores de onda a $k_i = n_i\pi/L$. Contando todos los modos en el espacio $k$ (cascarón esférico en el primer octante, factor 2 por las dos polarizaciones del campo electromagnético):

$$\boxed{g(f) = \frac{8\pi f^2}{c^3}} \qquad \text{(modos por unidad de volumen y de frecuencia)}$$

El **teorema de equipartición** asigna energía media $k_BT$ a cada modo (oscilador armónico con 2 grados de libertad cuadráticos). La densidad espectral de energía resulta:

$$W_{RJ}(f) = \frac{8\pi f^2}{c^3}\,k_BT$$

Esto concuerda con el experimento a frecuencias bajas (infrarrojo), pero diverge para $f\to\infty$: la energía total $\int_0^\infty W_{RJ}\,df = \infty$. Esta divergencia se llama **Catástrofe Ultravioleta** (Ehrenfest, 1911).

---

## 3. La Hipótesis de Planck (1900)

### 3.1. Postulado de Cuantización

Planck postuló que los osciladores de las paredes de la cavidad no intercambian energía de manera continua. Solo pueden tener energías que son múltiplos enteros de $\varepsilon = hf$:

$$\boxed{E_n = nhf,\qquad n = 0,1,2,\ldots}$$

$h = 6.626\times10^{-34}$ J·s es la **constante de Planck**, valor ajustado a los datos experimentales.

### 3.2. Energía Media del Oscilador Cuántico

Con la distribución de Boltzmann aplicada a los niveles discretos, y haciendo $x = e^{-hf/k_BT}$:

$$\langle E\rangle = \frac{\displaystyle\sum_{n=0}^{\infty} nhf\cdot x^n}{\displaystyle\sum_{n=0}^{\infty} x^n} = hf\cdot\frac{x}{1-x}$$

Las sumas son series geométricas: $\sum x^n = \frac{1}{1-x}$ y $\sum nx^n = \frac{x}{(1-x)^2}$.

Sustituyendo $x = e^{-hf/k_BT}$ y simplificando:

$$\boxed{\langle E\rangle = \frac{hf}{e^{hf/k_BT}-1}}$$

### 3.3. Ley de Radiación de Planck

Multiplicando la densidad de modos clásica por la nueva energía media cuántica:

$$\boxed{W(f,T) = \frac{8\pi hf^3}{c^3}\cdot\frac{1}{e^{hf/k_BT}-1}}$$

En longitudes de onda:

$$W(\lambda,T) = \frac{8\pi hc}{\lambda^5}\cdot\frac{1}{e^{hc/\lambda k_BT}-1}$$

---

## 4. Verificación de los Límites

**Límite clásico** ($hf \ll k_BT$): Taylor de primer orden $e^u\approx 1+u$:
$$\langle E\rangle \approx \frac{hf}{hf/k_BT} = k_BT \implies W\to W_{RJ} \checkmark$$

**Límite ultravioleta** ($hf \gg k_BT$): $e^{hf/k_BT}\gg1$, por lo que:
$$\langle E\rangle \approx hf\,e^{-hf/k_BT} \to 0 \quad\text{(supresión exponencial)} \checkmark$$

La catástrofe desaparece porque a alta frecuencia el cuanto mínimo $hf \gg k_BT$: ningún modo puede ser excitado térmicamente.

---

## 5. Derivación de Stefan-Boltzmann desde Planck

Integrando $W(f,T)$ sobre todas las frecuencias con $u = hf/k_BT$:

$$\int_0^\infty W\,df = \frac{8\pi h}{c^3}\left(\frac{k_BT}{h}\right)^4\underbrace{\int_0^\infty\frac{u^3}{e^u-1}\,du}_{\pi^4/15} = \frac{8\pi^5 k_B^4}{15c^3h^3}\,T^4$$

La potencia emitida por unidad de área es $R = \frac{c}{4}\int W\,df = \sigma T^4$, con:

$$\sigma = \frac{2\pi^5 k_B^4}{15 c^2 h^3} = 5.67\times10^{-8}\ \text{W m}^{-2}\text{K}^{-4}$$

La constante $\sigma$ queda completamente determinada por $h$, $k_B$ y $c$.

---

## 6. Conclusiones

1. La **Catástrofe Ultravioleta** es consecuencia directa de aplicar el teorema de equipartición a un continuo de modos, asignando $k_BT$ a cada uno.
2. La **cuantización** $E_n = nhf$ modifica la energía promedio de $k_BT$ a $hf/(e^{hf/k_BT}-1)$, suprimiendo exponencialmente los modos de alta frecuencia.
3. La **Ley de Planck** reproduce el espectro experimental completo, y contiene las leyes de Rayleigh-Jeans y Wien como casos límite.
4. La integración de Planck **deriva** la Ley de Stefan-Boltzmann desde primeros principios, determinando $\sigma$ en términos de $h$, $k_B$ y $c$.
5. La constante $h$ resultó ser la constante fundamental de toda la física cuántica, apareciendo en $E = hf$, $\lambda = h/p$ y $\Delta x\,\Delta p \geq \hbar/2$.
