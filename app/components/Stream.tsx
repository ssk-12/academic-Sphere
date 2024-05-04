import React from 'react'

function Stream({ classDetails }: any) {
    return (
        <div className='p-10'>
            <div className='w-full bg-[#d6dff1] h-52 rounded-2xl'>
                <div className='p-3 flex items-end h-full gap-4'>
                    <div className='flex justify-between items-center w-full'>
                        <h3 className=' text-3xl'>{classDetails.name}</h3>
                        <h3>Subject : {classDetails.subject}</h3>
                    </div>

                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Stream