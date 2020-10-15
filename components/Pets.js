import PetCard from "./PetCard";
export default function Pets({ pets = [] }) {
  return (
    <div className="banner-div bg-orange-100 flex-wrap">
      {pets.map((data) => (
        <PetCard key={data.id} data={data} />
      ))}
    </div>
  );
}
