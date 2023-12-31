import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
// import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
    
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
  

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // })


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login User Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  });
                  navigate(from, {replace: true});
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }


    }


    return (
        <>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                    <div className="text-center md:w-1/2 lg:text-left pl-8">
                        <img src="https://i.ibb.co/JKrL3P9/pngtree-flat-business-login-box-removebg-preview.png" alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>


                            <div className="form-control mt-6">

                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="p-2 m-2 text-primary">New here? please <Link to='/signup'>Sign up</Link> </p>
                     <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;