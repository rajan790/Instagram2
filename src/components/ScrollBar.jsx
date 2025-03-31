import { useState, useContext } from "react";
import styles from "./ScrollBar.module.css"; 
import logo from "../assets/logo.png";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import ReelIcon from "../icons/ReelIcon";
import MessageIcon from "../icons/MessageIcon";
import AddPostIcon from "../icons/AddPostIcon";
import HeartIcon from "../icons/Notification";
import profile from "../assets/profile.jpg";
import { AiIcon } from "../icons/AiIcon";
import ThreadsIcon from "../icons/ThreadsIcon";
import { SettingIcon } from "../icons/SettingIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { Link } from "react-router-dom";
import AddPost from "./AddPost";
import { PostList } from "../store/store";

const ScrollBar = () => { 
  const { newPost } = useContext(PostList); // ✅ useContext for state management
  const [addPostToggle, setAddPostToggle] = useState(false);

  const createPostHandler = () => {
    setAddPostToggle(true);
  };

  return (
    <>
      <div className={styles.ScrollBar}>
        <Link to="/" role="link" className={styles.logo}>
          <img className={styles["insta-logo"]} src={logo} alt="Logo" />
          <InstagramIcon className={styles.insta} />
        </Link>

        <div className={styles["main-content"]}>
          <Link to="/" className={`${styles.home} ${styles.main}`} role="link">
            <MdHomeFilled className={styles["home-logo"]} />
            <p>Home</p>
          </Link>

          <Link to="/search" className={`${styles.search} ${styles.main}`} role="link">
            <CiSearch className={styles["home-logo"]} />
            <p>Search</p>
          </Link>

          <Link to="/explore" className={`${styles.explore} ${styles.main}`} role="link">
            <MdOutlineExplore className={styles["home-logo"]} />
            <p>Explore</p>
          </Link>

          <Link to="/reels" className={`${styles.reels} ${styles.main}`} role="link">
            <ReelIcon />
            <p>Reels</p>
          </Link>

          <Link to="/messages" className={`${styles.message} ${styles.main}`} role="link">
            <MessageIcon />
            <p>Messages</p>
          </Link>

          <Link to="/notifications" className={`${styles.notification} ${styles.main}`} role="link">
            <HeartIcon className={styles["notification-logo"]} />
            <p>Notifications</p>
          </Link>

          <button className={`${styles.post} ${styles.main}`} onClick={createPostHandler}>
            <AddPostIcon className={styles["home-logo"]} />
            <p>Create</p>
          </button>

          <Link to="/profile" className={`${styles.profile} ${styles.main}`} role="link">
            <img src={profile} className={styles["profile-image"]} alt="Profile" />
            <p>Profile</p>
          </Link>
        </div>

        <div className={styles["main-down"]}>
          <Link to="/AiStudio" className={`${styles["ai-icon"]} ${styles.main}`}>
            <AiIcon />
            <p>AI Studio</p>
          </Link>

          <Link to="/threads" className={`${styles["thread-icon"]} ${styles.main}`}>
            <ThreadsIcon />
            <p>Threads</p>
          </Link>

          <Link to="/setting" className={`${styles["setting-icon"]} ${styles.main}`}>
            <SettingIcon />
            <p>More</p>
          </Link>
        </div>
      </div>

      {/* ✅ Ensure `newPost` is passed to AddPost component */}
      {addPostToggle && <AddPost onClose={() => setAddPostToggle(false)} addPost={newPost} />}
    </>
  );
};

export default ScrollBar;
