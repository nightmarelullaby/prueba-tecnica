"use client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Schedule } from '@/types/Schedule';
import FormSchedule from '@/components/form-schedule';
import { useMutation } from '@tanstack/react-query'
import { updateSchedule } from '@/services/updateSchedule';
import { ScheduleEntity } from '@/app/entity/schedule';

export default function DashboardEditSchedule(){
    const params = useParams()
    const editScheduleMutation = useMutation({
        mutationKey:['editSchedule'],
        mutationFn:updateSchedule
    })

    const handleSubmitForm = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {target} = e
        const formdata = new FormData(target)
        
        formdata.append("id",String(params.id as string))

        const object = Object.fromEntries(formdata)
    
        return editScheduleMutation.mutate(object)
    }
    
    return <main>
        <FormSchedule onSubmit={handleSubmitForm}/>
    </main>
}