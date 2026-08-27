import GeneralInfoSection from "./GeneralInfoSection"

export default function Section(props){
  const GeneralInfo = props.section;

  return (
    <>
      <h1>{props.title}</h1>
      <GeneralInfo />
    </>
  )
}