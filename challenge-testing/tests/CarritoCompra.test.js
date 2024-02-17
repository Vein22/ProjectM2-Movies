const CarritoCompra = require("../index");

describe("Clase CarritoCompra", ()=>{

    it("La clase CarritoCompra debe existir", ()=>{
        expect(CarritoCompra).toBeInstanceOf(Function);
    });

    it("Inicializa productos con un array vacío", ()=>{
        const carrito = new CarritoCompra();
        expect(carrito.productos).toEqual([]);
    });

    it("Agregar un producto al carrito", ()=>{
        const carrito = new CarritoCompra();
        const producto = {nombre: "Producto 1", precio: 10};
        carrito.agregarProducto(producto);
        expect(carrito.productos.length).toBe(1);
        expect(carrito.productos[0]).toBe(producto);
    });

    it("Calcular el total de la compra", ()=>{
        const carrito = new CarritoCompra();
        carrito.agregarProducto({nombre: "Producto 1", precio: 10});
        carrito.agregarProducto({nombre: "Producto 2", precio: 20});
        expect(carrito.calcularTotal()).toBe(30);
    });

    it("Aplicar un descuento a la compra", ()=>{
        const carrito = new CarritoCompra();
        carrito.agregarProducto({nombre: "Producto 1", precio: 100});
        carrito.agregarProducto({nombre: "Producto 2", precio: 200});
        expect(carrito.aplicarDescuento(10)).toBe(270);
    });
});

  
