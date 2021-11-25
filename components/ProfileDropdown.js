const style = {
  wrapper: {
    alignItems: "center",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "120px",
    position: "absolute",
    right: "-20px",
    top: "105%",
    zIndex: "15",
  },
  button: {
    borderRadius: "2px",
    fontSize: "16px",
    fontWeight: "700",
    padding: "9px 40px",
    textAlign: "center",
    width: "100%",
    transition: "all .2 ease",
  },
};
import { useRouter } from "next/router";
export default function ProfileDropdown({ goToMyPosts }) {
  const router = useRouter();
  const buttons = [
    { title: "Búsquedas", onClick: () => router.push("/home") },
    { title: "Mis publicaciones", onClick: goToMyPosts },
    { title: "Salir", onClick: () => router.push("/api/auth/logout") },
  ];
  return (
    <div style={style.wrapper}>
      {buttons.map(({ title, onClick }, i) => {
        return (
          <button
            style={style.button}
            className={`${
              i % 2 == 0
                ? "bg-orange-900 text-orange-500 hover:bg-orange-800"
                : "bg-orange-200 text-orange-900 hover:bg-orange-300"
            }`}
            key={title}
            onClick={onClick}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
}
