import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.primary};
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({theme})=>theme.colors.secondary};
    }   
`;