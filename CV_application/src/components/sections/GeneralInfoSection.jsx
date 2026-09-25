import { useState } from "react";

export default function GeneralInfoSection({ aoSalvar }) {
  const [fullName, setFullName] = useState("");
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
      <form onChange={handleSubmit}>
        <h2 className="font-semibold mb-1">Full Name</h2>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="White you full name"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          required
        ></input>

        <h2 className="font-semibold mb-1">Email</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Write your email"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          required
        ></input>

        <h2 className="font-semibold mb-1">Phone Number</h2>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="(XX) X XXXX-XXXX"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        ></input>
      </form>
    </>
  );
}
