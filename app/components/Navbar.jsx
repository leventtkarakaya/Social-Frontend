"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mt-4 max-sm:px-4">
          <div className="">
            <Link href="/">
              <Image
                src="/logo.png"
                width={130}
                height={130}
                alt="logo"
                className="w-10"
              />
            </Link>
          </div>
          <div className="flex justify-center flex-1 ">
            <input
              type="text"
              className="w-1/3 border-none outline-none input max-sm:hidden"
              placeholder="Search"
            />
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src="/Avatar.png"
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 ml-10 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings">Ayarlar</Link>
                </li>
                <li>
                  <button>Çıkış</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
