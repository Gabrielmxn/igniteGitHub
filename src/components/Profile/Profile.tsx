import { useContext, useEffect, useState } from "react"
import { api } from "../../utils/axios"
import { Avatar, Description, Footer, HeaderContainer, InfoTest, LinkGithub, ProfileContainer } from "./style";
import { Links } from "../Links";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FooterInfo } from "../Info/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkeletonProfile } from "./SkeletonProfile";
import { InfoContext } from "../../context/RepoInfoContext";



interface GetProfileAxiosTypes {
  avatar_url: string
  name: string
  login: string
  followers: number
  bio: string
  html_url: string
  company: string

}
export function ProfileComponent(){
  const [profile, setProfile] = useState<GetProfileAxiosTypes>({} as GetProfileAxiosTypes)
  const { user } = useContext(InfoContext)

  async function getProfile(){
    setTimeout(async () => {
      const response = await api.get<GetProfileAxiosTypes>(`/users/${user}`)

      setProfile(response.data)
    }, 2000)
    
  }
  useEffect(() => {
    getProfile()
  }, [])
  return(
    <>
    {profile.login ? (  <ProfileContainer>
      <Avatar src={profile.avatar_url} alt="" />
      <InfoTest>
        <HeaderContainer>
          <h1>{profile.name}</h1>
          <LinkGithub>
            <Links label="GITHUB" url={profile.html_url}/>
          </LinkGithub>
          
        </HeaderContainer>
        <Description>{profile.bio}</Description>
        <Footer>
          <FooterInfo>
            <FontAwesomeIcon icon={faGithub} /> 
            <span>{profile.login.toLowerCase()}</span>
          </FooterInfo>
          {profile.company && <FooterInfo>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{profile.company}</span>
          </FooterInfo>}
          <FooterInfo>
            <FontAwesomeIcon icon={faUserGroup} /> 
            <span>{profile.followers} seguidores</span>
          </FooterInfo>
        </Footer>
      </InfoTest>
    </ProfileContainer>) : <SkeletonProfile />}
   </>
  )
}