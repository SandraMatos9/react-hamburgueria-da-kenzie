
import styled from "styled-components";


export const StyledHeader = styled.header`
    width:100%;
    display: flex;
    background: #F5F5F5;
    height: 139px;
    box-sizing: border-box;
    padding: 17px;
    gap: 14px;
    align-items: center;
`

export const StyledDivContainerHeader = styled.div `
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const StyledForm = styled.form `
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    width: 381px;
    height: 60px;
    background: #FFFFFF;
    border: 2px solid #333333;
    border-radius: 8px;

    input{
        border: none;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px 0px 15px;
        background: #FFFFFF;
        border-radius: 8px;

    }
    button{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;
        width: 107px;
        height: 40px;
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;

    }

`
    


// .btnPesquisar:hover{
//     background-color: #93D7AF;
// }

export const StyledLogoBurguer = styled.img `
    margin:10px;

`

// @media(min-width:414px){
//     .StyledHeader{
//         max-width: 1600px;
//         width: 100%;
//     }

//     .StyledDivContainerHeader{
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//         width: 90%;
//     }
// }
