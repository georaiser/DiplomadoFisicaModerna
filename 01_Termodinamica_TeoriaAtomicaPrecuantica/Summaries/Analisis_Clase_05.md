# Análisis de Clase 05: La Segunda Ley de la Termodinámica, el Ciclo de Carnot, la Entropía de Clausius y los Potenciales Termodinámicos

**Diplomado en Física Moderna — Módulo 01: Termodinámica y Teoría Atómica Precuántica**  
**Docente:** Dr. Julio Eduardo Oliva Zapata  
**Fecha de la sesión:** 12 de junio de 2026  
**Duración:** 3 horas 09 minutos  
**Fuentes trianguladas:**
- Transcripción oficial de la clase grabada (`Clase_05/grabacion/Clase del Diplomado de Física Moderna.docx` y `transcripcion.txt`).
- Apuntes manuscritos de pizarra digital: `Clase_05/Clase 5 notas a mano.pdf` (19 págs).
- Texto guía central: Steven Weinberg, *Foundations of Modern Physics* (Cambridge University Press, 2021), Cap. 2: §2.2 *Absolute Temperature* (pp. 21–27) y §2.3 *Entropy* (pp. 27–33).
- Fuentes primarias históricas: S. Carnot, *Réflexions sur la puissance motrice du feu* (1824); R. Clausius, *Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie*, Ann. Phys. 125, 353 (1865); W. Thomson (Lord Kelvin), *On an Absolute Thermometric Scale*, Phil. Mag. 33, 313 (1848); J. W. Gibbs, *On the Equilibrium of Heterogeneous Substances* (1876).

---

## 1. La Asimetría Temporal de la Naturaleza y la Necesidad de la Segunda Ley

*Fuente: Notas a mano Clase 5, diaps. 1–4; Transcripción 00:03–00:42; Weinberg, §2.2.*

La Primera Ley de la Termodinámica ($dU = \delta Q - \delta W$) impone un balance contable estricto: la energía total del universo se conserva en toda transformación física. Sin embargo, la Primera Ley es completamente ciega frente a la dirección temporal de los fenómenos naturales: permitiría, por ejemplo, que un vaso de agua tibia se enfríe espontáneamente concentrando su calor para elevar un peso del suelo, o que los fragmentos de una taza rota sobre el piso salten coordinadamente para rearmarse.

En la realidad empírica observamos una **irreversibilidad intrínseca**:
- El calor fluye espontáneamente de cuerpos calientes a cuerpos fríos, jamás a la inversa.
- El trabajo mecánico se disipa espontáneamente en calor por fricción; pero el calor no se convierte espontáneamente en trabajo mecánico útil sin dejar una huella en el entorno.

La Segunda Ley de la Termodinámica surge para formalizar esta asimetría y definir el sentido de la evolución espontánea de los sistemas macroscópicos.

```
                  POSTULADOS CLÁSICOS DE LA SEGUNDA LEY
                                     │
         ┌───────────────────────────┴───────────────────────────┐
         ▼                                                       ▼
   Enunciado de Kelvin-Planck (1851)                     Enunciado de Clausius (1854)
   "Es imposible un proceso cíclico cuyo                 "Es imposible un proceso cíclico cuyo
    ÚNICO resultado sea absorber calor de                 ÚNICO resultado sea transferir calor
    un foco y transformarlo en trabajo"                   de un foco frío a uno más caliente"
         │                                                       │
         └───────────────────────────┬───────────────────────────┘
                                     ▼
                      Equivalencia Lógica Estricta
                      (La violación de uno implica la violación del otro)
                                     │
                                     ▼
                      Teorema y Ciclo de Carnot (1824)
                      Escala Absoluta de Kelvin: |Q_C|/Q_H = T_C/T_H
```

---

## 2. El Ciclo de Carnot y la Escala de Temperatura Absoluta

