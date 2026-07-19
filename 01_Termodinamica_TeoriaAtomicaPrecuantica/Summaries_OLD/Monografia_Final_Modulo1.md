---
title: "La Evolución de la Entropía: De la Termodinámica Macroscópica a la Probabilidad Cuántica"
subtitle: "Trabajo Final - Módulo 1: Termodinámica y Teoría Atómica Pre-Cuántica"
author: "Diplomado en Física Moderna (Prof. Julio Eduardo Oliva Zapata)"
date: "2026"
geometry: margin=2.5cm
---

# La Evolución de la Entropía: De la Termodinámica Macroscópica a la Probabilidad Cuántica

## Resumen

El presente trabajo analiza el desarrollo del concepto de entropía, desde su origen en la termodinámica macroscópica hasta su interpretación estadística. Se explica cómo las leyes clásicas resultaron insuficientes para describir sistemas de partículas idénticas, dando lugar a la Paradoja de Gibbs. La resolución de este problema requirió introducir conceptos fundamentales para la futura física cuántica: la indistinguibilidad de las partículas (el factor $1/N!$) y la discretización del espacio de fases mediante la constante de Planck ($h$). A través de la ecuación de Sackur-Tetrode y el enfoque probabilístico de Boltzmann, se demuestra cómo las propiedades termodinámicas emergen del comportamiento estadístico de los sistemas a nivel microscópico.

---

## 1. Introducción

La física del siglo XIX se enfrentó a un desafío importante: integrar las leyes de la termodinámica con la mecánica de Newton. Mientras que las ecuaciones de Newton son reversibles en el tiempo, los procesos térmicos observados en la naturaleza muestran una clara direccionalidad. Por ejemplo, el calor fluye de un cuerpo caliente a uno frío, y la fricción disipa energía que no se puede recuperar espontáneamente. 

Para describir esta "flecha del tiempo", Rudolf Clausius formuló la Segunda Ley de la Termodinámica e introdujo la entropía ($S$) como una variable matemática. Sin embargo, su significado físico no fue comprendido de inmediato. Basado en las Clases 5 y 6 del Módulo 1 y en el texto *Foundations of Modern Physics* de Steven Weinberg, este documento explica de forma progresiva cómo se descubrió que la entropía no es una sustancia física, sino una medida estadística relacionada con las configuraciones microscópicas de un sistema.

---

## 2. La Termodinámica Macroscópica

En la termodinámica clásica, los sistemas se analizan como medios continuos. Las variables que se utilizan, como la presión ($P$), el volumen ($V$) y la temperatura ($T$), son propiedades macroscópicas medibles.

### 2.1 La Desigualdad de Clausius y la Entropía

Para una máquina térmica que opera en un ciclo, la suma del calor intercambiado dividido por la temperatura debe cumplir con la Desigualdad de Clausius:
$$ \oint \frac{\bar{d}Q}{T} \le 0 $$
En el caso ideal de un proceso reversible, esta expresión es exactamente igual a cero. Esto permite definir matemáticamente la entropía ($S$) como una función de estado, donde su cambio diferencial es:
$$ dS = \left( \frac{\bar{d}Q}{T} \right)_{\text{rev}} $$
Combinando esto con la Primera Ley de la Termodinámica ($dU = \bar{d}Q - \bar{d}W + \mu dN$), asumiendo únicamente trabajo mecánico ($dW = P dV$), se obtiene la relación termodinámica fundamental:
$$ dU = T dS - P dV + \mu dN $$
Esta ecuación relaciona los cambios de energía interna ($dU$) con el calor, el trabajo y el intercambio de partículas. 

### 2.2 Universalidad de la Termodinámica: Agujeros ******

