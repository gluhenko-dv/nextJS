import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { getUser, getUsers } from "../../../api";
import Layout from "../../../components/Layout/Layout";
import UserCard from "../../../components/UserCard/UserCard";
import { IUser } from "../../../interfaces";

interface IUserPageProps {
  user: IUser;
}

const UserPage: NextPage<IUserPageProps> = ({ user }) => {
  const router = useRouter();
  //const onClick = useCallback(() => router.back(), []);

  return (
    <Layout title={`POST #${user.name}`}>
      <div className="container">
        <UserCard {...user} />
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
  console.log(user);

  return {
    props: {
      user,
    },
  };
};
