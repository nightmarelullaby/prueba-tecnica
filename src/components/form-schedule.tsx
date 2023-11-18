import { FormEventHandler } from 'react'
import { Button, Text,Title ,TextInput} from '../lib/tremor-components'

export default function FormSchedule({loading,onSubmit}:{loading?:boolean,onSubmit:FormEventHandler<HTMLFormElement>}){
    return(
        <form onSubmit={onSubmit}>
            
        <label>
            <Text>name</Text>
        </label>
        <TextInput placeholder="name" name="name"/>


        <label>
            <Text>Phone Number</Text>
        </label>
        <TextInput placeholder="phone number" name="phone_number" />

        <label>
            <Text>Email</Text>
        </label>
        <TextInput placeholder="name" name='email'/>
        <Button loading={loading} className='mt-4 w-inherit'>Confirm</Button>
    </form>
    )
}