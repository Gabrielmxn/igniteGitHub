import { InfoPost } from "../../../../components/InfoPost";
import { ProfileContainer } from "../../style";
import { Footer } from "../Footer";

export interface InfoIssueComponentProps {
  title: string
  login: string
  comments: number
  created_at: string
}
export function InfoIssueComponent({title, login, comments, created_at}: InfoIssueComponentProps){
  return(
    <ProfileContainer>
      <InfoPost />
      <h1>{title}</h1>
      <Footer 
        login={login}
        comments={comments}
        date={created_at}
      />
    </ProfileContainer>
  )
}