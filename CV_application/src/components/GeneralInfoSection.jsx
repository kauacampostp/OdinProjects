// import infos from "./infos"

export default function GeneralInfoSection() {

  return (
    <>
      <h1 className="section-name">Name Section</h1>

      <form>
        <h2>Full Name</h2>
        <input placeholder="White you full name"></input>

        <h2>Email</h2>
        <input placeholder="Write your email" ></input>

        <h2>Phone Number</h2>
        <input placeholder="(XX) X XXXX-XXXX"></input>
      </form>
    
    </>
  )
}