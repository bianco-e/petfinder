export default function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      className="lg:w-1/3 placeholder-orange-900 bg-orange-100 my-5 focus:shadow-md"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
