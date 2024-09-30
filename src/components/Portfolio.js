import React from 'react'
import CodeIcon from '@mui/icons-material/Code';

function Portfolio({ datas }) {
  return (
    <div className="lg:mt-40 pb-10 mb-20">
      <h2 className="text-white font-bold text-4xl mb-20">
        <CodeIcon className="mr-3" />
        Portfolio
      </h2>
      <ul className="grid grid-flow-row lg:grid-cols-4 py-8 gap-8 mt-10">
        {datas.map(( item, index ) => (
          <li key={index}>
            <div className="bg-[#D8BFD8] rounded-md w-full w-2/3 shadow-lg h-full hover:opacity-75 cursor-pointer">
              <a href={item.url} className="" target="_blank">
                <img src={item.image} alt={item.description} className="w-full rounded-t-md" />
              </a>
              <div className="md:text-left p-3 rounded-b-md font-bold text-lg text-[#4B0082] text-center">{item.description}</div>
              <div className="flex flex-row m-5">
                {item.icon.map((tech, index) => (
                  <img key={index} src={tech} className="mr-2 h-8 w-8" />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio