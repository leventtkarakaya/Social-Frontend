"use client";
import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="flex items-center justify-center md:h-[93vh] ">
        <div className="w-1/3 h-2/3 bg-slate-200 rounded-2xl">
          <div className="flex flex-col items-center justify-around h-full ">
            <div>
              <Image src="/logo.png" alt="logo" width={60} height={60} />
            </div>
            <div className="grid w-full grid-cols-1 p-3 gap-y-5 ">
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
