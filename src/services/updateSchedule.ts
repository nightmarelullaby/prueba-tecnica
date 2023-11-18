import {Schedule} from '../types/Schedule'

export async function updateSchedule(body:Schedule|unknown){
    const response = await fetch("http://localhost:4000/api/v1/schedule",{
        method:"POST",
        body:JSON.stringify(body)
    })
    const json = response.json()
    return json
}