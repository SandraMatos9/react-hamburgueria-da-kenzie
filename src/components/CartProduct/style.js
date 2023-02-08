
import styled from "styled-components";

export const StyledUlRenderizado = styled.ul`
list-style: none;
`
export const StyledLiRenderizado = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px ;
  height: 80px;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  list-style: none;
  width: 100%;

  & .imgRenderizada {
    width: 70px;
    height: 70px;
    background-color: #E0E0E0;
  }

  & .divnameCategory {
    display: flex;
    flex-direction: column;
  }

  & .nameRenderizado {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  & .categoryRenderizada {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }

  & .btnRenderizado {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #bdbdbd;
    border: none;
  }
`;
