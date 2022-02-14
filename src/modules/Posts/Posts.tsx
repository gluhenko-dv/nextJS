import Link from "next/link";
import { IPost } from "../../interfaces";
import styles from "./Posts.module.css";

interface IPostsProps {
  postsData: IPost[];
}

const Posts: React.FC<IPostsProps> = ({ postsData }) => {
  return (
    <div className={styles.posts}>
      {postsData.map(({ id, title, body }) => (
        <article className={styles.post} key={id}>
          <h3 className={styles.postTitle}>{title}</h3>
          <p className={styles.postText}>{body}</p>
          <Link href={`/posts/${id}`}>
            <a className={styles.link}>open</a>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Posts;
