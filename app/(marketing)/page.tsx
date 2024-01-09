import { Medal } from 'lucide-react'

const Marketing = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <Medal className='h-6 w-6 mr-2'></Medal>
          No1 task management
        </div>
        <h1 className='text-3xl md:text-6xl text-border text-center text-neutral-800 mb-6'>
          Taskify help team move
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit '>
          work forward
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
        Collaborate, manage projects, and do something different that can be
        improve my possible in the future competed, so do not be a rat, just do
        it!
      </div>
    </div>
  )
}

export default Marketing
