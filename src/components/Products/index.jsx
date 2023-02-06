import App from '../../App'
import { ProductList } from '../ProductsList'
import { api } from '../services/api'
import './style.js'
import styled from 'styled-components';
import { StyledBtnAdicionar, StyledDivImagem, StyledLiCard, StyledPCategoria, StyledPImgPedido, StyledpNomePedido, StyledPPrecoPedido } from './style.js';


export function Products({ produto }) {

    
    return (
        <StyledLiCard>
            <StyledDivImagem>
                <StyledPImgPedido>{produto.img}</StyledPImgPedido>
            </StyledDivImagem>
            <StyledpNomePedido>{produto.name}</StyledpNomePedido>
            <StyledPCategoria>{produto.category}</StyledPCategoria>
            <StyledPPrecoPedido>{produto.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</StyledPPrecoPedido>
            <StyledBtnAdicionar>Adicionar</StyledBtnAdicionar>
        </StyledLiCard>

    )
}