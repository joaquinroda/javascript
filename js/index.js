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

// calculo()

//     function calculo() {
//         let impuesto = prompt('Ingrese el procentaje de impuestos')

//         let precio = prompt('Ingrese el precio del producto')

//         if(precio <= 2000) {
//             let descuento = 0.10
//             console.log('Tiene un 10% de descuento!');
//             let total = precio - (precio*descuento)
//             let precioImpuesto = (impuesto * total) / 100
//             let precioFinal = precioImpuesto + total
//             console.log('El precio con el descuento es: ',total);
//             console.log('El precio final con impuesto incluído es: ',precioFinal);

//         } else if(precio >= 2001 && precio <= 10000) {

//             let descuento = 0.20
//             console.log('Su monto supera los 2000$ asi que tiene un 20% de descuento!');
//             let total = precio - (precio*descuento)
//             let precioImpuesto = (impuesto * total) / 100
//             let precioFinal = precioImpuesto + total
//             console.log('El precio con el descuento es: ',total);
//             console.log('El precio final con impuesto incluído es: ',precioFinal);

//         } else if(precio >= 10001 && precio <= 20000) {

//             let descuento = 0.30
//             console.log('Su monto supera los 10000$ asi que tiene un 30% de descuento!');
//             let total = precio - (precio*descuento)
//             let precioImpuesto = (impuesto * total) / 100
//             let precioFinal = precioImpuesto + total
//             console.log('El precio con el descuento es: ',total);
//             console.log('El precio final con impuesto incluído es: ',precioFinal);

//         } else if(precio >= 20001 && precio <= 30000) {

//             let descuento = 0.40
//             console.log('Su monto supera los 20000$ asi que tiene un 40% de descuento!');
//             let total = precio - (precio*descuento)
//             let precioImpuesto = (impuesto * total) / 100
//             let precioFinal = precioImpuesto + total
//             console.log('El precio con el descuento es: ',total);
//             console.log('El precio final con impuesto incluído es: ',precioFinal);

//         } else if(precio >= 30001) {

//             let descuento = 0.50
//             console.log('Su monto supera los 30000$ asi que tiene un 50% de descuento!');
//             let total = precio - (precio*descuento)
//             let precioImpuesto = (impuesto * total) / 100
//             let precioFinal = precioImpuesto + total
//             console.log('El precio con el descuento es: ',total);
//             console.log('El precio final con impuesto incluído es: ',precioFinal);
//         }

//     }

    // let otro = prompt('¿Desea calcular otro precio? Responder: Si / No')

    // if (otro.toLowerCase() === "si") {
    //     calculo()
    // } else if (otro.toLowerCase() === "no") {
    //     console.log('¡Gracias por usar la calculadora, hasta la próxima!');
    // } else {
    //     console.log('Esa no es una respuesta válida');
    // }

// ----------    Entrega complementaria: Incorporar arrays --------

// class Libro {
//     constructor (idLibro, titulo, autor, precio) {
//         this.idLibro = idLibro
//         this.titulo = titulo
//         this.autor = autor
//         this.precio = precio
//     }
// }

// const biblioteca = [

// ]

// const libro1 = new Libro(1, "It", "Stephen King", 5000)
// biblioteca.push(libro1)

// const libro2 = new Libro(2, "Los versos del capitán", "Pablo Neruda", 8000)
// biblioteca.push(libro2)

// const libro3 = new Libro(3, "La vuelta al mundo en ochenta días", "Julio Verne", 3000)
// biblioteca.push(libro3)

// const libro4 = new Libro(4, "Casa tomada", "Julio Cortázar", 2000)
// biblioteca.push(libro4)

// const libro5 = new Libro(5, "The Stand", "Stephen King", 7000)
// biblioteca.push(libro5)

// const libro6 = new Libro(6, "El perseguidor", "Julio Cortázar", 3000)
// biblioteca.push(libro6)

// console.log(biblioteca)

// añadirLibro()

