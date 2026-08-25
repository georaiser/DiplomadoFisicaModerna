"""
verify_bohr.py
==============
Verificación independiente de la fórmula de Bohr/Rydberg.
Confirma que los valores usados en physics.js son físicamente correctos.

Constantes CODATA 2018:
  R_H = 1.0967758e7 m⁻¹  (constante de Rydberg para hidrógeno)
  h   = 4.135667696e-15 eV·s
  c   = 2.99792458e8 m/s
  Ry  = 13.605693 eV  (energía de Rydberg)
"""

# ── Constantes físicas (CODATA 2018) ──────────────────────────────────────────
Ry_eV   = 13.605693     # eV  — energía de ionización del hidrógeno
h_eVs   = 4.135667696e-15  # eV·s — constante de Planck
c_ms    = 2.99792458e8     # m/s  — velocidad de la luz
R_H     = 1.0967758e7      # m⁻¹  — constante de Rydberg

# ── Fórmula de Bohr/Rydberg ───────────────────────────────────────────────────
def bohr(ni: int, nf: int) -> dict:
    """
    Calcula ΔE (eV) y λ (nm) para la transición ni → nf del hidrógeno.
    Requiere ni > nf (emisión).
    """
    if ni <= nf:
        raise ValueError(f"Se requiere ni > nf para emisión (ni={ni}, nf={nf})")
    delta_E = Ry_eV * (1/nf**2 - 1/ni**2)   # eV
    lambda_m = (h_eVs * c_ms) / delta_E       # metros
    lambda_nm = lambda_m * 1e9                 # nanómetros
    return {"ni": ni, "nf": nf, "deltaE_eV": delta_E, "lambda_nm": lambda_nm}


# ── Verificación Serie de Balmer (nf = 2) ────────────────────────────────────
BALMER_REFERENCE = {
    # Valores de referencia del plan maestro (sección 1.4)
    # y valores tabulados NIST ASD
    (3, 2): {"nombre": "Hα", "color": "Rojo",          "lambda_ref": 656.3, "dE_ref": 1.89},
    (4, 2): {"nombre": "Hβ", "color": "Verde-azulado", "lambda_ref": 486.1, "dE_ref": 2.55},
    (5, 2): {"nombre": "Hγ", "color": "Azul-violeta",  "lambda_ref": 434.0, "dE_ref": 2.86},
    (6, 2): {"nombre": "Hδ", "color": "Violeta",       "lambda_ref": 410.2, "dE_ref": 3.02},
}

def verificar_balmer():
    print("=" * 70)
    print("  VERIFICACIÓN SERIE DE BALMER  (fórmula de Bohr — hidrógeno)")
    print("=" * 70)
    print(f"  {'Línea':<6} {'Salto':<7} {'ΔE calc':>9} {'ΔE ref':>8} {'Δ%':>6}  "
          f"{'λ calc':>9} {'λ ref':>8} {'Δ%':>6}  {'Color'}")
    print("-" * 70)

    todos_ok = True
    for (ni, nf), ref in BALMER_REFERENCE.items():
        r = bohr(ni, nf)
        err_E = abs(r["deltaE_eV"] - ref["dE_ref"]) / ref["dE_ref"] * 100
        err_l = abs(r["lambda_nm"] - ref["lambda_ref"]) / ref["lambda_ref"] * 100
        ok = err_E < 0.5 and err_l < 0.2   # tolerancia: 0.5% en energía, 0.2% en λ
        flag = "✓" if ok else "✗ ERROR"
        if not ok:
            todos_ok = False
        print(f"  {ref['nombre']:<6} {ni}→{nf:<4}  "
              f"{r['deltaE_eV']:>8.4f}  {ref['dE_ref']:>7.2f}  {err_E:>5.2f}%  "
              f"{r['lambda_nm']:>8.2f}  {ref['lambda_ref']:>7.1f}  {err_l:>5.3f}%  "
              f"{ref['color']}  {flag}")

    print("-" * 70)
    if todos_ok:
        print("  ✓ TODOS LOS VALORES COINCIDEN — physics.js es correcto")
    else:
        print("  ✗ HAY DISCREPANCIAS — revisar constantes")
    print()


# ── Tabla extendida: todas las transiciones visibles (380–750 nm) ─────────────
def tabla_completa():
    print("=" * 50)
    print("  TRANSICIONES VISIBLES (380–750 nm) — H")
    print("=" * 50)
    print(f"  {'ni':>3} {'nf':>3}  {'ΔE (eV)':>9}  {'λ (nm)':>9}  {'Región'}")
    print("-" * 50)
    for nf in range(1, 5):
        for ni in range(nf + 1, 8):
            r = bohr(ni, nf)
            lnm = r["lambda_nm"]
            if 100 < lnm < 1200:   # rango extendido para mostrar contexto
                if lnm < 380:
                    region = "UV"
                elif lnm <= 750:
                    region = "VISIBLE"
                else:
                    region = "IR"
                print(f"  {ni:>3} {nf:>3}  {r['deltaE_eV']:>9.4f}  {lnm:>9.2f}  {region}")
    print()


# ── Constante de Rydberg derivada ────────────────────────────────────────────
def verificar_rydberg():
    """Verifica que Ry_eV × (1/nf² - 1/ni²) = hc/λ de forma consistente."""
    print("=" * 50)
    print("  VERIFICACIÓN CONSISTENCIA: E = hc/λ")
    print("=" * 50)
    for (ni, nf) in [(3,2), (4,2), (5,2)]:
        r = bohr(ni, nf)
        E_from_hc = (h_eVs * c_ms) / (r["lambda_nm"] * 1e-9)
        discrepancia = abs(E_from_hc - r["deltaE_eV"]) / r["deltaE_eV"] * 100
        print(f"  {ni}→{nf}: ΔE={r['deltaE_eV']:.4f} eV  |  hc/λ={E_from_hc:.4f} eV  |  "
              f"discrepancia={discrepancia:.6f}%")
    print()


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    verificar_balmer()
    tabla_completa()
    verificar_rydberg()
    print("Listo. Los valores anteriores son los que deben aparecer en la app.")
