import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, formatDate } from "../utils/utils";
import { deletePost } from "../apiQueries/apiQueries";
import { useRouter } from "next/router";
import EditPostButtons from "./EditPostButtons";
import Button from "./Button";

const style = {
  thumbnail: {
    container: "sm:w-full lg:w-1/4",
    image: "h-56",
    details: "",
  },
  normal: {
    container: "w-full lg:flex",
    image: "h-full lg:w-64 lg:rounded-t-none lg:rounded-l",
    details:
      "lg:w-4/5 shadow-lg lg:border-l-0 lg:border-t lg:rounded-b-none lg:rounded-r",
  },
};
const stateText = {
  lost: "Perdid",
  found: "Encontrad",
  male: "o",
  female: "a",
};

export default function PetCard({
  data,
  editable,
  variant = "normal",
  setImagesForSlider,
}) {
  const { images, user, pet, date, text, location, state, _id } = data;
  const [currentHeight, setCurrentHeight] = useState({
    containerHeight: "h-64",
    textHeight: "h-10",
    arrow: undefined,
  });
  const router = useRouter();
  const textRef = useRef();
  const message = `¡Hola! Te contacto por la publicación de Petfinder ${router.route}`;

  const resizeText = () =>
    currentHeight.textHeight === "h-10"
      ? setCurrentHeight({
          textHeight: "h-auto",
          arrow: "upArrow",
          containerHeight: "h-72",
        })
      : setCurrentHeight({
          textHeight: "h-10",
          arrow: "downArrow",
          containerHeight: "h-64",
        });

  useEffect(() => {
    if (textRef.current.scrollHeight > 42) {
      setCurrentHeight({ ...currentHeight, arrow: "downArrow" });
    }
  }, []);

  return (
    <div
      className={`${style[variant].container} ${currentHeight.containerHeight} my-4`}
    >
      <div
        className={`${style[variant].image} bg-cover bg-center rounded-t overflow-hidden cursor-pointer`}
        onClick={() => setImagesForSlider(images)}
        style={{ backgroundImage: `url('${images[0]}')` }}
        title={pet.name}
      ></div>
      <div
        className={`${style[variant].details} rounded-b p-4 flex flex-col justify-between bg-white border-r border-b border-l border-gray-400`}
      >
        <div className="mb-8 text-xs text-orange-900">
          <p className="font-medium">
            {location.city}, {location.province}
          </p>
          <span className="font-bold bg-orange-400 rounded-sm px-1">
            {stateText[state] + stateText[pet.description.gender]}
          </span>
          <span className="text-gray-800"> el </span>
          <span className="font-bold">{formatDate(date)} </span>
          <span className="text-gray-800">en </span>
          <span className="font-bold">{location.zone}</span>
          <div className="text-gray-800 flex items-center justify-between font-bold text-xl my-1">
            <div className="w-2/3 flex items-center">
              <FontAwesomeIcon icon={icons[pet.species]} />
              <span className="ml-3">{pet.name}</span>
            </div>
            <div className="text-orange-900 pr-2">
              <FontAwesomeIcon icon={icons[pet.description.gender]} />
            </div>
          </div>
          <p
            className={`text-gray-700 text-sm transition-all duration-500 overflow-hidden ${currentHeight.textHeight}`}
            ref={textRef}
          >
            {text}
          </p>
          {currentHeight.arrow ? (
            <button className="text-center w-full text-xl" onClick={resizeText}>
              <FontAwesomeIcon icon={icons[currentHeight.arrow]} />
            </button>
          ) : (
            <div className="h-6"></div>
          )}
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-1"
              src={user.avatar}
              alt={`Avatar ${user.firstName}`}
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
              editFn={() => router.push(`/post/edit/${_id}`)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
