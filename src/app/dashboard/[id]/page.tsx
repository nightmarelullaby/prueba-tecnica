"use client";
import { useParams } from 'next/navigation'
import { Button,  } from '../../../lib/tremor-components'
import ScheduleInfo from '@/components/schedule-info'
import Link from 'next/link';
import { useGetSchedule } from '@/hooks/useGetSchedule';
import { useEditSchedule } from '@/hooks/useEditSchedule';
import { Schedule } from '@/types/Schedule';
import { useDeleteSchedule } from '@/hooks/useDeleteSchedule';

export default function DashboardId(){
    const params = useParams()
    const deleteSchedule = useDeleteSchedule()
    const getSchedule = useGetSchedule(String(params.id))
    
 
    if(getSchedule.isLoading) return <p>Loading...</p>
    if(!getSchedule.data) return null
    if(getSchedule.isError) return <p>There was an error</p>

    return <main className='flex items-center justify-center h-full'>
        <ScheduleInfo name={getSchedule.data[0].name} email={getSchedule.data[0].email} phone_number={getSchedule.data[0].phone_number}>
            <div className="flex gap-1 mt-4">
            <Link href={`/dashboard`} prefetch={false}>
                <Button>Back</Button>
            </Link>
            <Link href={`/dashboard/${params.id}/edit`} prefetch={false}>
                <Button>Edit</Button>
            </Link>
            <div onClick={()=>{
                deleteSchedule.mutate(params.id as string)
                return window.location.href="/dashboard"
                }}>
                <Button color="red">Delete</Button>
            </div>
            </div>
        </ScheduleInfo>
    </main>
}