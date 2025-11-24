import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [update, setUpdate] = useState(false);

  const handleForm = () => {
    setUpdate(!update);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: photoUrl,
        });
        setUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div className="avatar">
        <div className="w-36 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <p className="text-xl font-semibold">{user?.displayName}</p>
      <p className="text-xl font-semibold mb-3">{user?.email}</p>
      <button onClick={handleForm} className="btn">
        {" "}
        Update Profile
      </button>

      {update && (
        <div className="card-body">
          <form onSubmit={handleUpdate} className="fieldset">
            <label className="label">Name</label>
            <input
              defaultValue={user?.displayName}
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            <label className="label">Your PhotoURL</label>
            <input
              defaultValue={user?.photoURL}
              type="text"
              name="photoUrl"
              className="input"
              placeholder="Your PhotoURL"
            />
            <button className="btn btn-neutral mt-4">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
