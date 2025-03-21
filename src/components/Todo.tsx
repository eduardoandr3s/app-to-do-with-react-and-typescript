import React, { useState, useEffect, useRef } from "react";
import { TodoId, type Todo as TodoType} from "../types";

interface Props extends TodoType {
    onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
    onEditTodo: ({id, title}: Pick<TodoType, 'id' | 'title'>) => void
}

export const Todo: React.FC<Props> =({id, title, completed, onRemoveTodo, onToggleCompleteTodo, onEditTodo}) =>{
    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState(title)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditing])

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({id, completed: event.target.checked})
    }

    const handleDoubleClick = (): void => {
        setIsEditing(true)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            setIsEditing(false)
            if (editedTitle.trim() !== '') {
                onEditTodo({id, title: editedTitle.trim()})
            }
        }
        if (event.key === 'Escape') {
            setIsEditing(false)
            setEditedTitle(title)
        }
    }

    const handleBlur = (): void => {
        setIsEditing(false)
        if (editedTitle.trim() !== '') {
            onEditTodo({id, title: editedTitle.trim()})
        }
    }

    return(
        <li className={`${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
            <div className="view">
                <input
                    className="toggle"
                    checked={completed} 
                    type="checkbox" 
                    onChange={handleChangeCheckbox}
                />
                <label onDoubleClick={handleDoubleClick}>{title}</label>
                <button 
                    className="destroy" 
                    onClick={() => {
                        onRemoveTodo({id})
                    }}
                />
            </div>
            <input
                ref={inputRef}
                className="edit"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
            />
        </li>
    )
}