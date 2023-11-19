"use client";
import FormSchedule from '@/components/form-schedule';
import { useCreateSchedule } from '@/hooks/useCreateSchedule';

export default function DashboardCreateSchedule(){

    const createSchedule = useCreateSchedule()
    const handleSubmitForm = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {target} = e
        const formdata = new FormData(target)
        const object = Object.fromEntries(formdata)
        createSchedule.mutate(object)
    }
    if(createSchedule.isPending) <p>Loading...</p>
    return <main className="h-full flex items-center justify-center ">
        <FormSchedule isError={createSchedule.isError} error={"Wrong fields"} loading={createSchedule.isPending} onSubmit={handleSubmitForm}/>
    </main>
}