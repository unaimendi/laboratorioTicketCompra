import { TipoIva } from "./modelo";

export const calcularPrecioSinIva = (precio: number, cantidad: number): number => {
	if (!precio || !cantidad) {
		throw new Error("No has introducido los argumentos correctamente");
	}

	return precio * cantidad;
};

export const calcularPrecioConIva = (tipoIva: TipoIva, precio: number): number => {
	if (!tipoIva || !precio) {
		throw new Error("No has introducido los argumentos correctamente");
	}
	let precioConIva: number = 0;
	switch (tipoIva) {
		case "general":
			precioConIva = precio * 1.21;
			break;
		case "reducido":
			precioConIva = precio * 1.1;
			break;
		case "superreducidoA":
			precioConIva = precio * 1.05;
			break;
		case "superreducidoB":
			precioConIva = precio * 1.04;
			break;
		case "superreducidoC" || "sinIva":
			precioConIva = precio;
			break;
		default:
			throw new Error("El tipo de IVA introducido no es correcto");
	}
	return precioConIva;
};
