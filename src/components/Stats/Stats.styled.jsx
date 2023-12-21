import styled from "styled-components";

export const StatsList = styled.ul`
    display: flex;
    border-top: 1px solid grey;
`;

export const Item = styled.li`
    flex-basis: calc(100% / 3);
    text-align: center;
    padding: 20px 0;
    &:not(:last-child) {
        border-right: 1px solid grey;
    }
`;

export const Label = styled.span`
    display: block;
    color: grey;
    margin-bottom: 6px;
`;

export const Quantity = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 700;
`;