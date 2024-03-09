import { Skeleton } from "../../Profile/style"
import { Container, HeaderInfo, InfoPublicationNumber, InputSearch } from "../style"


export function SkeletonPublicationComponent(){
  return(
    <Container>
        <HeaderInfo>
          <h2>Publicações</h2>
          <InfoPublicationNumber>
            <Skeleton height="24px" width="24" /> 
            <span>publicações</span>
          </InfoPublicationNumber>
        </HeaderInfo>
        <form >
          <InputSearch disabled type="text" placeholder="Buscar conteúdo"/>
        </form>
      </Container>
  )
}