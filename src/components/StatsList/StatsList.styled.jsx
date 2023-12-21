import styled from "styled-components";
import { random } from "utils";

export const List = styled.ul`
    display: flex;
`

export const ItemStyle = styled.li`
    flex-basis: calc(100% / 5);
    color: white;
    background-color: ${random};
    text-align: center;
    padding: 10px 0;
`;