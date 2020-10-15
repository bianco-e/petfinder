import { useState } from "react";
import auth0 from "../utils/auth0";
import MainFilter from "../components/MainFilter";
import Pets from "../components/Pets";
import mockedData from "../mockedData.json";

export default function Home({ user }) {
  const [appliedFilters, setAppliedFilters] = useState({
    city: { value: undefined, title: undefined },
    species: { value: undefined, title: undefined },
    state: { value: undefined, title: undefined },
  });
  const [pets, setPets] = useState(mockedData);
  const setFilter = (prop, title, value) => {
    const newAppliedFilters = { ...appliedFilters, [prop]: { title, value } };
    setAppliedFilters(newAppliedFilters);
    filterPets(newAppliedFilters);
  };

  const filterPets = (newAppliedFilters) => {
    const filteredPets = mockedData.filter(({ location, pet, state }) => {
      return (
        (!newAppliedFilters.city.value ||
          newAppliedFilters.city.value === location.city) &&
        (!newAppliedFilters.species.value ||
          newAppliedFilters.species.value === pet.species) &&
        (!newAppliedFilters.state.value ||
          newAppliedFilters.state.value === state)
      );
    });
    // this should be filtered from db comparing if data properties equal object sent properties
    setPets(filteredPets);
  };

  return (
    <>
      <MainFilter setFilter={setFilter} appliedFilters={appliedFilters} />
      <Pets pets={pets} />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await auth0.getSession(context.req);
    return {
      props: {
        user: session?.user || null,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: "something went wrong",
      },
    };
  }
}
