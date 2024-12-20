import React, {useState} from "react";
import Logo from "./assets/Logo.png"

function ToDoList(){

    const [tasks, setTask] = useState([
        {text: "Walk 30 minutes", completed: false},
        {text: "Drink Water" ,completed: false}, 
        {text: "Read a book", completed: true}]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !=="" ){
            setTask(t => ([...t, {text: newTask, completed:false}]))
            setNewTask("")
        }  
    }
    function deleteTask(index){
        setTask(tasks.filter((_,i) => i !== index));

    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]];

            setTask(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = 
            [updatedTask[index+1], updatedTask[index]];

            setTask(updatedTask);
        }
    }

    function toggleChecked(index){
        const updatedTask = [...tasks];
        updatedTask[index].completed = !updatedTask[index].completed;
        setTask(updatedTask);
    }

    return(
        <div className="to-do-list">
            
            <h2>To Do Lists <img src={Logo} id="Logo" alt="logo"/></h2>

            <div className="task-add-container">
            <input 
                type="text" 
                placeholder="Enter a Task"
                onChange={handleInputChange} 
                value={newTask}
                id="input-task" />
                
            <button 
            onClick={addTask}
            className="add-btn">Add</button>
            </div>

            <ul className="all-list-items">
                {tasks.map((task,index) => 
                    <li key={index} className="task">
                        <span id="task-text" className={task.completed ? "checked" : ""}
                        onClick={() => toggleChecked(index)}>{task.text}</span>

                        <span id="task-btn">
                        <button 
                        className="moveup-btn"
                        onClick={() => moveTaskUp(index)} >⬆</button>

                        <button 
                        className="movedown-btn"
                        onClick={() => moveTaskDown(index)}>⬇</button>

                        <button 
                        className="del-btn"
                        onClick={() => deleteTask(index)}>✕</button>

                        </span>

                    </li>
                )}
            </ul>
        </div>
    )

}
export default ToDoList;