import { useRef } from 'react'
import { useTodoContext } from '../context/Todo'
import {XCircle } from 'phosphor-react'    



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
            <h1 className='font-bold text-4xl m-4' >{isEdit ? 'Update Todo' : 'Todo'}</h1>
            <form className=' flex flex-col justify-center items-center gap-4 ' onSubmit={handleAddSubmit} >
                <input className='rounded-full h-12 w-[80%] p-4 text-xl
                placeholder:p-4 outline-none  text-gray-700
                focus:border-gray-700 focus:border-4 focus:p-4 
                focus:text-xl '
                    type="text" placeholder={isEdit ? `Update:${editTodo.body}` : 'Add todo'} ref={todoBody} />
                <div className='flex flex-row-reverse gap-4'>
                    <button className='bg-slate-600 border-none border-black p-2 rounded-md font-semibold hover:text-white transition-colors'>Submit</button>
                    {isEdit &&
                        <button className='bg-slate-600 border-none border-black p-2 rounded-md font-semibold hover:text-white transition-colors'
                        onClick={() => {
                            todoBody.current.value = ''
                            setIsEdit(false)
                        }}> <XCircle size={32} /></button>
                    }
                </div>
            </form>

        </div>
    )
}