// function añadirLibro() {
//     let idLibro = Number(prompt("Ingrese un ID para el libro"))
//     let titulo = prompt("Ingrese titulo del libro")
//     let autor = prompt("Ingrese el autor del libro")
//     let precio = Number(prompt("Ingrese un precio para el libro"))



//         if (biblioteca.find( (Libro) => Libro.idLibro === idLibro )) {
//         alert("Ese ID ya está en uso, ingresalo nuevamente")
//         añadirLibro()
//     } else {
//         biblioteca.push( new Libro(idLibro, titulo, autor, precio) )
//     }

// }

// console.log(biblioteca);


// for (const Libro of biblioteca) {
//     Libro.precio *= 1.21
// }

// console.log(biblioteca)



// console.log(biblioteca.slice(2, 5))









// ---------  Entrega final 1 --------------

// class Producto {
//     constructor (idProd, item, desc, precio) {
//         this.idProd = idProd
//         this.item = item
//         this.desc = desc
//         this.precio = precio
//     }
// }

// const productos = [

// ]


// ingreseProd()

// function ingreseProd() {

//     let idProd = Number(prompt("Ingrese un ID para el producto"))
//     let item = prompt("Ingrese el producto")
//     let desc = prompt("Ingrese una breve descripción del producto")
//     let precio = Number(prompt("Ingrese un precio para el producto"))


//     if (productos.find( (Producto) => Producto.idProd === idProd) ) {
//         alert("Ese ID ya está en uso, ingresalo nuevamente")
//         ingreseProd()
//     } else {
//         productos.push( new Producto(idProd, item, desc, precio) )
//     }

// }

// let otro = prompt("Desea añadir otro producto? Responde: Si / No")


// if (otro.toLowerCase() === "si") {
//     while (otro.toLowerCase() === "si") {
//         ingreseProd()
//         otro = prompt("Desea añadir otro producto? Responde: Si / No")
//     }
//     } else if (otro.toLowerCase() === "no") {
//         console.log('¡Gracias por añadir productos, hasta la próxima!');
//     } else {
//         alert('Esa no es una respuesta válida');
//     }


// console.log(productos)


// let filtrar = prompt("¿Desea ordenar los productos de menor a mayor? Si / No")

// if (filtrar.toLowerCase() === "si") {
//     const ordenarMenMay = productos.sort((a, b) => a.precio - b.precio)
//     console.log(ordenarMenMay)
// } else if (filtrar.toLowerCase() === "no") {
//     const ordenarMayMen = productos.sort((a, b) => b.precio - a.precio)
//     console.log(ordenarMayMen)
// }



//---------------------------------------------------------------


// // Entrega complementaria 2: Interactuar con HTML ---------------

// class Producto {
//     constructor (idProd, item, desc, precio) {
//         this.idProd = idProd
//         this.item = item
//         this.desc = desc
//         this.precio = precio
//     }
// }

// const productos = [

// ]

// productos.push(new Producto(1, "Remera", "Remera Negra", 3000))


// productos.push(new Producto(2, "Pantalon", "Pantalon Azul", 5000))


// productos.push(new Producto(3, "Zapatillas", "Zapatillas Nike", 15000))


// productos.push(new Producto(4, "Medias", "Medias de Shrek", 1000))


// productos.push(new Producto(5, "Camisa", "Camisa Blanca", 5000))


// productos.push(new Producto(6, "Vestido", "Vestido Rosa", 7000))


// productos.push(new Producto(7, "Saco", "Saco Negro", 18000))


// productos.push(new Producto(8, "Campera", "Campera de Abrigo", 25000))

// ingreseProd()

// function ingreseProd() {

//     let idProd = Number(prompt("Ingrese un ID para el producto"))
//     let item = prompt("Ingrese el producto")
//     let desc = prompt("Ingrese una breve descripción del producto")
//     let precio = Number(prompt("Ingrese un precio para el producto"))


