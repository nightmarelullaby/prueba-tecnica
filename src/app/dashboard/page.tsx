"use client"
import { Button, TextInput,Card, Title } from '../../lib/tremor-components'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getSchedule } from '@/services/getSchedule'
import ScheduleList from '@/components/schedule-list'
import { Schedule } from '@/types/Schedule'

export default function Home(){
    const {data,isError,isLoading} = useQuery({
        queryKey:['getSchedule'],
        queryFn: async ()=> {
            const data = await getSchedule()
            return data
        }
    })
    if(isError) return <Title>there was an error</Title>
    return <main className="flex items-center justify-center bg-gray-100 h-full">

        <div className="m-x-10 h-full">
        <div className="mb-4 flex gap-x-4">
            <TextInput />
            <Link href="/dashboard/create" prefetch={false}>
                <Button>New</Button>
            </Link>
        </div>
            <ScheduleList data={data as Omit<Schedule,'email'|'phone_number'>[]} loading={isLoading}/> 
        </div>
    </main>
}