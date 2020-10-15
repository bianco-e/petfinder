import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKiwiBird, faCamera } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const media = [
    { ref: "https://www.instagram.com/", icon: faCamera },
    { ref: "https://www.twitter.com/", icon: faKiwiBird },
  ];
  return (
    <footer className="navBar bg-orange-500">
      <div className="w-20 text-orange-900 flex justify-between text-2xl">
        {media.map(({ ref, icon }) => (
          <a key={ref} target="blank" href={ref}>
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <p className="font-bold text-orange-900">© 2020</p>
    </footer>
  );
}
