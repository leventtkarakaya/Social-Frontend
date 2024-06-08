"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import bg from "@/public/bg-cover.png";
import Logo from "@/public/Logo.png";
import Resim from "@/public/Resim.jpg";
import style from "./profile.module.css";
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
                    <span className="uppercase">Karakaya</span>
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
        {/* PopularUserCard component */}
        <PopularUserCard />
        {/* ContentCard component */}
        <UserMessage />
      </div>
    </>
  );
}

const PopularUserCard = () => {
  const [actives, setActives] = useState(0);
  const [value, setValue] = useState({
    id: 0,
    name: "İçerikler",
    value: "content",
  });
  const setActiveArray = [
    {
      id: 0,
      name: "İçerikler",
      value: "content",
    },
    {
      id: 1,
      name: "Takip",
      value: "followers",
    },
    {
      id: 2,
      name: "Takipçiler",
      value: "following",
    },
  ];

  const handleOnclik = (item) => {
    setActives(item?.id);
    setValue(item);
  };

  useEffect(() => {
    handleOnclik(setActiveArray[0]);
  }, []);

  return (
    <>
      <div className="w-1/2 h-10 max-sm:w-full">
        <div className="w-full h-10 ">
          <div className="flex items-center justify-between w-full">
            {setActiveArray.map((item) => {
              return (
                <button
                  key={item.id}
                  className={
                    value?.value === item.value
                      ? "w-full h-10 bg-blue-400"
                      : "w-full h-10 bg-transparent"
                  }
                  onClick={() => handleOnclik(item)}
                >
                  <span className="btm-nav-label">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        {/* ContentCard & FollowersCard & FollowingCard components */}
        {value?.value === "content" && <ContentCard />}
        {value?.value === "followers" && <FollowersCard />}
        {value?.value === "following" && <FollowingCard />}
      </div>
      {/* ContentCard component */}
      <div style={{ display: "none" }}>
        {/* <Sidebar /> */}
        <div className="">
          <h1 className="text-3xl text-yellow-900">Profile</h1>
        </div>
      </div>
    </>
  );
};
const ContentCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="mt-5 card ">
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <div className="flex flex-row items-center">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <div className="flex flex-col ml-5">
                <span>Levent</span>
                <span>Karakaya</span>
              </div>
            </div>
            <span className="badge badge-secondary">Online</span>
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            velit quam quis voluptates a ex veritatis ipsam animi accusantium
            quasi? Ipsa temporibus quidem voluptas possimus eaque laboriosam
            inventore, facere corrupti.
          </span>
        </div>
        <figure>
          <Image
            src={Resim}
            alt="Shoes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </figure>
      </div>
      <div className="mt-5 card ">
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <div className="flex flex-row items-center">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <div className="flex flex-col">
                <span>Levent</span>
                <span>Karakaya</span>
              </div>
            </div>
            <span className="badge badge-secondary">Online</span>
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            velit quam quis voluptates a ex veritatis ipsam animi accusantium
            quasi? Ipsa temporibus quidem voluptas possimus eaque laboriosam
            inventore, facere corrupti.
          </span>
        </div>
        <figure>
          <Image
            src={Resim}
            alt="Shoes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </figure>
      </div>
      <div className="mt-5 card ">
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <div className="flex flex-row items-center">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <div className="flex flex-col">
                <span>Levent</span>
                <span>Karakaya</span>
              </div>
            </div>
            <span className="badge badge-secondary">Online</span>
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            velit quam quis voluptates a ex veritatis ipsam animi accusantium
            quasi? Ipsa temporibus quidem voluptas possimus eaque laboriosam
            inventore, facere corrupti.
          </span>
        </div>
        <figure>
          <Image
            src={Resim}
            alt="Shoes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </figure>
      </div>
      <div className="mt-5 card ">
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <div className="flex flex-row items-center">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <div className="flex flex-col">
                <span>Levent</span>
                <span>Karakaya</span>
              </div>
            </div>
            <span className="badge badge-secondary">Online</span>
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            velit quam quis voluptates a ex veritatis ipsam animi accusantium
            quasi? Ipsa temporibus quidem voluptas possimus eaque laboriosam
            inventore, facere corrupti.
          </span>
        </div>
        <figure>
          <Image
            src={Resim}
            alt="Shoes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </figure>
      </div>
      <div className="mt-5 card ">
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <div className="flex flex-row items-center">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <div className="flex flex-col">
                <span>Levent</span>
                <span>Karakaya</span>
              </div>
            </div>
            <span className="badge badge-secondary">Online</span>
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            velit quam quis voluptates a ex veritatis ipsam animi accusantium
            quasi? Ipsa temporibus quidem voluptas possimus eaque laboriosam
            inventore, facere corrupti.
          </span>
        </div>
        <figure>
          <Image
            src={Resim}
            alt="Shoes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </figure>
      </div>
      <div className="mt-5 card ">
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <div className="flex flex-row items-center">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <div className="flex flex-col">
                <span>Levent</span>
                <span>Karakaya</span>
              </div>
            </div>
            <span className="badge badge-secondary">Online</span>
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            velit quam quis voluptates a ex veritatis ipsam animi accusantium
            quasi? Ipsa temporibus quidem voluptas possimus eaque laboriosam
            inventore, facere corrupti.
          </span>
        </div>
        <figure>
          <Image
            src={Resim}
            alt="Shoes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </figure>
      </div>
    </div>
  );
};

const FollowersCard = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody className="w-full">
            {/* row 1 */}
            <tr className="flex items-center justify-between">
              <Image
                src={Logo}
                alt="logo"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <td>Levent KARAKAYA</td>
              <td></td>
              <button>Red</button>
            </tr>
            {/* row 2 */}
            <tr className="flex items-center justify-between">
              <Image
                src={Logo}
                alt="logo"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <td>Ogulcan KARAKAYA</td>
              <td></td>
              <button>Red</button>
            </tr>
            {/* row 3 */}
            <tr className="flex items-center justify-between">
              <Image
                src={Logo}
                alt="logo"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <td>Funda KARAKAYA</td>
              <td></td>
              <button>Red</button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const FollowingCard = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody className="w-full">
            {/* row 1 */}
            <tr className="flex items-center justify-between">
              <Image
                src={Logo}
                alt="logo"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <td>Levent KARAKAYA</td>
              <td></td>
              <button>Red</button>
            </tr>
            {/* row 2 */}
            <tr className="flex items-center justify-between">
              <Image
                src={Logo}
                alt="logo"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <td>Ogulcan KARAKAYA</td>
              <td></td>
              <button>Red</button>
            </tr>
            {/* row 3 */}
            <tr className="flex items-center justify-between">
              <Image
                src={Logo}
                alt="logo"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <td>Funda KARAKAYA</td>
              <td></td>
              <button>Red</button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const UserMessage = () => {
  return (
    <>
      <div className={style.messageContainer}>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="leading-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    nam sed non magni eligendi aspernatur rerum ducimus quasi
                    laudantium quam.
                  </span>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    nam sed non magni eligendi aspernatur rerum ducimus quasi
                    laudantium quam.
                  </span>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    nam sed non magni eligendi aspernatur rerum ducimus quasi
                    laudantium quam.
                  </span>
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>
                  <div className="flex ">
                    <button className="px-5 py-2 text-white bg-blue-500 rounded p">
                      mesajlar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
