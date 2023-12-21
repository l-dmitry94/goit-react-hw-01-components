import styled from 'styled-components';

export const Head = styled.thead`
    background-color: blue;
`;

export const HeadItem = styled.th`
    text-transform: uppercase;
    padding: 10px 0;
`;

export const TableRow = styled.tr`
    &:nth-of-type(odd) {
        background-color: white;
    }

    &:nth-of-type(even) {
        background-color: #768f76;
    }
`;
