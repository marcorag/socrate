import {  useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Header from './components/Header.component';
// creare componente header e footer
// componente carosello per utenti che hanno già partecipato al corso
function App() {

  const elencoLink = [
    "Home","Corsi","Docenti","Contatti"
]
  const elencoLinkObj = [
    {nomeLink:'Home', urlLink:'/'},
    {nomeLink:'Corsi', urlLink:'/Corsi'},
    {nomeLink:'Docenti', urlLink:'/Docenti'},
    {nomeLink:'Contatti', urlLink:'/Contatii'},
]
  return (
    <div className="container-app">
     <Header testoLogo='Mia Azienda' elencoLink ={elencoLinkObj}/>
      <div className='hero-section'>ree</div>
      
      <footer></footer>
    </div>
  );
}

export default App;
