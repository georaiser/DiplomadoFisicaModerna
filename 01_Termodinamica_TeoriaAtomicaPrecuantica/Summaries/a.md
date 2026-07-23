# Explicación de la forma $f(\chi^2)=A e^{-B\chi^2}$

La expresión

$$f(\chi^2)=A e^{-B\chi^2}$$

surge de una condición matemática muy simple: la distribución de cada componente de la velocidad debe ser compatible con la idea de independencia estadística y de isotropía.

Partimos de una ecuación funcional de la forma

$$f(a)f(b)f(c)=F(a+b+c),$$

donde $a$, $b$ y $c$ representan los cuadrados de las componentes de la velocidad. Al tomar logaritmos, la multiplicación se convierte en suma:

$$\ln f(a)+\ln f(b)+\ln f(c)=\ln F(a+b+c).$$

Si definimos $g(\xi)=\ln f(\xi)$, entonces la condición se vuelve

$$g(a)+g(b)+g(c)=\text{algo que depende solo de }a+b+c.$$

La única solución suave y normalizable de esa condición es una función lineal:

$$g(\xi)=-B\xi + C,$$
donde $B>0$ y $C$ son constantes.

Como $g(\xi)=\ln f(\xi)$, al exponentiar obtenemos

$$f(\xi)=e^{-B\xi + C}=A e^{-B\xi},$$
donde $A=e^C$ es otra constante.

Finalmente, como en este problema $\,\xi=\chi^2\,$, se obtiene

$$f(\chi^2)=A e^{-B\chi^2}.$$

En palabras simples: la forma exponencial aparece porque al tomar logaritmos la ecuación se vuelve lineal, y esa linealidad produce una función exponencial al volver a la forma original.
