import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Interval } from "./interval";
import { Counter } from "./counter";
import { Interval2 } from "./interval2";
import { Stop } from "./interval";
import { Timer } from "./interval";

//  QUEDA PENDIENTE ARREGLAR LOS ONCLICK PARA QUE CUANDO PULSAS NO SE VUELVA A ACTIVAR LA FUNCION ONCLICK Y QUE SOLO SE EJECUTE UNA VEZ, O MIENTRAS ESTA ACTIVADA, 
// SOLO SE PUEDA REACTIVAR SI SE PARA CON EL BOTON DE STOP Y QUEREMOS VOLVERLA A EJECUTAR PARA REANUDAR LA PAUSA, AVERIGUAR COMO PAUSAR UN SETINTERVAL...
// PDTE AÑADIR LOGICA DE CRONOMETRO EN PAUSA, CRONOMETRO A 0 CON RESET, BOTON DE CRONOMETRO REANUDAR 

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5 esteH1">Hello Rigo!</h1>
			<div className="container clock">
				<div className="container clockWrapper2">
					<span className=" card bg-dark text-white weeks2"></span>
					<span className=" card bg-dark text-white days2"></span>
					<span className=" card bg-dark text-white hours2"></span>
					<span className=" card bg-dark text-white minutes2"></span>
					<span className=" card bg-dark text-white seconds2"></span>
				</div>
			</div>
			<button className="btn btn-warning" onClick={() => Timer()} >Start Counting!</button>
			<button className="btn btn-primary" onClick={() => Stop()} >Stop Counting</button>
			<button className="btn btn-primary">Reset Counting</button>


			<div className="container clock">
				<div className="container clockWrapper">
					<span className=" card bg-dark text-white weeks"></span>
					<span className=" card bg-dark text-white days"></span>
					<span className=" card bg-dark text-white hours"></span>
					<span className=" card bg-dark text-white minutes"></span>
					<span className=" card bg-dark text-white seconds"></span>
				</div>
			</div>
			</div>
		
	);
};

export default Home;


