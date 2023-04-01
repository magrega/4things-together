import './Form.css';

const Form = ({ onFormChange, formValue }) => {

    return (
        <input
            type="text"
            className="search-bar"
            onChange={onFormChange}
            value={formValue}
            placeholder="type something..."
        />
    );
};

export default Form;