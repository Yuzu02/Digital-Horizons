// Components
import LoginButton from "./LoginButton";
import { FaGoogle, FaGithub } from "react-icons/fa";

export const Login = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <div className="flex space-x-5">
        <LoginButton provider="google" icon={<FaGoogle />} />
        <LoginButton provider="github" icon={<FaGithub />} />
      </div>
    </section>
  );
};

export default Login;
