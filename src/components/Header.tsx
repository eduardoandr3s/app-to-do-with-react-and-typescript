import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: (title: TodoTitle) => void
}


export const Header: React.FC<Props> = ({onAddTodo}) => {
    return (
        <header className="header">
            <h1>
                Todo 
                <img 
                style={{width: '60px', height: 'auto'}}
                src="https://imgs.search.brave.com/d-7oanK5S17FHWy2GOW7pdIiLYHwmgxPidfwIWSAWq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90eXBl/c2NyaXB0LWVzbGlu/dC5pby9pbWcvdHlw/ZXNjcmlwdC5zdmc" 
                alt="TS Logo" 
                 />
            </h1>

            <CreateTodo 
            saveTodo={onAddTodo}
            />
        </header>
    )
}
