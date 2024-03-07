import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Info } from "../../components/Info";
import { Links } from "../../components/Links";
import { Back, Footer, Navegation, ProfileContainer } from "./style";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../style";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../utils/axios";

interface ParamsType {
  id: string
}
export function PostContainer(){
  const { id } = useParams();
  console.log(id)

  async function getIssuesById(){
    const test = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${20}`)

    console.log(test.data)
  }
  useEffect(() => {
    getIssuesById()
  }, [id])
  return( 
    <Container>
    
    <ProfileContainer>
          <Navegation>
            <Back>
                <Links label="VOLTAR" url="/" icon={faChevronLeft} iconPosition="left"/>
            </Back>
            <Links label="VER NO GITHUB" url="#" />
          </Navegation>
          <h1>JavaScript data types and data structures</h1>
          <Footer>
            <Info icon={faGithub} description="cameronwll"/>
            <Info icon={faCalendar} description="Há 1 dia"/>
            <Info icon={faComment} description="5 comentários"/>
          </Footer> 
      </ProfileContainer>
      <div>

      </div>
    </Container>
  )
}