La robustez de esta formulación macroscópica es tal que se aplica incluso a la física de los agujeros ******. Jacob Bekenstein y Stephen Hawking demostraron que un agujero ****** posee entropía proporcional a su área ($A$) y una temperatura inversamente proporcional a su masa ($M$):
$$ T_H = \frac{\hbar c^3}{8 \pi G M k_B} $$
Relacionando la energía con la masa ($U = M c^2$), se cumple que $T_H dS_{BH} = dU$, demostrando que las leyes termodinámicas son principios físicos universales e independientes del material que compone al sistema.

---

## 3. El Límite de la Física Clásica: La Paradoja de Gibbs

A pesar de su éxito general, la termodinámica macroscópica clásica presentó problemas matemáticos al intentar deducir propiedades a partir de primeros principios. El caso más notable es el intento de calcular la entropía absoluta de un gas ideal.

### 3.1 El Cálculo de la Entropía Clásica
Considerando un gas de $N$ partículas tratadas como un fluido continuo clásico, su energía interna es $U = \frac{3}{2}N k_B T$. Al integrar la relación termodinámica fundamental, se obtiene la entropía clásica del gas:
$$ S(T,V,N) = \frac{3}{2}N k_B \ln(T) + N k_B \ln(V) + S_0(N) $$
Donde $S_0(N)$ es una constante de integración que depende de $N$.

### 3.2 La Paradoja de Gibbs
La termodinámica exige que la entropía sea una propiedad extensiva: si duplicamos el tamaño del sistema (el volumen y las partículas), la entropía también debe duplicarse. 

Supongamos un recipiente dividido a la mitad por una pared. En ambas mitades hay el mismo gas (Argón), con la misma cantidad de moléculas ($N$), temperatura ($T$) y volumen ($V$). Si quitamos la pared, los gases se mezclan, pero al ser idénticos y estar a la misma temperatura, no ocurre ningún cambio observable real. 

Sin embargo, si utilizamos la fórmula clásica de entropía para calcular el estado antes y después de quitar la pared, el resultado predice un aumento de entropía:
$$ \Delta S_{\text{mezcla}} = 2N k_B \ln(2) $$
Este resultado es incorrecto. La fórmula clásica afirma que el simple hecho de mezclar dos gases idénticos genera entropía. Esta contradicción matemática se conoce como la Paradoja de Gibbs y demostró que la física continua tradicional estaba incompleta.

---

## 4. La Solución Estadística

Para resolver la Paradoja de Gibbs, fue necesario modificar la forma de contar los estados microscópicos del gas, introduciendo dos conceptos que sentarían las bases de la mecánica cuántica.

### 4.1 La Indistinguibilidad de las Partículas ($1/N!$)
Josiah W. Gibbs notó que la física clásica asumía que cada átomo tenía una identidad única. Si dos átomos de Argón intercambiaban posiciones, la física clásica lo contaba como un estado diferente. 

Gibbs propuso que las partículas idénticas son físicamente indistinguibles. Intercambiar dos átomos de Argón no crea un nuevo estado. Dado que existen $N!$ (N factorial) formas posibles de intercambiar $N$ partículas, Gibbs dividió el cálculo matemático entre $N!$ para evitar contar los mismos estados repetidas veces.

### 4.2 La Discretización del Espacio de Fases
En 1912, Otto Sackur y Hugo Tetrode incorporaron la corrección de Gibbs y aplicaron la nueva teoría cuántica incipiente a los gases. Descubrieron que integrar la entropía de manera continua llevaba a resultados infinitos. El espacio físico no podía ser infinitamente divisible; debía subdividirse en unidades mínimas basadas en la constante de Planck ($h$).

Al integrar el sistema considerando la corrección $1/N!$ y el volumen mínimo $h^3$, derivaron la Ecuación de Sackur-Tetrode para la entropía absoluta de un gas monoatómico:

$$ S(E,V,N) = N k_B \ln\left[ \frac{V}{N} \left( \frac{4\pi m E}{3 N h^2} \right)^{3/2} \right] + \frac{5}{2} N k_B $$

