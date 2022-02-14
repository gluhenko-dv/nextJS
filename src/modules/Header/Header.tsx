import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.linksWrap}>
          <li className={styles.link}>
            <Link href="/">
              <a>Главная</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Посты</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
