import type { GetServerSideProps, NextPage } from "next";
import { getUsers } from "../../api";
import Layout from "../../components/Layout/Layout";
import UserCard from "../../components/UserCard/UserCard";
import { IUser } from "../../interfaces";
import styles from "../../styles/UsersPage.module.css";

interface IUsersPageProps {
  users: IUser[];
}

const UsersPage: NextPage<IUsersPageProps> = ({ users }) => {
  return (
    <Layout title="Пользователи">
      <div className="container">
        <div className={styles.usersWrap}>
          {users.map((user) => (
            <UserCard {...user} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UsersPage;

export const getServerSideProps: GetServerSideProps = async ({}) => {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
};
