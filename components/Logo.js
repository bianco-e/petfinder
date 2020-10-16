import { useRouter } from "next/router";

export default function Logo({ text, route }) {
  const router = useRouter();
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => router.push(route)}
    >
      <div
        className="w-10 h-10 rounded-full"
        style={{
          background: "url('/logo-image.png')",
          backgroundSize: "contain",
        }}
      ></div>
      {text && (
        <p className="text-orange-400 font-bold ml-1 text-lg">Petfinder</p>
      )}
    </div>
  );
}
