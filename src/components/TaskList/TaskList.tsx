interface TaskListProps {
  doneTaskList?: boolean
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList } = props
  console.log(doneTaskList)

  return (
    <div>
      <h2 className='mt-2 mb-2 font-bold'>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className='space-y-3'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <input type='checkbox' />
            <span className='truncate'>Tập Gym</span>
          </div>

          <div className='flex justify-end w-[30%] gap-2'>
            <button className='border rounded hover:bg-gray-100'>🖊️</button>
            <button className=' border rounded hover:bg-gray-100'>🗑️</button>
          </div>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <input type='checkbox' />
            <span className='truncate'>Tập Gym</span>
          </div>

          <div className='flex justify-end w-[30%] gap-2'>
            <button className='border rounded hover:bg-gray-100'>🖊️</button>
            <button className=' border rounded hover:bg-gray-100'>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
