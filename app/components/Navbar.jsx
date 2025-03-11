import Image from "next/image";
import whatbytes from '../../public/logo.avif'
import profile from '../../public/profile.png'

export default function Navbar({toggleSidebar}){
    return(
        <>
        <nav className='p-4 flex items-center justify-between border-b border-b-gray-200'>
            <div className="flex items-center" >
                <Image src={whatbytes} alt='whatbytes' className="w-1/6"/>
               <h1 className="text-3xl font-bold">WhatBytes</h1>
            </div>
          
          
          <div className="hidden md:flex items-center border border-gray-300 rounded-md shadow">
            <Image src={profile} width='50' height = '50' alt='img' className="rounded-full w-1/6 m-1"/>
            <p className="m-1 font-bold">Rahil Siddique</p>
          </div>

          <button onClick = {toggleSidebar} className="md:hidden text-2xl">&equiv;</button>
        </nav>
        </>
    )
}