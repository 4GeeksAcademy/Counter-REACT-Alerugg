import React from "react";
import { PropTypes } from "prop-types";


let i = 0; // Inicializamos los segundos
let m = 0; // Inicializamos los minutos
let h = 0;
let d = 0;
let w = 0

const Interval = () => {

  
  document.querySelector(".seconds").textContent = i < 10 ? '0' + i : i;
  document.querySelector(".minutes").textContent = m < 10 ? '0' + m : m;
  document.querySelector(".hours").textContent = h < 10 ? '0' + h : h;
  document.querySelector(".days").textContent = d < 10 ? '0' + d : d;
  document.querySelector(".weeks").textContent = w < 10 ? '0' + w : w;

 
  i++;


  if (i === 60) {
    i = 0; 
    m++;   
  }

  if (m === 60) {
    m = 0;
    h++;
  }

  if (h === 24) {
    h = 0;
    d++;
  }

  if (d === 7) {
    d = 0;
    w++;
  }


}

const Timer = () => { setInterval(() => {
  Interval(); 
}, 1000);

}



const Stop = () => {

  clearInterval(Timer)
  
  }













export { Interval, Stop, Timer }


// function SecondsCounter() {
//   const counterElement = document.createElement('h1');
//   document.body.appendChild(counterElement);

//   let seconds = 0;

//   function updateCounter() {
//     seconds++;
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//     counterElement.textContent = `Tiempo transcurrido: ${formattedTime}`;
//   }

//   // Iniciar el contador cuando la página se carga
//   window.addEventListener('load', function() {
//     setInterval(updateCounter, 1000);
//   });
// }

// // Crear el contador
// SecondsCounter();


