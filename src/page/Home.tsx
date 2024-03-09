import { useEffect } from "react";
import { Profile } from "../components/Profile";
import { Publication } from "../components/Publication";
import { Container } from "./style";


export function Home(){
  useEffect(() => {
    document.title = 'GitHub - Blog'
  }, [])
  return(
   <Container>
    <Profile />
    <Publication />
   </Container>
  )
}