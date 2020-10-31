import { useEffect, useState } from "react";
import auth0 from "../utils/auth0";
import Pets from "../components/Pets";
import MainFilter from "../components/MainFilter";
import ImagesModal from "../components/ImagesModal";
import postsAPI from "../db/posts/api";
import { getFilteredPosts } from "../apiQueries/apiQueries";
import { mapFiltersToQueryString } from "../utils/utils";

export default function ({ initialPosts }) {
  const [appliedFilters, setAppliedFilters] = useState({
    city: { value: undefined, title: undefined },
    species: { value: undefined, title: undefined },
    state: { value: undefined, title: undefined }
  });
  const [imagesForSlider, setImagesForSlider] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  const setFilter = (prop, title, value) => {
    const newAppliedFilters = {
      ...appliedFilters,
      [prop]: {
        title,
        value: appliedFilters[prop].value == value ? undefined : value
      }
    };
    setAppliedFilters(newAppliedFilters);
    filterPets(newAppliedFilters);
  };

  const filterPets = (newAppliedFilters) =>
    getFilteredPosts(mapFiltersToQueryString(newAppliedFilters)).then((posts) =>
      setFilteredPosts(posts)
    );

  return (
    <>
      <MainFilter setFilter={setFilter} appliedFilters={appliedFilters} />
      <Pets pets={filteredPosts} setImagesForSlider={setImagesForSlider} />
      <ImagesModal
        imagesForSlider={imagesForSlider}
        setImagesForSlider={setImagesForSlider}
      />
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const initialPosts = await postsAPI.getFilteredDataBy({});
    // const session = await auth0.getSession(context.req);
    return {
      props: {
        initialPosts
        // user: session?.user || null,
      },
      revalidate: 1
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        initialPosts: []
      }
    };
  }
}
