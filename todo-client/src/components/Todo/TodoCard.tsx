import { Button } from "../ui/button";


export default function TodoCard() {
  return (
     <div className=' flex justify-between items-center
       bg-white  border hover:shadow-xl
        hover:scale-101 transition transform  border-gray-400 p-4 rounded-2xl'>
      <input className='' type="checkbox" name='' />
      <p className='font-semibold'>Todo Title</p>
      <p className='font-semibold'>Time</p>
      <p className='font-semibold'>Description</p>
     <div className='space-x-3.5'>
       <Button  className="bg-red-500 hover:bg-red-800 text-white">Delete</Button>
      <Button >Edit</Button>
     </div>
      </div>
  )
}
