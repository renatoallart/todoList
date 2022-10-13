import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'
import { useTodoContext } from './context/Todo'

export function App() {

  const {todoList} = useTodoContext()
  
  return (
    <main>
        <TodoForm />
        {todoList.length > 0 && <TodoList/>}
    </main>
  )
}
