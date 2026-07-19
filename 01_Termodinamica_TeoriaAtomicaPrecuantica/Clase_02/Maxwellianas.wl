(* ::Package:: *)

(* ::Input:: *)
(*Quit*)


(* ::Input:: *)
(*$Assumptions=m>0&&\[Tau]>0&&k>0&&T>0&&m\[Element]Reals&&\[Tau]\[Element]Reals*)


(* ::Text:: *)
(*Distribuci\[OAcute]n de Maxwell para la rapidez*)


(* ::Input:: *)
(*PM[v_]:=4\[Pi] (m/(2\[Pi] k T))^(3/2) Exp[-((m v^2)/(2k T))]v^2*)


(* ::Text:: *)
(*Confirmando la normalizaci\[OAcute]n*)


(* ::Input:: *)
(*Integrate[PM[v],{v,0,Infinity}]*)


(* ::Text:: *)
(*En t\[EAcute]rminos de \[Tau]=k T*)


(* ::Input:: *)
(*PM[v_,m_,\[Tau]_]:=4\[Pi] (m/(2\[Pi] \[Tau]))^(3/2) Exp[-((m v^2)/(2\[Tau]))]v^2*)


(* ::Text:: *)
(*Gr\[AAcute]ficas para fr\[IAcute]o \[Tau]=10 (azul), intermedio \[Tau]=20 (naranja) y m\[AAcute]s caliente \[Tau]=30 (verde)*)


(* ::Input:: *)
(*Plot[{PM[v,1,10],PM[v,1,20],PM[v,1,30]},{v,0,20},AxesLabel->{"v","P[v]"}]*)


(* ::Text:: *)
(*Rapidez m\[AAcute]xima*)


(* ::Input:: *)
(*D[PM[v,m,\[Tau]],v]//Simplify*)


(* ::Input:: *)
(*vmax[m_,\[Tau]_]=Sqrt[(2\[Tau])/m]*)


(* ::Text:: *)
(*Rapidez promedio <v>*)


(* ::Input:: *)
(*Integrate[v PM[v,m,\[Tau]],{v,0,Infinity}]//Simplify//Refine*)


(* ::Input:: *)
(*vmean[m_,\[Tau]_]=2 Sqrt[2/\[Pi]] Sqrt[\[Tau]/m]*)


(* ::Input:: *)
(*Plot[{PM[v,1,10],PM[v,1,20]},{v,0,20},GridLines->{{vmax[1,10],vmean[1,10],vmax[1,20],vmean[1,20]}},PlotLabel->"Maxwellianas",AxesLabel->{"v","P[v]"}]*)


(* ::Text:: *)
(*Raiz cuadr\[AAcute]tica media Sqrt[<(v^2)>]*)


(* ::Input:: *)
(*(Integrate[v^2 PM[v,m,\[Tau]],{v,0,Infinity}])^(1/2)//Simplify//Refine*)


(* ::Text:: *)
(*Las tres velocidades caracter\[IAcute]sticas vmax, <v>, \[Sqrt](<(v^2)>) son del mismo orden, pues van como  la raiz cuadrada de la temperatura (T)^(1/2) *)
(**)
