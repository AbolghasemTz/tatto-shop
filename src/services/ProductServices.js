import http from "./httpService";

export function getProducts(qs) {
    return  http.get(`/product/list?${qs}`).then(({data}) => data.data)
}
export function getProductsHome() {
    return  http.get(`/product/list`).then(({data}) => data.data)
}
export function getOneProductsBySlug(slug) {
    return  http.get(`/product/slug/${slug}`).then(({data}) => data.data)
}
export function likeProducts(id) {
    return http.post(`/product/like/${id}`).then(({data}) => data.data);
  
  }
  
  
  // admin functions
  
  export function addProduct(data) {
    return http.post(`/admin/product/add`,data).then(({data}) => data.data);
  
  }
  export function removeProduct(id) {
    return http.delete(`/admin/product/remove/${id}`).then(({data}) => data.data);
  
  }
  
  
  export function updateProduct({productId,data}) {
    return http.patch(`/admin/product/update/${productId}`,data).then(({data}) => data.data);
  
  }
  
  export function getOneProductById(id) {
    return http.get(`/product/${id}`).then(({data}) => data.data);
  
  }