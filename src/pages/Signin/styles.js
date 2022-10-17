import styled from "styled-components";

export const changePass = styled.div`
  padding: right;
  color: blue;
  cursor: pointer;

`;

export const box = styled.div`
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 30px;
  padding: 0 30px;
  border-radius: 30px;
  background-color: ${(props) => props.active===true?"#FF6953": "#676767"}
`;

export const RadioButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Small = styled.div`
    font-size: 10px;
    font-weight: 200;
    color: #FF6953;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #f0f2f5;
  max-width: 550px;
  padding: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;