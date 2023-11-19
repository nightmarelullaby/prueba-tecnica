"use client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Schedule } from '@/types/Schedule';
import FormSchedule from '@/components/form-schedule';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query'
import { updateSchedule } from '@/services/updateSchedule';
import { ScheduleEntity } from '@/app/entity/schedule';
import { getSchedule } from '@/services/getSchedule';
import { useEffect } from 'react';
import { useEditSchedule } from '@/hooks/useEditSchedule';
import { useGetSchedule } from '@/hooks/useGetSchedule';

export default function DashboardEditSchedule(){
    const params = useParams()
    const editSchedule = useEditSchedule()
    const getSchedule = useGetSchedule(String(params.id))


    const handleSubmitForm = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {target} = e
        const formdata = new FormData(target)
        
        formdata.append("id",String(params.id as string))

        const object = Object.fromEntries(formdata)
    
        return editSchedule.mutate(object)
    }
    if(getSchedule.isLoading) return <p>Loading...</p>
    if(getSchedule.isError) return <p>There was an error</p>
    if(!getSchedule.data) return null;
    return <main className="h-full flex items-center justify-center">
        <FormSchedule isError={editSchedule.isError} error={"Wrong fields"} data={data} onSubmit={handleSubmitForm}/>
    </main>
}