import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { setUser, user,handleGoogleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state)
      })
      .catch((error) => {
        console.log(error);
      });
  };

    const googleSignIn = () =>{
    handleGoogleSignIn()
    .then(result =>{
      const user = result.user
      setUser(user)
      navigate(location.state)
    }).catch(error =>{
      console.log(error)
    })
  }


  console.log(user);
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit2}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button onClick={googleSignIn} className="btn text-2xl">
                 <span className="text-[16px]">Sign In with</span> <FcGoogle />
                </button>
                <Link to="/register">
                  New in our Website?
                  <span className="text-blue-600">Register</span>
                </Link>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
