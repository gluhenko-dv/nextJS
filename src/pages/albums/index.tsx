import type { GetStaticProps, NextPage } from "next";
import { getAlbums, getUsers } from "../../api";
import AlbumsList from "../../components/AlbumsList/AlbumsList";
import Layout from "../../components/Layout/Layout";
import UserCard from "../../components/UserCard/UserCard";
import { IAlbum, IUser } from "../../interfaces";
import styles from "../../styles/AlbumsPage.module.css";

interface IAlbumsPageProps {
  albums: IAlbum[];
}

const AlbumsPage: NextPage<IAlbumsPageProps> = ({ albums }) => {
  return (
    <Layout title="Альбомы">
      <div className="container">
        <AlbumsList albumsData={albums} />
      </div>
    </Layout>
  );
};

export default AlbumsPage;

export const getStaticProps: GetStaticProps = async ({}) => {
  const albums = await getAlbums();
  return {
    props: {
      albums,
    },
  };
};
