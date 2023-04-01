import { CircularProgress } from "@mui/material";
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="spinner">
            <CircularProgress color="success" />
        </div>
    );
};

export default Spinner;