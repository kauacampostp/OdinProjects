import GeneralInfoSection from "./GeneralInfoSection";

export default function Section({ title, section, aoSalvar, area }) {
  const GeneralInfo = section;

  return (
    <section className="section-input">
      <h1>{title}</h1>
      <GeneralInfo aoSalvar={aoSalvar} area={area}/>
    </section>
  );
}
