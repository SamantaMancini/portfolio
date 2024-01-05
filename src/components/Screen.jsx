import React from 'react'

export default function Screen ({children}) {
  return (
    <div className='b_glow border-2 border-[#ff19f3] rounded-3xl mx-auto lg:w-[50rem] mt-5 bg-slate-900'>
        {children}
    </div>
  )
}
