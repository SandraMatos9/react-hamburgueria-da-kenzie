import './style.js'
import { useState } from 'react'
import styled from 'styled-components';


export function CartProduct(){
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    return(
        <liRenderizado>
            <img className='imgRenderizada'></img>
            <div className='divnameCategory'>
                <p className='nameRenderizado'></p>
                <p className='categoryRenderizada'></p>
            </div>
            <button className='btnRenderizado'>Remover</button>
        </liRenderizado>

    )
}