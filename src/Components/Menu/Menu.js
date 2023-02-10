import './Menu.css';
import React from 'react';

export default function Menu (props){

    const handleChangePeso = (event) => {
        let peso = Number(event.target.value);
        props.changePeso(peso);
    }

    const handleChangeVenda = event => {
        let preco = Number(event.target.value);
        props.changeVenda(preco);
    };

    const handleChangeCusto = event => {
        let custo = Number(event.target.value);
        props.changeCusto(custo);
    }

    const handleChangeImposto = event => {
        let stringImposto = event.target.value;
        //user will make this input in percentage format (like 10%), 
        //this line is to remove the % sign and dividing it to 100 so the result would have this format: 0.10:
        let imposto = Number(stringImposto.slice(0, -1)) / 100; 
        props.changeImposto(imposto);
    }

    const handleClickAnuncio = event => {
        let tipo = event.target.value;
        props.changeTipo(tipo);
        
    }

    return(
        <div id="Menu">
            <fieldset class="ctn">
                <legend>Tipo de Anúncio</legend>
                <form onClick={handleClickAnuncio}>
                    <input type="radio" name="tipoAnuncio" value="normal"/>Clássico
                    <input type="radio" name="tipoAnuncio" value="premium"/>Premium
                </form>
            </fieldset>
            <form id="inputs" class="ctn">
                <legend>Preço de Venda</legend>
                <input onChange={handleChangeVenda} type="number" placeholder="Digite o valor de venda"/>
                <legend>Preço de Custo</legend>
                <input onChange={handleChangeCusto} type="number" placeholder='Custo do produto'/>
                <legend>Imposto de Venda</legend>
                <input onChange={handleChangeImposto} type="text" placeholder='Digite nesse formato: 10%'/>
                <legend>Peso do Produto (em Kg)</legend>
                <input onChange={handleChangePeso} type="number" placeholder='Peso do produto em quilos'/>
                
            </form>
            
            
            
        </div>
    );
}