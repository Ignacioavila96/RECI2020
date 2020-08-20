/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/

//Avila, Ignacio Leonel. Div E

function mostrar()
{
  let marca;
  let precio;
  let pesoKg;
  let tipo;
  let acumPeso = 0;
  let Respuesta = true;
  let max=0;
  let marcaCara;
  let marcaLiviana;
  let flag=0;
  
  while (Respuesta) {
    do {
      marca = prompt("Ingrese marca");
    } while (!(isNaN(marca)));
    do {
      precio = parseInt(prompt("Ingrese precio"));
    } while (!(precio > 0 && precio < 1500));
    do {
      pesoKg = parseInt(prompt("Ingrese peso"));
    } while (!(pesoKg > 0 && pesoKg < 1500));
    do {
      tipo = (prompt("Ingrese tipo: Solido/Liquido")).toUpperCase(tipo);
    } while (!(tipo == "SOLIDO" || tipo == "LIQUIDO"));
  
    acumPeso = acumPeso + pesoKg;

    if (tipo == "LIQUIDO" && precio>max) {
      max = precio;
      marcaCara = marca;
    }
      
    else if (tipo == "SOLIDO" && (flag==0 || min>pesoKg)) {
      min = pesoKg;
      marcaLiviana = marca;
      flag=1;
    }
  
    Respuesta = confirm("Desea ingresar otro Producto?");
  
  }
  
  document.write("La cantidad total de Kilos de la compra es: " + acumPeso);
  document.writeln(`<br>`);
  document.write("La marca del producto más caro de los líquidos es: " + marcaCara);
  document.writeln(`<br>`);
  document.write("La marca del producto más liviano de los solidos es: " + marcaLiviana);

}
