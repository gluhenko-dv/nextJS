import Link from "next/link";
import { IUser } from "../../interfaces";
import LinkWrap from "../LinkWrap/LinkWrap";
import styles from "./UserCard.module.css";

const UserCard: React.FC<IUser> = ({ id, name, email, phone, website }) => {
  return (
    <article className={styles.userCard} key={id}>
      <Link href={`/users/${id}`}>
        <a>
          <div className={styles.userIcon}>
            <span>{name.match(/\b(\w)/g)?.join("")}</span>
          </div>
        </a>
      </Link>
      <div className={styles.useInfo}>
        <Link href={`/users/${id}`}>
          <a className={styles.userName}>{name}</a>
        </Link>

        <div className={styles.userContacts}>
          <LinkWrap link={`mailto:${email}`} linkTitle="email" title={email} />
          <LinkWrap link={`tel:${phone}`} linkTitle="phone" title={phone} />
          <LinkWrap link={website} linkTitle="website" title={website} />
        </div>
      </div>
    </article>
  );
};

export default UserCard;
