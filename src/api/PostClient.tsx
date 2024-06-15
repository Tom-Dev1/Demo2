import { Post } from "../models/PostModels";
import ApiClient from "./ApiClient";

export class PostClient extends ApiClient {
    async fetchPosts(): Promise<Post[]> {
        let response = await this.axiosInstance.get<Post[]>('posts');
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to fetch posts");
        }
    }
}