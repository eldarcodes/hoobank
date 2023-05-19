import { useState } from "react";
import Image from "next/image";

import { navLinks } from "~/utils/constants";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar flex w-full justify-between py-6">
      <Image src="/logo.svg" alt="Hoobank" width={124} height={32} />

      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`${
              index > 0 ? "ml-10" : ""
            } cursor-pointer font-poppins text-[16px] font-normal text-white`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        <Image
          alt="Menu"
          onClick={() => setShowMenu(!showMenu)}
          src={showMenu ? "/close.svg" : "/menu.svg"}
          className="cursor-pointer object-contain"
          width={28}
          height={28}
        />

        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex w-full list-none flex-col items-center justify-center">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${
                  index > 0 ? "mt-2" : ""
                } cursor-pointer font-poppins text-[16px] font-normal text-white`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
