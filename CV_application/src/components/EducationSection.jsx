import EducationForm from "./EducationForm"

export default function EducationSection() {
  function educationForm(){

    return (
      <EducationForm />
    )
  }

  return (
    <>
      <h1 className="section-name">Education</h1>

      <button onClick={educationForm}>Education</button>
    
    </>
  )
}