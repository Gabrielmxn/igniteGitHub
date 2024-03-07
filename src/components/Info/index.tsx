import { InfoContainer, InfoContainerType } from "./Info";

export function Info({icon, description}: InfoContainerType){
  return(
    <InfoContainer icon={icon} description={description}/>
  )
}