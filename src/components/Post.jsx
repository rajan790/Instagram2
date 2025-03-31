import { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Comment from "../icons/Comment";
import ShareIcon from "../icons/ShareIcon";
import SavedIcon from "../icons/SavedIcon";
import HeartIcon from "../icons/HeartIcon";

// Import CSS module
import styles from "./Post.module.css";
import { PostList } from "../store/store";

const Post = () => { 
  const { posts } = useContext(PostList);
  return (
    <div className={styles.postsContainer}>
      {posts.map((post, index) => (
        <SinglePost key={index} post={post} />
      ))}
    </div>
  );
};

const SinglePost = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultCaption = `${post.username} Captain Pat Cummins steps up for SRH, taking two crucial wickets in consecutive overs (Cricket, Cricket Updates, IPL 2025, SRHvLSG, Nicholas Pooran, Mitchell Marsh, CricTracker)`;

  const displayText = post.title ? post.title : defaultCaption;
  const showReadMore = post.title && post.title.length > 80; // ✅ Read More sirf title te apply hove

  return (
    <div className={styles.postContainer}>
      {/* Post Header */}
      <div className={styles.postHeader}>
        <div className={styles.dpContainer}>
          <img className={styles.dp} src={post.image} alt="Profile" />
        </div>
        <p className={styles.username}>{post.username}</p>
        <div className={styles.timeContainer}>
          <GoDotFill className={styles.dot} />
          <p className={styles.time}>{post.time}h</p>
        </div>
        <BsThreeDots className={styles.threeBtns} />
      </div>

      {/* Post Image */}
      <div className={styles.postImgContainer}>
        <img draggable="false" className={styles.postImg} src={post.image} alt="Post" />
      </div>

      {/* Reactions */}
      <div className={styles.reactions}>
        <HeartIcon />
        <Comment />
        <ShareIcon />
        <SavedIcon />
      </div>

      {/* Likes */}
      <div className={styles.likesContainer}>{post.likes.toLocaleString()} likes</div>

      {/* Post Caption */}
      <div className={styles.titleContainer}>
        {isExpanded || !showReadMore
          ? displayText
          : `${displayText.substring(0, 80)}...`}
        
        {showReadMore && (
          <span onClick={() => setIsExpanded(!isExpanded)} className={styles.readMoreBtn}>
            {isExpanded ? " less" : " more"}
          </span>
        )}
      </div>

      {/* Comments Section */}
      <p className={styles.commentSection}>View all {post.comments} comments</p>
      <input className={styles.addComment} placeholder="Add a comment..." />
    </div>
  );
};

export default Post;
