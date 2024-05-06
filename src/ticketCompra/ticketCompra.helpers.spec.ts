import { TipoIva } from "./modelo";
import { calcularPrecioConIva, calcularPrecioSinIva } from "./ticketCompra.helpers";

describe("calcularPrecioSinIva", () => {
	it('Si le pasamos argumentos undefined tiene que dar un error "No has introducido los argumentos correctamente"', () => {
		// Arrange
		const precio: any = undefined;
		const cantidad: any = undefined;

		// Act
		const resultado = () => calcularPrecioSinIva(precio, cantidad);

		// Assert
		expect(resultado).toThrowError("No has introducido los argumentos correctamente");
	});

	it('Si le pasamos argumentos null tiene que dar un error "No has introducido los argumentos correctamente"', () => {
		// Arrange
		const precio: any = null;
		const cantidad: any = null;

		// Act
		const resultado = () => calcularPrecioSinIva(precio, cantidad);

		// Assert
		expect(resultado).toThrowError("No has introducido los argumentos correctamente");
	});

	it('Si le pasamos argumentos "" tiene que dar un error "No has introducido los argumentos correctamente"', () => {
		// Arrange
		const precio: any = "";
		const cantidad: any = "";

		// Act
		const resultado = () => calcularPrecioSinIva(precio, cantidad);

		// Assert
		expect(resultado).toThrowError("No has introducido los argumentos correctamente");
	});

	it("Si le pasamos precio = 2 y cantidad = 3 tiene que devolver 6", () => {
		// Arrange
		const precio: number = 2;
		const cantidad: number = 3;

		// Act
		const resultado = calcularPrecioSinIva(precio, cantidad);

		// Assert
		expect(resultado).toEqual(6);
	});
});

describe("calcularIva", () => {
	it('Si le pasamos argumentos undefined tiene que dar un error "No has introducido los argumentos correctamente"', () => {
		// Arrange
		const tipoIva: any = undefined;
		const precio: any = undefined;

		// Act
		const resultado = () => calcularPrecioConIva(tipoIva, precio);

		// Assert
		expect(resultado).toThrowError("No has introducido los argumentos correctamente");
	});

	it('Si le pasamos argumentos null tiene que dar un error "No has introducido los argumentos correctamente"', () => {
		// Arrange
		const tipoIva: any = null;
		const precio: any = null;

		// Act
		const resultado = () => calcularPrecioConIva(tipoIva, precio);

		// Assert
		expect(resultado).toThrowError("No has introducido los argumentos correctamente");
	});

	it('Si le pasamos argumentos "" tiene que dar un error "No has introducido los argumentos correctamente"', () => {
		// Arrange
		const tipoIva: any = "";
		const precio: any = "";

		// Act
		const resultado = () => calcularPrecioConIva(tipoIva, precio);

		// Assert
		expect(resultado).toThrowError("No has introducido los argumentos correctamente");
	});

	it("Si le pasamos tipoIva general y precio = 20 tiene que devolver 24.2", () => {
		// Arrange
		const tipoIva: TipoIva = "general";
		const precio: number = 20;

		// Act
		const resultado = calcularPrecioConIva(tipoIva, precio);

		// Assert
		expect(resultado).toEqual(24.2);
	});
});
