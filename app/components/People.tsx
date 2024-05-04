import React from 'react'

function People({class_enrollments}) {
    console.log(class_enrollments);
    
  return (
    <div>
        hello
        {class_enrollments.map((enrollment)=>{
            <div>{enrollment.class.id}</div>
        })}
    </div>

  )
}

export default People