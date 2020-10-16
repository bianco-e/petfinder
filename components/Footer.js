import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";

export default function Footer() {
  const media = [
    { ref: "https://www.instagram.com/", Icon: InstagramIcon },
    { ref: "https://www.twitter.com/", Icon: TwitterIcon },
  ];
  return (
    <footer className="navBar bg-orange-500 text-orange-900 flex flex-col items-center pb-2">
      <div className="w-full flex justify-between items-center">
        <div className="w-20 flex justify-between items-center">
          {media.map(({ ref, Icon }) => (
            <a key={ref} target="blank" href={ref}>
              <Icon fill="#7b341e" />
            </a>
          ))}
        </div>
        <div>
          <button>Sugerir cambios</button>
        </div>
      </div>
      <hr />
      <p className="font-medium text-sm">Petfinder © 2020</p>
    </footer>
  );
}
