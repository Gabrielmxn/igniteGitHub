import { useParams } from "react-router-dom";
import { PostPage } from "./Component/PostComponent";



export function PostContainer(){
  const { id } = useParams();


  return( 
    <PostPage id={id}/>
  )
}