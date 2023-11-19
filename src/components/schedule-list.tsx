import { Schedule } from '@/types/Schedule'
import {Button, Card,Title } from '../lib/tremor-components'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { deleteSchedule } from '@/services/deleteSchedule'
export function ScheduleCard({name,id}:{id:string,name:string}){
    const queryClient = useQueryClient()
    const router = useRouter()

    const deleteScheduleMutation = useMutation({
        mutationKey:['deleteScheduleMutation'],
        mutationFn:deleteSchedule
    })


    const handleDelete = () => {
        deleteScheduleMutation.mutate(id)
        queryClient.invalidateQueries()
        return window.location.reload()
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
            
{/* 
            <Link 
                href={"/dashboard/[id]/edit"} 
                as={"/dashboard/"+id+"/edit"} prefetch={false}> */}
                <Button onClick={() => {
                    router.refresh()
                    router.push("/dashboard/"+id+"/edit")

                    }}>
                    Edit
                </Button>
            {/* </Link> */}

            <div onClick={handleDelete}>
                <Button color="red" loading={deleteScheduleMutation.isPending}>
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
           <ScheduleCard id={schedule.id as string} name={schedule.name}/>
           </li>)}
        
    </ul>)
}