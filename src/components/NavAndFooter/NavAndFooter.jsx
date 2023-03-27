import { NavLink, Outlet } from "react-router-dom";
import './NavAndFooter.css';

const NavAndFooter = () => {
    return (
        <div className="container">
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/counter">Counter</NavLink>
                <NavLink to="/emojilist">Emoji list</NavLink>
                <NavLink to="/postsbyusers">Posts</NavLink>
                <NavLink to="/todo">To Do</NavLink>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                4th React task
            </footer>
        </div>
    );
};

export default NavAndFooter;