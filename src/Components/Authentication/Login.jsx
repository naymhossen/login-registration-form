import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [sucess, setSuccess] = useState("");
  const [eyeShow, setEyeShow] = useState(false);
  const emailref = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    setLoginError('');
    setSuccess('');

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess('Login Succesfull');
      })
      .catch((Error) => {
        console.error(Error);
        setLoginError('Pleace Check Your Idntiy!!');
      });
  };

  const handelForgetPassword = () => {
    const email = emailref.current.value;
    if(!email){
      console.log('provide an mail', emailref.current.value);
      return ;
    }
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
      console.log('pleace right a valid mail');
      return ;
    }

    //send validation email

    sendPasswordResetEmail(auth, email)
    .then( () => {
      alert('pleace Check your email');
    })
    .catch((error) => {
      console.log(error);
    })
    
  };

  return (
    <div>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                ref={emailref}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Password</label>
              <input
                type={eyeShow ? "text" : "password"}
                id="password"
                name="password"
                className="w-full relative border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                placeholder="Password"
                required
              />
              <span className="absolute mt-3 ml-2" onClick={() => setEyeShow(!eyeShow)}>{eyeShow ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
              <div>
                <p onClick={handelForgetPassword} className="text-black mt-2"><Link>Forgot password?</Link></p>
                <input className="mt-5" type="checkbox" name="" id="" required />
                <label className="text-black" htmlFor="terms">
                  Accetp our Terms & Conditions
                </label>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Log In
              </button>
            </div>
          </form>
          {loginError && <p className="text-xl text-red-500 font-semibold">{loginError}</p>}
          {sucess && <p className="text-xl text-green-500 font-semibold">{sucess}</p>}
          <p className="text-black">New to this website pleace <span className="text-red-500 font-semibold underline"><Link to="/registration">Registar</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
