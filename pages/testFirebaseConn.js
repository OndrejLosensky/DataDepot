import { db } from '../src/app/firebaseConfig';// Import your Firebase Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import React, { useState } from 'react';
import Link from 'next/link';

async function addDataToFirestore(name, email, message) {
    try {
        const docRef = await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

export default function Messages() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addDataToFirestore(name, email, message);
        if (added) {    
            setName("");
            setEmail("");
            setMessage("");
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
            }, 3000); // Hide the alert after 3 seconds
        }
    };

    return (
       <div className="flex h-screen flex-col items-center p-24">
            <Link className='absolute top-8 left-8' href="/backend/dashboard">  Back </Link>
            <h1 className="text-3xl font-bold mb-6">Send message to Firebase DB</h1>
            <form onSubmit={handleSubmit} className="flex w-[400px] flex-col gap-4">
                <div className='flex flex-col'>
                    <label className="text-lg font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="text-lg font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="text-lg font-semibold">Message</label>  
                    <textarea 
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </form>
            {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your message has been sent.</span>
                </div>
            )}
       </div>
    )
}
