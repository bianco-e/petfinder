import postsAPI from "../../db/posts/api";
import Pets from "../../components/Pets";
import PageTitle from "../../components/PageTitle";

export default function MyPosts({ myPosts }) {
  return (
    <>
      <PageTitle title="Mis publicaciones" />
      <Pets editableCards pets={myPosts} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const [header, userId] = query.userId.split("|");
  try {
    const myPosts = await postsAPI.getFilteredDataBy({ "user.id": userId });
    return { props: { myPosts } };
  } catch (error) {
    console.log(error);
    return { props: { myPosts: [] } };
  }
}
