import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/utils";
import CheckOption from "./CheckOption";

export default function Component({
  date,
  setDate,
  setGender,
  setSpecies,
  setState,
}) {
  const checkOptionsData = [
    [
      {
        title: "Perdí",
        value: "lost",
        setter: (value, title) => setState({ title, value }),
      },
      {
        title: "Encontré",
        value: "found",
        setter: (value, title) => setState({ title, value }),
      },
    ],
    [
      { title: "Perro", value: "dog", setter: setSpecies },
      { title: "Gato", value: "cat", setter: setSpecies },
      { title: "Otro", value: "other", setter: setSpecies },
    ],
    [
      { title: "Hembra", value: "female", setter: setGender },
      { title: "Macho", value: "male", setter: setGender },
    ],
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {checkOptionsData.map((options, idx) => {
        return (
          <CheckOption
            key={options[0].title}
            options={options}
            defaultValue={idx === 0 && options[0].value}
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <span className="font-medium text-orange-500">Imágenes</span>
          <label className="flex flex-col items-center cursor-pointer">
            <p className="flex items-center justify-center p-2 text-4xl text-orange-900">
              <FontAwesomeIcon icon={icons.blankImage} />
            </p>
            <input className="hidden" type="file" />
          </label>
        </div>
      </div>
    </div>
  );
}
