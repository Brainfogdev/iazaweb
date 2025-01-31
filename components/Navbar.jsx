import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 sm:px-20 py-5">
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
      <div>
        <Link
          href={"/contact"}
          className={buttonVariants({ variant: "" })}
        >
          Contact us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
