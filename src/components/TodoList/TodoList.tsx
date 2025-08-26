import { useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import type { Todo } from '../@types/todo.type'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => (todo.id === id ? { ...todo, done } : todo))
    })
  }

  const startEditTodo = (id: string) => {
    const foundTodo = todos.find((todo) => todo.id === id)
    if (foundTodo) setCurrentTodo(foundTodo)
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }

  const finishEditTodo = () => {
    setTodos((prev) => prev.map((todo) => (todo.id === (currentTodo as Todo).id ? (currentTodo as Todo) : todo)))
    setCurrentTodo(null)
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className='p-[3rem] bg-[#e5e5e5] min-h-screen'>
      <div className='bg-amber-50 max-w-[22rem] p-[2rem] m-auto border rounded-2xl shadow-md'>
        <h1 className='text-2xl font-extrabold'>To do list typescript</h1>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
        <TaskList
          doneTaskList={false}
          todos={notDoneTodos}
          handleDoneToDo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          doneTaskList={true}
          todos={doneTodos}
          handleDoneToDo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
