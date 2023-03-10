import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

{/* TO ADD A TASK TO THE LIST */}

const AddTask = ({task, setTask, todos, setTodos, status, setStatus}) => {
    
    {/* HANDLERS */}
    
    const statusChangeHandler = (e) => {
    setStatus(e.target.value);
    };

    const inputTaskHandler = (e) => {
        setTask(e.target.value)
    }

    const submitTask = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: task, completed: false, id: Math.random()*1000}
        ])
        setTask("")
    }

    return(
        <form>
            <Box
                m={5}
                display = "flex"
                justifyContent="space-between"
                alignItems="flex-start"
            >

                {/* INPUTTING TASK */}
                <Box
                    m={0}
                    display = "flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <h3>Task:</h3>

                    {/* INPUT FIELD */}
                    <TextField 
                        id="task" 
                        label="Describe your task.."
                        variant="outlined"
                        color = "primary"
                        margin="dense"
                        size="small"
                        onChange={inputTaskHandler}
                        value={task}
                    />

                    {/* ADD BUTTON */}
                    <Button
                        variant="contained"
                        onClick={submitTask}
                        size="medium"
                    >
                    Add
                    </Button>
                </Box>

                {/* FILTER TASKS */}
                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    {/* SELECT */}
                    <InputLabel>Filter</InputLabel>
                    <Select
                        labelId="label"
                        id="id"
                        value={status}
                        label="Filter"
                        onChange={statusChangeHandler}
                    >
                        <MenuItem value={"All"}>All</MenuItem>
                        <MenuItem value={"Incomplete"}>Incomplete</MenuItem>
                        <MenuItem value={"Completed"}>Completed</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </form>
    )
}

export default AddTask