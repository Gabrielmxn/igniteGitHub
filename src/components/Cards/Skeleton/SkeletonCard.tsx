import { Skeleton } from "../../Profile/style";
import { Container, HeaderCard } from "../style";


interface SkeletonCardProps {
  quant: number
}
export function SkeletonCard({quant}: SkeletonCardProps){
  return(
    <>
    {Array.from({length: quant}).map((_, index) => {
      return(
        <Container key={index}>
        <HeaderCard>
          <div>
            <Skeleton width='100' height="20px"/>
            <Skeleton width='100' height="20px" margintop="1rem"/>
          </div>
          <Skeleton width="40" height="20px"/>
        </HeaderCard>
        <Skeleton width={100} height="100px"/>
     
      </Container>
      )
    })}
   
    
    </>
  )
}