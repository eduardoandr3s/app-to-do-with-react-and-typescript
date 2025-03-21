import { Filters } from "./Filters"
import { type FilterValue } from "../types"


interface Props {
    handleFilterChange: (filter: FilterValue) => void
    activeCount: number
    completedCount : number,
    filterSelected: FilterValue,
    onClearCompleted: () => void
}



export const Footer : React.FC<Props> = ({
    activeCount, 
    completedCount,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) => {
  const singleActiveCount = activeCount === 1
  const activeTodoWord = singleActiveCount ? 'task' : 'tasks'

    return (
        <footer className="footer">
            <span className="todo-count">
                            <strong>{activeCount}</strong> {activeTodoWord} pending{!singleActiveCount && 's'}
                                    </span>
            <Filters 
            filterSelected={filterSelected}
            handleFilterChange={handleFilterChange}
            />
            {completedCount > 0 && (
                <button 
                className="clear-completed"
                onClick={onClearCompleted}
                >
                    Clear completed
                </button>
            )}

        </footer>
    )
}