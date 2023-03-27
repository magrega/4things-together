import { useState } from 'react';
import './Task.css';

const Task = ({ task, id, removeTodoItem }) => {

    const [isImportant, setImportant] = useState(false);

    const important = () => {
        setImportant(!isImportant);
    }

    const deleteItem = () => removeTodoItem(id);

    return (
        <li className='Task__item'>
            <span className={isImportant ? "important" : null}>{task}</span>
            <div>
                <button onClick={important}>Important</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </li>
    );
};

export default Task;