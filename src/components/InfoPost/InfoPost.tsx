import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Links } from "../Links";
import { Navegation } from "./style";


export function InfoPostComponent(){
  return(
    <Navegation>
      <Links label="VOLTAR" url="/" icon={faChevronLeft} iconPosition="left"/>
      <Links label="VER NO GITHUB" url="#" />
    </Navegation>
  )
}