import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
const baseUrl = import.meta.env.BackendURL;
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // continious stage change
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.user))
        .catch(() => setUser(null));
    }
  }, []);

  const signUp = async (
    firstName,
    lastName,
    email,
    phone,
    address,
    division,
    postCode,
    password,
      ) => {
    setLoading(true);
    await axios.post(`https://janatar-obhijog-backend.vercel.app/api/v1/users/signup`, {
      firstName,
      lastName,
      email,
      phone,
      address,
      division,
      postCode,
      password,
      
    });
  };

  const signIn = async (email, password) => {
    const res = await axios.post(`${baseUrl}/signin`, {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
