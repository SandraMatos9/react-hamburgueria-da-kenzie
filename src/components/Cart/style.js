import styled from "styled-components";

export const StyledDivCart = styled.div`
  width: 365px;
  margin-left: 16px;
  background-color:  #F5F5F5;
  height: 258px;

  & .divSacolaVazia{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #333333;
  }

  & .pAdicioneItens{
    color: #828282;

  }

  & .pTotal {
    font-family: "Inter";
  }

  & .pCart {
    width: 365px;
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    align-items: flex-start;
    padding: 22px;
    box-sizing: border-box;
    margin: 0;
    margin-top: 20px;

  }

  & .ulCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 10px;
    gap: 21px;
    width: 100%;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;


export const StyledPSacolaVazia = styled.p`
  font-family: "Inter";
  text-align: center;
  font-size: 18px;
`;

export const StyledPAdicioneItens = styled.p`
  font-family: "Inter";
  text-align: center;
  font-size: 12px;
  color: #828282;
`;
