import axios from "axios";
import { IAlbum, IPhoto, IPost, IPostComment, IUser } from "../interfaces";

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

export const getUser = async (id: string): Promise<IUser> => {
  const { data } = await instance.get(`/users/${id}`);
  return data;
};

export const getUserPosts = async (id: string): Promise<IPost[]> => {
  const { data } = await instance.get(`/users/${id}/posts`);
  return data;
};

export const getUserAlbums = async (id: string): Promise<IAlbum[]> => {
  const { data } = await instance.get(`/users/${id}/albums`);
  return data;
};

export const getAlbums = async (): Promise<IAlbum[]> => {
  const { data } = await instance.get(`/albums`);
  return data;
};

export const getAlbumsPhoto = async (id: string): Promise<IPhoto[]> => {
  const { data } = await instance.get(`/albums/${id}/photos`);
  return data;
};

export const getAlbum = async (id: string): Promise<IAlbum> => {
  const { data } = await instance.get(`/albums/${id}`);
  return data;
};
