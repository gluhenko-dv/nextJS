import axios from "axios";
import { IPost, IPostComment, IUser } from "../interfaces";

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

export const getUsers = async (): Promise<IUser[]> => {
  const { data } = await instance.get(`/users`);
  return data;
};

export const getUser = async (id: string): Promise<IUser[]> => {
  const { data } = await instance.get(`/users/${id}`);
  return data;
};

export const getUserPosts = async (id: string): Promise<IUser[]> => {
  const { data } = await instance.get(`/users/${id}/posts`);
  return data;
};
