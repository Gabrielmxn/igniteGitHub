import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "./style"


interface LinksProps {
  label: string
  url: string
}
export function Links({label, url}: LinksProps){
  return(
    <Container href={url}>
      <span>{label}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </Container>
  )
}