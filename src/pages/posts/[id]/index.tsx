import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { getPost, getPostComments, getPosts } from "../../../api";
import Layout from "../../../components/Layout/Layout";
import { IPost, IPostComment } from "../../../interfaces";
import Comments from "../../../components/Comments/Comments";
import Post from "../../../components/Post/Post";


interface IPostsPageProps {
  post: IPost;
  postComments: IPostComment[];
}

const PostPage: NextPage<IPostsPageProps> = ({ post, postComments }) => {
  const router = useRouter();
  const onClick = useCallback(() => router.back(), [router]);

  return (
    <Layout title={`POST #${post.id}`}>
      <div className="container">
        <Head>
          <title>POST #{post.id}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <button className="goBackBtn" onClick={onClick}>
          GO BACK
        </button>
        <Post {...post} />
        <Comments postComments={postComments} />
      </div>
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map(({ id }) => ({ params: { id: id.toString() } }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(`${params?.id}`);
  const postComments = await getPostComments(`${params?.id}`);

  return {
    props: {
      post,
      postComments,
    },
  };
};
