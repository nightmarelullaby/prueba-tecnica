import {Schedule} from '../types/Schedule'

export async function deleteSchedule(id:string):Promise<Schedule>{
    const response = await fetch("http://localhost:4000/api/v1/schedule?q="+id,{
        method:"DELETE",
    })
    const json = await response.json()
    return json
}