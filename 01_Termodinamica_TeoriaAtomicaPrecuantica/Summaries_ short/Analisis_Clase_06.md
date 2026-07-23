# Análisis de la Clase 6: Mecánica Estadística, Entropía de Boltzmann y la Paradoja de Gibbs
**Catedrático:** Julio Eduardo Oliva Zapata
**Asignatura:** Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1)

---

## 1. Introducción
En esta sexta clase, construimos un puente definitivo entre el mundo grande y medible (termodinámica macroscópica) y el mundo diminuto de los átomos (mecánica estadística). Aprenderemos cómo propiedades que podemos sentir y medir, como la temperatura o la presión, nacen directamente del caos estadístico de millones de partículas en movimiento.

Como señala Steven Weinberg, aunque las reglas de la termodinámica no dependen de qué material usemos, la física estadística nos permite calcular sus propiedades matemáticas exactas. Sin embargo, para que todo encaje sin errores lógicos, deberemos tomar prestados conceptos fundamentales de la mecánica cuántica.

---

## 2. Resolviendo la Paradoja de Gibbs
Como vimos al final de la clase anterior, la fórmula clásica de la entropía para un gas ideal falla: nos dice erróneamente que la entropía aumenta ($\Delta S = 2N k_B \ln 2$) si mezclamos dos volúmenes idénticos del mismo gas. Esto no tiene sentido, pues físicamente el sistema no cambia.

### 2.1 La Ecuación de Sackur-Tetrode
La solución a este rompecabezas llega de la mano de un enfoque estadístico y cuántico que resulta en la famosa **fórmula de Sackur-Tetrode**:
$$ S(E,V,N) = N k_B \ln\left[ \frac{V}{N} \left( \frac{4\pi m E}{3 N h^2} \right)^{3/2} \right] + \frac{5}{2} N k_B $$

Escrita usando la temperatura ($E = \frac{3}{2}N k_B T$), se ve así:
$$ S(T,V,N) = N k_B \ln\left[ \frac{V}{N} \left( \frac{2\pi m k_B T}{h^2} \right)^{3/2} \right] + \frac{5}{2} N k_B $$

**¿Por qué esta fórmula soluciona el problema?**
1. **La relación Volumen-Partícula ($V/N$):** Al reemplazar el volumen simple $V$ por la relación $V/N$, la entropía crece de manera proporcional y lógica si juntamos dos sistemas. Esto nace al aceptar que todas las partículas del gas son idénticas e indistinguibles entre sí, dividiendo todo por un factor matemático $N!$.
2. **La presencia de la Constante de Planck ($h$):** Su aparición nos advierte que para contar estados microscópicos de forma correcta, la naturaleza no es continua, sino que se organiza en "celdas" mínimas de tamaño $h^3$.

---

## 3. Microestados, Macrostados y la Apuesta de Boltzmann

Para entender la estadística del universo, primero debemos distinguir dos conceptos: el microestado (el estado individual de cada partícula) y el macrostado (el estado global que nosotros medimos).

### 3.1 Un Ejemplo con Tres Espines
Imagina 3 partículas que pueden apuntar hacia arriba ($\uparrow$) o abajo ($\downarrow$):
- **Microestados:** Hay $2^3 = 8$ combinaciones posibles.
- **Macrostado:** Si nos interesa la diferencia neta de espines ($s = N_\uparrow - N_\downarrow$), notaremos que hay 3 formas distintas de lograr que solo una partícula apunte hacia abajo (multiplicidad $g=3$), pero solo 1 forma de que todas apunten hacia arriba ($g=1$).

### 3.2 El Postulado de Boltzmann
Para un sistema cerrado (con energía y cantidad de materia fijas), Boltzmann postuló lo siguiente:
> *"Todas las configuraciones microscópicas posibles tienen exactamente la misma probabilidad de ocurrir."*

Si aplicamos esto a miles de millones de partículas ($N \sim 10^{23}$), las probabilidades se concentran drásticamente en el estado más caótico y mezclado, haciendo casi imposible observar estados extrañamente ordenados.

