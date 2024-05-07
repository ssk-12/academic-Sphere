"use client"
import React, { useState } from 'react'
import Stream from './Stream';
import CreateEvent from './CreateEvent';
import Events from './Events';

function Host({class_id, events}:any) {
    const[selected, setSelected] = useState("Create event");
    return (
        <div className='h-full w-full flex'>
            <div style={{ width: "25%" }} className='h-full flex flex-col justify-center items-center'>

                <div className=' p-2'>
                    <button onClick={()=>{setSelected("See events")}} className=' bg-black text-white min-w-[150px] rounded-2xl px-6 py-2' type="button">See events</button>
                </div>
                <div>
                    <button onClick={()=>{setSelected("Create event")}} className=' bg-black text-white min-w-[150px] rounded-2xl px-6 py-2' type="button">Create event</button>
                </div>
                
            </div>
            <div style={{ width: "75%" }} className=' h-full flex justify-center items-center'>
                {(selected === "Create event") && <CreateEvent classId={class_id}/>}
                {(selected === "See events") && <Events class_id = {class_id} events={events} user={false} />}
            </div>
        </div>
    )
}

export default Host

