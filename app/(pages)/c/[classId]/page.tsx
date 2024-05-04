import ClassAppbar from '@/app/components/ClassAppbar'
import RenderClass from '@/app/components/RenderClass'
import { fetchClassDetails } from '@/app/lib/actions/fetchClassDetails'
import React from 'react'

async function page({ params }: any) {
  const eachClass = await fetchClassDetails(params.classId)
  return (
    <div>
      <div className="fixed top-[60px] w-screen">
        <ClassAppbar eachClass={eachClass} />
      </div>
    </div>
  )

}

export default page