import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Cards } from "../Cards";
import { CardsContainer, Container, HeaderInfo, InputSearch } from "./style";
import { api } from "../../utils/axios";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const USER = 'rocketseat-education'
const REPO = 'reactjs-github-blog-challenge'
interface RepositoryType {
  id: number
  name: string
  open_issues_count: number
}
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
  const { register, handleSubmit, getValues  } = useForm({
    resolver: zodResolver(schema),
  });
  const [posts, setPosts] = useState<AxiosPostsType>({
    items: [],
    total_count: 0
  })


  async function getPosts(event?: ChangeEvent){
    const query = `${getValues('query')} ` || ' '
   try{
    const response = await api.get<AxiosPostsType>(`/search/issues?q=${query}repo:${USER}/${REPO}`)
    console.log(response.data.items[0].body.slice(0,200))
    setPosts(response.data)
   }catch(error){
    console.log(error)
   }
  }

  async function getRepositorys(){
    const response = await api.get<RepositoryType[]>(`/users/${USER}/repos`)
    const repository = response.data.filter(response => response.open_issues_count > 0).map(repo => {
      return {
        id: repo.id,
        name: repo.name,
        open_issues_count: repo.open_issues_count
      }
    })

  
    console.log(repository)
  }
  useEffect(() => {
    getPosts()
    getRepositorys()
  }, [])
  return(
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
        {posts.total_count > 0 && posts.items.map(response => {
         
          return(
            <Cards 
              key={response.title}
              number={response.number}
              description={response.body}
              title={response.title}
              created_at={response.created_at}
            />
          )
        })}

        
      </CardsContainer>
    </>
  )
}