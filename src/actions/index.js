import axios from "axios";
export function regNewUser(user){
    console.log('Iam in action',user);
    var promise=axios.post("http://localhost:9017/user/register",user);

    console.log('promise',promise);
    return{
        type:'REGISTER',
        payload:promise,
    }
}

export function loginUser(user){
    console.log('Iam in action',user);
    var promise=axios.post("http://localhost:9017/user/login",user);

    console.log('promise',promise);
    return{
        type:'LOGIN',
        payload:promise,
    }
}
export function productsUser(user){
    console.log('Iam in action',user);
    var promise=axios.post("http://localhost:9017/user/products",user);

    console.log('promise',promise);
    return{
        type:'products',
        payload:promise,
    }
}