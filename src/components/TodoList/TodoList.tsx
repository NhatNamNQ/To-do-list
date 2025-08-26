import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'

export default function TodoList() {
  return (
    <div className='p-[3rem] bg-[#e5e5e5] h-screen'>
      <div className='bg-amber-50 max-w-[22rem] p-[2rem] m-auto border rounded-2xl shadow-md'>
        <h1 className='text-2xl font-extrabold'>To do list typescript</h1>
        <TaskInput />
        <TaskList doneTaskList={true} />
        <TaskList doneTaskList={false} />
      </div>
    </div>
  )
}
