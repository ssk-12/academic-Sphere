"use client"
import React, { useState } from "react"
import { fetchEvent } from "../lib/actions/fetchEvent"

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

export async function Events({ class_id }: { class_id: string }) {
    

    const {events} = await fetchEvent({ class_id });
    // console.log(res);

    const handleAttend = async (event: Event) => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const userLat = position.coords.latitude;
            const userLong = position.coords.longitude;

            const [eventLat, eventLong] = event.location.split(',').map(Number);
            const distance = calculateDistance(userLat, userLong, eventLat, eventLong);

            if (distance <= event.proximity) {
                try {
                    await axios.post('http://127.0.0.1:8787/api/v1/allevents/attend', {
                        eventId: event.id,
                        userEmail: userem,
                        status: 'PRESENT',
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    alert('Attendance marked as present!');
                } catch (error) {
                    console.error('Error marking attendance:', error);
                    alert('Failed to mark attendance');
                }
            } else {
                alert('You are too far from the event location.');
            }
        }, (error) => {
            console.error('Error getting location:', error);
        });
    };

    function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 6371000; // Earth's radius in meters
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in meters
        console.log("distance ", distance)
        return distance;

    }




    return (
        <div className="mt-3 flex flex-col justify-center items-center gap-3 w-full">Events

            {events.map((event:any) => (
                <div key={event.id} className="event-item bg-gray-100 p-4 rounded-lg flex justify-between items-center min-w-96">
                    <span className="text-gray-700">{event.name} - {new Date(event.timestamp).toLocaleString()}</span>
                    <button
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={()=> handleAttend(event)}
                    >
                        Attend
                    </button>
                </div>
            ))}



        </div>
    )
}

export default Events