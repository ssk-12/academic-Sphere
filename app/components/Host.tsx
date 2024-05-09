"use client"
import React, { useState } from 'react';
import CreateEvent from './CreateEvent';
import Events from './Events';

function Host({ class_id, events }: any) {
    const [selected, setSelected] = useState("Create event");

   
    const getButtonClasses = (buttonType: string) => {
        return `min-w-[150px] rounded-2xl px-6 py-2 ${selected === buttonType ? 'bg-white text-black' : 'bg-black text-white hover:bg-white hover:text-black'}`;
    };

    return (
        <div className='h-full w-full flex flex-col md:flex-row md:max-w-full'>
            <div className='h-1/4 md:h-full w-full md:w-1/4 flex flex-col md:justify-center md:items-center'>
                <div className='md:h-[289px] md:w-[200px] flex md:flex-col rounded-2xl justify-center items-center bg-slate-900 mt-4 md:mt-0 mb-4 md:mb-0'>
                    <div className='p-2'>
                        <button onClick={() => setSelected("See events")}
                            className={getButtonClasses("See events")}>
                            See events
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setSelected("Create event")}
                            className={getButtonClasses("Create event")}>
                            Create event
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-1/4 md:h-full w-full md:w-3/4 md:flex md:justify-center md:items-center'>
                {selected === "Create event" && <CreateEvent classId={class_id} />}
                {selected === "See events" && <Events class_id={class_id} events={events} user={false} />}
            </div>
        </div>
    );
}

export default Host;
