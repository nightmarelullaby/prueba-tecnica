import { Schedule } from "@/types/Schedule"
import { URL } from '@/config';

export const getSchedule = async (id?:string |string[] | undefined | null):Promise<Schedule[] | []> => {
    let url = URL;
    if(id) url = `${URL}?q=${id}`;

    try{
        const response = await fetch(url,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"GET"
        })
        if(!response.ok) throw new Error("Something was wrong")
        const json = await response.json()
        return json as Schedule[]
    }catch(error){
        console.log("Error!")
        return [] as []
    }
    
}