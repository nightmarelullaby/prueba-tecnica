"use client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Button, Text,Title } from '../../../lib/tremor-components'
import ScheduleInfo from '@/components/schedule-info'
import { useQuery,useMutation } from '@tanstack/react-query'
import { getSchedule } from '@/services/getSchedule'
import { deleteSchedule } from '@/services/deleteSchedule';
import Link from 'next/link';
import { Schedule } from '@/types/Schedule';

export default function DashboardId(){
    const router = useRouter()
    const params = useParams()
    const {data,isError,isLoading} = useQuery({
        queryKey:['getSchedule'],
        queryFn:async ()=> {
            const response = await getSchedule(String(params.id))
            return response;
        }
    })
    
    const deleteScheduleMutation = useMutation({
        mutationKey:['editSchedule'],
        mutationFn:deleteSchedule
    })
    if(isError) return <p>There was an error</p>
    if(isLoading) return <p>There was an error</p>
    return <main>
        <ScheduleInfo name={data[0].name} email={data[0].email} phone_number={data[0].phone_number}>
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