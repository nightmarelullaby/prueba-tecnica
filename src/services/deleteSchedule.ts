import {Schedule} from '../types/Schedule'
import { URL } from '@/config';
export async function deleteSchedule(id?:string):Promise<Schedule>{

    const response = await fetch(URL,{
        method:"DELETE",
    })
    if(!response.ok) throw new Error("Something was wrong")
    const json = await response.json()
    return json
}