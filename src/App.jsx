import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'
import { useTodoContext } from './context/Todo'

export function App() {

  const {todoList} = useTodoContext()
  
  return (
    <main className=' flex flex-col text-center place-content-center  m-4 p-4  gap-12 h-full'>
        <TodoForm />
        {todoList.length > 0 && <TodoList/>}
    </main>
  )
}