import { useState } from "react";
import Buttons from "./Buttons";

export default function ExperienceForm({ aoSalvar, cancelBtn, area }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      companyName,
      positionTitle,
      startDate,
      endDate,
      description,
    };
    aoSalvar([...area, data]);
  }

  return (
    <>
      <form className="expirience-form" onSubmit={handleSubmit}>
        <h2>Company name</h2>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
          required
        ></input>

        <h2>Position Title</h2>
        <input
          type="text"
          value={positionTitle}
          onChange={(e) => setPositionTitle(e.target.value)}
          placeholder="Enter your position title"
          required
        ></input>

        <div className="date-input">
          <h2>Start Date</h2>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Enter the start date"
            required
          ></input>

          <h2>End Date</h2>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Enter the end date"
          ></input>
        </div>

        <h2>Description</h2>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your positionTitle"
        ></input>
        <Buttons cancelBtn={cancelBtn} />
      </form>
    </>
  );
}
