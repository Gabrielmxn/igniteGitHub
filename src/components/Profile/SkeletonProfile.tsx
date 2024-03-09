import {  AvatarContainer, Description, Footer, HeaderContainer, InfoTest, LinkGithub, ProfileContainer, Skeleton } from "./style";

export function SkeletonProfile(){
  return(
    <ProfileContainer>
      <AvatarContainer>
        <Skeleton width={100} height={100}/>
      </AvatarContainer>
    
      <InfoTest>
        <HeaderContainer>
            <Skeleton width={40} height="20px"/>
          <LinkGithub>
            <Skeleton width={'90'} height="20px"/>
          </LinkGithub>
        </HeaderContainer>
        <Description as="div">
          <Skeleton width={100} height="20px" margintop="1rem"/>
          <Skeleton width={100} height="20px"  margintop="0.5rem"/>
        </Description >
        <Footer>
          <Skeleton width='100' height="20px"/>
          <Skeleton width='100' height="20px"/>
          <Skeleton width='100' height="20px"/>
        </Footer>
      </InfoTest>
    </ProfileContainer>
  )
}