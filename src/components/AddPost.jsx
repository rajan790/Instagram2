import { useState } from "react";
import styles from "./AddPost.module.css";

const AddPost = ({ onClose, addPost }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
  };

  const handleAddPost = () => {
    if (!selectedImage || !title.trim()) return;

    const newPost = {
      username: "_._raj.an_._",
      image: selectedImage,
      title: `_._raj.an_._ ${title}`,
      time: Math.floor(Math.random() * 60) + 1,
      likes: Math.floor(Math.random() * 10000) + 1000,
      comments: Math.floor(Math.random() * 500),
    };

    addPost(newPost);  // ✅ Ensure `addPost` is called
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>

        {selectedImage ? (
          <div className={styles.imagePreview}>
            <img src={selectedImage} alt="Uploaded" className={styles.selectedImage} />
            <input 
              type="text" 
              className={styles.addTitle} 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className={styles.addPostBtn} onClick={handleAddPost}>Add Post</button>
          </div>
        ) : (
          <>
            <button className={styles.uploadButton} onClick={() => document.getElementById("fileInput").click()}>
              Select from computer
            </button>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
          </>
        )}
      </div>
    </div>
  );
};

export default AddPost;
