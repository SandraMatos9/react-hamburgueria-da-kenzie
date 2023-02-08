import styled from "styled-components";

export const StyledLiCard = styled.li`
  box-sizing: border-box;
  width: 300px;
  height: 346px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  & p.pNomePedido {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin-left: 21px;
  }

  & p.pCategoria {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
    margin-left: 21px;
  }
  & p.pPrecoPedido {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #27ae60;
    margin-left: 21px;
  }

  & button.btnAdicionar {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    width: 106px;
    height: 40px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    margin-left: 21px;
    color: #ffffff;
  }

  & button:hover.btnAdicionar {
    background-color: #93d7af;
  }
`;

export const StyledDivImagem = styled.div`
  background: #f5f5f5;
  align-items: center;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  img {
    width: 150px;
    height: 150px;
  }
`;
