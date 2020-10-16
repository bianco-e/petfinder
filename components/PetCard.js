import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/utils";
import { deletePost, editPost } from "../apiQueries/apiQueries";
import { useRouter } from "next/router";
import EditPostButtons from "./EditPostButtons";
import Button from "./Button";

const style = {
  thumbnail: {
    container: "sm:w-full lg:w-1/4",
    image: "h-56",
    details: "",
    text: "",
  },
  normal: {
    container: "w-full lg:flex",
    image: "h-64 lg:w-64 lg:rounded-t-none lg:rounded-l",
    details:
      "lg:w-4/5 shadow-lg lg:border-l-0 lg:border-t lg:rounded-b-none lg:rounded-r",
    text: "",
  },
};

export default function PetCard({ data, editable, variant = "normal" }) {
  const { images, user, pet, date, text, location, state, _id } = data;
  const router = useRouter();
  const message = `¡Hola! Te contacto por la publicación de Petfinder ${router.route}`;
  return (
    <div className={`${style[variant].container} my-4`}>
      <div
        className={`${style[variant].image} bg-cover bg-center rounded-t overflow-hidden cursor-pointer`}
        style={{ backgroundImage: `url('${images[0]}')` }}
        title={pet.name}
      ></div>
      <div
        className={`${style[variant].details} rounded-b p-4 flex flex-col justify-between bg-white border-r border-b border-l border-gray-400`}
      >
        <div className="mb-8 text-xs text-orange-900">
          <p className="font-medium">{location.city}</p>
          <span className="text-gray-800">
            Se {state == "lost" ? "perdió" : "encontró"} el{" "}
          </span>
          <span className="font-bold">{date} </span>
          <span className="text-gray-800">en </span>
          <span className="font-bold">{location.zone}</span>
          <div className="text-gray-800 flex items-center justify-between font-bold text-xl my-1">
            <div className="w-2/3 flex items-center">
              <FontAwesomeIcon icon={icons[pet.species]} />
              <span className="ml-3">{pet.name}</span>
            </div>
            <FontAwesomeIcon icon={icons[pet.description.gender]} />
          </div>
          <p className={`${style[variant].text} text-gray-700 text-sm`}>
            {text}
          </p>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-1"
              src={user.avatar}
              alt={`Avatar de ${user.firstName}`}
            />
            <div className="text-xs">
              <p className="text-orange-900 leading-none">{user.firstName}</p>
            </div>
          </div>
          {!editable ? (
            <Button
              onClick={() =>
                window.open(
                  `https://wa.me/${user.phone}?text=${message}`,
                  "_ blank"
                )
              }
              variant="terciary"
            >
              Contactar
            </Button>
          ) : (
            <EditPostButtons
              deleteFn={() => deletePost(_id)}
              editFn={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
}
