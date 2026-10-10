# 🌋🏠 Proyectos ESP32 — Estación Geofísica + Monitor Ambiental
> **v1.0** — Dos proyectos integrados con hardware compartido. Construidos desde cero con ESP32.

---

## Tabla de Contenidos
1. [Estación Geofísica](#1-estación-geofísica)
2. [Monitor Ambiental Multi-Zona](#2-monitor-ambiental-multi-zona)
3. [Hardware Consolidado](#3-hardware-consolidado-para-ambos-proyectos)
4. [Fases de Implementación](#4-fases-de-implementación)
5. [Comparación con Equipos Comerciales](#5-comparación-con-equipos-comerciales)

---

## 1. 🌋 Estación Geofísica

### Objetivo
Medir y registrar fenómenos geofísicos reales: sismos, inclinación del terreno, presión atmosférica, temperatura, luz e imágenes horarias del cielo. Comparar los registros propios con los datos oficiales del [Centro Sismológico Nacional (CSN)](https://www.csn.uchile.cl).

> 💡 El proyecto comercial equivalente más cercano es el **Raspberry Shake 1D** (US$300). Esta estación cuesta ~$50 USD en componentes.

### Arquitectura del Sistema

```text
┌─────────────────────────────────────────────────────────┐
│              ESTACIÓN GEOFÍSICA — 2 NODOS               │
├────────────────────────┬────────────────────────────────┤
│  NODO CENTRAL          │  NODO REMOTO                   │
│  ESP32-S3 N16R8        │  ESP32 DevKit 30P              │
│  ─────────────────     │  ──────────────────            │
│  ADXL345  (sísmico)    │  ADXL345  (sísmico)            │
│  MPU6050  (inclin.)    │  MPU6050  (inclin.)            │
│  BME280   (presión)    │  BME280   (presión)            │
│  BH1750   (luz)        │  BH1750   (luz)                │
│  DS18B20  (suelo)      │                                │
│  OLED SSD1306          │  OLED SSD1306                  │
│  TFT ST7789 (FFT)      │                                │
│  MicroSD + SD 8GB      │  MicroSD + SD 8GB              │
│  ADS1115               │                                │
│  WiFi Server + MQTT    │  WiFi Cliente + MQTT           │
├────────────────────────┴────────────────────────────────┤
│  XIAO ESP32-S3 Sense (Nivel 3 — opcional)               │
│  Foto JPG horaria del cielo + metadata ambiental        │
└─────────────────────────────────────────────────────────┘
```

### Sensores — Detalle Técnico

| Sensor | Bus | Dirección | Mide | Rol en el Proyecto |
|---|---|---|---|---|
| **ADXL345 GY-291** | SPI | — | Aceleración 3 ejes ±16g, 3.2 kHz ODR | Captura ondas sísmicas P y S |
| **MPU6050 GY-521** | I2C | 0x68 | Aceleración + Giroscopio | Inclinación lenta del terreno (mm/día) |
| **BME280** | I2C | 0x76 | Presión ±1 hPa, Temp, Humedad | Correlación atmosférica con sismicidad |
| **BH1750** | I2C | 0x23 | Iluminancia 0–65535 lux | Ciclo día/noche en el registro |
| **DS18B20** | 1-Wire | — | Temperatura −55°C a +125°C | Temperatura del suelo a 10 cm |
| **ADS1115** | I2C | 0x48 | ADC 16-bit, 4 canales, PGA | Sensores analógicos de precisión |

### Datos que Genera la Estación

```text
Archivo CSV continuo en MicroSD:
  timestamp, ax, ay, az, presion_hPa, temp_C, humedad_%, lux, temp_suelo_C

Servidor web local (acceso desde celular en la misma red WiFi):
  ├── Gráfico en tiempo real: a(t) triaxial
  ├── Espectrograma FFT waterfall (TFT ST7789)
  ├── Últimas 24h de presión y temperatura
  └── Log de eventos detectados

MQTT (broker en PC o Raspberry Pi):
  topic: geofisica/nodo1/accel → {ax, ay, az, timestamp}
  topic: geofisica/nodo1/ambiente → {presion, temp, humedad, lux}
  topic: geofisica/eventos → {tipo, magnitud_estimada, duracion}
```

### Algoritmo de Detección Sísmica — STA/LTA

El algoritmo estándar en sismología profesional compara el promedio de corto plazo con el de largo plazo de la señal:

$$R(t) = \frac{\text{STA}(t)}{\text{LTA}(t)} = \frac{\frac{1}{n_s}\sum_{i=t-n_s}^{t} a_i^2}{\frac{1}{n_l}\sum_{i=t-n_l}^{t} a_i^2}$$

Cuando $R(t) > \text{umbral}$ (típicamente 3–4), se declara un evento sísmico. El ESP32-S3 ejecuta esto en tiempo real a 800 Hz.

### FFT y Análisis Espectral

El ESP32-S3 N16R8 ejecuta FFT de 1024 puntos usando instrucciones DSP vectoriales del Xtensa LX7:

$$X(f) = \sum_{n=0}^{N-1} a(n) \cdot e^{-j2\pi fn/N}$$

Rango de análisis: **0.5 Hz a 400 Hz**
- Ondas sísmicas de largo período: 0.5–2 Hz
- Ruido ambiental urbano: 1–10 Hz
- Vibraciones de tráfico: 10–30 Hz
- Resonancias de estructuras: 5–15 Hz

### Experimentos Posibles

1. **Registrar un sismo real** y comparar timestamp y amplitud con el boletín del CSN Chile
2. **Medir diferencia de llegada** de ondas P entre Nodo 1 y Nodo 2 → estimar distancia al epicentro
3. **Correlacionar caída de presión** (BME280) con sismicidad superficial en el tiempo
4. **Comparar espectro de día vs noche** → efecto del ruido urbano (tráfico) en la estación
5. **Detectar microtemblores** continuos de fondo (ruido sísmico ambiental)
6. **Medir variación de inclinación** del suelo con MPU6050 durante semanas

### Conexiones Principales (Nodo Central)

```text
ESP32-S3 N16R8
├── ADXL345   : SPI → GPIO10(MOSI), GPIO9(MISO), GPIO8(SCK), GPIO7(CS)
├── MPU6050   : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x68
├── BME280    : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x76
├── BH1750    : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x23
├── DS18B20   : 1-Wire → GPIO4 + resistencia 4.7 kΩ a 3.3V
├── OLED      : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x3C
├── TFT ST7789: SPI → GPIO11(MOSI), GPIO13(SCK), GPIO12(CS), GPIO14(DC), GPIO15(RST)
├── MicroSD   : SPI → GPIO11(MOSI), GPIO9(MISO), GPIO13(SCK), GPIO6(CS)
└── ADS1115   : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x48

Nota: ADXL345 y MicroSD comparten bus SPI con distinto CS.
      Todos los sensores I2C comparten el mismo par SDA/SCL (8 dispositivos posibles).
```

---

## 2. 🏠 Monitor Ambiental Multi-Zona

### Objetivo
Monitorear temperatura, humedad, calidad del aire (CO₂), luz y movimiento en 3 zonas de una vivienda. Generar alertas automáticas por Telegram, visualizar un dashboard en tiempo real desde el celular y registrar histórico para detectar patrones.

> 💡 Equivalente comercial: **Netatmo Smart Home Weather Station** (US$180) + sensores adicionales. Este proyecto cuesta ~$40 USD en componentes por los 3 nodos.

### Arquitectura del Sistema

```text
┌──────────────────────────────────────────────────────────────┐
│                  MONITOR AMBIENTAL — 4 DISPOSITIVOS          │
├───────────────┬──────────────┬──────────────┬────────────────┤
│  HUB CENTRAL  │  NODO 1      │  NODO 2      │  NODO 3        │
│  ESP32-S3     │  Salón       │  Dormitorio  │  Exterior      │
│  N16R8        │  ESP32 DevKit│  ESP32-C3    │  ESP32-C3      │
├───────────────┼──────────────┼──────────────┼────────────────┤
│  TFT ST7789   │  AHT20+BMP280│  AHT20+BMP280│  AHT20+BMP280  │
│  (dashboard   │  MQ-135 CO₂  │  BH1750      │  BH1750        │
│   resumen)    │  BH1750      │  PIR         │  Sensor lluvia │
│  OLED         │  PIR         │  MicroSD     │  MicroSD       │
│  MicroSD      │  OLED        │              │                │
│  Buzzer + Mic │  MicroSD     │              │                │
│  Broker MQTT  │              │              │                │
│  Web Server   │              │              │                │
└───────────────┴──────────────┴──────────────┴────────────────┘
         │              │              │              │
         └──────────────┴──────────────┴──────────────┘
                              WiFi 2.4 GHz
                         Protocolo MQTT QoS 1
```

### Sensores por Nodo — Detalle

#### Hub Central (ESP32-S3 N16R8)
- Rol: broker MQTT + servidor web + display resumen + inferencia TinyML
- TFT ST7789 / OLED: muestra resumen de los nodos y espectrograma
- MicroSD: log histórico largo plazo de todos los nodos
- Micrófono INMP441 + Buzzer pasivo: control por voz offline y alarma acústica

#### Nodo 1 — Salón
| Sensor | Mide | Umbral de alerta |
|---|---|---|
| **AHT20 + BMP280** | Temperatura + Humedad + Presión (I2C) | Humedad > 70% → riesgo moho |
| **MQ-135** | CO₂ + VOC (calidad aire vía ADS1115) | CO₂ > 1000 ppm → ventila |
| **BH1750** | Lux (iluminancia I2C) | < 300 lux en horario laboral |
| **PIR HC-SR501** | Presencia/movimiento | Sin movimiento > 4h → alerta |
| **OLED 0.96"** | Display local I2C | Lecturas instantáneas del salón |

#### Nodo 2 — Dormitorio
| Sensor | Mide | Uso |
|---|---|---|
| **AHT20 + BMP280** | Temperatura + Humedad (I2C) | Calidad del sueño: 18–22°C ideal |
| **BH1750** | Luz nocturna | Detecta luz artificial después de medianoche |
| **PIR HC-SR501** | Presencia | ¿Hay alguien durmiendo? |

#### Nodo 3 — Exterior
| Sensor | Mide | Uso |
|---|---|---|
| **AHT20 + BMP280** | Presión + Temp + Humedad (I2C) | Predicción de lluvia (caída barométrica) |
| **BH1750** | Radiación solar (lux) | Cuánto sol hay en el día |
| **Sensor lluvia** | Precipitación (gotas) | Alerta inmediata para cerrar ventanas |

### Lógica de Alertas

```python
# Reglas configurables (pseudocódigo)
if CO2_salon > 1000:        → Telegram/Buzzer: "Ventila el salón (CO2 alto)"
if humedad_dormi > 70:      → Telegram: "Riesgo de moho en dormitorio"
if temp_exterior < 5:       → Telegram: "Helada probable esta noche"
if delta_presion_3h < -5:   → Telegram: "Lluvia en camino (presión cayendo)"
if lluvia_detectada:        → Telegram/Buzzer: "¡Está lloviendo! ¿Ventanas abiertas?"
if sin_movimiento_salon > 4h: → Telegram: "Sin actividad detectada en salón"
if lux_dormi > 50 and hora > 23: → Telegram: "Hay luz encendida en dormitorio"
```

### Datos que Genera el Sistema

```text
Por nodo cada 30 segundos → MQTT → Hub Central:
  geofisica/salon/ambiente  → {temp, hum, co2, lux, pir, ts}
  geofisica/dormi/ambiente  → {temp, hum, lux, pir, ts}
  geofisica/ext/ambiente    → {presion, temp, hum, lux, lluvia, ts}

Dashboard web (acceso desde celular):
  ├── Tabla en tiempo real: todos los nodos
  ├── Gráfico histórico 7 días por variable
  ├── Mapa de calor: hora del día vs temperatura
  ├── Indicadores de calidad de aire (semáforo)
  └── Histórico de alertas generadas

MicroSD Hub (descargable por WiFi):
  ambiente_log_YYYYMMDD.csv
```

### Conexiones Nodo 1 — Salón (ejemplo)

```text
ESP32 DevKit 30P
├── AHT20+BMP280: I2C → GPIO21(SDA), GPIO22(SCL) — addrs 0x38 (AHT20) / 0x77 (BMP280)
├── MQ-135      : Salida analógica → Canal A0 del ADS1115 (16-bit)
├── ADS1115     : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x48
├── BH1750      : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x23
├── OLED 0.96"  : I2C → GPIO21(SDA), GPIO22(SCL) — addr 0x3C
├── PIR HC-SR501: GPIO14 (digital, HIGH = movimiento)
└── Buzzer      : GPIO25 (PWM para alerta local)

Nota: Todos los módulos I2C comparten la misma línea SDA/SCL con diferentes direcciones.
      MQ-135 requiere calentamiento previo de 24-48h antes de calibrar.
```

---

## 3. 📦 Hardware Consolidado Real (100% Comprado)

> **Estado Oficial:** Todos los componentes ya fueron adquiridos y pagados en **Mercado Libre ($130.039)**, **MechatronicStore ($70.760)** y **AFEL ($92.970)**. Inversión total consolidada: **$293.769 CLP**.

### Microcontroladores

| ID | Componente | Cant. | Usado en | Tienda | Estado | Notas |
|---|---|:---:|---|:---:|:---:|---|
| M1 | ESP32-S3 N16R8 (44 pines, USB-C) | 1 | 🌋🏠 Hub central ambos | ML | ✅ Comprado | 8 MB PSRAM — cerebro principal sismos, web, IA y audio ($13.434) |
| M2 | ESP32 DevKit 30P USB-C (Vshop) | 1 | 🌋 Nodo 2 / 🏠 Salón | ML | ✅ Comprado | Plataforma estándar ($7.160) |
| M3 | ESP32-C3 Super Mini USB-C | 2 | 🏠 Dormitorio / Exterior | ML | ✅ Comprado | Pack de 2 placas ($11.634) |
| M4 | Seeed Studio XIAO ESP32-S3 Sense | 1 | 🌋 Cámara cielo / IA visión | Mechatronic | ✅ Comprado | Cámara OV2640, micrófono PDM y ranura SD integrados ($22.990) |

### Sensores Sísmicos (Geofísica)

| ID | Componente | Cant. | Nivel | Tienda | Estado | Notas |
|---|---|:---:|:---:|:---:|:---:|---|
| S1 | ADXL345 GY-291 (3 ejes) | 2 | 1 | Mechatronic | ✅ Comprado | Uno por nodo sísmico — bus SPI alta velocidad ($6.980 total) |
| S2 | MPU6050 GY-521 (IMU 6 ejes) | 1 | 1 | AFEL | ✅ Comprado | Inclinómetro de terreno ($4.000) |
| S3 | DS18B20 Waterproof 1 metro | 1 | 3 | AFEL | ✅ Comprado | Temperatura de suelo a 10 cm ($2.500) |

### Sensores Ambientales y Detección (compartidos)

| ID | Componente | Cant. | Usado en | Tienda | Estado | Notas |
|---|---|:---:|---|:---:|:---:|---|
| A1 | AHT20 + BMP280 (I2C) | 3 | 🌋 × 2 nodos / 🏠 × 1 nodo | AFEL | ✅ Comprado | *Nota: Compradas 3 uds (sugerido inicial 4; cubre Hub, Remoto y Salón o Exterior)* ($9.000) |
| A3 | BH1750 Gy-302 (Luz lux) | 2 | 🌋 Hub / 🏠 Exterior | Mechatronic | ✅ Comprado | *Nota: Compradas 2 uds (sugerido inicial 3; suficiente para Hub y Exterior)* ($7.980) |
| A4 | MQ-135 (Calidad aire/CO₂) | 2 | 🏠 Salón + Dormitorio | AFEL | ✅ Comprado | Requiere calentamiento previo de 24-48h ($6.800) |
| A5 | PIR HC-SR501 | 2 | 🏠 Salón + Dormitorio | AFEL | ✅ Comprado | Detección de presencia infrarroja ($4.600) |
| A6 | Sensor de Gotas de Lluvia | 1 | 🏠 Nodo exterior | Mechatronic | ✅ Comprado | Detección inmediata de precipitación ($1.500) |
| A7 | VL53L0X ToF Láser | 1 | 🏠 Nivel / Distancia | Mechatronic | ✅ Comprado | Medición de distancia por tiempo de vuelo láser ($6.490) |
| A8 | Radar Microondas RCWL-0516 | 1 | 🏠 Presencia invisible / Robot | Mechatronic | ✅ Comprado | Doppler 360° que atraviesa plástico/madera ($2.290) |
| A9 | Infrarrojo HW-201 | 1 | 🤖 Robot obstáculos | Mechatronic | ✅ Comprado | Detección de proximidad cercana ($1.490) |
| A10 | Sensor Ultrasónico HC-SR04 | 1 | 🤖 Robot distancia / Nivel | AFEL | ✅ Comprado | Medición de distancia por eco ultrasónico ($1.500) |

### Adquisición, Almacenamiento, Audio y Display

| ID | Componente | Cant. | Nivel | Tienda | Estado | Notas |
|---|---|:---:|:---:|:---:|:---:|---|
| D1 | ADS1115 ADC 16-bit | 1 | 2 | AFEL | ✅ Comprado | Conversor analógico-digital 16-bit para MQ-135 ($5.000) |
| D2 | Módulo MicroSD SPI | 2 | 1 | AFEL | ✅ Comprado | *Nota: Compradas 2 uds (sugerido inicial 3; cubre Hub S3 y DevKit; XIAO ya trae ranura)* ($5.000) |
| D3 | MicroSD Maxell 16GB Clase 10 | 1 | 1 | ML | ✅ Comprado | *Nota: Comprada 1 ud inicial (sugerido inicial 3-4; lista para arrancar datasets)* ($7.990) |
| I7 | Micrófono I2S INMP441 | 1 | 2 | AFEL | ✅ Comprado | Entrada de voz nítida para el ESP32-S3 / DeepSeek ($5.990) |
| AU1 | Amplificador I2S MAX98357A 3W | 1 | 2 | ML | ✅ Comprado | Salida de audio digital I2S para voz humana del robot / alertas ($5.890) |
| AU2 | Mini Parlante 3W 4Ω | 1 | 2 | AFEL | ✅ Comprado | Altavoz de alta fidelidad para voz sintetizada ($3.000) |
| V1 | OLED SSD1306 0.96" I2C | 2 | 2 | AFEL | ✅ Comprado | 1 para Hub Sísmico + 1 para Salón / Cara de Mascota Robot ($9.000) |

### Conectividad, Cables y Organización

| ID | Componente | Cant. | Nivel | Tienda | Estado | Notas |
|---|---|:---:|:---:|:---:|:---:|---|
| U1 | Xiaomi Cable USB-C Datos 1m | 1 | 1 | ML | ✅ Comprado | *Nota: Comprado 1 cable datos de alta velocidad Xiaomi (sugerido 2-3)* ($6.990) |
| ORG1 | Maletín Organizador Plástico | 1 | 1 | ML | ✅ Comprado | Caja con compartimientos para resguardo ordenado ($5.661) |
| C1 | Cables Dupont (Packs x60) | 2 packs | 1 | AFEL | ✅ Comprado | *✅ Comprados 2 packs de 60 (120 cables M-M, H-H, M-H)* ($5.000) |
| C4 | Protoboard 830 puntos GL-12 | 2 | 1 | Mechatronic | ✅ Comprado | *Nota: Compradas 2 uds (sugerido inicial 3; suficiente para desarrollo)* ($7.580) |
| K3 | Mini Protoboard 400 puntos | 1 | 2 | AFEL | ✅ Comprado | Ideal para nodos compactos ESP32-C3 ($1.500) |

### Componentes Pasivos y Actuadores

| ID | Componente | Cant. | Nivel | Tienda | Estado | Notas |
|---|---|:---:|:---:|:---:|:---:|---|
| P0 | Kit Componentes Básicos AFEL | 1 kit | 1 | AFEL | ✅ Comprado | 600 resist., 340 cerámicos, 120 electrolíticos, LEDs, transistores ($17.000) |
| P4 | Push Button 4 pines (Packs x5) | 2 packs | 2 | AFEL | ✅ Comprado | 10 pulsadores para reset y configuración ($1.000) |
| P5 | Potenciómetro WH148 B10K 10kΩ | 3 | 2 | AFEL | ✅ Comprado | *✅ Compradas 3 uds (sugerido inicial 2; calibración en vivo)* ($1.500) |
| B1 | Buzzer Pasivo Solo | 2 | 1 | AFEL | ✅ Comprado | Alarmas acústicas y beeps locales ($600) |
| M5 | Micro Servomotor SG90 9g | 2 | 2 | AFEL | ✅ Comprado | Movimiento para patas de robot o indicador analógico de aguja ($3.980) |

### Herramientas y Consumibles de Laboratorio

| ID | Herramienta | Nivel | Tienda | Estado | Notas |
|---|---|:---:|:---:|:---:|---|
| H1 | Cautín LEFAVOR Digital 80W Rojo + kit 6 | 1 | ML | ✅ Comprado | Regulable digital con pantalla, soporte y puntas ($22.912) |
| H4 | Multímetro Digital AstroAI 6000 Cuentas | 1 | ML | ✅ Comprado | Auto-rango profesional para voltaje, continuidad, capacitancia ($29.611) |
| H9 | Lupa Brazo Soporte Pinzas Luz LED (Tercera Mano) | 1 | ML | ✅ Comprado | Soporte articulado para soldadura de sensores ($13.890) |
| H5 | Pinzas de Precisión HARDEN ×4 | 1 | Mechatronic | ✅ Comprado | Antimagnéticas para sujeción SMD ($3.490) |
| H7 | Alicate Cortador al Ras | 1 | AFEL | ✅ Comprado | Corte limpio de pines y cables ($2.000) |
| H3 | Pasta para soldar ZD-170 (100 gr) | 1 | Mechatronic | ✅ Comprado | Flux para soldadura limpia ($4.990) |
| H10 | Malla Desoldadora 2mm 1.5m | 2 | Mechatronic | ✅ Comprado | Extracción limpia de estaño ($2.190) |
| K1 | Alcohol Isopropílico 300cc spray | 1 | Mechatronic | ✅ Comprado | Limpieza de PCBs ($3.290) |
| K2 | 4x Placas PCB Soldables Doble Cara | 2 | ML | ✅ Comprado | Montaje definitivo de circuitos ($4.867) |

---

### 💳 Resumen Financiero Consolidado

| Tienda | Monto Real Pagado | Envíos / Descuentos | Estado |
|---|:---:|---|:---:|
| **Mercado Libre** | **$130.039 CLP** | Envíos gratis Full en ambos paquetes | 100% Pagado (4 paquetes entregados, 2 en camino) |
| **MechatronicStore** | **$70.760 CLP** | Envío gratis Bluexpress (-$500 MechaCoins) | 100% Pagado (Pedido #717057 en proceso) |
| **AFEL** | **$92.970 CLP** | Incluye $4.000 de costo de envío | 100% Pagado (Pedido Confirmado) |
| **TOTAL GENERAL** | **$293.769 CLP** | **Laboratorio 100% Completo** | **Cero compras pendientes** |

---

## 4. 🗓️ Fases de Implementación

```text
FASE 1 — Semana 1-2: Setup y tests básicos
  ├── Instalar Arduino IDE + soporte ESP32 (boards manager)
  ├── Scanner I2C: verificar que todos los sensores responden
  ├── Test ADXL345: graficar ax/ay/az en Serial Plotter al agitar
  ├── Test DHT22 + BME280: leer temperatura y humedad en Serial Monitor
  └── Test BH1750: comparar lux al tapar y destapar el sensor

FASE 2 — Semana 3-4: Nodo central funcionando
  ├── ADXL345 a 800 Hz con buffer circular en PSRAM del ESP32-S3
  ├── FFT básica: mostrar espectro en OLED (barras)
  ├── Log CSV a MicroSD: timestamp + todos los sensores
  ├── Servidor web simple: ver datos desde celular en red local
  └── Test MQ-135: calibrar al aire libre después de 48h de calentamiento

FASE 3 — Semana 5-6: Red WiFi y MQTT
  ├── Instalar Mosquitto broker en PC (Windows) o Raspberry Pi
  ├── Cada ESP32 publica datos por MQTT cada 30 segundos
  ├── Hub central (ESP32-S3) se suscribe a todos los topics
  ├── TFT ST7789: dashboard con los 3 nodos ambientales
  └── TFT: espectrograma waterfall sísmico en tiempo real

FASE 4 — Semana 7-8: Alertas y detección de eventos
  ├── Algoritmo STA/LTA implementado en ESP32-S3
  ├── Alertas Telegram para eventos sísmicos > umbral
  ├── Alertas ambientales: CO₂, humedad, lluvia, temp
  ├── Descarga remota del CSV vía WiFi (servidor de archivos)
  └── Primer registro de sismo real comparado con CSN

FASE 5 — Semana 9+: Optimización y expansión
  ├── Calibración cruzada de sensores (comparar entre nodos)
  ├── Dashboard web con Chart.js para gráficos históricos
  ├── Agregar XIAO ESP32-S3 Sense: foto horaria del cielo
  ├── Análisis estadístico de datos acumulados (Python/Jupyter)
  └── Contribuir datos a sensor.community o raspberryshake.org
```

---

## 5. 📊 Comparación con Equipos Comerciales

| Función | Equipo Comercial | Precio | Este Proyecto | Precio |
|---|---|:---:|---|:---:|
| Sismógrafo 1 eje | Raspberry Shake 1D | US\$300 | ESP32-S3 + ADXL345 | ~\$15.000 CLP |
| Sismógrafo 3 ejes | Raspberry Shake 3D | US\$650 | ESP32-S3 + ADXL345 | ~\$15.000 CLP |
| Estación meteo interior | Netatmo Smart | US\$110 | Nodo DHT22+MQ135 | ~\$12.000 CLP |
| Estación meteo exterior | Netatmo Outdoor | US\$70 | Nodo BME280+BH1750 | ~\$8.000 CLP |
| Monitor CO₂ | Aranet4 | US\$250 | MQ-135 + ADS1115 | ~\$4.500 CLP |
| Sistema completo 3 nodos | Airthings Wave | US\$500+ | 3 nodos ambientales | ~\$45.000 CLP |

### Comunidades de Datos Abiertos

- 🌐 **[sensor.community](https://sensor.community)** — Red global de monitores ambientales open source
- 🌐 **[raspberryshake.org/stationview](https://raspberryshake.org/stationview)** — Mapa mundial de sismógrafos ciudadanos
- 🌐 **[CSN Chile](https://www.csn.uchile.cl/sismicidad/catalogo-sismico/)** — Catálogo sísmico para comparar tus registros
- 🌐 **[IRIS Earthquake Browser](https://ds.iris.edu/ieb/)** — Base de datos mundial de sismos

### Posibilidades de Expansión Futura

| Expansión | Costo extra | Beneficio |
|---|---|---|
| **GPS NEO-6M** | ~\$5.000 | Sincronización de tiempo precisa para triangulación |
| **LoRa SX1278** | ~\$8.000 | Nodos hasta 10 km sin WiFi |
| **Panel solar 6V + TP4056** | ~\$8.000 | Nodo exterior completamente autónomo |
| **AMG8833 Termocámara** | ~\$25.000 | Mapa de calor térmico 8×8 px de habitaciones |
| **Cámara termográfica MLX90640** | ~\$45.000 | Mapa de calor 32×24 px de alta resolución |

---

> **v1.0** — Documento inicial. Cubre Estación Geofísica (2 nodos sísmicos + sensores ambientales) y Monitor Ambiental Multi-Zona (3 nodos WiFi MQTT). Hardware consolidado para construcción paralela de ambos proyectos. Sin herramientas previas asumidas.
