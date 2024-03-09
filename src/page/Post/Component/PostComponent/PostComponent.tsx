import { useEffect, useState } from "react";
import { Container } from "../../../style";
import { BodyPost } from "../../style";
import { InfoIssue } from "../InfoIssue";
import "prismjs/themes/prism-tomorrow.css"
import { useContextApiInfoUserAndRepo } from "../../../../hook/useContextApiInfoUserAndRepo";
import { api } from "../../../../utils/axios";
import { highlightAll } from "prismjs";
import { SkeletonPost } from "./SkeletonPost";


interface PostType {
  title: string
  comments: number
  created_at: string
  body: string
  user: {
    login: string
  }
}
export interface PostComponentProps {
  id: string | undefined
}
export function PostComponent({ id }: PostComponentProps){
  const [post, setPost] = useState<PostType>({

  } as PostType)
  const {user, repo} = useContextApiInfoUserAndRepo()

  async function getIssuesById(){
    setTimeout(async () => {
      const response = await api.get<PostType>(`/repos/${user}/${repo}/issues/${id}`)
    document.title = response.data.title
    setPost(response.data)
    }, 4000)
  }

  useEffect(() => {
    highlightAll();
  }, [post])

  useEffect(() => {
    getIssuesById()
  }, [id])

  return(
    <Container>
    
    {post.title ? (
      <>
        <InfoIssue 
          title={post.title}
          login={post.user.login}
          comments={post.comments}
          created_at={post.created_at}
        />
        <div>
            <BodyPost>{post.body}</BodyPost>
        </div>
      </>
    ) : <>
      <SkeletonPost/>
    </>}
    </Container>
  )
}