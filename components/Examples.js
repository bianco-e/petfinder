import PetCard from "./PetCard";

export default function Examples({ examplesData }) {
  return (
    <div className="flex flex-col items-center justify-start bg-orange-100">
      <h1 className="mt-6 text-orange-900">Búsquedas</h1>
      <div className="banner-div flex-wrap items-start">
        {examplesData.map((data) => (
          <PetCard variant="thumbnail" key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
