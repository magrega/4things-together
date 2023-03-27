import { useState } from 'react';
import Form from '../../components/ToDo/Form/Form';
import Tasks from '../../components/ToDo/Tasks/Tasks';
import './ToDoApp.css';

function ToDoApp() {
  const [tasks, setTasks] = useState([{ todo: "make this app", id: 1 }, { todo: "make classes work", id: 2 }, { todo: "polish the code", id: 3 }]);

  const [ids, setIds] = useState(4);

  const removeTodoItem = (id) => {
    const newToDo = tasks.filter(task => task.id !== id);
    setTasks(newToDo);
  }

  return (
    <div className="ToDoApp">
      <h1>To Do List</h1>
      <Form setTasks={setTasks} setIds={setIds} ids={ids} />
      <Tasks tasks={tasks} removeTodoItem={removeTodoItem} />
    </div>
  );
}

export default ToDoApp;
