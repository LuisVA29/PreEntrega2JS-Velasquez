// Bienvenida
alert("¡Bienvenido a la Pizzería!");

// Definir opciones de pizza, tamaño y bebida con sus respectivos precios
const opcionesPizza = ["Pepperoni", "Hawaiana", "Veggy", "Queso"];
const preciosPizza = [10, 10, 10, 10];
const tamanosPizza = ["Pequeña", "Mediana", "Grande"];
const preciosTamanos = [10, 15, 20];
const opcionesBebida = ["Refresco", "Agua", "Jugo"];
const preciosBebida = [2, 1.5, 2.5];

// Función para mostrar un prompt con opciones y obtener la elección del usuario
function obtenerSeleccion(opciones, precios, tipo) {
    let seleccion;
    do {
        let opcionesStr = opciones
            .map((opcion, index) => `${index}. ${opcion} ($${precios[index]})`)
            .join("\n");

        seleccion = prompt(`Seleccione ${tipo}:\n${opcionesStr}`);
        if (
            seleccion === null ||
            seleccion === "" ||
            isNaN(seleccion) ||
            seleccion < 0 ||
            seleccion >= opciones.length
        ) {
            alert("Por favor, ingrese una opción válida.");
        }
    } while (
        seleccion === null ||
        seleccion === "" ||
        isNaN(seleccion) ||
        seleccion < 0 ||
        seleccion >= opciones.length
    );
    return seleccion;
}

// Preguntar cuántas pizzas desea agregar
let cantidadPizzas = prompt("¿Cuántas pizzas desea agregar?");
cantidadPizzas = parseInt(cantidadPizzas);

// Inicializar array para almacenar el detalle del pedido
let detallePedido = [];

// Obtener detalles de cada pizza
for (let i = 0; i < cantidadPizzas; i++) {
    // Obtener tipo de pizza
    const tipoPizzaIndex = obtenerSeleccion(opcionesPizza, preciosPizza, "el tipo de pizza");
    const tipoPizza = opcionesPizza[tipoPizzaIndex];

    // Obtener tamaño de pizza
    const tamanoPizzaIndex = obtenerSeleccion(tamanosPizza, preciosTamanos, "el tamaño de la pizza");
    const tamanoPizza = tamanosPizza[tamanoPizzaIndex];

    // Obtener bebida
    const deseaBebidaIndex = obtenerSeleccion(opcionesBebida, preciosBebida, "la bebida");
    const deseaBebida = deseaBebidaIndex !== 0 ? opcionesBebida[deseaBebidaIndex] : "No gracias";

    // Almacenar detalles de la pizza en el array
    detallePedido.push({
        tipoPizza,
        tamanoPizza,
        deseaBebida
    });
}

// Función para mostrar el resumen del pedido
function mostrarResumen(detalle) {
    let resumen = "Resumen del pedido:\n";
    for (let i = 0; i < detalle.length; i++) {
        resumen +=
            `Pizza ${i + 1}:\n` +
            `Tipo de pizza: ${detalle[i].tipoPizza}\n` +
            `Tamaño de la pizza: ${detalle[i].tamanoPizza} ($${preciosTamanos[tamanosPizza.indexOf(detalle[i].tamanoPizza)]})\n` +
            `Bebida: ${detalle[i].deseaBebida} ($${preciosBebida[opcionesBebida.indexOf(detalle[i].deseaBebida)]})\n\n`;
    }
    return resumen;
}

// Mostrar el resumen del pedido
let resumenCompra = mostrarResumen(detallePedido);
alert(resumenCompra);

let agregarOEliminar;
do {
    // Preguntar si desea realizar alguna modificación
    agregarOEliminar = prompt("¿Desea agregar o eliminar algún producto? (Sí/No)");
    agregarOEliminar = agregarOEliminar.toLowerCase();

    if (agregarOEliminar === "sí" || agregarOEliminar === "si") {
        // Mostrar los productos en el carrito
        let productosEnCarrito = "Productos en el carrito:\n";
        for (let i = 0; i < detallePedido.length; i++) {
            productosEnCarrito += `${i}. Pizza: ${detallePedido[i].tipoPizza}, Tamaño: ${detallePedido[i].tamanoPizza}, Bebida: ${detallePedido[i].deseaBebida}\n`;
        }
        // Preguntar si desea agregar o eliminar y manejar la lógica correspondiente
        let accion = prompt(`${productosEnCarrito}Ingrese el número del producto que desea eliminar o ingrese "agregar" para agregar un nuevo producto.`);
        if (accion === "agregar") {
            // Agregar un nuevo producto
            // Obtener detalles de la nueva pizza
            const tipoPizzaIndex = obtenerSeleccion(opcionesPizza, preciosPizza, "el tipo de pizza");
            const tipoPizza = opcionesPizza[tipoPizzaIndex];

            const tamanoPizzaIndex = obtenerSeleccion(tamanosPizza, preciosTamanos, "el tamaño de la pizza");
            const tamanoPizza = tamanosPizza[tamanoPizzaIndex];

            const deseaBebidaIndex = obtenerSeleccion(opcionesBebida, preciosBebida, "la bebida");
            const deseaBebida = deseaBebidaIndex !== 0 ? opcionesBebida[deseaBebidaIndex] : "No gracias";

            // Almacenar detalles de la pizza en el array
            detallePedido.push({
                tipoPizza,
                tamanoPizza,
                deseaBebida
            });

            // Mostrar el resumen actualizado
            resumenCompra = mostrarResumen(detallePedido);
            alert(resumenCompra);
        } else {
            // Eliminar un producto
            accion = parseInt(accion);
            if (!isNaN(accion) && accion >= 0 && accion < detallePedido.length) {
                // Eliminar el producto seleccionado
                detallePedido.splice(accion, 1);

                // Mostrar el resumen actualizado
                resumenCompra = mostrarResumen(detallePedido);
                alert(resumenCompra);
            } else {
                alert("Por favor, ingrese un número válido o 'agregar'.");
            }
        }
    }
} while (agregarOEliminar === "sí" || agregarOEliminar === "si");

// Preguntar si desea realizar la compra
let confirmacion = prompt("¿Desea realizar la compra? (Sí o No)");
confirmacion = confirmacion.toLowerCase();

if (confirmacion === "si" || confirmacion === "sí") {
    alert("¡Gracias por su compra!");
} else {
    alert("Gracias por visitarnos. ¡Hasta luego!");
}
