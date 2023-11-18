export class ScheduleEntity {
    public name:string;
    public email:string;
    public phone_number:string;
    public id?:number;

    constructor(id:number,name:string,email:string,phone_number:string){
        this.name = name
        this.email = email
        this.phone_number = phone_number
        this.id = id

    }
}