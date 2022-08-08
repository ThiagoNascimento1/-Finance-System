import styled from 'styled-components';

export const Item = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: 900;
  color: #888;
  margin-bottom: 5px;
`;

export const Info = styled.div<{color?: string}>`
  text-align: center;
  font-weight: 900;
  color: ${props => props.color ? props.color : "#000"};
`;