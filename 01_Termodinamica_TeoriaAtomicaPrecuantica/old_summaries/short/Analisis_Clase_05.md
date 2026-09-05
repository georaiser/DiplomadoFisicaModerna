# Análisis de la Clase 5: La Segunda Ley, Entropía Macroscópica y Termodinámica de Agujeros Negros
**Catedrático:** Julio Eduardo Oliva Zapata
**Asignatura:** Termodinámica y Teoría Atómica Pre-Cuántica (Módulo 1)

---

## 1. Introducción
En esta quinta clase, avanzamos desde la termodinámica macroscópica hacia la física estadística. Repasamos la **Primera Ley de la Termodinámica** y nos adentramos en la **Segunda Ley**, la cual nos explica por qué los procesos en la naturaleza ocurren en una dirección específica del tiempo (la "flecha del tiempo").

Además, veremos una de las aplicaciones más fascinantes de estas leyes: la física de los **agujeros negros**. Como menciona el físico Steven Weinberg, las leyes de la termodinámica son tan universales que se cumplen sin importar de qué esté hecho el sistema, ¡incluso si hablamos del tejido del espacio-tiempo!

---

## 2. La Primera Ley: Balance de Energía
La Primera Ley es, en esencia, el principio de conservación de la energía. 

Para escribirla matemáticamente, distinguimos entre propiedades que dependen del estado exacto del sistema (como la energía interna $U$ y el volumen $V$, cuyas variaciones anotamos como $dU$ y $dV$) y energías en tránsito que dependen de cómo ocurra el proceso (como el calor $Q$ y el trabajo $W$, que escribimos como $\bar{d}Q$ y $\bar{d}W$).

La fórmula general es:
$$ dU = \bar{d}Q - \bar{d}W $$

Si consideramos que el trabajo se realiza empujando o expandiendo un gas suavemente (cuasiestáticamente):
$$ \bar{d}W = P dV $$

Para no confundirnos, usamos esta regla de signos:
- **$\bar{d}Q > 0$:** El sistema absorbe calor.
- **$\bar{d}Q < 0$:** El sistema pierde calor.
- **$\bar{d}W > 0$:** El sistema realiza trabajo hacia afuera (se expande, $dV > 0$).

---

## 3. La Segunda Ley: Hacia Dónde Fluye la Energía
La Primera Ley asegura que la energía se conserve, pero no nos prohíbe que el calor fluya espontáneamente de un cubo de hielo a una taza de café caliente. La Segunda Ley es la que dicta las reglas lógicas del juego y se expresa de dos formas famosas:

### 3.1 El Enunciado de Clausius
> *"Es imposible que el calor fluya de forma espontánea desde un cuerpo frío hacia un cuerpo caliente sin que hagamos un esfuerzo externo."*

### 3.2 El Enunciado de Kelvin
> *"Es imposible construir una máquina perfecta que extraiga calor de una fuente y lo convierta al 100% en trabajo útil."*

Para entender a Kelvin, usamos el concepto de **reservorio térmico**: un sistema tan grande (como el océano) que podemos extraerle o darle calor sin cambiar su temperatura.

### 3.3 Dos Caras de la Misma Moneda
Aunque suenen diferentes, ambos enunciados son lógicamente iguales. Si pudieras violar la regla de Kelvin (hacer una máquina 100% eficiente), también podrías usar esa energía para violar la regla de Clausius (hacer un refrigerador que no consuma energía), y viceversa.

---

## 4. La Entropía y el Teorema de Clausius

### 4.1 Analizando Ciclos
Si hacemos que un sistema pase por un ciclo completo (volver a su estado original), Clausius demostró que:
$$ \oint \frac{\bar{d}Q}{T} \le 0 $$
Esto significa que si sumamos pedacito a pedacito el calor intercambiado dividido por la temperatura, el total nunca será positivo. 

### 4.2 El Nacimiento de la Entropía ($S$)
Si imaginamos un ciclo idealizado sin ninguna fricción o pérdida (un proceso **reversible**), la ecuación anterior es exactamente cero:
$$ \oint \left(\frac{\bar{d}Q}{T}\right)_{rev} = 0 $$
En matemáticas, cuando un recorrido cíclico da cero, significa que estamos ante una nueva variable que solo depende del estado inicial y final, no del camino. A esta nueva variable de estado la llamamos **Entropía ($S$)**:
$$ dS = \left(\frac{\bar{d}Q}{T}\right)_{rev} $$
Al dividir el calor por la temperatura ($1/T$), logramos convertir algo desordenado ($\bar{d}Q$) en una propiedad ordenada y cuantificable del sistema.

