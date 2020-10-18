import { useEffect, useState } from "react";
import { formatDate } from "../utils/utils";
import CheckOption from "./CheckOption";
import ImagesInput from "./ImagesInput";

export default function PostFormHeader({
  date,
  gender,
  images,
  species,
  state,
  setDate,
  setGender,
  setImages,
  setSpecies,
  setState,
}) {
  const [optionsData, setOptionsData] = useState([]);

  useEffect(() => {
    setOptionsData([
      {
        defaultValue: state,
        options: [
          { title: "Perdí", value: "lost", setter: setState },
          { title: "Encontré", value: "found", setter: setState },
        ],
      },
      {
        defaultValue: species,
        options: [
          { title: "Perro", value: "dog", setter: setSpecies },
          { title: "Gato", value: "cat", setter: setSpecies },
          { title: "Otro", value: "other", setter: setSpecies },
        ],
      },
      {
        defaultValue: gender,
        options: [
          { title: "Hembra", value: "female", setter: setGender },
          { title: "Macho", value: "male", setter: setGender },
        ],
      },
    ]);
  }, [setGender, setSpecies, setState]);

  return (
    <div className="w-full flex flex-col items-center">
      {optionsData.map(({ options, defaultValue }) => {
        return (
          <CheckOption
            key={options[0].title}
            options={options}
            defaultValue={defaultValue}
          />
        );
      })}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <span className="font-bold text-orange-900 text-lg">¿Cuándo?</span>
          <input
            className="border-0 shadow-none my-2 p-0 cursor-pointer font-bold"
            onChange={(e) => setDate(e.target.value)}
            type="date"
            value={formatDate(date, true)}
          />
        </div>

        <ImagesInput images={images} setImages={setImages} />
      </div>
    </div>
  );
}
