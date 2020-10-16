import { useEffect, useState } from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import Select from "./Select";
import PostFormHeader from "./PostFormHeader";
import PageTitle from "./PageTitle";
import provinces from "../provinces.json";
import { Post } from "../utils/utils";

const emptyData = {
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
  images: [],
  state: "",
  date: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  deleted: false,
};

export default function PostForm({ postData }) {
  const [state, setState] = useState({ title: "Perdí", value: "lost" });
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [images, setImages] = useState([]);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [identifyingFeature, setIdentifyingFeature] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zone, setZone] = useState("");
  const [phone, setPhone] = useState("");

  /*  useEffect(() => {
    if (postData) {
      setState({ title: "", value: postData.state });
      setSpecies(postData.pet.species);
      setGender(postData.pet.description.gender);
      setImages(postData.images);
      setDate(postData.date);
      setText(postData.text);
      setName(postData.pet.name);
    }
  }, []);
 () => setPost({...post, pet: {...pet, name: e.target.value}}) */
  const inputsData = [
    { ph: "Nombre", value: name, onChange: (e) => setName(e.target.value) },
    { ph: "Color", value: color, onChange: (e) => setColor(e.target.value) },
    {
      ph: "Rasgo característico",
      value: identifyingFeature,
      onChange: (e) => setIdentifyingFeature(e.target.value),
    },
    { ph: "Zona", value: zone, onChange: (e) => setZone(e.target.value) },
    {
      ph: "Whatsapp (+54 9 ...)",
      value: phone,
      onChange: (e) => setPhone(e.target.value),
    },
  ];

  const selectsData = [
    provinces,
    [
      { title: "Ciudad", value: "" },
      { title: "Capital Federal", value: "Capital Federal" },
      { title: "Rosario", value: "Rosario" },
    ],
  ];

  const handlePost = () => {
    const post = new Post(
      "016952318715324",
      "/person-avatar-1.jpg",
      "Jorge",
      "Pusineri",
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
    );
    console.log(post);
  };
  return (
    <>
      <PageTitle title="Nueva publicación" />
      <div className="bg-orange-100 flex flex-col w-full items-center py-4">
        <PostFormHeader
          date={date}
          setDate={setDate}
          setGender={setGender}
          setSpecies={setSpecies}
          setState={setState}
        />
        {inputsData.slice(0, 3).map(({ ph, value, onChange }) => {
          return (
            <input
              className="placeholder-orange-500 focus:shadow-md my-4"
              key={ph}
              onChange={(e) => onChange(e)}
              value={value}
              placeholder={ph}
            />
          );
        })}
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Descripción"
        />
        {selectsData.map((options, idx) => {
          return (
            <Select
              key={options[0].title}
              options={options}
              setter={idx === 0 ? setProvince : setCity}
            />
          );
        })}
        {inputsData.slice(3).map(({ ph, value, onChange }) => {
          return (
            <input
              className="placeholder-orange-500 focus:shadow-md my-4"
              key={ph}
              onChange={(e) => onChange(e)}
              value={value}
              placeholder={ph}
            />
          );
        })}
        <Button variant="terciary" onClick={() => handlePost()}>
          Publicar
        </Button>
      </div>
    </>
  );
}
