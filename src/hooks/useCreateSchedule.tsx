"use client";

import { createSchedule } from "@/services/addSchedule"
import { useMutation } from "@tanstack/react-query"

export function useCreateSchedule(){
    return useMutation({
        mutationKey:['editSchedule'],
        mutationFn:createSchedule
    })
}
    
