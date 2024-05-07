import React from 'react'

function People({ class_enrollments }: any) {
    // console.log(class_enrollments[0].id);

    return (
        <div>
            {class_enrollments.length > 0 ?
            class_enrollments.map((e: any) => (
                <div key={e.id} className='p-2 h-full flex flex-col justify-start items-start'>

                    <div className="flex items-center gap-4">
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">{e.user.name.substring(0, 2) || "A"}</span>
                        </div>
                        <div className="font-medium dark:text-white">
                            <div>{e.user.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{e.user.id}</div>
                        </div>
                    </div>

                </div>
            )) : <div>No one enrolled yet. share class code</div>
            }
        </div>

    )
}

export default People