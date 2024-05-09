import React, { useState } from 'react';
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
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => setShowMenu(!showMenu);

    
    const handleCreateClass = () => {
        router.push("/create");
        setShowMenu(false);
    };

    
    const handleJoinClass = () => {
        router.push("/join");
        setShowMenu(false); 
    };

    return (
        <div className="flex justify-between border-b px-4 py-1 bg-[#d6dff1] rounded-b-sm border-slate-300 max-h-[70px] fixed top-0 w-full">
            <div className="text-lg flex justify-center items-center gap-2 font-bold">
                <img className="w-8 h-8 rounded-full" src="https://www.svgrepo.com/show/528641/square-academic-cap-2.svg" alt="Logo" />
                <div className="text-2xl font-semibold">Sphere</div>
            </div>
            <div className="flex gap-3 items-center justify-center m-2">
                {(pathname === '/home' || pathname === '/dash') && (
                    <div onClick={toggleMenu} className="cursor-pointer relative">
                        <img className="w-9 h-9 p-2 rounded-full hover:bg-opacity-10 hover:bg-slate-500" src="https://www.svgrepo.com/show/99553/plus.svg" alt="Plus icon" />
                        {showMenu && (
                            <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                                <div className="text-sm text-gray-700 min-w-[125px] max-w-[350px]">
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleCreateClass}>Create Class</div>
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleJoinClass}>Join Class</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div>
                    <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
                </div>
            </div>
        </div>
    );
}
