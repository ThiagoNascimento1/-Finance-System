import styled from 'styled-components';

export  const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 5px #ccc;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  background-color: #fff;
`;

export const Thead = styled.th`
  padding: 10px 0;
  text-align: center;
  font-size: 22px;
`;

export const TableColumn = styled.td<{color:string | undefined}>`
  padding: 10px 0;
  font-weight: 900;
  text-align: center;
  font-size: 18px;
  color: ${props => props.color};
`;

export const ExtraInfo = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  font-size: 18px;
`;

export const Category = styled.span`
  font-weight: 900;
`;