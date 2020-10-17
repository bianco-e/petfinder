import PetCard from "./PetCard";
export default function Pets({ editableCards, pets = [] }) {
  return (
    <div className="banner-div bg-orange-100 flex-wrap justify-center items-start">
      {pets.length ? (
        pets.map((data) => (
          <PetCard editable={editableCards} key={data._id} data={data} />
        ))
      ) : (
        <h2 className="lg:text-3xl text-orange-900 mt-16">
          No se encontraron mascotas
        </h2>
      )}
    </div>
  );
}
