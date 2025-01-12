import styled from 'styled-components'

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 10px;
    &:hover {
    color: ${({ theme }) => theme.colors.primary};
  } 
`