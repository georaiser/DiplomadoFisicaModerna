import os
import numpy as np
import matplotlib.pyplot as plt

output_dir = r"C:\Users\jorge\.gemini\antigravity\brain\91c9ba88-7aab-4773-945b-d9e180a70db0\scratch"

plt.style.use('dark_background')
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = ['DejaVu Sans', 'Arial']

# 1. Gráfica 1: Espectro de Emisión del Cuerpo Negro y Ley de Wien
fig, ax = plt.subplots(figsize=(7, 4.5), dpi=300)
fig.patch.set_facecolor('#0F172A') # Slate 900
ax.set_facecolor('#1E293B') # Slate 800

h = 6.626e-34
c = 3.0e8
k_B = 1.38e-23

wavelengths = np.linspace(100e-9, 2500e-9, 500)

def planck_law(lam, T):
    a = 8 * np.pi * h * c
    b = h * c / (lam * k_B * T)
    return (a / lam**5) / (np.exp(b) - 1)

T_vals = [3000, 4500, 6000]
colors = ['#F59E0B', '#EF4444', '#3B82F6']

for T, color in zip(T_vals, colors):
    rad = planck_law(wavelengths, T) / 1e13
    ax.plot(wavelengths * 1e9, rad, label=f'T = {T} K', color=color, linewidth=2.5)

ax.set_title('Radiacion Espectral del Cuerpo Negro (Ley de Planck)', fontsize=12, fontweight='bold', color='#F8FAFC', pad=12)
ax.set_xlabel(r'Longitud de onda $\lambda$ (nm)', fontsize=10, color='#94A3B8')
ax.set_ylabel(r'Densidad de Energia $W(\lambda)$ (u.a.)', fontsize=10, color='#94A3B8')
ax.grid(True, linestyle='--', alpha=0.3, color='#475569')
ax.legend(frameon=True, facecolor='#0F172A', edgecolor='#475569', labelcolor='#F8FAFC', fontsize=9)
ax.axvspan(380, 750, color='#38BDF8', alpha=0.15, label='Espectro Visible')
ax.text(560, ax.get_ylim()[1]*0.8, 'Luz Visible', color='#38BDF8', fontsize=9, ha='center')

plt.tight_layout()
chart1_path = os.path.join(output_dir, "grafica_cuerpo_negro.png")
plt.savefig(chart1_path, facecolor=fig.get_facecolor(), edgecolor='none')
plt.close()

# 2. Gráfica 2: La Catástrofe Ultravioleta
fig, ax = plt.subplots(figsize=(7, 4.5), dpi=300)
fig.patch.set_facecolor('#0F172A')
ax.set_facecolor('#1E293B')

T = 5000
lams = np.linspace(150e-9, 2000e-9, 500)

rad_planck = planck_law(lams, T) / 1e13
rad_rj = (8 * np.pi * k_B * T / lams**4) / 1e13

ax.plot(lams * 1e9, rad_planck, label='Curva Real / Planck (Cuantica)', color='#10B981', linewidth=3)
ax.plot(lams * 1e9, rad_rj, label='Rayleigh-Jeans (Clasica)', color='#F43F5E', linewidth=2.5, linestyle='--')

ax.set_ylim(0, np.max(rad_planck) * 1.5)
ax.set_xlim(150, 2000)

ax.annotate(r'Catastrofe Ultravioleta!' + '\n' + r'Divergencia a $\infty$ para $\lambda \to 0$', 
            xy=(250, rad_rj[100]), xytext=(450, np.max(rad_planck) * 1.2),
            arrowprops=dict(facecolor='#F43F5E', shrink=0.05, width=2, headwidth=8),
            color='#F43F5E', fontweight='bold', fontsize=9,
            bbox=dict(boxstyle="round,pad=0.4", fc="#0F172A", ec="#F43F5E", lw=1.5))

ax.set_title('La Catastrofe Ultravioleta: Clasica vs. Cuantica', fontsize=12, fontweight='bold', color='#F8FAFC', pad=12)
ax.set_xlabel(r'Longitud de onda $\lambda$ (nm)', fontsize=10, color='#94A3B8')
ax.set_ylabel(r'Densidad de Energia $W(\lambda)$', fontsize=10, color='#94A3B8')
ax.grid(True, linestyle='--', alpha=0.3, color='#475569')
ax.legend(frameon=True, facecolor='#0F172A', edgecolor='#475569', labelcolor='#F8FAFC', fontsize=9)

plt.tight_layout()
chart2_path = os.path.join(output_dir, "grafica_catastrofe_uv.png")
plt.savefig(chart2_path, facecolor=fig.get_facecolor(), edgecolor='none')
plt.close()

print(f"Graficas generadas exitosamente:\n1. {chart1_path}\n2. {chart2_path}")
