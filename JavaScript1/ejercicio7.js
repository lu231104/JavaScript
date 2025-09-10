let productos = [
    { id: 1, nombre: "Laptop", precio: 1200.00, cantidad: 5 },
    { id: 2, nombre: "Mouse", precio: 25.50, cantidad: 20 },
    { id: 3, nombre: "Teclado", precio: 85.99, cantidad: 10 },
    { id: 4, nombre: "Monitor", precio: 199.99, cantidad: 7 },
    { id: 5, nombre: "SSD", precio: 75.00, cantidad: 12 }
];

function mostrar(){
    for(producto in productos){
        prod=productos[producto]
        document.write(`Id:${prod.id}, nombre: ${prod.nombre}, precio: ${prod.precio}, cantidad: ${prod.cantidad}<br>`)
    } 
}

function eliminar(viejo){
    for(i in productos){
        let producto=productos[i];
        if(producto.id===viejo){
            productos.splice(i,1)
        }
    }
}

function agregar(nuevo){
    productos.push(nuevo);
    for(prod in productos){  
        let producto=productos[prod];
        if(producto.id===nuevo.id){            
            document.write(`Id:${producto.id}, nombre: ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidad}<br>`)
        }
    }
}

mostrar()
agregar({ id: 6, nombre: "HDD", precio: 65.00, cantidad: 2 })
eliminar(3);
mostrar()