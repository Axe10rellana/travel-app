"use client";

//react
import { useState } from "react";

//next
import Image from "next/image";
import Link from "next/link";

//constants
import { NAV_LINKS } from "../constants";

//components
import { Button } from "./";

const Navbar = () => {
  //variables de estado
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          className="pointer-events-none"
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? "/closeMenu.svg" : "menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-green-90`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1 mb-4">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.key}
                className={`regular-16 cursor-pointer text-[16px] ${
                  index === NAV_LINKS.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
