import { IPost } from "../../interfaces";
import styles from "./Post.module.css";

const Post: React.FC<IPost> = ({ title, body }) => {
  return (
    <section className={styles.post}>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
};

export default Post;
