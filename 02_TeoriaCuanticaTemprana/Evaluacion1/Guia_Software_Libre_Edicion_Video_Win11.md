# Guía de Software Libre y Código Abierto (FOSS) para Edición de Video en Windows 11

Para Windows 11, existen excelentes opciones de **Software Libre y Código Abierto (FOSS)** para la edición de video, según el nivel de complejidad y el tipo de trabajo que necesites realizar.

---

## 1. Editores No Lineales Completos (GUI)

### 1.1 Kdenlive *(Recomendado — Editor profesional completo)*
- **Licencia:** Código Abierto (GPLv3) — Proyecto KDE
- **ID de Instalación Winget:** `KDE.Kdenlive`
- **Comando de Instalación:**
  ```powershell
  winget install KDE.Kdenlive
  ```
- **Características Principales:**
  - Editor multitira completo de grado profesional para audio y video.
  - Integración nativa con motores FFmpeg y framework MLT.
  - Efectos visuales, corrección de color, subtítulos automáticos y transiciones.
  - Interfaz muy liviana y personalizable en Windows 11.
- **Ventajas:**
  - ✅ Gratuito y de código abierto sin limitaciones ni marcas de agua.
  - ✅ Muy completo en funciones (multinivel, animaciones, keyframes, chroma key).
  - ✅ Consumo de recursos moderado y excelente rendimiento en procesadores multi-núcleo.
- **Desventajas:**
  - ❌ Curva de aprendizaje media para principiantes absolutos.
  - ❌ En proyectos extremadamente complejos puede requerir ajustar proxies de renderizado.

---

### 1.2 Shotcut
- **Licencia:** Código Abierto (GPLv3) — Meltytech
- **ID de Instalación Winget:** `Meltytech.Shotcut`
- **Comando de Instalación:**
  ```powershell
  winget install Meltytech.Shotcut
  ```
- **Características Principales:**
  - Soporte nativo para resoluciones hasta 4K y 60 fps sin conversión previa.
  - Filtros avanzados de audio y video con aceleración por GPU.
  - Proceso de renderizado multihilo muy liviano y eficiente.
- **Ventajas:**
  - ✅ Soporta casi cualquier formato de entrada gracias a FFmpeg.
  - ✅ No requiere importar archivos a una biblioteca antes de editar.
  - ✅ Gran cantidad de filtros aplicables a pistas o clips individuales.
- **Desventajas:**
  - ❌ La interfaz basada en paneles puede resultar poco intuitiva al principio.
  - ❌ Menos opciones de titulación avanzada que Kdenlive.

---

### 1.3 OpenShot Video Editor
- **Licencia:** Código Abierto (GPLv3)
- **ID de Instalación Winget:** `OpenShot.OpenShot`
- **Comando de Instalación:**
  ```powershell
  winget install OpenShot.OpenShot
  ```
- **Características Principales:**
  - Interfaz simple de arrastrar y soltar, ideal para ediciones rápidas.
  - Integración con Blender para animación de títulos en 3D.
- **Ventajas:**
  - ✅ Extremadamente fácil de usar e intuitivo.
  - ✅ Curva de aprendizaje casi nula para proyectos sencillos.
- **Desventajas:**
  - ❌ Rendimiento inferior y mayor estabilidad crítica en proyectos largos o archivos pesados.
  - ❌ Funciones avanzadas limitadas en comparación con Kdenlive.

---

## 2. Herramientas de Procesamiento Rápido y Optimización (Sin Pérdida)

### 2.1 LosslessCut *(Imprescindible para cortes instantáneos)*
- **Licencia:** Código Abierto (GPLv3)
- **ID de Instalación Winget:** `ch.LosslessCut`
- **Comando de Instalación:**
  ```powershell
  winget install ch.LosslessCut
  ```
- **Características Principales:**
  - Corta y une fragmentos de video en milisegundos **sin re-codificar**.
  - Mantiene el **100% de la calidad original** del archivo.
  - Ideal para extraer partes de grabaciones largas de pantalla o cámara.
- **Ventajas:**
  - ✅ Procesamiento ultra-rápido (velocidad de copia de disco).
  - ✅ Cero pérdida de calidad de imagen o audio.
  - ✅ No consume CPU ni GPU en renderizados.
- **Desventajas:**
  - ❌ No permite agregar efectos, transiciones ni texto.
  - ❌ Los cortes deben realizarse cerca de fotogramas clave (*keyframes*) para máxima precisión.

