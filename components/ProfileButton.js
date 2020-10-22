import { useEffect } from "react";
export default function ProfileButton({ showDropdown, setShowDropdown, user }) {
  const { given_name, picture } = user;
  const triggerDropdown = () => setShowDropdown(!showDropdown);
  useEffect(() => {
    showDropdown && document.addEventListener("click", triggerDropdown);
    return () => {
      document.removeEventListener("click", triggerDropdown);
    };
  }, [showDropdown]);
  return (
    <button onClick={triggerDropdown}>
      <img alt={given_name} className="w-10 h-10 rounded-full" src={picture} />
    </button>
  );
}
