/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/

//Avila, Ignacio leonel. Div E.

function mostrar()
{
 let nombre;
 let lugar;
 let temporada;
 let cantidad;
 let respuesta = true;
 let AcumBari = 0;
 let AcumCata = 0;
 let AcumSal = 0;
 let MaxPasajeros = 0;
 let NombMax;
 let AcumInv=0;
 let AcumPas=0;
 let PromPers;
	
	while (respuesta) {
		do {
			nombre = prompt("Ingrese su nombre");
		} while (!(isNaN(nombre)));
		do {
			lugar = (prompt("Ingrese lugar: Bariloche, Cataratas, Salta")).toUpperCase(lugar);
		} while (!(lugar == "BARILOCHE" || lugar == "CATARATAS" || lugar == "SALTA"));
		do {
			temporada = (prompt("Ingrese temporada: Otoño, Invierno, Verano, Primavera")).toUpperCase(temporada);
		} while (!(temporada == "OTOÑO" || temporada == "INVIERNO" || temporada == "VERANO" || temporada == "PRIMAVERA"));
		do {
			cantidad = parseInt(prompt("Ingrese cantidad de personas que viajan"));
		} while (!(cantidad > 0 && cantidad < 50));

		switch (lugar) {
			case "BARILOCHE":
				AcumBari=AcumBari+cantidad;
				break;
			case "CATARATAS":
				AcumCata=AcumCata+cantidad;
				break;
			case "SALTA":
				AcumSal=AcumSal+cantidad;
				break;
		}

		if (MaxPasajeros < cantidad) {
			MaxPasajeros = cantidad;
			NombMax = nombre; 
		}

		if (temporada == "INVIERNO") {
			AcumInv++;
			AcumPas = AcumPas + cantidad;
		}

		respuesta = confirm("Desea ingresar otra estadia?");
	}

	if (AcumBari > AcumCata && AcumBari > AcumSal) {
		Maselegido = "Bariloche";
	}
	else if (AcumCata > AcumBari && AcumCata > AcumSal) {
		Maselegido = "Cataratas";
	}
	else {
		Maselegido = "Salta";
	}

	PromPers = AcumPas / AcumInv;

	document.write("El destino mas elegido es: " + Maselegido);
	document.writeln(`<br>`);
	document.write("EL nombre del titular que mas pasajeros lleva es: " + NombMax);
	document.writeln(`<br>`);
	document.write("El promedio de pasajeros por viaje en invierno es: " + PromPers);
}
