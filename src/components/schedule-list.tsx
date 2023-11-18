import { Schedule } from '@/types/Schedule'
import {Button, Card,Title } from '../lib/tremor-components'
export function ScheduleCard({name}:{name:string}){
    return <Card>
        <div className="flex">

            <div className='mr-4'>
        <Title>
            {name}
        </Title>
        </div>
        <div className='flex gap-x-4'>
            <Button>
                View
            </Button>

            <Button>
                Edit
            </Button>

            <Button>
                Delete
            </Button>
        </div>
        </div>
    </Card>
}

export default function ScheduleList({data,loading}:{loading:boolean,data:Omit<Schedule,'email'|'phone_number'>[]}){
    if(loading) return <h4>Loading...</h4>
    return (<ul className='flex flex-col gap-4'>
         {data.map(schedule => <li> 
           <ScheduleCard name={schedule.name}/>
           </li>)}
        
    </ul>)
}