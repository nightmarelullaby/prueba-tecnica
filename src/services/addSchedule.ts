import {Schedule} from '../types/Schedule'
import { URL } from '@/config'
export async function createSchedule(body:Partial<Schedule> ){

    const response = await fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    if(!response.ok) throw new Error("Something was wrong")
    const json = await response.json()
    return json
}