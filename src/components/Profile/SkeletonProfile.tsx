import { Description, Footer, HeaderContainer, InfoTest, LinkGithub, ProfileContainer, Skeleton } from "./style";

export function SkeletonProfile(){
  return(
    <ProfileContainer>
    <Skeleton width="148px" height="148px"/>
      <InfoTest>
        <HeaderContainer>
          <h1>
            <Skeleton width="200px" height="20px"/>
          </h1>
          <LinkGithub>
            <Skeleton width="60px" height="20px"/>
          </LinkGithub>
        </HeaderContainer>
        <Description as="div">
          <Skeleton width="400px" height="20px" margintop="1rem"/>
          <Skeleton width="400px" height="20px"  margintop="0.5rem"/>
        </Description >
        <Footer>
          <Skeleton width="80px" height="20px"/>
          <Skeleton width="80px" height="20px"/>
          <Skeleton width="80px" height="20px"/>
        </Footer>
      </InfoTest>
    </ProfileContainer>
  )
}