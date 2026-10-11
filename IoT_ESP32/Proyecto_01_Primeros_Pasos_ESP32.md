# 🌱 Proyecto 1 — Mi primera estación ambiental con ESP32
> **v1.0** · Guía paso a paso para principiantes absolutos. No necesitas saber electrónica ni programar: solo seguir los pasos en orden.
> Usa **solo hardware que ya compraste**. Lo que hagas aquí servirá después en la Estación Geofísica y el Monitor Ambiental.

---

## Tabla de Contenidos
0. [Qué vas a construir y qué vas a aprender](#0-qué-vas-a-construir-y-qué-vas-a-aprender)
1. [Qué necesitas (todo ya comprado)](#1-qué-necesitas-todo-ya-comprado)
2. [Conceptos mínimos (5 minutos)](#2-conceptos-mínimos-5-minutos)
3. [Paso 1 — Preparar el computador](#paso-1--preparar-el-computador)
4. [Paso 2 — Probar la placa: LED parpadeante](#paso-2--probar-la-placa-led-parpadeante)
5. [Paso 3 — Conectar un sensor y buscarlo (escáner I2C)](#paso-3--conectar-un-sensor-y-buscarlo-escáner-i2c)
6. [Paso 4 — Temperatura, humedad y presión](#paso-4--temperatura-humedad-y-presión-aht20--bmp280)
7. [Paso 5 — Luz (BH1750)](#paso-5--luz-bh1750)
8. [Paso 6 — Mostrar todo en la pantalla OLED](#paso-6--mostrar-todo-en-la-pantalla-oled)
9. [Paso 7 — Repetir en la placa mini (ESP32-C3)](#paso-7--repetir-en-la-placa-mini-esp32-c3-super-mini)
10. [Problemas comunes y soluciones](#problemas-comunes-y-soluciones)
11. [Hoja de ruta: de simple a complejo](#hoja-de-ruta-de-simple-a-complejo)
12. [Intercambios de hardware respecto a los proyectos anteriores](#intercambios-de-hardware-respecto-a-los-proyectos-anteriores)

---

## 0. Qué vas a construir y qué vas a aprender

**Construirás** un pequeño aparato que mide **temperatura, humedad, presión y luz**, y lo muestra en una pantalla y en el computador.

| Paso | Qué haces | Qué aprendes |
|:---:|---|---|
| 1 | Instalar programas | Entorno de trabajo (Arduino IDE) |
| 2 | Hacer parpadear un LED | Subir un programa a la placa |
| 3 | Escanear el bus I2C | Cómo "conversa" un sensor con la placa |
| 4 | Leer AHT20 + BMP280 | Leer sensores con librerías |
| 5 | Leer BH1750 | Conectar varios sensores a los mismos cables |
| 6 | Pantalla OLED | Mostrar datos sin computador |
| 7 | Repetir en ESP32-C3 | La misma idea en una placa mini |

⏱️ **Tiempo estimado:** 1 a 2 tardes. Detente cuando quieras; cada paso funciona solo.

---

## 1. Qué necesitas (todo ya comprado)

### Placas

| Placa | Rol en este proyecto |
|---|---|
| **ESP32 DevKit 30P** (WROOM-32) | 🟢 **Tu placa principal para aprender** (Pasos 1–6) |
| **ESP32-C3 Super Mini** | 🟡 Placa mini (Paso 7) |

> 💡 Se eligió el **DevKit 30P** porque es la más estándar: la mayoría de tutoriales en internet usan una igual. Las **ESP32-S3** y **XIAO** se dejan para más adelante.

### Sensores y accesorios

| Componente | Cant. a usar | Para qué |
|---|:---:|---|
| **AHT20 + BMP280** (módulo) | 1 | Temperatura, humedad y presión |
| **BH1750 GY-302** | 1 | Luz (lux) |
| **OLED 0.96" SSD1306 (I2C)** | 1 | Pantalla |
| **Protoboard 830 puntos** | 1 | Conectar sin soldar |
| **Cables Dupont** (macho-macho y macho-hembra) | ~12 | Conexiones |
| **Cable USB de datos** (Xiaomi USB-C) | 1 | Conectar la placa al PC |
| **Multímetro** (opcional) | 1 | Revisar voltajes si algo falla |

### ⚠️ Reglas de oro (léelas una vez)

1. **Nunca conectes o cambies cables con la placa enchufada.** Primero desenchufa el USB.
2. **Alimenta todos los sensores con `3V3`**, no con `5V` ni `VIN`, salvo que se indique.
3. **Revisa dos veces `VCC` y `GND`.** Invertirlos puede quemar el sensor.
4. **Usa un cable USB de datos.** Los cables solo de carga no permiten programar.
5. Si algo huele a quemado o se calienta: **desenchufa de inmediato**.
6. Si tus módulos traen los pines sueltos (en bolsita), hay que **soldarlos** primero. Si aún no sabes soldar, pide ayuda a alguien o practica con una placa PCB de repuesto.

---

## 2. Conceptos mínimos (5 minutos)

**Microcontrolador (ESP32):** un mini computador que ejecuta *un solo programa*. Tiene Wi‑Fi y pines para conectar sensores.

**Pin:** un "agujero" de la placa por donde entra o sale electricidad o información.

**GND / 3V3:** `GND` es el "0 voltios" (tierra) y `3V3` es la alimentación de 3.3 voltios. Todo sensor necesita ambos.

**I2C:** una forma de conectar **muchos sensores con solo 2 cables de datos**:

| Cable | Nombre | Qué hace |
|---|---|---|
| **SDA** | Datos | Aquí viaja la información |
| **SCL** | Reloj | Sincroniza la comunicación |

Cada sensor tiene una **dirección** (como una dirección de casa), por eso se pueden compartir los mismos 2 cables:

| Dispositivo | Dirección I2C típica |
|---|:---:|
| AHT20 (humedad y temperatura) | `0x38` |
| BMP280 (presión) | `0x77` (a veces `0x76`) |
| BH1750 (luz) | `0x23` |
| OLED SSD1306 | `0x3C` |

**Sketch:** así se llama un programa de Arduino. **Librería:** código ya hecho que hace fácil usar un sensor.

**Monitor Serie:** una ventana del Arduino IDE donde la placa "escribe" mensajes en tu computador.

---

## Paso 1 — Preparar el computador

### 1.1 Instalar Arduino IDE
1. Descarga **Arduino IDE 2.x** desde <https://www.arduino.cc/en/software> e instálalo (acepta todo por defecto).

### 1.2 Agregar soporte para ESP32
1. Abre Arduino IDE → **Archivo → Preferencias**.
2. En **"Gestor de URLs Adicionales de Tarjetas"** pega:
   ```text
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
3. Pulsa **OK**.
4. Menú **Herramientas → Placa → Gestor de tarjetas…**
5. Busca `esp32` e instala **"esp32 by Espressif Systems"** (puede tardar varios minutos).

### 1.3 Conectar la placa
1. Enchufa el **DevKit 30P** con el cable USB de datos.
2. Menú **Herramientas → Placa → esp32 → `ESP32 Dev Module`**.
3. Menú **Herramientas → Puerto** → elige el que aparezca (en Windows, algo como `COM3`).

> ❓ **¿No aparece ningún puerto?** Prueba otro cable USB (debe ser de datos), otro puerto USB y, si sigue igual, instala el controlador **CP2102** o **CH340** (según el chip que tenga tu placa; búscalo en internet con ese nombre).

✅ **Listo cuando:** ves el puerto seleccionado en el menú Herramientas.

---

## Paso 2 — Probar la placa: LED parpadeante

Aún **sin sensores**. Solo comprobamos que puedes programar la placa. El DevKit tiene un LED azul propio en el **GPIO 2**.

1. **Archivo → Nuevo sketch**, borra todo y pega:

```cpp
// Paso 2: LED parpadeante
const int PIN_LED = 2;   // LED azul integrado del DevKit

void setup() {
  pinMode(PIN_LED, OUTPUT);        // el pin será una salida
  Serial.begin(115200);            // inicia el "chat" con el PC
  Serial.println("Hola, soy tu ESP32!");
}

void loop() {
  digitalWrite(PIN_LED, HIGH);     // enciende
  Serial.println("LED encendido");
  delay(1000);                     // espera 1 segundo
  digitalWrite(PIN_LED, LOW);      // apaga
  Serial.println("LED apagado");
  delay(1000);
}
```

2. Pulsa el botón **→ Subir** (flecha arriba a la izquierda).
3. Si aparece `Connecting........` y no avanza, **mantén pulsado el botón `BOOT`** de la placa hasta que empiece a subir.
4. Abre el **Monitor Serie** (lupa arriba a la derecha) y selecciona **115200 baud** abajo a la derecha.

✅ **Listo cuando:** el LED azul parpadea y ves los mensajes en el Monitor Serie.

> 🎉 Acabas de programar un microcontrolador. Todo lo demás es variar este patrón.

---

## Paso 3 — Conectar un sensor y buscarlo (escáner I2C)

Empezamos con el sensor de **temperatura/humedad/presión (AHT20 + BMP280)**.

### 3.1 Cableado

> 🔌 **Desenchufa el USB antes de conectar.**

| Módulo AHT20+BMP280 | → | DevKit 30P |
|---|:---:|---|
| `VCC` (o `VIN`) | → | `3V3` |
| `GND` | → | `GND` |
| `SCL` | → | `GPIO 22` (rotulado `D22` o `22`) |
| `SDA` | → | `GPIO 21` (rotulado `D21` o `21`) |

```text
  DevKit 30P                 AHT20+BMP280
 ┌──────────┐              ┌─────────────┐
 │      3V3 ├──────────────┤ VCC         │
 │      GND ├──────────────┤ GND         │
 │  GPIO 22 ├──────────────┤ SCL         │
 │  GPIO 21 ├──────────────┤ SDA         │
 └──────────┘              └─────────────┘
```

> 💡 **Truco:** pon la placa y el sensor en la protoboard y usa cables Dupont. Las dos filas laterales (rojo `+` y azul `-`) sirven de "regleta": una para `3V3` y otra para `GND`, así luego conectas más sensores.

### 3.2 Programa: escáner I2C
Este programa pregunta "¿quién está ahí?" a todas las direcciones.

```cpp
// Paso 3: Escáner I2C
#include <Wire.h>

#define SDA_PIN 21
#define SCL_PIN 22

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);
  delay(1000);
  Serial.println("Escaneando bus I2C...");
}

void loop() {
  int encontrados = 0;
  for (byte dir = 1; dir < 127; dir++) {
    Wire.beginTransmission(dir);
    if (Wire.endTransmission() == 0) {
      Serial.print("Dispositivo encontrado en 0x");
      if (dir < 16) Serial.print("0");
      Serial.println(dir, HEX);
      encontrados++;
    }
  }
  if (encontrados == 0) Serial.println("No se encontró nada. Revisa el cableado.");
  Serial.println("---");
  delay(3000);
}
```

### 3.3 Resultado esperado

```text
Dispositivo encontrado en 0x38     ← AHT20 ✅
Dispositivo encontrado en 0x77     ← BMP280 ✅  (o 0x76)
```

✅ **Listo cuando:** aparecen `0x38` y `0x77` (o `0x76`).

> ❌ **No aparece nada:** revisa que `SDA` y `SCL` no estén cruzados, que `VCC` vaya a `3V3` y que los pines estén bien soldados. Ver [Problemas comunes](#problemas-comunes-y-soluciones).
>
> 📝 **Anota** la dirección del BMP280 que te salga (`0x76` o `0x77`): la usarás en el siguiente paso.

---

## Paso 4 — Temperatura, humedad y presión (AHT20 + BMP280)

### 4.1 Instalar librerías
**Herramientas → Administrar bibliotecas…** (o `Ctrl+Shift+I`). Busca e instala:

| Busca | Instalar |
|---|---|
| `Adafruit AHTX0` | *Adafruit AHTX0* (acepta instalar dependencias → **Install all**) |
| `Adafruit BMP280` | *Adafruit BMP280 Library* (también **Install all**) |

### 4.2 Programa

```cpp
// Paso 4: AHT20 + BMP280
#include <Wire.h>
#include <Adafruit_AHTX0.h>
#include <Adafruit_BMP280.h>

#define SDA_PIN 21
#define SCL_PIN 22

Adafruit_AHTX0 aht;
Adafruit_BMP280 bmp(&Wire);

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);

  if (!aht.begin()) {
    Serial.println("ERROR: no encuentro el AHT20");
    while (true) delay(1000);
  }
  // Prueba primero 0x77 y luego 0x76 (según lo que viste en el escáner)
  if (!bmp.begin(0x77) && !bmp.begin(0x76)) {
    Serial.println("ERROR: no encuentro el BMP280");
    while (true) delay(1000);
  }
  Serial.println("Sensores listos!");
}

void loop() {
  sensors_event_t humedad, temp;
  aht.getEvent(&humedad, &temp);             // AHT20: temperatura y humedad

  float presion = bmp.readPressure() / 100.0; // BMP280: Pa → hPa

  Serial.print("Temp: ");      Serial.print(temp.temperature);              Serial.print(" °C | ");
  Serial.print("Humedad: ");   Serial.print(humedad.relative_humidity);     Serial.print(" % | ");
  Serial.print("Presion: ");   Serial.print(presion);                       Serial.println(" hPa");
  delay(2000);
}
```

### 4.3 Resultado esperado y pruebas

```text
Temp: 22.45 °C | Humedad: 48.30 % | Presion: 1012.80 hPa
```

| Prueba | Qué debería pasar |
|---|---|
| Soplar suavemente sobre el AHT20 | La **humedad sube** rápido |
| Tocar el sensor con el dedo (unos segundos) | La **temperatura sube** unos grados |
| Comparar con el pronóstico del clima de tu ciudad | La **presión** debería estar cerca (en Santiago ~ 930–950 hPa por la altura; en la costa ~ 1010 hPa) |

✅ **Listo cuando:** los tres valores aparecen y reaccionan a las pruebas.

> 💡 La presión que mide el BMP280 es la presión **de tu ubicación** (depende de la altura). Los pronósticos suelen informar presión "a nivel del mar", por eso no coinciden exactamente. Lo importante es **cómo cambia con las horas**: si baja rápido, suele venir mal tiempo.

---

## Paso 5 — Luz (BH1750)

### 5.1 Cableado
Conecta el BH1750 **en paralelo** con el sensor anterior (mismos cables SDA/SCL).

> 🔌 Desenchufa el USB primero.

| BH1750 GY-302 | → | Va a… |
|---|:---:|---|
| `VCC` | → | `3V3` (misma regleta que el AHT20+BMP280) |
| `GND` | → | `GND` |
| `SCL` | → | `GPIO 22` (mismo punto que el AHT20+BMP280) |
| `SDA` | → | `GPIO 21` (mismo punto que el AHT20+BMP280) |
| `ADDR` | → | **No conectar** (dirección `0x23`) |

### 5.2 Escanear de nuevo
Sube otra vez el escáner del Paso 3. Ahora deberías ver **tres** direcciones: `0x23`, `0x38` y `0x77`/`0x76`. 🎉 Eso demuestra que varios sensores comparten 2 cables.

### 5.3 Librería
Instala: `BH1750` de *Christopher Laws*.

### 5.4 Programa (se suma al anterior)

```cpp
// Paso 5: AHT20 + BMP280 + BH1750
#include <Wire.h>
#include <Adafruit_AHTX0.h>
#include <Adafruit_BMP280.h>
#include <BH1750.h>

#define SDA_PIN 21
#define SCL_PIN 22

Adafruit_AHTX0 aht;
Adafruit_BMP280 bmp(&Wire);
BH1750 luxometro;

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);

  if (!aht.begin())                         { Serial.println("ERROR AHT20");   while (true) delay(1000); }
  if (!bmp.begin(0x77) && !bmp.begin(0x76)) { Serial.println("ERROR BMP280");  while (true) delay(1000); }
  if (!luxometro.begin())                   { Serial.println("ERROR BH1750");  while (true) delay(1000); }
  Serial.println("Todo listo!");
}

void loop() {
  sensors_event_t humedad, temp;
  aht.getEvent(&humedad, &temp);
  float presion = bmp.readPressure() / 100.0;
  float lux = luxometro.readLightLevel();

  Serial.printf("Temp: %.1f C | Hum: %.0f %% | Pres: %.1f hPa | Luz: %.0f lux\n",
                temp.temperature, humedad.relative_humidity, presion, lux);
  delay(2000);
}
```

### 5.5 Pruebas

| Situación | Lux aproximados |
|---|---|
| Tapas el sensor con la mano | 0–5 |
| Habitación de noche con luz artificial | 50–200 |
| Habitación de día | 200–1.000 |
| Ventana con luz natural | 1.000–10.000 |
| Linterna del celular a 10 cm | 1.000–20.000 |

✅ **Listo cuando:** al tapar y destapar el sensor el valor cambia mucho.

---

## Paso 6 — Mostrar todo en la pantalla OLED

### 6.1 Cableado
La pantalla también va al **mismo bus I2C** (4 cables más en paralelo).

> 🔌 Desenchufa el USB primero.

| OLED | → | Va a… |
|---|:---:|---|
| `VCC` | → | `3V3` |
| `GND` | → | `GND` |
| `SCL` | → | `GPIO 22` |
| `SDA` | → | `GPIO 21` |

Con el escáner deberías ver ahora **cuatro** dispositivos: `0x23`, `0x38`, `0x3C` y `0x77`/`0x76`.

### 6.2 Librerías
Instala (con *Install all*):
- `Adafruit SSD1306`
- `Adafruit GFX Library`

### 6.3 Programa final del Proyecto 1

```cpp
// Paso 6: Mini estación ambiental con pantalla OLED
#include <Wire.h>
#include <Adafruit_AHTX0.h>
#include <Adafruit_BMP280.h>
#include <BH1750.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// Pines I2C: DevKit 30P (Paso 7 usa otros pines en el ESP32-C3)
#define SDA_PIN 21
#define SCL_PIN 22

#define ANCHO 128
#define ALTO   64

Adafruit_SSD1306 pantalla(ANCHO, ALTO, &Wire, -1);
Adafruit_AHTX0   aht;
Adafruit_BMP280  bmp(&Wire);
BH1750           luxometro;

void errorFatal(const char* msg) {
  Serial.println(msg);
  while (true) delay(1000);
}

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);

  if (!pantalla.begin(SSD1306_SWITCHCAPVCC, 0x3C)) errorFatal("ERROR OLED");
  if (!aht.begin())                                errorFatal("ERROR AHT20");
  if (!bmp.begin(0x77) && !bmp.begin(0x76))        errorFatal("ERROR BMP280");
  if (!luxometro.begin())                          errorFatal("ERROR BH1750");

  pantalla.clearDisplay();
  pantalla.setTextColor(SSD1306_WHITE);
  pantalla.setTextSize(1);
  pantalla.setCursor(0, 0);
  pantalla.println("Estacion lista!");
  pantalla.display();
  delay(1000);
}

void loop() {
  sensors_event_t humedad, temp;
  aht.getEvent(&humedad, &temp);
  float presion = bmp.readPressure() / 100.0;
  float lux     = luxometro.readLightLevel();

  // Pantalla
  pantalla.clearDisplay();
  pantalla.setCursor(0, 0);
  pantalla.println("MI ESTACION AMBIENTAL");
  pantalla.println("---------------------");
  pantalla.printf("Temp : %.1f C\n",  temp.temperature);
  pantalla.printf("Hum  : %.0f %%\n", humedad.relative_humidity);
  pantalla.printf("Pres : %.1f hPa\n", presion);
  pantalla.printf("Luz  : %.0f lux\n", lux);
  pantalla.display();

  // Monitor Serie (para copiar datos al PC)
  Serial.printf("%.1f,%.0f,%.1f,%.0f\n",
                temp.temperature, humedad.relative_humidity, presion, lux);

  delay(2000);
}
```

✅ **Proyecto 1 terminado cuando:** la pantalla muestra las 4 mediciones actualizándose cada 2 segundos.

> 📊 **Extra:** Arduino IDE 2.x tiene el **Serial Plotter** (Herramientas → Serial Plotter) para ver gráficos en vivo. Funciona porque el programa escribe los valores separados por comas.

> 🧪 **Mini experimento (científico):** deja la estación 24 horas y anota la presión cada 3 horas en una planilla. Comprueba si cuando la presión **baja** más de 3–5 hPa en pocas horas aparece lluvia o viento. Es la base del proyecto de predicción de lluvia (IA-2).

---

## Paso 7 — Repetir en la placa mini (ESP32-C3 Super Mini)

La **ESP32-C3 Super Mini** es mucho más pequeña, ideal para nodos fijos (dormitorio, exterior). La idea es la misma, pero cambian **3 cosas**.

### 7.1 Diferencias con el DevKit

| Tema | DevKit 30P | ESP32-C3 Super Mini |
|---|---|---|
| Placa en Arduino IDE | `ESP32 Dev Module` | **`ESP32C3 Dev Module`** |
| Mensajes por USB | Funcionan solos | Activar **Herramientas → USB CDC On Boot → Enabled** (si no, el Monitor Serie queda en blanco) |
| Pines I2C | SDA = 21, SCL = 22 | **SDA = GPIO 4, SCL = GPIO 5** |
| LED integrado | GPIO 2 | GPIO 8 (se enciende con `LOW`, lógica invertida) |
| Modo programación | Botón `BOOT` | Mantén `BOOT`, pulsa `RESET`, suelta `BOOT` |

### 7.2 Cableado

| Sensor | → | ESP32-C3 Super Mini |
|---|:---:|---|
| `VCC` | → | `3V3` |
| `GND` | → | `GND` |
| `SDA` | → | `GPIO 4` |
| `SCL` | → | `GPIO 5` |

> ⚠️ En el C3, **evita GPIO 8 y 9** (se usan al arrancar) y **18/19** (USB).

### 7.3 Un solo programa para ambas placas
Cambia estas líneas del Paso 6 por este bloque, y el **mismo programa** sirve para las dos placas:

```cpp
// Pines I2C: elige automáticamente según la placa seleccionada
#if CONFIG_IDF_TARGET_ESP32C3
  #define SDA_PIN 4
  #define SCL_PIN 5
#else
  #define SDA_PIN 21
  #define SCL_PIN 22
#endif
```

### 7.4 Pasos
1. Desenchufa el DevKit. Mueve los cables del sensor a la placa C3.
2. Selecciona **Herramientas → Placa → `ESP32C3 Dev Module`** y activa **USB CDC On Boot**.
3. Elige el nuevo **Puerto**.
4. Sube el programa del Paso 6 con el bloque de pines modificado.

✅ **Listo cuando:** obtienes las mismas lecturas que en el DevKit. 🎉

---

## Problemas comunes y soluciones

| Síntoma | Causa probable | Solución |
|---|---|---|
| No aparece el puerto COM | Cable solo de carga / falta controlador | Otro cable de datos; instalar CP2102 o CH340 |
| `Failed to connect to ESP32` | La placa no entra en modo carga | Mantener `BOOT` mientras sube; probar otro puerto USB |
| Monitor Serie con símbolos raros | Velocidad equivocada | Seleccionar **115200 baud** |
| Monitor Serie vacío (C3) | Falta USB CDC | Activar *USB CDC On Boot* y volver a subir |
| El escáner no encuentra nada | SDA/SCL cruzados, mal contacto, pines sin soldar | Revisar cables, probar otro cable Dupont, revisar soldaduras |
| Encuentra `0x76` y el código falla | Dirección distinta | El código ya prueba ambas (`0x77` y `0x76`) |
| `ERROR BH1750` | Pin `ADDR` conectado o mal contacto | Dejar `ADDR` sin conectar |
| Humedad siempre `0` o `100` | Sensor húmedo o dañado | Esperar a que se seque; probar otro AHT20 |
| Temperatura 2–4 °C más alta de lo real | Calor de la placa o de la mano | Separar el sensor de la placa con cables más largos |
| Un sensor se calienta mucho | `VCC` mal conectado o invertido | **Desenchufar de inmediato** y revisar |
| La pantalla OLED queda en blanco | Dirección `0x3C` distinta (`0x3D`) o mal cableado | Verificar con el escáner |
| Error de compilación `No such file` | Falta una librería | Instalar la librería que nombra el error |

> 🔍 **Regla para depurar:** cuando algo falla, vuelve al **escáner I2C** (Paso 3). Si el escáner no ve el sensor, el problema es físico (cables). Si lo ve, el problema es el programa.

---

## Hoja de ruta: de simple a complejo

Cada proyecto reutiliza lo que ya aprendiste. Haz uno a la vez.

| # | Proyecto | Placa | Sensores nuevos | Qué aprendes | Dificultad |
|:---:|---|---|---|---|:---:|
| **1** | ✅ Mini estación ambiental (esta guía) | DevKit 30P | AHT20+BMP280, BH1750, OLED | I2C, librerías, pantalla | ⭐ |
| **2** | Lo mismo en miniatura | **ESP32-C3** | Los mismos | Cambiar de placa | ⭐ |
| **3** | **Estación Wi‑Fi:** ver datos desde el celular | DevKit 30P | — | Conectarse al Wi‑Fi y servir una página web | ⭐⭐ |
| **4** | **Detector de lluvia + alarma** | ESP32-C3 (exterior) | Sensor de gotas + buzzer | Entradas digitales/analógicas, alertas | ⭐⭐ |
| **5** | **Registro de datos en MicroSD** (datalogger) | DevKit 30P | Módulo MicroSD SPI | Guardar CSV, reloj por Internet (NTP) | ⭐⭐ |
| **6** | **Monitor de calidad de aire** | DevKit 30P | MQ-135 + ADS1115 | Sensores analógicos, calibración | ⭐⭐⭐ |
| **7** | **Red de 2–3 nodos con MQTT** | DevKit + 2× C3 | — | Comunicar placas entre sí | ⭐⭐⭐ |
| **8** | **Sismógrafo básico** | ESP32-S3 | ADXL345 (SPI) | Muestreo rápido, señal, STA/LTA | ⭐⭐⭐⭐ |
| **9** | **IA en el borde (TinyML)** | ESP32-S3 / XIAO | Los anteriores | Entrenar un modelo y correrlo en la placa | ⭐⭐⭐⭐⭐ |

Los proyectos **7** y **8** corresponden a los documentos `proyectos_GeofisicaAmbiental_v1.md` y `proyecto_IA_TinyML_v1.md`. Los proyectos **1 a 6** son la escalera para llegar ahí sin frustrarte.

### Recomendación de próximo paso
Al terminar el Proyecto 1, el siguiente natural es el **3 (Wi‑Fi y celular)**, que no requiere ningún componente nuevo, y luego el **4 (lluvia)**, que usa el sensor de gotas ya comprado.

---

## Intercambios de hardware respecto a los proyectos anteriores

En los documentos previos algunos componentes tenían un destino fijo. Para aprender se **reasignan temporalmente**, sin comprar nada:

| Componente | Destino original | Uso en esta guía | Impacto |
|---|---|---|---|
| **ESP32 DevKit 30P** | Nodo remoto sísmico | Placa principal de aprendizaje | Ninguno: se puede reasignar cuando llegue el momento |
| **ESP32-C3 Super Mini** (1 de 2) | Dormitorio | Paso 7 y proyecto 4 (exterior) | Ninguno |
| **AHT20+BMP280** (1 de 3) | Hub | Proyecto 1 | El Hub usará otro de los 3 |
| **BH1750** (1 de 2) | Hub | Proyecto 1 | Queda 1 libre para el exterior |
| **OLED** (1 de 2) | Hub | Proyecto 1 | Queda 1 libre |
| **ESP32-S3 N16R8** | Hub central | Sin tocar hasta el proyecto 8 | — |

> 📌 Nada se pierde ni se daña: al terminar un proyecto desenchufas, guardas los módulos en el maletín y los reusas.

### Compras pendientes que todavía **no** son necesarias
- **TFT ST7789** y las **2 MicroSD adicionales** solo hacen falta desde el proyecto 5 en adelante.

---

> **v1.0** — Primer proyecto para principiantes. Siguientes documentos sugeridos: `Proyecto_02_ESP32C3.md` (opcional) y `Proyecto_03_WiFi_Web.md`.
