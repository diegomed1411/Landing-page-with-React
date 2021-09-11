import React from "react";
import Tarjeta from "./tarjeta";

const Contenedor_tarjetas = () => {
	return (
		<div className="row mb-5">
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
		</div>
	);
};

export default Contenedor_tarjetas;
