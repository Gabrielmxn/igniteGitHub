import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)`
  color: ${props => props.theme['blue']};
  text-decoration: none;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;

  &::before{
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 0%;
    height: 1px;
    background-color: ${props => props.theme['blue']};
  }
  &:hover::before{
    position: absolute;
    transition: all ease-in 0.2s;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme['blue']};
  }
`