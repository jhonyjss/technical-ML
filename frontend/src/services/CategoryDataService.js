import http from "../api/http-common";
class CategoryDataService {
  async all() {
    try {
      return await http.get(`/categories`);
    } catch (error) {
      console.error("categories", error);
    }
  }
}
export default new CategoryDataService();
