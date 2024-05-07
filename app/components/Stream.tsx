import React from 'react'

function Stream({ classDetails }: any) {
    // console.log(classDetails);
    
    return (    
        <div className=' h-full'>
            <div className='w-full  flex-wrap bg-[#d6dff1] h-52 rounded-2xl flex flex-col'>
                <div className='p-3 flex items-end h-full gap-4'>
                    <div className='flex justify-between items-center w-full'>
                        <h3 className=' text-3xl'>{classDetails.name}</h3>
                        <h3>Subject : {classDetails.subject}</h3>
                    </div>

                </div>
            </div>
            <div className='p-3 flex gap-4'>
                <div className='flex flex-col gap-2 rounded-2xl min-w-[420px]'>
                    <div className='font-semibold'>Class Code</div>
                    <h4 className='text-sm ' >{classDetails.id}</h4>
                </div>
                <div className=' flex justify-center items-center w-full'>
                    <p>You can share here to the class</p>
                </div>
            </div>
        </div>
    )
}

export default Stream