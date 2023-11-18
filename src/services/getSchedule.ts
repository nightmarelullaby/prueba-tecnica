import { Schedule } from "@/types/Schedule"

export const getSchedule = async (id?:string):Promise<Schedule[] | []> => {
    try{
        const response = await fetch("http://localhost:4000/api/v1/schedule?q="+id,{
            method:"GET"
        })
        const json = await response.json()
        return json as Schedule[]
    }catch(error){
        console.log("Error!")
        return [] as Schedule[]
    }
    return []
    
}