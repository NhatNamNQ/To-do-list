import { useCallback, useMemo, useState } from 'react'
import type { Todo } from '../@types/todo.type'
import Title from '../Title/Title'

interface TaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>('')

  const address = useMemo(() => {
    return { street: 'Pham Van Chieu' }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo && currentTodo.name !== '') {
      finishEditTodo()
    } else if (name !== '') {
      addTodo(name)
      setName('')
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  const handleClickTitle = useCallback((value: string) => {
    console.log(value)
  }, [])

  return (
    <div>
      <Title address={address} handleClickTitle={handleClickTitle} />
      <form className='flex gap-4' onSubmit={handleSubmit}>
        <input
          className='w-full border border-gray-400 rounded-lg p-1 text-sm focus:outline-none focus:border-black'
          placeholder='caption goes here'
          onChange={onChangeInput}
          value={currentTodo ? currentTodo.name : name}
        />
        <button type='submit' className='border border-gray-400 rounded-lg w-[20%]'>
          ➕
        </button>
      </form>
    </div>
  )
}
