import { SkeletonInfoPost } from "../../../../../components/InfoPost/Skeleton/SkeletonInfoPost";
import { Skeleton } from "../../../../../components/Profile/style";
import {  BodyPostSkeleton, ProfileContainer } from "../../../style";
import { FooterSkeleton } from "../../Footer/Skeleton/FooterSkeleton";

export function SkeletonPost(){
  return(
   <>
    <ProfileContainer>
      <SkeletonInfoPost />
      <Skeleton width="100%" height="20px" margintop="1rem"/>
      <FooterSkeleton />
    </ProfileContainer>
     <div>
      <BodyPostSkeleton>
        <Skeleton width="100%" height="16px" margintop="0.5rem"/>
        <Skeleton width="90%" height="16px" margintop="0.5rem"/>
        <Skeleton width="80%" height="16px" margintop="0.5rem"/>
        <Skeleton width="100%" height="16px" margintop="2rem"/>
        <Skeleton width="90%" height="16px" margintop="0.5rem"/>
        <Skeleton width="80%" height="16px" margintop="0.5rem"/>
        <Skeleton width="100%" height="16px" margintop="2rem"/>
        <Skeleton width="90%" height="16px" margintop="0.5rem"/>
        <Skeleton width="80%" height="16px" margintop="0.5rem"/>
      </BodyPostSkeleton>
     
    </div>
   </>
  )
}