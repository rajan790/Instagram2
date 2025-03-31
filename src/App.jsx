import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollBar from "./components/ScrollBar";
import Stories from "./components/Stories";
import RightContainer from "./components/RightContainer";
import Post from "./components/Post";
import PostListContextProvider from "./store/store";


function App() {
 
  return (
    <PostListContextProvider>
      <ScrollBar/>
      <div className="main-container">
        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Stories />
                  <Post/>
                </>
              }
            />
            <Route path="/posts" element={<Post/>} />
            <Route path="*" element={<h1>❌ 404 - Page Not Found</h1>} />
          </Routes>
        </div>
        <RightContainer />
      </div>
      </PostListContextProvider>
  );
}

export default App;
