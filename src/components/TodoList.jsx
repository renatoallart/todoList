import { useTodoContext } from "../context/Todo"


export function TodoList() {
    const { todoList, deleteTodo, setEditTodo, setIsEdit } = useTodoContext()

    return (    
      <ul>
        {todoList.map(todo => <li key={todo.id}>
          {todo.body}
          <button onClick={() => deleteTodo(todo.id)}>Remove</button>
          <button onClick={() => {
            setEditTodo({ id: todo.id, body: todo.body })
            setIsEdit(true)
          }}>Update</button>
        </li>)}
      </ul>
    )
  }
  