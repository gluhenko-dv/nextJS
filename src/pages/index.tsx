import type { NextPage } from "next";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Главная">
      <div className="container">
        <Hero />
      </div>
    </Layout>
  );
};

export default Home;
