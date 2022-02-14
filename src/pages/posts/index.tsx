import { getPosts } from "../../api";
import { IPost } from "../../interfaces";
import type { GetServerSideProps, NextPage } from "next";
import Posts from "../../modules/Posts/Posts";
import Layout from "../../components/Layout/Layout";

interface IPostsPageProps {
  postsData: IPost[];
}

const PostsPage: NextPage<IPostsPageProps> = ({ postsData }) => {
  return (
    <Layout title="Posts">
      <div className="container">
        <h1>POSTS</h1>
        <Posts postsData={postsData} />
      </div>
    </Layout>
  );
};

export default PostsPage;

export const getServerSideProps: GetServerSideProps = async ({}) => {
  const postsData = await getPosts();
  return {
    props: {
      postsData,
    },
  };
};
