import { PostComponent, PostComponentProps } from "./PostComponent";

export function PostPage(props: PostComponentProps){
  return(
    <PostComponent {...props} />
  )
}