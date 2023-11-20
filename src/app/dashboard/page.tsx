"use client";

import { Button, TextInput,Text, Title } from '../../lib/tremor-components'
import Link from 'next/link'
import ScheduleList from '@/components/schedule-list'
import { useGetSchedule } from '@/hooks/useGetSchedule'
import { useFilterByName } from '@/hooks/useFilterByName'
import {useState} from "react";
import { Schedule } from '@/types/Schedule';

export default function Home(){
    const [inputText,setInputText] = useState("")
    
    const getSchedule = useGetSchedule()
    const filteredData = useFilterByName<Schedule>(inputText,"name",getSchedule.data)
    
    if(getSchedule.isFetching) return <Title>Loading...</Title>
    if(!getSchedule.data) return <Title>there was an error</Title>
    if(getSchedule.isError) return <Title>there was an error</Title>
    return <main className="flex items-center justify-center bg-gray-100 h-full">

        <div>
        <div className="h-full">
            <Title className='mb-4 font-8xl'>My contacts</Title>
        <div className="mb-4 flex gap-3">
            <TextInput value={inputText} onValueChange={(input)=>setInputText(input)}/>

            <Link href="/dashboard/create" prefetch={false}>
                <Button>New</Button>
            </Link>
        </div>
            {getSchedule.data.length === 0 && <Text className='text-center'>Create a new contact...</Text>}
            <ScheduleList data={filteredData} loading={getSchedule.isLoading}/> 
        </div>
        </div>
    </main>
}