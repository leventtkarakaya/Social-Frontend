import Image from "next/image";
import React from "react";
import bg from "@/public/bg-cover.png";
export default function page() {
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="max-md:h-[200px] h-[400px] w-full ">
            <Image
              src={bg}
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
              }}
              alt="bg"
            />
            <div className="absolute top-0 left-0 w-full translate-y-32 max-sm:-top-16 max-sm:ml-2 ">
              <div className="flex items-center justify-between md:flex md:justify-between md:ml-16">
                <div className="flex items-center gap-x-5">
                  <Image
                    src="/logo.png"
                    width={70}
                    height={70}
                    alt="logo"
                    className="max-sm:w-12 max-sm:h-12"
                  />
                  <div className="flex flex-col space-y-2 text-white">
                    <span>Levent</span>
                    <span>Karakaya</span>
                  </div>
                </div>
                <div className="mr-10">
                  <button className="px-10 bg-[#3b82f6] rounded hover:bg-[#3b82f6] btn max-sm:px-3 outline-none border-none">
                    Takip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
