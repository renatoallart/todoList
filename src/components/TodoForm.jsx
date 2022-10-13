import { useRef } from 'react'
import { useTodoContext } from '../context/Todo'



export function TodoForm() {

    const { addTodo, isEdit, updateTodo, editTodo, setIsEdit } = useTodoContext()


    const todoBody = useRef()

    function handleAddSubmit(event) {
        event.preventDefault()
        const { value } = todoBody.current

        if (isEdit) return updateTodo(value), todoBody.current.value = ''
        addTodo(value)
        todoBody.current.value = ''
    }


    return (
        <div>
            <h2>{ isEdit ? 'Update Todo': 'Add Todo'}</h2>
            <form onSubmit={handleAddSubmit} >
                <input type="text" placeholder={isEdit ? `Update:${editTodo.body}` : 'Add todo'} ref={todoBody} />
                <button>Submit</button>
            </form>
            {isEdit && 
                <button onClick={()=>{
                    todoBody.current.value = ''
                    setIsEdit(false)

                }}>Cancel Update</button>
            }
        </div>
    )
}
