import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.jpeg"
export const Header = () => {
    return (
        <header>
            <NavLink to="/" className="logo">
                <img src={Logo} alt="Routemate Logo" />
                <span>Routemate</span>
            </NavLink>
            <nav className="navigation">
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/products" className="link">Products</NavLink>
                <NavLink to="/contact" className="link">Contact</NavLink>
            </nav>
        </header>
    )
}
