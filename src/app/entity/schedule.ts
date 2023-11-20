export class ScheduleEntity {
    public name:string
    public email:string
    public phone_number:string
    public id?:string

    constructor(name:string,email:string,phone_number:string,id?:string){
        this.name = name
        this.email = email
        this.phone_number = phone_number
        this.id = id

    }
}