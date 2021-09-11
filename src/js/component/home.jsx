import React from "react";
import Cuerpo from "./cuerpo";
import Cabecera from "./cabecera";
import Pie from "./pie";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<Cabecera />
			<Cuerpo />
			<Pie />
		</div>
	);
};

export default Home;
