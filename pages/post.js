import { useEffect } from "react";
import { useRouter } from "next/router";
import PostForm from "../components/PostForm";
export default function Post({}) {
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
      <PostForm />
    </>
  );
}
