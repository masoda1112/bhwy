import logo from './logo.svg';
import './App.css';

const Login = ()  =>{
  return (
    <div className="login">
      <div className="name-form">
        <p>ニックネーム</p>
        <input></input>
      </div>
      <div className="pass-form">
        <p>パスワード</p>
        <input></input>
      </div>

    </div>
  );
}

export default Login;