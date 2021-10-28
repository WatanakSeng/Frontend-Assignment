//Log In
export const isLogin = (state) =>{
    state.login = true;
}
//Get Product
export const setProducts = (state,products) =>{
    state.products = products;
}
//Get Product By Id
export const filterPrice = (state,products) => {
    state.products = products;
}
//Search Product By Name and Description
export const searchProducts = (state,products) => {
    state.products = products;
}
//Filter Product By Price
export const filterQuantity = (state,products) => {
    state.products = products;
}
//Filter Product By Quantity
export const newProduct = (state,products) =>{
    state.products.unshift(products);
}
//Insert Product
export const setProductDetail = (state,products) =>{
    state.products = products;
}
//Update Product
export const updatedProduct = (state,products) =>{
    state.products = products;
}
//Delete Product
export const deletedProduct = (state,id) =>{
    state.products.filter(product => product.id !== id);
}