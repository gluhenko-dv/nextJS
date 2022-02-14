import { getPosts } from "../../api";
import { IPost } from "../../interfaces";
import type { GetServerSideProps, NextPage } from "next";
import Posts from "../../modules/Posts/Posts";

interface IPostsPageProps {
  postsData: IPost[];
}

const PostsPage: NextPage<IPostsPageProps> = ({ postsData }) => {
  return (
    <div className="container">
      <h1>POSTS</h1>
      <Posts postsData={postsData} />
    </div>
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
