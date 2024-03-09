import { useEffect, useState } from "react";
import { Cards } from "../Cards";
import { CardsContainer, Container, HeaderInfo, InputSearch } from "./style";
import { api } from "../../utils/axios";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextApiInfoUserAndRepo } from "../../hook/useContextApiInfoUserAndRepo";
import { SkeletonPublication } from "./SkeletonPublication";
import { SkeletonCard } from "../Cards/Skeleton/SkeletonCard";


// interface RepositoryType {
//   id: number
//   name: string
//   open_issues_count: number
// }
interface PostsType {
  title: string
  body: string
  created_at: string
  number: number
}

interface AxiosPostsType {
  items: PostsType[]
  total_count: number
}

const schema = z.object({
  query: z.string()
});

export function PublicationComponent(){

  const {user, repo} = useContextApiInfoUserAndRepo()
  const { register, getValues  } = useForm({
    resolver: zodResolver(schema),
  });
  const [posts, setPosts] = useState<AxiosPostsType>({
    items: [],
    total_count: 0
  })

  async function getPosts(){
    const query = getValues('query') ? `${getValues('query')} ` : ' '
   try{
    setTimeout(async () => {
      const response = await api.get<AxiosPostsType>(`/search/issues?q=${query}repo:${user}/${repo}`)
      if(response.data.total_count > 0){
        setPosts(response.data)
      }
    }, 2000)
   }catch(error){
    console.log(error)
   }
  }

  // async function getRepositorys(){
  //   const response = await api.get<RepositoryType[]>(`/users/${user}/repos`)
  //   const repository = response.data.filter(response => response.open_issues_count > 0).map(repo => {
  //     return {
  //       id: repo.id,
  //       name: repo.name,
  //       open_issues_count: repo.open_issues_count
  //     }
  //   })
  // }
  useEffect(() => {
    getPosts()
    //getRepositorys()
  }, [])
  return(
    <>
    {posts.total_count > 0 ? 
      <>
      <Container>
        <HeaderInfo>
          <h2>Publicações</h2>
          <span>{posts.total_count} publicações</span>
        </HeaderInfo>
        <form >
          <InputSearch {...register('query', {
             onChange: (e) => getPosts(e)
          })} type="text" placeholder="Buscar conteúdo"/>
        </form>
      </Container>
      <CardsContainer>
      {posts.items.map(response => {
       
        return(
          <Cards 
            key={response.number}
            number={response.number}
            description={response.body}
            title={response.title}
            created_at={response.created_at}
          />
        )
      })}
    </CardsContainer>
      
      </>
        : <>
          <SkeletonPublication />
          <CardsContainer>
            <SkeletonCard quant={4}/>
          </CardsContainer>
        </>
        
        }
    </>
  )
}