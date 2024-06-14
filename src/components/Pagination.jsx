import React from 'react';

export default function Pagination({onClick}) {
  return (
    <nav>
    <div className='flex text-cyan-500 text-xl'>
        <ul className="flex gap-5 z-1">
        <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer" onClick={() => onClick("All")}>All</li>
        <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer" onClick={() => onClick("Web Apps")}>Web Apps</li>
        <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ff19f3] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#ff19f3] hover:border-[#ff19f3] cursor-pointer" onClick={() => onClick("Games")}>Games</li>
        </ul>
    </div>
    </nav>
  )
}
