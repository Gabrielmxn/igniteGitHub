import { EffectLeft, EffectRight, HeaderContainer } from "./style";

import logo from '../../assets/Logo.svg'
import effetctRight from '../../assets/effectright.svg'
import effetctLeft from '../../assets/effectleft.svg'
export function HeaderComponent(){
  return(
    <HeaderContainer>
      <img src={logo} alt="Logo"/>
      <EffectLeft>
        <img src={effetctLeft} />
      </EffectLeft>
      <EffectRight>
        <img src={effetctRight} />
      </EffectRight>
    </HeaderContainer>
  )
}