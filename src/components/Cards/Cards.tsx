import { Container, HeaderCard } from "./style";
import { formatDistanceDate } from "../../utils/formatDate";


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
        <span>Há {formatDistanceDate(created_at)}</span>
      </HeaderCard>
      <p>{description}</p>
    </Container>
  )
}

//260