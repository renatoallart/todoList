import { useTodoContext } from "../context/Todo"
import {PencilSimpleLine, Trash} from 'phosphor-react'


export function TodoList() {
    const { todoList, deleteTodo, setEditTodo, setIsEdit } = useTodoContext()

    function handleColorChange(){
      return {color:'white'}
    }

    return (    
      <section >
        <h2 className="font-bold text-3xl">Todo List</h2>
      <ul className=" flex flex-col gap-4 m-2 p-2">
        {todoList.map(todo => <li className=" w-full text-xl" key={todo.id}>
          {todo.body}
          <button className="p-2" onClick={() => deleteTodo(todo.id)}><Trash size={16} /></button>
          <button onClick={() => {
            setEditTodo({ id: todo.id, body: todo.body })
            setIsEdit(true)
          }}><PencilSimpleLine  size={16} /></button>
        </li>)}
      </ul>
      </section>
    )
  }
  