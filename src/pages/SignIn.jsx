import Lottie from "lottie-react";
import lottieAnim from "/src/assets/lottie/signin.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const { signIn, setLoading } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password).then((res) => console.log(res.user));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={lottieAnim}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <h1 className="text-5xl font-bold mx-5 my-5">SignIn now!</h1>
          <form className="card-body" onSubmit={handleSubmit}>
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
