import { getPosts } from "../../api";
import { IPost } from "../../interfaces";
import type { GetStaticProps, NextPage } from "next";

import Layout from "../../components/Layout/Layout";
import Posts from "../../components/Posts/Posts";

interface IPostsPageProps {
  postsData: IPost[];
}

const PostsPage: NextPage<IPostsPageProps> = ({ postsData }) => {
  return (
    <Layout title="Posts">
      <div className="container">
        <Posts title="Посты" postsData={postsData} />
      </div>
    </Layout>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps = async ({}) => {

  const postsData = await getPosts();
  return {
    props: {
      postsData,
    },
  };
};
