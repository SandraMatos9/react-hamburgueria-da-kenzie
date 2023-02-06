import App from '../../App'
import { Products } from '../Products'
import { api } from '../services/api'
import './style.js'
import {Cart} from '../Cart/index.jsx'
import { CartProduct } from '../CartProduct'
import styled from 'styled-components';



export function ProductList({produtos}) {


    return (

        <>

            {/* <p className='pResults'>Resultados para:</p> */}
        
            <div className='divContainer'>
                <ul className='ulCard'>
                    {produtos.map(produto => (


                        <Products produto ={produto} key={produto.id} />
                    ))}

                </ul>
            </div>
        </>

    )
}