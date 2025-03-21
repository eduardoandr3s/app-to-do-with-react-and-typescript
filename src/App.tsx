import {useState} from "react"
import { JSX } from "react/jsx-dev-runtime"
import { Todos } from "./components/Todos"
import { FilterValue, type TodoId, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"

const mockTodos = [
  {
    id: '1',
    title: 'Estudiar TypeScript',
    completed: true,
  },
  {
    id: '2',
    title: 'Estudiar React',
    completed: false,
  },
  {
    id: '3',
    title: 'Estudiar MongoDB',
    completed: false,
  },
  {
    id: '4',
    title: 'Estudiar Node.js',
    completed: false,
  },
  {
    id: '5',
    title: 'Estudiar Next.js',
    completed: false,
  },
  {
    id: '6',
    title: 'Estudiar React Native',
    completed: false,
  },
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  
  const handleRemove =  ({ id }: TodoId): void => {

    const newTodos = todos.filter(todo =>todo.id !== id)
      setTodos(newTodos)
  }

  const handleCompleted = (
    {id, completed}: Pick<TodoType, 'id' | 'completed'>
  ): void => {
      const newTodos = todos.map(todo =>{
        if(todo.id === id){
    return{
          ...todo,
          completed
        }}
        return todo
      })
      setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  
  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })


  return (
      <div className="todoapp">
            <Todos 
            onToggleCompleteTodo={handleCompleted}
            onRemoveTodo={handleRemove}
            todos = {filteredTodos}
            />
           
           
            <Footer 
            activeCount={activeCount}
            completedCount={completedCount}
            filterSelected={filterSelected}
            onClearCompleted={() => {}}
            handleFilterChange={handleFilterChange}
            />
      </div>
  )
}

export default App
