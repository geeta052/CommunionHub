import { useState } from "react";
import { motion } from "framer-motion";
import eventsData from "../utils/eventsData";
import EventForm from "../components/EventForm";

function Events() {
    const [events, setEvents] = useState(eventsData);
    const [filter, setFilter] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter function
    const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

    // Function to Add new event & close modal
    function handleAddEvent(newEvent) {
        const eventToAdd = { ...newEvent, id: events.length + 1 };
        setEvents([...events, eventToAdd]);
        setIsModalOpen(false);

        // Delay the alert until the modal closes
        setTimeout(() => {
            alert("Event Added Successfully!");
        }, 200);
    }

    return (
        <div className={`p-6 md:p-10 md:px-20 relative transition-all duration-300 ${isModalOpen ? "backdrop-blur-md" : ""}`}>
            {/* Page Title & Add Event Button */}
            <div className="flex justify-between items-center mb-6 w-full md:w-auto">
                <h1 className="text-lg font-bold md:text-2xl xl:text-3xl">Upcoming Events</h1>
                <button 
                    className="bg-blue-600 text-white py-1 px-3 text-xs md:px-4 md:py-2 md:text-sm rounded-full shadow-md hover:bg-blue-700 transition w-[80px] md:w-auto"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Add
                </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-2 sm:gap-4 mb-6 flex-wrap">
                {["All", "Religious", "Social", "Charity", "Others"].map((event) => (
                    <motion.button
                        key={event}
                        className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-full text-white font-semibold transition-all ${
                            filter === event ? "bg-blue-600 scale-110" : "bg-gray-400"
                        }`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setFilter(event)}
                    >
                        {event}
                    </motion.button>
                ))}
            </div>

            {/* Events List */}
            <motion.div 
                className="grid justify-center sm:w-auto md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {filteredEvents.map(event => (
                    <motion.div
                        key={event.id}
                        className="p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full sm:w-auto h-[420px] flex flex-col"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg" />
                        <h2 className="text-lg font-semibold mt-3">{event.title}</h2>
                        <p className="text-gray-600 text-sm">{event.date} - {event.location}</p>
                        <p className="mt-2 text-sm flex-grow">{event.description}</p>
                        <span className="text-lg font-bold text-blue-600 mt-2 block">{event.category}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg h-screen">
                    <motion.div 
                        className="relative bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-[400px] max-h-[90vh] overflow-auto"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Event Form */}
                        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
                        <EventForm addEvent={handleAddEvent} />
                    </motion.div>
                </div>
            )}
        </div>
    );
}

export default Events;
