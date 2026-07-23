# Análisis Clase 02: Fundamentos de la Física Cuántica, Radiación Térmica y Aplicaciones

**Módulo:** Teoría Cuántica Temprana  
**Docente:** Paulraj Manidurai (Prof. Paul)  
**Fecha:** 10 de julio de 2026  
**Duración:** 3 h  
**Resultados de aprendizaje:** RA 1 — Orígenes experimentales y contexto de la teoría cuántica; RA 3 — Propiedades de los fotones en procesos ópticos y químicos; RA 6 — Emisión y absorción de radiación.  

> **Fuentes trianguladas:** Transcripción del video (`.docx`) + Diapositivas de clase (`class_I_Diplomado en Física Moderna - Teoría Cuántica Temprana.pdf`) + Weinberg, *Foundations of Modern Physics* + Serway & Jewett, *Física Universitaria con Física Moderna*.

---

## 1. El Paradoja Macroscópico vs. Microscópico y la Dualidad Onda-Corpúsculo

*Fuente: Diapositivas de Clase 02, págs. 9-15. Fuente complementaria: Serway & Jewett, Física Universitaria con Física Moderna, 9ª ed., cap. 40.*

### 1.1. Comparación entre la Física Clásica y la Física Cuántica

En la física clásica (mundo macroscópico), los objetos materiales están caracterizados de forma unívoca por parámetros discretos e independientes de las ondas:
- **Partículas clásicas:** Caracterizadas por su masa $m$, posición $\mathbf{r}$, velocidad $\mathbf{v}$, momento lineal $\mathbf{p} = m\mathbf{v}$ y energía cinética $K = \frac{1}{2}mv^2$.
- **Ondas clásicas:** Caracterizadas por su amplitud $A$, longitud de onda $\lambda$, frecuencia $f$ y vector de onda $\mathbf{k}$ (donde $|\mathbf{k}| = 2\pi/\lambda$).

La física clásica establece una frontera infranqueable: las partículas son partículas y las ondas son ondas. Sin embargo, en el mundo cuántico (escala atómica y subatómica), esta distinción colapsa. Las partículas masivas (como los electrones) presentan comportamiento ondulatorio, y la radiación electromagnética presenta comportamiento corpuscular.

Como se destaca en las diapositivas de clase (pág. 15), el régimen cuántico domina cuando se combinan dos factores:
1. **Masa extremadamente pequeña:** $m \ll 10^{-27}$ kg (ej. electrón: $m_e = 9.109 \times 10^{-31}$ kg).
2. **Velocidad cercana a la velocidad de la luz:** $v \sim c = 3 \times 10^8$ m/s ($300\,000\,000$ m/s).

A modo de contraste pedagógico presentado por el docente: un objeto macroscópico como un vehículo viajando a alta velocidad ($120$ km/h $= 33.33$ m/s) pertenece estrictamente al dominio clásico donde la longitud de onda de de Broglie es indetectable ($\lambda \sim 10^{-38}$ m).

### 1.2. La Relación de de Broglie

En 1924, Louis de Broglie postuló que toda partícula de momento $p$ tiene asociada una onda de materia de longitud de onda:

$$\boxed{\lambda = \frac{h}{p}}$$

Donde $h = 6.626 \times 10^{-34}$ J·s es la constante de Planck. Para un electrón con energía cinética $K = \frac{p^2}{2m_e}$:

$$\lambda = \frac{h}{\sqrt{2m_e K}}$$

Esta propiedad ondulatoria se demostró experimentalmente mediante la difracción de electrones en redes cristalinas de níquel (Davisson y Germer, 1927).

---

## 2. El Mecanismo Microscópico de la Radiación Térmica y la Ley de Stefan-Boltzmann

*Fuente: Diapositivas de Clase 02, págs. 23-31; Weinberg, S., Foundations of Modern Physics, cap. 3.*

### 2.1. Mecanismo Atómico de Emisión y Absorción Térmica

Las diapositivas de clase (págs. 23–24) detallan el mecanismo físico que vincula la temperatura con la radiación electromagnética:

1. **Absorción:** La radiación absorbida por un cuerpo incrementa la energía cinética de traslación media de sus átomos constituyentes, los cuales oscilan alrededor de sus posiciones de equilibrio.
2. **Temperatura:** La energía cinética traslacional media de los átomos define la temperatura del cuerpo ($K_{media} = \frac{3}{2}k_BT$). La absorción provoca el aumento de $T$.
3. **Emisión por aceleración de cargas:** Los átomos contienen electrones (cargas eléctricas). Al oscilar térmicamente, estos electrones sufren aceleraciones y desaceleraciones continuas. Según la electrodinámica clásica (fórmula de Larmor), toda carga acelerada emite ondas electromagnéticas:
   $$P = \frac{q^2 a^2}{6\pi \varepsilon_0 c^3}$$
   Esta emisión reduce la energía cinética de oscilación y tiende a enfriar el cuerpo.
