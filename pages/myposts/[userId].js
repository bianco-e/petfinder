import { useRouter } from "next/router";
import Pets from "../../components/Pets";
import PageTitle from "../../components/PageTitle";
export default function MyPosts({ posts = [] }) {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <>
      <PageTitle title="Mis publicaciones" />
      <Pets pets={posts} />
    </>
  );
}

/* export async function getServerSideProps(context) {
  const res = await API.Posts.fetch(userId);
  const posts = res.json();
  return { posts };
}; */
