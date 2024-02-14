import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.jpeg"
export const Header = () => {
  return (
    <header>
        <NavLink to="/" className="logo">
            <img src={Logo} alt= "Routemate Logo"/>
            <span>Routemate</span>
        </NavLink>
        <nav className="navigation"></nav>
        <NavLink to="/" className="NavLink">Home</NavLink>
        <NavLink to="/products" className="NavLink">Products</NavLink>
        <NavLink to="/contact" className="NavLink">Contact</NavLink>

    </header>
  )
}
