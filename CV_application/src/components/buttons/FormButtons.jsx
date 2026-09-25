export default function FormButtons({ cancelBtn }) {
  return (
    <footer className="flex justify-end gap-2">
      <button
        className="bg-blue-400 rounded-l-lg px-2 py-1 font-bold cursor-pointer"
        onClick={cancelBtn}
        type="button"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="bg-blue-400 rounded-r-lg px-2 py-1 font-bold cursor-pointer"
      >
        Submit
      </button>
    </footer>
  );
}
