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

export function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}

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

export class Post {
  constructor(
    userId,
    avatar,
    firstName,
    lastName,
    phone,
    name,
    species,
    gender,
    color,
    identifyingFeature,
    province,
    city,
    zone,
    text,
    images,
    state,
    date
  ) {
    (this.user = {
      id: userId,
      avatar,
      firstName,
      lastName,
      phone,
    }),
      (this.pet = {
        name,
        species,
        description: {
          gender,
          color,
          identifyingFeature,
        },
      }),
      (this.location = {
        province,
        city,
        zone,
      }),
      (this.text = text),
      (this.images = images),
      (this.state = state),
      (this.date = date),
      (this.createdAt = new Date()),
      (this.updatedAt = new Date()),
      (this.deleted = false);
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
