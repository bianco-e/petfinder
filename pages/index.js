import Introduction from "../components/Introduction";
import postsAPI from "../db/posts/api";
import Examples from "../components/Examples";

export default function Index({ examplesData }) {
  return (
    <>
      <Introduction />
      <Examples examplesData={examplesData} />
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const examplesData = await postsAPI.getFilteredDataBy({}, 3);
    return {
      props: {
        examplesData
      },
      revalidate: 1
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        examplesData: []
      }
    };
  }
}
