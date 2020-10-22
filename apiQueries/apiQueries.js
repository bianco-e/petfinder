const URL = process.env.APP_DOMAIN || "http://localhost:3000";

export const getFilteredPosts = (filter) =>
  fetch(`${URL}/api/posts/${JSON.stringify(filter)}`).then((res) => res.json());

export const addPost = (post) =>
  fetch(`${URL}/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  });

export const deletePost = (_id) =>
  fetch(`${URL}/api/posts`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id })
  });

export const editPost = (_id, newContent) =>
  fetch(`${URL}/api/posts`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id, newContent })
  });

export const getUserInfo = () =>
  fetch(`${URL}/api/me`).then((res) => res.json());
