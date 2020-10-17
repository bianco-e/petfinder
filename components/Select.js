export default function Select({ options, selected, setter }) {
  return (
    <div className="inline-block relative w-64 my-4">
      <select
        value={selected}
        onChange={(e) => setter(e.target.value)}
        className="text-center text-orange-500 cursor-pointer block appearance-none w-full bg-transparent border border-orange-900 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-md"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
