import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "./style"
import { IconProp } from "@fortawesome/fontawesome-svg-core"


interface LinksProps {
  label: string
  url: string
  iconPosition?: 'left' | 'right'
  icon?: IconProp
}
export function Links({label, url, iconPosition = 'right', icon = faArrowUpRightFromSquare}: LinksProps){
  return(
  <>
    {iconPosition === "right" ? (
      <Container to={url}>
        <span>{label}</span>
        <FontAwesomeIcon icon={icon} />
      </Container>
    ) : (  <Container to={url}>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </Container>)}
  
  </>
  )
}