import { Card,Title,Text } from '../lib/tremor-components'

export default function ScheduleInfo({children,name,phone_number,email}:{children:React.ReactNode,name:string,phone_number:string,email:string}){
    return <Card>  
        <Title className='text-3xl'>
            {name}
        </Title>

        <Text>
            {email}
        </Text>

        <Text>
            {phone_number}
        </Text>

        {children}
    </Card>
}