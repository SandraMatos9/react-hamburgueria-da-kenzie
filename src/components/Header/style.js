import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  height: 139px;

  & .divContainerHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    width: 95%;
    max-width: 1000px;

    & div {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px 0px 15px;
      height: 60px;
      background: #ffffff;
      border: 2px solid #333333;
      border-radius: 8px;

      & input.pesquisa {
        border: none;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px 0px 15px;
        background: #ffffff;
        border-radius: 8px;
      }

      & button.btnPesquisar {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;
        width: 107px;
        height: 40px;
        background: #27ae60;
        border: 2px solid #27ae60;
        border-radius: 8px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
      }

      & button:hover.btnPesquisar {
        background-color: #93d7af;
      }
    }
  }

  @media (min-width: 700px) {
    .divContainerHeader {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
