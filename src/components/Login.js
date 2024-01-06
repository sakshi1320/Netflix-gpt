import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  // const fullname = useRef(null);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // validate form data
    const message = checkValidData(
      email.current.value,
      password.current.value
      // fullname.current.value
    );
    SetErrorMessage(message);

    if (message) return;
    // sign in / sign up
    if (!isSignInForm) {
    } else {
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        ></img>
      </div>
      {/* my-36 mx-auto right-0 left-0 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            // ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now In" : "Aready registred? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
