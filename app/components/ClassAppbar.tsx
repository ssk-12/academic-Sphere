"use client"
import React, { useState } from 'react';
import Stream from './Stream';

function ClassAppbar({class_Details, class_enrollments}:any) {
    const [selected, setSelected] = useState("Stream");

    const getTabStyle = (tabName: string) => {
        return {
            cursor: 'pointer',
            textDecoration: selected === tabName ? 'underline' : 'none',
            textUnderlineOffset: '4px',
            textDecorationColor: selected === tabName ? 'black' : 'transparent'
        };
    };

    return (
        <>
            <div className='w-full flex gap-8 justify-start items-center bg-white border-b-[2px] border-blue-50 px-4 min-h-8'>
                <div onClick={() => setSelected("Stream")} style={getTabStyle("Stream")}>Stream</div>
                <div onClick={() => setSelected("People")} style={getTabStyle("People")}>People</div>
                <div onClick={() => setSelected("Attendance")} style={getTabStyle("Attendance")}>Attendance</div>
            </div>
            <Stream classDetails={class_Details} />

        </>
    );
}

export default ClassAppbar;
