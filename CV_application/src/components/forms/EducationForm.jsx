import { useState } from "react";
import FormButtons from "../buttons/FormButtons";

export default function EducationForm({
  aoSalvar,
  cancelBtn,
  area,
  itemToEdit,
  editIndex,
}) {
  const [school, setSchool] = useState(itemToEdit ? itemToEdit.school : "");
  const [degree, setDegree] = useState(itemToEdit ? itemToEdit.degree : "");
  const [startDate, setStartDate] = useState(
    itemToEdit ? itemToEdit.startDate : "",
  );
  const [endDate, setEndDate] = useState(itemToEdit ? itemToEdit.endDate : "");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { school, degree, startDate, endDate };
    if (editIndex !== null) {
      const newArray = [...area];

      newArray[editIndex] = data;

      aoSalvar(newArray);
    } else {
      aoSalvar([...area, data]);
    }

    cancelBtn();
  }

  return (
    <>
      <form className="education-form" onSubmit={handleSubmit}>
        <h2 className="font-semibold mb-1">School</h2>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          placeholder="Enter School/University"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          required
        ></input>

        <h2 className="font-semibold mb-1">Degree</h2>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Enter your degree"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          required
        ></input>

        <div className="flex flex-col md:flex-row gap-1 mb-1">
          <div className="flex-1">
            <h2 className="font-semibold mb-1">Start Date</h2>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Enter the start date"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              required
            ></input>
          </div>

          <div className="flex-1">
            <h2 className="font-semibold mb-1">End Date</h2>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Enter the end date"
            ></input>
          </div>
        </div>
        <FormButtons cancelBtn={cancelBtn} />
      </form>
    </>
  );
}
