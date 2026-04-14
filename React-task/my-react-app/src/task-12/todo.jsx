import { useState } from "react"
import './todo.css'

export default function Todo () {

    const [task , setTask] = useState([])
    const [value, setValue] = useState('')   

    function AddTask () {
        setTask([ ...task,value]);
        setValue('');
    }

    const deleteTask = (i) => {
        setTask(task.filter((_,index) => index !== i))
    }

    return(
    <>
        <input 
            type="text" 
            placeholder="Add task..."
            value={value}
            onChange={e => setValue(e.target.value)}
            className="input"
        />
        <button onClick={AddTask}
            className="add-btn"
        >Add
        </button>

        <ul className="task-container">
            {task.map((t,i) => (
                <li key={i} className="task-list"> 
                    {t} 
                    <button className="remove-btn"
                        onClick={() => deleteTask(i)}>Remove
                    </button>
                </li>
            ))}
        </ul>
    </>
    )
}