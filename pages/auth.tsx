import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login")

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat ">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center mt-">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white font-semibold text-4xl mb-8">{variant === "login" ? "Sign In" : "Sign Up"}</h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && <Input
                label="Username"
                value={name}
                id="name"
                onChange={(e: any) => setName(e.target.value)}
              />}
              <Input
                label="Email"
                type="email"
                value={email}
                id="email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                id="password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-red-600 py-3 mt-10 text-white hover:bg-red-700 rounded-md w-full transition">{variant === "login" ? "Sign In" : "Sign Up"}</button>
            <p className="text-neutral-500 mt-12">{variant === "login" ? "New to Netflix?" : "Already have an account?"} <span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>{variant === "login" ? "Sign up now." : "Login."}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
