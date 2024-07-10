import { Link } from "react-router-dom";
import loginImage from "../assets/images/login-image.jpg";
import InputElement from "../components/common/InputElement";

const LoginPage = () => {
  return (
    <section className="w-full flex justify-center pb-12">
      <div className="w-full max-w-1224 flex flex-wrap ">
        <div className="w-full md:w-1/2">
          <img src={loginImage} alt="login-page" className="w-full object-cover object-center  h-72 md:h-auto" />
        </div>

        <div className="w-full md:w-1/2 h-max md:h-full flex items-center justify-center flex-col px-16">
          <h2 className="text-center text-2xl font-bold mb-10">Login</h2>
          <InputElement className="form-input w-full mb-2" placeholder="Username" name="username" type="text" />
          <InputElement className="form-input w-full mb-2" placeholder="Password" name="password" type="password" />
          <Link className="text-primary mt-2" to="/">
            Forgot your password?
          </Link>
          <button className="btn-dark w-full mt-6">log in</button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
