import http from "../api/http-common";
class SearchDataService {
  async findByQuery(query = "") {
    try {
      return await http.get(`/search`, {
        params: JSON.parse(query),
      });
    } catch (error) {
      console.error("findByQuery", error);
    }
  }
}
export default new SearchDataService();
