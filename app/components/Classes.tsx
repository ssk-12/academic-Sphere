"use client"
import React from 'react'
import { useRouter } from "next/navigation";

interface classItem {
    id: string;
    name: string;
    subject: string
    user: {
        name: string
    }

}

export function RenderClasses({classes}:{classes:[classItem]}) {
    const router = useRouter();
  return (
    <div className="flex justify-start items-center gap-6 flex-wrap p-20 pt-24">
                {classes.map((classItem: classItem) => (
                    <div key={classItem.id} onClick={()=>{router.push("/c/" + classItem.id + "/stream")}} className=" shadow-lg cursor-pointer flex flex-col min-w-64 max-w-64">
                        <div className='flex flex-col p-4 rounded-t-lg bg-gray-400'>
                            <h2 className="font-bold text-2xl">{classItem.name}</h2>
                            <p className='text-sm'>{classItem.subject}</p>
                            <p className='text-sm'>{classItem.user?.name}</p>
                        </div>
                        <div className="border-t-4 rounded-b-lg max-h-10 flex justify-end items-center bg-slate-800 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>

                        </div>
                    </div>
                ))}
            </div>
  )
}