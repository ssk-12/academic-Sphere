import Stream from '@/app/components/Stream'
import { fetchClassDetails } from '@/app/lib/actions/fetchClassDetails'
import React from 'react'

async function page({params}:{params:{classId: string}}) {
  const {class_Details} = await fetchClassDetails(params.classId)
  return (
    <Stream classDetails={class_Details}/>
  )
}

export default page