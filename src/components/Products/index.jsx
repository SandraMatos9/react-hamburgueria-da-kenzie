
import { ProductList } from '../ProductsList'
import { api } from '../services/api'
import './style.js'
import styled from 'styled-components';
import { StyledDivImagem, StyledLiCard } from './style.js';
import { useState } from 'react';


export function Products({ produto, handleClick }) {



    return (
        <StyledLiCard>
            <StyledDivImagem>
                <img src={produto.img}></img>
            </StyledDivImagem>
            <p className='pNomePedido'>{produto.name}</p>
            <p className='pCategoria'>{produto.category}</p>
            <p className='pPrecoPedido'>{produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button onClick={() => { handleClick(produto) }} className='btnAdicionar'>Adicionar</button>
        </StyledLiCard>

    )
}
