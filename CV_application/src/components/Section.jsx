export default function Section({
  title,
  section,
  aoSalvar,
  area,
  deleteItem,
}) {
  const GeneralInfo = section;

  return (
    <section className="bg-blue-300 mb-4 p-4 rounded-lg">
      <h1 className="text-xl mb-2 font-bold">{title}</h1>
      <GeneralInfo aoSalvar={aoSalvar} area={area} deleteItem={deleteItem} />
    </section>
  );
}
