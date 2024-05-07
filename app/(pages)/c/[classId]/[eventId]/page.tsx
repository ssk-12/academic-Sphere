import React from 'react'

function page({params}:{params : {eventId: string}}) {
  return (
    <div>{params.eventId}</div>
  )
}

export default page