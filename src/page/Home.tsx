import { Profile } from "../components/Profile";
import { Publication } from "../components/Publication";
import { Container } from "./style";


export function Home(){
  return(
   <Container>
    <Profile />
    <Publication />
   </Container>
  )
}