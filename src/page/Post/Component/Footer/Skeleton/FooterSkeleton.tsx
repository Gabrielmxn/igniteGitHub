import { Skeleton } from "../../../../../components/Profile/style";
import { Footer } from "../../../style";


export function FooterSkeleton(){
  return(
    <Footer>
      <Skeleton width="100" height="20px" margintop="1rem"/>
      <Skeleton width="100" height="20px" margintop="1rem"/>
      <Skeleton width="100" height="20px" margintop="1rem"/>
    </Footer> 
  )
}