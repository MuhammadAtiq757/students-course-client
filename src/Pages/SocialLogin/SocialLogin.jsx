
import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || "/";
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            const saveUser = {name: loggedUser.displayname, email:loggedUser.email}

            console.log(loggedUser);
            fetch('https://school-academy-server-muhammadatiq757.vercel.app/users',{
                method: 'POST',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
               
                   
                    navigate(from, {replace: true});
               
            })




          
        })
    }

    return (
        <div>
            <div className="divider"></div>
           <div className="w-full text-center my-6">
           <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
           </div>
        </div>
    );
};

export default SocialLogin;