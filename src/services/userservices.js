import axios from 'axios';
import { toast } from "react-toastify";

const baseUrl = "http://34.213.106.173/api/"
function UserRegister(data) {
    axios.post(baseUrl + "user/userSignUp", data)
        .then(function (response) {
            console.log(response);
            toast('Registered Successfully')
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
            toast('Login Successfully')
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

