import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/auth'
import { fetchClassDetails } from '@/app/lib/actions/fetchClassDetails';
import CreateEvent from '@/app/components/CreateEvent';
import Events from '@/app/components/Events';
import { fetchEvent } from '@/app/lib/actions/fetchEvent';


async function page({params} : {params:{classId :string}}) {
  const session = await getServerSession(authOptions);
  const {class_enrollments,class_Details} = await fetchClassDetails(params.classId)
  const {events} = await fetchEvent({ class_id:params.classId });
  if(session?.user.id === class_Details?.host_id || ""){
    return (
      <div className='flex flex-col justify-center items-center p-20'>
        Host
        <div>
          <CreateEvent classId={params.classId}/>
        </div>
      </div>
    )    
  }

  else{
    return <div className='flex flex-col justify-center items-center p-20'>
      attendee
      <Events class_id = {params.classId} events={events} />
    </div>
  }
  
}

export default page