4. **Equilibrio Térmico:** Cuando la tasa de absorción de radiación es exactamente igual a la tasa de emisión de radiación, la temperatura permanece constante y el sistema alcanza el equilibrio térmico con su entorno.

### 2.2. Cambio de Color con la Temperatura

A temperaturas normales ($T < 600\,^\circ\text{C}$), la radiación térmica emitida reside en el infrarrojo no visible. A partir de $600\,^\circ\text{C}$–$700\,^\circ\text{C}$, una fracción suficiente de energía ingresa al espectro visible y el cuerpo brilla con un **rojo opaco**. Al aumentar $T$, la intensidad crece y el máximo se desplaza a ondas más cortas, pasando de rojo brillante a **blanco caliente** (mezcla de todas las frecuencias visibles).

### 2.3. Ley de Stefan-Boltzmann y Emisividad

Para un **cuerpo negro ideal**, la radiancia total (potencia radiada por unidad de área) depende únicamente de la temperatura absoluta $T$:

$$\boxed{R = \sigma T^4}$$

Donde $\sigma = 5.6703 \times 10^{-8} \text{ W/(m}^2\cdot\text{K}^4\text{)}$ es la constante de Stefan-Boltzmann.

Para objetos reales (no ideales), la potencia radiada se reduce por el factor de **emisividad** $\varepsilon$ ($0 < \varepsilon < 1$):

$$P = \varepsilon \sigma A T^4$$

### 2.4. Ejemplo Numérico Resuelto (Cálculo del Radio de una Estrella)

*Fuente: Diapositivas de Clase 02, págs. 30–31 (Problema presentado y resuelto por el docente).*

**Enunciado:** La medición de la longitud de onda de máxima emisión espectral de una determinada estrella indica que su temperatura superficial es $T_{estrella} = 3000$ K. Si se descubre que la estrella irradia $100$ veces la potencia del Sol ($P_{estrella} = 100\,P_{\odot}$), determine el radio de la estrella. Considere $T_{\odot} = 5800$ K y $r_{\odot} = 6.96 \times 10^8$ m.

**Solución paso a paso:**

Asumiendo emisión de cuerpo negro ideal ($\varepsilon = 1$) tanto para la estrella como para el Sol:

La potencia total radiada por una esfera de radio $r$ es $P = R \cdot A = (\sigma T^4) \cdot (4\pi r^2)$.

Para el Sol:
$$P_{\odot} = 4\pi r_{\odot}^2 \sigma T_{\odot}^4$$

Para la estrella:
$$P_{estrella} = 4\pi r_{estrella}^2 \sigma T_{estrella}^4$$

Tomando la razón entre ambas ecuaciones:
$$\frac{P_{estrella}}{P_{\odot}} = \frac{4\pi r_{estrella}^2 \sigma T_{estrella}^4}{4\pi r_{\odot}^2 \sigma T_{\odot}^4} = \left(\frac{r_{estrella}}{r_{\odot}}\right)^2 \left(\frac{T_{estrella}}{T_{\odot}}\right)^4$$

Dado que $P_{estrella} / P_{\odot} = 100$:
$$100 = \left(\frac{r_{estrella}}{r_{\odot}}\right)^2 \left(\frac{T_{estrella}}{T_{\odot}}\right)^4$$

Despejando $r_{estrella}$:
$$\left(\frac{r_{estrella}}{r_{\odot}}\right)^2 = 100 \cdot \left(\frac{T_{\odot}}{T_{estrella}}\right)^4 \implies \frac{r_{estrella}}{r_{\odot}} = 10 \cdot \left(\frac{T_{\odot}}{T_{estrella}}\right)^2$$

Sustituyendo los valores numéricos de temperatura:
$$\frac{r_{estrella}}{r_{\odot}} = 10 \cdot \left(\frac{5800\text{ K}}{3000\text{ K}}\right)^2 = 10 \cdot (1.9333)^2 = 10 \cdot 3.7378 = 37.38$$

