    import axios from 'axios';
const BASE_URL="http://localhost:9017/admin/";
export  function getAllProducts(){
    console.log("I am in get All products!!");
    var promise=axios.get(`${BASE_URL}allProducts`);

    return{
        type:'ALL_PRODUCTS',
        payload:promise

    }
}
export function getSpecificProduct(pid){
    console.log("I am in get specificproducts!!");
    var promise=axios.get(`${BASE_URL}product/${pid}`);
 
    return {
        type:'CURRENT_PRODUCT',
        payload: promise
}
}