//     if (productos.find( (Producto) => Producto.idProd === idProd) ) {
//         alert("Ese ID ya está en uso, ingresalo nuevamente")
//         ingreseProd()
//     } else {
//         productos.push( new Producto(idProd, item, desc, precio) )
//     }

// }

// let otro = prompt("Desea añadir otro producto? Responde: Si / No")


// if (otro.toLowerCase() === "si") {
//     while (otro.toLowerCase() === "si") {
//         ingreseProd()
//         otro = prompt("Desea añadir otro producto? Responde: Si / No")
//     }
//     } else if (otro.toLowerCase() === "no") {
//         console.log('¡Gracias por añadir productos, hasta la próxima!');
//     } else {
//         alert('Esa no es una respuesta válida');
//     }


// console.log(productos)

// const galeria = document.querySelector("#galery")


// const templateCard = document.querySelector("template")
// const cardProd = templateCard.content.querySelector("div")



// productos.forEach((prod) => {
//     let cardProdClon = cardProd.cloneNode(cardProd, true)
//     cardProdClon.children[0].innerText = prod.item
//     cardProdClon.children[1].innerText = "ID: " + prod.idProd
//     cardProdClon.children[2].innerText = prod.desc
//     cardProdClon.children[3].innerText = "Precio: " + prod.precio


//     galeria.appendChild(cardProdClon)
// });



// Entrega obligatoria: Incorporar Eventos ----------------------


class Producto {
    constructor (idProd, item, desc, precio) {
        this.idProd = idProd
        this.item = item
        this.desc = desc
        this.precio = precio
    }
}

const productos = [

]

productos.push(new Producto(1, "Remera", "Remera Negra", 3000))


productos.push(new Producto(2, "Pantalon", "Pantalon Azul", 5000))


productos.push(new Producto(3, "Zapatillas", "Zapatillas Nike", 15000))


productos.push(new Producto(4, "Medias", "Medias de Shrek", 1000))


productos.push(new Producto(5, "Camisa", "Camisa Blanca", 5000))


productos.push(new Producto(6, "Vestido", "Vestido Rosa", 7000))


productos.push(new Producto(7, "Saco", "Saco Negro", 18000))


productos.push(new Producto(8, "Campera", "Campera de Abrigo", 25000))


const modalFormContenedor = document.querySelector("#modalContenedor")
const btnAddProd = document.querySelector("#buttonAddProd")

btnAddProd.addEventListener("click", () => {
    modalFormContenedor.classList.add("verModalForm")
})


const inputID = document.querySelector("#input-ID")
const inputProd = document.querySelector("#input-Prod")
const inputDesc = document.querySelector("#input-Desc")
const inputPrecio = document.querySelector("#input-Precio")

const formularioAddProd = document.querySelector("#formularioAddProd")

const btnAgregar = document.querySelector("#btnAgregarProd")

formularioAddProd.addEventListener('submit', (event) => {
    event.preventDefault() 


    const idProd = Number(inputID.value)
    const item = inputProd.value
    const desc = inputDesc.value
    const precio = Number(inputPrecio.value)


    if (productos.find( (Producto) => Producto.idProd === idProd) ) {
        alert("Ese ID ya está en uso, ingreselo nuevamente")
    } else {
        productos.push( new Producto(idProd, item, desc, precio) )
    }
    
    console.log(productos)
    
    formularioAddProd.reset()
    modalFormContenedor.classList.remove("verModalForm")
})



const galeria = document.querySelector("#galery")


const templateCard = document.querySelector("template")
const cardProd = templateCard.content.querySelector("div")



productos.forEach((prod) => {
    let cardProdClon = cardProd.cloneNode(cardProd, true)
    cardProdClon.children[0].innerText = prod.item
    cardProdClon.children[1].innerText = "ID: " + prod.idProd
    cardProdClon.children[2].innerText = prod.desc
    cardProdClon.children[3].innerText = "Precio: " + prod.precio


    galeria.appendChild(cardProdClon)
})

