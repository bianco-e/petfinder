import InstagramIcon from "../svg/InstagramIcon";
import TwitterIcon from "../svg/TwitterIcon";

export default function Footer() {
  const media = [
    { ref: "https://www.instagram.com/", Icon: InstagramIcon },
    { ref: "https://www.twitter.com/", Icon: TwitterIcon },
  ];
  return (
    <footer className="navBar bg-orange-500">
      <div className="w-20 text-orange-900 flex justify-between items-center text-2xl">
        {media.map(({ ref, Icon }) => (
          <a key={ref} target="blank" href={ref}>
            <Icon fill="#7b341e" />
          </a>
        ))}
      </div>
      <p className="font-bold text-orange-900">© 2020</p>
    </footer>
  );
}
