# Lista de compra --- Laboratorios ESP32, adquisición científica y vibraciones

## Objetivo

Lista consolidada para construir un ecosistema de instrumentación
científica basado en ESP32, reutilizable en adquisición de sensores,
registro y análisis de señales, vibraciones, resonancia, visión
artificial e integración con Python/Jupyter.

La matriz está preparada para registrar precios normales y luego
sustituirlos por precios Cyber.

## 1. Arquitecturas

### ESP32-S3 tradicional

**ESP32-S3 N16R8, 44 pines, USB-C**

Plataforma principal para adquisición científica, sensores,
procesamiento local, I²C/SPI/UART y comunicación con Python.

### ESP32-S3 con cámara

**Seeed Studio XIAO ESP32-S3 Sense**

Extensión para cámara, visión artificial, seguimiento de marcadores y
obtención de posición `x(t)`. Se mantiene como opción adicional y no
reemplaza al ESP32-S3 tradicional.

## 2. Matriz principal de proveedores

> Eje X = proveedores. Eje Y = productos. `—` = no encontrado/no
> disponible. `Cyber` = completar durante Cyber.

  ----------------------------------------------------------------------------------------------
  Producto              SMDByte        MCI   MechatronicStore       AFEL   Victronics      Cyber
  ------------------ ---------- ---------- ------------------ ---------- ------------ ----------
  ESP32-S3 N16R8 44P   \$10.990   \$12.990                ---        ---          --- 
  USB-C                    ref.       ref.                                            

  XIAO ESP32-S3             ---   \$19.990      \$22.990 ref.        ---          --- 
  Sense cámara                     agotado                                            
                                      ref.                                            

  ESP32 DevKit 30P      \$6.990    \$8.990                ---        ---          --- 

  ESP32-C3 Super        \$4.990        ---    \$7.990 / Cyber        ---          --- 
  Mini                                           ref. \$6.290                         

  OLED SSD1306 0.96"    \$4.990    \$5.490            \$5.490        ---          --- 
  I²C                                                                                 

  MPU6050                   ---    \$5.990            \$4.490    \$4.000      \$2.870 

  Módulo microSD SPI    \$1.490        ---                ---        ---          --- 

  LM358                   \$990        ---                ---        ---          --- 

  LM2596                \$2.490        ---    \$1.990 / Cyber        ---          --- 
                                                 ref. \$1.290                         

  TP4056                \$1.490        ---                ---        ---          --- 

  Kit resistencias      \$5.490        ---            \$5.990        ---          --- 
  ×600                                                                                

  Kit capacitores       \$2.490        ---                ---        ---          --- 
  cerámicos ×100                                                                      

  Dupont 60 / cables    \$6.990    \$2.990            \$3.490        ---          --- 

  Protoboard 830            ---        ---    \$3.790 / Cyber        ---          --- 
  puntos                                         ref. \$2.990                         

  Pack placas           \$1.990        ---                ---        ---          --- 
  perforadas ×4                                                                       

  Pulsadores              \$590        ---                ---        ---          --- 
  táctiles                                                                            

  Analizador lógico         ---        ---                ---        ---          --- 
  USB 8 canales                                                                       

  Multímetro digital        ---        ---            \$9.490        ---          --- 

  Estación de               ---        ---       \$14.990 kit        ---          --- 
  soldadura                                                                           
  regulable                                                                           

  Estaño 60/40              ---        ---    \$2.890 / Cyber        ---          --- 
  0.5--0.8 mm                                    ref. \$2.290                         

  Flux                      ---        ---                ---        ---          --- 

  Pinzas de                 ---        ---                ---        ---          --- 
  precisión                                                                           

  Cortador al ras           ---        ---                ---        ---          --- 

  Pelacables                ---        ---                ---        ---          --- 

  Bomba desoldadora         ---        ---                ---        ---          --- 

  Malla desoldadora         ---        ---    \$2.190 / Cyber        ---          --- 
                                                 ref. \$1.690                         

  Lupa / lámpara de         ---        ---                ---        ---          --- 
  aumento                                                                             

  Tercera mano /            ---        ---                ---        ---          --- 
  soporte PCB                                                                         

  Juego de                  ---        ---                ---        ---          --- 
  destornilladores                                                                    
  precisión                                                                           

  Alicates de               ---        ---                ---        ---          --- 
  precisión                                                                           

  Organizador de            ---        ---                ---        ---          --- 
  componentes                                                                         
  ----------------------------------------------------------------------------------------------

