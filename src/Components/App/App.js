import './App.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Table from '../Table/Table';



function App() {

  const [tipo, setTipo] = useState('normal');
  const changeTipo = newTipo => setTipo(newTipo);

  const [peso, setPeso] = useState(0);
  const changePeso = newPeso => setPeso(newPeso);


  const [preco, setPreco] = useState(0);
  const changeVenda = newPreco => setPreco(newPreco);

  const [custo, setCusto] = useState(0);
  const changeCusto = newCusto => setCusto(newCusto);

  const [imposto, setImposto] = useState(0);
  const changeImposto = newImposto => setImposto(newImposto);
 

  return (
    <div id="App">
      <Header />
      <main>
        <Menu changeTipo={changeTipo} changePeso={changePeso} changeVenda={changeVenda} changeCusto={changeCusto} changeImposto={changeImposto}/>
        <Table tipo={tipo} peso={peso} preco={preco} custo={custo} imposto={imposto}/>
      </main>
      
    </div>
  );
}

export default App;
