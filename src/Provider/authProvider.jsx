import { createContext, useState, useEffect } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // continuous stage change
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosPublic
        .get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data.user);
          setLoading(false);
        })
        .catch(() => {
          setUser(null);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [axiosPublic]);

  const signUp = async (signupData) => {
    setLoading(true);
    try {
      console.log("AuthProvider - sending signup data:", signupData);
      const response = await axiosPublic.post(`/users/signup`, signupData);

      // Handle the response structure: response.data.data.accessToken and response.data.data.user
      if (response.data && response.data.success && response.data.data) {
        const { accessToken, user } = response.data.data;

        if (accessToken && user) {
          localStorage.setItem("token", accessToken);
          setUser(user);
          console.log("User automatically logged in after signup:", user);
          console.log("Access token stored:", accessToken);
        }
      }

      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error("AuthProvider - signup error:", error.response?.data || error.message);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const res = await axiosPublic.post(`/auth/login`, {
        email,
        password,
      });

      // Handle login response structure similar to signup
      if (res.data && res.data.success && res.data.data) {
        const { accessToken, user } = res.data.data;

        if (accessToken && user) {
          localStorage.setItem("token", accessToken);
          setUser(user);
          console.log("User logged in:", user);
        }
      } else if (res.data && res.data.token && res.data.user) {
        // Fallback for different response structure
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
      }

      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      console.error("AuthProvider - signin error:", error.response?.data || error.message);
      throw error;
    }
  };

  const forgetPassword = async (email) => {
    setLoading(true);
    try {
      const res = await axiosPublic.post(`/auth/forget-password`, { email });
      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      console.error("AuthProvider - forget password error:", error.response?.data || error.message);
      throw error;
    }
  };

  const resetPassword = async (token, newPassword, email) => {
    setLoading(true);
    try {
      const res = await axiosPublic.post(`/auth/reset-password`, {
        token,
        newPassword,
        email
      });
      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      console.error("AuthProvider - reset password error:", error.response?.data || error.message);
      throw error;
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axiosPublic.post(
        `/auth/change-password`,
        {
          oldPassword: currentPassword,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      console.error("AuthProvider - change password error:", error.response?.data || error.message);
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      signUp,
      signIn,
      signOut,
      forgetPassword,
      resetPassword,
      changePassword,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
