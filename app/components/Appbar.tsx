import { usePathname, useRouter } from "next/navigation";
import { Button } from "./Button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    const router = useRouter();
    const pathname = usePathname()
    return <div className="flex justify-between border-b px-4 py-1 bg-[#d6dff1]  rounded-b-sm border-slate-300 max-h-[70px]">
        <div className="text-lg flex justify-center items-center gap-2 font-bold">
            <img className="w-8 h-8 rounded-full" src="https://www.svgrepo.com/show/528641/square-academic-cap-2.svg" alt="Logo" />
            <div className="text-2xl font-semibold">Sphere</div>
        </div>
        <div className="flex gap-3 items-center justify-center m-2">
            {(pathname === '/home' || pathname === '/dash') && (
                <div className="cursor-pointer">
                    <img className="w-9 h-9 p-2 rounded-full hover:bg-opacity-10 hover:bg-slate-500" src="https://www.svgrepo.com/show/99553/plus.svg" alt="Plus icon" />
                </div>
            )}
            <div>
                <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            </div>
        </div>
    </div>
}