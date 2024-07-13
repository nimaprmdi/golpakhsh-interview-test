import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login-image.jpg";
import InputElement from "../components/common/InputElement";
import { useState } from "react";
import { Auth } from "../models/auth";
import { validate, validateProperty } from "../helpers/validation/validate";
import { loginSchema } from "../helpers/validation/schemas";
import { deepClone } from "../helpers/utils";
import { Errors } from "../models/error";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/configureStore";
import { userLogin } from "../store/auth/authActions";

const LoginPage = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [data, setData] = useState<Auth>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errorMsg = validateProperty(e.target, loginSchema);

    if (errorMsg) {
      setErrors({ ...errors, [e.target.name]: errorMsg });
    } else {
      setErrors((prevState) => {
        const errorsClone = { ...deepClone(prevState) };
        delete errorsClone[e.target.name];
        return { ...errorsClone };
      });
    }

    const value =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setData({ ...deepClone(data), [e.target.name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const errorMsg = validate(data, loginSchema);

    const handleError = () => {
      toast.error("Please check your inputs");
      setErrors({ ...errors, ...errorMsg });
    };

    const handleSuccess = () => {
      dispatch(userLogin(data, navigate));
    };

    !errorMsg ? handleSuccess() : handleError();
  };

  return (
    <section className="w-full flex justify-center pb-12">
      <div className="w-full max-w-1224 flex flex-wrap ">
        <div className="w-full md:w-1/2">
          <img src={loginImage} alt="login-page" className="w-full object-cover object-center  h-72 md:h-auto" />
        </div>

        <div className="w-full md:w-1/2 h-max md:h-full flex items-center justify-center flex-col px-16">
          <h2 className="text-center text-2xl font-bold mb-10">Login</h2>
          <InputElement
            onChange={handleInputChange}
            className="w-full mb-2"
            placeholder="Username"
            errorMsg={errors.username || ""}
            name="username"
            type="text"
          />
          <InputElement
            onChange={handleInputChange}
            errorMsg={errors.password || ""}
            className="w-full mb-2"
            placeholder="Password"
            name="password"
            type="password"
          />
          <Link className="text-primary mt-2" to="/">
            Forgot your password?
          </Link>
          <button onClick={handleSubmit} className="btn-dark w-full mt-6">
            log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
