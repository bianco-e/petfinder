import PetCard from "./PetCard";
export default function Pets({ editableCards, pets = [], setImagesForSlider }) {
  return (
    <div className="banner-div bg-orange-100 flex-wrap justify-center items-start">
      {pets.length ? (
        pets.map((data) => (
          <PetCard
            data={data}
            editable={editableCards}
            key={data._id}
            setImagesForSlider={setImagesForSlider}
          />
        ))
      ) : (
        <h2 className="lg:text-3xl text-orange-900 mt-16">
          No se encontraron mascotas
        </h2>
      )}
    </div>
  );
}
