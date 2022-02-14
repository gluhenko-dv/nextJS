import { IPostComment } from "../../interfaces";
import styles from "./Comments.module.css";

interface ICommentsProps {
  postComments: IPostComment[];
}
const Comments: React.FC<ICommentsProps> = ({ postComments }) => {
  return (
    <section className={styles.comments}>
      <h2>COMMENTS</h2>
      {postComments.map(({ id, name, email, body }) => (
        <article className={styles.comment}  key={id}>
          <strong>
            email: <a href={`mailto:${email}`}>{email}</a>
          </strong>
          <p className={styles.commentText}>{body}</p>
        </article>
      ))}
    </section>
  );
};

export default Comments;
