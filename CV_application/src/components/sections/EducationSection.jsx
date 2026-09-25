import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import ItemButtons from "../buttons/ItemButtons";

export default function EducationSection({ aoSalvar, area, deleteItem }) {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleAddBtn() {
    if (area.length >= 3) {
      alert("You can add a maximum of 3 education entries.");
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
        <EducationForm
          aoSalvar={aoSalvar}
          cancelBtn={handleAddBtn}
          area={area}
          itemToEdit={itemToEdit}
          editIndex={editIndex}
        />
      ) : (
        <>
          <section>
            {area.map((edu, index) => (
              <div
                key={index}
                className="bg-blue-100 flex flex-col justify-between mb-2 p-2 border rounded-lg"
              >
                <h2 className="font-bold">{edu.degree}</h2>
                <div className="flex-col mb-2">
                  <h3 className="font-semibold ">{edu.school} |</h3>
                  <span className="font-semibold ">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <ItemButtons
                  deleteItem={() => deleteItem(index)}
                  editBtn={() => handleEditBtn(index)}
                />
              </div>
            ))}
          </section>
          <button
            className="b-2 text-sm font-semibold w-full border border-black-300 rounded-md px-3 py-2"
            onClick={handleAddBtn}
          >
            + Education
          </button>
        </>
      )}
    </>
  );
}
