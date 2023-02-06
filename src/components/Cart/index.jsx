import { CartProduct } from '../CartProduct'
import './style.js'
import styled from 'styled-components';


export function Cart() {

    return (
        <div className='divCart'>
            <p className='pCart'>Carrinho de compras</p>

                {/* {
                    filteredProducts.length === 0 ? (
                        <>
                            <p className='pSacolaVazia'>Sua sacola está vazia</p>
                            <p className='pAdicioneItens'>Adicione itens</p>

                        </>

                    ) : (
                        <ul className='ulCart'>
                            {
                                listTransactions.map((dados, index) => {
                                    return (
                                        <li key={index} className="liCard">
                                            <CartProduct />


                                        </li>

                                    )

                                })
                            }
                        </ul>
                    )} */}







        </div>
    )
}