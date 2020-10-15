export default function AddedFilter({ onClick, text }) {
  return (
    <button
      onClick={() => onClick()}
      className="text-orange-500 h-6 bg-orange-900 flex items-center font-medium text-sm rounded-sm py-4 px-2 mx-1"
    >
      <span>{text}</span>
    </button>
  );
}
