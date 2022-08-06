import styled from 'styled-components';

export const Form = styled.div`
box-shadow: 0 0 5px #ccc;
border-radius: 20px;
margin-top: 20px;
padding: 20px;
background-color: #fff;
display: flex;
align-item: center;
justify-content: space-around;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weigth: bold;
  display: flex;
  flex-direction: column;
  padding: 
`;

export const Date = styled.input`
  border: 1px solid #000;
  padding: 5px;
  width: 125px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const Category = styled.select`
  width: 125px;
  padding: 6px;
  text-align: center;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  margin-top: 5px;
`;

export const Description = styled.input`
  width: 125px;
  padding: 5px;
  font-size: 15px;
  background-color: #ccc;
  margin-top: 5px;
`;

export const Value = styled.input`
  
  width: 80px;
  padding: 5px 10px;
  font-size: 15px;
  background-color: #ccc;
  margin-top: 5px;
  text-align: right;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
}
`;

export const Button = styled.button`
  align-self: center;
  display: block;
  width: 120px;
  height: 40px;
  cursor: pointer;
  background-color: darkblue;
  color: #fff;
  font-weight: 900;
  font-size: 15px;
  border-radius: 10px;
`;