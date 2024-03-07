import { Container, HeaderCard } from "./style";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";


export interface CardsComponent {
  title: string
  description: string
  created_at: string
  number: number
}
export function CardsComponent({title, description, created_at, number}: CardsComponent){
  return(
    <Container href={`/post/${number}`}>
      <HeaderCard>
        <h2>{title}</h2>
        <span>Há {formatDistanceToNowStrict(created_at, {
          locale: ptBR,
        })}</span>
      </HeaderCard>
      <p>{description}</p>
    </Container>
  )
}

//260