*Fuente: Notas a mano Clase 5, diaps. 5–8; Transcripción 00:42–01:30; Weinberg, §2.2.*

Sadi Carnot (1824) concibió una máquina térmica ideal operando en un ciclo completamente **reversible** (sin fricción, turbulencias ni gradientes térmicos finitos) entre dos focos térmicos a temperaturas $T_H$ (foco caliente) y $T_C$ (foco frío), con $T_H > T_C$.

### 2.1. Etapas del Ciclo de Carnot
El ciclo consta de cuatro transformaciones cuasiestáticas reversibles consecutivas:
1. **Expansión Isotérmica ($1 \to 2$ a $T_H$):** El gas se expande en contacto con el foco caliente, absorbiendo una cantidad de calor $Q_H > 0$.
2. **Expansión Adiabática ($2 \to 3$ de $T_H$ a $T_C$):** El gas se aísla térmicamente ($\delta Q = 0$) y se expande realizando trabajo a costa de su energía interna, enfriándose hasta $T_C$.
3. **Compresión Isotérmica ($3 \to 4$ a $T_C$):** En contacto con el foco frío, el gas se comprime cediendo una cantidad de calor $|Q_C|$ ($Q_C < 0$).
4. **Compresión Adiabática ($4 \to 1$ de $T_C$ a $T_H$):** Se aísla térmicamente el gas y se comprime, elevando su temperatura hasta regresar exactamente al estado inicial $1$.

```
                         DIAGRAMA P - V DEL CICLO DE CARNOT
             P
             ▲       1  (T_H)
             │        ╭──────╮ 2  (Expansión isotérmica Q_H)
             │       ╭╯      ╰╮
             │      ╭╯        ╰╮ 3  (Expansión adiabática Q = 0)
             │   4 ╭╯         ╭╯
             │      ╰────────╯   (Compresión isotérmica Q_C a T_C)
             │         (Compresión adiabática Q = 0)
             └───┴─────────────┴────► V
```

### 2.2. Teorema de Carnot y Temperatura Absoluta de Kelvin
Carnot demostró mediante reducción al absurdo que:
1. *Ninguna máquina térmica real que opere entre dos focos térmicos fijos puede superar el rendimiento de una máquina reversible de Carnot que opere entre los mismos focos.*
2. *Todas las máquinas térmicas reversibles que operen entre los mismos dos focos tienen exactamente la misma eficiencia térmica, independientemente de la naturaleza de la sustancia de trabajo.*

El rendimiento térmico se define como el trabajo neto obtenido por unidad de calor absorbido:
$$\eta = \frac{W}{Q_H} = \frac{Q_H - |Q_C|}{Q_H} = 1 - \frac{|Q_C|}{Q_H}$$

Dado que el rendimiento de cualquier máquina reversible es estrictamente idéntico y depende solo de las temperaturas de los dos focos:
$$\frac{|Q_C|}{Q_H} = \phi(T_C, T_H)$$

William Thomson (Lord Kelvin, 1848) utilizó esta universalidad absoluta para definir la **escala de temperatura termodinámica absoluta**, postulando que la función de transferencia es simplemente el cociente lineal directo de las temperaturas absolutas:

$$\boxed{\frac{|Q_C|}{Q_H} = \frac{T_C}{T_H}}$$

Respetando la convención de signos ($\delta Q > 0$ si entra al sistema, $\delta Q < 0$ si sale):
$$\frac{Q_H}{T_H} + \frac{Q_C}{T_C} = 0$$

Y el **rendimiento máximo ideal de Carnot**:
$$\boxed{\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}}$$

---

## 3. El Teorema de Clausius y la Definición de Entropía (1865)

*Fuente: Notas a mano Clase 5, diaps. 9–13; Transcripción 01:30–02:15; Weinberg, §2.3.*

