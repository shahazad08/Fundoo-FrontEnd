import axios from 'axios';
import { toast } from "react-toastify";

const baseUrl = "http://34.213.106.173/api/"

// export default class UserService {
//     constructor(baseUrl){
//         this.baseUrl = baseUrl;

//     }
//     executeRest(path, method = 'get', data, headers, ){
//         if(typeof path === 'undefined'){
//             console.error('Path is not defined');
//             throw new Error('Something went wrong');
//         }
//         return axios.post(this.baseUrl + "user/userSignUp", data)
//     }

//     UserRegister(callback){
//         executeRest('user/userSignUp', 'post', data)
//             .then(function (response) {
//                 console.log(response);
//                 toast('Registered Successfully');
//                 return callback(null, response);
//             })
//             .catch(function (err) {
//                 console.log(err);
//                 toast('Please Enter valid Details');
//                 return callback('Something went wrong', null);
//             });
//     }
// }
function UserRegister(data) {
    axios.post(baseUrl + "user/userSignUp", data)
        .then(function (response) {
            console.log(response);
            toast('Registered Successfully')
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            toast('Please Enter valid Details')
        });
}

function LoginUser(data) {
    axios.post(baseUrl + "user/login", data)
        .then(function (response) {
            console.log(response);
            console.log("login token...",response.data.id)
            localStorage.setItem("token",response.data.id)
            localStorage.setItem("token1",true)
            toast('Login Successfully')
            window.location.href = '/dashboard'
        })
        .catch(function (err) {
            console.log(err);
            toast('Please Enter valid Details')
        });
}

function ForgetPasswordUser(data) {
    axios.post(baseUrl + "user/reset", data)
        .then(function (response) {
            console.log(response);
            toast('Please Click on the mail to reset the password')
        })
        .catch(function (err) {
            console.log(err);
            toast('Please Enter valid Details')
        });
}

function ResetPasswordUser(data) {
    axios.post(baseUrl + "user/reset-password", data)
        .then(function (response) {
            console.log(response);
            toast('Password Reset Successfully')
        })
        .catch(function (err) {
            console.log(err);
            toast('Please Enter valid Details')
        });
}
export { UserRegister, LoginUser, ForgetPasswordUser, ResetPasswordUser}

//  export default LoginUser;

