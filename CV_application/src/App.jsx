import { useState } from "react";
import Section from "./components/Section";
import GeneralInfoSection from "./components/sections/GeneralInfoSection";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import Preview from "./components/Preview";
import "./styles/index.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  function deleteEducation(indexDelete) {
    const newArray = education.filter((item, index) => {
      return index !== indexDelete;
    });
    setEducation(newArray);
  }

  function deleteExperience(indexDelete) {
    const newArray = experience.filter((item, index) => {
      return index !== indexDelete;
    });
    setExperience(newArray);
  }

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-8">
      <div className=" mx-auto flex max-w-[1400px] flex-col gap-6 lg:flex-row lg:items-start">
        <section className="w-full lg:w-[380px] lg:shrink-0 print:hidden">
          <Section
            title="General Info"
            section={GeneralInfoSection}
            aoSalvar={setGeneralInfo}
          />
          <Section
            title="Education"
            section={EducationSection}
            aoSalvar={setEducation}
            area={education}
            deleteItem={deleteEducation}
          />
          <Section
            title="Experience"
            section={ExperienceSection}
            aoSalvar={setExperience}
            area={experience}
            deleteItem={deleteExperience}
          />
        </section>
        <section className="w-full lg:flex-1">
          <div className="mb-3 flex justify-end print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-md bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-700"
            >
              Print Resume
            </button>
          </div>
          <div className=" a4-preview mx-auto w-full max-w-[210mm] aspect-[210/297] bg-white shadow-xl overflow-hidden">
            <Preview
              generalInfo={generalInfo}
              experienceInfo={experience}
              educationInfo={education}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
