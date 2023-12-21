import RegistrationForm from "../components/RegistrationForm";

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-full sm:px-96 px-4 sm:py-20 py-10 ">
      <div className="flex flex-col w-full sm:p-20 p-8 gap-10 rounded-xl border border-shineblack shadow-md shadow-shineblack">
        <h2 className="font-bold text-2xl text-shineblack">
          Registration Form
        </h2>
        <RegistrationForm />
      </div>
    </div>
  );
};
export default SignUpPage;
