import { Card,Title,Text } from '../lib/tremor-components'

export default function ScheduleInfo({children,name,phone_number,email}:{children:React.ReactNode,name?:string,phone_number?:string,email?:string}){
    return <Card className='w-fit'>  
        <Title className='text-3xl' style={{textOverflow:"ellipsis",overflow:"hidden",width:"20ch"}}>
            {name}
        </Title>

        <Text style={{textOverflow:"ellipsis",overflow:"hidden",width:"20ch"}}>
            {email}
        </Text>

        <Text style={{textOverflow:"ellipsis",overflow:"hidden",width:"20ch"}}>
            {phone_number}
        </Text>

        {children}
    </Card>
}