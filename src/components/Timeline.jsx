import * as React from 'react';

export default function OutlinedTimeline() {
  return (
<div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-10">
      <h2 className="text-3xl text-center font-bold text-cyan-500 uppercase">Timeline</h2>
      <div className="border-t-2 mt-10">
        <div className="transform transition cursor-pointer hover:-translate-y-2 mt-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-600 absolute -top-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div className="w-1 h-10 bg-blue-300 absolute -top-10 z-0"></div>


          <div className="flex-auto">
            <h1 className="text-lg">Day 1</h1>
            <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
            <h3>Classroom</h3>
          </div>
        </div>

      </div>
    </div>
  );
}
