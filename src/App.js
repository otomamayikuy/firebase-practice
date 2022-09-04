import './App.css';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword ,getAuth,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {React,useState} from "react";

function App() {
  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [signupEmail,setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const firebaseConfig = {
    apiKey: "AIzaSyDfOPKRXfwhWKTT89-D0ybvJlyZvYiDYNE",
    authDomain: "fir-practice1-6997b.firebaseapp.com",
    projectId: "fir-practice1-6997b",
    storageBucket: "fir-practice1-6997b.appspot.com",
    messagingSenderId: "244835181046",
    appId: "1:244835181046:web:c6800e74dd8876896d27d7",
    measurementId: "G-FTXBY2D4E8"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  function loginSend(){
    signInWithEmailAndPassword(auth,loginEmail, loginPassword)
    .then((userCredential) => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            alert("ログインしました")
        } else {

        }
        });
    })
    .catch((error) => {
        alert("メールアドレスまたはパスワードが間違っています")
    });
  }
  function signupSend(){
    createUserWithEmailAndPassword(auth,signupEmail, signupPassword)
    .then((userCredential) => {
      alert("新規登録しました")
    })
    .catch((error) => {
      alert("メールアドレスが間違っています。もう一度やり直してください")
    });
  }
  return (
    <div className="App">
      <h2>新規登録</h2>
      <h3 className="signupInput">メールアドレス　<input className="signupInputTag" name="email" type="email" placeholder="email" onChange={(e)=>setSignupEmail(e.target.value)}/></h3>
      <h3 className="signupInput">パスワード　　　<input className="signupInputTag" name="password" type="password" onChange={(e)=>setSignupPassword(e.target.value)}/></h3>
      <button onClick={signupSend}>送信</button>
      <h2>ログイン</h2>
      <h3 className="loginInput">メールアドレス　<input className="loginInputTag" name="email" type="email" placeholder="email" onChange={(e)=>setLoginEmail(e.target.value)}/><br/></h3>
      <h3 className="loginInput">パスワード　　　<input className="loginInputTag" name="password" type="password" onChange={(e)=>setLoginPassword(e.target.value)}/></h3>
      <button onClick={loginSend}>送信</button>
    </div>
  );
}

export default App;
