import { useEffect, useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import type { Todo } from '../@types/todo.type'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  type handleNewTodos = (todo: Todo[]) => Todo[]

  const syncReactToLocal = (handleNewTodos: handleNewTodos) => {
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newTodosObj = handleNewTodos(todosObj)
    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }

  useEffect(() => {
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    setTodos(todosObj)
  }, [])

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
    syncReactToLocal((todoObj: Todo[]) => [...todoObj, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    const handler = (todosObj: Todo[]) => {
      return todosObj.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    }
    setTodos(handler)
    syncReactToLocal(handler)
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
    const handler = (todosObj: Todo[]) => {
      return todosObj.map((todo) => (todo.id === (currentTodo as Todo).id ? (currentTodo as Todo) : todo))
    }
    setTodos(handler)
    syncReactToLocal(handler)
    setCurrentTodo(null)
  }

  const deleteTodo = (id: string) => {
    const handler = (todosObject: Todo[]) => {
      return todosObject.filter((todo) => todo.id !== id)
    }
    setTodos(handler)
    syncReactToLocal(handler)
  }

  return (
    <div className='p-[3rem] bg-[#e5e5e5] min-h-screen min-w-screen'>
      <div className='bg-amber-50 max-w-[22rem] p-[2rem] m-auto border rounded-2xl shadow-md'>
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
