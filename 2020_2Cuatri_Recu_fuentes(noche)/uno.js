/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/

// Avila, Ignacio Leonel. Div E.

function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contFem = 0;
	let contMasc = 0;
	let acumEdad = 0;
	let tempMax=0;
	let MensajeFem="No se ingresaron mujeres";
	let NomMax;
	let FlagTemp=0;

	for (let i = 1; i <= 5; i++) {
		do {
			nombre = prompt("Ingrese Nombre");
		} while (!(isNaN(nombre)));
		do {
			temperatura = parseInt(prompt("Ingrese Temperatura"));
		} while (!(temperatura>32 && temperatura<45));
		do {
			sexo = (prompt("Ingrese Sexo: F/M")).toUpperCase(sexo);
		} while (!(sexo=="F" || sexo=="M"));
		do {
			edad = parseInt(prompt("Ingrese Edad"));
		} while (!(edad>0 && edad<120));
	
		switch(sexo){
			case "F":
				contFem++;
				if(temperatura>tempMax){
					tempMax=temperatura;
					NomMax=nombre;
					FlagTemp=1;
				}
				break;
			case "M":
				contMasc++;
				break;
		}
	
		acumEdad=acumEdad+edad

	}
	
	promedioEdad = acumEdad / 5;

	if(FlagTemp=1){
		MensajeFem="La mujer con mayor temperatura es " + NomMax + " " + "con " + tempMax + " " + "º"
	}

	document.write("Ingresaron " + contMasc + " " + "masculinos y " + contFem + " " + "femeninos.");
	document.writeln(`<br>`);
	document.write("La edad promedio es: " + promedioEdad);
	document.writeln(`<br>`);
	document.write(MensajeFem);

}
