import { useContext } from "react"
import { InfoContext } from "../context/RepoInfoContext"

export function useContextApiInfoUserAndRepo(){
  const { user, repo } = useContext(InfoContext)
  
  return{
    user, repo 
  }
}