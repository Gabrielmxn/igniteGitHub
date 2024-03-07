import { Description, Footer, HeaderContainer, InfoTest, ProfileContainer, Skeleton } from "./style";

export function SkeletonProfile(){
  return(
    <ProfileContainer>
    <Skeleton width="148px" height="148px"/>
      <InfoTest>
        <HeaderContainer>
          <h1>
            <Skeleton width="200px" height="20px"/>
          </h1>
          <Skeleton width="60px" height="20px"/>
        </HeaderContainer>
        <Description>
          <Skeleton width="400px" height="20px"/>
          <Skeleton width="400px" height="20px"/>
        </Description>
        <Footer>
          <Skeleton width="80px" height="20px"/>
          <Skeleton width="80px" height="20px"/>
          <Skeleton width="80px" height="20px"/>
        </Footer>
      </InfoTest>
    </ProfileContainer>
  )
}