import React from 'react'
import { fetchClassDetails } from '../lib/actions/fetchClassDetails'

async function RenderClass({classId}:{classId : string}) {

    console.log(classId);
    

    const {class_enrollments} = await fetchClassDetails(classId)
  return (
    <div>
      {class_enrollments.map((cd :any)=>(
        <div key={cd.id}>
          <div>
            
            {cd.id}
            {cd.class.name}
            {cd.class.subject}
            {cd.user.host}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RenderClass