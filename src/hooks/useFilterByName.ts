export function useFilterByName<T>(triggerInput:string,prop:keyof T,arr?:T[]):T[] | []{
    if(!arr) return [];
    return arr.filter((el:T) =>  {
        if(prop === Object.keys(el as Object)[0]) return (el[prop] as string).normalize().toLowerCase().includes(triggerInput)
    })
}