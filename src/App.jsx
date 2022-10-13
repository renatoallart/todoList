import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'
import { Todo } from './context/Todo'


export function App() {
  return (
    <main>
      <Todo>
        <TodoForm />
        <TodoList />
      </Todo>
    </main>
  )
}
