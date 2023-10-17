import React from 'react'
import "./cursus.css"
import Formations from "./Formations"
import dataFormations from "../datas/Formations"
import Experiences from "./Experiences"
import dataExperiences from "../datas/Experiences"

function FormationsExperiences() {
  return (
    <>
      <Formations datas={dataFormations} />
      <Experiences datas={dataExperiences} />
    </>
  )
}

export default FormationsExperiences