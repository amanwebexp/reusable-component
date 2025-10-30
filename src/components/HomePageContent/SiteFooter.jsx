import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function SiteFooter() {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 bg-gradient-to-r from-[#ffcfcf] via-[#ffffff] to-[#ffcfcf] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 ml-5 lg:pl-20 lg:ml-20">
          <div>
            <h3 className="text-sm font-semibold text-[#333333] tracking-wider uppercase mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Tailwind UI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Headless UI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#333333] tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Screencasts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#333333] tracking-wider uppercase mb-4">
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#333333] tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-700 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
