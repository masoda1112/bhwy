import React, { useEffect, useState } from "react";
import { app } from "./firebase";

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ユーザーをログインさせる関数（下位コンポーネントに渡す）
  const login = async (email, password, history) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      // useHistoryって奴に関係していて、urlを変化させるためのものらしい
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  // 新しいユーザーを作成しログインさせる関数（下位コンポーネントに渡す）
  const signup = async (email, password, history) => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push("/");
      // 多分ここでfirestoreにもユーザー追加する？
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login: login,
        signup: signup,
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};