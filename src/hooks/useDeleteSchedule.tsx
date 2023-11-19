

import { useMutation } from "@tanstack/react-query"
import { deleteSchedule } from "@/services/deleteSchedule"


export function useDeleteSchedule(){
    return useMutation({
        mutationKey:['deleteMutation'],
        mutationFn:deleteSchedule
    })
}