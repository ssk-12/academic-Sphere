import People from '@/app/components/People'
import { fetchClassDetails } from '@/app/lib/actions/fetchClassDetails'
import React from 'react'

async function page({params}:{params:{classId:string}}) {
    const {class_enrollments} = await fetchClassDetails(params.classId)
  return (
    <div className='flex flex-col justify-center items-center '>
        <People class_enrollments={class_enrollments}/>
    </div>
  )
}

export default page