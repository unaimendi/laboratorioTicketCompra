import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TicketFinal, TipoIva, TotalPorTipoIva } from "./modelo";
import { calcularPrecioConIva, calcularPrecioSinIva } from "./ticketCompra.helpers";

const calcularResultadoLineaTicket = (productos: LineaTicket[]): ResultadoLineaTicket[] => {
	let resultadoLineaTicket: ResultadoLineaTicket[] = [];
	for (let i = 0; i < productos.length; i++) {
		const { producto, cantidad } = productos[i];
		const { nombre, precio, tipoIva } = producto;

		const precioSinIva = calcularPrecioSinIva(precio, cantidad);
		const precioConIva = calcularPrecioConIva(tipoIva, precioSinIva);

		resultadoLineaTicket = [...resultadoLineaTicket, { nombre, cantidad, precioSinIva, tipoIva, precioConIva }];
	}
	return resultadoLineaTicket;
};

const calcularResultadoTotalTicket = (resultadoLineaTicket: ResultadoLineaTicket[]): ResultadoTotalTicket => {
	const totalSinIva = resultadoLineaTicket.reduce((acumulador, linea) => acumulador + linea.precioSinIva, 0);
	const totalConIva = resultadoLineaTicket.reduce((acumulador, linea) => acumulador + linea.precioConIva, 0);
	const totalIva = Number((totalConIva - totalSinIva).toFixed(2));

	return {
		totalSinIva,
		totalConIva,
		totalIva,
	};
};

const calcularTotalPorTipoIva = (resultadoLineaTicket: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
	const tipoIva: TipoIva[] = ["general", "reducido", "superreducidoA", "superreducidoB", "superreducidoC", "sinIva"];
	let totalPorTipoIva: TotalPorTipoIva[] = [];

	for (let i = 0; i < tipoIva.length; i++) {
		const tipoIvaArray = resultadoLineaTicket.filter((linea) => {
			return linea.tipoIva === tipoIva[i];
		});
		if (tipoIvaArray.length > 0) {
			const cantidadTipoIva = tipoIvaArray.reduce((acumulador, producto) => acumulador + (producto.precioConIva - producto.precioSinIva), 0);
			totalPorTipoIva.push({ tipoIva: tipoIva[i], cuantia: Number(cantidadTipoIva.toFixed(2)) });
		}
	}

	return totalPorTipoIva;
};

export const calculaTicket = (productos: LineaTicket[]): TicketFinal => {
	const resultadoLineaTicket = calcularResultadoLineaTicket(productos);
	const resultadoTotalTicket = calcularResultadoTotalTicket(resultadoLineaTicket);
	const totalPorTipoIva = calcularTotalPorTipoIva(resultadoLineaTicket);

	return {
		lineas: resultadoLineaTicket,
		total: resultadoTotalTicket,
		desgloseIva: totalPorTipoIva,
	};
};
