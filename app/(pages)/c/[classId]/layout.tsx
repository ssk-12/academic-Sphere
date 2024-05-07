import { SidebarItem } from '@/app/components/SidebarItem';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  params: { classId: string };
};

const UsernameLayout = ({ children, params }: LayoutProps) => {
  return (

    <div className="h-full flex flex-col">
      <div className="flex items-center justify-center md:m-2" style={{ height: '8%' }}>
        <div className="fixed md:w-[600px] rounded-2xl  flex justify-center items-center gap-[1px] md:gap-3 bg-gray-800">

          <SidebarItem
            baseHref="/c/"
            id={params.classId}
            dynamic={"/stream"}
            icon={<StreamIcon />}
            title="Stream"
          />
          <SidebarItem
            baseHref="/c/"
            id={params.classId}
            icon={<PeopleIcon />}
            title="People"
            dynamic={"/people"}
          />
          <SidebarItem
            baseHref="/c/"
            id={params.classId}
            icon={<AttendanceIcon />}
            title="Mark attendance"
            dynamic={"/mark"}
          />
        </div>
      </div>
      <div className="w-full flex-grow flex items-center justify-center flex-wrap  overflow-y-auto">
        {children}
      </div>
    </div>


  );
};

export default UsernameLayout;

function StreamIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>

}

function PeopleIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
  </svg>

}

function AttendanceIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>

}
