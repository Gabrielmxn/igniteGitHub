import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Navegation } from "../style";
import { Links } from "../../Links";
import { Skeleton } from "../../Profile/style";

export function SkeletonInfoPost(){
  return(
    <Navegation>
      <Links label="VOLTAR" url="/" icon={faChevronLeft} iconPosition="left"/>
      <Skeleton width="100px" height="20px"/>
    </Navegation>
  )
}