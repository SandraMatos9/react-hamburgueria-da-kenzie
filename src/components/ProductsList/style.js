import styled from "styled-components";

export const StyledDivContainer = styled.div`
  max-width: 1036px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;

  & ul.ulCard {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 20px;
    overflow: scroll;
    background-color:  #F5F5F5;
  }

  @media (min-width: 800px) {
    .ulCard {
      flex-wrap: wrap;
      display: flex;
      width: 100%;
      overflow: none;
      flex-wrap: wrap;
      flex-direction: column;
    }

    .StyledDivContainer {
      display: flex;
      align-items: center;
    }
  }
`;

// .pResults{
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 26px;
//     line-height: 34px;
//     color: #333333;
// }
