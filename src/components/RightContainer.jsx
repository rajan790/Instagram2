import styles from "./RightContainer.module.css"; // Import CSS Module
import profile from "../assets/profile.jpg";
import data from "../data/data2.json";
import Footer from "./Footer";

const RightContainer = () => {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.oneContainer}>
        <img className={styles.profile} src={profile} alt="Profile" />
        <div className={styles.userNameContainer}>
          <p className={styles.userName}>_._raj.an_._</p>
          <p className={styles.name}>Rajan PJ</p>
        </div>
        <button className={styles.switch}>Switch</button>
      </div>
      <div className={styles.suggestContainer}>
        <div className={styles.suggestTitle}>
          <p style={{ fontSize: "14px", color: "#a8a8a8", width: "243px" }}>
            Suggested for you
          </p>
          <p className={styles.seeAll}>See all</p>
        </div>
      </div>
      <div className={styles.suggestPeopleContainer}>
        {data.map((element) => (
          <div className={styles.eachPeopleContainer} key={element.user_name}>
            <img className={styles.profile} src={element.img} alt={element.name} />
            <div className={styles.userNameContainer}>
              <p className={styles.userName}>{element.user_name}</p>
              <p className={styles.name}>{element.name}</p>
            </div>
            <button className={styles.switch}>Follow</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RightContainer;
