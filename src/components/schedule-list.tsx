import { Schedule } from '@/types/Schedule'
import {Button, Card,Title } from '../lib/tremor-components'
import Link from "next/link"
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { deleteSchedule } from '@/services/deleteSchedule'
export function ScheduleCard({name,id}:{id:string|number,name:string}){
    const queryClient = useQueryClient()

    const deleteScheduleMutation = useMutation({
        mutationKey:['deleteScheduleMutation'],
        mutationFn:deleteSchedule
    })


    const handleDelete = () => {
        deleteScheduleMutation.mutate(String(id))
        return queryClient.invalidateQueries()
    }
    return <Card>
        <div className="flex">

            <div className='mr-4'>
        <Title>
            {name}
        </Title>
        </div>
        <div className='flex gap-x-4'>
            <Link href={"/dashboard/"+id}> 
            <Button>
                View
            </Button>
            </Link>
            

            <Link href={"/dashboard"+id+"/edit"}>
            
                <Button>
                    Edit
                </Button>
            </Link>

            <div onClick={handleDelete}>
                <Button loading={deleteScheduleMutation.isPending}>
                    Delete
                </Button>
            </div>
        </div>
        </div>
    </Card>
}

export default function ScheduleList({data,loading}:{loading:boolean,data:Omit<Schedule,'email'|'phone_number'>[]}){
    if(loading) return <h4>Loading...</h4>
    return (<ul className='flex flex-col gap-4'>
         {data.map(schedule => <li> 
           <ScheduleCard id={schedule.id} name={schedule.name}/>
           </li>)}
        
    </ul>)
}