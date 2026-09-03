import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceSection({ aoSalvar, area }) {
  const [showForm, setShowForm] = useState(false);

  function handleAddBtn() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      {showForm ? (
        <ExperienceForm
          aoSalvar={aoSalvar}
          cancelBtn={handleAddBtn}
          area={area}
        />
      ) : null}
      <button className="experience-btn-add" onClick={handleAddBtn}>
        Experience
      </button>
    </>
  );
}
