import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login-image.jpg";
import InputElement from "../components/form-elements/InputElement";
import { useRef, useState } from "react";
import { IAuth } from "../models/auth";
import { validate } from "../helpers/validation/validate";
import { loginSchema } from "../helpers/validation/schemas";
import { deepClone, validateInputChange } from "../helpers/utils";
import { IErrors } from "../models/error";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/configureStore";
import { userLogin } from "../store/auth/authActions";

const LoginPage: React.FC = (): JSX.Element => {
  const [errors, setErrors] = useState<IErrors>({});
  const [data, setData] = useState<IAuth>({
    username: "",
    password: "",
  });
  const ref = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = validateInputChange(e, loginSchema, setErrors, errors);
    setData({ ...deepClone(data), [e.target.name]: valueInput });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.innerText = "Please Wait...";

    const errorMsg = validate(data, loginSchema);

    const handleError = () => {
      toast.error("Please check your inputs");
      setErrors({ ...errors, ...errorMsg });
      event.currentTarget.innerText = "Login";
    };

    const handleSuccess = () => {
      dispatch(userLogin(data, navigate));
    };

    !errorMsg ? handleSuccess() : handleError();
  };

  return (
    <section className="w-full flex justify-center pb-12">
      <div className="w-full max-w-1224 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <img
            src={process.env.PUBLIC_URL + loginImage}
            alt="login-page"
            className="w-full object-cover object-center  h-72 md:h-auto"
          />
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

          <button ref={ref} onClick={handleSubmit} className="btn-dark w-full mt-6">
            log in
          </button>

          <span className="mt-5">Fakestore login authentication (johnd) (m38rmF$)</span>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
