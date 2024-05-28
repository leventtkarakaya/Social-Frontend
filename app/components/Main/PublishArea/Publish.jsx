"use client";
import React from "react";
import { FcPicture, FcVideoCall } from "react-icons/fc";
import { FaLocationArrow, FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/public/Logo.png";
export default function Publish() {
  return (
    <>
      <div className="flex mt-20 md:w-2/3">
        <div className="w-full shadow-xl card card-side bg-base-200">
          <div className="card-body">
            <div className="flex items-center gap-5 pb-1">
              <Image
                src={Logo}
                width={130}
                height={130}
                alt="logo"
                className="w-10"
              />
              <h2 className="card-title">Gönderi Yayınla</h2>
            </div>
            <div>
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "100px",
                  border: "none",
                  outline: "none",
                  borderRadius: "10px",
                  caretColor: "#3b82f6",
                  backgroundColor: "rgb(250, 250, 250)",
                }}
              />
            </div>
            <div className="flex flex-1 card-actions">
              <button className="btn">
                <FcPicture />
                Fotoğraf
              </button>
              <button className="btn">
                <FcVideoCall />
                Video
              </button>
              <button className="btn">
                <FaLocationArrow />
                Konum etiketle
              </button>
              <button className="btn">
                <FaUserFriends />
                Arkadaş etiketle
              </button>
              <div className="flex justify-end flex-1 ">
                <button className="btn bg-[#3b82f6] hover:bg-[#3b8] text-white">
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
