import { Suspense } from 'react';
import { fetchClass } from "@/app/lib/actions/fetchClasses";
import { RenderClasses } from '@/app/components/Classes';



async function Classes() {

    const classes = await fetchClass();

    return (<div>
        {classes.length > 0 ? (
            <RenderClasses classes={classes}></RenderClasses>
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