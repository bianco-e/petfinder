import { useEffect, useState } from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import Select from "./Select";
import PostFormHeader from "./PostFormHeader";
import PageTitle from "./PageTitle";
import provinces from "../provinces.json";
import { Post, capitalize, emptyPost, validateFields } from "../utils/utils";
import { addPost, editPost, getUserInfo } from "../apiQueries/apiQueries";

export default function PostForm({ editingPost }) {
  const [cities, setCities] = useState([]);
  const [post, setPost] = useState(emptyPost);
  const { pet, images, user, location, text, state, date, updatedAt } = post;

  const getCitiesInProvince = (province) => {
    return fetch(
      `https://apis.datos.gob.ar/georef/api/localidades?provincia=${province}&campos=nombre&max=400`
    )
      .then((res) => res.json())
      .then(({ localidades }) =>
        setCities(localidades.map(({ nombre }) => capitalize(nombre)).sort())
      );
  };

  useEffect(() => editingPost && setPost(editingPost), []);

  useEffect(() => {
    post.location.province && getCitiesInProvince(post.location.province);
  }, [post.location.province]);

  const setImages = (imgs) => setPost({ ...post, images: imgs });
  const setDate = (value) => setPost({ ...post, date: value });
  const setState = (value) => setPost({ ...post, state: value });
  const setSpecies = (value) =>
    setPost({ ...post, pet: { ...pet, species: value } });
  const setGender = (value) =>
    setPost({
      ...post,
      pet: {
        ...pet,
        description: { ...pet.description, gender: value }
      }
    });
  const setProvince = (value) =>
    setPost({
      ...post,
      location: { ...post.location, province: value }
    });
  const setCity = (value) =>
    setPost({ ...post, location: { ...post.location, city: value } });
  const setText = (value) => setPost({ ...post, text: value });
  const inputsData = [
    {
      ph: "Nombre",
      value: pet.name,
      onChange: (e) =>
        setPost({ ...post, pet: { ...post.pet, name: e.target.value } })
    },
    {
      ph: "Color",
      value: pet.description.color,
      onChange: (e) =>
        setPost({
          ...post,
          pet: {
            ...post.pet,
            description: { ...post.pet.description, color: e.target.value }
          }
        })
    },
    {
      ph: "Rasgo característico",
      value: pet.description.identifyingFeature,
      onChange: (e) =>
        setPost({
          ...post,
          pet: {
            ...post.pet,
            description: {
              ...post.pet.description,
              identifyingFeature: e.target.value
            }
          }
        })
    },
    {
      ph: "Zona",
      value: location.zone,
      onChange: (e) =>
        setPost({
          ...post,
          location: {
            ...post.location,
            zone: e.target.value
          }
        })
    },
    {
      ph: "Whatsapp (+54 9 ...)",
      value: user.phone,
      onChange: (e) =>
        setPost({
          ...post,
          user: {
            ...post.user,
            phone: e.target.value
          }
        })
    }
  ];
  const selectsData = [
    { name: "province", options: provinces, setter: setProvince },
    {
      name: "city",
      options: ["Ciudad", ...cities],
      setter: setCity
    }
  ];

  const storeImages = (imagesArray) => {
    if (imagesArray.length < 4) {
      const settedFiles = imagesArray.map((file) => {
        return {
          preview: URL.createObjectURL(file),
          file
        };
      });
      setImages(settedFiles);
    }
  };

  const handlePost = (postId) =>
    getUserInfo()
      .then(({ sub, given_name, family_name, picture, error }) => {
        if (!error && validateFields(newPost)) {
          const newPost = new Post({
            ...post,
            user: {
              id: sub,
              firstName: given_name,
              lastName: family_name,
              avatar: picture,
              phone: user.phone
            }
          });
          postId ? editPost(postId, newPost) : addPost(newPost);
        }
      })
      .catch((err) => console.error(err));

  return (
    <>
      <PageTitle title="Nueva publicación" />
      <div
        className="bg-orange-200 bg-opacity-75 w-full"
        style={{ backgroundImage: "url('/pattern-asset.png')" }}
      >
        <div className="bg-orange-200 bg-opacity-75 flex flex-col w-full items-center pb-4">
          <PostFormHeader
            date={new Date(date)}
            gender={
              editingPost?.pet.description.gender || pet.description.gender
            }
            images={images.map((img) => img.preview || img)}
            species={editingPost?.pet.species || pet.species}
            state={editingPost?.state || state}
            setDate={setDate}
            setGender={setGender}
            setImages={(imagesArray) => storeImages(imagesArray)}
            setSpecies={setSpecies}
            setState={setState}
          />

          {inputsData.slice(0, 3).map(({ ph, value, onChange }) => {
            return (
              <input
                className="lg:w-1/3 placeholder-orange-900 bg-orange-100 focus:shadow-md my-4"
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

          {selectsData.map(({ name, options, setter }) => (
            <Select
              key={options[0]}
              options={options}
              selected={location[name]}
              setter={setter}
            />
          ))}

          {inputsData.slice(3).map(({ ph, value, onChange }) => {
            return (
              <input
                className="lg:w-1/3 placeholder-orange-900 bg-orange-100 focus:shadow-md my-4"
                key={ph}
                onChange={(e) => onChange(e)}
                value={value}
                placeholder={ph}
              />
            );
          })}

          <Button
            variant="terciary"
            onClick={() => (editingPost ? handlePost(post._id) : handlePost())}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </>
  );
}
