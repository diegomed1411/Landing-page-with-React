import React from "react";
import Contenedor_tarjetas from "./contenedor_tarjetas";
import Jumbotron from "./jumbotron";

const Cuerpo = () => {
	return (
		<div className="container">
			<Jumbotron />
			<Contenedor_tarjetas />
		</div>
	);
};

export default Cuerpo;
