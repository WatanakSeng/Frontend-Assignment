import axios from "axios";
import router from "../router";

//Log In
export const login = ({commit}, {email,password}) =>{
    axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then(res => {
            if (res.status === 200 && res.data.length > 0){
                localStorage.setItem("fake-token",JSON.stringify(res.data[0].fake_token));
                commit('isLogin', true);
                // eslint-disable-next-line no-undef
                Toast.fire({
                    icon: 'success',
                    title: 'Logged in successfully'
                });
                router.push({name: 'Home'});
            }else {
                // eslint-disable-next-line no-undef
                Toast.fire({
                    icon: 'error',
                    title: 'Invalid Email or Password'
                });
            }
        })
        .catch(error=>console.log(error))
}

//Get Product
export const getProduct = ({commit}) => {
    axios.get(`http://localhost:3000/products?_sort=id&_order=desc`)
        .then(res => {
            commit('setProducts',res.data)
        })
        .catch(error=>console.log(error))
}

//Get Product By Id
export const getProductDetail = ({commit}, {id, self}) => {
    axios.get(`http://localhost:3000/products/${id}`)
        .then(res=>{
            commit('setProductDetail', res.data);
            self.productDetail();
        })
        .catch(error=>console.log(error))
}

//Search Product By name or quantity
export const searchProduct = ({commit}, {search}) => {
    axios.get(`http://localhost:3000/products?_sort=id&_order=desc&q=${search}`)
        .then(res => {
            commit('searchProducts',res.data)
        })
        .catch(error=>console.log(error))
}

//Filter Product By Price
export const filterPrice = ({commit},{minPrice,maxPrice}) => {
    axios.get(`http://localhost:3000/products?_sort=id&_order=desc&price_gte=${minPrice}&price_lte=${maxPrice}`)
        .then(res => {
            commit('filterPrice',res.data)
        })
        .catch(error=>console.log(error))
}

//Filter Product By Quantity
export const filterQuantity = ({commit},{minQuantity,maxQuantity}) => {
    axios.get(`http://localhost:3000/products?_sort=id&_order=desc&quantity_gte=${minQuantity}&quantity_lte=${maxQuantity}`)
        .then(res => {
            commit('filterQuantity',res.data)
        })
        .catch(error=>console.log(error))
}

//Insert Product
export const insertProduct = ({commit}, productData) => {
    axios.post(`http://localhost:3000/products`,{
        name: productData.name,
        description: productData.description,
        price: productData.price,
        quantity: productData.quantity,
        image: productData.image
    })
        .then(res =>{
            // eslint-disable-next-line no-undef
            Toast.fire({
                icon: 'success',
                title: 'Data inserted successfully'
            })
            commit('newProduct',res.data);

        })
        .catch(error=>{
            // eslint-disable-next-line no-undef
            Toast.fire({
                icon: 'error',
                title: 'Data inserted not successfully'
            })
            console.log(error);
        })
}

//Update Product
export const updateProduct = ({commit}, productData) => {
    let id = productData.id
    axios.put(`http://localhost:3000/products/${id}`,{
        name: productData.name,
        description: productData.description,
        price: productData.price,
        quantity: productData.quantity,
        image: productData.image
    })
        .then(res=>{
            // eslint-disable-next-line no-undef
            Toast.fire({
                icon: 'success',
                title: 'Data edited successfully'
            })
            router.push({name:'Home'});
            commit('updatedProduct',res.data);
        })
        .catch(error=>{
            // eslint-disable-next-line no-undef
            Toast.fire({
                icon: 'success',
                title: 'Data edited not successfully '
            })
            console.log(error);
        })
}

//Delete Product
export const deleteProduct = ({commit}, {id}) => {
    axios.delete(`http://localhost:3000/products/${id}`)
        .then(res=>{
            console.log(res.data);
            commit('deletedProduct', id);
        })
}