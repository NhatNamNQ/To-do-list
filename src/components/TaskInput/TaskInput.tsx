import { useState } from 'react'

interface TaskInputProps {
  addTodo: (name: string) => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(name)
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <div>
      <form className='flex gap-4' onSubmit={handleSubmit}>
        <input
          className='w-full border border-gray-400 rounded-lg p-1 text-sm focus:outline-none focus:border-black'
          placeholder='caption goes here'
          onChange={onChangeInput}
        />
        <button type='submit' className='border border-gray-400 rounded-lg w-[20%]'>
          ➕
        </button>
      </form>
    </div>
  )
}
