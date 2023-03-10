import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

{/* INDIVIDUAL FOR EACH TASK */}

const Task = ({text, todo, todos, setTodos}) => {

    {/* HANDLERS */}

    const deleteTaskHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const checkTaskHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div>
            <Box
                m={5}
                display = "flex"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                {/* LIST OF EACH TASK */}
                {/* IF COMPLETED -> CROSS OUT */}
                <ul
                    className={`${todo.completed ? "completed" : ""}`}
                >
                    {text}
                </ul>
                <Stack direction="row" spacing={2}>

                    {/* DELETE BUTTON */}
                    <Button
                        variant="outlined"
                        onClick={deleteTaskHandler}
                    >
                        Delete
                    </Button>

                    {/* CHECK BUTTON */}
                    <Button 
                        variant="contained"
                        onClick={checkTaskHandler}
                    >
                        Check
                    </Button>
                </Stack>
            </Box>
        </div>
    )
}

export default Task