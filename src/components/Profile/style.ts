import styled from "styled-components";



export const ProfileContainer = styled.main`
  position: relative;
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${props => props.theme['base-profile']};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  box-shadow: 0 2px 28px 0 #00000020;
  margin-top: calc(2rem * -2);

  @media (max-width: 884px){
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const AvatarContainer = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 8px;


  @media (max-width: 884px){
    width: 64px;
    height: 64px;
  }

`

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: contain;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;


  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
  }
`

export const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  font-size: 1rem;
  line-height: 160%;
  font-weight: 400;
`

export const LinkGithub = styled.div`

  @media (max-width: 884px){
    position: absolute;
    top: 4px;
    right: 8px;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  @media (max-width: 884px){
    flex-direction: column;
    gap: 0.5rem;
  }

`

export const InfoTest = styled.div`
  width: 100%;
  flex: 1;
`

interface SkeletonProps {
  width: number | string
  height: number | string
  margintop?: string
}
export const Skeleton = styled.div<SkeletonProps>`
  background-color: ${props => props.theme['blue']};
  width: ${props => typeof props.width === 'number' ? props.width + '%' : `${props.width}px`};
  height: ${props => typeof props.height === 'number' ? props.height + '%' : `${props.height}`};
  margin-top: ${props => `${props.margintop}`};
  border-radius: 4px;
  animation: pulse 2s ease-in-out infinite;
  @keyframes pulse {
    0%{
      opacity: 1;
    }

    50%{
      opacity: 0.6;
    }
  }
`