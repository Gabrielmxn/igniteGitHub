import styled from "styled-components";

export const Container = styled.a`
    text-decoration: none;
    color: ${props => props.theme['base-text']};
    max-height: 260px;
    height: 100%;
    padding: calc(2rem - 2px);
    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;
    border: 2px solid transparent; 
    cursor: pointer;
    overflow: hidden;
    &:hover {
      border: 2px solid ${props => props.theme['base-label']};
      transition: border ease-in 0.2s;
    }

    p {

      display: block; 
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

 
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1.25rem;


  h2 {
    font-size: 1.25rem;
    max-width: 260px;
    width: 100%;
    line-height: 160%;
    padding: 0;
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
  }

  
`