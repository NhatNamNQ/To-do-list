import type { Todo } from '../@types/todo.type'

interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneToDo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneToDo, startEditTodo, deleteTodo } = props

  const onChangeCheckbox = (idTodo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneToDo(idTodo, event.target.checked)
  }

  return (
    <div>
      <h2 className='mt-2 mb-2 font-bold'>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className='space-y-3'>
        {todos.map((todo) => (
          <div className='flex items-center justify-between gap-4' key={todo.id}>
            <div className='flex items-center gap-3'>
              <input type='checkbox' checked={todo.done} onChange={onChangeCheckbox(todo.id)} />
              <span className='truncate'>{todo.name}</span>
            </div>

            <div className='flex justify-end w-[30%] gap-2'>
              <button className='border rounded hover:bg-gray-100' onClick={() => startEditTodo(todo.id)}>
                🖊️
              </button>
              <button className=' border rounded hover:bg-gray-100' onClick={() => deleteTodo(todo.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
