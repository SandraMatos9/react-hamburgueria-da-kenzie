import styled from "styled-components";

export const StyleDivTotal = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 16px;
width: 92%;
height: 122px;
justify-content: center;
align-items: center;
background-color: #F5F5F5;

& .btnRemoverTodos:hover {
  background-color: #828282;
}

& .divTotalPreco {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #F5F5F5;
}

& .pTotal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #333333;
}
& .pPreco {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #828282;
}
& .btnRemoverTodos {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 343px;
  height: 60px;
  background: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  color:  #828282;
;
}
`;