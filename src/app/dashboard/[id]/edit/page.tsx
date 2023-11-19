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

export default function DashboardEditSchedule(){
    
    const params = useParams()
    const editScheduleMutation = useMutation({
        mutationKey:['editSchedule'],
        mutationFn:updateSchedule
    })
    
    const {data,isError,isLoading} = useQuery({
        queryKey:['getSchedule'],
        queryFn: async ()=> {
            const data = await getSchedule(params.id)
            return data
        },
    })
    const handleSubmitForm = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {target} = e
        const formdata = new FormData(target)
        
        formdata.append("id",String(params.id as string))

        const object = Object.fromEntries(formdata)
    
        return editScheduleMutation.mutate(object)
    }
    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>There was an error</p>
    if(!data) return null;
    console.log(editScheduleMutation.isError)
    return <main className="h-full flex items-center justify-center">
        <FormSchedule isError={editScheduleMutation.isError} error={"Wrong fields"} data={data} onSubmit={handleSubmitForm}/>
    </main>
}