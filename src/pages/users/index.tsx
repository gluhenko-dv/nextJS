import type { GetServerSideProps, NextPage } from "next";
import { getUsers } from "../../api";
import Layout from "../../components/Layout/Layout";
import LinkWrap from "../../components/LinkWrap/LinkWrap";
import { IUser } from "../../interfaces";
import styles from "./UsersPage.module.css";

interface IUsersPageProps {
  users: IUser[];
}

const UsersPage: NextPage<IUsersPageProps> = ({ users }) => {
  return (
    <Layout title="Пользователи">
      <div className="container">
        <div className={styles.usersWrap}>
          {users.map(({ id, name, email, phone, website }) => (
            <article className={styles.userCard} key={id}>
              <div className={styles.userIcon}>
                <span>{name.match(/\b(\w)/g)?.join("")}</span>
              </div>
              <div className={styles.useInfo}>
                <h4>{name}</h4>
                <div className={styles.userContacts}>
                  <LinkWrap
                    link={`mailto:${email}`}
                    linkTitle="email"
                    title={email}
                  />
                  <LinkWrap
                    link={`tel:${phone}`}
                    linkTitle="phone"
                    title={phone}
                  />
                  <LinkWrap
                    link={website}
                    linkTitle="website"
                    title={website}
                  />
                </div>
              </div>
            </article>
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
