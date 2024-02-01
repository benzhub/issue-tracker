import Link from "next/link";
import React from "react";
import { GrBug } from "react-icons/gr";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="mb-5 flex h-14 items-center space-x-6 border-b px-5">
      <Link href="/">
        <GrBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className="text-zinc-500 transition-colors hover:text-zinc-800"
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
