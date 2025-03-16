import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle menu state
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Function to close menu when clicking a link
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 flex justify-between items-center shadow-md px-[20px] z-50 md:px-16">
            
            {/* Logo (Always Visible) */}
            <Link to="/" onClick={closeMenu} className="flex-0.3">
                <img 
                    src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png" 
                    alt="Communion Hub Logo" 
                    className="h-10"
                />
            </Link>

            {/* Desktop Navigation (Hidden on Small Screens) */}
            <div className="hidden md:flex">
                <Link className="mx-4 hover:text-blue-600 text-lg" to="/" onClick={closeMenu}>Home</Link>
                <Link className="mx-4 hover:text-blue-600 text-lg" to="/events" onClick={closeMenu}>Events</Link>
                <Link className="mx-4 hover:text-blue-600 text-lg" to="/about" onClick={closeMenu}>About</Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {menuOpen ? (
                        <span className="text-2xl font-bold">✖</span> // ✅ Cross Icon
                    ) : (
                        <img 
                            src="https://banner2.cleanpng.com/20180628/zaz/aayj9bx5v.webp" 
                            alt="Hamburger Menu" 
                            className="h-6 w-6"
                        />
                    )}
                </button>
            </div>

            {/* Mobile Menu (Logo Now Visible) */}
            <div
                className={`absolute top-0 left-0 w-full h-screen bg-white shadow-md transition-all duration-300 ease-in-out ${
                    menuOpen ? "block" : "hidden"
                } md:hidden`}
            >
                
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={closeMenu}>
                        <img 
                            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png" 
                            alt="Communion Hub Logo" 
                            className="h-10"
                        />
                    </Link>
                    <button onClick={toggleMenu} className="text-2xl font-bold">✖</button>
                </div>

                {/* Navigation Links (Now Pushed Down) */}
                <ul className="flex flex-col items-start space-y-0 py-8 px-6">
                    <li className="w-full border-b border-gray-300 py-4">
                        <Link to="/" onClick={closeMenu} className="text-lg hover:text-blue-600 block">Home</Link>
                    </li>
                    <li className="w-full border-b border-gray-300 py-4">
                        <Link to="/events" onClick={closeMenu} className="text-lg hover:text-blue-600 block">Events</Link>
                    </li>
                    <li className="w-full border-b border-gray-300 py-4">
                        <Link to="/about" onClick={closeMenu} className="text-lg hover:text-blue-600 block">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
