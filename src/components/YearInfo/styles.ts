import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px 200px;
  box-shadow: 0 0 5px #ccc;
  background-color: #fff;
  border-radius: 20px;
  margin-top: -40px;
  display: flex;
`;

export const YearArrow = styled.div`
  font-size: 22px;
  cursor: pointer;
  color: #fff;
  background-color: darkblue;
  border: 2px solid #000;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YearTitle = styled.div`
  flex: 1;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  color: darkblue;
`;