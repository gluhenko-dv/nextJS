import Link from "next/link";
import styles from "./LinkWrap.module.css";

interface ILinkProps {
  link: string;
  title: string;
  linkTitle: string;
}

const LinkWrap: React.FC<ILinkProps> = ({ link, title, linkTitle }) => {
  return (
    <div>
      <span>{linkTitle}: </span>
      <Link href={link}>
        <a className={styles.userLink}>{title}</a>
      </Link>
    </div>
  );
};

export default LinkWrap;
