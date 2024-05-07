import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/auth'
import { fetchClassDetails } from '@/app/lib/actions/fetchClassDetails';
import CreateEvent from '@/app/components/CreateEvent';
import Events from '@/app/components/Events';
import { fetchEvent } from '@/app/lib/actions/fetchEvent';
import Host from '@/app/components/Host';


async function page({params} : {params:{classId :string}}) {
  const session = await getServerSession(authOptions);
  const {class_enrollments,class_Details} = await fetchClassDetails(params.classId)
  const {events} = await fetchEvent({ class_id:params.classId });
  if(session?.user.id === class_Details?.host_id){
    return (
      <div className='flex h-full w-full'>
        <Host class_id={params.classId}  events={events}/>
      </div>
    )    
  }

  else{
    return <div className='flex flex-col justify-center items-center '>
      <Events class_id = {params.classId} events={events} user={true} />
    </div>
  }
  
}

export default page