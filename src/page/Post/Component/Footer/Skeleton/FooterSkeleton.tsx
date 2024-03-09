import { Skeleton } from "../../../../../components/Profile/style";
import { Footer } from "../../../style";


export function FooterSkeleton(){
  return(
    <Footer>
      <Skeleton width="100px" height="20px" margintop="1rem"/>
      <Skeleton width="100px" height="20px"/>
      <Skeleton width="100px" height="20px"/>
    </Footer> 
  )
}