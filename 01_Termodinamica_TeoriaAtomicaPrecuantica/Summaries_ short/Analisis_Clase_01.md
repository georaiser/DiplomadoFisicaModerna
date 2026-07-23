# Análisis de la Clase 1: Fundamentos Termodinámicos y Teoría Atómica Pre-Cuántica

## 1. Resumen de la Clase

La primera clase del diplomado en Física Moderna (impartida por Julio Eduardo Oliva Zapata) explica cómo la física pasó de ser una filosofía a una ciencia cuantitativa, basada en experimentos y observaciones. El objetivo principal es mostrar cómo los científicos comprendieron conceptos como volumen, presión y temperatura, dejando atrás ideas antiguas como el "miedo al vacío" (*horror vacui*) de Aristóteles.

El recorrido histórico comienza con las ideas de Platón y Demócrito, pasa por los experimentos de Torricelli y llega hasta las leyes de los gases de Boyle, Charles, Gay-Lussac y Avogadro. Guiado por el Capítulo 1 del libro *Foundations of Modern Physics* de Steven Weinberg, este resumen muestra cómo los descubrimientos sobre el comportamiento general de los gases permitieron deducir que la materia está hecha de átomos y moléculas.

---

## 2. Los Orígenes de la Física Moderna

### 2.1 Pensamiento Antiguo: Demócrito y Platón

Hace unos 2400 años, los pensadores intentaban comprender la naturaleza sin usar experimentos. Dos visiones importantes fueron:

- **Demócrito** ($\sim 400$ a.C.): Introdujo la palabra *átomo*. Propuso que la materia está formada por partículas fundamentales que no se pueden dividir, y que entre ellas solo hay vacío.
- **Platón**: Relacionó los elementos de la naturaleza con figuras geométricas regulares (poliedros):
  - Fuego $\rightarrow$ Tetraedro
  - Tierra $\rightarrow$ Cubo
  - Aire $\rightarrow$ Octaedro
  - Agua $\rightarrow$ Icosaedro
  - Éter/Universo $\rightarrow$ Dodecaedro

Esta idea de usar la geometría para explicar la naturaleza fue un primer paso hacia la física moderna, que busca simetrías matemáticas en el universo.

### 2.2 El Método Científico

En la antigua Grecia no se desarrolló la física moderna porque faltaba el método científico, el cual consiste en pasos claros para investigar:
1. **Experimentación:** Preparar un entorno donde se puedan controlar las variables.
2. **Medición Cuantitativa:** Tomar datos de forma precisa usando números.
3. **Formulación de Leyes:** Usar las matemáticas para describir lo que muestran los datos.
4. **Predicción y Refutación:** La teoría debe ser capaz de predecir nuevos resultados y poder ser puesta a prueba.

---

## 3. El Vacío y la Presión: Evangelista Torricelli

Durante mucho tiempo se creyó en el principio de Aristóteles llamado *horror vacui*, que decía que el vacío era imposible. En la década de 1640, **Evangelista Torricelli** demostró que esto era falso al investigar por qué las bombas de agua no podían elevar el líquido más allá de unos $10$ metros.

Torricelli llenó un tubo de vidrio con mercurio, lo tapó por un extremo y lo invirtió sobre un recipiente con más mercurio. Observó que la columna de mercurio bajaba y se detenía a una altura $h$ de unos $760 \text{ mm}$.

### 3.1 Análisis del Experimento

Torricelli concluyó que el mercurio no se caía del todo porque el peso de la atmósfera terrestre estaba presionando sobre el recipiente. La presión $P$ en la base de un líquido se calcula como:
$$ P = \rho \cdot g \cdot h $$
Donde $\rho$ es la densidad del mercurio ($13.6 \text{ g/cm}^3$), $g$ es la aceleración de la gravedad ($9.81 \text{ m/s}^2$) y $h$ es la altura ($0.76 \text{ m}$).

