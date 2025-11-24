import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerWithEmailPassword ,setUser,user,handleGoogleSignIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const PhotoUrl = e.target.PhotoUrl.value;
    registerWithEmailPassword(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: PhotoUrl,
        })
          .then(() => {
            setUser(result.user)
          })
          .catch((error) => {
            console.log(error);
          });
          navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleSignUp = () =>{
    handleGoogleSignIn()
    .then(result =>{
      const user = result.user
      setUser(user)
       navigate("/")
    }).catch(error =>{
      console.log(error)
    })
  }

  console.log(user)
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-2xl shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your Full Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  className="input"
                  name="PhotoUrl"
                  placeholder="PhotoURL"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <button onClick={googleSignUp} className="btn text-2xl">
                                 <span className="text-[16px]">Sign In with</span> <FcGoogle />
                                </button>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <Link to="/login">
                  Already have an account?
                  <span className="text-blue-600">Login</span>
                </Link>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
