import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password, name, photo);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar></Navbar>
      <h2 className="text-2xl text-center my-7 font-bold">
        Register your account
      </h2>
      <form
        onSubmit={handleRegister}
        className="md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="my-3">
          <input
            className="mr-2"
            type="checkbox"
            name="checked"
            id=""
          />
          <label htmlFor="checked">Accept Term & Conditions</label>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-[#403F3F] text-white"
          >
            Register
          </button>
        </div>
      </form>
      <p className="text-center text-[#706F6F] my-7">
        Already Have An Account ?
        <Link
          className="text-red-400 font-semibold"
          to="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
