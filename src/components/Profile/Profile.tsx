import { useEffect, useState } from "react"
import { api } from "../../utils/axios"
import { Avatar, Description, Footer, FooterInfo, HeaderContainer, ProfileContainer } from "./style";
import { Links } from "../Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const USER = 'gabrielmxn';

interface GetProfileAxiosTypes {
  avatar_url: string
  name: string
  login: string
  followers: number
  bio: string
  html_url: string

}
export function ProfileComponent(){
  const [profile, setProfile] = useState<GetProfileAxiosTypes>({} as GetProfileAxiosTypes)

  async function getProfile(){
    const response = await api.get<GetProfileAxiosTypes>(`/users/${USER}`)

    setProfile(response.data)
  }
  useEffect(() => {
    getProfile()
  }, [])
  return(
    <>
   {profile.login && (  <ProfileContainer>
      <Avatar src={profile.avatar_url} alt="" />
      <div>
        <HeaderContainer>
          <h1>{profile.name}</h1>
          <Links label="GITHUB" url={profile.html_url}/>
        </HeaderContainer>
        <Description>{profile.bio}</Description>
        <Footer>
          <FooterInfo>
            <FontAwesomeIcon icon={faGithub} /> 
            <span>{profile.login.toLowerCase()}</span>
          </FooterInfo>
          <FooterInfo>
            <FontAwesomeIcon icon={faBuilding} />
            <span>CEPEL</span>
          </FooterInfo>
          <FooterInfo>
            <FontAwesomeIcon icon={faUserGroup} /> 
            <span>{profile.followers} seguidores</span>
          </FooterInfo>
        </Footer>
      </div>
    </ProfileContainer>)}
   </>
  )
}