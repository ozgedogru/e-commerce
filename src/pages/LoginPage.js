import { useForm } from "react-hook-form";
import pinkshop from "../assets/form/pinkshop.png";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center sm:px-48 flex-wrap-reverse bg-lightgrey">
      <div className="flex sm:w-1/2 h-auto">
        <img className="w-full h-full" src={pinkshop} alt="pinkshop"></img>
      </div>
      <div className="flex flex-col sm:w-1/3 h-min p-8 rounded-xl">
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
