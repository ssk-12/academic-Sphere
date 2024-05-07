
import { SidebarItem } from '@/app/components/SidebarItem'
import { fetchClassDetails } from '@/app/lib/actions/fetchClassDetails'
import React from 'react'

 

async function page({ params }: any) {
  const {class_Details,class_enrollments} = await fetchClassDetails(params.classId)

  console.log(class_Details);
  console.log(class_enrollments);
  
  
  return (
    <div>
      
    </div>
  )

}

export default page