## 3. Herramientas necesarias

-   Multímetro digital.
-   Estación de soldadura regulable con punta fina.
-   Estaño 60/40 de 0.5--0.8 mm.
-   Flux.
-   Pinzas de precisión.
-   Cortador al ras.
-   Pelacables.
-   Bomba desoldadora.
-   Malla desoldadora.
-   Lámpara/lupa de aumento.
-   Tercera mano o soporte PCB.
-   Juego de destornilladores de precisión.
-   Alicates de precisión.
-   Organizador de componentes.
-   **Analizador lógico USB de 8 canales, idealmente 24 MHz o
    superior.**

### Referencias de precios encontradas

-   MechatronicStore MAS-830L: \$9.490.
-   MechatronicStore kit de soldadura: \$14.990.
-   Estaño 60/40 16 g: \$2.890; referencia Cyber \$2.290.
-   Malla desoldadora: \$2.190; referencia Cyber \$1.690.

## 4. Analizador lógico USB

Se recomienda incluirlo desde el inicio.

Usos:

-   I²C;
-   SPI;
-   UART;
-   señales digitales;
-   frecuencia y temporización;
-   diagnóstico de comunicación entre ESP32 y sensores.

Ejemplo:

``` text
ESP32 ── I²C ── OLED
      └─ I²C ── MPU6050
```

**Prioridad: alta.**

Un osciloscopio puede quedar para una segunda etapa.

## 5. Sensores y módulos

### MPU6050

Sensor principal para el laboratorio de vibraciones:

-   aceleración X/Y/Z;
-   velocidad angular;
-   series temporales;
-   filtrado digital;
-   FFT;
-   frecuencia dominante;
-   análisis de resonancia.

**Prioridad: alta.**

### OLED SSD1306

Pantalla I²C para mostrar aceleración, frecuencia dominante, estado del
experimento y valores de sensores.

### MicroSD SPI

Para almacenar series temporales y analizarlas posteriormente en Python.

## 6. Cámara y visión

``` text
Objeto vibrante
      ↓
Cámara
      ↓
Seguimiento de marcador
      ↓
x(t)
      ↓
Python
      ↓
posición / velocidad / aceleración
      ↓
comparación con MPU6050
```

Esto permite comparar medición óptica e inercial del mismo fenómeno
físico.

## 7. Laboratorio de adquisición científica

``` text
Sensor
  ↓
ESP32
  ↓
procesamiento
  ↓
OLED
  ↓
microSD / Wi-Fi / USB
  ↓
Python
  ↓
análisis
  ↓
visualización
```

## 8. Laboratorio de vibraciones / mini sismógrafo

``` text
MPU6050
   ↓
ESP32
   ↓
serie temporal
   ↓
filtrado
   ↓
FFT
   ↓
frecuencia dominante
   ↓
análisis de resonancia
```

Variables:

-   aceleración;
-   tiempo;
-   frecuencia;
-   amplitud;
-   frecuencia dominante;
-   respuesta del sistema;
-   amortiguamiento.

## 9. Extensión visión + acelerómetro

``` text
              ┌── Cámara ──→ x(t)
Sistema físico┤
              └── MPU6050 ─→ a(t)
```

En Python se puede obtener `x(t) → v(t) → a(t)` y compararlo con la
aceleración del MPU6050.

## 10. Software

### Desarrollo

-   VS Code.
-   PlatformIO o Arduino IDE.
-   Git.

### Python

-   Python 3.
-   NumPy.
-   SciPy.
-   Pandas.
-   Matplotlib.
-   Jupyter.

### Análisis científico

-   FFT.
-   filtros digitales.
-   espectrogramas.
-   frecuencia dominante.
-   ajuste de curvas.
-   análisis estadístico.

## 11. Prioridades de compra

### Nivel 1 --- Imprescindible

