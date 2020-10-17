import { useEffect, useState } from "react";

const selectedClass = "bg-orange-900 text-orange-500";

export default function CheckOption({ options, defaultValue }) {
  const [selected, setSelected] = useState();
  useEffect(() => {
    defaultValue && setSelected(defaultValue);
  }, []);

  const handleClick = (value, setter) => {
    setter(value);
    setSelected(value);
  };
  return (
    <div className="flex w-64 rounded-sm bg-orange-500 p-1 justify-between my-5">
      {options.map(({ setter, title, value }) => {
        return (
          <div key={title} className="flex items-center text-orange-900">
            <button
              onClick={() => handleClick(value, setter)}
              className={`transition-all duration-600 ease-in-out rounded-sm py-1 px-4 flex items-center justify-center font-medium ${
                value == selected && selectedClass
              }`}
            >
              <span>{title}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
