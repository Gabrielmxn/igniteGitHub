import { ReactNode, createContext } from "react"

interface RepoInfoContextProps {
  children: ReactNode
}
interface InfoContextProps {
  user: string
  repo: string
}
export const InfoContext = createContext<InfoContextProps>({} as InfoContextProps)

export function RepoInfoContext({children}: RepoInfoContextProps){
  const user = 'gabrielmxn'
  const repo = 'igniteGithub'

  return(
    <InfoContext.Provider value={{
      user, repo
    }}>
      {children}
    </InfoContext.Provider>
  )
}