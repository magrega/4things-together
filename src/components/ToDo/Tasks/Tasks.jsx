import Task from "../Task/Task";

const Tasks = ({ tasks, removeTodoItem }) => {

    return (
        <ul>
            {tasks.map((task) => {

                return <Task task={task.todo} key={task.id} id={task.id} removeTodoItem={removeTodoItem} />
            })}

        </ul>
    );
};

export default Tasks;