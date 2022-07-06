import { useState } from 'react';
import './App.css';
import Link from './Link';

function App() {

  const[testStato, setTestStato]=useState(false);
  return (
    <div className="container">
      <header className='header-container'>
        <div className='logo'>Logo</div>
        <nav className='navbar-container'>
          <Link url='http://www.google.com' text='Link 1'></Link>
          <Link url='http://www.google.com' text='Link 2'></Link>
          <Link url='http://www.google.com' text='Link 3'></Link>
        </nav>
      </header>
      <div className='hero-section'></div>
      <footer></footer>
    </div>
  );
}

export default App;
