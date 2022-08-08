import styled from 'styled-components';

export const Container = styled.table`
    width: 100%;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
`;

export const Thead = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;

