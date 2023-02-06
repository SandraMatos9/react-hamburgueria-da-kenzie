import './style.js'
import logoBurguer from '../../assets/logoBurguer.svg'
import styled from 'styled-components';


export function Header(){


    return(
        <header>
            <div className='divContainerHeader'>
                <img className ="logoBurguer" src = {logoBurguer} alt="" />
                <form >
                    <input type="text" placeholder="Digitar pesquisa" className='pesquisa' /> 
                    <button className='btnPesquisar' type='submit'>Pesquisar</button>
                </form>
            </div>
           
        </header>
    )
         
       

       
}