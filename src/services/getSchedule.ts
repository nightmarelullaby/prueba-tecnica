export const getSchedule = async <T>(id:number | undefined):Promise<T> => {
    console.log("hello here")
    try{
        const response = await fetch("http://localhost:4000/api/v1/schedule?q="+id,{
            method:"GET"
        })
        const json = await response.json()
        console.log("aqui",json)
        return json
    }catch(error){
        console.log("aqui",error)
        throw new Error("Error!")
    }
    
}