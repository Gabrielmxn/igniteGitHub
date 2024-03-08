import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Info } from "../../components/Info";
import { Links } from "../../components/Links";
import { Back, BodyPost, Footer, Navegation, ProfileContainer } from "./style";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../style";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
import { useContextApiInfoUserAndRepo } from "../../hook/useContextApiInfoUserAndRepo";
import Markdown from "react-markdown";
import { highlightAll } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { formatDistanceDate } from "../../utils/formatDate";

interface ParamsType {
  id: string
}
interface PostType {
  title: string
  comments: number
  created_at: string
  body: string
  user: {
    login: string
  }
}
export function PostContainer(){
  const [post, setPost] = useState<PostType>({

  } as PostType)
  const {user, repo} = useContextApiInfoUserAndRepo()
  const { id } = useParams();
  console.log(id)

  async function getIssuesById(){
    const response = await api.get<PostType>(`/repos/${user}/${repo}/issues/${id}`)
    console.log(response.data)
    setPost(response.data)
  }

  useEffect(() => {
    highlightAll();
  }, [post])

  useEffect(() => {
    getIssuesById()
  }, [id])
  return( 
    <Container>
    
    {!!post.title && (
      <>
       <ProfileContainer>
       <Navegation>
         <Back>
             <Links label="VOLTAR" url="/" icon={faChevronLeft} iconPosition="left"/>
         </Back>
         <Links label="VER NO GITHUB" url="#" />
       </Navegation>
       <h1>{post?.title}</h1>
       <Footer>
         <Info icon={faGithub} description={post.user.login}/>
         <Info icon={faCalendar} description={`Há ${formatDistanceDate(post.created_at)}`}/>
         <Info icon={faComment} description={`${post.comments} comentários`}/>
       </Footer> 
   </ProfileContainer>
   <div>
      <BodyPost>{post.body}</BodyPost>
   </div>
      </>
    )}
    </Container>
  )
}