import React from "react";
import { PropTypes } from "prop-types";


let i = 0; // Inicializamos los segundos
let m = 0; // Inicializamos los minutos
let h = 0;
let d = 0;
let w = 0
let start;
let reset


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

const Timer = () => { 
    
  start = setInterval(() => {
  Interval(); 
}, 1000);

}

const Stop = () => {

  clearInterval(start)
  
  }



  // const Reset = () => {
  //   clearInterval(start); 
  
 
  //   i = 0;
  //   m = 0;
  //   h = 0;
  //   d = 0;
  //   w = 0;

  //   document.querySelector(".seconds").textContent = '00';
  //   document.querySelector(".minutes").textContent = '00';
  //   document.querySelector(".hours").textContent = '00';
  //   document.querySelector(".days").textContent = '00';
  //   document.querySelector(".weeks").textContent = '00';
    
  // };

  export { Interval, Stop, Timer }



