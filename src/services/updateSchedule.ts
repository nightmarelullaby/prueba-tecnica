import {Schedule} from '../types/Schedule'

export async function updateSchedule(body:Partial<Schedule> ){
    try{
        const response = await fetch("http://localhost:4000/api/v1/schedule/",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
        const json = await response.json()
        console.log(json)
        return json
    }catch(error){
        console.log(error,"xdd")
        throw new Error("Fetch failed")
        
    }
    
}