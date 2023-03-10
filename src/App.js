import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filter, setFilter] = useState([])

  const filterHandler = () => {
    switch(status){
      case 'Completed':
        setFilter(todos.filter(todo => todo.completed == true))
        break;
      case 'Incomplete':
        setFilter(todos.filter(todo => todo.completed == false))
        break;
      default:
        setFilter(todos)
        break
    }
  }

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else{
      let localTodo = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodo)
    }
  }

  useEffect(() => {
    getLocal()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocal()
  }, [todos, status])

  return (
    <div className="App">
      {/* HEADER OF THE PAGE */}
      <Header></Header>

      {/* INPUT FIELDS AND BUTTONS */}
      <AddTask 
        task = {task}
        setTask = {setTask}
        todos={todos}
        setTodos={setTodos}
        status = {status}
        setStatus = {setStatus}
      ></AddTask>

      {/* DISPLAY EACH TASK */}
      <TaskList
        todos = {todos}
        setTodos = {setTodos}
        filter = {filter}
      ></TaskList>

      {/* FOOTER OF THE PAGE */}
      <Footer></Footer>
    </div>
  );
}

export default App;
