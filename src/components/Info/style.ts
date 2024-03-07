import styled from "styled-components";


export const Footer = styled.footer`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.5rem;

`

export const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme['base-label']};
  }

  span {
    color: ${props => props.theme['base-subtitle']};
  }

`