import styles from './Stories.module.css';
import data from '../data/data.json';

const Stories = () => {
  return (
    <div className={styles.storyContainer}>
      {data.map((story, index) => (
        <div className={styles.eachStory} key={index}>
          <div className={styles.profileContainer}>
          <img
            draggable="false"
            src={story.img}
            alt={story.user_name}
            className={styles.profile}
          />
          </div>
          <p className={styles.storyName}>{story.user_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
