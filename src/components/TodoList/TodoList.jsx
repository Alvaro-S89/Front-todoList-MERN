import React, { useEffect, useContext  } from 'react'
import useTodo from '../../hooks/useTodo'
import { TodoContext } from '../../context/TodosProvider'
import {BsTrash3Fill} from "react-icons/bs"


const TodoList = () => {
    const {todos, setTodos} = useContext(TodoContext)
    const  { getTodosOfUser, deleteTodo }  = useTodo()

    useEffect(() =>{
        getTodosOfUser().then(data => {
            console.log(data);
            setTodos(data)
        })
    },[])

    const handleDeleteTodo = async (id) => {
        const data = await deleteTodo(id);
        if (data.msg === "deleted task") {
            const newArrayTodos = todos.filter(todo => todo._id !==id)
            setTodos(newArrayTodos)
        }
      };

  return (
    <div>
        {
            todos.map(todo => {
                return (
                    <div key={todo._id} className='flex justify-center items-center p-4 m-4 rounded-xl bg-[#FEE8B0] w-[45rem]'>
                    <div className='w-full'>
                        <h1 className='font-bold'>{todo.topic}</h1>
                        <p>{todo.details}</p>
                        <hr />
                    </div>
                        <BsTrash3Fill 
                        className='text-mainOrange text-3xl mr-2'
                        onClick={() => handleDeleteTodo(todo._id)}
                        />
                        <hr />
                    </div>                
                )
            })
        }
    </div>
  )
}

export default TodoList