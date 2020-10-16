const URL = process.env.APP_DOMAIN || "http://localhost:3000";

export const deletePost = (_id) => {
  return fetch(`${URL}/api/posts`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id }),
  });
};

export const editPost = (_id, newContent) =>
  fetch(`${URL}/api/posts`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id, newContent }),
  });
