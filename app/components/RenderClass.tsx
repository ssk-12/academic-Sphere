import React from 'react'
import { fetchClassDetails } from '../lib/actions/fetchClassDetails'

async function RenderClass({classId}:{classId : string}) {

    console.log(classId);
    

    const classDetails = await fetchClassDetails(classId)
  return (
    <div>
      {classDetails.map((cd :any)=>(
        <div key={cd.id}>
          <div>
            
            {cd.id}
            {cd.class.name}
            {cd.class.subject}
            {cd.user.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RenderClass