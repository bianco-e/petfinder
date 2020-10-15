export default function PageTitle({ title }) {
  return (
    <div
      className="w-full flex items-center justify-center bg-orange-500 py-6 px-8"
      style={{
        backgroundImage: "url('/pattern-asset.png')",
        backgroundSize: "contain",
      }}
    >
      <h1 className="text-orange-900 text-center text-3xl">{title}</h1>
    </div>
  );
}
