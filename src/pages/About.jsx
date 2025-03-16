import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="flex flex-col items-center text-center px-6 py-12 min-h-screen bg-white">
            
            {/* Heading Section */}
            <motion.h1 
                className="text-3xl sm:text-2xl md:text-4xl font-bold text-blue-700 mb-3 sm:mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Bringing Communities Together
            </motion.h1>

            {/* Description */}
            <motion.p 
                className="text-base sm:text-sm md:text-lg text-gray-700 max-w-lg sm:max-w-md md:max-w-2xl mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                At <strong>Communion</strong>, we believe in the power of connection. 
                Our platform is designed to bring people together across different faiths, cultures, and interests through meaningful events.
            </motion.p>

            {/* Image Section */}
            <motion.img 
                src="https://t3.ftcdn.net/jpg/07/16/61/74/360_F_716617451_g8NSrtzvYd2XAq3wZO7YbxkWntz12r6Z.jpg"
                alt="Community gathering"
                className="w-full max-w-lg sm:max-w-md md:max-w-3xl rounded-lg shadow-md mb-5 sm:mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            />

            {/* Mission Section */}
            <motion.div 
                className="max-w-lg sm:max-w-md md:max-w-3xl text-left bg-white p-4 sm:p-5 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <h2 className="text-lg sm:text-base md:text-xl font-semibold text-blue-700">Our Mission</h2>
                <ul className="list-disc pl-4 sm:pl-5 mt-2 text-gray-600 text-sm sm:text-xs md:text-base">
                    <li><strong>Unite people</strong> through shared experiences and common values.</li>
                    <li><strong>Provide a space</strong> for faith-based and community-driven events.</li>
                    <li><strong>Encourage inclusivity</strong> for individuals of all backgrounds.</li>
                </ul>
            </motion.div>

            {/* Link to Event Page */}
            <motion.div 
                className="mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/events">
                    <button className="bg-blue-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-3 text-sm sm:text-base md:text-lg rounded-full shadow-md hover:bg-blue-700 transition">
                        Explore Events
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}

export default About;
