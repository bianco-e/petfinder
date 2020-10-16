import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";

export default function Footer() {
  const media = [
    { ref: "https://www.instagram.com/", Icon: InstagramIcon },
    { ref: "https://www.twitter.com/", Icon: TwitterIcon },
  ];
  return (
    <footer className="navBar bg-orange-500 flex flex-col items-center pb-2">
      <div className="w-full flex justify-between items-center">
        <div className="w-20 text-orange-900 flex justify-between items-center text-2xl">
          {media.map(({ ref, Icon }) => (
            <a key={ref} target="blank" href={ref}>
              <Icon fill="#7b341e" />
            </a>
          ))}
        </div>
        <div></div>
      </div>
      <hr className="w-full border-orange-900 mt-5 mb-1 border-opacity-50" />
      <p className="font-medium text-sm text-orange-900">Petfinder © 2020</p>
    </footer>
  );
}
