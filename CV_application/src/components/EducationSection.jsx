import { useState } from "react";
import EducationForm from "./EducationForm";

export default function EducationSection({ aoSalvar, area }) {
  const [showForm, setShowForm] = useState(false);

  function handleAddBtn() {
    setShowForm((showForm) => !showForm);
  }
  return (
    <>
      {showForm ? (
        <EducationForm
          aoSalvar={aoSalvar}
          cancelBtn={handleAddBtn}
          area={area}
        />
      ) : null}
      <button className="education-btn-add" onClick={handleAddBtn}>
        Education
      </button>
    </>
  );
}
