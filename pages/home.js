import { useEffect, useState } from "react";
import auth0 from "../utils/auth0";
import { mapImagesForSlider } from "../utils/utils";
import ImageGallery from "react-image-gallery";
import Pets from "../components/Pets";
import MainFilter from "../components/MainFilter";
import postsAPI from "../db/posts/api";

export default function Home({ posts }) {
  const [appliedFilters, setAppliedFilters] = useState({
    city: { value: undefined, title: undefined },
    species: { value: undefined, title: undefined },
    state: { value: undefined, title: undefined },
  });
  const [imagesForSlider, setImagesForSlider] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState();
  const setFilter = (prop, title, value) => {
    const newAppliedFilters = {
      ...appliedFilters,
      [prop]: {
        title,
        value: appliedFilters[prop].value == value ? undefined : value,
      },
    };
    setAppliedFilters(newAppliedFilters);
    filterPets(newAppliedFilters);
  };

  const filterPets = (newAppliedFilters) => {
    const filteredData = posts.filter(({ location, pet, state }) => {
      return (
        (!newAppliedFilters.city.value ||
          newAppliedFilters.city.value === location.city) &&
        (!newAppliedFilters.species.value ||
          newAppliedFilters.species.value === pet.species) &&
        (!newAppliedFilters.state.value ||
          newAppliedFilters.state.value === state)
      );
    });
    // fetch(`/api/posts/${JSON.stringify(newAppliedFilters)}`);
    // this is a sample, it should be filtered from db
    setFilteredPosts(filteredData);
  };

  return (
    <>
      <MainFilter setFilter={setFilter} appliedFilters={appliedFilters} />
      <Pets
        pets={filteredPosts || posts}
        setImagesForSlider={setImagesForSlider}
      />
      {imagesForSlider.length ? (
        <div className="fixed w-full flex justify-center items-center pb-24 h-screen bg-orange-100 bg-opacity-75">
          <button
            className="border-2 border-orange-500 shadow-md hover:shadow-inner py-1 px-4 rounded-sm text-orange-500 font-bold lg:text-2xl text-xl absolute right-0 top-0 lg:mr-6 mr-2 lg:mt-0 mt-16 z-10"
            onClick={() => setImagesForSlider([])}
          >
            X
          </button>
          <ImageGallery
            autoPlay={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showNav={true}
            items={mapImagesForSlider(imagesForSlider, "imgSlider")}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // Debería usar getStatic o getServerSide ? Se que siempre voy a hacer el mismo get
  // independientemente de la acción del usuario, pero qué va a pasar cuando implemente el filter?

  // En una misma page se puede usar getStatic y getSS ??

  /* getStaticProps hace que no se geteen los cambios recientes en la db? --> al retornar props
  se puede setear otra propiedad (revalidate) que es un number, e indica cada cuantos segundos
  se debería hacer un refetch */
  try {
    const filteredPosts = await postsAPI.getFilteredDataBy({});
    // const session = await auth0.getSession(context.req);
    return {
      props: {
        posts: filteredPosts,
        // user: session?.user || null,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