Multiplicando por el radio solar $r_{\odot} = 6.96 \times 10^8$ m:
$$r_{estrella} = 37.38 \times (6.96 \times 10^8 \text{ m}) \approx \mathbf{2.60 \times 10^{11} \text{ m}}$$

**Resultado:** La estrella es una supergigante roja con un radio aproximadamente $37.4$ veces mayor que el del Sol ($r_{estrella} \approx 2.6 \times 10^{11}$ m).

---

## 3. Fenómenos Cuánticos Fundamentales: Entrelazamiento y Efecto Túnel

*Fuente: Diapositivas de Clase 02, págs. 16-20. Transcripción de Clase 02.*

### 3.1. Entrelazamiento Cuántico

El **entrelazamiento cuántico** es un fenómeno en el cual dos o más partículas subatómicas se vinculan de tal forma que comparten un estado cuántico unificado no separable.

Para un par de partículas con espín $1/2$ en el estado singlete:
$$|\Psi^-\rangle = \frac{1}{\sqrt{2}} \left(|\uparrow\rangle_A |\downarrow\rangle_B - |\downarrow\rangle_A |\uparrow\rangle_B\right)$$

La medición del estado físico de la partícula A determina instantáneamente el estado de la partícula B, sin importar la distancia de separación entre ellas. La violación de las desigualdades de Bell demuestra que la naturaleza no es local-realista.

### 3.2. Efecto Túnel Cuántico

Ocurre cuando una partícula cuántica atraviesa una barrera de potencial cuya altura de energía $V_0$ es mayor que la energía cinética $E$ de la partícula ($E < V_0$).

La probabilidad de transmisión $T$ a través de una barrera rectangular de ancho $a$ viene dada por:
$$T \approx e^{-2\kappa a}, \qquad \kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$$

Aplicaciones tecnológicas: Microscopio de Efecto Túnel (STM), fusión nuclear en el centro de las estrellas y desintegración alfa.

---

## 4. Espectros Atómicos y Estructura Fina

*Fuente: Diapositivas de Clase 02, págs. 34-36.*

La radiación emitida por un gas excitado se descompone en **espectros de emisión** (líneas brillantes sobre fondo oscuro) o **espectros de absorción** (líneas oscuras sobre un espectro continuo).

- **Espectros de líneas:** Originados por transiciones entre niveles de energía discretos en átomos aislados:
  $$hf = E_i - E_f$$
- **Estructura fina e hiperfina:** La separación de los niveles espectrales en múltiples componentes se debe al acoplamiento espín-órbita (estructura fina) y a la interacción del momento magnético nuclear con el campo del electrón (estructura hiperfina, como la línea de 21 cm del hidrógeno neutro).

---

## 5. Conclusiones de la Clase

1. El dominio cuántico rige cuando las masas son extremadamente pequeñas ($m \sim 10^{-31}$ kg) y las velocidades se aproximan a $c$.
2. La radiación térmica surge microscópicamente por la oscilación y aceleración de las cargas electrónicas en la superficie del material.
3. La Ley de Stefan-Boltzmann $R = \sigma T^4$ permite determinar el radio de objetos astrofísicos combinando mediciones de temperatura de cuerpo negro y luminosidad.
4. Los fenómenos como el entrelazamiento cuántico y el efecto túnel demuestran que las partículas subatómicas no obedecen las reglas de localización ni de barreras de energía del mundo clásico.

---

## 6. Referencias Bibliográficas

### Fuentes Primarias
1. Stefan, J., "Über die Beziehung zwischen der Wärmestrahlung und der Temperatur", *Sitzungsberichte der Mathematisch-Naturwissenschaftlichen Classe der Kaiserlichen Akademie der Wissenschaften*, 79, 391–428, 1879.
2. de Broglie, L., "Recherches sur la théorie des quanta", Tesis Doctoral, Université de Paris, 1924.
3. Davisson, C., Germer, L. H., "Diffraction of Electrons by a Crystal of Nickel", *Physical Review*, 30, 705–740, 1927.

### Textos del Curso y Referencias de Diapositivas
4. Serway, R. A., Jewett, J. W., *Física universitaria con física moderna*, 9ª ed., Cengage Learning, 2005. ISBN: 970686492X.
5. Weinberg, S., *Foundations of Modern Physics*, Cambridge University Press, 2021. ISBN: 978-1108841764.
6. Sears, F. W., Zemansky, M. W., Young, H. D., Freedman, R. A., *Física Universitaria con Física Moderna*, Vol. 2, 12ª ed., Pearson, 2009.
7. Hecht, E., *Física en Perspectiva*, Addison-Wesley, 1987.
