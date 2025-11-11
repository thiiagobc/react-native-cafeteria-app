
export interface AuthContextType {
    taskList:Array<PropCard>,
    onOpen:void,
    handleDelete:Function,
    handleEdit:Function,
    
}
export type PropCard = {
    description: string,
    item: number,
    timeLimit: string,
    title: string
}
