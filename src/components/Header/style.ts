import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${props => props.theme['base-profile']};
  height: 296px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const EffectLeft = styled.span`
  position: absolute;
  top: 70px;
  left: 0;

  @media (max-width: 887px) {
    display: none;
    width: 0px;
    height: 0px;
  }
`

export const EffectRight = styled.span`
  position: absolute;
  top: 30px;
  right: 0;

  
  @media (max-width: 887px) {
    display: none;
    width: 0px;
    height: 0px;
  }
`