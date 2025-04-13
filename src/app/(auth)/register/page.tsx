import RegisterForm from "./components/form";
import RegisterPoster from "./components/poster";



export default function Register() {

  return (
    <div className="flex w-full h-full items-center justify-center mx-10">
      <RegisterForm></RegisterForm>
      <RegisterPoster></RegisterPoster>
    </div>

  );
}