import Link from "next/link"; //for navigation
import React from "react";
import globals from "../src/app/globals.css";
import Image from "next/image";//for image

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image className ="rounded-2xl" src ="/image.png" width={100} height={25} alt="logo"/>
      </div>
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/listing">Listing</Link>
    </nav>
  );
};

export default Navbar;
