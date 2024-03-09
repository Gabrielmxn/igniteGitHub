import Markdown from "react-markdown";
import styled from "styled-components";



export const ProfileContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${props => props.theme['base-profile']};
  padding: 2rem;
  box-shadow: 0 2px 28px 0 #00000020;
  margin-top: calc(2rem * -2);


  h1 {
    width: 100%;
    margin-top: 1.25rem;
    margin-bottom: .5rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  @media (max-width: 884px){
    flex-direction: column;
    gap: 1rem;
  }
`


export const BodyPostSkeleton = styled.div`
  padding: 2.5rem 2rem;

`

export const BodyPost = styled(Markdown)`
  padding: 2.5rem 2rem;
  img{
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  p{
    margin: 1rem auto;
  }

  a{
    text-decoration: none;
    color: ${props => props.theme['blue']};
    position: relative;
    &::after{
      content: "";
      background-color: ${props => props.theme['blue']};
      width: 0%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 0.4s ease-in-out;
    }
    
    &:hover::after{
      content: "";
      background-color: ${props => props.theme['blue']};
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 0.2s ease-in-out;
    }
  }

  pre {
    padding: 1rem;
    background-color: ${props => props.theme['base-post']};
    width: 100%;
    border-radius: 8px;

    code {
      width: 100%;
    }
  }
`