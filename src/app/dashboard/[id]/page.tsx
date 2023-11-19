"use client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Button, Text,Title } from '../../../lib/tremor-components'
import ScheduleInfo from '@/components/schedule-info'
import { useQuery,useMutation, useQueryClient } from '@tanstack/react-query'
import { getSchedule } from '@/services/getSchedule'
import { deleteSchedule } from '@/services/deleteSchedule';
import Link from 'next/link';

export default function DashboardId(){
    const params = useParams()
    const {data,isError,isLoading} = useQuery({
        queryKey:['getSchedule'],
        queryFn:async ()=> {
            const response = await getSchedule(String(params.id))
            return response;
        }
    })
    
    const deleteScheduleMutation = useMutation({
        mutationKey:['deleteMutation'],
        mutationFn:deleteSchedule
    })
    if(isLoading) return <p>Loading...</p>
    if(!data) return null
    if(isError) return <p>There was an error</p>

    return <main className='flex items-center justify-center h-full'>
        <ScheduleInfo name={data[0].name} email={data[0].email} phone_number={data[0].phone_number}>
            <div className="flex gap-1 mt-4">
            <Link href={`/dashboard`} prefetch={false}>
                <Button>Back</Button>
            </Link>
            <Link href={`/dashboard/${params.id}/edit`} prefetch={false}>
                <Button>Edit</Button>
            </Link>
            <div onClick={()=>deleteScheduleMutation.mutate(params.id as string)}>
                <Button color="red">Delete</Button>
            </div>
            </div>
        </ScheduleInfo>
    </main>
}