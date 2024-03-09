import styled from "styled-components";

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