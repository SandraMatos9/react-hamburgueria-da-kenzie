import './style.js'
import { StyleDivTotal } from './style.js';
import { useState } from 'react';



export function TotalCart({ currentSale, setcurrenSale }) {
    const [cartTotal, setCartTotal] = useState(0)

    const somaTotal = currentSale.reduce((valorAntigo, valorNovo) => (valorAntigo + valorNovo.price), 0)

    function deletarTodosPedidos() {
     
      setcurrenSale([])
    }


    return (

        <>
         


            <StyleDivTotal>
                <div className='divTotalPreco'>
                    <p className='pTotal'>Total</p>
                    <p className='pPreco'>{somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>

                <button className='btnRemoverTodos' onClick={ deletarTodosPedidos }>Remover todos</button>
            </StyleDivTotal>


        </>
    )





}