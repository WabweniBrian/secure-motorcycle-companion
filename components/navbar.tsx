import React from "react";
import { MainNav } from "./main-nav";
import { Search } from "./search";
import { UserNav } from "./user-nav";
import MobileMenu from "./mobile-menu";
import { getCurrentUser } from "@/lib/auth";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav user={user} />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
