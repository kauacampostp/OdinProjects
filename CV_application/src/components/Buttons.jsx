export default function Buttons({cancelBtn}) {
  return (
    <footer>
      <button className="delete-btn" >Delete</button>

      <div className="btn-cancel-add">
        <button className="cancel-btn" onClick={cancelBtn}>Cancel</button>
        <button type="submit" className="submit-btn">Submit</button>
      </div>
    </footer>
  );
}
