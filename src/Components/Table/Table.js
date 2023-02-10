import './Table.css';
import React from 'react';

export default function Table (props) {

    const defineComissao = () => {
        let tipo = props.tipo;
        if(tipo === 'normal'){
            return 0.13
        } else{
            return 0.18
        }
    };

    const calculaFrete = () => {
        // An array containing the minimun weight param to calculate freight cost:
        const min = [0, 0.3, 0.5, 1, 2, 5, 9, 13, 17, 23, 30];

        // An array containing the maximun weight param to calculate freight cost:
        const max = [0.3, 0.5, 1, 2, 5, 9, 13, 17, 23, 30, 1000];

        // An array with the freight cost for products between min and max params
        // so, for example, the freight cost of a product with a weight betwween min[0] and max[0] is valor[0]
        const valor = [18, 18.5, 20.5, 21.5, 26.5, 39, 61, 68, 79.5, 91.5, 101.5]

        //loop to check which range of weight the product fits in and apply the corresponding freight cost
        for(let i = 0; i < valor.length; i++){
            if(props.peso > min[i] && props.peso <= max[i]){
                return valor[i]
            }
        }
    };

    const defineFrete = () => {
        let preco = props.preco;
        if(preco < 79){
            return 5.5
        } else {
            return calculaFrete();
        }
    };

    const defineSaldo = () => {
        let venda = props.preco;
        let custo = props.custo;
        let frete = defineFrete();
        let comissao = defineComissao();
        let imposto = props.imposto;
        let saldo = (venda - (venda * (comissao + imposto)) - custo - frete);
        return saldo;
    };

    return(
        <div id="table">
            
            <table border="1" id="results">
                <thead>
                    <tr>
                        <th>Natureza</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Preço de Venda</td>
                        <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.preco)}</td>
                    </tr>
                    <tr>
                        <td>Imposto sobre Venda </td>
                        <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.imposto * props.preco)}</td>
                    </tr>
                    <tr>
                        <td>Comissão </td>
                        <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(defineComissao() * props.preco)}</td>
                    </tr>
                    <tr>
                        <td>Frete </td>
                        <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(defineFrete())}</td>
                    </tr>
                    <tr>
                        <td>Custo</td> 
                        <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.custo)}</td>
                    </tr>
                    <tr>
                        <td>Líquido</td> 
                        <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(defineSaldo())}</td>
                    </tr>
                    <tr>
                        <td>Margem sobre Venda</td>
                        <td>{
                        Number(defineSaldo() / props.preco).toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2})
                        }</td>
                    </tr>
                    <tr>
                        <td>Margem sobre Custo</td>
                        <td>{Number(defineSaldo() / props.custo).toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2})}</td>
                    </tr>
                </tbody>
                
                
            </table>
            
        </div>
    )
};