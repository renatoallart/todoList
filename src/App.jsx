import React, { useState } from 'react'
import { Todo } from './components/Todo'

export const App = () => {
  const [todoList, setTodoList] = useState()

  const [todo, setTodo] = useState({
    id: '',
    name: '',
    isFinish: false

  })

  const addTodoInList = () => {
    setTodoList(preValue => [...preValue, todo])
  }

  const removeTodo = (id) => { //return a new with all elements but which id match
    setTodoList(preValue => preValue.filter(todo => todo.id !== id))

  }

  const allTodos = todoList.map(todo => <div key={todo.id}>
    <Todo {...todo}
      remove={removeTodo}
    />
  </div>)

  const handleChange = (event) => {
    const { name, value } = event.target
    setTodo({ [name]: value, id: Date.now() })
    console.log(value)
  }



  return (
    <div>
      <div>
        <input type="text"
          id='todoInput'
          name='name'
          value={todo.name}
          onChange={handleChange}
          placeholder='add todo'
        />
        <button onClick={addTodoInList}>Add todo</button>
      </div>

      {allTodos}

      <pre>
        {JSON.stringify(todoList, null, 2)}
      </pre>
    </div>
  )
}
