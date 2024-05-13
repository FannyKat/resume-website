import React from 'react';
import WorkIcon from '@mui/icons-material/Work';

const Experience = ({ id, date, location, title, text, missions }) => {
  return (
    <div className="bg-[#D8BFD8] rounded-md p-6 w-full w-2/3 shadow-lg h-full">
      <h3 className="font-bold text-lg mb-4 text-[#4B0082]">{title}</h3>
      <div className="text-sm text-[#4B0082]">{date}</div>
      <div className="text-sm text-[#4B0082]">{location}</div>
      <div className="font-bold mt-4 text-[#4B0082]">{text}</div>
      <ul className="mt-5">
        {missions.map(mission => (
          <li className="mt-3 ml-3 list-disc" key={mission.id}>{mission.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Experiences ({ datas }) {
  return (
    <div className="lg:mt-40 pb-10 mb-20">
      <h2 className="text-white font-bold text-4xl mb-20">
        <WorkIcon className="mr-3" />
        Experiences
      </h2>
      <ul className="grid grid-flow-row lg:grid-cols-4 py-8 gap-8 mt-10">
        {datas.map(( experience, index ) => (
          <li key={index}>
            <Experience index={index} {...experience} />
          </li>
        ))}
      </ul>
    </div>
  )
} 