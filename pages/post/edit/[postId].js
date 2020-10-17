import postsAPI from "../../../db/posts/api";
import { useEffect } from "react";
import { useRouter } from "next/router";
import PostForm from "../../../components/PostForm";
export default function PostEdit({ post }) {
  const router = useRouter();
  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((loggedUser) => {
        loggedUser.error && router.push("/home");
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <PostForm editingPost={post} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { postId } = params;
  try {
    const [post] = await postsAPI.getFilteredDataBy({ _id: postId });
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        post: null,
      },
    };
  }
}
