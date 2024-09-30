import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


function interests({ datas, icon }) {
  return (
    <div className="lg:mt-40 pb-10 mb-20">
      <h2 className="text-white font-bold text-4xl mb-20">
        <SportsEsportsIcon className="mr-3" />
        Interests
      </h2>
      <ul className="grid grid-flow-row lg:grid-cols-4 py-8 gap-8 mt-10">
        {datas.map(( interest, index ) => (
            <li key={index}>
              <div className="bg-[#D8BFD8] rounded-md p-6 w-full w-2/3 shadow-lg h-full">
                <h3 className="font-bold text-lg mb-4 text-[#4B0082] flex items-center mb-2 w-1/2">
                {<img src={interest.icon} alt={interest} className="mr-2 h-8 w-8" />}
                <p className="ml-4">{interest.title}</p>
                </h3>
                <div className="text-sm text-[#4B0082]">{interest.text}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
    
  )
}

export default interests