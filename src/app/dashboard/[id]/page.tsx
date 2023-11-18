"use client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Button, Text,Title } from '../../../lib/tremor-components'
import ScheduleInfo from '@/components/schedule-info'
import { useQuery,useMutation } from '@tanstack/react-query'
import { getSchedule } from '@/services/getSchedule'
import { deleteSchedule } from '@/services/deleteSchedule';
import Link from 'next/link';

export default function DashboardId(){
    const router = useRouter()
    const params = useParams()
    const {data,isError,isLoading} = useQuery({
        queryKey:['getSchedule'],
        queryFn: ()=> getSchedule(Number(params.id))
    })
    
    const deleteScheduleMutation = useMutation({
        mutationKey:['editSchedule'],
        mutationFn:deleteSchedule
    })
    console.log(data)
    return <main>
        <ScheduleInfo name={'juan'} email={'jose@gmail.com'} phone_number={"123343"}>
            <div className="flex gap-4">
            <Link href={`/dasboard`} prefetch={false}>
                <Button>Back</Button>
            </Link>
            <Link href={`/dashboard/${params.id}/edit`}>
                <Button>Edit</Button>
            </Link>
            <div onClick={()=>deleteScheduleMutation.mutate(Number(params.id))}>
                <Button>Delete</Button>
            </div>
            </div>
        </ScheduleInfo>
    </main>
}