import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

export default function Formations ({ datas }) {
  return (
    <div className="lg:mt-40 pb-10 mb-20">
      <h2 className="text-white font-bold text-4xl mb-20">
        <SchoolIcon className="mr-3" />
        Formations
      </h2>
      <ul className="grid grid-flow-row lg:grid-cols-4 py-8 gap-8 mt-10">
        {datas.map(( formation, index ) => (
          <li>
            <div className="bg-[#D8BFD8] rounded-md p-6 w-full w-2/3 shadow-lg h-full">
              <h3 className="font-bold text-lg mb-4 text-[#4B0082]">{formation.title}</h3>
              <div className="text-sm text-[#4B0082]">{formation.date}</div>
              <div className="text-sm text-[#4B0082]">{formation.location}</div>
              <div className="mt-4">{formation.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};