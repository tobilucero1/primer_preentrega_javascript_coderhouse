
function ingreso() {
    
    let ingresoNombre= prompt("Ingresa tu nombre");
    
    if(ingresoNombre == ""){
    
        console.log("No ingresaste nada, ingresa tu nombre para poder continuar");
    
    }else{
    
        let ingresoApellido= prompt("Okay "+ ingresoNombre + " ahora ingresa tu apellido, porfavor")
    
        if(ingresoApellido == ""){
    
            console.log("No ingresaste nada, ingresa tu apellido para poder continuar");
        }else{
            
            let nombreCompleto = ingresoNombre +" "+ingresoApellido
            console.log("Bienvenido " + nombreCompleto + ". Gracias por elegirnos, esperamos poder ayudarte!");
        }
    }
}

console.log(ingreso());

const arrayArt = [
    { art: 1, nombre: "Buzo 1", precio: 10000,stock: 25},
    { art: 2, nombre: "Buzo 2", precio: 12500,stock: 20},
    { art: 3, nombre: "Buzo 3", precio: 15000,stock: 20},
    { art: 4, nombre: "Buzo 4", precio: 18000,stock: 30}
    ];
    
    function Producto(art, nombre, precio, stock){
        this.art = art;
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = Number(stock);
    }
    
    const articulo= new Producto (5,"Buzo 5", 20000, 15)
    arrayArt.push(articulo)
    
    arrayArt.forEach ((numero) => {
      console.log(numero.nombre)});
    
    let opcion = prompt("Elige el articulo que deseas comprar: \n1-Buzo 1 \n2-Buzo 2 \n3-Buzo 3 \n4-Buzo 4 \n5-Buzo 5 \n0 para salir")
    
    while (opcion != 0){
    
        cantidad = prompt("Cuantas unidades de este producto quiere comprar?")
    
        switch (opcion){
          case "1":           
            if (cantidad <= arrayArt[opcion-1].stock){
              console.log("Este producto cuesta: $ " + arrayArt[opcion-1].precio );
              total = (cantidad * arrayArt[opcion-1].precio);
              console.log("El total de su compra es de $ " + total);
            }
            break;
    
    
        case "2":
          if (cantidad <= arrayArt[opcion-1].stock){
            console.log("Este producto cuesta: $ " + arrayArt[opcion-1].precio );
            total += (cantidad * arrayArt[opcion-1].precio);
            console.log("El total de su compra es de $" + total);
            }
            break;
    
    
        case "3":
            if (cantidad <= arrayArt[opcion-1].stock){
                console.log("Este producto cuesta: $ " + arrayArt[opcion-1].precio );
                total += (cantidad * arrayArt[opcion-1].precio);
                console.log("El total de su compra es de $" + total);
                }
            break;
    
        case "4":
            if (cantidad <= arrayArt[opcion-1].stock){
                console.log("Este producto cuesta: $ " + arrayArt[opcion-1].precio );
                total += (cantidad * arrayArt[opcion-1].precio);
                console.log("El total de su compra es de $" + total);
                }
            break;

            case "5":
                if (cantidad <= arrayArt[opcion-1].stock){
                    console.log("Este producto cuesta: $ " + arrayArt[opcion-1].precio );
                    total += (cantidad * arrayArt[opcion-1].precio);
                    console.log("El total de su compra es de $" + total);
                    }
                break;
    
        default:
           opcion = prompt("Opcion no Valida presione boton Salir")
        break;
    }
    opcion = prompt("Elige el articulo que deseas comprar: \n1-Buzo 1 \n2-Buzo 2 \n3-Buzo 3 \n4-Buzo 4 \n5-Buzo 5 \n0 para salir")
    }
    console.log("el total es de: " + total)