### 3.1. Teorema de Clausius
Cualquier ciclo reversible cerrado general en el plano $(P, V)$ puede discretizarse como una superposición de una red infinita de micro-ciclos elementales de Carnot adyacentes. En el límite continuo, la sumatoria discreta $\sum \frac{Q_i}{T_i} = 0$ se transforma en una integral de línea cerrada:

$$\boxed{\oint_{\text{rev}} \frac{\delta Q}{T} = 0}$$

Para un ciclo irreversible general, la disipación interna reduce el trabajo obtenido y aumenta el calor transferido al foco frío, dando lugar a la **Desigualdad de Clausius**:

$$\boxed{\oint \frac{\delta Q}{T} \le 0}$$

cumpliéndose la igualdad estricta si y solo si el proceso es completamente reversible.

### 3.2. La Entropía como Función de Estado
Dado que la integral de $\frac{\delta Q_{\text{rev}}}{T}$ a lo largo de cualquier camino cerrado cerrado es nula, el valor de la integral entre dos estados de equilibrio $A$ y $B$ es **estrictamente independiente de la trayectoria**:
$$\int_{A, \text{camino 1}}^B \frac{\delta Q_{\text{rev}}}{T} = \int_{A, \text{camino 2}}^B \frac{\delta Q_{\text{rev}}}{T}$$

Por lo tanto, la cantidad $\frac{\delta Q_{\text{rev}}}{T}$ constituye la diferencial exacta de una nueva propiedad intrínseca del sistema: la **entropía** $S$ (del griego *trope*, transformación):

$$\boxed{dS = \frac{\delta Q_{\text{rev}}}{T} \implies \Delta S = S_B - S_A = \int_A^B \frac{\delta Q_{\text{rev}}}{T}}$$

### 3.3. Principio de Aumento de Entropía
Para una transformación irreversible real que conecta el estado $A$ con el $B$, acoplada a un retorno reversible $B \to A$:
$$\oint \frac{\delta Q}{T} = \int_{A, \text{irrev}}^B \frac{\delta Q}{T} + \int_{B, \text{rev}}^A \frac{\delta Q}{T} = \int_{A, \text{irrev}}^B \frac{\delta Q}{T} + (S_A - S_B) \le 0$$

Por consiguiente:
$$S_B - S_A \ge \int_{A, \text{irrev}}^B \frac{\delta Q}{T} \implies \boxed{dS \ge \frac{\delta Q}{T}}$$

Para un **sistema térmicamente aislado** ($\delta Q = 0$):
$$\boxed{dS_{\text{aislado}} \ge 0}$$

En cualquier transformación natural de un sistema aislado, la entropía permanece constante si el proceso es reversible, y aumenta estrictamente si el proceso es irreversible. En el universo como un todo (sistema aislado supremo):
$$\Delta S_{\text{universo}} = \Delta S_{\text{sistema}} + \Delta S_{\text{entorno}} \ge 0$$
La entropía del universo evoluciona monótonamente hacia un máximo (equilibrio termodinámico o "muerte térmica").

---

## 4. Ecuación Fundamental y Potenciales Termodinámicos

*Fuente: Notas a mano Clase 5, diaps. 14–17; Transcripción 02:15–02:48; Weinberg, §2.3.*

Combinando la Primera Ley para procesos cuasiestáticos ($dU = \delta Q - P dV$) con la definición de entropía ($\delta Q_{\text{rev}} = T dS$), obtenemos la **ecuación termodinámica fundamental**:

$$\boxed{dU = T\, dS - P\, dV}$$

Esta ecuación relaciona exclusivamente funciones y variables de estado, por lo que es válida para cualquier cambio infinitesimal entre estados de equilibrio adyacentes, con independencia de que el proceso real sea reversible o no.

### 4.1. Transformaciones de Legendre
A menudo, la entropía $S$ y el volumen $V$ no son las variables experimentales más convenientes para controlar en el laboratorio (donde suele ser mucho más fácil fijar la temperatura $T$ o la presión $P$). Mediante **transformaciones de Legendre**, se derivan los tres potenciales termodinámicos adicionales:

