import { useState } from "react";
export default function LocationInput({ setFilter }) {
  const [locationValue, setLocationValue] = useState("");
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setFilter("city", locationValue, locationValue);
      setLocationValue("");
      e.target.blur();
    }
  };
  return (
    <input
      className="placeholder-orange-900 focus:shadow-md"
      placeholder="Ubicación"
      value={locationValue}
      onChange={(e) => setLocationValue(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
}
