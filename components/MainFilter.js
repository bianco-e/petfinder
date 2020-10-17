import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, filtersData } from "../utils/utils";
import LocationInput from "./LocationInput";
import AddedFilter from "./AddedFilter";

export default function MainFilter({ appliedFilters, setFilter }) {
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <div className="w-full py-2 flex flex-col items-center bg-orange-500 text-orange-100">
      <h2 className="my-0 text-lg lg:text-xl">Filtrar búsqueda</h2>
      <LocationInput setFilter={setFilter} />
      <div className="lg:w-2/3 w-full flex items-center justify-between">
        <button
          className="text-5xl text-orange-900"
          onClick={() =>
            dataIndex > 0 ? setDataIndex(dataIndex - 1) : setDataIndex(101)
          }
        >
          <FontAwesomeIcon icon={icons.leftArrow} />
        </button>
        {filtersData[dataIndex % filtersData.length].map(
          ({ filterType, title, value }) => (
            <button
              className="flex flex-col items-center text-5xl"
              key={value}
              onClick={() => setFilter(filterType, title, value)}
            >
              <FontAwesomeIcon icon={icons[value]} />
              <h2>{title}</h2>
            </button>
          )
        )}
        <button
          className="text-5xl text-orange-900"
          onClick={() => setDataIndex(dataIndex + 1)}
        >
          <FontAwesomeIcon icon={icons.rightArrow} />
        </button>
      </div>
      <div className="w-full flex items-center justify-center h-10">
        {Object.entries(appliedFilters).map(
          ([key, object]) =>
            object.value && (
              <AddedFilter
                key={object.title}
                onClick={() => setFilter(key, undefined, undefined)}
                text={object.title}
              />
            )
        )}
      </div>
    </div>
  );
}
