import Buttons from "./Buttons";

export default function ExperienceForm() {
  const [companyName, setcompanyName] = useState("");
  const [positionTitle, setpositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { companyName, positionTitle, startDate, endDate, description };
  }

  function submitInfo() {}

  return (
    <>
      <form>
        <h2>Company name</h2>
        <input
          type="text"
          placeholder="Enter company name"
          required
        ></input>

        <h2>Position Title</h2>
        <input
          type="text"
          placeholder="Enter your position title"
          required
        ></input>

        <div className="date-input">
          <h2>Start Date</h2>
          <input
            type="date"
            placeholder="Enter the start date"
            required
          ></input>

          <h2>End Date</h2>
          <input 
            type="date" 
            placeholder="Enter the end date"
          ></input>
        </div>

        <h2>Description</h2>
        <input 
          type="text" 
          placeholder="Enter your positionTitle"
        ></input>
      </form>

      <Buttons />
    </>
  );
}
