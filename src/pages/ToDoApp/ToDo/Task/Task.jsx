import { useState } from 'react';
import './Task.css';

const Task = ({ task, removeTodoItem }) => {

    const [isImportant, setImportant] = useState(false);

    const important = () => {
        setImportant(!isImportant);
    }

    const deleteItem = () => removeTodoItem(task.id);

    return (
        <li className='task__item'>
            <span className={isImportant ? "important-task" : null}>{task.todo}</span>
            <div>
                <button onClick={important}>Important</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </li>
    );
};

export default Task;