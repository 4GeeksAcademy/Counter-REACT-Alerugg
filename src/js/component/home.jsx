import React from 'react';
import ReactDOM from 'react-dom/client';
import { startTimer, stopTimer, resetTimer } from './interval';


// Importar el cronómetro



const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Contador</h1>

      
      {/* Botones para el cronómetro */}
      <button className="btn btn-warning start" onClick={() => startTimer()}>Start Counting!</button>
      <button className="btn btn-primary stop" onClick={() => stopTimer()}>Stop Counting</button>
      <button className="btn btn-primary reset" onClick={() => resetTimer()}>Reset Counting</button>

      <div className="container clock">
        <div className="container clockWrapper">
          <span className="card bg-dark text-white weeks">0</span>
          <span className="card bg-dark text-white days">0</span>
          <span className="card bg-dark text-white hours">0</span>
          <span className="card bg-dark text-white minutes">0</span>
          <span className="card bg-dark text-white seconds">0</span>
        </div>
      </div>
    </div>
  );
};

export default Home;




