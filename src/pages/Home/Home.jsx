import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import  useTodo from '../../hooks/useTodo'
import useUser from '../../hooks/useUser'
import TodoList from '../../components/TodoList/TodoList'
import { TodoContext } from '../../context/TodosProvider'
import Logout from '../../components/Logout/Logout'

export default function Home() {
  const {setTodos} = useContext(TodoContext)
  const { register, handleSubmit, reset, formState:{errors} } = useForm()
  
  const { checkUser } = useUser()
  const { addTodo, getTodosOfUser } = useTodo()
  

  const onSubmit = async (data) => {
    await addTodo(data)
    const todos = await getTodosOfUser()
    setTodos(todos)
    reset()
  }

  useEffect(() => {
    checkUser()
  }, [])
  

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <img className='w-48 h-48 p-8' src="https://res.cloudinary.com/dfg3nr91y/image/upload/v1682344182/youtask-low-resolution-logo-color-on-transparent-background_binmyx.png" alt="YouTask" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='border-b border-mainOrange bg-background w-72 m-2' type="text" placeholder='Insert topic here'{...register('topic')} />
        <input className='border-b border-mainOrange bg-background w-72 m-2' type="text" placeholder='Insert details here'{...register('details')} />
        <button className='border bg-mainOrange px-4 py-2 rounded-xl m-2' type='submit'>Add Task</button>
      </form>
      <TodoList />
    </div>
    <Logout />
    </>
  )
}
