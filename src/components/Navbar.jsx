import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <div className=" fixed md:static top-0 left-0 h-full bg-white">
            <NavLink className={({ isActive }) => (isActive ? '' : '')} to={'/'}>Home</NavLink>
        </div>
    )
}

export default Navbar