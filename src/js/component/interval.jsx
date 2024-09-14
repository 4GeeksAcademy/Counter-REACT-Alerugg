// Timer.js
import React from 'react';

let totalSeconds = 0;
let intervalId;

const UpdateDisplay = () => {

  

  const d1 = Math.floor(totalSeconds % 10);
  const d2 = Math.floor((totalSeconds / 10) % 10);
  const d3 = Math.floor((totalSeconds / 100) % 10);
  const d4 = Math.floor((totalSeconds / 1000) % 10);
  const d5 = Math.floor((totalSeconds / 10000) % 10);
  const d6 = Math.floor((totalSeconds / 100000) % 10);


  if (document.querySelector(".seconds")) document.querySelector(".seconds").textContent = d1;
  if (document.querySelector(".minutes")) document.querySelector(".minutes").textContent = d2;
  if (document.querySelector(".hours")) document.querySelector(".hours").textContent = d3;
  if (document.querySelector(".days")) document.querySelector(".days").textContent = d4;
  if (document.querySelector(".weeks")) document.querySelector(".weeks").textContent = d5;
};

const Interval = () => {
  totalSeconds++;
  UpdateDisplay();
};

const startTimer = () => {
  if (!intervalId) {
    intervalId = setInterval(Interval, 1000); 
  }
};

const stopTimer = () => {
  clearInterval(intervalId); 
  intervalId = null;
};

const resetTimer = () => {
  clearInterval(intervalId); 
  intervalId = null;
  totalSeconds = 0;
  UpdateDisplay(); 
};



export { startTimer, stopTimer, resetTimer, UpdateDisplay };











