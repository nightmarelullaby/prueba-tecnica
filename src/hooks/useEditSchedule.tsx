import { updateSchedule } from "@/services/updateSchedule"
import { useMutation } from "@tanstack/react-query"


export function useEditSchedule(){
    return useMutation({
        mutationKey:['editSchedule'],
        mutationFn:updateSchedule
    })
}