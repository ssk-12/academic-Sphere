"use client"
import { create } from 'domain';
import React, { useState } from 'react';
import { createEvent } from '../lib/actions/createEvent';

const CreateEvent = ({classId}:{classId:string}) => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [proximity, setProximity] = useState('');
    const [timestamp, setTimestamp] = useState('');

    const handleLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        function success(position: GeolocationPosition) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLocation(`${latitude},${longitude}`);
        }

        function error() {
            alert('Unable to retrieve your location');
        }

        navigator.geolocation.getCurrentPosition(success, error);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!location) {
            alert('Please allow access to your location.');
            return;
        }

        const event = {
            class_id:classId,
            name,
            location,
            proximity: parseFloat(proximity),
            timestamp,
        };

        const res = await createEvent(event)


    };

    return (
        <div className="create-event-container p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Create Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Event Name"
                    required
                />
                <div>
                    <button
                        type="button"
                        onClick={handleLocation}
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Use My Location
                    </button>
                    <p className="mt-2 text-sm text-gray-500">Location: {location || 'Not set'}</p>
                </div>
                <input
                    type="text"
                    value={proximity}
                    onChange={(e) => setProximity(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Proximity (in meters)"
                    required
                />
                <input
                    type="datetime-local"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;