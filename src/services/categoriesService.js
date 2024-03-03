import http from "./httpService";

export function getCategories(data) {
  return http.get("/category/list", data).then(({data}) => data.data);
}