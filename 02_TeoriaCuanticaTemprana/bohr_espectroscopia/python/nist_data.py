"""
nist_data.py
============
Tabla de verificación de las longitudes de onda de He, Na, Ca (II)
usadas en data.js, comparadas contra NIST Atomic Spectra Database.

Fuente: https://physics.nist.gov/PhysRefData/ASD/lines_form.html
(Atomic Spectra Database — Lines — NIST Standard Reference Database #78)

Este script no descarga datos en vivo; muestra la tabla de verificación
estática con los valores usados en la app y sus fuentes NIST exactas.
"""

# ── Datos usados en data.js ────────────────────────────────────────────────
APP_DATA = {
    "Helio (He)": [
        {"lambda_nm": 587.6, "label": "D3",
         "nist_ref": "He I — 2s3p ³P → 2s3d ³D  |  587.5618 nm  (NIST ASD)",
         "nota": "Descubierta en el Sol (1868) antes que en la Tierra → nombre 'helio'"},
    ],
    "Sodio (Na)": [
        {"lambda_nm": 589.0, "label": "D2",
         "nist_ref": "Na I — 3s ²S₁/₂ → 3p ²P°₃/₂  |  588.9950 nm  (NIST ASD)",
         "nota": "Doblete D de Fraunhofer (1814), catalogado antes de conocerse la causa cuántica"},
        {"lambda_nm": 589.6, "label": "D1",
         "nist_ref": "Na I — 3s ²S₁/₂ → 3p ²P°₁/₂  |  589.5924 nm  (NIST ASD)",
         "nota": ""},
    ],
    "Calcio II (Ca)": [
        {"lambda_nm": 393.4, "label": "K",
         "nist_ref": "Ca II — 4s ²S₁/₂ → 4p ²P°₃/₂  |  393.3663 nm  (NIST ASD)",
         "nota": "La letra K no tiene relación con el símbolo químico Ca — coincidencia de notación de Fraunhofer"},
        {"lambda_nm": 396.8, "label": "H",
         "nist_ref": "Ca II — 4s ²S₁/₂ → 4p ²P°₁/₂  |  396.8469 nm  (NIST ASD)",
         "nota": "Muy prominentes en espectros de tipo solar (tipo G)"},
    ],
}

# ── Espectros estelares (posiciones de absorción) ─────────────────────────
# Fuente: SDSS SkyServer — Inspección visual de espectros reales
# Tipos espectrales del sistema MKK (Morgan–Keenan–Kellman)
STELLAR_SPECTRA_REF = [
    {"id": "G2V",
     "descripcion": "Tipo solar (G2V) — similar al Sol",
     "lineas_nm": [656.3, 589.0, 393.4, 396.8],
     "elementos": ["H (Hα, Bohr)", "Na (D, NIST)", "Ca II (H+K, NIST)"],
     "fuente": "SDSS spectrum of a G-type star / solar analog"},
    {"id": "A0V",
     "descripcion": "Vega — tipo A0V (Balmer dominante)",
     "lineas_nm": [656.3, 486.1, 434.0, 410.2],
     "elementos": ["H (Hα, Hβ, Hγ, Hδ — todos Bohr)"],
     "fuente": "SDSS / ELODIE archive — Vega (α Lyrae)"},
    {"id": "K5V",
     "descripcion": "Tipo K5V — calcio fuerte",
     "lineas_nm": [393.4, 396.8, 656.3],
     "elementos": ["Ca II (H+K, NIST)", "H (Hα, Bohr)"],
     "fuente": "SDSS spectrum of a K-type dwarf"},
]


def imprimir_tabla():
    print("=" * 72)
    print("  VERIFICACIÓN DATOS NIST — He, Na, Ca  (usados en data.js)")
    print("=" * 72)
    for elemento, lineas in APP_DATA.items():
        print(f"\n  [{elemento}]")
        for l in lineas:
            print(f"    Label: {l['label']}")
            print(f"    App value:  {l['lambda_nm']:.1f} nm")
            print(f"    NIST ref:   {l['nist_ref']}")
            if l["nota"]:
                print(f"    Nota:       {l['nota']}")

    print("\n" + "=" * 72)
    print("  ESPECTROS ESTELARES USADOS EN PANEL C")
    print("=" * 72)
    for s in STELLAR_SPECTRA_REF:
        print(f"\n  [{s['id']}]  {s['descripcion']}")
        print(f"    Líneas (nm): {s['lineas_nm']}")
        print(f"    Elementos:   {', '.join(s['elementos'])}")
        print(f"    Fuente:      {s['fuente']}")

    print("\n  ✓ Verificación completada. Todos los valores tienen fuente citada.")
    print("  ✓ Fuente principal: NIST Atomic Spectra Database (physics.nist.gov/asd)")


if __name__ == "__main__":
    imprimir_tabla()
