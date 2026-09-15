"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const linkData = [
    { name: "about", path: "/dashboard/about" },
    { name: "settings", path: "/dashboard/settings" },
  ]
  return (
   <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
     <div className="flex gap-4 font-bold text-lg mb-4">
        {linkData.map((link) => (
          <Link key={link.path} className={pathname === link.path ? "text-purple-500" : ""} href={link.path}>{link.name}</Link>
        ))}
     </div>
     <h2>Dashboard Layout {count}</h2>
     <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Click me & increment count</button>
     {children}
   </div>
  );
}
