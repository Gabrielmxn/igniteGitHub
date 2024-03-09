import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Info } from "../../../../components/Info";
import { Footer } from "../../style";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { formatDistanceDate } from "../../../../utils/formatDate";

export interface FooterComponentProps {
  login: string
  date: string
  comments: number
}
export function FooterComponent({login, date, comments}: FooterComponentProps){
  return(
    <Footer>
      <Info icon={faGithub} description={login}/>
      <Info icon={faCalendar} description={`Há ${formatDistanceDate(date)}`}/>
      <Info icon={faComment} description={`${comments} comentários`}/>
    </Footer> 
  )
}