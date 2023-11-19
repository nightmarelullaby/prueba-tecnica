"use client";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import FormSchedule from '@/components/form-schedule';
import { useMutation } from '@tanstack/react-query'
import { createSchedule } from '@/services/addSchedule';


export default function DashboardCreateSchedule(){
    const {mutate,error,isError, isPending} = useMutation({
        mutationKey:['editSchedule'],
        mutationFn:createSchedule
    })

    const handleSubmitForm = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {target} = e
        const formdata = new FormData(target)
        const object = Object.fromEntries(formdata)
        mutate(object)
    }
    if(isPending) <p>Loading...</p>
    return <main className="h-full flex items-center justify-center ">
        <FormSchedule isError={isError} error={"Wrong fields"} loading={isPending} onSubmit={handleSubmitForm}/>
    </main>
}