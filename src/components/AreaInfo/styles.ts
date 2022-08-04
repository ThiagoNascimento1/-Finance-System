import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0 5px #ccc;
  border-radius: 20px;
  margin-top: -40px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  align-item: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
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

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea =styled.div`
  flex: 2;
  display: flex;
`;