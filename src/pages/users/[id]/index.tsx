import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { getUser, getUserPosts, getUsers } from "../../../api";
import Layout from "../../../components/Layout/Layout";
import UserCard from "../../../components/UserCard/UserCard";
import YandexMap from "../../../components/YandexMap/YandexMap";
import { IPost, IUser } from "../../../interfaces";
import Posts from "../../../modules/Posts/Posts";

interface IUserPageProps {
  user: IUser;
  userPosts: IPost[];
}

const UserPage: NextPage<IUserPageProps> = ({ user, userPosts }) => {

  return (
    <Layout title={`${user.name}`}>
      <div className="container">
        <UserCard {...user} />
        <YandexMap {...user} />
        <Posts postsData={userPosts}/>
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

  return {
    props: {
      user,
      userPosts,
    },
  };
};
