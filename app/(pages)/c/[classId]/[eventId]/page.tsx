import { fetchEventdetails } from '@/app/lib/actions/fetchEventdetails'
import React from 'react'

async function page({ params }: { params: { eventId: string } }) {
  const { attendances } = await fetchEventdetails({ event_id: params.eventId })
  console.log("attendances: ", attendances);

  return (

    <div className=' max-w-sm md:min-w-max'>
      {/* <div>{params.eventId}</div> */}
      {attendances.map((event: any) => (
        <div key={event.user_id} className="event-item bg-gray-100 p-4 rounded-lg flex justify-between items-center min-w-96">
        <span>{`${event.user.name} - ${new Date(event.timestamp).toLocaleString('en-US', { timeZone: 'UTC' })}`}</span>
        <div>{event.status}</div>
    </div>
      ))}
    </div>
  )
}

export default page