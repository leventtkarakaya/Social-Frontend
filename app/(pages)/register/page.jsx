"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import SweetAlert2 from "react-sweetalert2";
import { useRouter } from "next/navigation";

export default function page() {
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    image: null,
  });
  /* Upload state */
  const [upload, setUpload] = useState(false);
  /* Get image URL */
  const [avatar, setAvatar] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageSubmit = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    try {
      const res = await axios.post(
        "http://localhost:5000/register/image-upload",
        formData
      );
      setUser({
        ...user,
        image: res.data.file.filename,
      });
      /* Get image URL multer */
      const responseImage = axios.get(
        `http://localhost:5000/upload/${res.data.file.filename}`
      );
      const result = (await responseImage).request.responseURL;
      console.log("🚀 ~ handleImageSubmit ~ result:", result);
      setAvatar(result);
    } catch (error) {
      console.log("🚀 ~ handleImageSubmit ~ error:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpload(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        password: user.password,
        passwordConfirm: user.passwordConfirm,
        image: avatar,
      });
      setUpload(false);
      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        router.push("/login");
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center md:h-[93vh] md:w-full">
        <div className="flex flex-col p-3 font-semibold bg-gray-200 text-md max-md:w-full rounded-2xl">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="file-upload" className="custom-file-upload">
              <Image
                src={avatar || "/Logo.png"}
                width={50}
                height={50}
                alt="logo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                  cursor: "pointer",
                }}
                className="object-cover w-16 h-16 rounded-full"
              />
            </label>
            <label className="block mt-1 mb-2 text-sm font-bold text-center text-gray-700 cursor-pointer">
              Profil Resmi
              <input
                type="file"
                name="image"
                id="file-upload"
                label="Image"
                className="hidden"
                accept=" .jpg, .png, .jpeg, .gif, .webp "
                onChange={handleImageSubmit}
              />
            </label>
            <div className="grid grid-cols-2 mt-5 max-md:grid-cols-1 gap-x-10 gap-y-10 ">
              <label className="flex flex-col leading-8 ">
                Kullanıcı Adı
                <input
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={handleChange}
                  className="p-2 bg-white border-none rounded outline-none"
                />
              </label>
              <label className="flex flex-col leading-8">
                Adınız
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  className="p-2 bg-white border-none rounded outline-none"
                />
              </label>
              <label className="flex flex-col leading-8">
                Soyadınız
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  className="p-2 bg-white border-none rounded outline-none"
                />
              </label>
              <label className="flex flex-col leading-8">
                E-mail
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="p-2 bg-white border-none rounded outline-none"
                />
              </label>
              <label className="flex flex-col leading-8">
                Şifre
                <input
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="p-2 bg-white border-none rounded outline-none"
                />
              </label>
              <label className="flex flex-col leading-8">
                Şifre Tekrar
                <input
                  type="text"
                  name="passwordConfirm"
                  value={user.passwordConfirm}
                  onChange={handleChange}
                  className="p-2 bg-white border-none rounded outline-none"
                />
              </label>
            </div>
            <div className="flex items-center justify-center flex-1 mt-10 font-semibold gap-x-5">
              <button className="px-10 btn">Üye Ol</button>
              <div
                onClick={() => router.push("/login")}
                className="flex items-center justify-center"
              >
                <span className="text-sm hover:text-[#3b82f6] cursor-pointer rounded-full px-2">
                  Zaten hesabın var mı?
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
