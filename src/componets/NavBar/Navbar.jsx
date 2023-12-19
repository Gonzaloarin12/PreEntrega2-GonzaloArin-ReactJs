import './Navbar.css'
import logo from '../../img/logo.png'
import { Link, NavLink } from 'react-router-dom';

const links = [
    {
        label: "Inicio",
        href: "/",
    },

    {
        label: "terrestres",
        href: "/productos/terrestre",
    },

    {
        label: "Aereos",
        href: "/productos/aereo",
    },
    {
        label: "Acuatico",
        href: "/productos/acuatico",
    },

    {
        label: "Contacto",
        href: "/",
    },
]


const Navbar = () => {
    return (
        <header className="bg-teal-900 border-white-500">
            <div className="container mx-auto py-5 px-20 flex justify-between items-center">
                <img className="logo" src={logo} alt="logo" />
                <nav className="flex gap-4">
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className="text-lg uppercase font-semibold text-white hover:text-purple-400 hover:underline transition-colors duration-300"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}


export default Navbar