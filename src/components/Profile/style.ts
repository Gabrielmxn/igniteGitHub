import styled from "styled-components";


export const ProfileContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${props => props.theme['base-profile']};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  box-shadow: 0 2px 28px 0 #00000020;
  margin-top: calc(2rem * -2);
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  object-fit: contain;

`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;


  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
  }
`

export const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  font-size: 1rem;
  line-height: 160%;
  font-weight: 400;
`

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