import React from "react";
import { useParams } from "react-router";

const ForgetPassword = () => {
    const {email} = useParams();

  return (
    <div className="flex justify-center items-center my-28">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset">
            <label className="label">Email</label>
            <input
            defaultValue={email}
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />
          </form>
          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
