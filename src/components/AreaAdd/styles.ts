import styled from 'styled-components';

export const Form = styled.form`
box-shadow: 0 0 5px #ccc;
border-radius: 20px;
margin-top: 20px;
padding: 20px;
background-color: #fff;
display: flex;
align-item: center;
`;

export const Label = styled.label`
  flex: 1;
  font-size: 20px;
  font-weigth: bold;
  display: flex;
  flex-direction: column;

  input.date {
    border: 1px solid #ccc;
    padding: 5px;
    font-size; 20px;
  }
`;