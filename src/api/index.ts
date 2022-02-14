import axios from "axios";
import { IPost, IPostComment } from "../interfaces";

const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const getPosts = async (): Promise<IPost[]> => {
  const { data } = await instance.get(`/posts`);
  return data;
};

export const getPost = async (id: string): Promise<IPost> => {
  const { data } = await instance.get(`/posts/${id}`);
  return data;
};

export const getPostComments = async (id: string): Promise<IPostComment[]> => {
  const { data } = await instance.get(`/posts/${id}/comments`);
  return data;
};
