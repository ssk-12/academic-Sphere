import { Suspense } from 'react';
import { fetchClass } from "@/app/lib/actions/fetchClasses";
import { RenderClasses } from '@/app/components/Classes';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { redirect } from 'next/navigation';



async function Classes() {

    const session = await getServerSession(authOptions);
    if (!session?.user) {
        redirect('/api/auth/signin')
    }

    const { classes, class_enrollments } = await fetchClass();
    // console.log(classes)
    const newclasses = [...classes, ...class_enrollments];

    




    return (
        <div>
            {newclasses.length > 0 ? (
                <RenderClasses classes={newclasses}></RenderClasses>
            ) : (
                <p className="font-semibold flex items-center justify-center min-h-[calc(100vh-46px)]">No Classes</p>
            )}
        </div>
    )
}

export default function BlogsPage() {
    return (
        <Suspense fallback={<p className='mt-20 p-12'>Loading...</p>}>
            <Classes />
        </Suspense>
    );
}