import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Error404Page: NextPage = () => {
  return (
    <Layout title="Страницы не существует">
      <div className="container">
        <h1>404</h1>
      </div>
    </Layout>
  );
};

export default Error404Page;
