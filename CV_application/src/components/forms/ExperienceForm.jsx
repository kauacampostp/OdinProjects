import { useState } from "react";
import FormButtons from "../buttons/FormButtons";

export default function ExperienceForm({
  aoSalvar,
  cancelBtn,
  area,
  itemToEdit,
  editIndex,
}) {
  const [companyName, setCompanyName] = useState(
    itemToEdit ? itemToEdit.companyName : "",
  );

  const [positionTitle, setPositionTitle] = useState(
    itemToEdit ? itemToEdit.positionTitle : "",
  );

  const [startDate, setStartDate] = useState(
    itemToEdit ? itemToEdit.startDate : "",
  );

  const [endDate, setEndDate] = useState(itemToEdit ? itemToEdit.endDate : "");

  const [description, setDescription] = useState(
    itemToEdit ? itemToEdit.description : "",
  );

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      companyName,
      positionTitle,
      startDate,
      endDate,
      description,
    };

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
    <form onSubmit={handleSubmit}>
      <h2 className="font-semibold mb-1">Company name</h2>

      <input
        type="text"
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        value={companyName}
        placeholder="Enter the company name"
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />

      <h2 className="font-semibold mb-1">Position Title</h2>

      <input
        type="text"
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        value={positionTitle}
        placeholder="Enter the position title"
        onChange={(e) => setPositionTitle(e.target.value)}
        required
      />
      <div className="flex flex-col md:flex-row gap-1 mb-1">
        <div className="flex-1">
          <h2 className="font-semibold mb-1">Start Date</h2>
          <input
            type="date"
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="flex-1">
          <h2 className="font-semibold mb-1">End Date</h2>

          <input
            type="date"
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <h2 className="font-semibold mb-1">Description</h2>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your main responsibilities and achievements"
        maxLength={180}
        rows={3}
        required
        className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />

      <FormButtons cancelBtn={cancelBtn} />
    </form>
  );
}
