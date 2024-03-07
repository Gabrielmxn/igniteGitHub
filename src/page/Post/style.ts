import styled from "styled-components";



export const ProfileContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${props => props.theme['base-profile']};
  padding: 2rem;
  box-shadow: 0 2px 28px 0 #00000020;
  margin-top: calc(2rem * -2);


  h1 {
    width: 100%;
    margin-top: 1.25rem;
    margin-bottom: .5rem;
  }
`

export const Navegation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`


export const Footer = styled.footer`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;

`

export const Back = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme['blue']};
  font-weight: 700;
`