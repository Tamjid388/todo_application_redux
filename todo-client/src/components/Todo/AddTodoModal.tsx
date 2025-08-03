
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/Features/todoslice"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"



export default function AddTodoModal() {
  const [task,setTask]=useState('')
  const [description,setDescription]=useState('')
  const dispatch=useAppDispatch()
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  console.log("form trhhres");
  const taskdetails={
    title:task,
    description:description
  }
  dispatch(addTodo(taskdetails))
  }
  return (
    <div>
      
         <Dialog>
      <div >
        <DialogTrigger asChild>
          <Button  variant={'gradient'}
          >Add Todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription>
              Add the task details below and click Save to add it to your list.
            </DialogDescription>
          </DialogHeader>

          <form 
         onSubmit={handleSubmit}
          className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Task Name</Label>
              <Input 
              onChange={(e)=>setTask(e.target.value)}
              id="name-1" name="taskName"   placeholder="Enter task name"  />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="taskDescription">Task Description</Label>
              <Input id="taskDescription"
              onChange={(e)=>setDescription(e.target.value)}
                name="taskDescription"
               placeholder="Enter task description" />
            </div> 
               <DialogFooter>
            <DialogClose asChild>
             
               <Button variant={'gradient'} type="submit">Save changes</Button>
            </DialogClose>
           
          </DialogFooter>
          </form>
       
        </DialogContent>
      </div>
    </Dialog>
    </div>
  )
}
