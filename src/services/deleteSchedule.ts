import {Schedule} from '../types/Schedule'
import { URL } from '@/config';
export async function deleteSchedule(id?:string):Promise<Schedule>{
    let url = URL;
    if(id) url = `${URL}/${id}`;
    const response = await fetch(url,{
        method:"DELETE",
    })
    if(!response.ok) throw new Error("Something was wrong")
    const json = await response.json()
    return json
}