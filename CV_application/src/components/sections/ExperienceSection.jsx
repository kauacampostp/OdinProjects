import { useState } from "react";
import ExperienceForm from "../forms/ExperienceForm";
import ItemButtons from "../buttons/ItemButtons";

export default function ExperienceSection({ aoSalvar, area, deleteItem }) {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleAddBtn() {
    if (area.length >= 4) {
      alert("You can add a maximum of 4 experiences.");
      return;
    }
    setEditIndex(null);
    setShowForm((showForm) => !showForm);
  }

  function handleEditBtn(index) {
    setEditIndex(index);
    setShowForm(true);
  }

  const itemToEdit = editIndex !== null ? area[editIndex] : null;

  return (
    <>
      {showForm ? (
        <ExperienceForm
          aoSalvar={aoSalvar}
          cancelBtn={handleAddBtn}
          area={area}
          itemToEdit={itemToEdit}
          editIndex={editIndex}
        />
      ) : (
        <>
          <section className="">
            {area.map((exp, index) => (
              <div
                key={index}
                className="bg-blue-100 flex flex-col justify-between mb-2 p-2 border rounded-lg"
              >
                <h2 className="font-bold">{exp.companyName}</h2>
                <div className="flex-col mb-2">
                  <h3 className="font-semibold">{exp.positionTitle}</h3>
                  <span className="font-semibold">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="mb-2 " >{exp.description}</p>
                <ItemButtons
                  deleteItem={() => deleteItem(index)}
                  editBtn={() => handleEditBtn(index)}
                />
              </div>
            ))}
          </section>

          <button
            className="b-2 text-sm font-semibold w-full border border-black-300 rounded-lg px-3 py-2 "
            onClick={handleAddBtn}
          >
            <span>+ </span>Experience
          </button>
        </>
      )}
    </>
  );
}
