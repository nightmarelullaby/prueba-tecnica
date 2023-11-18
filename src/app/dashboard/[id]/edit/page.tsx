"use client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import FormSchedule from '@/components/form-schedule';
import { Button, Text,Title ,TextInput} from '../../../../lib/tremor-components'
import ScheduleInfo from '@/components/schedule-info'
import { useMutation } from '@tanstack/react-query'
import { updateSchedule } from '@/services/updateSchedule';
import { Schedule } from '@/types/Schedule';


export default function DashboardEditSchedule(){
    const router = useRouter()
    const params = useParams()

    const editScheduleMutation = useMutation({
        mutationKey:['editSchedule'],
        mutationFn:async(data)=>{
        const response =  await updateSchedule(data)
        return response
        }
    })

    const handleSubmitForm = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {target} = e
        const formdata = new FormData(target)
        const object = Object.fromEntries(formdata)
        editScheduleMutation.mutate(object)
    }
    
    return <main>
        <FormSchedule onSubmit={handleSubmitForm}/>
    </main>
}