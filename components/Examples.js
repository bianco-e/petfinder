import PetCard from "./PetCard";
import mockedData from "../mockedData.json";

export default function Examples() {
  return (
    <div className="flex flex-col items-center bg-orange-100">
      <h1 className="mt-6 text-orange-900">Búsquedas</h1>
      <div className="banner-div flex-wrap">
        {mockedData.map((data) => (
          <PetCard variant="thumbnail" key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
