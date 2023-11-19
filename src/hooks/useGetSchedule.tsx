import { useQuery } from "@tanstack/react-query"
import { getSchedule } from "@/services/getSchedule"


export function useGetSchedule(query?:string){
    return useQuery({
        queryKey:['getSchedule'],
        queryFn: async ()=> {
            const data = await getSchedule(query)
            return data
        }
    })
}