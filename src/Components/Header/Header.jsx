import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="/images/Logo.svg" alt="" />
            </div>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? " text-red-500" : "text-white"} >
                    <li>
                        Home
                    </li>
                </NavLink>

                <NavLink to="/shop" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>
                    <li>
                        Shop
                    </li>
                </NavLink>


                <NavLink to="/orders" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>
                    <li>
                        Orders
                    </li>
                </NavLink>


                <NavLink to="/manage" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>
                    <li>
                        Manage Inventory
                    </li>
                </NavLink>


                <NavLink to="/login" className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>
                    <li>
                        Login
                    </li>
                </NavLink>

            </nav>
        </div >
    );
};

export default Header;