### 3.3 ¿Por qué el tiempo va hacia adelante?
Si las leyes físicas de las partículas pueden funcionar hacia atrás (como un video en reversa), ¿por qué vemos irreversibilidad? La respuesta es puramente estadística. Existen muchísimas más combinaciones donde el gas llena toda la habitación en lugar de quedarse en un rincón. Aunque matemáticamente podría volver solo al rincón (Tiempo de Recurrencia de Poincaré), tardaría mucho más que la edad del universo en lograrlo al azar.

### 3.4 La Entropía según Boltzmann
Con esta base, Boltzmann redefinió la entropía de manera elegantísima:
$$ S = k_B \ln(g) $$
Donde $g$ (o $\Omega$) es la multiplicidad, es decir, el número exacto de microestados ocultos que corresponden al macrostado que estamos viendo.

---

## 4. Contando Estados en un Sistema de Dos Niveles
Pongamos a prueba la fórmula con un modelo sencillo: partículas que solo pueden tener dos niveles de energía, un nivel bajo ($E_0 = 0$) y uno alto ($E_1 = \varepsilon$).
- Condiciones de juego: El total de partículas es $N = N_0 + N_1$ y la energía total es $E = N_1 \varepsilon$.

Para calcular cuántas combinaciones ($g$) podemos armar, usamos combinatoria:
$$ g(E,N) = \frac{N!}{N_0! N_1!} = \frac{N!}{\left(N - \frac{E}{\varepsilon}\right)! \left(\frac{E}{\varepsilon}\right)!} $$

Al aplicar la fórmula de Boltzmann ($S = k_B \ln g$) y simplificar la matemática factorial con la aproximación de Stirling, logramos calcular una entropía muy precisa que incluso predice fenómenos extraños, como temperaturas negativas o capacidades caloríficas anómalas.

---

## 5. El Gas Ideal: Uniendo ambos Mundos
Por último, vamos a demostrar que la entropía estadística $S(E,N,V)$ coincide a la perfección con las reglas de la termodinámica.

Si usamos matemáticas para ver cómo cambia la entropía cuando varían la energía, el volumen y las partículas:
$$ dS = \left( \frac{\partial S}{\partial E} \right)_{N,V} dE + \left( \frac{\partial S}{\partial V} \right)_{N,E} dV + \left( \frac{\partial S}{\partial N} \right)_{E,V} dN $$

Al comparar esto con la Primera Ley clásica ($dS = \frac{1}{T} dE + \frac{P}{T} dV - \frac{\mu}{T} dN$), podemos deducir directamente qué son las cosas que medimos a diario:
1. **Temperatura:** $\frac{1}{T} = \left( \frac{\partial S}{\partial E} \right)_{N,V}$
2. **Presión:** $\frac{P}{T} = \left( \frac{\partial S}{\partial V} \right)_{N,E}$
3. **Potencial Químico:** $\frac{\mu}{T} = - \left( \frac{\partial S}{\partial N} \right)_{E,V}$

### 5.1 Cuantización del Espacio
Para hacer este cálculo en un gas ideal real (el modelo de partícula en una caja tridimensional), descubrimos que la energía solo puede tomar valores específicos según la ecuación:
$$ E = \frac{\pi^2 \hbar^2}{2m V^{2/3}} (n_1^2 + n_2^2 + \dots + n_{3N}^2) $$
Al contar estas combinaciones usando la geometría de una hiper-esfera, y aplicando la indistinguibilidad de las partículas (dividiendo por $N!$), llegamos directamente a la fórmula de Sackur-Tetrode.

### 5.2 Recuperando las Leyes del Colegio
Finalmente, si aplicamos las derivadas a la fórmula de Sackur-Tetrode, mágicamente recuperamos las fórmulas clásicas del gas ideal que todos conocemos:
1. **Ley de los Gases Ideales:**
$$ \frac{P}{T} = \frac{\partial S}{\partial V} = \frac{N k_B}{V} \Rightarrow PV = N k_B T $$
2. **Energía de un Gas Ideal:**
$$ \frac{1}{T} = \frac{\partial S}{\partial E} = \frac{3N k_B}{2E} \Rightarrow E = \frac{3}{2} N k_B T $$

---

## 6. Conclusión
Esta clase cierra el módulo demostrando un triunfo espectacular de la física: logramos deducir rigurosamente todas las leyes macroscópicas de la termodinámica y el comportamiento de un gas ideal basándonos, únicamente, en las reglas estadísticas y cuánticas de partículas invisibles rebotando al azar.
