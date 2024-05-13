import { skills } from "../datas/Skills"
import TerminalIcon from '@mui/icons-material/Terminal';

const Skill = ({ id, name, language, icon }) => {
  return (
  <div className="bg-[#D8BFD8] rounded-md p-6 w-full w-2/3 shadow-lg h-full">
    <h3 className="font-bold text-lg mb-4 text-[#4B0082]">{name}</h3>
    <ul className="flex flex-wrap">
      {language.map((skill, index) => (
        <li key={index} className="flex items-center mb-3 w-1/2">
          {icon[index] && (
            <img src={icon[index]} alt={skill} className="mr-2 h-8 w-8" />
          )}
          {skill}
        </li>
      ))}
    </ul>
  </div>
  )
};

export default function Skills () {
  return (
    <div className="lg:mt-40 pb-10 mb-20">
      <h2 className="text-white font-bold text-4xl mb-20">
        <TerminalIcon className="mr-3" />
        Skills
      </h2>
      <ul className="grid grid-flow-row lg:grid-cols-4 py-8 gap-8 mt-10">
        {skills.map((skill, index) => (
          <li key={skill.id} className="h-full">
            <Skill key={skill.id} index={index} {...skill} />
          </li>
        ))}
      </ul>
    </div>
  )
}
