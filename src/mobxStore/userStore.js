import axios from "axios";
import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];
  loading = false;
  error = null;
  page = 1;
  constructor() {
    makeAutoObservable(this);
  }
  fetchUsers = async ({ page }) => {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?nat=in&page=${page}&results=10&seed=123`
      );
      this.users = response.data.results;
      this.page = page;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  };
}
const userStore = new UserStore();
export default userStore;
