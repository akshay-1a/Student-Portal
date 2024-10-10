
import Link from 'next/link';
import React from 'react'
import { LogIn } from 'lucide-react';

export default function Wrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='h-screen bg-slate-950 flex justify-center items-center'>
            <div className="custom-height w-full rounded-xl border-slate-200 border-t-4 border-2 overflow-y-scroll mx-10 my-5">
                <Navbar />
                {children}
            </div>
        </div>
    )
}


function Navbar() {
    return (
        <nav className="nav  relative z-50 pb-1 px-16 flex items-center justify-center w-full">
            <div className='fixed w-full flex justify-center items-center bg-orange-500'>
            <div className='fixed top-[35px]'>
                {/* outer radius for heading div */}
                <b className="left-curve -top-[1px] -left-[20px]"></b>
                <b className="right-curve"></b>
                {/* heading */}
                <Link href="/" className="text-2xl font-bold bg-slate-200 rounded-b-2xl p-2 py-1 ">
                    Rowan University Portal
                </Link>
            </div>
            <div className='fixed top-10 right-10'>
                <Link href="/dashboard" className="relative font-bold text-slate-500 p-2 mix-blend-color-dodge  ">
                    <button className=''>
                        <LogIn />
                    </button>
                </Link>
            </div>
            </div>
        </nav>
    )
}