-   ESP32-S3 tradicional.
-   MPU6050.
-   OLED SSD1306.
-   Protoboard.
-   Dupont.
-   Resistencias.
-   Capacitores.
-   Multímetro.
-   Estación de soldadura.
-   Estaño.
-   Flux.
-   Pinzas.
-   Cortador.
-   Analizador lógico USB.

### Nivel 2 --- Muy recomendable

-   microSD.
-   LM2596.
-   herramientas de desoldado.
-   tercera mano.
-   lupa/lámpara.
-   organizadores.
-   destornilladores de precisión.

### Nivel 3 --- Extensión

-   XIAO ESP32-S3 Sense.
-   TP4056.
-   ESP32-C3 Super Mini.
-   módulos adicionales.

### Nivel 4 --- Segunda etapa

-   osciloscopio;
-   fuente de laboratorio;
-   generador de funciones.

## 12. Tabla de totales

Completar durante Cyber.

  ------------------------------------------------------------------------------------------
  Concepto          SMDByte        MCI   MechatronicStore       AFEL   Victronics      Cyber
  -------------- ---------- ---------- ------------------ ---------- ------------ ----------
  Electrónica                                                                     
  base                                                                            

  Sensores                                                                        

  ESP32-S3                                                                        
  tradicional                                                                     

  Opción cámara                                                                   

  Herramientas                                                                    

  Analizador                                                                      
  lógico                                                                          

  **Subtotal**                                                                    

  Envío Santiago                                                                  

  **TOTAL                                                                         
  FINAL**                                                                         
  ------------------------------------------------------------------------------------------

## 13. Comparación de plataformas

  -----------------------------------------------------------------------
  Configuración           Ventaja principal       Uso
  ----------------------- ----------------------- -----------------------
  ESP32 DevKit            Económico y simple      Aprendizaje /
                                                  prototipos

  ESP32-S3 N16R8          Mayor capacidad y RAM   Laboratorio principal

  XIAO ESP32-S3 Sense     Cámara + formato        Visión / medición
                          compacto                óptica

  ESP32-C3 Super Mini     Muy pequeño y económico Nodos secundarios
  -----------------------------------------------------------------------

### Recomendación

**1 × ESP32-S3 N16R8** como plataforma principal.

**1 × XIAO ESP32-S3 Sense** como plataforma de visión si el presupuesto
lo permite.

El ESP32-C3 puede quedar como compra secundaria.

## 14. Estrategia Cyber

1.  Completar precios actuales.
2.  Identificar equivalentes entre proveedores.
3.  Registrar stock.
4.  Registrar costo de despacho a Santiago.
5.  Registrar precio Cyber.
6.  Calcular diferencia porcentual.
7.  Priorizar descuentos reales.

Comparar siempre:

``` text
precio productos + envío = costo real
```

## 15. Criterio de compra

Priorizar:

1.  Compatibilidad.
2.  Calidad del componente.
3.  Stock real.
4.  Precio final con despacho.
5.  Garantía/respaldo.
6.  Precio Cyber.

No es necesario comprar todos los componentes en un solo proveedor. La
matriz permite construir una canasta mixta.

## 16. Resumen del ecosistema

``` text
                         ┌───────────────┐
                         │    ESP32-S3   │
                         │   laboratorio │
                         └───────┬───────┘
                                 │
             ┌───────────────────┼──────────────────┐
             ↓                   ↓                  ↓
          MPU6050              OLED              microSD
             │                   │                  │
             └───────────────────┼──────────────────┘
                                 ↓
                         adquisición científica
                                 │
                                 ↓
                              Python
                                 │
                ┌────────────────┼────────────────┐
                ↓                ↓                ↓
               FFT            filtros         visualización

             EXTENSIÓN DE VISIÓN

              XIAO ESP32-S3 Sense
                       │
                    cámara
                       ↓
                      x(t)
                       │
                       ↓
                  Python / CV
                       │
                       ↓
             comparación con MPU6050
```

## Objetivo final

Construir un pequeño **laboratorio de instrumentación científica
programable**, capaz de crecer desde experimentos básicos con ESP32
hasta adquisición de señales, procesamiento digital, análisis espectral,
vibraciones, resonancia, instrumentación, visión artificial e
integración con Python.
