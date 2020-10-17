import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, formatDate } from "../utils/utils";
import CheckOption from "./CheckOption";

export default function Component({
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
      <div className="flex justify-between items-start w-64">
        <div className="w-1/2 flex flex-col items-start">
          <span className="font-medium text-orange-500 capitalize">
            ¿Cuándo?
          </span>
          <input
            className="border-0 shadow-none my-2 p-0 cursor-pointer"
            onChange={(e) => setDate(e.target.value)}
            type="date"
            value={formatDate(date, true)}
          />
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <span className="font-medium text-orange-500">Imágenes</span>
          <label className="flex flex-col items-center cursor-pointer">
            <p className="flex items-center justify-center p-2 text-4xl text-orange-900">
              <FontAwesomeIcon icon={icons.blankImage} />
            </p>
            <input
              className="hidden"
              onChange={(e) =>
                e.target.files.length < 4 && setImages(e.target.files)
              }
              type="file"
              multiple
            />
          </label>
        </div>
      </div>
    </div>
  );
}
