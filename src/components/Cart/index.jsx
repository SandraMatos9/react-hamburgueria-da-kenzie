import { CartProduct } from '../CartProduct';
import './style.js';
import styled from 'styled-components';
import { StyledDivCart } from './style.js';
import { TotalCart } from '../TotalCart';


export function Cart({ currentSale, setcurrenSale }) {


   

    return (
        <StyledDivCart>

            <p className='pCart'>Carrinho de compras</p>

            {
                currentSale.length === 0 ? (
                    <div className='divSacolaVazia'>
                        <p className='pSacolaVazia'>Sua sacola está vazia</p>
                        <p className='pAdicioneItens'>Adicione itens</p>

                    </div>

                ) : (
                <>
                 <ul className='ulCart'>
                        {
                            currentSale.map((dados, index) => {
                                
                                return (
                                    <li key={index} className="liCard">
                                        <CartProduct dados={dados} currentSale={currentSale} setcurrenSale={setcurrenSale} />


                                    </li>

                                )

                            })
                        }

                    </ul>
                    <TotalCart currentSale={currentSale} setcurrenSale={setcurrenSale}/>

                
                </>
                   
                )}


        </StyledDivCart>
    )
}