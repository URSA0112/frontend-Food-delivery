"use client";
import { DecodedToken } from "@/app/(auth)/Type";
import { BASE_URL } from "@/app/constants";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { toast } from "sonner";
import { AuthContextType, inputValueType } from "./authType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const login = async (values: inputValueType) => {
    try {
      //1.FETCH
      const res = await axios.post(`${BASE_URL}/auth/login`, values);
      const token = res.data.token;
      if (!token) {
        setError("Server Error");
      }
      // 2. SAVE
      localStorage.setItem("token", token);
      setError("");
      toast.success("✅ Successfully logged in");

      // 3.DECODE & CHECK
      const localToken = localStorage.getItem("token") as string;
      const decodedToken = jwtDecode<DecodedToken>(localToken);
      setUser(decodedToken.userObj.email);
      if (decodedToken.userObj.role === "user") {
        router.push("/Home");
      }
    } catch (error: any) {
      console.log(error.message);
      const errorMessage = error?.response?.data?.message;
      setError(errorMessage);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast("🚪 Session closed. See you soon!", {
      description: "You’ve been logged out.",
      duration: 4000,
    });
  };

  return (
    <AuthContext.Provider value={{ login, logout, error, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
