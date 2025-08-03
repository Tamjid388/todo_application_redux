import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import TodoCard from './TodoCard'
import AddTodoModal from './AddTodoModal'
import { Filter } from './Filter'

export default function TodoContainer() {
  return (
    <div>
      <div className='space-y-4 flex justify-between'>
       
        <AddTodoModal/>
       



        <Filter/>
      </div>
      <div className='bg-purple-400 px-6 py-8 w-full h-full
       rounded-xl space-y-2'>
       <TodoCard></TodoCard>
       <TodoCard></TodoCard>
       <TodoCard></TodoCard>
       <TodoCard></TodoCard>

       {/* <div className='bg-white'>
        <h2 className='font-bold text-red-600 text-2xl text-center py-4'>
        There is no task pending
       </h2>
       </div> */}
      </div>
    </div>
  )
}
