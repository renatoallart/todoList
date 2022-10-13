import { createContext, useContext, useState } from "react";
import { nanoid } from 'nanoid'

const TodoContext = createContext()

export function useTodoContext() {
    return useContext(TodoContext)
}

export function Todo({ children }) {

    const [todoList, setTodoList] = useState([
        { id: 1, body: ' buy late' },
        { id: 2, body: ' buy rice' }
    ])
    const [editTodo, setEditTodo] = useState()
    const [isEdit, setIsEdit] = useState(false)

    function addTodo(todo) {
        setTodoList([...todoList, {
            id: nanoid(),
            body: todo
        }])
    }

    function deleteTodo(todoId) {
        setTodoList(prevList => prevList.filter(todo =>
            todo.id !== todoId))
    }

    function updateTodo(body) {
        console.log("update")
        setTodoList(prevList => prevList.map(todo =>
            todo.id === editTodo.id ? { ...todo, body } : todo))
        setIsEdit(false)
    }


    return (
        <TodoContext.Provider value={{
            todoList, isEdit, editTodo,
            deleteTodo, updateTodo, addTodo, setEditTodo, setIsEdit
        }}>
            {children}
        </TodoContext.Provider>
    )
}