```
                      POTENCIALES TERMODINÁMICOS Y SUS VARIABLES
                                           │
         ┌──────────────────┬──────────────┴─────┬──────────────────┐
         ▼                  ▼                    ▼                  ▼
   Energía Interna      Entalpía          Energía de Helmholtz   Energía de Gibbs
   U(S, V)              H(S, P) = U + PV  F(T, V) = U - TS       G(T, P) = H - TS
   dU = T dS - P dV     dH = T dS + V dP  dF = -S dT - P dV      dG = -S dT + V dP
```

1. **Energía Interna $U(S, V)$:**
   $$T = \left(\frac{\partial U}{\partial S}\right)_V, \qquad P = -\left(\frac{\partial U}{\partial V}\right)_S$$
2. **Entalpía $H(S, P) = U + P V$:**
   $$dH = dU + P dV + V dP = (T dS - P dV) + P dV + V dP \implies \boxed{dH = T\, dS + V\, dP}$$
   $$T = \left(\frac{\partial H}{\partial S}\right)_P, \qquad V = \left(\frac{\partial H}{\partial P}\right)_S$$
3. **Energía Libre de Helmholtz $F(T, V) = U - T S$:**
   $$dF = dU - T dS - S dT = (T dS - P dV) - T dS - S dT \implies \boxed{dF = -S\, dT - P\, dV}$$
   $$S = -\left(\frac{\partial F}{\partial T}\right)_V, \qquad P = -\left(\frac{\partial F}{\partial V}\right)_T$$
   El potencial $F$ gobierna los sistemas a temperatura y volumen constantes; en el equilibrio a $(T, V)$ fijos, $F$ alcanza su **mínimo absoluto**.
4. **Energía Libre de Gibbs $G(T, P) = H - T S = U + P V - T S$:**
   $$dG = dH - T dS - S dT = (T dS + V dP) - T dS - S dT \implies \boxed{dG = -S\, dT + V\, dP}$$
   $$S = -\left(\frac{\partial G}{\partial T}\right)_P, \qquad V = \left(\frac{\partial G}{\partial P}\right)_T$$
   El potencial $G$ gobierna los sistemas a temperatura y presión constantes (las condiciones estándar de la química y la física de materia condensada); en el equilibrio a $(T, P)$ fijos, $G$ alcanza su **mínimo absoluto**.

### 4.2. Relaciones de Maxwell
Dado que los cuatro potenciales termodinámicos son funciones de estado con segundas derivadas continuas, el teorema de Schwarz (igualdad de las derivadas cruzadas) impone las cuatro **Relaciones de Maxwell**:

1. De $dU = T dS - P dV$:
   $$\boxed{\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V}$$
2. De $dH = T dS + V dP$:
   $$\boxed{\left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P}$$
3. De $dF = -S dT - P dV$:
   $$\boxed{\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V}$$
4. De $dG = -S dT + V dP$:
   $$\boxed{\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P}$$

Estas relaciones permiten vincular derivadas de la entropía (difíciles de medir directamente) con coeficientes térmicos y mecánicos medibles con precisión en el laboratorio (dilatación volumétrica y compresibilidad).

---

## 5. Cálculo de la Entropía del Gas Ideal

*Fuente: Notas a mano Clase 5, diaps. 17–19; Transcripción 02:48–03:08.*

Para un gas ideal de $n$ moles con capacidad calorífica $C_V$ constante, la ecuación fundamental $dU = T dS - P dV$ se resuelve para $dS$:

$$dS = \frac{dU}{T} + \frac{P}{T} dV = n C_V \frac{dT}{T} + n R \frac{dV}{V}$$

Integrando entre un estado inicial $(T_1, V_1)$ y un estado final $(T_2, V_2)$:

$$\boxed{\Delta S = S_2 - S_1 = n C_V \ln\left(\frac{T_2}{T_1}\right) + n R \ln\left(\frac{V_2}{V_1}\right)}$$

