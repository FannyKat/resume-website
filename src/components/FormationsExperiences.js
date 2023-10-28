import React from 'react'
import Formations from "./Formations"
import dataFormations from "../datas/Formations"
import Experiences from "./Experiences"
import dataExperiences from "../datas/Experiences"

function FormationsExperiences() {
  return (
    <>
      <Experiences datas={dataExperiences} />
      <Formations datas={dataFormations} />
    </>
  )
}

export default FormationsExperiences