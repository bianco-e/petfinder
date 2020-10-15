import { useRouter } from "next/router";
import Pets from "../../components/Pets";
import PageTitle from "../../components/PageTitle";
import mockedData from "../../mockedData.json";

export default function MyPosts({ posts = [] }) {
  const router = useRouter();
  const { userId } = router.query;
  const myPosts = mockedData.filter(
    ({ user }) => `google-oauth2|${user.userId}` === userId
  );
  return (
    <>
      <PageTitle title="Mis publicaciones" />
      <Pets editableCards pets={myPosts} />
    </>
  );
}

/* export async function getServerSideProps(context) {
  const res = await API.Posts.fetch(userId);
  const posts = res.json();
  return { posts };
}; */
