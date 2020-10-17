import {
  faCat,
  faDog,
  faPaw,
  faMars,
  faVenus,
  faFrownOpen,
  faLaughBeam,
  faChevronRight,
  faChevronLeft,
  faImages,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

export const icons = {
  dog: faDog,
  cat: faCat,
  other: faPaw,
  lost: faFrownOpen,
  found: faLaughBeam,
  male: faMars,
  female: faVenus,
  rightArrow: faChevronRight,
  leftArrow: faChevronLeft,
  blankImage: faImages,
  delete: faTrash,
  edit: faEdit,
};
export const formatDateToSetValue = (date) =>
  date
    .toLocaleDateString("zh-Hans-CN")
    .split("/")
    .map((number) => (number.length == 1 ? `0${number}` : number))
    .join("-");

export function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}

const allValuesAreTruthy = (obj) => Object.values(obj).every((val) => val);
export const validateFields = (object) => {
  const { text, state, images, pet, location } = object;
  if (
    text &&
    state &&
    images.length &&
    allValuesAreTruthy(location) &&
    allValuesAreTruthy(pet) &&
    allValuesAreTruthy(pet.description)
  ) {
    return true;
  } else return false;
};

export const filtersData = [
  [
    { title: "Perdidos", value: "lost", filterType: "state" },
    { title: "Encontrados", value: "found", filterType: "state" },
  ],
  [
    { title: "Perros", value: "dog", filterType: "species" },
    { title: "Gatos", value: "cat", filterType: "species" },
    { title: "Otros", value: "other", filterType: "species" },
  ],
];

export const emptyPost = {
  user: {
    id: "",
    avatar: "",
    firstName: "",
    lastName: "",
    phone: "",
  },
  pet: {
    name: "",
    species: "",
    description: {
      gender: "",
      color: "",
      identifyingFeature: "",
    },
  },
  location: {
    province: "",
    city: "",
    zone: "",
  },
  text: "",
  images: [""],
  state: "lost",
  date: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deleted: false,
};
export class Post {
  constructor({
    pet,
    images,
    user,
    location,
    text,
    state,
    date,
    createdAt,
    updatedAt,
    deleted,
  }) {
    this.user = user;
    this.pet = pet;
    this.location = location;
    this.text = text;
    this.images = images;
    this.state = state;
    this.date = date;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deleted = false;
  }
}

export const stepsData = [
  {
    image: "/lost-dog.jpeg",
    text: "¿Perdiste a tu mascota?",
  },
  {
    image: "/letter-dog.jpg",
    text: "Publicá gratis",
  },
  {
    image: "/found-dog.jpg",
    text: "¡Encontrala!",
  },
];
