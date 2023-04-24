import React, { createContext, useState } from 'react'


export const TodoContext = createContext()
const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState([])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodosProvider