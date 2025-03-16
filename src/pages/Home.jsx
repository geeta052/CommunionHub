import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-0 flex flex-col items-center"
        >
            {/* Heading */}
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl xl:text-6xl font-bold"
            >
                Connect Communities
            </motion.h2>

            {/* Short Description */}
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-600 mt-2 text-base xl:text-[20px] w-[90%] xl:w-[70%]"
            >
                A platform designed to bring people together, share experiences, and grow as a community. 
                We empower individuals to explore events, connect with like-minded people, and strengthen 
                their faith through technology.
            </motion.p>

            <div className="flex flex-col p-0 md:flex-row items-center justify-between md:p-10 mx-4 md:mx-20">
                {/* Left Side*/}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="xl:w-1/2 text-left"
                >
                    <h2 className="text-3xl xl:text-5xl md:items-start font-bold flex flex-col sm:items-center mt-18">
                        Unite, Innovate, <br />
                        <span className="flex items-center gap-2">
                            Connect, Inspire
                        </span>
                        Together
                    </h2>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full w-fit mt-3"
                    >
                        <div className="flex -space-x-2">
                            <img
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/4.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/5.jpg"
                                className="w-8 h-8 rounded-full border-2 border-white"
                                alt="User"
                            />
                        </div>
                        <p className="text-sm font-semibold">+8 people</p>
                    </motion.div>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-gray-600 mt-4 text-base md:w-[300px] xl:text-lg xl:w-[650px]"
                    >
                        Join us to be part of a community where spirituality meets innovation. Together,
                        we'll build a world that's more inclusive, engaging, and connected than ever before!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mt-6"
                    >
                        <Link
                            to="/events"
                            className="bg-blue-600 text-white px-4 py-2 xl:px-6 xl:py-3 rounded-full text-sm xl:text-lg font-semibold transition-all duration-300 hover:bg-blue-800"
                        >
                            Explore Events
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="relative w-full xl:w-[600px] h-[250px] xl:h-[400px] mt-10 xl:mt-0 md:w-[490px] custom-image-container"
                >
                    {[
                        {
                            src: "https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif",
                            position: "bottom-0 left-0",
                        },
                        {
                            src: "http://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp",
                            position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        },
                        {
                            src: "https://communionhub.org/static/media/event-3.518ca15d6caff0f2e0c9.avif",
                            position: "top-0 right-0",
                        },
                    ].map(({ src, position }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            whileTap={{ y: 0, transition: { duration: 0.2 } }}
                            className={`absolute ${position} w-24 h-38 mx-[-5px] xl:w-44 xl:h-72 rounded-full overflow-hidden shadow-lg transition-all md:w-28 md:h-50`}
                        >
                            <img
                                src={src}
                                className="w-full h-full object-cover"
                                alt={`Community ${index + 1}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Home;
