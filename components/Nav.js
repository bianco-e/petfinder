import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";
import ProfileDropdown from "./ProfileDropdown";

export default function Nav({}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState();
  const router = useRouter();

  const goToMyPosts = () => router.push(`/myposts/${user?.sub}`);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((loggedUser) => setUser(loggedUser.given_name ? loggedUser : null))
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="navBar sticky top-0">
      <Logo text={!user} route={user ? "/home" : "/"} />
      {!user ? (
        <Button onClick={() => router.push("/api/login")}>
          Iniciar sesión
        </Button>
      ) : (
        <div className="w-56 flex justify-between relative">
          {router.pathname !== "/new-post" ? (
            <Button
              onClick={() => router.push("/new-post")}
              variant="secondary"
            >
              Publicar
            </Button>
          ) : (
            <div></div>
          )}
          <ProfileButton
            user={user}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          {showDropdown && <ProfileDropdown goToMyPosts={goToMyPosts} />}
        </div>
      )}
    </nav>
  );
}
