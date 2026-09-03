import { useState } from "react";
import GeneralInfoSection from "./GeneralInfoSection";

export default function Preview() {
  const [generalInfo, setGeneralInfo] = useState(GeneralInfoSection(handleSubmit()));
  return <></>;
}
