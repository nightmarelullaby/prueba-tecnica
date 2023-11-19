import { FormEventHandler } from 'react'
import { Button, Text,Card ,TextInput, Title} from '../lib/tremor-components'
import { Schedule } from '@/types/Schedule'

export default function FormSchedule({data,isError,error,loading,onSubmit}:{isError:boolean,error:string,data?:Schedule[] | [],loading?:boolean,onSubmit:FormEventHandler<HTMLFormElement>}){
    
    return <>
    {!data && (
        <Card style={{width:"fit-content",height:"fit-content"}}>
            <Title>Add Contact</Title>
            <form onSubmit={onSubmit} >
                    <div className="flex flex-col gap-2">
                    <label>
                        <Text>name</Text>
                    </label>
                    <TextInput  error={isError} errorMessage={error}  placeholder="name" name="name"/>


                    <label>
                        <Text>Phone Number</Text>
                    </label>
                    <TextInput error={isError} errorMessage={error}  placeholder="phone number" name="phone_number" />

                    <label>
                        <Text>Email</Text>
                    </label>
                    <TextInput error={isError} errorMessage={error}  placeholder="name" name='email'/>
                    </div>
                    <Button loading={loading} className='mt-4 w-inherit'>Confirm</Button>

                </form>
                </Card>
                )}
    {data && (
        <Card style={{width:"fit-content"}}>
               <Title>Edit Contact</Title>
            <form onSubmit={onSubmit} >
            <div className="flex flex-col gap-2">     
                    <label>
                        <Text>name</Text>
                    </label>
                    <TextInput error={isError} errorMessage={error} defaultValue={data[0].name} placeholder="name" name="name"/>


                    <label>
                        <Text>Phone Number</Text>
                    </label>
                    <TextInput error={isError} errorMessage={error} defaultValue={data[0].phone_number} placeholder="phone number" name="phone_number" />

                    <label>
                        <Text>Email</Text>
                    </label>
                    <TextInput error={isError} errorMessage={error} defaultValue={data[0].email} placeholder="name" name='email'/>
                    <Button loading={loading} className='mt-4 w-inherit'>Confirm</Button>
                    </div>
                </form>
                
                </Card>
    )}</>


        
}