import { Schedule } from "@/types/Schedule"

export const getSchedule = async (id?:string |string[] | undefined | null):Promise<Schedule[] | []> => {
    let url = `http://localhost:4000/api/v1/schedule`;
    if(id) url = `http://localhost:4000/api/v1/schedule?q=${id}`;

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