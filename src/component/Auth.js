import { auth, googleProvider } from "../Config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "../Css/Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = googleProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = googleProvider.credentialFromError(error);
        // ...
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="login">
      <label>Enter Your Email</label>
      <input className="input1"
        placeholder="Email..."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <label>Enter Your Password</label>
      <input className="input1"
        placeholder="Password..."
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <div className="button3">
        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}>SignIn with Google</button>
      </div>

      <button onClick={logOut}>Log Out </button>
    </div>
  );
};

export default Auth;
