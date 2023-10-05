import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar></Navbar>
      <h2 className="text-2xl text-center my-7">Login your account</h2>
      <form
        onSubmit={handleLogin}
        className="md:w-3/4 lg:w-1/2 mx-auto"
      >
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
          <label className="label">
            <a
              href="#"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-center text-[#706F6F] my-7">
        Don’t Have An Account ?{" "}
        <Link
          className="text-red-400 font-semibold"
          to="/register"
        >
          Register
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
