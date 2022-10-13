import { useRef } from 'react'
import { useTodoContext } from '../context/Todo'
import { Popover } from '@headlessui/react'


export function TodoForm() {


    const { addTodo, isEdit, updateTodo, editTodo } = useTodoContext()


    const todoBody = useRef()

    function handleAddSubmit(event) {
        event.preventDefault()
        addTodo(todoBody.current.value)
        todoBody.current.value = ''
    }

    function handleEditSubmit(event) {
        event.preventDefault()
        updateTodo(todoBody.current.value)
        todoBody.current.value = ''
    }

    return (
        <div>
            {isEdit
                ?
                <form onSubmit={handleEditSubmit} >
                    <input type="text" placeholder={editTodo.body} ref={todoBody} />
                    <button>Submit</button>
                </form>
                :
                <form onSubmit={handleAddSubmit} >
                    <input type="text" placeholder='Add Todo' ref={todoBody} />
                    <button>Submit</button>
                </form>}

        </div>
    )
}
