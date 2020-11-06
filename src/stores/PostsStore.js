import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

export class PostsStore {
  posts = [];
  state = "pending";
  constructor() {
    makeAutoObservable(this);
  }
  async fetchPosts() {
    this.posts = [];
    this.state = "pending";
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      runInAction(() => {
        this.posts = response.data;
        this.state = "done";
      });
    } catch (err) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }
}
