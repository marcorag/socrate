import {  useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {

  const mioNome = 'Marco';
  const mioCognome = 'Ragusa';
  const[testStato, setTestStato]=useState(false);
  return (
    <div className="container">
      <header className='header-container'>
        <div className='logo'>Logo</div>
        <nav className='navbar-container'>
          <a href=''>Link 1</a>
          <a href=''>link 2</a>
          <a href=''>link 3</a>
        </nav>
      </header>
      <div className='hero-section'></div>
      <footer></footer>
    </div>
  );
}

export default App;
