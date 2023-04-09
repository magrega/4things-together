import { useState } from "react";

const Form = ({ setTasks, setIds, ids }) => {

    const [formValue, setFormValue] = useState('');

    const onAddTask = (e) => {
        e.preventDefault();
        setIds(ids + 1);
        if (formValue.length !== 0) setTasks(oldTasks => [...oldTasks, { todo: formValue, id: ids }]);
        setFormValue('');
    }

    const onFormChange = (e) => {
        setFormValue(e.target.value);
    }

    return (
        <form>
            <input type="text" onChange={onFormChange} value={formValue} />
            <button onClick={onAddTask} type="submit">add</button>
        </form>
    );
};

export default Form;