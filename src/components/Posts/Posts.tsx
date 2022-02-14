import Link from "next/link";
import { IPost } from "../../interfaces";
import styles from "./Posts.module.css";

interface IPostsProps {
  title: string;
  postsData: IPost[];
}

const Posts: React.FC<IPostsProps> = ({ title, postsData }) => {
  return (
    <section className={styles.postsSection}>
      <h2>{title}</h2>
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
    </section>
  );
};

export default Posts;
