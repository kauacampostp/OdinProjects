import { useState } from "react";
import Buttons from "./Buttons";

export default function GeneralInfoSection({ aoSalvar }) {
  const [fullName, setFullName] = useState("Ramos");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      fullName,
      email,
      phoneNumber,
    };
    aoSalvar(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Full Name</h2>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="White you full name"
        ></input>

        <h2>Email</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Write your email"
        ></input>

        <h2>Phone Number</h2>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="(XX) X XXXX-XXXX"
        ></input>
        <Buttons />
      </form>
    </>
  );
}
