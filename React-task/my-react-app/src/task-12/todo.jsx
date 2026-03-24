import { useState } from "react"

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
            placeholder="Add task"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        <button onClick={AddTask}>Add</button>

        <ul>
            {task.map((t,i) => (
                <li key={i}> 
                    {t} 
                    <button onClick={() => deleteTask(i)}>Remove</button>
                </li>
            ))}
        </ul>
    </>
    )
}