### 4.3 Procesos Reales e Irreversibles
¿Qué pasa en el mundo real, donde hay fricción y las cosas no son reversibles? Si comparamos el estado A y el estado B, la matemática de Clausius nos revela que:
$$ S_B - S_A \ge \int_{A}^{B} \left(\frac{\bar{d}Q}{T}\right)_{P} $$
Esto nos dice que el cambio real de la entropía siempre será mayor o igual al calor transferido. 

### 4.4 El Destino del Universo (Sistemas Aislados)
Si aislamos completamente un sistema (como el universo mismo), no puede entrar ni salir calor ($\bar{d}Q = 0$). Por lo tanto:
$$ \Delta S_{aislado} = S_B - S_A \ge 0 $$
Esta es una de las conclusiones más profundas de la física: **la entropía de un sistema aislado jamás puede disminuir**. El desorden global siempre aumenta o, en el mejor de los casos, se mantiene igual.

---

## 5. Termodinámica de Agujeros Negros
Para demostrar el poder de la termodinámica, podemos aplicarla a cosas tan extremas como un agujero negro sin rotación (agujero negro de Schwarzschild).

### 5.1 Propiedades Físicas
Si tenemos un agujero negro de masa $M$ y un radio del horizonte de eventos $r_h$:
- **Energía Interna ($U$):** Es equivalente a su masa $M$.
  $$ U = M = \frac{r_h}{2G} $$
- **Temperatura de Hawking:** El agujero negro emite una tenue radiación a una temperatura:
  $$ T = \frac{1}{4\pi r_h} $$
- **Entropía de Bekenstein-Hawking:** Su "desorden" se mide según el área de su superficie ($A = 4\pi r_h^2$):
  $$ S = \frac{A}{4G} = \frac{\pi r_h^2}{G} $$

### 5.2 Comprobando la Primera Ley
Si el radio del agujero negro crece un poco (de $r_h$ a $r_h + dr_h$):

Calculamos cuánto cambia su energía:
$$ dU = dM = \frac{dr_h}{2G} $$

Calculamos cuánto cambia su entropía:
$$ dS = \frac{2\pi r_h}{G} dr_h $$

Si multiplicamos la temperatura por el cambio de entropía ($T dS$):
$$ T dS = \left(\frac{1}{4\pi r_h}\right) \left(\frac{2\pi r_h}{G} dr_h\right) = \frac{dr_h}{2G} $$

**Conclusión:**
¡Magia matemática! Obtenemos exactamente que:
$$ dU = T dS = \frac{dr_h}{2G} $$
Esto demuestra que los agujeros negros obedecen rigurosamente las leyes de la termodinámica.

---

## 6. La Paradoja de Gibbs
A pesar de su éxito, la termodinámica clásica tiene un problema curioso con la entropía de los gases ideales. Clásicamente, la entropía se escribe como:
$$ S(T,V,N) = C_v \ln(T) + N k_B \ln(V) + \text{Constante} $$

Imagina que tienes una caja dividida en dos mitades idénticas, cada una con el mismo gas a la misma temperatura y presión. Si quitas la pared del medio, los gases se mezclan, pero como son idénticos, nada ha cambiado realmente en el mundo físico. La entropía inicial total era simplemente el doble de un lado ($2 S$).

Pero si calculamos la entropía del gas unido en el volumen total ($2V$, $2N$), el resultado nos arroja un incremento matemático inesperado:
$$ \Delta S = 2N k_B \ln 2 $$

Esta es la **Paradoja de Gibbs**: nos predice que el desorden aumentó, ¡pero no ocurrió ningún cambio físico observable! Para solucionar esta paradoja, la física tuvo que admitir que las partículas microscópicas son completamente indistinguibles unas de otras. Este hallazgo requerirá introducir un factor $N!$ matemático que sentará las bases de la física cuántica, como veremos en la próxima clase.
