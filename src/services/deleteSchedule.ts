import {Schedule} from '../types/Schedule'

export async function deleteSchedule(id?:string):Promise<Schedule>{
    let url = `http://localhost:4000/api/v1/schedule/${id}`;

    const response = await fetch(url,{
        method:"DELETE",
    })
    if(!response.ok) throw new Error("Something was wrong")
    const json = await response.json()
    return json
}