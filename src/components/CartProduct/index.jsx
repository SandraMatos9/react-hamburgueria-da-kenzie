import './style.js'
import { useState } from 'react'
import styled from 'styled-components';
import { StyledLiRenderizado} from './style.js';



export function CartProduct({ dados, currentSale,setcurrenSale }) {
    console.log(currentSale)
    console.log(dados)
    function deletarPedido(dados) {
        const arrayFilter = currentSale.filter((item) => {
            return item.id !== dados.id

        })
    setcurrenSale(arrayFilter)
    }

    return (
        
            <StyledLiRenderizado>
                <img className='imgRenderizada' src={dados.img} ></img>
                <div className='divnameCategory'>
                    <p className='nameRenderizado'>{dados.name}</p>
                    <p className='categoryRenderizada'>{dados.category}</p>
                </div>
                <button className='btnRenderizado' onClick={() => { deletarPedido(dados) }}>Remover</button>
            </StyledLiRenderizado>


    )


}