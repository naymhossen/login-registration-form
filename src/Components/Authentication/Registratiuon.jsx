import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registratiuon = () => {
  const [showPass, setShowPass] = useState(false);
  const [registarError, setRegistarError] = useState("");
  const [registarSuccess, setragistarSucces] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setRegistarError(""); //reset error function
    setragistarSucces(""); //reset error function

    if (password.length < 8) {
      setRegistarError("Password Should Be at least 8=+ characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegistarError("At Least One UpperCase");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if(result.user.emailVerified){
          setragistarSucces("You Are Succesfully Registared");
        }else{
          alert('Pleace verifi your mail')
        }
        

        //verification email
        sendEmailVerification(result.user)
        .then(() => {
          alert('Check mail and varified your account');
        })

      })
      .catch((Error) => {
        console.error(Error);
        setRegistarError(Error.message);
      });
  };

  return (
    <div>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Registration</h1>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 relative">Password</label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            />
            <span className=" absolute rounded-full mt-3 ml-1" onClick={() => setShowPass(!showPass)}>
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            <input className="mt-5" type="checkbox" name="" id="" required/>
            <label className="text-black" htmlFor="terms">Accetp our Terms & Conditions</label>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
        {registarError && <p className="text-red-500 font-bold text-xl">{registarError}</p>}
        {registarSuccess && <p className="text-green-500 font-bold text-xl">{registarSuccess}</p>}
        <p className="text-black">Already have an account? Pleace <span className="text-green-700 underline font-semibold"><Link to="/login">Login</Link></span></p>
      </div>
    </div>
  );
};

export default Registratiuon;
