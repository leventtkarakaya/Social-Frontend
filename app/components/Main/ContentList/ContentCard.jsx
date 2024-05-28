"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import Resim from "@/public/Resim.jpg";
import { Sidebar } from "@/app/components/index";
export default function ContentCard() {
  return (
    <>
      <div className="flex mt-10 md:w-2/3 gap-y-10 ">
        <div className="flex justify-center w-full ">
          <div className="grid w-full grid-cols-2 max-md:px-2 max-lg:grid-cols-1 gap-x-10 gap-y-10 ">
            <div className="w-full shadow-xl card bg-base-100 ">
              <div className="card-body">
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex flex-row items-center gap-5">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus velit quam quis voluptates a ex veritatis ipsam animi
                  accusantium quasi? Ipsa temporibus quidem voluptas possimus
                  eaque laboriosam inventore, facere corrupti.
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
            <div className="w-full shadow-xl card bg-base-100 ">
              <div className="card-body">
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex flex-row items-center gap-5">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus velit quam quis voluptates a ex veritatis ipsam animi
                  accusantium quasi? Ipsa temporibus quidem voluptas possimus
                  eaque laboriosam inventore, facere corrupti.
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
            <div className="w-full shadow-xl card bg-base-100 ">
              <div className="card-body">
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex flex-row items-center gap-5">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus velit quam quis voluptates a ex veritatis ipsam animi
                  accusantium quasi? Ipsa temporibus quidem voluptas possimus
                  eaque laboriosam inventore, facere corrupti.
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
            <div className="w-full shadow-xl card bg-base-100 ">
              <div className="card-body">
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex flex-row items-center gap-5">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus velit quam quis voluptates a ex veritatis ipsam animi
                  accusantium quasi? Ipsa temporibus quidem voluptas possimus
                  eaque laboriosam inventore, facere corrupti.
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
            <div className="w-full shadow-xl card bg-base-100 ">
              <div className="card-body">
                <div className="flex items-center justify-between gap-x-10">
                  <div className="flex flex-row items-center gap-5">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus velit quam quis voluptates a ex veritatis ipsam animi
                  accusantium quasi? Ipsa temporibus quidem voluptas possimus
                  eaque laboriosam inventore, facere corrupti.
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
        </div>
      </div>
    </>
  );
}
