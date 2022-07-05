import {  useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Card from './Card';

function App() {
  const ANNO_CORRENTE = '2022';
  const mioNome = 'Marco';
  const mioCognome = 'Ragusa';
  const[testStato, setTestStato]=useState(false);
  return (
    <div className="App">
      <Counter></Counter>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to . 
          {(testStato) && <Card nomePersona = {mioNome} cognomePersona = {mioCognome} />}
          
        </p>
        <button onClick={()=>setTestStato(!testStato)}>cambia colore</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
