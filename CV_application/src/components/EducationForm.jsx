import { useState } from "react";
import Buttons from "./Buttons";

export default function EducationForm() {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { school, degree, startDate, endDate};
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>School</h2>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          placeholder="Enter School/University"
          required
        ></input>

        <h2>Degree</h2>
        <input
          type="text"
          value={degree}
          onChange={(e) => setSchool(e.target.value)}
          placeholder="Enter your degree"
          required
        ></input>

        <div className="date-input">
          <h2>Start Date</h2>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Enter the start date"
            required
          ></input>

          <h2>End Date</h2>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Enter the end date"
          ></input>
        </div>
      </form>

      <Buttons />
    </>
  );
}
