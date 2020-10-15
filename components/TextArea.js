export default function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      className="placeholder-orange-500 my-5 focus:shadow-md"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
