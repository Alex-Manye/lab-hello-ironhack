import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CardList from './components/CardList';
import './App.css'

/*Ponemos las "rutas"*/
function App() {
  return (
    <div className="App">
      <Navbar className="App-header"></Navbar>
      <Header></Header>
      <CardList></CardList>
    </div>
  );
}

export default App;