Este experimento logró dos cosas muy importantes:
1. **La invención del barómetro:** Permitió medir la presión atmosférica con números:
   $$ 1 \text{ atm} = 760 \text{ mmHg} = 760 \text{ Torr} \approx 101,325 \text{ Pascales} $$
2. **La demostración del vacío:** El espacio que quedaba libre arriba en el tubo no tenía aire, solo un poco de vapor de mercurio a muy baja presión ($10^{-3} \text{ mmHg}$).

Confirmar que el vacío existe fue un paso clave para aceptar la idea de los átomos, ya que estos necesitan espacio vacío para moverse.

---

## 4. Leyes de los Gases

La termodinámica comenzó estudiando la relación entre propiedades que podemos medir fácilmente, como la presión ($P$) y el volumen ($V$).

### 4.1 Ley de Boyle-Mariotte (Temperatura constante)

En 1662, **Robert Boyle** observó qué pasaba con el volumen de un gas al cambiar su presión, manteniendo la temperatura sin cambios. Descubrió que:
> "A temperatura constante, la presión de un gas ideal es inversamente proporcional a su volumen."

$$ P \propto \frac{1}{V} \implies P \cdot V = \text{Constante} $$
Si graficamos $P$ contra $V$ a una temperatura fija, obtenemos curvas llamadas isotermas (hipérbolas).

### 4.2 Ley de Charles y Gay-Lussac (Presión constante)

**Jacques Charles** y **Joseph Louis Gay-Lussac** investigaron cómo se expande un gas al calentarlo sin cambiar su presión. Encontraron la siguiente relación matemática:
$$ V(T) = V_0 \cdot [1 + \alpha(T - T_0)] $$
Lo cual significa que el volumen y la temperatura son directamente proporcionales:
$$ \frac{V}{T} = \text{Constante} $$
Al extender esta línea matemáticamente hacia temperaturas más frías, descubrieron el concepto del **cero absoluto** ($-273.15^\circ \text{C}$), el punto teórico donde un gas ideal no tendría volumen.

### 4.3 Principio de Avogadro

En 1811, **Amadeo Avogadro** estudió cómo se combinan los gases y propuso una idea revolucionaria:
> "Volúmenes iguales de gases diferentes, a la misma temperatura y presión, contienen el mismo número de moléculas."

Esta idea conectó todos los experimentos anteriores y preparó el camino para una ecuación general de los gases.

---

## 5. La Ecuación de los Gases Ideales

Si juntamos la ley de Boyle ($V \propto 1/P$), la ley de Charles ($V \propto T$) y la idea de Avogadro ($V \propto N$, donde $N$ es la cantidad de partículas), obtenemos:
$$ P \cdot V \propto N \cdot T $$

Esta relación se puede escribir de dos formas útiles:
1. Para analizar partículas individuales (microscópica):
$$ P V = N k_B T $$
*(Donde $N$ es el número de partículas y $k_B = 1.38 \times 10^{-23} \text{ J/K}$ es la constante de Boltzmann).*

2. Para usar cantidades grandes (macroscópica):
$$ P V = n R T $$
*(Donde $n$ es el número de moles y $R \approx 8.31 \text{ J/(mol}\cdot\text{K)}$ es la constante universal de los gases).*

Gracias a estas ecuaciones, más adelante se pudo calcular el **Número de Avogadro ($N_A$)**, que equivale a $6.02214076 \times 10^{23} \text{ mol}^{-1}$.

---

## 6. Conclusión de la Clase 1

Las primeras leyes de Boyle, Charles, Gay-Lussac y Avogadro trataban a los gases como si fueran una sustancia continua y uniforme. Sin embargo, las reglas matemáticas exactas que relacionaban presión, volumen y temperatura fueron la pista principal para que los científicos posteriores comprendieran que el calor y la presión en realidad provienen del movimiento de millones de pequeñas partículas invisibles.
