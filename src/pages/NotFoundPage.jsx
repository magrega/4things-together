import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            Sorry, page doesn't exist. Go back <Link to="/">Home</Link>
        </div>
    );
};

export default NotFoundPage;