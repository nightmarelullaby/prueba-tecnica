"use client"
import { Button, TextInput,Text,Card, Title } from '../../lib/tremor-components'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getSchedule } from '@/services/getSchedule'
import ScheduleList from '@/components/schedule-list'
import { Schedule } from '@/types/Schedule'
import { useGetSchedule } from '@/hooks/useGetSchedule'

export default function Home(){
    const getSchedule = useGetSchedule()
    
    if(getSchedule.isLoading) return <Title>Loading...</Title>
    if(!getSchedule.data) return <Title>there was an error</Title>
    if(getSchedule.isError) return <Title>there was an error</Title>
    return <main className="flex items-center justify-center bg-gray-100 h-full">

        <div>
        <div className="h-full">
            <Title className='mb-4 font-8xl'>My contacts</Title>
        <div className="mb-4 flex gap-3">
            <TextInput />
            <Link href="/dashboard/create" prefetch={false}>
                <Button>New</Button>
            </Link>
        </div>
            {getSchedule.data.length === 0 && <Text className='text-center'>Create a new contact...</Text>}
            <ScheduleList data={getSchedule.data} loading={getSchedule.isLoading}/> 
        </div>
        </div>
    </main>
}