---

### 2.2 HandBrake *(El estándar para compresión y conversión)*
- **Licencia:** Código Abierto (GPLv2)
- **ID de Instalación Winget:** `HandBrake.HandBrake`
- **Comando de Instalación:**
  ```powershell
  winget install HandBrake.HandBrake
  ```
- **Características Principales:**
  - Transcodificador y compresor de video de alto rendimiento.
  - Reducción drástica del tamaño de archivo usando códecs modernos (AV1, H.265/HEVC, H.264, VP9).
- **Ventajas:**
  - ✅ Reducción masiva de peso de archivos sin pérdida perceptible de calidad.
  - ✅ Presets optimizados para YouTube, Web, Discord y dispositivos móviles.
  - ✅ Soporte para procesamiento por lotes (*batch processing*).
- **Desventajas:**
  - ❌ No es un editor de video (no sirve para cortar escenas o hacer montajes complejos).

---

## 3. Post-Producción Profesional (Freeware)

### 3.1 DaVinci Resolve (Versión Gratuita)
- **Licencia:** Freeware (Gratuito sin marcas de agua)
- **Descarga Gratuita Oficial:** [Sitio Web de Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve)
- **Nota de Instalación:** Requiere registro gratuito directo en la web oficial del fabricante para descargar el instalador oficial de Windows.
- **Características Principales:**
  - Estándar de la industria cinematográfica para montaje, corrección de color profesional, efectos VFX (Fusion) y mezcla de sonido (Fairlight).
- **Ventajas:**
  - ✅ Herramienta de nivel Hollywood 100% gratuita sin marcas de agua.
  - ✅ Corrección de color y etalonaje sin competencia.
  - ✅ Suite completa: Edición + VFX + Audio profesional en una sola app.
- **Desventajas:**
  - ❌ Exige tarjeta gráfica dedicada potente (Nvidia/AMD/Intel) y 16 GB+ de RAM.
  - ❌ Exige tiempo de aprendizaje y estudio para dominar su flujo de trabajo.

---

## 4. Automatización y Programación en Python

### 4.1 Entorno `py312` Configurado (Python 3.12 + FFmpeg + MoviePy)
- **Ruta del Entorno:** `C:\Users\jorge\miniforge3\envs\py312`
- **Paquetes Instalados y Verificados:**
  - `ffmpeg` (CLI v8.1.1)
  - `moviepy` (Edición programática)
  - `opencv-python` (`cv2`)
  - `imageio` / `imageio-ffmpeg`
  - `pydub` (Procesamiento de audio)
  - `av` (`PyAV`)
  - `ffmpeg-python`
- **Ejecución de Scripts:**
  ```powershell
  C:\Users\jorge\miniforge3\envs\py312\python.exe tu_script_de_video.py
  ```
- **Ventajas:**
  - ✅ Automatización completa por código (generar 100s de videos, recortar por marcas de tiempo en batch, añadir marcas de agua automáticamente).
- **Desventajas:**
  - ❌ Requiere escribir código y scripts en Python.

---

## 💡 Resumen de Recomendación Según tu Necesidad

| Tu Necesidad o Caso de Uso | Software Recomendado | ¿Por qué? |
| :--- | :--- | :--- |
| **Cortar o extraer fragmentos de videos largos al instante sin perder calidad** | **LosslessCut** | Proceso ultra-rápido de copia en milisegundos sin re-renderizar. |
| **Edición completa de videos para clases, presentaciones o redes sociales** | **Kdenlive** *(o Shotcut)* | Herramienta FOSS más equilibrada, estable, completa y liviana en Windows 11. |
| **Reducir el peso de videos pesados o cambiar de formato (MP4/MKV/WebM)** | **HandBrake** | El mejor compresor multihilo con presets optimizados. |
| **Proyectos sencillos de primera vez con arrastrar y soltar** | **OpenShot** | Interfaz súper básica e intuitiva para principiantes. |
| **Proyectos cinematográficos, corrección de color avanzada y VFX profesional** | **DaVinci Resolve** | Potencia de grado de Hollywood gratuita (requiere GPU dedicada). |
| **Automatizar cortes, unir clips o procesar lotes de videos mediante código** | **Python (`py312`) + MoviePy** | Control total mediante scripts de Python para tareas repetitivas. |

---
*Documento actualizado en disco para Windows 11.*
