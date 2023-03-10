import React from 'react'
import Task from './Task'

{/* DISPLAYS TASKS */}

const TaskList = ({todos, setTodos, filter}) => {
  return (
    <div>
        <ul>
            {filter.map(todo => (
                <Task
                    key={todo.id}
                    text={todo.text}
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                />
            ))}
        </ul>
    </div>
  )
}

export default TaskList