import styled from 'styled-components';

export const TableData = styled.td`
    text-align: center;
    text-transform: ${props => {
        if (props.type) return 'capitalize';
        if (props.currency) return 'uppercase';
    }};
`;
