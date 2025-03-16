import { useState } from "react";

function EventForm({ addEvent }) {
    const [eventData, setEventData] = useState({
        title: "",
        date: "",
        location: "",
        category: "Religious",
        description: "", 
        image: ""  
    });

    // Handle text input changes
    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    // Handle file upload (Convert to Base64)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEventData({ ...eventData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!eventData.title || !eventData.date || !eventData.location || !eventData.description || !eventData.image) {
            alert("Please fill all fields");
            return;
        }
        addEvent(eventData);
        setEventData({ title: "", date: "", location: "", category: "Religious", description: "", image: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={eventData.title} onChange={handleChange} className="border p-2 block w-full mt-2" placeholder="Title" required />
            <input name="date" type="date" value={eventData.date} onChange={handleChange} className="border p-2 block w-full mt-2" required />
            <input name="location" value={eventData.location} onChange={handleChange} className="border p-2 block w-full mt-2" placeholder="Location" required />
            
            <select name="category" value={eventData.category} onChange={handleChange} className="border p-2 block w-full mt-2">
                <option>Religious</option>
                <option>Social</option>
                <option>Charity</option>
                <option>Others</option>
            </select>

            {/* Description Input */}
            <textarea 
                name="description" 
                value={eventData.description} 
                onChange={handleChange} 
                className="border p-2 block w-full mt-2 h-24 resize-none" 
                placeholder="Event Description" 
                required 
            />

            {/* Image Upload */}
            <input type="file" accept="image/*" onChange={handleImageChange} className="border p-2 block w-full mt-2" required />
            
            {/* Preview Uploaded Image */}
            {eventData.image && <img src={eventData.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />}

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-4 w-full">Add Event</button>
        </form>
    );
}

export default EventForm;
