"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
    baseHref, 
    id,
    title,
    icon,
    dynamic
}: {
    baseHref: string;
    id?: string;
    title: string;
    icon: React.ReactNode;
    dynamic?: string
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const fullHref = id ? (dynamic ? `${baseHref}${id}${dynamic}` : `${baseHref}${id}`) : baseHref;

    const selected = pathname === fullHref;

    return (
        <div>
            <div className={`flex ${selected ? "text-white" : "text-slate-500"} cursor-pointer p-2`} onClick={() => {
                router.push(fullHref);
            }}>
                <div className="pr-2">
                    {icon}
                </div>
                <div className={`font-bold ${selected ? "text-white" : "text-slate-500"}`}>
                    {title}
                </div>
            </div>
        </div>
    );
}
