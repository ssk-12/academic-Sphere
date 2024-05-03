import { Suspense } from 'react';
import { fetchClass } from "@/app/lib/actions/fetchClasses";

interface classItem {
    id: string;
    name: string;
    subject: string
    user: {
        name: string
    }

}

async function Classes() {

    const classes = await fetchClass();

    return (<div>
        {classes.length > 0 ? (
            <div className="flex justify-start items-center gap-6 flex-wrap p-20 pt-24">
                {classes.map((classItem: classItem) => (
                    <div key={classItem.id} className=" shadow-lg cursor-pointer flex flex-col  min-w-64">
                        <div className='flex flex-col p-4 rounded-t-lg bg-gray-400'>
                            <h2 className="font-bold text-2xl">{classItem.name}</h2>
                            <p className='text-sm'>{classItem.subject}</p>
                            <p className='text-sm'>{classItem.user?.name}</p>
                        </div>
                        <div className="border-t-4 rounded-b-lg max-h-10 flex justify-end items-center bg-slate-800 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>

                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="font-semibold flex items-center justify-center min-h-[calc(100vh-46px)]">No Classes</p>
        )}
    </div>)
}

export default function BlogsPage() {
    return (
        <Suspense fallback={<p className='mt-20 p-12'>Loading...</p>}>
            <Classes />
        </Suspense>
    );
}