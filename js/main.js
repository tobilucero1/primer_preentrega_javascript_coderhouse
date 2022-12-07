
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

let nombreEmprendimiento= prompt("Ingresa el nombre de tu emprendimiento, porfavor");

if (nombreEmprendimiento == "") {
    console.log("No ingresaste nada, ingresa el nombre de tu emprendimiento para poder continuar");
    
}else{
    console.log("Perfecto! Ahora indicanos si quieres averiguar tu ganancia neta anual, escriibiendo la palabra clave 'ANUAL' o escirbe la palabra clave 'MENSUAL' en el caso de que quieras saber la ganancia neta de solo un mes");



    let palabraClave= prompt("Ingresa 'ANUAL' o 'MENSUAL'. porfavor, escribalo todo en MAYUSCULA.");
    if (palabraClave == ""){
        console.log("Error. Ingresa 'ANUAL' o 'MENSUAL'. porfavor, escribalo todo en MAYUSCULA ");
    }else
        if(palabraClave === "ANUAL" || palabraClave === "MENSUAL"){
            gananciasBrutas=parseFloat(prompt("Ingresa la ganancia bruta del año o mes del que quieras saber tu ganacia neta"));
            gastos=parseFloat(prompt("ingresa los gastos anuales o mensuales de dicho año/mes"));
            gananciaNeta = gananciasBrutas - gastos 
            alert( "Tu ganancia neta es de "+ gananciaNeta)

        }else{
            console.log("error");
        }
}






//let gananciasBrutas= prompt("Ingresa la ganancia bruta del mes del que quieras saber(En el caso que quieras saber tu ganancia neta anual, ingresa tu ganancia bruta anual) " )

//let gastos= prompt("Ingresa tus gastos ")


