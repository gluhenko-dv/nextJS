import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAlbum, getAlbums, getAlbumsPhoto, getUser } from "../../../api";
import Layout from "../../../components/Layout/Layout";
import { IAlbum, IPhoto, IUser } from "../../../interfaces";
import "swiper/css";
import SliderPhotos from "../../../components/SliderPhotos";
import LinkWrap from "../../../components/LinkWrap/LinkWrap";

interface IAlbumPhotoPageProps {
  photos: IPhoto[];
  album: IAlbum;
  user: IUser;
}

const AlbumPhotoPage: NextPage<IAlbumPhotoPageProps> = ({
  photos,
  album,
  user,
}) => {
  return (
    <Layout title={album.title}>
      <div className="container">
        <h2>{album.title}</h2>
        <LinkWrap
          linkTitle="Автор альбома"
          link={`/users/${user.id}`}
          title={user.name}
        />
        <SliderPhotos photos={photos} />
      </div>
    </Layout>
  );
};

export default AlbumPhotoPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const albums = await getAlbums();
  const paths = albums.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const photos = await getAlbumsPhoto(`${params?.id}`);
    const album = await getAlbum(`${params?.id}`);
    const user = await getUser(`${album.userId}`);

    return {
      props: {
        photos,
        album,
        user,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
