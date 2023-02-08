import { Products } from '../Products'
import { api } from '../services/api'
import './style.js'
import { Cart } from '../Cart/index.jsx'
import { CartProduct } from '../CartProduct'
import styled from 'styled-components';
import { StyledDivContainer } from './style.js'



export function ProductList({ produtos, handleClick, search }) {

    function getProducts() {
        const products = produtos.filter(produto => produto.name.toLowerCase().includes(search.toLowerCase()))
        console.table(products, produtos)
        console.log(search)

        return products

    }
    return (


        <>
            {/* <p className='pResults'>Resultados para:</p> */}

            <StyledDivContainer>

                <ul className='ulCard'>

                    {getProducts().map(produto => (

                        <Products produto={produto} key={produto.id} handleClick={handleClick} />
                    ))}

                </ul>
            </StyledDivContainer>
        </>

    )
}