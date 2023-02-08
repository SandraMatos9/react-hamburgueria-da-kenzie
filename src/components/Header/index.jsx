import './style.js'
import logoBurguer from '../../assets/logoBurguer.svg'
import styled from 'styled-components';
import { StyledHeader } from './style.js';
import { useState } from 'react';




export function Header({currentSale, setCurrentSale, produtos, setSearch}) {

    const [info,setInfo] = useState("")

    function handleSearch(event){
        setSearch(info)

    }

    function handleInfo(event){
        setInfo(event.target.value)

    }



   
    return (
        <StyledHeader>
            <div className='divContainerHeader'>
                <img className="logoBurguer" src={logoBurguer} alt="" />
                <div>
                    <input type="text" placeholder="Digitar pesquisa"  className='pesquisa' onChange={handleInfo} />
                    <button className='btnPesquisar' type='submit' onClick={handleSearch} >Pesquisar</button>
                </div>
            </div>

        </StyledHeader>
    )




}