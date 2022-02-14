import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Главная">
      <div className={styles.container}></div>
    </Layout>
  );
};

export default Home;
