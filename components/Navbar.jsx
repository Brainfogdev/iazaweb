"use client";
import Link from "next/link";
import React, { useState } from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { XCircle, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  return (
    <header className="flex relative justify-between items-center px-5 sm:px-20 py-5">
      <Link href={"/"}>
        <Image height={90} width={90} src="/iaza-logo.png" alt="logo" />
      </Link>
      <nav className="hidden sm:flex justify-between gap-3">
        <Link href={"/"} className={buttonVariants({ variant: "ghost" })}>
          Home
        </Link>
        <Link href={"/about"} className={buttonVariants({ variant: "ghost" })}>
          About us
        </Link>
        <Link
          href={"/products"}
          className={buttonVariants({ variant: "ghost" })}
        >
          Product
        </Link>
        <Link
          href={"/our-client"}
          className={buttonVariants({ variant: "ghost" })}
        >
          Clients & Accreditation
        </Link>
        <Link href={"/career"} className={buttonVariants({ variant: "ghost" })}>
          Career
        </Link>
      </nav>
      <div className="">
        <Link
          href={"/contact"}
          className={cn(buttonVariants({ variant: "" }), "hidden sm:flex")}
        >
          Contact us
        </Link>
        <div className="bg-white flex sm:hidden ">
          <div className="p-3  bg-slate-200 rounded-md">
            <Menu
              onClick={() => {
                setMobile(true);
              }}
              className=""
            />
          </div>
          {isMobile && (
            <div className="absolute p-5 shadow-2xl h-screen bg-white w-[300px] top-0 right-0">
              <div className="flex justify-end">
                <XCircle
                  size={30}
                  onClick={() => {
                    setMobile(false);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <Link
                  href={"/"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Home
                </Link>
                <Link
                  href={"/about"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  About us
                </Link>
                <Link
                  href={"/products"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Product
                </Link>
                <Link
                  href={"/our-client"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Clients & Accreditation
                </Link>
                <Link
                  href={"/career"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Career
                </Link>
                <Link
                  href={"/contact"}
                  className={cn(
                    buttonVariants({ variant: "" }),
                    ""
                  )}
                >
                  Contact us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
