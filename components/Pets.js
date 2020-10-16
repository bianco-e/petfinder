import PetCard from "./PetCard";
export default function Pets({ editableCards, pets = [] }) {
  return (
    <div className="banner-div bg-orange-100 flex-wrap">
      {pets.map((data) => (
        <PetCard editable={editableCards} key={data._id} data={data} />
      ))}
    </div>
  );
}
