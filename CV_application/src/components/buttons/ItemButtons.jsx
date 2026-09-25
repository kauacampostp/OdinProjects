export default function ItemButtons({ editBtn, deleteItem }) {
  return (
    <footer className="flex justify-between gap-2">
      <button
        className="bg-red-400 rounded-lg px-2 py-1 font-bold cursor-pointer"
        onClick={deleteItem}
        type="button"
      >
        Delete
      </button>
      <button
        className="bg-blue-400 rounded-lg px-2 py-1 font-bold cursor-pointer"
        onClick={editBtn}
        type="button"
      >
        Edit
      </button>
    </footer>
  );
}
