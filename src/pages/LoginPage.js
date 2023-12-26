import { useForm } from "react-hook-form";
import pinkshop from "../assets/form/pinkshop.png";
import { useDispatch } from "react-redux";
import { AxiosInstance } from "../api/axiosInstance";
import { setUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  // const formLogin = async (formData) => {
  //   try {
  //     const response = await AxiosInstance.post("/login", formData);
  //     console.log(response.data);

  //     dispatch(setUser(response.data));
  //     localStorage.setItem("token", response.data.token);
  //     history.push("/");
  //     toast.success("welcome back!");
  //   } catch (error) {
  //     toast.error("Error occurred: " + error.response.data.message);
  //   }
  // };

  const formLogin = (formData) => {
    dispatch(userLogin(formData));
  };

  const userLogin = (formData) => async (dispatch) => {
    try {
      const response = await AxiosInstance.post("/login", formData);
      console.log(response.data);

      dispatch(setUser(response.data));
      localStorage.setItem("token", response.data.token);
      history.push("/");
      toast.success("Welcome back!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred: " + error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center sm:px-48 flex-wrap-reverse bg-lightgrey">
      <div className="flex w-[36rem] h-auto">
        <img className="w-full h-full" src={pinkshop} alt="pinkshop"></img>
      </div>
      <div className="flex flex-col w-[24rem] h-min p-8 gap-8 rounded-xl">
        <div className="flex flex-col items-start w-full gap-2">
          <h3 className="text-xl font-bold ">Welcome back!</h3>
          <p className="text-base text-secondtext">
            I don't have an account?{" "}
            <a href="/signup" className="text-shineblue">
              Sign up.
            </a>
          </p>
        </div>
        <form
          className="flex flex-col w-full items-start gap-4 text-secondtext font-bold"
          onSubmit={handleSubmit(formLogin)}
        >
          <div className="flex flex-col w-full gap-1">
            <label className="label">
              Email
              <input
                className="input shadow-lg"
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address.",
                  },
                })}
              />
            </label>
            <div className="error">{errors?.email?.message}</div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="label">
              Password
              <input
                className="input shadow-lg"
                type="password"
                {...register("password", { required: "Password is required." })}
              />
            </label>
            <div className="error">{errors?.password?.message}</div>
          </div>
          <button
            className="flex justify-center self-end bg-shineblack text-white w-min px-4 py-2 rounded active:scale-95"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
