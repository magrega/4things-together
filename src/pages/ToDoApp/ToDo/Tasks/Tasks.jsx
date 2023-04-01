import Task from "../Task/Task";

const Tasks = ({ tasks, removeTodoItem }) => {

    return (
        <ul>
            {tasks.map(task => <Task key={task.id} task={task} removeTodoItem={removeTodoItem} />)}

        </ul>
    );
};

export default Tasks;