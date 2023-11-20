import {Schedule} from '../types/Schedule'
import { URL } from '@/config';
export async function updateSchedule(body:Partial<Schedule> ){
    try{
        const response = await fetch(URL,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
        if(!response.ok) throw new Error("Something was wrong")
        const json = await response.json()
        return json
    }catch(error){
        throw new Error("Fetch failed")
        
    }
    
}