import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer, FooterInfo } from "./style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface InfoContainerType {
  icon: IconProp
  description: string
}
export function InfoContainer({icon, description}: InfoContainerType){
  return(
    <FooterInfo>
      <FontAwesomeIcon icon={icon} /> 
      <span>{description}</span>
    </FooterInfo>  
  )
}