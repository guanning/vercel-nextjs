"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
    { name: "Performance", path: "/performance" },
    { name: "Reliability", path: "/reliability" },
    { name: "Scale", path: "/scale" },
]

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="absolute w-full z-10"> 
          <div className="flex justify-between conntainer mx-auto text-white p-8 items-center">
            <Link className="text-3xl font-bold" href="/">Home</Link>
            <div className="text-xl space-x-4">
              {linkData.map((link) => (
                <Link key={link.name} className={pathname === link.path ? "text-purple-500" : ""} href={link.path}>{link.name}</Link>
              ))}
            </div>
          </div>
        </div>
    )
}