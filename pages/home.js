import { useState } from "react";
import auth0 from "../utils/auth0";
import Pets from "../components/Pets";
import MainFilter from "../components/MainFilter";
import postsAPI from "../db/posts/api";

export default function Home({ posts }) {
  const [appliedFilters, setAppliedFilters] = useState({
    city: { value: undefined, title: undefined },
    species: { value: undefined, title: undefined },
    state: { value: undefined, title: undefined },
  });
  const [pets, setPets] = useState();
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
    const filteredPets = posts.filter(({ location, pet, state }) => {
      return (
        (!newAppliedFilters.city.value ||
          newAppliedFilters.city.value === location.city) &&
        (!newAppliedFilters.species.value ||
          newAppliedFilters.species.value === pet.species) &&
        (!newAppliedFilters.state.value ||
          newAppliedFilters.state.value === state)
      );
    });
    // this is a sample, it should be filtered from db
    setPets(filteredPets);
  };

  return (
    <>
      <MainFilter setFilter={setFilter} appliedFilters={appliedFilters} />
      <Pets pets={pets || posts} />
    </>
  );
}

export async function getStaticProps(context) {
  // Debería usar getStatic o getServerSide ? Se que siempre voy a hacer el mismo get
  // independientemente de la acción del usuario, pero qué va a pasar cuando implemente el filter?
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
