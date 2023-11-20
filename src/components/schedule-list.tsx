import { Schedule } from '@/types/Schedule'
import {Button, Card,Title,Text } from '../lib/tremor-components'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useDeleteSchedule } from '@/hooks/useDeleteSchedule'
import { deleteSchedule } from '@/services/deleteSchedule'

export function ScheduleCard({name,id}:{id?:string,name:string}){
    const router = useRouter()
    const deleteSchedule = useDeleteSchedule()

    const handleDelete = () => {
        deleteSchedule.mutate(id,{
            onError: (error, variables, context) => {
                return;
              }
        })
        return window.location.href = "/dashboard"
    }
    return <Card className='w-[600px]'>
        <div className="flex items-center">

            <div className='mr-4'>
        <Title style={{textOverflow:"ellipsis",overflow:"hidden",width:"20ch"}}>
            {name}
        </Title>
        </div>
        <div className='flex gap-x-1 ml-auto'>
            <Link href={"/dashboard/"+id}> 
            <Button>
                View
            </Button>
            </Link>
            
                <Button onClick={() => {
                    router.refresh()
                    router.push("/dashboard/"+id+"/edit")

                    }}>
                    Edit
                </Button>

            <div onClick={handleDelete}>
                <Button color="red" loading={deleteSchedule.isPending}>
                    Delete
                </Button>
            </div>
        </div>
        </div>
    </Card>
}

export default function ScheduleList({data,loading}:{loading:boolean,data?:Schedule[]|[]}){
    if(!data) return null;
    if(!Array(data)) return null;
    if(loading) return <h4>Loading...</h4>

    return (<ul className='flex flex-col gap-1'>
         {data.map(schedule => <li> 
           <ScheduleCard id={schedule.id} name={schedule.name}/>
           </li>)}
        
    </ul>)
}