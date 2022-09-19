import { BlogPost } from "~/types";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
	baseURL: process.env.DATABASE_URL,
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
	getPosts: (): Promise<BlogPost[]> => requests.get('posts'),
	getAPost: (id: number): Promise<BlogPost> => requests.get(`posts/${id}`),
	createPost: (post: BlogPost): Promise<BlogPost> =>
		requests.post('posts', post),
	updatePost: (post: BlogPost, id: number): Promise<BlogPost> =>
		requests.put(`posts/${id}`, post),
	deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};