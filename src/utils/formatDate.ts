import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";


export function formatDistanceDate(created_at: string){
  const date = formatDistanceToNowStrict(created_at, {
    locale: ptBR,
  })

  return date
}