"use client";
import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "./backgroundbeam";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";
import Link from "next/link";

export function HeroSection() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const hadleRedirect = () => {
    router.push("/login");
  };
  const commandInstall = `npx shadcn@latest init`;
  const handleCommandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <BackgroundBeamsWithCollision>
      <div className="mt-0 flex flex-col justify-center gap-4">
        <h2 className="text-4xl relative w-[80%] mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-center text-[#333333] font-sans tracking-tight">
         The Open Source Foundation Behind
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#b82025] via-red-300 to-[#b82025] py-0">
              <span className=""> Your Design System.</span>
            </div>
            <span></span>
          </div>
        </h2>
        <div className="relative w-full max-w-lg mx-auto">
          <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-[#333333]">
            {/* Copy Button */}

            <Button
              onClick={handleCommandCode}
              className="absolute right-2 top-2 z-10 cursor-pointer bg-[#b82025] !text-white hidden text-black md:inline-flex border-slate-700 hover:bg-red-800 hover:bg-red-500 transition-colors"
              variant="secondary"
              size="sm"
            >
              {copied ? "Copied!" : "Copy"}
            </Button>

            {/* Code Block */}
            <SyntaxHighlighter
              language="bash"
              style={atomOneDark}
              customStyle={{
                margin: 0,
                padding: "1rem 1.5rem",
                fontSize: "0.9rem",
                background: "transparent",
                color:'white'
              }}
            >
              {commandInstall}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-[60%] mx-auto py-2">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              onClick={hadleRedirect}
              className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#b82025] px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl"
            >
              Get Started
            </span>
          </button>
          <button
            onClick={hadleRedirect}
            className="inline-flex h-12 cursor-pointer font-semibold animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            View Components
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
