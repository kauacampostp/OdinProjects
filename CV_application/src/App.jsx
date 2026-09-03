import { useState } from "react";
import Section from "./components/Section";
import GeneralInfoSection from "./components/GeneralInfoSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
// import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phoneNumber: "" });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  return (
    <>
      <Section title="General Info" section={GeneralInfoSection} aoSalvar={setGeneralInfo} />
      <Section title="Education" section={EducationSection} aoSalvar={setEducation} area={education}/>
      <Section title="Experience" section={ExperienceSection} aoSalvar={setExperience} area={experience}/>
    </>
  );
}

export default App;
