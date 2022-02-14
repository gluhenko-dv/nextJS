import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getUser, getUserAlbums, getUserPosts, getUsers } from "../../../api";
import Layout from "../../../components/Layout/Layout";
import UserCard from "../../../components/UserCard/UserCard";
import YandexMap from "../../../components/YandexMap/YandexMap";
import { IAlbum, IPost, IUser } from "../../../interfaces";
import Posts from "../../../modules/Posts/Posts";
import AlbumsList from "../../../components/AlbumsList/AlbumsList";

interface IUserPageProps {
  user: IUser;
  userPosts: IPost[];
  userAlbums: IAlbum[];
}

const UserPage: NextPage<IUserPageProps> = ({
  user,
  userPosts,
  userAlbums,
}) => {
  return (
    <Layout title={`${user.name}`}>
      <div className="container">
        <UserCard {...user} />
        <AlbumsList albumsData={userAlbums} />
        <YandexMap {...user} />
        <Posts title="Посты пользователя" postsData={userPosts} />
      </div>
    </Layout>
  );
};

export default UserPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await getUsers();
  const paths = users.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = await getUser(`${params?.id}`);
  const userPosts = await getUserPosts(`${params?.id}`);
  const userAlbums = await getUserAlbums(`${params?.id}`);

  return {
    props: {
      user,
      userPosts,
      userAlbums,
    },
  };
};
