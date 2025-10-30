"use client";

import React, { useState } from "react";
import { Menu, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/login");
  };
  return (
    <>
      <header className=" sticky top-0 z-50 backdrop-blur border-none rounded-full w-full py-5 px-4">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full  shadow-xl border-gray-800">
          <div className="flex items-center ml-5">
          <img
              src="/acewebxlogo.png"
              alt="Logo"
              className=" w-32 drop-shadow-lg"
            />
            <div className="ml-2 text-lg font-semibold ">

            </div>
            <div className="ml-2 text-sm text-gray-500">
            
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-black hover:text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Button
              // variant="outline"
              className="cursor-pointer bg-[#b82025] !text-white hidden text-black md:inline-flex border-slate-700 hover:bg-red-800 hover:bg-red-500 transition-colors"
              onClick={handleRedirect}
            >
              <LogIn />
              Sign in
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default SiteHeader;
