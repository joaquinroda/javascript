// Práctica js


// Practica IF

// let precio = prompt('Ingrese el precio del juego en steam')

// if (precio > 0) {

//     let precioFinal = precio*1.75

//     console.log('El precio del juego en steam con impuestos incluídos es ' + precioFinal);
// } else {
//     console.log('Ese no es un precio válido');
// }


// Entrega 1 complementaria (Crear un algoritmo utilizando un ciclo) 




// let diasCantidad = prompt("¡Ingrese la cantidad de dias que faltan para su evento!")

// for (let i = 0; i = diasCantidad; i++) {
//     console.log("Faltan " + diasCantidad + " dias para su evento!" )
//     diasCantidad = diasCantidad - 1

// }

// if(i => diasCantidad) {
//     console.log('¡Hoy es el día de su evento!');
// }




// Entrega simulador interactivo

// let impuesto = prompt('Ingrese el procentaje de impuestos')

// let precio = prompt('Ingrese el precio del producto')

calculo()

    function calculo() {
        let impuesto = prompt('Ingrese el procentaje de impuestos')

        let precio = prompt('Ingrese el precio del producto')

        if(precio <= 2000) {
            let descuento = 0.10
            console.log('Tiene un 10% de descuento!');
            let total = precio - (precio*descuento)
            let precioImpuesto = (impuesto * total) / 100
            let precioFinal = precioImpuesto + total
            console.log('El precio con el descuento es: ',total);
            console.log('El precio final con impuesto incluído es: ',precioFinal);

        } else if(precio >= 2001 && precio <= 10000) {

            let descuento = 0.20
            console.log('Su monto supera los 2000$ asi que tiene un 20% de descuento!');
            let total = precio - (precio*descuento)
            let precioImpuesto = (impuesto * total) / 100
            let precioFinal = precioImpuesto + total
            console.log('El precio con el descuento es: ',total);
            console.log('El precio final con impuesto incluído es: ',precioFinal);

        } else if(precio >= 10001 && precio <= 20000) {

            let descuento = 0.30
            console.log('Su monto supera los 10000$ asi que tiene un 30% de descuento!');
            let total = precio - (precio*descuento)
            let precioImpuesto = (impuesto * total) / 100
            let precioFinal = precioImpuesto + total
            console.log('El precio con el descuento es: ',total);
            console.log('El precio final con impuesto incluído es: ',precioFinal);

        } else if(precio >= 20001 && precio <= 30000) {

            let descuento = 0.40
            console.log('Su monto supera los 20000$ asi que tiene un 40% de descuento!');
            let total = precio - (precio*descuento)
            let precioImpuesto = (impuesto * total) / 100
            let precioFinal = precioImpuesto + total
            console.log('El precio con el descuento es: ',total);
            console.log('El precio final con impuesto incluído es: ',precioFinal);

        } else if(precio >= 30001) {

            let descuento = 0.50
            console.log('Su monto supera los 30000$ asi que tiene un 50% de descuento!');
            let total = precio - (precio*descuento)
            let precioImpuesto = (impuesto * total) / 100
            let precioFinal = precioImpuesto + total
            console.log('El precio con el descuento es: ',total);
            console.log('El precio final con impuesto incluído es: ',precioFinal);
        }

    }

    let otro = prompt('¿Desea calcular otro precio? Responder: Si / No')

    if (otro.toLowerCase() === "si") {
        calculo()
    } else if (otro.toLowerCase() === "no") {
        console.log('¡Gracias por usar la calculadora, hasta la próxima!');
    } else {
        console.log('Esa no es una respuesta válida');
    }