**Implicaciones de la Fórmula:**
1. **Solución a la Paradoja de Gibbs:** En la ecuación aparece la relación geométrica $\frac{V}{N}$ (densidad inversa) en lugar del volumen $V$ de forma aislada. Si el volumen y el número de partículas se duplican, el cociente $\frac{V}{N}$ se mantiene constante, resolviendo la paradoja matemáticamente.
2. **Naturaleza Cuántica:** La aparición de la constante de Planck ($h$) en la ecuación demuestra que las propiedades termodinámicas macroscópicas de un gas común dependen de los principios fundamentales de la mecánica cuántica.

---

## 5. La Interpretación Probabilística de Boltzmann

El marco que validó la ecuación de Sackur-Tetrode fue la mecánica estadística de Ludwig Boltzmann. 

### 5.1 La Ecuación de Boltzmann
Boltzmann propuso que en un sistema aislado en equilibrio, todos los estados microscópicos posibles (microestados) compatibles con la energía total son igual de probables.

Definiendo a $g(E, V, N)$ como el número total de microestados posibles, Boltzmann estableció que la entropía es simplemente una medida logarítmica de la cantidad de configuraciones microscópicas disponibles:
$$ S = k_B \ln(g) $$
Con esto, la Segunda Ley de la Termodinámica deja de ser una regla misteriosa del flujo del tiempo y se convierte en una cuestión de probabilidad. Los sistemas evolucionan hacia estados de mayor entropía simplemente porque existen exponencialmente más formas de ordenar las partículas en estados mezclados (caóticos) que en estados separados (ordenados).

### 5.2 Recuperando las Leyes Macroscópicas
El mayor éxito de este modelo es que permite deducir todas las leyes termodinámicas conocidas de manera puramente analítica. Partiendo de la relación diferencial $dS = \frac{1}{T} dE + \frac{P}{T} dV - \frac{\mu}{T} dN$, podemos extraer la presión usando la derivada parcial respecto al volumen:
$$ \frac{P}{T} = \left( \frac{\partial S}{\partial V} \right)_{N,E} $$
Al derivar la Ecuación de Sackur-Tetrode respecto a $V$, obtenemos:
$$ \frac{P}{T} = N k_B \left(\frac{1}{V}\right) \implies P V = N k_B T $$
Se recupera así la ecuación del gas ideal de forma exacta, demostrando que la presión no es más que una consecuencia de la maximización probabilística de los estados cuánticos microscópicos.

---

## 6. Conclusión

El estudio del Módulo 1 demuestra que la termodinámica experimentó una transición fundamental desde un modelo de fluidos continuos hacia una teoría probabilística corpuscular. 

El fracaso de la física clásica para explicar la entropía de mezcla de un mismo gas (Paradoja de Gibbs) reveló que la materia no puede ser tratada de manera estrictamente clásica y continua. La solución a este problema forzó a la física a aceptar la indistinguibilidad de las partículas idénticas ($1/N!$) y la existencia de unidades mínimas de espacio dinámico limitadas por la constante de Planck ($h$). 

A través del trabajo de Boltzmann, la flecha del tiempo fue desmitificada, explicándose como una evolución estadística natural hacia los estados macroscópicos con mayor probabilidad matemática. Este esfuerzo intelectual cerró la etapa de la termodinámica fenomenológica clásica y preparó el andamiaje necesario para el desarrollo formal de la mecánica cuántica moderna.

---

## 7. Referencias

1. Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge University Press.
2. Einstein, A. (1905). *Investigaciones sobre la Teoría del Movimiento Browniano*.
3. Oliva Zapata, J. E. (2026). *Notas Analíticas de Cátedra, Módulo 1: Termodinámica y Teoría Atómica Pre-Cuántica (Clases 1 a 6)*.
4. Gibbs, J. W. (1902). *Elementary Principles in Statistical Mechanics*. Yale University Press.
