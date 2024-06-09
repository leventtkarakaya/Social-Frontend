"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loginUser, setLoginUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChaneValue = (e) => {
    // Corrected variable name
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          userName: loginUser.userName, // Corrected variable name
          password: loginUser.password,
          email: loginUser.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token); // Storing token only once
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Storing user data
        router.push("/"); // Use useRouter for navigation
      } else {
        // Handle failed login (e.g., show an error message)
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("🚀 ~ hadnleLogin ~ error:", error);
      // Handle errors gracefully (e.g., display a user-friendly error message)
    }
  };

  return (
    <>
      <div className="flex items-center justify-center md:h-[93vh] ">
        <div className="w-1/3 h-2/3 bg-slate-200 rounded-2xl">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col items-center justify-around h-full ">
              <div>
                <Image src="/logo.png" alt="logo" width={60} height={60} />
              </div>
              <div className="flex flex-col w-full p-3 gap-y-3 ">
                <label>Kullıcı Adı</label>
                <input
                  type="text"
                  name="userName"
                  value={loginUser.userName} // Corrected variable name
                  onChange={handleChaneValue}
                  className="py-2 border-none rounded-sm outline-none"
                />
                <label>E-mail</label>
                <input
                  type="text"
                  name="email"
                  value={loginUser.email}
                  onChange={handleChaneValue}
                  className="py-2 border-none rounded-sm outline-none"
                />
                <label>Şifreyi </label>
                <input
                  type="password" // Use "password" type for security
                  name="password"
                  value={loginUser.password}
                  onChange={handleChaneValue}
                  className="py-2 border-none rounded-sm outline-none"
                />
              </div>
              <div>
                <button className="px-4 py-2 text-white bg-blue-500 rounded">
                  Giriş Yap
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
