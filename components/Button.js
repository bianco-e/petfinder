const style = {
  base: "main-button hover:scale-95",
  primary: "bg-orange-500 text-white hover:bg-orange-900",
  secondary:
    "bg-transparent border border-solid border-orange-900 text-orange-900 hover:bg-orange-200 hover:bg-opacity-50",
  terciary: "bg-orange-400 text-orange-900 hover:bg-orange-500",
};

export default function Button({
  children,
  onClick = (e) => e.preventDefault(),
  variant = "primary",
  spaced,
  xl,
}) {
  return (
    <button
      className={`${style.base} ${style[variant]} ${xl && "w-48"} ${
        spaced && "m-1"
      }`}
      onClick={(e) => onClick(e)}
    >
      <span>{children}</span>
    </button>
  );
}
