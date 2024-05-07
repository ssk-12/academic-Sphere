"use client"
import React, { useCallback } from 'react';
import { markAttendance } from '../lib/actions/markAttendance';
import DefButton from './DefButton';

interface Event {
    id: number;
    name: string;
    location: string;  
    proximity: number; 
    timestamp: string; 
    hostId: number;
    latitude: number;
    longitude: number;
}

interface EventsProps {
    class_id: string;
    events: Event[];
    user: boolean;
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371000;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export const Events: React.FC<EventsProps> = ({ class_id, events, user }) => {
    const handleAttend = useCallback(async (event: Event) => {
        const options: PositionOptions = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude: userLat, longitude: userLong } = position.coords;
            const [eventLat, eventLong] = event.location.split(',').map(Number);
            const distance = calculateDistance(userLat, userLong, eventLat, eventLong);

            if (distance <= event.proximity) {
                try {
                    const res = await markAttendance({ class_id, event_id: event.id });
                    if (res.id) {
                        alert('Attendance marked as present!');
                    } else {
                        alert('Failed to mark attendance');
                    }
                } catch (error) {
                    console.error('Error marking attendance:', error);
                    alert('Failed to mark attendance');
                }
            } else {
                alert('You are too far from the event location.');
            }
        }, (error) => {
            console.error('Error getting location:', error);
            alert('Unable to retrieve your location');
        }, options);
    }, [class_id]);

    return (
        <div className="h-full flex flex-col justify-center items-center gap-3 w-full">
            <div>Events</div>
            {events.map((event) => (
                <div key={event.id} className="event-item bg-gray-100 p-4 rounded-lg flex justify-between items-center min-w-96">
                    <span>{`${event.name} - ${new Date(event.timestamp).toLocaleString('en-US', { timeZone: 'UTC' })}`}</span>
                    {user && <button
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        onClick={() => handleAttend(event)}
                    >
                        Attend
                    </button>}
                    {!user && <DefButton href={""+event.id} text="See now"/>}
                </div>
            ))}
        </div>
    );
};

export default Events;