Expresada en términos de presión y temperatura (utilizando $V = nRT/P$ y $C_P = C_V + R$):

$$\boxed{\Delta S = n C_P \ln\left(\frac{T_2}{T_1}\right) - n R \ln\left(\frac{P_2}{P_1}\right)}$$

La entropía absoluta $S(T, V) = n C_V \ln T + n R \ln V + S_0$ deja indeterminada la constante aditiva $S_0$. La termodinámica clásica no puede deducir el valor de $S_0$; esto requirió el advenimiento de la física estadística de Boltzmann ($S = k_B \ln \Omega$) y la constante cuántica de Planck $h$ en la ecuación de Sackur-Tetrode (1912).

---

## 6. Conclusiones de la Clase

1. **Sentido temporal de la termodinámica:** La Segunda Ley prohíbe la conversión íntegra y espontánea de calor en trabajo en ciclos cerrados (Kelvin-Planck) y el flujo espontáneo de calor de frío a caliente (Clausius).
2. **Escala termodinámica absoluta:** El teorema de Carnot demuestra que la eficiencia reversible $\eta = 1 - T_C/T_H$ es universal e independiente de la sustancia, proporcionando la definición física de la temperatura Kelvin.
3. **Entropía como función de estado:** El teorema de Clausius $\oint_{\text{rev}} \frac{\delta Q}{T} = 0$ define la entropía $dS = \frac{\delta Q_{\text{rev}}}{T}$, mientras que su desigualdad $\oint \frac{\delta Q}{T} \le 0$ fundamenta el aumento irreversible de la entropía en sistemas aislados ($dS_{\text{aislado}} \ge 0$).
4. **Potenciales termodinámicos y relaciones de Maxwell:** Mediante transformaciones de Legendre se derivaron las funciones de estado $U, H, F, G$, cuyos mínimos determinan el equilibrio bajo distintas condiciones de contorno y generan las relaciones simétricas de Maxwell.
5. **Apertura a la mecánica estadística:** La entropía macroscópica de Clausius mide la degradación de la energía; su fundamentación microscópica como conteo de microestados accesibles en el espacio de fases corresponde al aporte fundamental de Ludwig Boltzmann (Clase 06).

---

## 7. Referencias Bibliográficas

1. **Fuentes primarias y artículos históricos:**
   - Carnot, S. (1824). *Réflexions sur la puissance motrice du feu*. París: Bachelier.
   - Clausius, R. (1865). "Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie". *Annalen der Physik*, 125, 353–400.
   - Thomson, W. (Lord Kelvin) (1848). "On an Absolute Thermometric Scale founded on Carnot's Theory of the Motive Power of Heat". *Philosophical Magazine*, 33, 313–317.
   - Gibbs, J. W. (1876). "On the Equilibrium of Heterogeneous Substances". *Transactions of the Connecticut Academy of Arts and Sciences*, 3, 108–248.
2. **Textos y materiales del diplomado:**
   - Oliva Zapata, J. E. (2026). *Material pedagógico de Clase 05: Segunda Ley, Ciclo de Carnot, Entropía y Potenciales Termodinámicos*. Universidad de Concepción.
   - Oliva Zapata, J. E. (2026). *Clase 5 notas a mano.pdf* (Apuntes de cátedra).
3. **Textos universitarios canónicos:**
   - Weinberg, S. (2021). *Foundations of Modern Physics*. Cambridge: Cambridge University Press. Cap. 2: §2.2 "Absolute Temperature", pp. 21–27; §2.3 "Entropy", pp. 27–33.
   - Callen, H. B. (1985). *Thermodynamics and an Introduction to Thermostatistics*. Nueva York: John Wiley & Sons. Caps. 1–6.
   - Fermi, E. (1937). *Thermodynamics*. Nueva York: Prentice-Hall / Dover.
