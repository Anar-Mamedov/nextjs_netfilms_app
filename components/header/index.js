import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
