import Link from "next/link";
import { IAlbum } from "../../interfaces";
import styles from "./AlbumsList.module.css";

interface IAlbumsListProps {
  albumsData: IAlbum[];
}
const AlbumsList: React.FC<IAlbumsListProps> = ({ albumsData }) => {
  return (
    <section className={styles.albumList}>
      <h2>Альбомы</h2>
      <div className={styles.albumListWrap}>
        {albumsData.map(({ id, title }) => (
          <Link key={id} href={`/albums/${id}`}>
            <a className={styles.albumListLink}>{title}</a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AlbumsList;
