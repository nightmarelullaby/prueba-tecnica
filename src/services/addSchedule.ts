import {Schedule} from '../types/Schedule'

export async function createSchedule(body:Partial<Schedule> ){
    const response = await fetch("http://localhost:4000/api/v1/schedule",{
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