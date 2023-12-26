import RegistrationForm from "../components/RegistrationForm";

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:px-48 px-8 sm:py-20 py-10">
      <div className="flex flex-col sm:w-3/5 w-full sm:p-20 p-8 gap-10 rounded-xl shadow-xl">
        <h2 className="font-bold text-2xl text-black">Registration Form</h2>
        <div className="flex flex-col items-start">
          <p className="text-base text-secondtext">
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Login here.
            </a>
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};
export default SignUpPage;
