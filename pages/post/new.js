import { useEffect } from "react";
import { useRouter } from "next/router";
import { getUserInfo } from "../../apiQueries/apiQueries";
import PostForm from "../../components/PostForm";
export default function PostNew({ user }) {
  const router = useRouter();
  useEffect(() => {
    getUserInfo()
      .then((logged) => logged.error && router.push("/home"))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <PostForm />
    </>
  );
}

/* export async function getServerSideProps(context) {
  try {
    const res = await fetch("http://localhost:3000/api/me");
    const user = await res.json();
    return {
      props: {
        user: user,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        user: null,
      },
    };
  }
} */
