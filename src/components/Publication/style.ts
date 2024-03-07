import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const InputSearch = styled.input`
  width: 100%;
  padding: .75rem 1rem;
  border-radius: 6px;
  background-color: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-border']};
  color: ${props => props.theme['base-label']};
  margin-top: .75rem;

  &::placeholder{
    color: ${props => props.theme['base-label']};
  }
`


export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`