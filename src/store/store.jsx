import { createContext, useReducer } from "react";
import postData from "../data/post_data.json";
export const PostList = createContext({
  posts: [],
  newPost: () => {},
});
const postsReducer = (currPosts, action) => {
  let updatedPosts = currPosts;
  if (action.type === "ADD_POST") {
    console.log(localStorage);
    updatedPosts = [...currPosts, action.payload.newPost];
    try {
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
      } catch (error) {
        console.error("Storage quota exceeded! Clearing localStorage...", error);
        localStorage.removeItem("posts"); // 🛑 Purane data ko hatao
      }
  }
  return updatedPosts;
};
const PostListContextProvider = ({ children }) => {
  const initialPosts = JSON.parse(localStorage.getItem("posts")) || postData;
  const [posts, dispatchposts] = useReducer(postsReducer, initialPosts);
  const newPost = (newPost) => {
    const newItemAction = {
      type: "ADD_POST",
      payload: {
        newPost,
      },
    };
    dispatchposts(newItemAction);
  };
  return (
    <PostList.Provider value={{ posts, newPost }}>{children}</PostList.Provider>
  );
};
export default PostListContextProvider;
