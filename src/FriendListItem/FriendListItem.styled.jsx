import styled from 'styled-components';

export const Status = styled.span`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => {
        switch (props.isOnline) {
            case true:
                return '#00a857';
            default:
                return '#bd2000';
        }
    }};
`;

export const Avatar = styled.img`
    width: 54px;
    height: 54px;
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 18px;
`;
